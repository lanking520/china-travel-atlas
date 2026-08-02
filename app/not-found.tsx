import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-sky-950">页面未找到</h1>
        <p className="mt-4 text-xl text-sky-800">这条路线可能不存在，请返回首页重新选择。</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-[52px] items-center rounded-2xl bg-sky-700 px-6 text-lg font-semibold text-white hover:bg-sky-800"
        >
          返回探索
        </Link>
      </main>
    </>
  );
}
