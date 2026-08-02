import type { ProjectedPoint } from "./map-projection";

/** Approx road km from lon/lat (haversine × road factor). */
export function approxRoadKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
  roadFactor = 1.35,
): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h))) * roadFactor;
}

/**
 * Build a road-like cubic path between projected points.
 * Not real routing — a readable corridor with a slight bend (示意公路).
 * Short hops get an exaggerated arc so they stay visible when the map is zoomed out.
 */
export function roadPathBetween(
  a: ProjectedPoint,
  b: ProjectedPoint,
  bend = 0.22,
): string {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy) || 1;
  const px = -dy / dist;
  const py = dx / dist;
  const side = ((Math.round(a.x * 10) + Math.round(b.y * 10)) & 1) === 0 ? 1 : -1;
  // Short screen distance → bigger bow so the leg isn't a vanishing speck
  const offset =
    dist < 24 ? 36 : dist < 56 ? Math.max(22, dist * 0.45) : Math.min(56, dist * bend);
  const c1x = a.x + dx * 0.35 + px * offset * side;
  const c1y = a.y + dy * 0.35 + py * offset * side;
  const c2x = a.x + dx * 0.65 + px * offset * side;
  const c2y = a.y + dy * 0.65 + py * offset * side;
  return `M${a.x.toFixed(1)},${a.y.toFixed(1)} C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${b.x.toFixed(1)},${b.y.toFixed(1)}`;
}

/** Midpoint + tangent angle (radians) along the cubic for arrow / label. */
export function roadMidMarker(
  a: ProjectedPoint,
  b: ProjectedPoint,
  bend = 0.22,
): { x: number; y: number; angle: number } {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy) || 1;
  const px = -dy / dist;
  const py = dx / dist;
  const side = ((Math.round(a.x * 10) + Math.round(b.y * 10)) & 1) === 0 ? 1 : -1;
  const offset =
    dist < 24 ? 36 : dist < 56 ? Math.max(22, dist * 0.45) : Math.min(56, dist * bend);
  const c1 = {
    x: a.x + dx * 0.35 + px * offset * side,
    y: a.y + dy * 0.35 + py * offset * side,
  };
  const c2 = {
    x: a.x + dx * 0.65 + px * offset * side,
    y: a.y + dy * 0.65 + py * offset * side,
  };
  const t = 0.5;
  const mt = 1 - t;
  const x =
    mt ** 3 * a.x +
    3 * mt ** 2 * t * c1.x +
    3 * mt * t ** 2 * c2.x +
    t ** 3 * b.x;
  const y =
    mt ** 3 * a.y +
    3 * mt ** 2 * t * c1.y +
    3 * mt * t ** 2 * c2.y +
    t ** 3 * b.y;
  const tx =
    3 * mt ** 2 * (c1.x - a.x) +
    6 * mt * t * (c2.x - c1.x) +
    3 * t ** 2 * (b.x - c2.x);
  const ty =
    3 * mt ** 2 * (c1.y - a.y) +
    6 * mt * t * (c2.y - c1.y) +
    3 * t ** 2 * (b.y - c2.y);
  return { x, y, angle: Math.atan2(ty, tx) };
}

export function formatRoadKm(km: number): string {
  if (km < 1) return "<1公里";
  if (km < 10) return `约${km.toFixed(0)}公里`;
  if (km < 100) return `约${Math.round(km / 5) * 5}公里`;
  return `约${Math.round(km / 10) * 10}公里`;
}
