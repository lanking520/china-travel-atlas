import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionById, getRouteById, routes } from "@/content";
import { Header } from "@/components/Header";
import { RouteOverviewMap } from "@/components/RouteOverviewMap";
import { StopTimeline } from "@/components/StopTimeline";
import { REGION_SHORT, SEASON_LABELS, TRIP_TYPE_LABELS } from "@/lib/labels";

export function generateStaticParams() {
  return routes.map((route) => ({ id: route.id }));
}

export const dynamicParams = false;

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const route = getRouteById(id);
  if (!route) notFound();

  const region = getRegionById(route.region);
  const transportNote = route.fromHome
    ? "近程可北京私家车自驾；远途建议飞机/高铁抵达后当地租车。"
    : "建议飞机或高铁抵达目的地后当地租车或包车，减少换乘折腾。";

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex min-h-[48px] items-center text-lg font-medium text-sky-700 hover:text-sky-900"
        >
          ← 返回探索
        </Link>

        <div className="relative mb-6 aspect-[21/9] overflow-hidden rounded-2xl bg-sky-100">
          <Image
            src={route.coverImage}
            alt={route.title}
            fill
            className="object-cover"
            priority
            sizes="768px"
          />
        </div>

        <h1 className="text-3xl font-bold leading-tight text-sky-950 sm:text-4xl">
          {route.title}
        </h1>
        <p className="mt-3 text-xl leading-relaxed text-sky-800">
          {route.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-lg bg-sky-100 px-3 py-1.5 text-lg font-medium text-sky-900">
            {region?.name ?? REGION_SHORT[route.region]}
          </span>
          <span className="rounded-lg bg-emerald-100 px-3 py-1.5 text-lg font-medium text-emerald-900">
            {route.daysLabel}
          </span>
          <span className="rounded-lg bg-amber-100 px-3 py-1.5 text-lg font-medium text-amber-900">
            {TRIP_TYPE_LABELS[route.tripType]}
          </span>
          {route.seasons.map((season) => (
            <span
              key={season}
              className="rounded-lg bg-orange-100 px-3 py-1.5 text-lg font-medium text-orange-900"
            >
              {SEASON_LABELS[season]}季宜游
            </span>
          ))}
          {route.fromHome && (
            <span className="rounded-lg bg-emerald-700 px-3 py-1.5 text-lg font-medium text-white">
              从北京家出发
            </span>
          )}
        </div>

        <div className="mt-8">
          <RouteOverviewMap stops={route.stops} />
        </div>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-sky-950">行程安排</h2>
          <StopTimeline stops={route.stops} />
        </section>

        <section className="mt-10 rounded-2xl border border-sky-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-sky-950">交通方式</h2>
          <p className="mt-3 text-lg leading-relaxed text-sky-900">
            {route.transport}
          </p>
          <p className="mt-2 text-lg text-sky-700">{transportNote}</p>
        </section>

        <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold text-amber-950">预算参考</h2>
          <p className="mt-3 text-xl font-semibold text-amber-900">
            {route.budgetLabel}
          </p>
          <p className="mt-2 text-lg text-amber-800">
            家庭月旅行预算约 2 万元，可按实际节奏增减。
          </p>
        </section>

        {route.whyFast && (
          <section className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h2 className="text-2xl font-bold text-orange-950">快览说明</h2>
            <p className="mt-3 text-lg leading-relaxed text-orange-900">
              {route.whyFast}
            </p>
          </section>
        )}

        <section className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-2xl font-bold text-emerald-950">给爸妈的提醒</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-lg text-emerald-900">
            <li>每天留足休息时间，不赶景点。</li>
            <li>备好常用药，高原/寒冷地区注意保暖。</li>
            <li>穿防滑舒适的鞋，带遮阳帽和保温杯。</li>
            <li>远途提前订好适老房型，减少搬行李。</li>
          </ul>
        </section>
      </main>
    </>
  );
}
