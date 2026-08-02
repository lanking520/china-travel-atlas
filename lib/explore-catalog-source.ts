/**
 * Build-time Explore catalog source.
 * Imports full patch modules (with introductions) — used only by
 * `npm run gen:explore-catalog`, not by the home client bundle.
 * Runtime Explore imports slim JSON via `@/lib/explore-catalog`.
 */
import { routes as baseRoutes } from "@/content/routes";
import { patchRoutes as northRoutes } from "@/content/patches/routes-north";
import { patchRoutes as northwestRoutes } from "@/content/patches/routes-northwest";
import { patchRoutes as eastCentralRoutes } from "@/content/patches/routes-east-central";
import { patchRoutes as southSouthwestRoutes } from "@/content/patches/routes-south-southwest";
import { patchRoutes as planGapRoutes } from "@/content/patches/routes-plan-gaps";
import { patchRoutes as jiangsuRoutes } from "@/content/patches/routes-jiangsu";
import { patchRoutes as xinjiangRoutes } from "@/content/patches/routes-xinjiang";
import { patchRoutes as huadongLongRoutes } from "@/content/patches/routes-huadong-long";
import { patchRoutes as deepenSouthwestRoutes } from "@/content/patches/routes-deepen-southwest";
import { patchRoutes as deepenSouthRoutes } from "@/content/patches/routes-deepen-south";
import { patchRoutes as deepenNorthRoutes } from "@/content/patches/routes-deepen-north";
import { patchRoutes as deepenGansuRoutes } from "@/content/patches/routes-deepen-gansu";
import { patchRoutes as deepenQingzangHuazhongRoutes } from "@/content/patches/routes-deepen-qingzang-huazhong";
import { patchRoutes as deepenGapsARoutes } from "@/content/patches/routes-deepen-gaps-a";
import { patchRoutes as deepenGapsBRoutes } from "@/content/patches/routes-deepen-gaps-b";
import { patchRoutes as nationalLoopsRoutes } from "@/content/patches/routes-national-loops";
import { patchRoutes as frontierRoutes } from "@/content/patches/routes-frontier";
import { patchRoutes as longStayRoutes } from "@/content/patches/routes-long-stay";
import { patchRoutes as prefectureHebeiShandongRoutes } from "@/content/patches/routes-prefecture-hebei-shandong";
import { patchRoutes as coverageWave20260802Routes } from "@/content/patches/routes-coverage-wave-20260802";
import { patchRoutes as coverageWave20260802bRoutes } from "@/content/patches/routes-coverage-wave-20260802b";
import { patchRoutes as coverageWave20260802cRoutes } from "@/content/patches/routes-coverage-wave-20260802c";
import { patchRoutes as yunnanHekouSapaRoutes } from "@/content/patches/routes-yunnan-hekou-sapa";
import { patchRoutes as composeQingzang20260802Routes } from "@/content/patches/routes-compose-qingzang-20260802";
import { patchRoutes as famousStitch20260802Routes } from "@/content/patches/routes-famous-stitch-20260802";
import { patchRoutes as famousP120260802Routes } from "@/content/patches/routes-famous-p1-20260802";
import { patchRoutes as famousP220260802Routes } from "@/content/patches/routes-famous-p2-20260802";
import { patchRoutes as prefectureWave20260802dRoutes } from "@/content/patches/routes-prefecture-wave-20260802d";
import { patchRoutes as prefectureWave20260802eRoutes } from "@/content/patches/routes-prefecture-wave-20260802e";
import { patchRoutes as prefectureWave20260802fRoutes } from "@/content/patches/routes-prefecture-wave-20260802f";
import { routeProvinces } from "@/content/route-provinces";
import type { Route } from "@/content/types";
import { placeCoverForRoute } from "@/lib/place-images";
import { exploreRouteFieldPatchList } from "@/lib/explore-catalog-fields";


function applyRouteFieldPatches(route: Route): Route {
  let next = route;
  for (const patch of exploreRouteFieldPatchList) {
    const p = patch?.[route.id];
    if (p) next = { ...next, ...p };
  }
  return next;
}

function withProvince(route: Route): Route {
  const map = routeProvinces[route.id];
  if (!map) return route;
  return {
    ...route,
    primaryProvince: map.primary,
    provinces: [map.primary, ...(map.also ?? [])],
  };
}

function toCatalogRoute(route: Route): Route {
  const cover = placeCoverForRoute(route.id, route.coverImage);
  return {
    id: route.id,
    region: route.region,
    title: route.title,
    primaryProvince: route.primaryProvince,
    provinces: route.provinces,
    seasons: route.seasons,
    tripType: route.tripType,
    compositionKind: route.compositionKind,
    legIds: route.legIds,
    glue: route.glue,
    nearbyLegs: route.nearbyLegs,
    fromHome: route.fromHome,
    themes: route.themes,
    daysLabel: route.daysLabel,
    transport: route.transport,
    budgetLabel: route.budgetLabel,
    coverImage: cover,
    summary: route.summary,
    researchKeywords: route.researchKeywords,
    stops: route.stops.map((s) => ({
      id: s.id,
      name: s.name,
      summary: s.summary,
      tips: s.tips,
      days: s.days,
      lat: s.lat,
      lng: s.lng,
      pace: s.pace,
    })),
  };
}

function collectRawRoutes(): Route[] {
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
    ...coverageWave20260802Routes,
    ...coverageWave20260802bRoutes,
    ...coverageWave20260802cRoutes,
    ...yunnanHekouSapaRoutes,
    ...composeQingzang20260802Routes,
    ...famousStitch20260802Routes,
    ...famousP120260802Routes,
    ...famousP220260802Routes,
    ...prefectureWave20260802dRoutes,
    ...prefectureWave20260802eRoutes,
    ...prefectureWave20260802fRoutes,
  ]) {
    map.set(r.id, r);
  }
  return [...map.values()];
}

/** Slim routes for Explore: no introduction / notices / sources / stop images. */
export function buildCatalogRoutes(): Route[] {
  return collectRawRoutes().map((route) =>
    toCatalogRoute(withProvince(applyRouteFieldPatches(route))),
  );
}
