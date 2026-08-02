/**
 * Place-accurate image resolution for routes/stops/galleries.
 * Data: content/place-images.ts (Commons thumbs + local AI fallbacks).
 */
import type { GalleryImage, Route, Stop } from "@/content/types";
import {
  PLACE_GENERATED_IDS,
  PLACE_IMAGE_FALLBACK,
  PLACE_ROUTE_COVERS,
  PLACE_SOFT_IDS,
  PLACE_STOP_IMAGES,
} from "@/content/place-images";

export { PLACE_IMAGE_FALLBACK };

/** Prefix local /generated|/geo assets with GitHub Pages basePath when set. */
export function withAssetBase(src: string): string {
  if (!src.startsWith("/") || src.startsWith("//")) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base) return src;
  if (src.startsWith(base + "/") || src === base) return src;
  return `${base}${src}`;
}

export function isGeneratedPlaceSrc(src: string): boolean {
  return src.includes("/generated/places/");
}

function rejectStockFallback(src?: string): string | undefined {
  if (!src) return undefined;
  // Never let Unsplash / generic stock win over place maps or China fallback.
  if (/images\.unsplash\.com|unsplash\.com\//i.test(src)) return undefined;
  return src;
}

export function placeCoverForRoute(routeId: string, fallback?: string): string {
  const raw =
    PLACE_ROUTE_COVERS[routeId] ??
    rejectStockFallback(fallback) ??
    PLACE_IMAGE_FALLBACK;
  return withAssetBase(raw);
}

export function placeImageForStop(
  stopId: string,
  fallback?: string,
): string | undefined {
  const raw = PLACE_STOP_IMAGES[stopId] ?? rejectStockFallback(fallback);
  return raw ? withAssetBase(raw) : undefined;
}

function captionFor(
  label: string,
  src: string,
  routeOrStopId?: string,
): { caption: string; kind: "photo" | "generated" } {
  const generated =
    isGeneratedPlaceSrc(src) ||
    (routeOrStopId ? PLACE_GENERATED_IDS.has(routeOrStopId) : false);
  if (generated) {
    return { caption: `${label} · 示意生成图`, kind: "generated" };
  }
  const soft = routeOrStopId ? PLACE_SOFT_IDS.has(routeOrStopId) : false;
  if (soft) {
    return { caption: `${label} · 同区示意`, kind: "photo" };
  }
  return { caption: label, kind: "photo" };
}

/** Rewrite cover, stop images, and gallery to place-accurate URLs. */
export function withPlaceImages(route: Route): Route {
  const cover = placeCoverForRoute(route.id, route.coverImage);
  const stops: Stop[] = route.stops.map((stop) => ({
    ...stop,
    image: placeImageForStop(stop.id, stop.image) ?? cover,
  }));

  const coverCap = captionFor(`${route.title} · 封面景色`, cover, route.id);
  const gallery: GalleryImage[] = [
    { url: cover, caption: coverCap.caption, kind: coverCap.kind },
    ...stops.map((s) => {
      const url = s.image as string;
      const cap = captionFor(s.name, url, s.id);
      return {
        url,
        caption: cap.caption,
        stopId: s.id,
        kind: cap.kind,
      };
    }),
  ];

  const seen = new Set<string>();
  const deduped: GalleryImage[] = [];
  for (const img of gallery) {
    const key = `${img.url}|${img.stopId ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(img);
  }

  return { ...route, coverImage: cover, stops, gallery: deduped };
}

/**
 * Explore pick-card image: place cover first, else first stop photo, else China fallback.
 * Routes from `@/content` already run through withPlaceImages; this is defensive for any caller.
 */
export function cardImageForRoute(route: Route): string {
  const cover = placeCoverForRoute(route.id, route.coverImage);
  if (cover && cover !== withAssetBase(PLACE_IMAGE_FALLBACK)) return cover;
  for (const stop of route.stops) {
    const stopImg = placeImageForStop(stop.id, stop.image);
    if (stopImg) return stopImg;
  }
  return cover || withAssetBase(PLACE_IMAGE_FALLBACK);
}

