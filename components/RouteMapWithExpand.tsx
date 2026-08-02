"use client";

import { useEffect, useId, useState } from "react";
import type { Stop, TripType } from "@/content/types";
import { RouteOverviewMap } from "./RouteOverviewMap";

interface RouteMapWithExpandProps {
  stops: Stop[];
  fromHome?: boolean;
  tripType?: TripType;
  amapUrl?: string | null;
}

export function RouteMapWithExpand({
  stops,
  fromHome = false,
  tripType,
  amapUrl,
}: RouteMapWithExpandProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-bold text-sky-950">路线地图</h2>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-[48px] items-center rounded-xl bg-white px-4 py-2 text-lg font-semibold text-sky-800 ring-1 ring-sky-300 hover:bg-sky-50"
          >
            放大看全图
          </button>
          {amapUrl ? (
            <a
              href={amapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center rounded-xl bg-sky-700 px-4 py-2 text-lg font-semibold text-white hover:bg-sky-800"
            >
              在高德地图打开
            </a>
          ) : null}
        </div>
      </div>
      <RouteOverviewMap
        stops={stops}
        fromHome={fromHome}
        tripType={tripType}
      />
      <p className="mt-3 text-base text-sky-700">
        示意图展示停留顺序与慢游/快览节奏，不提供实时路况。开车导航请用高德或百度。
      </p>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-sky-950/70 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-auto rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-100 px-4 py-3 sm:px-6">
              <h2 id={titleId} className="text-xl font-bold text-sky-950 sm:text-2xl">
                路线全图
              </h2>
              <div className="flex flex-wrap gap-2">
                {amapUrl ? (
                  <a
                    href={amapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center rounded-xl bg-sky-700 px-4 py-2 text-lg font-semibold text-white hover:bg-sky-800"
                  >
                    在高德地图打开
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[48px] items-center rounded-xl bg-orange-600 px-4 py-2 text-lg font-semibold text-white hover:bg-orange-700"
                >
                  关闭
                </button>
              </div>
            </div>
            <div className="flex-1 p-4 sm:p-6">
              <div className="min-h-[min(70vh,560px)] [&_svg]:min-h-[min(55vh,480px)]">
                <RouteOverviewMap
                  stops={stops}
                  fromHome={fromHome}
                  tripType={tripType}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
