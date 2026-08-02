import Link from "next/link";
import { Header } from "@/components/Header";
import { BudgetBar } from "@/components/BudgetBar";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex min-h-[48px] items-center text-lg font-medium text-sky-700 hover:text-sky-900"
        >
          ← 返回探索
        </Link>

        <h1 className="text-3xl font-bold text-sky-950 sm:text-4xl">使用说明</h1>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-sky-900">
          <p>
            本网站为在北京生活的父母设计，帮助按<strong>地区</strong>、<strong>季节</strong>和<strong>旅途长短</strong>挑选适合的中国旅行路线。
          </p>
          <p>
            每条路线标注「慢游」与「快览」站点：慢游适合多住几天、慢慢走；快览适合一日高光打卡，不宜硬撑。
          </p>
          <p>
            华北近途可<strong>北京私家车自驾</strong>；远途建议飞机或高铁抵达后当地租车，减少换乘。
          </p>
        </div>

        <div className="mt-8">
          <BudgetBar />
        </div>

        <section className="mt-8 rounded-2xl border border-sky-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-sky-950">添加到手机桌面</h2>
          <p className="mt-3 text-lg text-sky-800">
            本站点支持 PWA 基础配置（manifest + 主题色）。完整离线包将在后续 zip 版本中提供；当前需联网浏览路线与图片。
          </p>
          <p className="mt-2 text-lg text-sky-700">
            iPhone：Safari 分享 →「添加到主屏幕」。Android：Chrome 菜单 →「安装应用」或「添加到主屏幕」。
          </p>
        </section>
      </main>
    </>
  );
}
