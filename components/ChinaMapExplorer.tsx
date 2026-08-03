"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  catalogRoutes as routes,
  getCatalogRoutesByProvince as getRoutesByProvince,
  getProvinceById,
  getProvincesByRegion,
  getRegionById,
  regions,
} from "@/lib/explore-catalog";
import type { ProvinceId } from "@/content/provinces";
import type { RegionId, Route, RouteTheme, Season, TripType } from "@/content/types";
import {
  REGION_SHORT,
  SEASON_FULL_LABELS,
  THEME_LABELS,
  TRIP_TYPE_LABELS,
} from "@/lib/labels";
import { searchRoutes } from "@/lib/route-search";
import { RouteCardGrid } from "./RouteCard";

const SEARCH_DEBOUNCE_MS = 180;
/** Hide-on-scroll hysteresis — transform only, never collapse height. */
const SCROLL_HIDE_DY = 28;
const SCROLL_SHOW_DY = 28;
const SCROLL_HIDE_Y = 72;
const SCROLL_SHOW_Y = 40;

type OpenDim = "season" | "trip" | "theme" | "region" | null;

const THEME_ORDER: RouteTheme[] = [
  "famous-scenic",
  "long-stay",
  "corridor",
  "grand-loop",
  "frontier",
];

const THEME_CHIP_LABELS: Record<RouteTheme, string> = {
  "famous-scenic": "名景",
  "grand-loop": "大环线",
  frontier: "边陲",
  "long-stay": "长居",
  corridor: "走廊",
};

function routeMatches(
  route: Route,
  opts: {
    season?: Season;
    tripType?: TripType;
    theme?: RouteTheme;
    regionId?: RegionId;
    provinceId?: ProvinceId;
  },
) {
  if (opts.season && !route.seasons.includes(opts.season)) return false;
  if (opts.tripType && resolvedTripType(route) !== opts.tripType) return false;
  if (opts.theme && !route.themes?.includes(opts.theme)) return false;
  if (opts.provinceId) {
    return (
      route.primaryProvince === opts.provinceId ||
      route.provinces?.includes(opts.provinceId) === true
    );
  }
  if (opts.regionId && route.region !== opts.regionId) return false;
  return true;
}

/** Prefer compositionKind (leg/compose) when present; else tripType. */
function resolvedTripType(route: Route): TripType {
  if (route.compositionKind === "leg") return "short";
  if (route.compositionKind === "compose") return "long";
  if (route.compositionKind === "base") return "long";
  return route.tripType;
}

function shortProvinceName(name: string) {
  return name
    .replace(/(壮族自治区|回族自治区|维吾尔自治区|自治区|特别行政区)$/, "")
    .replace(/(省|市)$/, "");
}

