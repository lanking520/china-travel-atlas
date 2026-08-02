import Link from "next/link";
import type { Route } from "@/content/types";
import { SafeImage } from "@/components/SafeImage";
import { THEME_LABELS, TRIP_TYPE_LABELS } from "@/lib/labels";
import { cardImageForRoute } from "@/lib/place-images";

interface RouteCardProps {
  route: Route;
  /** Alternating taller tiles for a light masonry / 小红书 feel */
  tall?: boolean;
}

/**
 * Pinterest / 小红书 style pick card: full-bleed place image + scrim + large text.
 * Used in Explore province / theme / search grids.
 */
export function RouteCard({ route, tall = false }: RouteCardProps) {
  const src = cardImageForRoute(route);
  const themeHint = route.themes?.[0]
    ? THEME_LABELS[route.themes[0]]
    : undefined;

  return (
    <Link
      href={`/routes/${route.id}/`}
      className={`group relative flex w-full flex-col overflow-hidden rounded-xl bg-sky-900 transition-[transform,box-shadow] hover:shadow-md active:scale-[0.99] ${
        tall ? "aspect-[3/4] sm:aspect-[2/3]" : "aspect-[4/5] sm:aspect-[3/4]"
      }`}
    >
      <SafeImage
        src={src}
        alt={`${route.title}景色`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      {/* Bottom scrim — sky ink, not purple glass */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-950/35 to-transparent"
        aria-hidden
      />
      <div className="relative mt-auto flex flex-col justify-end p-2 sm:p-2.5">
        {route.fromHome ? (
          <span className="mb-1 w-fit rounded bg-emerald-700/95 px-1.5 py-px text-[0.7rem] font-semibold text-white">
            从北京
          </span>
        ) : themeHint ? (
          <span className="mb-1 w-fit rounded bg-amber-700/90 px-1.5 py-px text-[0.7rem] font-semibold text-white">
            {themeHint}
          </span>
        ) : null}
        <h3 className="font-display text-base font-bold leading-snug text-white drop-shadow-sm sm:text-[1.05rem]">
          {route.title}
        </h3>
        <p className="mt-0.5 text-sm font-medium leading-snug text-sky-100/95">
          {route.daysLabel}
          <span className="mx-1 text-sky-300/80" aria-hidden>
            ·
          </span>
          {TRIP_TYPE_LABELS[route.tripType] === "长旅行"
            ? "长线"
            : TRIP_TYPE_LABELS[route.tripType]}
        </p>
        <p className="mt-px text-sm font-semibold leading-snug text-amber-200/95">
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
}

/** 2-col mobile / 3-col md+ dual-column pick grid */
export function RouteCardGrid({
  routes,
  "aria-label": ariaLabel = "路线列表",
}: RouteCardGridProps) {
  return (
    <ul
      aria-label={ariaLabel}
      className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-2.5"
    >
      {routes.map((route, index) => (
        <li key={route.id} className="min-w-0">
          <RouteCard route={route} tall={index % 2 === 1} />
        </li>
      ))}
    </ul>
  );
}
