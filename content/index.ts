import { regions } from './regions';
import { routes } from './routes';
import type { RegionId, Route, RouteFilter, Season } from './types';

export * from './types';
export { regions } from './regions';
export { routes } from './routes';

export function getRouteById(id: string): Route | undefined {
  return routes.find((route) => route.id === id);
}

export function filterRoutes(filter: RouteFilter = {}): Route[] {
  return routes.filter((route) => {
    if (filter.region && route.region !== filter.region) return false;
    if (filter.season && !route.seasons.includes(filter.season)) return false;
    if (filter.tripType && route.tripType !== filter.tripType) return false;
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
