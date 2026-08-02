import Image from "next/image";
import type { Stop } from "@/content/types";
import { PACE_LABELS } from "@/lib/labels";

interface StopTimelineProps {
  stops: Stop[];
}

export function StopTimeline({ stops }: StopTimelineProps) {
  return (
    <ol className="relative space-y-8 border-l-4 border-sky-300 pl-8">
      {stops.map((stop, index) => (
        <li
          key={stop.id}
          id={`stop-${stop.id}`}
          className="relative scroll-mt-24"
        >
          <span
            className={`absolute -left-[14px] flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-white ${
              stop.pace === "slow" ? "bg-emerald-600" : "bg-orange-500"
            }`}
          >
            {index + 1}
          </span>
          <article className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold text-sky-950">{stop.name}</h3>
              <span
                className={`rounded-lg px-3 py-1 text-base font-semibold ${
                  stop.pace === "slow"
                    ? "bg-emerald-100 text-emerald-900"
                    : "bg-orange-100 text-orange-900"
                }`}
              >
                {PACE_LABELS[stop.pace]}
              </span>
              {stop.days > 0 && (
                <span className="text-lg text-sky-700">
                  约 {stop.days} 天
                </span>
              )}
            </div>
            {stop.image && (
              <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl bg-sky-100">
                <Image
                  src={stop.image}
                  alt={stop.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            )}
            <p className="text-lg leading-relaxed text-sky-900">{stop.summary}</p>
            {stop.tips && (
              <p className="mt-3 rounded-xl bg-amber-50 px-4 py-3 text-lg text-amber-900">
                <span className="font-semibold">小贴士：</span>
                {stop.tips}
              </p>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}
