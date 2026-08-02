"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getProvinceById,
  getProvincesByRegion,
  getRegionById,
  getRoutesByProvince,
  routes,
} from "@/content";
import type { ProvinceId } from "@/content/provinces";
import type { RegionId, Route, RouteTheme, Season, TripType } from "@/content/types";
import {
  createEquirectangularProjection,
  expandBBox,
  featureBBox,
  geometryToPath,
  labelPoint,
  loadChinaProvinceFeatures,
  mergeBBoxes,
  resolveProvinceId,
  simplifyGeometry,
  type ChinaProvinceFeature,
} from "@/lib/china-geo";
import {
  SEASON_FULL_LABELS,
  THEME_LABELS,
  TRIP_TYPE_LABELS,
} from "@/lib/labels";
import { searchRoutes } from "@/lib/route-search";
import { getSeasonNow } from "@/lib/season-now";
import { RegionMap } from "./RegionMap";
import { RouteCardGrid } from "./RouteCard";

const SEARCH_DEBOUNCE_MS = 180;

type MapLevel =
  | { kind: "china" }
  | { kind: "region"; regionId: RegionId }
  | { kind: "province"; regionId: RegionId; provinceId: ProvinceId };

function routeMatches(
  route: Route,
  opts: {
    season?: Season;
    tripType?: TripType;
    fromHomeOnly?: boolean;
    theme?: RouteTheme;
  },
) {
  if (opts.season && !route.seasons.includes(opts.season)) return false;
  if (opts.tripType && route.tripType !== opts.tripType) return false;
  if (opts.fromHomeOnly && !route.fromHome) return false;
  if (opts.theme && !route.themes?.includes(opts.theme)) return false;
  return true;
}