export function ChinaMapExplorer() {
  /** Defaults: 全季节 / 全部长短 / 全部主题 / 全部地区. */
  const [season, setSeason] = useState<Season | undefined>(undefined);
  const [tripType, setTripType] = useState<TripType | undefined>(undefined);
  const [theme, setTheme] = useState<RouteTheme | undefined>(undefined);
  const [regionId, setRegionId] = useState<RegionId | undefined>(undefined);
  const [provinceId, setProvinceId] = useState<ProvinceId | undefined>(
    undefined,
  );
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [openDim, setOpenDim] = useState<OpenDim>(null);
  /**
   * Single sticky chrome hide flag. Transform-only (no max-h / flow collapse)
   * so scrollY doesn't thrash when hiding/showing.
   */
  const [chromeHidden, setChromeHidden] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setSearchQuery(searchInput);
    }, SEARCH_DEBOUNCE_MS);
    return () => window.clearTimeout(t);
  }, [searchInput]);

  useEffect(() => {
    if (openDim) setChromeHidden(false);
  }, [openDim]);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        if (openDim) {
          setChromeHidden(false);
          lastY = window.scrollY;
          return;
        }
        const y = window.scrollY;
        const dy = y - lastY;
        if (Math.abs(dy) < SCROLL_HIDE_DY) return;
        if (dy > SCROLL_HIDE_DY && y > SCROLL_HIDE_Y) {
          setChromeHidden(true);
        } else if (dy < -SCROLL_SHOW_DY || y < SCROLL_SHOW_Y) {
          setChromeHidden(false);
        }
        lastY = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [openDim]);

  const filterOpts = useMemo(
    () => ({ season, tripType, theme, regionId, provinceId }),
    [season, tripType, theme, regionId, provinceId],
  );

  const searchHits = useMemo(
    () => searchRoutes(routes, searchQuery),
    [searchQuery],
  );
  const searchActive = searchQuery.trim().length > 0;

  const catalogRoutes = useMemo(() => {
    const matched = routes.filter((r) => routeMatches(r, filterOpts));
    return [...matched].sort((a, b) => {
      const af = a.themes?.includes("famous-scenic") ? 0 : 1;
      const bf = b.themes?.includes("famous-scenic") ? 0 : 1;
      if (af !== bf) return af - bf;
      const ah = a.fromHome || a.fromZhengzhouHome ? 0 : 1;
      const bh = b.fromHome || b.fromZhengzhouHome ? 0 : 1;
      return ah - bh;
    });
  }, [filterOpts]);

  const regionMeta = regionId ? getRegionById(regionId) : undefined;
  const provinceMeta = provinceId ? getProvinceById(provinceId) : undefined;

  function clearSearch() {
    setSearchInput("");
    setSearchQuery("");
  }

  function clearRegion() {
    setRegionId(undefined);
    setProvinceId(undefined);
  }

  function resetCatalogDefaults() {
    setSeason(undefined);
    setTripType(undefined);
    setTheme(undefined);
    clearRegion();
  }

  function exitToAll() {
    clearSearch();
    resetCatalogDefaults();
    setOpenDim(null);
  }

  const hasExtraScope =
    searchActive ||
    regionId !== undefined ||
    provinceId !== undefined ||
    tripType !== undefined ||
    theme !== undefined ||
    season !== undefined;

  const showExitBack = hasExtraScope;

  const resultsTitle = searchActive
    ? `搜索 · ${searchHits.length} 条`
    : provinceMeta
      ? `${shortProvinceName(provinceMeta.name)} · ${catalogRoutes.length} 条`
      : regionMeta
        ? `${REGION_SHORT[regionMeta.id]} · ${catalogRoutes.length} 条`
        : theme
          ? `${THEME_CHIP_LABELS[theme]} · ${catalogRoutes.length} 条`
          : `全部景点 · ${catalogRoutes.length} 条`;

  const catalogClean =
    !searchActive &&
    regionId === undefined &&
    provinceId === undefined &&
    season === undefined &&
    tripType === undefined &&
    theme === undefined;

  const chromeOff = chromeHidden;

  const themeBlurb =
    theme === "famous-scenic"
      ? "名景专线：点标题即可进入攻略。"
      : theme === "grand-loop"
        ? "跨省慢环：拆段走、日驾短、段末可回京。"
        : theme === "frontier"
          ? "边陲城市短住：看口岸与边境风光，不涉越境。"
          : theme === "corridor"
            ? "经典走廊浅段：只走可控段；高原走廊写清海拔与可跳过。"
            : theme === "long-stay"
              ? "长居慢住：约三四周节奏。枢纽卡写清三门槛（进出交通·物资·本地三甲）；景点正文在周边短线，不是赶清单。"
              : null;

  return (
    <div className="space-y-2 sm:space-y-3">
      <div
        className={`sticky top-0 z-20 -mx-4 border-b border-sky-200/50 bg-[color-mix(in_srgb,var(--background)_94%,white)] px-4 py-1.5 backdrop-blur-md transition-transform duration-200 ease-out sm:mx-0 sm:rounded-b-xl sm:px-0 ${
          chromeOff
            ? "pointer-events-none -translate-y-full"
            : "translate-y-0"
        }`}
        aria-hidden={chromeOff || undefined}
      >
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
              tabIndex={chromeOff ? -1 : undefined}
              className="min-h-10 w-full flex-1 rounded-xl border-0 bg-white px-3.5 text-[1.02rem] text-sky-950 shadow-sm ring-1 ring-sky-900/10 placeholder:text-sky-500/75 focus:outline-none focus:ring-2 focus:ring-sky-600 sm:min-h-11"
            />
            {searchInput ? (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="清除搜索"
                tabIndex={chromeOff ? -1 : undefined}
                className="inline-flex min-h-10 shrink-0 items-center rounded-xl bg-white px-3 text-sm font-semibold text-sky-900 ring-1 ring-sky-300 hover:bg-sky-50 sm:min-h-11 sm:text-[0.95rem]"
              >
                清除
              </button>
            ) : null}
          </div>
        </label>

        {/* Back / search-chip row only when scoped — avoid empty min-h band on clean catalog */}
        {showExitBack ? (
          <div className="mt-1.5 flex min-h-8 items-center gap-1.5">
            <button
              type="button"
              onClick={exitToAll}
              aria-label="返回"
              tabIndex={chromeOff ? -1 : undefined}
              className="inline-flex min-h-7 shrink-0 items-center gap-0.5 rounded-lg bg-sky-800 px-2 text-[0.7rem] font-semibold text-white hover:bg-sky-900 sm:min-h-8 sm:px-2.5 sm:text-xs"
            >
              <span aria-hidden>←</span>
              返回
            </button>
            <div className="min-w-0 flex-1 overflow-x-auto">
              <ActiveFilterChips
                searchQuery={searchActive ? searchQuery.trim() : undefined}
                onDismissSearch={clearSearch}
              />
            </div>
          </div>
        ) : null}

        <div className="mt-1.5">
          <DimensionFilters
            season={season}
            tripType={tripType}
            theme={theme}
            regionId={regionId}
            provinceId={provinceId}
            openDim={openDim}
            onOpenDim={setOpenDim}
            onSeason={setSeason}
            onTripType={setTripType}
            onTheme={setTheme}
            onRegion={(nextRegion, nextProvince) => {
              setRegionId(nextRegion);
              setProvinceId(nextProvince);
            }}
          />
        </div>
      </div>

      <div className="space-y-0.5 px-0.5">
        <p className="font-display text-[0.95rem] font-bold leading-snug text-sky-950 sm:text-lg">
          {resultsTitle}
        </p>
        {catalogClean ? (
          <p className="text-xs text-sky-700/85 sm:text-sm">
            未加筛选 · 先显示名景；点季节 / 长短 / 主题 / 地区可收窄
          </p>
        ) : null}
      </div>

      {searchActive ? (
        <section aria-label="搜索结果" className="space-y-2">
          {searchHits.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-sky-300/80 bg-white/60 px-4 py-10 text-center text-lg leading-relaxed text-sky-800">
              没有找到「{searchQuery.trim()}」相关路线。
              <span className="mt-2 block text-base text-sky-700">
                可试城市名、景点名，或点「地区」按大区筛选。
              </span>
            </p>
          ) : (
            <RouteCardGrid
              routes={searchHits}
              aria-label="搜索结果路线"
              paginate={searchHits.length > 12}
            />
          )}
        </section>
      ) : (
        <section
          aria-label={
            provinceMeta
              ? `${provinceMeta.name}路线`
              : regionMeta
                ? `${REGION_SHORT[regionMeta.id]}路线`
                : theme
                  ? `${THEME_LABELS[theme]}路线`
                  : "全部景点"
          }
          className="space-y-2"
        >
          {themeBlurb ? (
            <p className="max-w-2xl text-[0.95rem] leading-relaxed text-sky-800/90 sm:text-base">
              {themeBlurb}
            </p>
          ) : null}
          {catalogRoutes.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-sky-300/80 bg-white/60 px-4 py-10 text-center text-lg leading-relaxed text-sky-800">
              当前筛选没有匹配路线，请点「返回」或改条件。
            </p>
          ) : (
            <RouteCardGrid
              routes={catalogRoutes}
              aria-label={
                provinceMeta
                  ? `${provinceMeta.name}路线`
                  : regionMeta
                    ? `${REGION_SHORT[regionMeta.id]}路线`
                    : theme
                      ? `${THEME_LABELS[theme]}路线`
                      : "全部景点路线"
              }
              paginate={catalogRoutes.length > 12}
            />
          )}
        </section>
      )}
    </div>
  );
}

