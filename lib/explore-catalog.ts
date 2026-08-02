/**
 * Explore-only catalog: metadata + search haystack.
 * Slim JSON — no route introductions / notices / sources in the home chunk.
 * Regenerate: `npm run gen:explore-catalog` (hooked into build / build:pages).
 */
import exploreRoutesJson from "@/lib/generated/explore-routes.json";
import { regions } from "@/content/regions";
import {
  getProvinceById,
  getProvincesByRegion,
  type ProvinceId,
} from "@/content/provinces";
import type { RegionId, Route, Season } from "@/content/types";

export type { ProvinceId, RegionId, Route, Season };
export { getProvinceById, getProvincesByRegion, regions };

export const catalogRoutes: Route[] = exploreRoutesJson as Route[];

export function getRegionById(id: RegionId) {
  return regions.find((region) => region.id === id);
}

export function getCatalogRoutesByProvince(
  provinceId: ProvinceId,
  season?: Season,
): Route[] {
  return catalogRoutes.filter((r) => {
    if (season && !r.seasons.includes(season)) return false;
    return (
      r.primaryProvince === provinceId || r.provinces?.includes(provinceId)
    );
  });
}
