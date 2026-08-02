"use client";

import type { RegionId, Season, TripType } from "@/content/types";
import { regions } from "@/content/regions";
import { SEASON_FULL_LABELS, TRIP_TYPE_LABELS } from "@/lib/labels";

export interface FilterState {
  region?: RegionId;
  season?: Season;
  tripType?: TripType;
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-[48px] rounded-xl px-4 py-2.5 text-lg font-medium transition-colors ${
        active
          ? "bg-sky-700 text-white shadow-sm"
          : "bg-white text-sky-900 ring-1 ring-sky-200 hover:bg-sky-50"
      }`}
    >
      {children}
    </button>
  );
}

export function FilterBar({ filters, onChange }: FilterBarProps) {
  const seasons = Object.entries(SEASON_FULL_LABELS) as [Season, string][];
  const tripTypes = Object.entries(TRIP_TYPE_LABELS) as [TripType, string][];

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-lg font-semibold text-sky-900">地区</p>
        <div className="flex flex-wrap gap-2">
          <FilterButton
            active={!filters.region}
            onClick={() => onChange({ ...filters, region: undefined })}
          >
            全部
          </FilterButton>
          {regions.map((region) => (
            <FilterButton
              key={region.id}
              active={filters.region === region.id}
              onClick={() =>
                onChange({
                  ...filters,
                  region: filters.region === region.id ? undefined : region.id,
                })
              }
            >
              {region.name}
            </FilterButton>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-lg font-semibold text-sky-900">季节</p>
        <div className="flex flex-wrap gap-2">
          <FilterButton
            active={!filters.season}
            onClick={() => onChange({ ...filters, season: undefined })}
          >
            全部
          </FilterButton>
          {seasons.map(([id, label]) => (
            <FilterButton
              key={id}
              active={filters.season === id}
              onClick={() =>
                onChange({
                  ...filters,
                  season: filters.season === id ? undefined : id,
                })
              }
            >
              {label}
            </FilterButton>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-lg font-semibold text-sky-900">旅途长短</p>
        <div className="flex flex-wrap gap-2">
          <FilterButton
            active={!filters.tripType}
            onClick={() => onChange({ ...filters, tripType: undefined })}
          >
            全部
          </FilterButton>
          {tripTypes.map(([id, label]) => (
            <FilterButton
              key={id}
              active={filters.tripType === id}
              onClick={() =>
                onChange({
                  ...filters,
                  tripType: filters.tripType === id ? undefined : id,
                })
              }
            >
              {label}
            </FilterButton>
          ))}
        </div>
      </div>
    </div>
  );
}