export function ChinaMapExplorer() {
  const currentSeason = getSeasonNow();
  // Default: no season filter — parents searching famous places (婺源春/厦鼓冬/乐山春秋)
  // must not land on an empty map just because「当季」was pre-selected.
  const [season, setSeason] = useState<Season | undefined>(undefined);
  const [tripType, setTripType] = useState<TripType | undefined>(undefined);
  const [fromHomeOnly, setFromHomeOnly] = useState(false);
  const [theme, setTheme] = useState<RouteTheme | undefined>(undefined);
  const [level, setLevel] = useState<MapLevel>({ kind: "china" });
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const t = window.setTimeout(() => {
      setSearchQuery(searchInput);
    }, SEARCH_DEBOUNCE_MS);
    return () => window.clearTimeout(t);
  }, [searchInput]);

  const filterOpts = useMemo(
    () => ({ season, tripType, fromHomeOnly, theme }),
    [season, tripType, fromHomeOnly, theme],
  );

  const searchHits = useMemo(
    () => searchRoutes(routes, searchQuery),
    [searchQuery],
  );
  const searchActive = searchQuery.trim().length > 0;

  const beijingShortActive = fromHomeOnly && tripType === "short";
  const currentSeasonActive = season === currentSeason;
  const themeActive = theme !== undefined;
  const shortcutActive =
    beijingShortActive || currentSeasonActive || themeActive;
  const filtersDirty =
    fromHomeOnly ||
    tripType !== undefined ||
    season !== undefined ||
    theme !== undefined;

  const themedRoutes = useMemo(
    () => routes.filter((r) => routeMatches(r, filterOpts) && r.themes?.length),
    [filterOpts],
  );

  const regionMeta =
    level.kind === "china" ? undefined : getRegionById(level.regionId);

  const provinceMeta =
    level.kind === "province" ? getProvinceById(level.provinceId) : undefined;

  const regionProvinces = useMemo(() => {
    if (level.kind === "china") return [];
    return getProvincesByRegion(level.regionId).filter((p) => {
      const rs = getRoutesByProvince(p.id, season).filter((r) =>
        routeMatches(r, filterOpts),
      );
      return rs.length > 0;
    });
  }, [level, season, filterOpts]);

  const provinceRoutes = useMemo(() => {
    if (level.kind !== "province") return [];
    return getRoutesByProvince(level.provinceId, season).filter((r) =>
      routeMatches(r, filterOpts),
    );
  }, [level, season, filterOpts]);

  const regionRouteCount = useMemo(() => {
    if (level.kind === "china") return 0;
    return routes.filter(
      (r) => r.region === level.regionId && routeMatches(r, filterOpts),
    ).length;
  }, [level, filterOpts]);

  /** Regions with ≥1 matching route under current filters; only used when filters are active. */
  const regionsWithRoutes = useMemo(() => {
    if (!filtersDirty) return undefined;
    const ids = new Set<RegionId>();
    for (const r of routes) {
      if (routeMatches(r, filterOpts)) ids.add(r.region);
    }
    return ids;
  }, [filtersDirty, filterOpts]);

  function goChina() {
    setLevel({ kind: "china" });
  }

  function goRegion(regionId: RegionId) {
    setLevel({ kind: "region", regionId });
  }

  function goProvince(regionId: RegionId, provinceId: ProvinceId) {
    setLevel({ kind: "province", regionId, provinceId });
  }

  function applyBeijingShort() {
    if (beijingShortActive) {
      setFromHomeOnly(false);
      setTripType(undefined);
      return;
    }
    setFromHomeOnly(true);
    setTripType("short");
  }

  function applyCurrentSeason() {
    if (currentSeasonActive) {
      setSeason(undefined);
      return;
    }
    setSeason(currentSeason);
  }

  function clearFilters() {
    setSeason(undefined);
    setTripType(undefined);
    setFromHomeOnly(false);
    setTheme(undefined);
  }

  function clearSearch() {
    setSearchInput("");
    setSearchQuery("");
  }

  function filterStatusText() {
    const parts: string[] = [];
    parts.push(season ? SEASON_FULL_LABELS[season] : "不限季节");
    if (tripType) parts.push(TRIP_TYPE_LABELS[tripType]);
    if (fromHomeOnly) parts.push("从北京出发");
    if (theme) parts.push(THEME_LABELS[theme]);
    return parts.join(" · ");
  }

  function toggleTheme(next: RouteTheme) {
    setTheme((prev) => {
      if (prev === next) return undefined;
      // 主题列表优先完整展示，避免「当季」把跨季大环线筛没
      setSeason(undefined);
      return next;
    });
    setLevel({ kind: "china" });
  }

  /** Region/province/theme list: hide filters; entry keeps filters + map. */
  const resultsMode = level.kind !== "china" || theme !== undefined;
  const themeListMode = level.kind === "china" && theme !== undefined;

  function exitResults() {
    if (searchActive) {
      clearSearch();
      return;
    }
    if (level.kind !== "china") {
      goChina();
      return;
    }
    if (theme) setTheme(undefined);
  }

  const resultsTitle = searchActive
    ? `搜索 · ${searchHits.length} 条`
    : themeListMode
      ? `${THEME_LABELS[theme!]} · 选路线`
      : level.kind === "province" && provinceMeta
        ? `${provinceMeta.name} · 选路线`
        : `${regionMeta?.name ?? ""} · 选省份`;

  return (
    <div className="space-y-1.5 sm:space-y-2.5">
      {/* Search is always available — parents often know a city/spot name */}
      <div
        className={
          searchActive || resultsMode
            ? "sticky top-0 z-20 -mx-4 border-b border-sky-200/50 bg-[color-mix(in_srgb,var(--background)_94%,white)] px-4 py-2 backdrop-blur-md sm:mx-0 sm:rounded-b-xl sm:px-0"
            : "rounded-2xl bg-white/85 px-2.5 py-2 shadow-sm ring-1 ring-sky-900/6 sm:px-3.5 sm:py-2.5"
        }
      >
        {(searchActive || resultsMode) && (
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={exitResults}
              aria-label="返回"
              className="inline-flex min-h-9 shrink-0 items-center gap-1 rounded-lg bg-sky-800 px-3 text-sm font-semibold text-white hover:bg-sky-900"
            >
              <span aria-hidden>←</span>
              返回
            </button>
            {!searchActive && level.kind === "province" && regionMeta ? (
              <button
                type="button"
                onClick={() => goRegion(level.regionId)}
                aria-label={`上一级，${regionMeta.name}`}
                className="inline-flex min-h-9 shrink-0 items-center rounded-lg bg-white px-3 text-sm font-semibold text-sky-900 ring-1 ring-sky-300 hover:bg-sky-50"
              >
                上一级
              </button>
            ) : null}
            <div className="min-w-0 flex-1">
              <p className="font-display text-base font-bold leading-snug text-sky-950 sm:text-lg">
                {resultsTitle}
              </p>
              <p className="truncate text-sm text-sky-700/90 sm:text-base">
                {searchActive
                  ? `关键词「${searchQuery.trim()}」`
                  : filterStatusText()}
                {!searchActive && level.kind === "province" && regionMeta ? (
                  <span className="text-sky-600"> · {regionMeta.name}</span>
                ) : null}
              </p>
            </div>
          </div>
        )}
        <label className="block">
          <span className="sr-only">搜索路线</span>
          <div className="flex items-stretch gap-2">
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="搜索城市、景点或路线"
              enterKeyHint="search"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className="min-h-11 w-full flex-1 rounded-xl border-0 bg-white px-3.5 text-[1.05rem] text-sky-950 shadow-sm ring-1 ring-sky-900/10 placeholder:text-sky-500/80 focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
            {searchInput ? (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="清除搜索"
                className="inline-flex min-h-11 shrink-0 items-center rounded-xl bg-white px-3 text-sm font-semibold text-sky-900 ring-1 ring-sky-300 hover:bg-sky-50"
              >
                清除
              </button>
            ) : null}
          </div>
        </label>
        {/* Entry: primary theme chips sit with search as one first-viewport band */}
        {!searchActive && !resultsMode ? (
          <div className="mt-1.5 border-t border-sky-100/80 pt-1.5">
            <PrimaryShortcutChips
              beijingShortActive={beijingShortActive}
              theme={theme}
              onBeijingShort={applyBeijingShort}
              onTheme={toggleTheme}
            />
          </div>
        ) : null}
      </div>

      {searchActive ? (
        <section aria-label="搜索结果" className="space-y-2">
          {searchHits.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-sky-300/80 bg-white/60 px-4 py-10 text-center text-lg leading-relaxed text-sky-800">
              没有找到「{searchQuery.trim()}」相关路线。
              <span className="mt-2 block text-base text-sky-700">
                可试城市名、景点名，或点清除后用地图选大区。
              </span>
            </p>
          ) : (
            <RouteCardGrid routes={searchHits} aria-label="搜索结果路线" />
          )}
        </section>
      ) : null}

      {!searchActive && !resultsMode ? (
        <section
          aria-label="路线筛选"
          className="rounded-2xl bg-white/70 px-2 py-1.5 ring-1 ring-sky-900/5 sm:px-4 sm:py-2"
        >
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 sm:gap-x-3 sm:gap-y-1.5">
            <span className="font-display shrink-0 text-sm font-semibold text-orange-950 sm:text-base">
              季节
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              <FilterChip
                active={!season}
                onClick={() => setSeason(undefined)}
                label="全部"
                ariaLabel="全部季节"
                tone="orange"
              />
              {(Object.entries(SEASON_FULL_LABELS) as [Season, string][]).map(
                ([id, label]) => (
                  <FilterChip
                    key={id}
                    active={season === id}
                    onClick={() => setSeason(season === id ? undefined : id)}
                    label={label}
                    tone="orange"
                  />
                ),
              )}
            </div>
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 border-t border-sky-100/80 pt-1 sm:mt-1.5 sm:gap-x-3 sm:gap-y-1.5 sm:pt-1.5">
            <span className="font-display shrink-0 text-sm font-semibold text-amber-950 sm:text-base">
              长短
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              <FilterChip
                active={!tripType}
                onClick={() => setTripType(undefined)}
                label="全部"
                ariaLabel="全部行程类型"
                tone="amber"
              />
              {(Object.entries(TRIP_TYPE_LABELS) as [TripType, string][]).map(
                ([id, label]) => (
                  <FilterChip
                    key={id}
                    active={tripType === id}
                    onClick={() => {
                      const next = tripType === id ? undefined : id;
                      setTripType(next);
                      if (next !== "short") setFromHomeOnly(false);
                    }}
                    label={label === "长旅行" ? "长线" : label}
                    tone="amber"
                  />
                ),
              )}
            </div>
          </div>

          {/* Secondary shortcuts under 更多 on phone; desktop shows inline */}
          <div className="mt-1 border-t border-sky-100/80 pt-1 sm:mt-1.5 sm:pt-1.5">
            <details className="group sm:hidden">
              <summary className="flex min-h-8 cursor-pointer list-none items-center gap-1 text-sm font-semibold text-sky-800 marker:content-none [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden
                  className="text-sky-500 transition-transform group-open:rotate-90"
                >
                  ▸
                </span>
                更多筛选
                {currentSeasonActive ||
                theme === "grand-loop" ||
                theme === "frontier" ? (
                  <span className="font-medium text-emerald-800">· 已启用</span>
                ) : null}
              </summary>
              <MoreShortcutChips
                currentSeasonActive={currentSeasonActive}
                currentSeason={currentSeason}
                theme={theme}
                filtersDirty={filtersDirty}
                onCurrentSeason={applyCurrentSeason}
                onTheme={toggleTheme}
                onClear={clearFilters}
              />
            </details>
            <div className="hidden sm:block">
              <MoreShortcutChips
                currentSeasonActive={currentSeasonActive}
                currentSeason={currentSeason}
                theme={theme}
                filtersDirty={filtersDirty}
                onCurrentSeason={applyCurrentSeason}
                onTheme={toggleTheme}
                onClear={clearFilters}
              />
            </div>
          </div>

          <p className="mt-0.5 hidden text-base leading-snug text-sky-800/75 sm:mt-1 sm:block">
            当前：{filterStatusText()}
            {shortcutActive ? "（快捷已启用）" : ""}
            。可搜索城市/景点，或先在地图点地区，再选省份与路线。
          </p>
        </section>
      ) : null}

      {/* —— 全国：筛选 + 地图同一构图 —— */}
      {!searchActive && level.kind === "china" && !themeListMode && (
        <section className="space-y-2 sm:space-y-3">
          <div>
            <h2 className="font-display text-base font-bold tracking-tight text-sky-950 sm:text-2xl">
              <span className="sm:hidden">点地图选大区</span>
              <span className="hidden sm:inline">① 点击中国地图选大区</span>
            </h2>
            <p className="mt-0.5 hidden text-base text-sky-700/90 sm:block">
              在地图上点选大区；省份与路线会出现在地图下方。
            </p>
            <div className="mt-1.5 sm:mt-2">
              <RegionMap
                compact
                selected={undefined}
                regionsWithRoutes={regionsWithRoutes}
                onSelect={(id) => {
                  if (id) goRegion(id);
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* —— 主题列表（大环线 / 边陲）：与地图钻取同样隐藏筛选 —— */}
      {!searchActive && themeListMode && theme ? (
        <section className="space-y-3">
          <div>
            <h2 className="font-display text-xl font-bold text-sky-950">
              {THEME_LABELS[theme]}
              <span className="ml-2 font-sans text-base font-medium text-sky-700">
                · {themedRoutes.length} 条
              </span>
            </h2>
            <p className="mt-1 max-w-2xl text-base leading-relaxed text-sky-800/90">
              {theme === "famous-scenic"
                ? "名景专线：梵净荔波、神农恩施、西江肇兴、潮汕兰州黄河、中山惠州，以及武夷北海普陀、泰山曲阜、开平丹霞、九华千岛湖、武隆黄果树、九寨婺源厦鼓等；点标题即可，不必先钻地图。"
                : theme === "grand-loop"
                  ? "跨省慢环：拆段走、日驾短、段末可回京；不是特种兵一天一千公里。"
                  : theme === "frontier"
                    ? "边陲城市短住：看口岸与边境风光，不涉越境；规定以当地公告为准。"
                    : theme === "corridor"
                      ? "经典走廊浅段：318/江南水乡等只走适老可控段；高原走廊写清海拔与可跳过。"
                      : "长居慢住：空气相对清新、周边自然与日归丰富；约三四周节奏，不是赶景点清单。"}
            </p>
          </div>
          <RouteCardGrid
            routes={themedRoutes}
            aria-label={`${THEME_LABELS[theme]}路线`}
          />
        </section>
      ) : null}

      {/* —— 大区：点省份 —— */}
      {!searchActive && level.kind === "region" && regionMeta && (
        <section className="space-y-3">
          <div className="min-w-0 max-w-2xl">
            <h2 className="font-display text-xl font-bold tracking-tight text-sky-950 sm:text-2xl">
              ② {regionMeta.name} · 选择省份
            </h2>
            <p className="mt-0.5 text-base leading-snug text-sky-700">
              {regionMeta.blurb}
              {regionRouteCount > 0
                ? ` 本区当前筛选下共 ${regionRouteCount} 条路线。`
                : " 当前筛选本区暂无路线，请点「返回」后改条件。"}
            </p>
          </div>

          <ProvinceRegionMap
            regionId={level.regionId}
            provinces={regionProvinces}
            filterOpts={filterOpts}
            onSelectProvince={(pid) => goProvince(level.regionId, pid)}
          />

          {regionProvinces.length === 0 ? (
            <p className="border border-dashed border-sky-300/80 bg-white/50 px-4 py-8 text-center text-lg text-sky-700">
              当前筛选下该大区还没有匹配路线，请点「返回」后改季节或清除筛选。
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {regionProvinces.map((p) => {
                const n = getRoutesByProvince(p.id, season).filter((r) =>
                  routeMatches(r, filterOpts),
                ).length;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => goProvince(level.regionId, p.id)}
                    className="min-h-11 rounded-xl bg-emerald-50/80 px-3 py-2 text-left ring-1 ring-emerald-200/70 hover:bg-emerald-100/80 hover:ring-emerald-400 sm:px-4"
                  >
                    <span className="font-display text-lg font-bold text-emerald-950">
                      {p.name}
                    </span>
                    <span className="mt-0.5 block text-base text-emerald-800">
                      {n} 条路线 · 点击进入
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* —— 省份：路线列表 —— */}
      {!searchActive && level.kind === "province" && provinceMeta && (
        <section className="space-y-3">
          <div className="min-w-0 max-w-2xl">
            <h2 className="font-display text-xl font-bold tracking-tight text-sky-950 sm:text-2xl">
              ③ {provinceMeta.name} · 选择路线
            </h2>
            <p className="mt-0.5 text-base text-sky-700">
              点开进入详细旅行攻略（介绍、须知、地图、景点图）。
            </p>
          </div>

          {provinceRoutes.length === 0 ? (
            <p className="border border-dashed border-sky-300/80 bg-white/50 px-4 py-8 text-center text-lg text-sky-700">
              该省在当前筛选下没有路线，请点「返回」后更换条件。
            </p>
          ) : (
            <RouteCardGrid
              routes={provinceRoutes}
              aria-label={`${provinceMeta.name}路线`}
            />
          )}
        </section>
      )}
    </div>
  );
}

function PrimaryShortcutChips({
  beijingShortActive,
  theme,
  onBeijingShort,
  onTheme,
}: {
  beijingShortActive: boolean;
  theme?: RouteTheme;
  onBeijingShort: () => void;
  onTheme: (t: RouteTheme) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      <FilterChip
        active={beijingShortActive}
        onClick={onBeijingShort}
        label="从北京短途"
        tone="emerald"
      />
      <FilterChip
        active={theme === "famous-scenic"}
        onClick={() => onTheme("famous-scenic")}
        label="名景"
        tone="amber"
      />
      <FilterChip
        active={theme === "long-stay"}
        onClick={() => onTheme("long-stay")}
        label="长居"
        tone="amber"
      />
      <FilterChip
        active={theme === "corridor"}
        onClick={() => onTheme("corridor")}
        label="走廊"
        tone="amber"
      />
    </div>
  );
}

function MoreShortcutChips({
  currentSeasonActive,
  currentSeason,
  theme,
  filtersDirty,
  onCurrentSeason,
  onTheme,
  onClear,
}: {
  currentSeasonActive: boolean;
  currentSeason: Season;
  theme?: RouteTheme;
  filtersDirty: boolean;
  onCurrentSeason: () => void;
  onTheme: (t: RouteTheme) => void;
  onClear: () => void;
}) {
  return (
    <div className="mt-1 flex flex-wrap gap-1">
      <FilterChip
        active={currentSeasonActive}
        onClick={onCurrentSeason}
        label={`当季（${SEASON_FULL_LABELS[currentSeason]}）`}
        tone="emerald"
      />
      <FilterChip
        active={theme === "grand-loop"}
        onClick={() => onTheme("grand-loop")}
        label="大环线"
        tone="amber"
      />
      <FilterChip
        active={theme === "frontier"}
        onClick={() => onTheme("frontier")}
        label="边陲"
        tone="amber"
      />
      {filtersDirty ? (
        <button
          type="button"
          onClick={onClear}
          className="min-h-9 rounded-lg px-2 py-1 text-sm font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-sky-950"
        >
          清除筛选
        </button>
      ) : null}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  ariaLabel,
  tone,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  ariaLabel?: string;
  tone: "orange" | "amber" | "emerald";
}) {
  const activeClass =
    tone === "orange"
      ? "bg-orange-600 text-white"
      : tone === "amber"
        ? "bg-amber-600 text-white"
        : "bg-emerald-700 text-white";
  const idleClass =
    tone === "orange"
      ? "bg-white text-orange-950 ring-1 ring-orange-200 hover:bg-orange-100"
      : tone === "amber"
        ? "bg-white text-amber-950 ring-1 ring-amber-200 hover:bg-amber-50"
        : "bg-white text-emerald-950 ring-1 ring-emerald-200 hover:bg-emerald-50";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={ariaLabel}
      className={`min-h-9 rounded-lg px-2.5 py-1 text-sm font-semibold transition-colors sm:min-h-10 sm:px-3 sm:text-base ${
        active ? activeClass : idleClass
      }`}
    >
      {label}
    </button>
  );
}

function shortProvinceLabel(name: string) {
  return name
    .replace(/(壮族自治区|回族自治区|维吾尔自治区|自治区|特别行政区)$/, "")
    .replace(/(省|市)$/, "")
    .slice(0, 3);
}

function ProvinceRegionMap({
  regionId,
  provinces,
  filterOpts,
  onSelectProvince,
}: {
  regionId: RegionId;
  provinces: ReturnType<typeof getProvincesByRegion>;
  filterOpts: {
    season?: Season;
    tripType?: TripType;
    fromHomeOnly?: boolean;
    theme?: RouteTheme;
  };
  onSelectProvince: (id: ProvinceId) => void;
}) {
  const region = getRegionById(regionId);
  const selectable = useMemo(
    () => new Set(provinces.map((p) => p.id)),
    [provinces],
  );
  const allInRegion = useMemo(
    () => getProvincesByRegion(regionId),
    [regionId],
  );

  const [features, setFeatures] = useState<ChinaProvinceFeature[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadChinaProvinceFeatures()
      .then((f) => {
        if (!cancelled) setFeatures(f);
      })
      .catch(() => {
        /* ignore */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const VIEW_W = 640;
  const VIEW_H = 520;

  const paths = useMemo(() => {
    if (!features) return [];
    const regionFeatures = features.filter((f) => {
      const id = resolveProvinceId(f.properties);
      return id && allInRegion.some((p) => p.id === id);
    });
    const bbox =
      regionFeatures.length > 0
        ? expandBBox(mergeBBoxes(regionFeatures.map(featureBBox)), 0.1)
        : {
            minLng: 73.5,
            maxLng: 135,
            minLat: 18,
            maxLat: 53.6,
          };
    const project = createEquirectangularProjection(
      bbox,
      VIEW_W,
      VIEW_H,
      20,
    );
    return features
      .map((f) => {
        const provinceId = resolveProvinceId(f.properties) ?? null;
        const inRegion = Boolean(
          provinceId && allInRegion.some((p) => p.id === provinceId),
        );
        return {
          key: String(f.properties.adcode),
          provinceId,
          name: f.properties.name,
          d: geometryToPath(simplifyGeometry(f.geometry, 6), project),
          label: labelPoint(f, project),
          inRegion,
        };
      })
      .filter((p) => p.d.length > 0);
  }, [features, allInRegion]);

  return (
    <div className="rounded-2xl bg-gradient-to-br from-sky-50/90 via-white/70 to-emerald-50/50 p-2.5 ring-1 ring-sky-900/8 sm:p-3">
      <p className="mb-2 text-center text-base text-sky-800">
        {region?.name}省份地图 · 点击高亮省份进入
      </p>
      {!features && (
        <p className="mb-2 text-center text-base text-sky-700">地图加载中…</p>
      )}
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="mx-auto max-h-[min(36vh,260px)] w-full max-w-[min(100%,20rem)] sm:max-h-[min(38vh,280px)] sm:max-w-md"
        role="img"
        aria-label={`${region?.name}省份地图`}
      >
        <rect
          x={0}
          y={0}
          width={VIEW_W}
          height={VIEW_H}
          rx={8}
          fill="#e0f2fe"
        />
        {paths.map((p) => {
          const active = Boolean(
            p.provinceId && selectable.has(p.provinceId) && p.inRegion,
          );
          const dim = !p.inRegion;
          const n =
            p.provinceId && active
              ? getRoutesByProvince(p.provinceId, filterOpts.season).filter(
                  (r) => routeMatches(r, filterOpts),
                ).length
              : 0;
          return (
            <g key={p.key}>
              <path
                d={p.d}
                fill={dim ? "#e2e8f0" : active ? "#047857" : "#a7f3d0"}
                stroke={dim ? "#cbd5e1" : "#065f46"}
                strokeWidth={dim ? 0.6 : 1.4}
                opacity={dim ? 0.4 : 1}
                className={
                  active
                    ? "cursor-pointer transition-colors hover:fill-emerald-600"
                    : undefined
                }
                onClick={() => {
                  if (p.provinceId && active) onSelectProvince(p.provinceId);
                }}
                role={active ? "button" : undefined}
                tabIndex={active ? 0 : undefined}
                aria-label={
                  p.provinceId && active
                    ? `${p.name}，${n}条路线`
                    : p.name || undefined
                }
                onKeyDown={(e) => {
                  if (!p.provinceId || !active) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectProvince(p.provinceId);
                  }
                }}
              />
              {p.inRegion && p.provinceId && (
                <>
                  <text
                    x={p.label.x}
                    y={p.label.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pointer-events-none fill-white text-[15px] font-bold"
                    style={{
                      paintOrder: "stroke",
                      stroke: active ? "#064e3b" : "#047857",
                      strokeWidth: 3,
                    }}
                  >
                    {shortProvinceLabel(p.name || getProvinceById(p.provinceId)?.name || "")}
                  </text>
                  {active && (
                    <text
                      x={p.label.x}
                      y={p.label.y + 18}
                      textAnchor="middle"
                      className="pointer-events-none fill-emerald-950 text-[13px] font-semibold"
                      style={{
                        paintOrder: "stroke",
                        stroke: "#fff",
                        strokeWidth: 3,
                      }}
                    >
                      {n}条
                    </text>
                  )}
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
