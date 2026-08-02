import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-sky-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-6 sm:py-3">
        <Link
          href="/"
          className="font-display min-w-0 truncate text-[1.05rem] font-bold tracking-wide text-sky-950 sm:text-2xl"
        >
          爸妈中国旅游地图
        </Link>
        {/* Desktop / tablet nav; mobile uses BottomNav */}
        <nav className="hidden shrink-0 gap-2 sm:flex" aria-label="主导航">
          <Link
            href="/"
            className="inline-flex min-h-9 items-center rounded-lg px-3 py-1.5 text-[0.95rem] font-medium text-sky-800 hover:bg-sky-100/70 sm:px-4 sm:text-base"
          >
            探索
          </Link>
          <Link
            href="/overview/"
            className="inline-flex min-h-9 items-center rounded-lg px-3 py-1.5 text-[0.95rem] font-medium text-sky-800 hover:bg-sky-100/70 sm:px-4 sm:text-base"
          >
            两年怎么走
          </Link>
          <Link
            href="/about/"
            className="inline-flex min-h-9 items-center rounded-lg px-3 py-1.5 text-[0.95rem] font-medium text-sky-800 hover:bg-sky-100/70 sm:px-4 sm:text-base"
          >
            说明
          </Link>
        </nav>
      </div>
    </header>
  );
}
