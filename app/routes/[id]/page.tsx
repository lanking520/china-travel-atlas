import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionById, getRouteById, routes } from "@/content";
import { Header } from "@/components/Header";
import { RouteBackLink } from "@/components/RouteBackLink";
import { SafeImage } from "@/components/SafeImage";
import { SoftDetails } from "@/components/SoftDetails";
import { StopTimeline } from "@/components/StopTimeline";
import { REGION_SHORT, SEASON_LABELS, COMPOSITION_LABELS, TRIP_TYPE_LABELS } from "@/lib/labels";
import {
  HOSPITAL_DISCLAIMER,
  amapUrlForRoute,
  asPlanLines,
  buildGallery,
  buildIntroduction,
  buildNotices,
  buildPracticalGuide,
  buildRoutePracticalBrief,
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
  const brief = buildRoutePracticalBrief(route);
  const timePlanLines = asPlanLines(practical.timePlan ?? []);
  const amap = amapUrlForRoute(route);
  const stops = route.stops.map((s) => stopWithImage(s, route.coverImage));

  const isBase = route.compositionKind === "base";
  const showLongStayGates =
    isBase || Boolean(route.themes?.includes("long-stay"));
  const compositionLabel = route.compositionKind
    ? route.compositionKind === "compose"
      ? "长线组合"
      : COMPOSITION_LABELS[route.compositionKind]
    : TRIP_TYPE_LABELS[route.tripType];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        <RouteBackLink />

        <h1 className="text-2xl font-bold leading-tight text-sky-950 sm:text-4xl">
          {route.title}
        </h1>
        <p className="mt-2 text-base leading-relaxed text-sky-800 sm:text-xl">
          {route.summary}
        </p>

        <p className="mt-3 rounded-xl bg-amber-50 px-3 py-2.5 text-base font-semibold leading-snug text-amber-950 ring-1 ring-amber-200/80 sm:px-4 sm:py-3 sm:text-lg">
          大致金额估算：{route.budgetLabel}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
          <span className="rounded-lg bg-sky-100 px-2.5 py-1 text-sm font-medium text-sky-900 sm:px-3 sm:py-1.5 sm:text-lg">
            {region?.name ?? REGION_SHORT[route.region]}
          </span>
          <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-sm font-medium text-emerald-900 sm:px-3 sm:py-1.5 sm:text-lg">
            {route.daysLabel}
          </span>
          <span className="rounded-lg bg-amber-100 px-2.5 py-1 text-sm font-medium text-amber-900 sm:px-3 sm:py-1.5 sm:text-lg">
            {compositionLabel}
          </span>
          {showLongStayGates ? (
            <span className="rounded-lg bg-teal-100 px-2.5 py-1 text-sm font-medium text-teal-950 sm:px-3 sm:py-1.5 sm:text-lg">
              三门槛：进出·物资·三甲
            </span>
          ) : null}
          {route.seasons.map((season) => (
            <span
              key={season}
              className="rounded-lg bg-orange-100 px-2.5 py-1 text-sm font-medium text-orange-900 sm:px-3 sm:py-1.5 sm:text-lg"
            >
              {SEASON_LABELS[season]}季宜游
            </span>
          ))}
          {route.fromHome && (
            <span className="rounded-lg bg-emerald-700 px-2.5 py-1 text-sm font-medium text-white sm:px-3 sm:py-1.5 sm:text-lg">
              从北京家出发
            </span>
          )}
          {route.fromZhengzhouHome && (
            <span className="rounded-lg bg-sky-700 px-2.5 py-1 text-sm font-medium text-white sm:px-3 sm:py-1.5 sm:text-lg">
              从郑州家出发
            </span>
          )}
          {route.themes?.includes("famous-scenic") && (
            <span className="rounded-lg bg-rose-700 px-2.5 py-1 text-sm font-medium text-white sm:px-3 sm:py-1.5 sm:text-lg">
              名景
            </span>
          )}
          {route.themes?.includes("grand-loop") && (
            <span className="rounded-lg bg-amber-700 px-2.5 py-1 text-sm font-medium text-white sm:px-3 sm:py-1.5 sm:text-lg">
              全国大环线
            </span>
          )}
          {route.themes?.includes("frontier") && (
            <span className="rounded-lg bg-slate-700 px-2.5 py-1 text-sm font-medium text-white sm:px-3 sm:py-1.5 sm:text-lg">
              边陲城市
            </span>
          )}
          {route.themes?.includes("long-stay") && (
            <span className="rounded-lg bg-teal-700 px-2.5 py-1 text-sm font-medium text-white sm:px-3 sm:py-1.5 sm:text-lg">
              长居推荐
            </span>
          )}
          {route.themes?.includes("corridor") && (
            <span className="rounded-lg bg-indigo-700 px-2.5 py-1 text-sm font-medium text-white sm:px-3 sm:py-1.5 sm:text-lg">
              经典走廊
            </span>
          )}
        </div>

        <nav
          aria-label="本页目录"
          className="sticky top-0 z-10 -mx-4 mt-5 border-b border-sky-200/70 bg-[color-mix(in_srgb,var(--background)_92%,white)] px-4 py-2 backdrop-blur-md sm:mx-0 sm:rounded-xl sm:border sm:border-sky-200/60"
        >
          <ul className="flex gap-1 overflow-x-auto text-sm font-semibold text-sky-800 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(
              [
                ...(route.compositionKind === "compose" && route.legIds?.length
                  ? ([["#compose-legs", "组合"]] as [string, string][])
                  : []),
                ...(showLongStayGates
                  ? ([["#gates", "门槛"]] as [string, string][])
                  : []),
                ...(route.nearbyLegs && route.nearbyLegs.length > 0
                  ? ([["#nearby", "辐射"]] as [string, string][])
                  : []),
                ["#practical", "交通"],
                ["#guide", "怎么走"],
                ["#time", "时间"],
                ["#sights", "景点"],
                ["#dining", "吃住"],
                ["#hospital", "就医"],
                ["#notices", "须知"],
              ] as [string, string][]
            ).map(([href, label]) => {
              const isHubJump = href === "#gates" || href === "#nearby";
              return (
                <li key={href} className="shrink-0">
                  <a
                    href={href}
                    className={
                      isHubJump
                        ? "inline-flex min-h-8 items-center rounded-lg bg-teal-100/80 px-2.5 py-1 text-teal-950 hover:bg-teal-200/80"
                        : "inline-flex min-h-8 items-center rounded-lg px-2.5 py-1 hover:bg-sky-100/80 hover:text-sky-950"
                    }
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="relative mt-6 -mx-4 aspect-[16/10] overflow-hidden bg-sky-100 sm:mx-0 sm:aspect-[21/9] sm:rounded-2xl">
          <SafeImage
            src={route.coverImage}
            alt={route.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {gallery.length > 1 ? (
          <div
            aria-label="景点速览"
            className="mt-3 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {gallery.slice(0, 6).map((img) => (
              <figure
                key={img.url + img.caption}
                className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-sky-100 ring-1 ring-sky-200/80 sm:h-24 sm:w-36"
              >
                <SafeImage
                  src={img.url}
                  alt={img.caption}
                  fill
                  className="object-cover"
                  sizes="144px"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        ) : null}

        {showLongStayGates ? (
          <section
            id="gates"
            className="mt-10 scroll-mt-14 rounded-2xl border border-teal-300 bg-teal-50 p-6"
          >
            <h2 className="text-2xl font-bold text-teal-950">长居三门槛</h2>
            <p className="mt-2 text-base text-teal-800">
              进出交通 · 生活物资 · 本地三甲——达不到就不与枢纽并列推荐。
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {(
                [
                  ["交通便利", "机场 / 高铁 / 高速进出是否省心"],
                  ["生活物资", "约一月超市、菜市场与药店"],
                  ["医疗资源", "本地三甲；弱则写明下撤"],
                ] as const
              ).map(([title, blurb]) => (
                <li
                  key={title}
                  className="rounded-xl bg-white/90 px-3 py-2.5 ring-1 ring-teal-200/90"
                >
                  <p className="text-base font-semibold text-teal-950">
                    {title}
                  </p>
                  <p className="mt-0.5 text-sm leading-snug text-teal-800">
                    {blurb}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-teal-950">
              {paragraphs(practical.longStay ?? "").map((p) => (
                <p key={p.slice(0, 24)} className="whitespace-pre-line">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        {route.nearbyLegs && route.nearbyLegs.length > 0 ? (
          <section
            id="nearby"
            className="mt-10 scroll-mt-14 rounded-2xl border border-sky-200 bg-sky-50/90 p-6"
          >
            <h2 className="text-2xl font-bold text-sky-950">
              {isBase ? "从本枢纽可辐射" : "周边短线"}
            </h2>
            <p className="mt-2 text-base text-sky-700">
              {isBase
                ? "景点正文只在各短线 / 长线卡；本枢纽负责住稳与进出，不复述打卡清单。"
                : "可辐射的短线 / 过夜日归 / 可选组合；景点正文在各卡。"}
            </p>
            <ul className="mt-4 space-y-3">
              {route.nearbyLegs.map((legId) => {
                const leg = getRouteById(legId);
                const kind =
                  leg?.compositionKind === "compose"
                    ? "长线"
                    : leg?.compositionKind === "base"
                      ? "枢纽"
                      : "短线";
                return (
                  <li
                    key={legId}
                    className="rounded-xl bg-white/90 px-4 py-3 ring-1 ring-sky-200/80"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <Link
                        href={`/routes/${legId}/?from=${encodeURIComponent(route.id)}`}
                        className="font-semibold text-sky-950 underline-offset-2 hover:underline"
                      >
                        {leg?.title ?? legId}
                      </Link>
                      <span className="rounded-md bg-sky-100 px-1.5 py-0.5 text-sm font-medium text-sky-900">
                        {kind}
                      </span>
                      {leg?.daysLabel ? (
                        <span className="text-sm text-sky-700">
                          {leg.daysLabel}
                        </span>
                      ) : null}
                    </div>
                    {leg?.summary ? (
                      <p className="mt-1.5 text-base leading-snug text-sky-800/90">
                        {leg.summary.length > 96
                          ? `${leg.summary.slice(0, 96)}…`
                          : leg.summary}
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        <section
          id="practical"
          className="mt-10 scroll-mt-14 rounded-2xl border border-sky-200 bg-sky-50/90 p-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-sky-950">精细化路线介绍</h2>
              <p className="mt-2 text-base text-sky-700">
                怎么去、段内怎么衔接、大致车程与节奏——只写已有字段，不画示意地图。
              </p>
            </div>
            {amap ? (
              <a
                href={amap}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-xl bg-sky-700 px-4 py-2 text-base font-semibold text-white hover:bg-sky-800"
              >
                在高德打开首站
              </a>
            ) : null}
          </div>
          <dl className="mt-5 space-y-4">
            <div className="rounded-xl bg-white/90 px-4 py-3 ring-1 ring-sky-200/80">
              <dt className="text-base font-semibold text-sky-800">怎么去</dt>
              <dd className="mt-1 text-lg leading-relaxed text-sky-950">
                {brief.howToArrive}
              </dd>
            </div>
            <div className="rounded-xl bg-white/90 px-4 py-3 ring-1 ring-sky-200/80">
              <dt className="text-base font-semibold text-sky-800">段内交通</dt>
              <dd className="mt-1 text-lg leading-relaxed text-sky-950">
                {brief.localTransport}
              </dd>
            </div>
            <div className="rounded-xl bg-white/90 px-4 py-3 ring-1 ring-sky-200/80">
              <dt className="text-base font-semibold text-sky-800">
                大致距离或车程
              </dt>
              <dd className="mt-1 text-lg leading-relaxed text-sky-950">
                {brief.distanceOrDrive ??
                  "本卡未单列站间公里数；请结合「怎么去」与高德实估，勿把文案当导航。"}
              </dd>
            </div>
            <div className="rounded-xl bg-white/90 px-4 py-3 ring-1 ring-sky-200/80">
              <dt className="text-base font-semibold text-sky-800">节奏</dt>
              <dd className="mt-1 text-lg leading-relaxed text-sky-950">
                {brief.pacing}
              </dd>
            </div>
          </dl>
          {brief.gaps.length > 0 ? (
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-amber-950">
              {brief.gaps.map((g) => (
                <li
                  key={g.slice(0, 40)}
                  className="rounded-lg bg-amber-50 px-3 py-2 ring-1 ring-amber-200/80"
                >
                  {g}
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-sky-950">详细介绍</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-sky-900">
            {paragraphs(introduction).map((p) => (
              <p key={p.slice(0, 24)} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>

          {route.compositionKind === "compose" &&
          route.legIds &&
          route.legIds.length > 0 ? (
            <div
              id="compose-legs"
              className="mt-6 scroll-mt-14 rounded-2xl border border-amber-200 bg-amber-50/90 p-5 sm:p-6"
            >
              <h3 className="text-xl font-bold text-amber-950 sm:text-2xl">
                嵌入短线
              </h3>
              <p className="mt-2 text-base text-amber-900/90">
                本长线由下列短线按顺序组成；点卡片进短线看景点正文。中间「衔接」是 glue，不是独立行程卡。
              </p>
              <ol className="mt-4 space-y-3">
                {route.legIds.map((legId, index) => {
                  const leg = getRouteById(legId);
                  const glueAfter = route.glue?.[index];
                  return (
                    <li key={legId}>
                      <Link
                        href={`/routes/${legId}/?from=${encodeURIComponent(route.id)}`}
                        className="block rounded-xl bg-white px-4 py-3 ring-1 ring-amber-200/90 transition hover:ring-amber-400"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            aria-hidden
                            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-800 text-sm font-bold text-white"
                          >
                            {index + 1}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-lg font-semibold text-sky-950">
                              <span className="underline-offset-2 hover:underline">
                                {leg?.title ?? legId}
                              </span>
                              <span className="ml-2 text-base font-medium text-amber-800">
                                → 打开短线
                              </span>
                            </p>
                            {leg?.daysLabel ? (
                              <p className="mt-0.5 text-base text-sky-700">
                                {leg.daysLabel}
                                {leg.compositionKind === "leg" ? " · 短线" : ""}
                              </p>
                            ) : null}
                            {leg?.summary ? (
                              <p className="mt-1 text-base leading-snug text-sky-800/90">
                                {leg.summary.length > 88
                                  ? `${leg.summary.slice(0, 88)}…`
                                  : leg.summary}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </Link>
                      {glueAfter ? (
                        <div className="mt-2 rounded-xl bg-white/70 px-3 py-2 text-base leading-relaxed text-sky-900 ring-1 ring-amber-100">
                          <span className="font-semibold text-amber-900">
                            衔接
                          </span>
                          <span className="text-sky-800"> · {glueAfter}</span>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
              {route.glue &&
              route.glue.length > 0 &&
              route.glue.length >= route.legIds.length ? (
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-sky-900">
                  {route.glue.slice(route.legIds.length).map((g) => (
                    <li key={g.slice(0, 40)}>
                      <span className="font-semibold text-amber-900">总述</span>
                      <span className="text-sky-800"> · {g}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </section>

        <section id="guide" className="mt-10 scroll-mt-14 rounded-2xl border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-2xl font-bold text-sky-950">路线指南</h2>
          <p className="mt-2 text-base text-sky-700">
            顺序、可跳过项与体力提示——对照上方「精细化路线介绍」的交通与节奏。
          </p>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-sky-900">
            {paragraphs(practical.routeGuide ?? "").map((p) => (
              <p key={p.slice(0, 24)} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section id="time" className="mt-10 scroll-mt-14 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
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

        <section id="sights" className="mt-10 scroll-mt-14 space-y-4">
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

        <section id="dining" className="mt-10 scroll-mt-14 rounded-2xl border border-rose-200 bg-rose-50 p-6">
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

        {showLongStayGates ? null : (
          <SoftDetails title="长居建议" tone="teal" className="mt-10">
            <div className="space-y-4 text-lg leading-relaxed text-teal-950">
              {paragraphs(practical.longStay ?? "").map((p) => (
                <p key={p.slice(0, 24)} className="whitespace-pre-line">
                  {p}
                </p>
              ))}
            </div>
          </SoftDetails>
        )}

        <section id="hospital" className="mt-10 scroll-mt-14 rounded-2xl border border-slate-300 bg-slate-50 p-6">
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

        <section id="notices" className="mt-10 scroll-mt-14 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-2xl font-bold text-emerald-950">旅行须知</h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-lg text-emerald-950">
            {notices.map((n) => (
              <li key={n} className="leading-relaxed">
                {n}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold text-amber-950">预算参考</h2>
          <p className="mt-1 text-base font-medium text-amber-800/90">
            本路线大致金额估算（供参考，非报价）
          </p>
          <p className="mt-3 text-xl font-semibold text-amber-900">{route.budgetLabel}</p>
        </section>

        {route.whyFast && (
          <SoftDetails title="快览说明" tone="orange">
            <p className="text-lg leading-relaxed text-orange-900">{route.whyFast}</p>
          </SoftDetails>
        )}

        {(route.sources?.length || route.researchKeywords?.length) && (
          <SoftDetails title="参考来源与复核" tone="slate">
            {route.researchKeywords && route.researchKeywords.length > 0 && (
              <p className="text-lg text-slate-700">
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
          </SoftDetails>
        )}
      </main>
    </>
  );
}
