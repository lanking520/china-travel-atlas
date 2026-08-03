import type { Route } from '../types';
import type { RouteDetailFields } from '../route-details';
import { routeDetails } from '../route-details';
import { practicalGuides } from '../practical-guides';

/**
 * Merge audit detail patches. Add new bundle imports below as agents finish.
 */
import { detailPatches as p1, routeFieldPatches as r1 } from './huabei-dongbei';
import { detailPatches as p2, routeFieldPatches as r2 } from './huadong-huazhong';
import { detailPatches as p3, routeFieldPatches as r3 } from './huanan-xinan';
import { detailPatches as p4, routeFieldPatches as r4 } from './xibei-qingzang';
import { detailPatches as p5 } from './city-character-20260802';
import { detailPatches as p6 } from './coverage-character-20260802';
import { detailPatches as p7 } from './leg-compose-character-20260802';
import { detailPatches as p8 } from './famous-frontier-character-20260802';
import {
  detailPatches as p9,
  routeFieldPatches as r5,
} from './soft-short-character-20260802';
import { routeFieldPatches as r6 } from './compose-leg-kind-20260802';
import { routeFieldPatches as r7 } from './zhengzhou-home-20260802';
import { stopTipPatches } from './high-traffic-stops-20260802';

const detailPatchList = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
const routePatchList = [r1, r2, r3, r4, r5, r6, r7];

export function applyDetailPatches(
  details: Record<string, RouteDetailFields>,
): Record<string, RouteDetailFields> {
  const out = { ...details };
  for (const patch of detailPatchList) {
    for (const [id, fields] of Object.entries(patch || {})) {
      out[id] = { ...out[id], ...fields } as RouteDetailFields;
    }
  }
  // Wave-1 practical guides (hand-written); do not overwrite if a patch already set one
  for (const [id, guide] of Object.entries(practicalGuides)) {
    out[id] = {
      ...out[id],
      practicalGuide: out[id]?.practicalGuide ?? guide,
    };
  }
  return out;
}

function applyStopTipPatches(route: Route): Route {
  const tips = stopTipPatches[route.id];
  if (!tips) return route;
  return {
    ...route,
    stops: route.stops.map((s) =>
      tips[s.id] ? { ...s, tips: tips[s.id] } : s,
    ),
  };
}

export function applyRouteFieldPatches(route: Route): Route {
  let next = route;
  for (const patch of routePatchList) {
    const p = patch?.[route.id];
    if (p) next = { ...next, ...p };
  }
  return applyStopTipPatches(next);
}

export function getMergedRouteDetails(): Record<string, RouteDetailFields> {
  return applyDetailPatches(routeDetails);
}
