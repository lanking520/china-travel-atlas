interface LatLng {
  lat: number;
  lng: number;
}

interface ProjectedPoint {
  x: number;
  y: number;
}

export function projectStops(
  stops: LatLng[],
  width: number,
  height: number,
  padding = 24,
): ProjectedPoint[] {
  if (stops.length === 0) return [];

  const lats = stops.map((s) => s.lat);
  const lngs = stops.map((s) => s.lng);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const latSpan = maxLat - minLat || 1;
  const lngSpan = maxLng - minLng || 1;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;

  return stops.map((stop) => ({
    x: padding + ((stop.lng - minLng) / lngSpan) * innerW,
    y: padding + ((maxLat - stop.lat) / latSpan) * innerH,
  }));
}

export function polylinePoints(points: ProjectedPoint[]): string {
  return points.map((p) => `${p.x},${p.y}`).join(" ");
}
