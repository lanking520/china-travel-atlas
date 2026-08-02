"use client";

import { useEffect, useMemo, useState } from "react";
import { getProvinceById } from "@/content/provinces";
import type { RegionId } from "@/content/types";
import { REGION_SHORT } from "@/lib/labels";
import {
  CHINA_BBOX,
  createEquirectangularProjection,
  geometryToPath,
  labelPoint,
  loadChinaProvinceFeatures,
  resolveProvinceId,
  simplifyGeometry,
  type ChinaProvinceFeature,
} from "@/lib/china-geo";

interface RegionMapProps {
  selected?: RegionId;
  onSelect: (regionId: RegionId | undefined) => void;
  /** When set, regions in the set use full color; others are muted. Omit for the default colorful look. */
  regionsWithRoutes?: ReadonlySet<RegionId>;
  /** Tighter padding / caption for one-viewport Explore */
  compact?: boolean;
  /** Map-cover mode: maximize SVG share in the first mobile viewport */
  cover?: boolean;
}

const VIEW_W = 720;
const VIEW_H = 560;

/** Soft fills per大区 — readable for 适老, distinct without neon */
const REGION_FILL: Record<RegionId, string> = {
  huabei: "#7dd3fc",
  dongbei: "#86efac",
  huadong: "#93c5fd",
  huazhong: "#fcd34d",
  huanan: "#6ee7b7",
  xinan: "#fdba74",
  xibei: "#c4b5fd",
  qingzang: "#a5b4fc",
};

const REGION_FILL_SELECTED: Record<RegionId, string> = {
  huabei: "#0284c7",
  dongbei: "#059669",
  huadong: "#2563eb",
  huazhong: "#d97706",
  huanan: "#0d9488",
  xinan: "#ea580c",
  xibei: "#7c3aed",
  qingzang: "#4f46e5",
};

const MUTED_FILL = "#cbd5e1";
const MUTED_STROKE = "#94a3b8";

