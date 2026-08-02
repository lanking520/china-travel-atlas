import type { ProvinceId } from "@/content/provinces";

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

/** Official GB/T adcode (province) → our ProvinceId */
export const ADCODE_TO_PROVINCE: Record<number, ProvinceId> = {
  110000: "beijing",
  120000: "tianjin",
  130000: "hebei",
  140000: "shanxi",
  150000: "neimenggu",
  210000: "liaoning",
  220000: "jilin",
  230000: "heilongjiang",
  310000: "shanghai",
  320000: "jiangsu",
  330000: "zhejiang",
  340000: "anhui",
  350000: "fujian",
  360000: "jiangxi",
  370000: "shandong",
  410000: "henan",
  420000: "hubei",
  430000: "hunan",
  440000: "guangdong",
  450000: "guangxi",
  460000: "hainan",
  500000: "chongqing",
  510000: "sichuan",
  520000: "guizhou",
  530000: "yunnan",
  540000: "xizang",
  610000: "shaanxi",
  620000: "gansu",
  630000: "qinghai",
  640000: "ningxia",
  650000: "xinjiang",
};

const NAME_TO_PROVINCE: Record<string, ProvinceId> = {
  北京市: "beijing",
  天津: "tianjin",
  天津市: "tianjin",
  河北省: "hebei",
  山西省: "shanxi",
  内蒙古自治区: "neimenggu",
  内蒙古: "neimenggu",
  辽宁省: "liaoning",
  吉林省: "jilin",
  黑龙江省: "heilongjiang",
  上海市: "shanghai",
  江苏省: "jiangsu",
  浙江省: "zhejiang",
  安徽省: "anhui",
  福建省: "fujian",
  江西省: "jiangxi",
  山东省: "shandong",
  河南省: "henan",
  湖北省: "hubei",
  湖南省: "hunan",
  广东省: "guangdong",
  广西壮族自治区: "guangxi",
  广西: "guangxi",
  海南省: "hainan",
  重庆市: "chongqing",
  四川省: "sichuan",
  贵州省: "guizhou",
  云南省: "yunnan",
  西藏自治区: "xizang",
  西藏: "xizang",
  陕西省: "shaanxi",
  甘肃省: "gansu",
  青海省: "qinghai",
  宁夏回族自治区: "ningxia",
  宁夏: "ningxia",
  新疆维吾尔自治区: "xinjiang",
  新疆: "xinjiang",
};

export function resolveProvinceId(props: {
  adcode?: number | string;
  name?: string;
}): ProvinceId | undefined {
  const raw = props.adcode;
  if (raw !== undefined && raw !== null && raw !== "") {
    const n = typeof raw === "number" ? raw : Number(String(raw).replace(/\D/g, ""));
    if (Number.isFinite(n) && ADCODE_TO_PROVINCE[n]) {
      return ADCODE_TO_PROVINCE[n];
    }
  }
  if (props.name && NAME_TO_PROVINCE[props.name]) {
    return NAME_TO_PROVINCE[props.name];
  }
  return undefined;
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

export function featureBBox(feature: ChinaProvinceFeature): GeoBBox {
  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;

  const visit = (coords: unknown): void => {
    if (!Array.isArray(coords) || coords.length === 0) return;
    if (typeof coords[0] === "number") {
      const lng = coords[0] as number;
      const lat = coords[1] as number;
      minLng = Math.min(minLng, lng);
      maxLng = Math.max(maxLng, lng);
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
      return;
    }
    for (const c of coords) visit(c);
  };
  visit(feature.geometry.coordinates);
  return { minLng, maxLng, minLat, maxLat };
}

export function mergeBBoxes(boxes: GeoBBox[]): GeoBBox {
  if (boxes.length === 0) return { ...CHINA_BBOX };
  return boxes.reduce(
    (acc, b) => ({
      minLng: Math.min(acc.minLng, b.minLng),
      maxLng: Math.max(acc.maxLng, b.maxLng),
      minLat: Math.min(acc.minLat, b.minLat),
      maxLat: Math.max(acc.maxLat, b.maxLat),
    }),
    {
      minLng: Infinity,
      maxLng: -Infinity,
      minLat: Infinity,
      maxLat: -Infinity,
    },
  );
}

export interface ParsedProvince {
  provinceId: ProvinceId | null;
  adcode: number | string;
  name: string;
  center: LonLat | null;
  path: string;
  feature: ChinaProvinceFeature;
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

export function parseProvinces(
  features: ChinaProvinceFeature[],
  project: ProjectFn,
): ParsedProvince[] {
  return features.map((feature) => {
    const provinceId = resolveProvinceId(feature.properties) ?? null;
    return {
      provinceId,
      adcode: feature.properties.adcode,
      name: feature.properties.name,
      center: feature.properties.center ?? null,
      path: geometryToPath(feature.geometry, project),
      feature,
    };
  });
}

export function labelPoint(
  feature: ChinaProvinceFeature,
  project: ProjectFn,
): { x: number; y: number } {
  if (feature.properties.center) {
    const [lng, lat] = feature.properties.center;
    return project(lng, lat);
  }
  const b = featureBBox(feature);
  return project((b.minLng + b.maxLng) / 2, (b.minLat + b.maxLat) / 2);
}
