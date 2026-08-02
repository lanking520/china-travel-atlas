"use client";

import type { RegionId } from "@/content/types";

interface RegionMapProps {
  selected?: RegionId;
  onSelect: (regionId: RegionId | undefined) => void;
}

const REGION_SHAPES: {
  id: RegionId;
  label: string;
  d: string;
  labelX: number;
  labelY: number;
}[] = [
  {
    id: "dongbei",
    label: "东北",
    d: "M 200 40 L 280 35 L 300 80 L 260 120 L 190 100 Z",
    labelX: 240,
    labelY: 75,
  },
  {
    id: "huabei",
    label: "华北",
    d: "M 180 100 L 260 95 L 270 140 L 220 165 L 170 145 Z",
    labelX: 215,
    labelY: 130,
  },
  {
    id: "xibei",
    label: "西北",
    d: "M 40 80 L 170 75 L 180 170 L 90 190 L 30 140 Z",
    labelX: 100,
    labelY: 130,
  },
  {
    id: "qingzang",
    label: "青藏",
    d: "M 30 140 L 90 190 L 120 240 L 50 260 L 10 200 Z",
    labelX: 60,
    labelY: 210,
  },
  {
    id: "huadong",
    label: "华东",
    d: "M 270 140 L 340 130 L 350 190 L 290 200 L 260 165 Z",
    labelX: 305,
    labelY: 170,
  },
  {
    id: "huazhong",
    label: "华中",
    d: "M 220 165 L 290 200 L 280 250 L 210 240 L 190 200 Z",
    labelX: 245,
    labelY: 215,
  },
  {
    id: "xinan",
    label: "西南",
    d: "M 120 190 L 210 240 L 200 290 L 110 280 L 90 220 Z",
    labelX: 155,
    labelY: 250,
  },
  {
    id: "huanan",
    label: "华南",
    d: "M 210 240 L 280 250 L 290 300 L 230 310 L 200 290 Z",
    labelX: 245,
    labelY: 275,
  },
];

export function RegionMap({ selected, onSelect }: RegionMapProps) {
  return (
    <div className="rounded-2xl border border-sky-200 bg-gradient-to-b from-sky-50 to-emerald-50/40 p-4">
      <p className="mb-3 text-center text-base text-sky-800">
        点击地图选地区（示意）
      </p>
      <svg
        viewBox="0 0 360 330"
        className="mx-auto w-full max-w-sm"
        role="img"
        aria-label="中国地区示意图"
      >
        {REGION_SHAPES.map((region) => {
          const isSelected = selected === region.id;
          return (
            <g key={region.id}>
              <path
                d={region.d}
                fill={isSelected ? "#0369a1" : "#bae6fd"}
                stroke={isSelected ? "#0c4a6e" : "#0284c7"}
                strokeWidth={2}
                className="cursor-pointer transition-colors hover:fill-sky-300"
                onClick={() =>
                  onSelect(isSelected ? undefined : region.id)
                }
              />
              <text
                x={region.labelX}
                y={region.labelY}
                textAnchor="middle"
                className="pointer-events-none select-none fill-sky-950 text-[13px] font-semibold"
              >
                {region.label}
              </text>
            </g>
          );
        })}
        <circle cx="215" cy="125" r="5" fill="#dc2626" />
        <text x="215" y="118" textAnchor="middle" className="fill-red-700 text-[11px] font-bold">
          京
        </text>
      </svg>
    </div>
  );
}