/** Chips only for search keyword — region/dims show on triggers. */
function ActiveFilterChips({
  searchQuery,
  onDismissSearch,
}: {
  searchQuery?: string;
  onDismissSearch: () => void;
}) {
  if (!searchQuery) return null;

  return (
    <div
      aria-label="当前筛选"
      className="flex flex-nowrap items-center gap-1.5"
    >
      <button
        type="button"
        onClick={onDismissSearch}
        aria-label={`移除筛选 「${searchQuery}」`}
        className="inline-flex min-h-7 shrink-0 items-center gap-1 rounded-full bg-sky-800/88 px-2 py-0.5 text-[0.7rem] font-semibold text-white shadow-sm hover:bg-sky-900 sm:min-h-8 sm:px-2.5 sm:text-xs"
      >
        「{searchQuery}」
        <span aria-hidden className="text-sky-200/90">
          ×
        </span>
      </button>
    </div>
  );
}

function DimTrigger({
  label,
  active,
  pressed,
  onClick,
}: {
  label: string;
  active: boolean;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={pressed}
      aria-haspopup="dialog"
      className={`inline-flex min-h-7 shrink-0 items-center rounded-full px-2.5 text-[0.72rem] font-semibold transition-colors sm:min-h-8 sm:text-xs ${
        active || pressed
          ? "bg-sky-800 text-white"
          : "bg-white/90 text-sky-900 ring-1 ring-sky-200/90 hover:bg-sky-50"
      }`}
    >
      {label}
    </button>
  );
}

