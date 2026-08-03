"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Route } from "@/content/types";
import { SafeImage } from "@/components/SafeImage";
import {
  COMPOSITION_LABELS,
  THEME_LABELS,
  TRIP_TYPE_LABELS,
} from "@/lib/labels";
import { cardImageForRoute } from "@/lib/place-images";

/** Tiny sky gradient — blur-up stand-in while place photos load. */
const CARD_LQIP =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20">` +
      `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">` +
      `<stop stop-color="#0c4a6e"/><stop offset="1" stop-color="#082f49"/>` +
      `</linearGradient></defs>` +
      `<rect width="16" height="20" fill="url(#g)"/>` +
      `</svg>`,
  );

interface RouteCardProps {
  route: Route;
  /** Alternating taller tiles for a light masonry / 小红书 feel */
  tall?: boolean;
  /** Eager for first-row LCP; catalog defaults to lazy */
  priority?: boolean;
}

/**
 * Pinterest / 小红书 style pick card: full-bleed place image + scrim + large text.
 * Text/meta always present; image loads lazily unless priority.
 */
export function RouteCard({
  route,
  tall = false,
  priority = false,
}: RouteCardProps) {
  const src = cardImageForRoute(route);
  /** 长居 / base hubs get a dedicated teal cue (not buried behind 从北京/郑州). */
  const isLongStay =
    route.compositionKind === "base" ||
    Boolean(route.themes?.includes("long-stay"));
  const otherThemeHint =
    !isLongStay && route.themes?.[0]
      ? THEME_LABELS[route.themes[0]]
      : undefined;
  const kindLabel = route.compositionKind
    ? COMPOSITION_LABELS[route.compositionKind]
    : TRIP_TYPE_LABELS[route.tripType] === "长旅行"
      ? "长线"
      : TRIP_TYPE_LABELS[route.tripType];
  const showChipRow =
    Boolean(route.fromHome) ||
    Boolean(route.fromZhengzhouHome) ||
    isLongStay ||
    Boolean(otherThemeHint);
  const prefetchRef = useRef(false);

  const prefetchCover = () => {
    if (prefetchRef.current || priority) return;
    prefetchRef.current = true;
    const img = new window.Image();
    img.decoding = "async";
    img.src = src;
  };

  return (
    <Link
      href={`/routes/${route.id}/`}
      onMouseEnter={prefetchCover}
      onFocus={prefetchCover}
      onTouchStart={prefetchCover}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl bg-sky-950/90 shadow-sm ring-1 ring-sky-950/10 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:ring-sky-800/20 active:scale-[0.99] ${
        tall ? "aspect-[3/4] sm:aspect-[2/3]" : "aspect-[4/5] sm:aspect-[3/4]"
      }`}
    >
      <SafeImage
        src={src}
        alt={`${route.title}景色`}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL={CARD_LQIP}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-950/92 via-sky-950/30 to-sky-950/5"
        aria-hidden
      />
      <div className="relative mt-auto flex flex-col justify-end gap-px p-1.5 sm:gap-0.5 sm:p-2.5">
        {showChipRow ? (
          <div className="mb-0.5 flex flex-wrap gap-1">
            {route.fromHome ? (
              <span className="w-fit rounded-md bg-emerald-600/95 px-1.5 py-px text-[0.62rem] font-semibold tracking-wide text-white shadow-sm">
                从北京
              </span>
            ) : null}
            {route.fromZhengzhouHome ? (
              <span className="w-fit rounded-md bg-sky-600/95 px-1.5 py-px text-[0.62rem] font-semibold tracking-wide text-white shadow-sm">
                从郑州
              </span>
            ) : null}
            {isLongStay ? (
              <span className="w-fit rounded-md bg-teal-600/95 px-1.5 py-px text-[0.62rem] font-semibold tracking-wide text-white shadow-sm">
                长居
              </span>
            ) : otherThemeHint ? (
              <span className="w-fit rounded-md bg-amber-600/90 px-1.5 py-px text-[0.62rem] font-semibold tracking-wide text-white shadow-sm">
                {otherThemeHint}
              </span>
            ) : null}
          </div>
        ) : null}
        <h3 className="font-display text-[0.98rem] font-bold leading-tight text-white drop-shadow-sm sm:text-[1.08rem] sm:leading-snug">
          {route.title}
        </h3>
        <p className="text-[0.82rem] font-medium leading-tight text-sky-100/90 sm:text-[0.95rem] sm:leading-snug">
          {route.daysLabel}
          <span className="mx-1 text-sky-300/70" aria-hidden>
            ·
          </span>
          {kindLabel}
        </p>
        <p className="text-[0.82rem] font-semibold leading-tight text-amber-200/95 sm:text-[0.95rem] sm:leading-snug">
          {route.budgetLabel}
        </p>
      </div>
    </Link>
  );
}

interface RouteCardGridProps {
  routes: Route[];
  /** Accessible name for the list region */
  "aria-label"?: string;
  /**
   * Paginate long catalogs (GH Pages: client-only; no SSR stream).
   * Initial PAGE_SIZE cards; IntersectionObserver loads more.
   */
  paginate?: boolean;
}

const PAGE_SIZE = 12;

/** 2-col mobile / 3-col md+ dual-column pick grid */
export function RouteCardGrid({
  routes,
  "aria-label": ariaLabel = "路线列表",
  paginate = false,
}: RouteCardGridProps) {
  const [visibleCount, setVisibleCount] = useState(() =>
    paginate ? Math.min(PAGE_SIZE, routes.length) : routes.length,
  );
  const sentinelRef = useRef<HTMLLIElement | null>(null);
  const routesKey = routes.map((r) => r.id).join(",");

  useEffect(() => {
    setVisibleCount(
      paginate ? Math.min(PAGE_SIZE, routes.length) : routes.length,
    );
  }, [paginate, routes.length, routesKey]);

  useEffect(() => {
    if (!paginate || visibleCount >= routes.length) return;
    const node = sentinelRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        setVisibleCount((n) => Math.min(n + PAGE_SIZE, routes.length));
      },
      { rootMargin: "280px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [paginate, visibleCount, routes.length]);

  const shown = paginate ? routes.slice(0, visibleCount) : routes;
  const hasMore = paginate && visibleCount < routes.length;

  return (
    <ul
      aria-label={ariaLabel}
      className="grid grid-cols-2 gap-1.5 md:grid-cols-3 md:gap-2.5"
    >
      {shown.map((route, index) => (
        <li key={route.id} className="min-w-0">
          <RouteCard
            route={route}
            tall={index % 2 === 1}
            priority={index < 2}
          />
        </li>
      ))}
      {hasMore ? (
        <li
          ref={sentinelRef}
          className="col-span-2 flex min-h-10 items-center justify-center md:col-span-3"
          aria-hidden
        >
          <span className="text-sm text-sky-600/80">加载更多…</span>
        </li>
      ) : null}
    </ul>
  );
}