export function RegionMap({
  selected,
  onSelect,
  regionsWithRoutes,
  compact = false,
  cover = false,
}: RegionMapProps) {
  const [features, setFeatures] = useState<ChinaProvinceFeature[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadChinaProvinceFeatures()
      .then((f) => {
        if (!cancelled) setFeatures(f);
      })
      .catch(() => {
        if (!cancelled) setError("地图数据加载失败");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const project = useMemo(
    () => createEquirectangularProjection(CHINA_BBOX, VIEW_W, VIEW_H, 16),
    [],
  );

  const provincePaths = useMemo(() => {
    if (!features) return [];
    return features
      .map((feature) => {
        const provinceId = resolveProvinceId(feature.properties);
        const regionId = provinceId
          ? getProvinceById(provinceId)?.region
          : undefined;
        return {
          key: String(feature.properties.adcode),
          provinceId,
          regionId,
          name: feature.properties.name,
          d: geometryToPath(simplifyGeometry(feature.geometry, 6), project),
          label: labelPoint(feature, project),
        };
      })
      .filter((p) => p.d.length > 0);
  }, [features, project]);

  const regionLabels = useMemo(() => {
    const acc: Partial<
      Record<RegionId, { sx: number; sy: number; n: number }>
    > = {};
    for (const p of provincePaths) {
      if (!p.regionId) continue;
      const cur = acc[p.regionId] ?? { sx: 0, sy: 0, n: 0 };
      cur.sx += p.label.x;
      cur.sy += p.label.y;
      cur.n += 1;
      acc[p.regionId] = cur;
    }
    return (Object.keys(acc) as RegionId[]).map((id) => {
      const { sx, sy, n } = acc[id]!;
      return { id, x: sx / n, y: sy / n, label: REGION_SHORT[id] };
    });
  }, [provincePaths]);

  const beijing = provincePaths.find((p) => p.provinceId === "beijing");

  return (
    <div
      className={`rounded-2xl border border-sky-200 bg-gradient-to-b from-sky-50 to-emerald-50/40 ${
        compact ? "p-2 sm:p-3" : "p-4"
      }`}
    >
      <p
        className={`text-center font-medium text-sky-800 ${
          compact || cover
            ? "mb-1 hidden text-base sm:mb-1.5 sm:block"
            : "mb-3 text-lg"
        }`}
      >
        中国地图示意（非实时路况）
      </p>
      {error && (
        <p className="mb-2 text-center text-base text-red-700">{error}</p>
      )}
      {!features && !error && (
        <p className="mb-2 text-center text-base text-sky-700">地图加载中…</p>
      )}
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className={`mx-auto w-full ${
          cover
            ? "min-h-[min(48vh,340px)] max-h-[min(62vh,420px)] max-w-[min(100%,26rem)] sm:min-h-0 sm:max-h-[min(48vh,360px)] sm:max-w-lg"
            : compact
              ? "max-h-[min(52vh,360px)] max-w-[min(100%,24rem)] sm:max-h-[min(42vh,320px)] sm:max-w-md"
              : "max-w-xl"
        }`}
        role="img"
        aria-label="中国地区示意图"
      >
        <rect
          x={0}
          y={0}
          width={VIEW_W}
          height={VIEW_H}
          fill="#e0f2fe"
          rx={8}
        />
        {provincePaths.map((p) => {
          const isOurs = Boolean(p.regionId);
          const isSelected = p.regionId && selected === p.regionId;
          const hasRoutes =
            !regionsWithRoutes ||
            (p.regionId != null && regionsWithRoutes.has(p.regionId));
          const muted = isOurs && !hasRoutes;
          const fill = !isOurs
            ? MUTED_FILL
            : muted
              ? MUTED_FILL
              : isSelected
                ? REGION_FILL_SELECTED[p.regionId!]
                : REGION_FILL[p.regionId!];
          return (
            <path
              key={p.key}
              d={p.d}
              fill={fill}
              stroke={
                muted
                  ? MUTED_STROKE
                  : isSelected
                    ? "#0c4a6e"
                    : "#0369a1"
              }
              strokeWidth={isSelected ? 2.2 : muted ? 0.9 : 1}
              opacity={muted ? 0.55 : 1}
              className={
                isOurs
                  ? "cursor-pointer transition-colors hover:brightness-95"
                  : undefined
              }
              onClick={() => {
                if (p.regionId) onSelect(p.regionId);
              }}
              role={isOurs ? "button" : undefined}
              tabIndex={isOurs ? 0 : undefined}
              aria-label={
                p.regionId
                  ? `${REGION_SHORT[p.regionId]} · ${p.name}${
                      muted ? "（当前筛选暂无路线）" : ""
                    }`
                  : p.name || undefined
              }
              onKeyDown={(e) => {
                if (!p.regionId) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(p.regionId);
                }
              }}
            />
          );
        })}
        {regionLabels.map((r) => {
          const muted =
            regionsWithRoutes != null && !regionsWithRoutes.has(r.id);
          return (
            <text
              key={r.id}
              x={r.x}
              y={r.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className={`pointer-events-none select-none text-[18px] font-bold ${
                muted ? "fill-slate-500" : "fill-sky-950"
              }`}
              style={{ paintOrder: "stroke", stroke: "#fff", strokeWidth: 3 }}
              opacity={muted ? 0.7 : 1}
            >
              {r.label}
            </text>
          );
        })}
        {beijing && (
          <>
            <circle
              cx={beijing.label.x}
              cy={beijing.label.y}
              r={5}
              fill="#dc2626"
              className="pointer-events-none"
            />
            <text
              x={beijing.label.x}
              y={beijing.label.y - 10}
              textAnchor="middle"
              className="pointer-events-none fill-red-700 text-[12px] font-bold"
            >
              京
            </text>
          </>
        )}
      </svg>
      <p
        className={`text-center text-sky-700 ${
          compact
            ? "mt-1 hidden text-sm sm:block sm:text-base"
            : "mt-2 text-base"
        }`}
      >
        点击任意省份进入所属大区
      </p>
    </div>
  );
}