function DimensionFilters({
  season,
  tripType,
  theme,
  regionId,
  provinceId,
  openDim,
  onOpenDim,
  onSeason,
  onTripType,
  onTheme,
  onRegion,
}: {
  season?: Season;
  tripType?: TripType;
  theme?: RouteTheme;
  regionId?: RegionId;
  provinceId?: ProvinceId;
  openDim: OpenDim;
  onOpenDim: (d: OpenDim) => void;
  onSeason: (s: Season | undefined) => void;
  onTripType: (t: TripType | undefined) => void;
  onTheme: (t: RouteTheme | undefined) => void;
  onRegion: (
    regionId: RegionId | undefined,
    provinceId: ProvinceId | undefined,
  ) => void;
}) {
  const seasonLabel = season
    ? `季节·${SEASON_FULL_LABELS[season]}`
    : "季节·全季节";
  const tripLabel = tripType
    ? `长短·${TRIP_TYPE_LABELS[tripType]}`
    : "长短·全部";
  const themeLabel = theme
    ? `主题·${THEME_CHIP_LABELS[theme]}`
    : "主题·全部";
  const regionLabel = provinceId
    ? `地区·${shortProvinceName(getProvinceById(provinceId)?.name ?? "省")}`
    : regionId
      ? `地区·${REGION_SHORT[regionId]}`
      : "地区·全部";

  const sheetTitle =
    openDim === "season"
      ? "季节"
      : openDim === "trip"
        ? "长短"
        : openDim === "theme"
          ? "主题"
          : openDim === "region"
            ? "地区"
            : "";

  const dimDirty =
    openDim === "season"
      ? season !== undefined
      : openDim === "trip"
        ? tripType !== undefined
        : openDim === "theme"
          ? theme !== undefined
          : openDim === "region"
            ? regionId !== undefined
            : false;

  const resetOpenDim = () => {
    if (openDim === "season") onSeason(undefined);
    else if (openDim === "trip") onTripType(undefined);
    else if (openDim === "theme") onTheme(undefined);
    else if (openDim === "region") onRegion(undefined, undefined);
    onOpenDim(null);
  };

  const regionProvinces = useMemo(() => {
    if (!regionId) return [];
    return getProvincesByRegion(regionId).filter((p) => {
      const n = getRoutesByProvince(p.id, season).filter((r) =>
        routeMatches(r, {
          season,
          tripType,
          theme,
          regionId,
          provinceId: p.id,
        }),
      ).length;
      return n > 0;
    });
  }, [regionId, season, tripType, theme]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const sheet =
    openDim && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[80]" role="presentation">
            <button
              type="button"
              aria-label="关闭筛选"
              className="absolute inset-0 bg-sky-950/35"
              onClick={() => onOpenDim(null)}
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-label={sheetTitle}
              className="absolute inset-x-0 bottom-0 flex max-h-[70vh] flex-col rounded-t-2xl bg-[#f5fafc] outline-none ring-1 ring-sky-900/10"
            >
              <div className="mx-auto mt-2.5 h-1 w-10 shrink-0 rounded-full bg-sky-300/80" />
              <div className="flex items-center justify-between gap-3 px-4 pb-1 pt-3">
                <h2 className="font-display text-base font-bold text-sky-950">
                  {sheetTitle}
                </h2>
                <div className="flex items-center gap-0.5">
                  <button
                    type="button"
                    onClick={resetOpenDim}
                    disabled={!dimDirty}
                    aria-label={`重置${sheetTitle}`}
                    className="min-h-9 rounded-lg px-2.5 text-sm font-semibold text-sky-800 hover:bg-sky-100/80 disabled:cursor-default disabled:text-sky-400 disabled:hover:bg-transparent"
                  >
                    重置
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenDim(null)}
                    className="min-h-9 rounded-lg px-2.5 text-sm font-semibold text-sky-800 hover:bg-sky-100/80"
                  >
                    完成
                  </button>
                </div>
              </div>
              <div className="overflow-y-auto px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-1">
                {openDim === "season" ? (
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    <FilterChip
                      active={!season}
                      onClick={() => {
                        onSeason(undefined);
                        onOpenDim(null);
                      }}
                      label="全部季节"
                      ariaLabel="全部季节"
                      tone="orange"
                    />
                    {(
                      Object.entries(SEASON_FULL_LABELS) as [Season, string][]
                    ).map(([id, label]) => (
                      <FilterChip
                        key={id}
                        active={season === id}
                        onClick={() => {
                          onSeason(season === id ? undefined : id);
                          onOpenDim(null);
                        }}
                        label={label}
                        tone="orange"
                      />
                    ))}
                  </div>
                ) : null}
                {openDim === "trip" ? (
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    <FilterChip
                      active={!tripType}
                      onClick={() => {
                        onTripType(undefined);
                        onOpenDim(null);
                      }}
                      label="全部"
                      ariaLabel="全部长短"
                      tone="amber"
                    />
                    {(
                      Object.entries(TRIP_TYPE_LABELS) as [TripType, string][]
                    ).map(([id, label]) => (
                      <FilterChip
                        key={id}
                        active={tripType === id}
                        onClick={() => {
                          onTripType(tripType === id ? undefined : id);
                          onOpenDim(null);
                        }}
                        label={label}
                        tone="amber"
                      />
                    ))}
                  </div>
                ) : null}
                {openDim === "theme" ? (
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    <FilterChip
                      active={!theme}
                      onClick={() => {
                        onTheme(undefined);
                        onOpenDim(null);
                      }}
                      label="全部主题"
                      ariaLabel="全部主题"
                      tone="amber"
                    />
                    {THEME_ORDER.map((id) => (
                      <FilterChip
                        key={id}
                        active={theme === id}
                        onClick={() => {
                          onTheme(theme === id ? undefined : id);
                          onOpenDim(null);
                        }}
                        label={THEME_CHIP_LABELS[id]}
                        tone="amber"
                      />
                    ))}
                  </div>
                ) : null}
                {openDim === "region" ? (
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                      <FilterChip
                        active={!regionId}
                        onClick={() => {
                          onRegion(undefined, undefined);
                          onOpenDim(null);
                        }}
                        label="全部地区"
                        ariaLabel="全部地区"
                        tone="emerald"
                      />
                      {regions.map((r) => (
                        <FilterChip
                          key={r.id}
                          active={regionId === r.id}
                          onClick={() => {
                            onRegion(r.id, undefined);
                          }}
                          label={REGION_SHORT[r.id]}
                          ariaLabel={REGION_SHORT[r.id]}
                          tone="emerald"
                        />
                      ))}
                    </div>
                    {regionId ? (
                      <div className="space-y-1.5 border-t border-sky-200/70 pt-2.5">
                        <p className="text-xs font-medium text-sky-700/90">
                          可选省份（可不选）
                        </p>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                          <FilterChip
                            active={!provinceId}
                            onClick={() => {
                              onRegion(regionId, undefined);
                              onOpenDim(null);
                            }}
                            label="本区全部"
                            ariaLabel="本区全部"
                            tone="emerald"
                          />
                          {regionProvinces.map((p) => (
                            <FilterChip
                              key={p.id}
                              active={provinceId === p.id}
                              onClick={() => {
                                onRegion(regionId, p.id);
                                onOpenDim(null);
                              }}
                              label={shortProvinceName(p.name)}
                              ariaLabel={shortProvinceName(p.name)}
                              tone="emerald"
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-sky-700/80">
                        先选大区；省份可选，不选则看该区全部路线。
                      </p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div
        aria-label="筛选维度"
        className="flex flex-nowrap items-center gap-1.5 overflow-x-auto"
      >
        <DimTrigger
          label={seasonLabel}
          active={season !== undefined}
          pressed={openDim === "season"}
          onClick={() =>
            onOpenDim(openDim === "season" ? null : "season")
          }
        />
        <DimTrigger
          label={tripLabel}
          active={tripType !== undefined}
          pressed={openDim === "trip"}
          onClick={() => onOpenDim(openDim === "trip" ? null : "trip")}
        />
        <DimTrigger
          label={themeLabel}
          active={theme !== undefined}
          pressed={openDim === "theme"}
          onClick={() => onOpenDim(openDim === "theme" ? null : "theme")}
        />
        <DimTrigger
          label={regionLabel}
          active={regionId !== undefined}
          pressed={openDim === "region"}
          onClick={() => onOpenDim(openDim === "region" ? null : "region")}
        />
      </div>
      {sheet}
    </>
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
      className={`min-h-7 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold transition-colors sm:min-h-8 sm:px-2.5 sm:text-xs ${
        active ? activeClass : idleClass
      }`}
    >
      {label}
    </button>
  );
}
