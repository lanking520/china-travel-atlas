import { regions } from './regions';
import { routes as baseRoutes } from './routes';
import { patchRoutes as northRoutes } from './patches/routes-north';
import { patchRoutes as northwestRoutes } from './patches/routes-northwest';
import { patchRoutes as eastCentralRoutes } from './patches/routes-east-central';
import { patchRoutes as southSouthwestRoutes } from './patches/routes-south-southwest';
import { patchRoutes as planGapRoutes } from './patches/routes-plan-gaps';
import { patchRoutes as jiangsuRoutes } from './patches/routes-jiangsu';
import { patchRoutes as xinjiangRoutes } from './patches/routes-xinjiang';
import { patchRoutes as huadongLongRoutes } from './patches/routes-huadong-long';
import { patchRoutes as deepenSouthwestRoutes } from './patches/routes-deepen-southwest';
import { patchRoutes as deepenSouthRoutes } from './patches/routes-deepen-south';
import { patchRoutes as deepenNorthRoutes } from './patches/routes-deepen-north';
import { patchRoutes as deepenGansuRoutes } from './patches/routes-deepen-gansu';
import { patchRoutes as deepenQingzangHuazhongRoutes } from './patches/routes-deepen-qingzang-huazhong';
import { patchRoutes as deepenGapsARoutes } from './patches/routes-deepen-gaps-a';
import { patchRoutes as deepenGapsBRoutes } from './patches/routes-deepen-gaps-b';
import { patchRoutes as nationalLoopsRoutes } from './patches/routes-national-loops';
import { patchRoutes as frontierRoutes } from './patches/routes-frontier';
import { patchRoutes as longStayRoutes } from './patches/routes-long-stay';
import { patchRoutes as prefectureHebeiShandongRoutes } from './patches/routes-prefecture-hebei-shandong';
import {
  applyRouteFieldPatches,
  getMergedRouteDetails,
} from './audit-patches';
import { routeProvinces } from './route-provinces';
import {
  getProvinceById,
  getProvincesByRegion,
  provinces,
  type ProvinceId,
} from './provinces';
import type { RegionId, Route, RouteFilter, Season } from './types';
import { withPlaceImages } from '@/lib/place-images';

export * from './types';
export { regions } from './regions';
export { provinces, getProvinceById, getProvincesByRegion };
export type { ProvinceId };

function withProvince(route: Route): Route {
  const map = routeProvinces[route.id];
  if (!map) return route;
  return {
    ...route,
    primaryProvince: map.primary,
    provinces: [map.primary, ...(map.also ?? [])],
  };
}

/** 基线路 + 各省补丁（按 id 去重）+ 审核补丁 + 详情文案 + 省份 */
export const routes: Route[] = (() => {
  const map = new Map<string, Route>();
  for (const r of baseRoutes) map.set(r.id, r);
  for (const r of [
    ...northRoutes,
    ...northwestRoutes,
    ...eastCentralRoutes,
    ...southSouthwestRoutes,
    ...planGapRoutes,
    ...jiangsuRoutes,
    ...huadongLongRoutes,
    ...xinjiangRoutes,
    ...deepenSouthwestRoutes,
    ...deepenSouthRoutes,
    ...deepenNorthRoutes,
    ...deepenGansuRoutes,
    ...deepenQingzangHuazhongRoutes,
    ...deepenGapsARoutes,
    ...deepenGapsBRoutes,
    ...nationalLoopsRoutes,
    ...frontierRoutes,
    ...longStayRoutes,
    ...prefectureHebeiShandongRoutes,
  ]) {
    map.set(r.id, r);
  }
  const mergedDetails = getMergedRouteDetails();
  return [...map.values()].map((route) => {
    const patched = withProvince(applyRouteFieldPatches(route));
    const detail = mergedDetails[patched.id];
    const withDetail = detail
      ? {
          ...patched,
          introduction: detail.introduction ?? patched.introduction,
          seasonGuide: detail.seasonGuide ?? patched.seasonGuide,
          notices: detail.notices ?? patched.notices,
          // Place-image layer overwrites wrong Unsplash galleries below.
          gallery: detail.gallery ?? patched.gallery,
          practicalGuide: detail.practicalGuide ?? patched.practicalGuide,
        }
      : patched;
    return withPlaceImages(withDetail);
  });
})();

export function getRoutesByProvince(
  provinceId: ProvinceId,
  season?: Season,
): Route[] {
  return routes.filter((r) => {
    if (season && !r.seasons.includes(season)) return false;
    return (
      r.primaryProvince === provinceId || r.provinces?.includes(provinceId)
    );
  });
}

export function getRouteById(id: string): Route | undefined {
  return routes.find((route) => route.id === id);
}

export function filterRoutes(filter: RouteFilter = {}): Route[] {
  return routes.filter((route) => {
    if (filter.region && route.region !== filter.region) return false;
    if (filter.season && !route.seasons.includes(filter.season)) return false;
    if (filter.tripType && route.tripType !== filter.tripType) return false;
    if (filter.theme && !route.themes?.includes(filter.theme)) return false;
    return true;
  });
}

export function getCurrentSeason(date: Date = new Date()): Season {
  const month = date.getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
}

export function getRegionById(id: RegionId) {
  return regions.find((region) => region.id === id);
}

export function getRoutesByRegion(regionId: RegionId): Route[] {
  return filterRoutes({ region: regionId });
}

export function getRoutesForCurrentSeason(date?: Date): Route[] {
  return filterRoutes({ season: getCurrentSeason(date) });
}
