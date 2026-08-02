import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionById, getRouteById, routes } from "@/content";
import { Header } from "@/components/Header";
import { RouteMapWithExpand } from "@/components/RouteMapWithExpand";
import { SafeImage } from "@/components/SafeImage";
import { StopTimeline } from "@/components/StopTimeline";
import { REGION_SHORT, SEASON_LABELS, TRIP_TYPE_LABELS } from "@/lib/labels";
import {
  HOSPITAL_DISCLAIMER,
  amapUrlForRoute,
  asPlanLines,
  buildGallery,
  buildIntroduction,
  buildNotices,
  buildPracticalGuide,
  buildSeasonGuide,
  paragraphs,
  stopWithImage,
} from "@/lib/route-detail";

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
  const introduction = buildIntroduction(route);
  const seasonGuide = buildSeasonGuide(route);
  const notices = buildNotices(route);
  const gallery = buildGallery(route);
  const practical = buildPracticalGuide(route);
  const timePlanLines = asPlanLines(practical.timePlan ?? []);
  const amap = amapUrlForRoute(route);
  const stops = route.stops.map((s) => stopWithImage(s, route.coverImage));

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

        <h1 className="text-3xl font-bold leading-tight text-sky-950 sm:text-4xl">
          {route.title}
        </h1>
        <p className="mt-3 text-xl leading-relaxed text-sky-800">{route.summary}</p>

        <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-lg font-semibold leading-snug text-amber-950 ring-1 ring-amber-200/80">
          大致金额估算：{route.budgetLabel}
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
          {route.themes?.includes("grand-loop") && (
            <span className="rounded-lg bg-amber-700 px-3 py-1.5 text-lg font-medium text-white">
              全国大环线
            </span>
          )}
          {route.themes?.includes("frontier") && (
            <span className="rounded-lg bg-slate-700 px-3 py-1.5 text-lg font-medium text-white">
              边陲城市
            </span>
          )}
          {route.themes?.includes("long-stay") && (
            <span className="rounded-lg bg-teal-700 px-3 py-1.5 text-lg font-medium text-white">
              长居推荐
            </span>
          )}
        </div>

        <div className="mt-6">
          <RouteMapWithExpand
            stops={stops}
            fromHome={route.fromHome}
            tripType={route.tripType}
            amapUrl={amap}
          />
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-sky-100 sm:aspect-[21/9]">
          <SafeImage
            src={route.coverImage}
            alt={route.title}
            fill
            className="object-cover"
            sizes="768px"
            priority
          />
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-sky-950">详细介绍</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-sky-900">
            {paragraphs(introduction).map((p) => (
              <p key={p.slice(0, 24)} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-2xl font-bold text-sky-950">路线指南</h2>
          <p className="mt-2 text-base text-sky-700">
            怎么走、什么节奏、哪些可以跳过——给约 60 岁健康父母的实用版。
          </p>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-sky-900">
            {paragraphs(practical.routeGuide ?? "").map((p) => (
              <p key={p.slice(0, 24)} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
          <h2 className="text-2xl font-bold text-cyan-950">时间规划</h2>
          <p className="mt-2 text-base text-cyan-800">
            按本线「{route.daysLabel}」拆块；可整块删减，勿排满。
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-cyan-950">
            {timePlanLines.map((line) => (
              <li key={line.slice(0, 32)}>{line}</li>
            ))}
          </ol>
        </section>

        <section className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-950">适合季节</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {route.seasons.map((season) => (
              <span
                key={season}
                className="rounded-lg bg-white px-3 py-1.5 text-lg font-semibold text-orange-900 ring-1 ring-orange-200"
              >
                {SEASON_LABELS[season]}季
              </span>
            ))}
          </div>
          <p className="mt-4 text-lg leading-relaxed text-orange-950">{seasonGuide}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-sky-950">景点照片</h2>
          <p className="mt-2 text-lg text-sky-700">
            公开图源或示意生成图，成行前可换成自己实拍；现场景色以当日为准。标「示意生成图」的不是照片。
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {gallery.map((img) => (
              <figure
                key={img.url + img.caption}
                className="overflow-hidden rounded-2xl border border-sky-200 bg-white"
              >
                <div className="relative aspect-[4/3] bg-sky-100">
                  <SafeImage
                    src={img.url}
                    alt={img.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 384px"
                  />
                </div>
                <figcaption className="px-4 py-3 text-base font-medium text-sky-900">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-sky-950">旅游景点</h2>
          <p className="text-lg text-sky-700">
            站点顺序与停留节奏如下；可对照「路线指南」删减。
          </p>
          <StopTimeline stops={stops} />
          {practical.sightsTips && (
            <div className="rounded-2xl border border-sky-200 bg-white p-6">
              <h3 className="text-xl font-bold text-sky-950">景点提示</h3>
              <div className="mt-3 space-y-2 whitespace-pre-line text-lg leading-relaxed text-sky-900">
                {practical.sightsTips}
              </div>
            </div>
          )}
        </section>

        <section className="mt-10 rounded-2xl border border-rose-200 bg-rose-50 p-6">
          <h2 className="text-2xl font-bold text-rose-950">餐饮</h2>
          <p className="mt-2 text-base text-rose-800">
            地方特色可浅尝；优先清淡、少油少辣，照顾肠胃。
          </p>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-rose-950">
            {paragraphs(practical.dining ?? "").map((p) => (
              <p key={p.slice(0, 24)} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h2 className="text-2xl font-bold text-teal-950">长居建议</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-teal-950">
            {paragraphs(practical.longStay ?? "").map((p) => (
              <p key={p.slice(0, 24)} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-300 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">附近医院</h2>
          <p className="mt-2 text-base text-slate-600">
            主基地附近常见三甲 / 可信医院，出行前用官网或高德核对。
          </p>
          <ul className="mt-4 space-y-4">
            {(practical.hospitals ?? []).map((h) => (
              <li
                key={h.name + (h.area ?? "")}
                className="rounded-xl bg-white p-4 ring-1 ring-slate-200"
              >
                <p className="text-xl font-semibold text-slate-900">{h.name}</p>
                <p className="mt-1 text-lg text-slate-700">
                  {[h.level, h.area].filter(Boolean).join(" · ")}
                </p>
                {h.note ? (
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{h.note}</p>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {HOSPITAL_DISCLAIMER}
          </p>
          {practical.fromTemplate ? (
            <p className="mt-2 text-base text-amber-800">
              本页部分就医信息来自地区模板，请务必用高德/官网再核实。
            </p>
          ) : null}
        </section>

        <section className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-2xl font-bold text-emerald-950">旅行须知</h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-lg text-emerald-950">
            {notices.map((n) => (
              <li key={n} className="leading-relaxed">
                {n}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-sky-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-sky-950">交通方式</h2>
          <p className="mt-3 text-lg leading-relaxed text-sky-900">{route.transport}</p>
          <p className="mt-2 text-lg text-sky-700">{transportNote}</p>
          {route.tripType === "long" && (
            <p className="mt-2 text-lg text-sky-700">
              行程结束后建议回京休整几天，再出发下一段。
            </p>
          )}
        </section>

        <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold text-amber-950">预算参考</h2>
          <p className="mt-1 text-base font-medium text-amber-800/90">
            本路线大致金额估算（供参考，非报价）
          </p>
          <p className="mt-3 text-xl font-semibold text-amber-900">{route.budgetLabel}</p>
        </section>

        {route.whyFast && (
          <section className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h2 className="text-2xl font-bold text-orange-950">快览说明</h2>
            <p className="mt-3 text-lg leading-relaxed text-orange-900">{route.whyFast}</p>
          </section>
        )}

        {(route.sources?.length || route.researchKeywords?.length) && (
          <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">参考来源与复核</h2>
            {route.researchKeywords && route.researchKeywords.length > 0 && (
              <p className="mt-3 text-lg text-slate-700">
                可在小红书/知乎搜索：
                {route.researchKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="mr-2 mt-2 inline-block rounded-lg bg-white px-3 py-1 text-base text-slate-800 ring-1 ring-slate-200"
                  >
                    {kw}
                  </span>
                ))}
              </p>
            )}
            {route.sources && route.sources.length > 0 && (
              <ul className="mt-4 space-y-3">
                {route.sources.map((source) => (
                  <li key={source.url} className="text-lg text-slate-800">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sky-800 underline-offset-2 hover:underline"
                    >
                      {source.title}
                    </a>
                    {source.note ? (
                      <span className="mt-1 block text-base text-slate-600">{source.note}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-base text-slate-600">
              社区笔记仅作参考，出行前以景区官网与现场公告为准。
            </p>
          </section>
        )}
      </main>
    </>
  );
}
