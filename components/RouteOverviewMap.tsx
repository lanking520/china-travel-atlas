"use client";

import { useEffect, useId, useMemo, useState } from "react";
import type { Stop, TripType } from "@/content/types";
import {
  bboxFromLonLats,
  createEquirectangularProjection,
  expandBBox,
  geometryToPath,
  loadChinaProvinceFeatures,
  simplifyGeometry,
  type ChinaProvinceFeature,
} from "@/lib/china-geo";
import { PACE_LABELS } from "@/lib/labels";
import {
  deconflictStopLayout,
  projectionPaddingForStops,
  truncateMapLabel,
} from "@/lib/map-projection";
import {
  approxRoadKm,
  formatRoadKm,
  roadMidMarker,
  roadPathBetween,
} from "@/lib/route-road";

interface RouteOverviewMapProps {
  stops: Stop[];
  fromHome?: boolean;
  tripType?: TripType;
  /** Optional 高德 deep-link shown under the map */
  amapUrl?: string | null;
  /** Compact card in province list */
  compact?: boolean;
}

/** Approximate Beijing home pin for short-trip overviews */
const BEIJING_HOME = { lat: 39.9042, lng: 116.4074, name: "北京家" };

function bboxIntersects(
  a: { minLng: number; maxLng: number; minLat: number; maxLat: number },
  b: { minLng: number; maxLng: number; minLat: number; maxLat: number },
) {
  return !(
    a.maxLng < b.minLng ||
    a.minLng > b.maxLng ||
    a.maxLat < b.minLat ||
    a.minLat > b.maxLat
  );
}

function roughFeatureBBox(feature: ChinaProvinceFeature) {
  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;
  const walk = (c: unknown): void => {
    if (!Array.isArray(c) || c.length === 0) return;
    if (typeof c[0] === "number") {
      minLng = Math.min(minLng, c[0] as number);
      maxLng = Math.max(maxLng, c[0] as number);
      minLat = Math.min(minLat, c[1] as number);
      maxLat = Math.max(maxLat, c[1] as number);
      return;
    }
    for (const x of c) walk(x);
  };
  walk(feature.geometry.coordinates);
  return { minLng, maxLng, minLat, maxLat };
}

