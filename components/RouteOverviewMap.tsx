"use client";

import type { Stop, TripType } from "@/content/types";
import { PACE_LABELS } from "@/lib/labels";
import { polylinePoints, projectStops } from "@/lib/map-projection";

interface RouteOverviewMapProps {
  stops: Stop[];
  fromHome?: boolean;
  tripType?: TripType;
}

/** Approximate Beijing home pin for short-trip overviews */
const BEIJING_HOME = { lat: 39.9042, lng: 116.4074, name: "北京家" };

export function RouteOverviewMap({
  stops,
  fromHome = false,
  tripType,
}: RouteOverviewMapProps) {
  const width = 640;
  const height = 320;
  const showHome = fromHome && tripType === "short";
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
  const points = projectStops(plotStops, width, height);

  function scrollToStop(stopId: string) {
    if (stopId === "__beijing-home") return;
    const el = document.getElementById(`stop-${stopId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-4">
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
        </div>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full rounded-xl bg-white/60"
        role="img"
        aria-label="路线地图总览"
      >
        {points.length > 1 && (
          <polyline
            points={polylinePoints(points)}
            fill="none"
            stroke="#0284c7"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 4"
          />
        )}
        {plotStops.map((stop, i) => {
          const { x, y } = points[i];
          const isHome = stop.id === "__beijing-home";
          const isSlow = stop.pace === "slow";
          return (
            <g
              key={stop.id}
              className={isHome ? undefined : "cursor-pointer"}
              onClick={() => scrollToStop(stop.id)}
              role={isHome ? "img" : "button"}
              tabIndex={isHome ? undefined : 0}
              aria-label={isHome ? "北京家" : `跳转到${stop.name}`}
              onKeyDown={(e) => {
                if (isHome) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  scrollToStop(stop.id);
                }
              }}
            >
              {isHome ? (
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
              ) : isSlow ? (
                <circle
                  cx={x}
                  cy={y}
                  r={14}
                  fill="#059669"
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
              <text
                x={x}
                y={y - 20}
                textAnchor="middle"
                className="fill-sky-950 text-[14px] font-semibold"
              >
                {stop.name}
              </text>
              {!isHome && (
                <text
                  x={x}
                  y={y + 28}
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
      <p className="mt-2 text-center text-base text-sky-700">
        {showHome
          ? "从北京家出发；点击站点跳转到下方详情"
          : "点击站点，跳转到下方详情"}
      </p>
    </div>
  );
}
