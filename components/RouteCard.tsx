import Image from "next/image";
import Link from "next/link";
import type { Route } from "@/content/types";
import { getRegionById } from "@/content";
import { REGION_SHORT, SEASON_LABELS, TRIP_TYPE_LABELS } from "@/lib/labels";

interface RouteCardProps {
  route: Route;
}

export function RouteCard({ route }: RouteCardProps) {
  const region = getRegionById(route.region);

  return (
    <Link
      href={`/routes/${route.id}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-sky-100">
        <Image
          src={route.coverImage}
          alt={route.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {route.fromHome && (
          <span className="absolute left-3 top-3 rounded-lg bg-emerald-700 px-3 py-1 text-base font-semibold text-white">
            北京出发
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-xl font-bold leading-snug text-sky-950">
          {route.title}
        </h3>
        <p className="line-clamp-2 text-lg leading-relaxed text-sky-800/90">
          {route.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <span className="rounded-lg bg-sky-100 px-3 py-1 text-base font-medium text-sky-900">
            {region?.name ?? REGION_SHORT[route.region]}
          </span>
          <span className="rounded-lg bg-emerald-100 px-3 py-1 text-base font-medium text-emerald-900">
            {route.daysLabel}
          </span>
          <span className="rounded-lg bg-amber-100 px-3 py-1 text-base font-medium text-amber-900">
            {TRIP_TYPE_LABELS[route.tripType]}
          </span>
          {route.seasons.map((season) => (
            <span
              key={season}
              className="rounded-lg bg-orange-100 px-3 py-1 text-base font-medium text-orange-900"
            >
              {SEASON_LABELS[season]}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
