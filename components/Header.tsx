import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-sky-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-sky-900 sm:text-2xl"
        >
          爸妈中国旅游地图
        </Link>
        <nav className="flex gap-2">
          <Link
            href="/"
            className="rounded-xl px-4 py-2.5 text-lg font-medium text-sky-800 hover:bg-sky-50"
          >
            探索
          </Link>
          <Link
            href="/overview/"
            className="rounded-xl px-4 py-2.5 text-lg font-medium text-sky-800 hover:bg-sky-50"
          >
            两年怎么走
          </Link>
          <Link
            href="/about/"
            className="rounded-xl px-4 py-2.5 text-lg font-medium text-sky-800 hover:bg-sky-50"
          >
            说明
          </Link>
        </nav>
      </div>
    </header>
  );
}
