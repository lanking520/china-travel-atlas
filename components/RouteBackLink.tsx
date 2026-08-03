"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, type MouseEvent } from "react";

const ROUTE_ID_RE = /^[a-z0-9][a-z0-9-]{0,120}$/i;
const LAST_PATH_KEY = "cta:lastPath";
const PREV_PATH_KEY = "cta:prevPath";

const linkClassName =
  "mb-4 inline-flex min-h-9 items-center text-base font-medium text-sky-700 hover:text-sky-900";

function parseReturnId(raw: string | null): string | null {
  if (!raw) return null;
  const id = raw
    .trim()
    .replace(/^\/?(?:routes\/)?/i, "")
    .replace(/\/+$/, "");
  return ROUTE_ID_RE.test(id) ? id : null;
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

function normalizePath(path: string): string {
  if (!path) return "";
  let p = path;
  if (BASE_PATH && (p === BASE_PATH || p.startsWith(`${BASE_PATH}/`))) {
    p = p.slice(BASE_PATH.length) || "/";
  }
  return p.replace(/\/+$/, "") || "/";
}

function isRouteDetailPath(path: string): boolean {
  return /^\/routes\/[^/]+$/.test(normalizePath(path));
}

function ExploreFallback({ onClick }: { onClick?: (e: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <Link href="/" className={linkClassName} onClick={onClick}>
      ← 返回探索
    </Link>
  );
}

function RouteBackLinkInner() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const returnId =
    parseReturnId(searchParams.get("from")) ??
    parseReturnId(searchParams.get("returnTo"));

  useEffect(() => {
    try {
      const cur = normalizePath(pathname);
      const last = sessionStorage.getItem(LAST_PATH_KEY) || "";
      if (last && last !== cur) {
        sessionStorage.setItem(PREV_PATH_KEY, last);
      }
      sessionStorage.setItem(LAST_PATH_KEY, cur);
    } catch {
      /* private mode / blocked storage */
    }
  }, [pathname]);

  if (returnId) {
    const currentId = normalizePath(pathname).replace(/^\/routes\//, "");
    if (returnId !== currentId) {
      return (
        <Link href={`/routes/${returnId}/`} className={linkClassName}>
          ← 返回
        </Link>
      );
    }
  }

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    let preferBack = false;
    try {
      if (document.referrer) {
        const ref = new URL(document.referrer);
        if (
          ref.origin === window.location.origin &&
          isRouteDetailPath(ref.pathname) &&
          normalizePath(ref.pathname) !== normalizePath(pathname)
        ) {
          preferBack = true;
        }
      }
      if (!preferBack) {
        const prev = sessionStorage.getItem(PREV_PATH_KEY) || "";
        if (
          isRouteDetailPath(prev) &&
          normalizePath(prev) !== normalizePath(pathname) &&
          window.history.length > 1
        ) {
          preferBack = true;
        }
      }
    } catch {
      preferBack = false;
    }
    if (preferBack) {
      e.preventDefault();
      router.back();
    }
  };

  return <ExploreFallback onClick={onClick} />;
}

/**
 * Detail sticky「返回」: honor ?from= / ?returnTo= (compose→leg),
 * else history/referrer when previous page was another /routes/…,
 * else Explore catalog.
 */
export function RouteBackLink() {
  return (
    <Suspense fallback={<ExploreFallback />}>
      <RouteBackLinkInner />
    </Suspense>
  );
}
