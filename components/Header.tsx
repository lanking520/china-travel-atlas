import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-sky-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-3">
        <Link
          href="/"
          className="font-display min-w-0 truncate text-lg font-bold tracking-wide text-sky-950 sm:text-2xl"
        >
          爸妈中国旅游地图
        </Link>
        <nav className="flex shrink-0 gap-0.5 sm:gap-2">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-lg px-2.5 py-2 text-base font-medium text-sky-800 hover:bg-sky-100/70 sm:px-4 sm:text-lg"
          >
            探索
          </Link>
          <Link
            href="/overview/"
            className="inline-flex min-h-[44px] items-center rounded-lg px-2.5 py-2 text-base font-medium text-sky-800 hover:bg-sky-100/70 sm:px-4 sm:text-lg"
          >
            <span className="sm:hidden">两年</span>
            <span className="hidden sm:inline">两年怎么走</span>
          </Link>
          <Link
            href="/about/"
            className="inline-flex min-h-[44px] items-center rounded-lg px-2.5 py-2 text-base font-medium text-sky-800 hover:bg-sky-100/70 sm:px-4 sm:text-lg"
          >
            说明
          </Link>
        </nav>
      </div>
    </header>
  );
}
