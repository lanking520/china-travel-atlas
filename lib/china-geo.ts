/** Mainland China approx. extent for equirectangular SVG fit */
export const CHINA_BBOX = {
  minLng: 73.5,
  maxLng: 135.0,
  minLat: 18.0,
  maxLat: 53.6,
} as const;

export type GeoBBox = {
  minLng: number;
  maxLng: number;
  minLat: number;
  maxLat: number;
};

export type LonLat = [number, number];

export interface ChinaProvinceProps {
  adcode: number | string;
  name: string;
  center?: LonLat;
}

export interface ChinaProvinceFeature {
  type: "Feature";
  properties: ChinaProvinceProps;
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
}

export interface ChinaProvinceCollection {
  type: "FeatureCollection";
  features: ChinaProvinceFeature[];
}

export type ProjectFn = (lng: number, lat: number) => { x: number; y: number };

/** Equirectangular fit of bbox into SVG viewBox with padding */
export function createEquirectangularProjection(
  bbox: GeoBBox,
  width: number,
  height: number,
  padding = 12,
): ProjectFn {
  const lngSpan = bbox.maxLng - bbox.minLng || 1;
  const latSpan = bbox.maxLat - bbox.minLat || 1;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;
  const scale = Math.min(innerW / lngSpan, innerH / latSpan);
  const usedW = lngSpan * scale;
  const usedH = latSpan * scale;
  const ox = padding + (innerW - usedW) / 2;
  const oy = padding + (innerH - usedH) / 2;

  return (lng: number, lat: number) => ({
    x: ox + (lng - bbox.minLng) * scale,
    y: oy + (bbox.maxLat - lat) * scale,
  });
}

function ringToPath(ring: number[][], project: ProjectFn): string {
  if (ring.length === 0) return "";
  const parts: string[] = [];
  for (let i = 0; i < ring.length; i++) {
    const [lng, lat] = ring[i];
    const { x, y } = project(lng, lat);
    parts.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  parts.push("Z");
  return parts.join("");
}

export function geometryToPath(
  geometry: ChinaProvinceFeature["geometry"],
  project: ProjectFn,
): string {
  if (geometry.type === "Polygon") {
    return (geometry.coordinates as number[][][])
      .map((ring) => ringToPath(ring, project))
      .join("");
  }
  return (geometry.coordinates as number[][][][])
    .map((poly) => poly.map((ring) => ringToPath(ring, project)).join(""))
    .join("");
}

/** Decimate polygon rings for snappier SVG (Aliyun DataV is very dense). */
export function simplifyGeometry(
  geometry: ChinaProvinceFeature["geometry"],
  step = 4,
): ChinaProvinceFeature["geometry"] {
  const simpRing = (ring: number[][]) => {
    if (ring.length <= 12) return ring;
    const out: number[][] = [];
    for (let i = 0; i < ring.length; i += step) out.push(ring[i]);
    const last = ring[ring.length - 1];
    const first = out[0];
    if (!first || last[0] !== first[0] || last[1] !== first[1]) out.push(last);
    return out;
  };
  if (geometry.type === "Polygon") {
    return {
      type: "Polygon",
      coordinates: (geometry.coordinates as number[][][]).map(simpRing),
    };
  }
  return {
    type: "MultiPolygon",
    coordinates: (geometry.coordinates as number[][][][]).map((poly) =>
      poly.map(simpRing),
    ),
  };
}

export function expandBBox(bbox: GeoBBox, fraction: number): GeoBBox {
  const lngPad = (bbox.maxLng - bbox.minLng) * fraction;
  const latPad = (bbox.maxLat - bbox.minLat) * fraction;
  return {
    minLng: bbox.minLng - lngPad,
    maxLng: bbox.maxLng + lngPad,
    minLat: bbox.minLat - latPad,
    maxLat: bbox.maxLat + latPad,
  };
}

export function bboxFromLonLats(
  points: { lng: number; lat: number }[],
  minSpan = 2,
): GeoBBox {
  if (points.length === 0) return { ...CHINA_BBOX };
  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;
  for (const p of points) {
    minLng = Math.min(minLng, p.lng);
    maxLng = Math.max(maxLng, p.lng);
    minLat = Math.min(minLat, p.lat);
    maxLat = Math.max(maxLat, p.lat);
  }
  if (maxLng - minLng < minSpan) {
    const mid = (minLng + maxLng) / 2;
    minLng = mid - minSpan / 2;
    maxLng = mid + minSpan / 2;
  }
  if (maxLat - minLat < minSpan) {
    const mid = (minLat + maxLat) / 2;
    minLat = mid - minSpan / 2;
    maxLat = mid + minSpan / 2;
  }
  return { minLng, maxLng, minLat, maxLat };
}

let loadPromise: Promise<ChinaProvinceFeature[]> | null = null;

function geoUrl(): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}/geo/china-provinces.json`;
}

/** Load province FeatureCollection from static public/geo (works offline in export). */
export async function loadChinaProvinceFeatures(): Promise<
  ChinaProvinceFeature[]
> {
  if (!loadPromise) {
    loadPromise = fetch(geoUrl())
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load China geo: ${res.status}`);
        return res.json() as Promise<ChinaProvinceCollection>;
      })
      .then((fc) => fc.features ?? [])
      .catch((err) => {
        loadPromise = null;
        throw err;
      });
  }
  return loadPromise;
}

