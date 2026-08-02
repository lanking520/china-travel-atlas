import type { ReactNode } from "react";

/**
 * Lightweight progressive disclosure — native &lt;details&gt;, modern density
 * (not senior-mode bulky accordion chrome).
 */
export function SoftDetails({
  title,
  children,
  defaultOpen = false,
  className = "",
  summaryClassName = "",
  tone = "slate",
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  summaryClassName?: string;
  tone?: "slate" | "orange" | "teal" | "rose" | "sky";
}) {
  const tones: Record<string, { box: string; title: string; chevron: string }> =
    {
      slate: {
        box: "border-slate-200 bg-slate-50",
        title: "text-slate-900",
        chevron: "text-slate-500",
      },
      orange: {
        box: "border-orange-200 bg-orange-50",
        title: "text-orange-950",
        chevron: "text-orange-600",
      },
      teal: {
        box: "border-teal-200 bg-teal-50",
        title: "text-teal-950",
        chevron: "text-teal-600",
      },
      rose: {
        box: "border-rose-200 bg-rose-50",
        title: "text-rose-950",
        chevron: "text-rose-600",
      },
      sky: {
        box: "border-sky-200 bg-sky-50",
        title: "text-sky-950",
        chevron: "text-sky-600",
      },
    };
  const t = tones[tone] ?? tones.slate;

  return (
    <details
      className={`group mt-6 rounded-2xl border ${t.box} ${className}`}
      open={defaultOpen || undefined}
    >
      <summary
        className={`flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 marker:content-none [&::-webkit-details-marker]:hidden sm:px-6 sm:py-4 ${summaryClassName}`}
      >
        <span className={`text-xl font-bold ${t.title} sm:text-2xl`}>
          {title}
        </span>
        <span
          aria-hidden
          className={`shrink-0 text-sm font-semibold ${t.chevron}`}
        >
          <span className="group-open:hidden">展开 ▾</span>
          <span className="hidden group-open:inline">收起 ▴</span>
        </span>
      </summary>
      <div className="border-t border-black/5 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
        {children}
      </div>
    </details>
  );
}
