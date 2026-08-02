"use client";

import { useMemo, useState } from "react";
import {
  filterRoutes,
  getCurrentSeason,
  routes,
} from "@/content";
import type { RegionId, RouteFilter } from "@/content/types";
import { SEASON_FULL_LABELS } from "@/lib/labels";
import { BudgetBar } from "./BudgetBar";
import { FilterBar, type FilterState } from "./FilterBar";
import { RegionMap } from "./RegionMap";
import { RouteCard } from "./RouteCard";

export function ExploreClient() {
  const currentSeason = getCurrentSeason();
  const [filters, setFilters] = useState<FilterState>({
    season: currentSeason,
  });
  const [preset, setPreset] = useState<"none" | "from-home" | "season">(
    "season",
  );

  const filteredRoutes = useMemo(() => {
    if (preset === "from-home") {
      return routes.filter(
        (r) => r.fromHome && r.tripType === "short",
      );
    }
    if (preset === "season") {
      return filterRoutes({
        season: filters.season ?? currentSeason,
        region: filters.region,
        tripType: filters.tripType,
      });
    }
    const routeFilter: RouteFilter = {
      region: filters.region,
      season: filters.season,
      tripType: filters.tripType,
    };
    return filterRoutes(routeFilter);
  }, [filters, preset, currentSeason]);

  function handleFilterChange(next: FilterState) {
    setPreset("none");
    setFilters(next);
  }

  function handleRegionSelect(regionId: RegionId | undefined) {
    setPreset("none");
    setFilters((prev) => ({ ...prev, region: regionId }));
  }

  function applySeasonPreset() {
    if (preset === "season") {
      setPreset("none");
      setFilters((prev) => ({ ...prev, season: undefined }));
      return;
    }
    setPreset("season");
    setFilters((prev) => ({ ...prev, season: currentSeason }));
  }

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setPreset(preset === "from-home" ? "none" : "from-home")}
            className={`min-h-[52px] rounded-2xl px-5 py-3 text-lg font-semibold transition-colors ${
              preset === "from-home"
                ? "bg-emerald-700 text-white"
                : "bg-white text-emerald-900 ring-2 ring-emerald-300 hover:bg-emerald-50"
            }`}
          >
            从北京家出发的短途
          </button>
          <button
            type="button"
            onClick={applySeasonPreset}
            className={`min-h-[52px] rounded-2xl px-5 py-3 text-lg font-semibold transition-colors ${
              preset === "season"
                ? "bg-orange-600 text-white"
                : "bg-white text-orange-900 ring-2 ring-orange-300 hover:bg-orange-50"
            }`}
          >
            当季推荐（{SEASON_FULL_LABELS[currentSeason]}）
          </button>
        </div>
      </section>

      <BudgetBar />

      <section className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <FilterBar filters={filters} onChange={handleFilterChange} />
        <RegionMap selected={filters.region} onSelect={handleRegionSelect} />
      </section>

      <section>
        <p className="mb-4 text-lg text-sky-800">
          共找到 <span className="text-xl font-bold text-sky-950">{filteredRoutes.length}</span> 条路线
        </p>
        {filteredRoutes.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-sky-300 bg-white px-6 py-12 text-center text-xl text-sky-700">
            没有符合筛选条件的路线，请试试放宽条件。
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredRoutes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
