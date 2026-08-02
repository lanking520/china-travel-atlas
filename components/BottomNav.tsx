"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "探索", match: (p: string) => p === "/" },
  {
    href: "/overview/",
    label: "两年",
    match: (p: string) => p.startsWith("/overview"),
  },
  {
    href: "/about/",
    label: "说明",
    match: (p: string) => p.startsWith("/about"),
  },
] as const;

/**
 * Mobile bottom nav (探索 / 两年 / 说明) with safe-area.
 * Hidden from sm+ where the header nav is enough.
 */
export function BottomNav() {
  const pathname = usePathname() || "/";

  return (
    <nav
      aria-label="底部导航"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-sky-200/70 bg-white/95 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <ul className="mx-auto flex max-w-lg items-stretch">
        {ITEMS.map((item) => {
          const active = item.match(pathname);
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 flex-col items-center justify-center gap-0.5 px-2 text-[0.8rem] font-semibold tracking-wide transition-colors ${
                  active
                    ? "text-sky-900"
                    : "text-sky-600/85 hover:text-sky-800"
                }`}
              >
                <span
                  className={`h-0.5 w-5 rounded-full ${
                    active ? "bg-sky-700" : "bg-transparent"
                  }`}
                  aria-hidden
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