export function RouteOverviewMap({
  stops,
  fromHome = false,
  tripType,
  amapUrl,
  compact = false,
}: RouteOverviewMapProps) {
  const width = compact ? 520 : 640;
  const height = compact ? 300 : 360;
  const arrowId = `road-arrow-${useId().replace(/:/g, "")}`;
  const showHome = Boolean(fromHome);
  const plotStops: Stop[] = showHome
    ? [
        {
          id: "__beijing-home",
          name: BEIJING_HOME.name,
          days: 0,
          pace: "slow",
          lat: BEIJING_HOME.lat,
          lng: BEIJING_HOME.lng,
          summary: "",
        },
        ...stops,
      ]
    : stops;

  const plotKey = plotStops.map((s) => `${s.id}:${s.lat}:${s.lng}`).join("|");

  const { project, bbox } = useMemo(() => {
    const { expandFraction, paddingPx, minSpanDeg } = projectionPaddingForStops(
      plotStops,
      compact,
    );
    const raw = bboxFromLonLats(plotStops, minSpanDeg);
    const padded = expandBBox(raw, expandFraction);
    return {
      bbox: padded,
      project: createEquirectangularProjection(
        padded,
        width,
        height,
        paddingPx,
      ),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plotKey, width, height, compact]);

  const points = useMemo(
    () => plotStops.map((s) => project(s.lng, s.lat)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [plotKey, project],
  );

  const layout = useMemo(
    () =>
      deconflictStopLayout(points, {
        width,
        height,
        compact,
        showSubLabels: !compact,
        labels: plotStops.map((s) =>
          truncateMapLabel(s.name, compact ? 6 : 8),
        ),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [plotKey, points, width, height, compact],
  );

  const roadLegs = useMemo(() => {
    const legs: {
      d: string;
      mid: { x: number; y: number; angle: number };
      label: string | null;
      key: string;
      chip: { x: number; y: number; w: number; h: number } | null;
    }[] = [];
    const chipMinHop = compact ? 100 : 120;
    const chipClearance = compact ? 40 : 52;
    const numbered = new Set(
      layout.stops
        .map((s, i) => (s.labelMode === "number" ? i : -1))
        .filter((i) => i >= 0),
    );
    const markerPts = layout.stops.map((s) => s.marker);
    for (let i = 0; i < plotStops.length - 1; i++) {
      const a = plotStops[i];
      const b = plotStops[i + 1];
      const pa = points[i];
      const pb = points[i + 1];
      if (!pa || !pb) continue;
      const hop = Math.hypot(pb.x - pa.x, pb.y - pa.y);
      // Keep even near-overlapping hops (zoom-out collapse); skip only true duplicates
      if (hop < 0.05) continue;
      const km = approxRoadKm(a, b);
      const mid = roadMidMarker(pa, pb);
      // Hide chips on short hops, hops inside a numbered pack, or near markers.
      const inDensePack = numbered.has(i) && numbered.has(i + 1);
      let nearMarker = false;
      for (const p of [...points, ...markerPts]) {
        if (Math.hypot(mid.x - p.x, mid.y - p.y) < chipClearance) {
          nearMarker = true;
          break;
        }
      }
      const showChip = hop >= chipMinHop && !nearMarker && !inDensePack;
      const chipW = compact ? 56 : 72;
      const chipH = 16;
      legs.push({
        key: `${a.id}->${b.id}`,
        d: roadPathBetween(pa, pb),
        mid,
        label: showChip ? formatRoadKm(km) : null,
        chip: showChip ? { x: mid.x, y: mid.y, w: chipW, h: chipH } : null,
      });
    }
    return legs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plotKey, points, compact, layout]);

  const [features, setFeatures] = useState<ChinaProvinceFeature[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadChinaProvinceFeatures()
      .then((f) => {
        if (!cancelled) setFeatures(f);
      })
      .catch(() => {
        /* basemap optional */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const basemapPaths = useMemo(() => {
    if (!features) return [];
    return features
      .filter((f) => bboxIntersects(roughFeatureBBox(f), bbox))
      .map((f) => ({
        key: String(f.properties.adcode),
        d: geometryToPath(simplifyGeometry(f.geometry, 5), project),
      }))
      .filter((p) => p.d.length > 0);
  }, [features, bbox, project]);

  function scrollToStop(stopId: string) {
    if (stopId === "__beijing-home") return;
    const el = document.getElementById(`stop-${stopId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const slots = layout.stops;
  const showLegend = layout.legend.length > 0;

  return (
    <div
      className={`rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 ${compact ? "p-3" : "p-4"}`}
    >
      {!compact && (
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-bold text-sky-950">路线总览</h2>
          <div className="flex flex-wrap gap-4 text-base text-sky-800">
            {showHome && (
              <span className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded-sm bg-sky-800 ring-2 ring-white" />
                北京家
              </span>
            )}
            <span className="flex items-center gap-2">
              <span className="inline-block h-4 w-4 rounded-full bg-emerald-600 ring-2 ring-white" />
              慢游
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-4 w-4 rotate-45 bg-orange-500 ring-2 ring-white" />
              快览
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1 w-6 rounded bg-sky-700" />
              示意公路
            </span>
          </div>
        </div>
      )}
      <div
        className={
          showLegend && !compact
            ? "grid gap-3 md:grid-cols-[1fr_minmax(9rem,11rem)] md:items-start"
            : undefined
        }
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full rounded-xl bg-sky-50/80"
          role="img"
          aria-label="路线地图总览（含示意公路）"
        >
          <defs>
            <marker
              id={arrowId}
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#0369a1" />
            </marker>
          </defs>
          <rect width={width} height={height} fill="#e0f2fe" rx={8} />
          {basemapPaths.map((p) => (
            <path
              key={p.key}
              d={p.d}
              fill="#bae6fd"
              stroke="#7dd3fc"
              strokeWidth={0.8}
              opacity={0.9}
            />
          ))}
          {roadLegs.map((leg) => (
            <g key={leg.key}>
              <path
                d={leg.d}
                fill="none"
                stroke="#0284c7"
                strokeWidth={compact ? 16 : 20}
                strokeLinecap="round"
                opacity={0.25}
              />
              <path
                d={leg.d}
                fill="none"
                stroke="#0369a1"
                strokeWidth={compact ? 4 : 4.5}
                strokeLinecap="round"
                markerEnd={`url(#${arrowId})`}
              />
              <path
                d={leg.d}
                fill="none"
                stroke="#e0f2fe"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeDasharray="5 7"
                opacity={0.95}
              />
              {leg.label ? (
                <g transform={`translate(${leg.mid.x}, ${leg.mid.y})`}>
                  <rect
                    x={compact ? -28 : -36}
                    y={-10}
                    width={compact ? 56 : 72}
                    height={16}
                    rx={4}
                    fill="#0c4a6e"
                    opacity={0.9}
                  />
                  <text
                    textAnchor="middle"
                    y={2.5}
                    className={`fill-white font-semibold ${compact ? "text-[10px]" : "text-[11px]"}`}
                  >
                    {leg.label}
                  </text>
                </g>
              ) : null}
            </g>
          ))}
          {plotStops.length === 1 && points[0] && (
            <circle
              cx={points[0].x}
              cy={points[0].y}
              r={42}
              fill="none"
              stroke="#0284c7"
              strokeWidth={2}
              strokeDasharray="6 4"
              opacity={0.45}
            />
          )}
          {slots.map((slot, i) => {
            const stop = plotStops[i];
            if (!stop) return null;
            const { x, y } = slot.marker;
            const isHome = stop.id === "__beijing-home";
            const isSlow = stop.pace === "slow";
            const labelText = truncateMapLabel(stop.name, compact ? 6 : 8);
            const r = compact ? 12 : 14;
            return (
              <g
                key={stop.id}
                className={isHome ? undefined : "cursor-pointer"}
                onClick={() => scrollToStop(stop.id)}
                role={isHome ? "img" : "button"}
                tabIndex={isHome ? undefined : 0}
                aria-label={
                  isHome
                    ? "北京家"
                    : slot.number
                      ? `${slot.number}. ${stop.name}`
                      : `跳转到${stop.name}`
                }
                onKeyDown={(e) => {
                  if (isHome) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToStop(stop.id);
                  }
                }}
              >
                {slot.markerOffset && (
                  <line
                    x1={slot.true.x}
                    y1={slot.true.y}
                    x2={x}
                    y2={y}
                    stroke="#0369a1"
                    strokeWidth={1.5}
                    strokeDasharray="3 3"
                    opacity={0.7}
                  />
                )}
                {slot.leader && slot.labelMode === "text" && (
                  <line
                    x1={x}
                    y1={y}
                    x2={slot.label.x}
                    y2={slot.label.y + 4}
                    stroke="#0c4a6e"
                    strokeWidth={1.25}
                    strokeLinecap="round"
                    opacity={0.55}
                  />
                )}
                {isHome && slot.labelMode !== "number" ? (
                  <rect
                    x={x - 11}
                    y={y - 11}
                    width={22}
                    height={22}
                    rx={3}
                    fill="#0c4a6e"
                    stroke="#fff"
                    strokeWidth={3}
                  />
                ) : isSlow || slot.labelMode === "number" ? (
                  <circle
                    cx={x}
                    cy={y}
                    r={r}
                    fill={
                      isHome
                        ? "#0c4a6e"
                        : isSlow
                          ? "#059669"
                          : "#ea580c"
                    }
                    stroke="#fff"
                    strokeWidth={3}
                  />
                ) : (
                  <rect
                    x={x - 10}
                    y={y - 10}
                    width={20}
                    height={20}
                    fill="#ea580c"
                    stroke="#fff"
                    strokeWidth={3}
                    transform={`rotate(45 ${x} ${y})`}
                  />
                )}
                {slot.labelMode === "number" && slot.number != null && (
                  <text
                    x={x}
                    y={y + 5}
                    textAnchor="middle"
                    className={`fill-white font-bold ${compact ? "text-[13px]" : "text-[15px]"}`}
                  >
                    {slot.number}
                  </text>
                )}
                {slot.labelMode === "text" && (
                  <text
                    x={slot.label.x}
                    y={slot.label.y}
                    textAnchor="middle"
                    className={`fill-sky-950 font-semibold ${compact ? "text-[12px]" : "text-[14px]"}`}
                    style={{
                      paintOrder: "stroke",
                      stroke: "#fff",
                      strokeWidth: 3.5,
                    }}
                  >
                    {labelText}
                  </text>
                )}
                {!isHome && slot.subLabel && slot.labelMode === "text" && (
                  <text
                    x={slot.subLabel.x}
                    y={slot.subLabel.y}
                    textAnchor="middle"
                    className="fill-sky-700 text-[12px]"
                  >
                    {PACE_LABELS[stop.pace]}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
        {showLegend && !compact && (
          <ol className="space-y-2 rounded-xl border border-sky-200 bg-white/80 p-3 text-base text-sky-950">
            <li className="list-none text-sm font-semibold text-sky-700">
              站点图例
            </li>
            {layout.legend.map((item) => {
              const stop = plotStops[item.stopIndex];
              const isSlow = !stop || stop.pace === "slow";
              return (
              <li key={item.index} className="flex gap-2 leading-snug">
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${isSlow ? "bg-emerald-600" : "bg-orange-500"}`}
                >
                  {item.index}
                </span>
                <span className="pt-0.5 font-medium">{item.name}</span>
              </li>
              );
            })}
          </ol>
        )}
      </div>
      {showLegend && compact && (
        <ol
          className={`mt-2 grid gap-1.5 ${layout.legend.length >= 5 ? "grid-cols-2" : "grid-cols-1"} text-sm text-sky-950`}
        >
          {layout.legend.map((item) => {
            const stop = plotStops[item.stopIndex];
            const isSlow = !stop || stop.pace === "slow";
            return (
            <li key={item.index} className="flex items-center gap-1.5">
              <span
                className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${isSlow ? "bg-emerald-600" : "bg-orange-500"}`}
              >
                {item.index}
              </span>
              <span className="truncate font-medium">{item.name}</span>
            </li>
            );
          })}
        </ol>
      )}
      {layout.compactSummary && !showLegend && (
        <p
          className={`mt-2 text-center font-medium text-sky-900 ${compact ? "text-sm" : "text-base"}`}
        >
          {layout.compactSummary}
        </p>
      )}
      <div
        className={`mt-2 flex flex-wrap items-center justify-center ${compact ? "gap-2" : "gap-3"}`}
      >
        <p
          className={`text-center text-sky-700 ${compact ? "text-sm" : "text-base"}`}
        >
          {compact
            ? "示意公路（非实时导航）"
            : showHome
              ? "中国地图示意 + 示意公路（非实时路况）。从北京家出发；点击站点跳转详情"
              : "中国地图示意 + 示意公路（非实时路况）。点击站点跳转详情"}
        </p>
        {amapUrl && !compact && (
          <a
            href={amapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-xl bg-sky-700 px-4 py-2 text-base font-semibold text-white hover:bg-sky-800"
          >
            在高德地图打开
          </a>
        )}
      </div>
    </div>
  );
}
