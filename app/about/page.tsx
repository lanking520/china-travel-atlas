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
            写给在北京生活、刚退休不久的父母：大约六十岁上下，大学学历，英语也不错；腿脚没问题、身体健康，能爬山走路、能自驾，想用两年时间慢慢走遍中国。
          </p>
          <p>
            打开首页后：先在<strong>中国地图上点大区</strong>，再点<strong>省份</strong>，最后点<strong>路线</strong>进入详细攻略（介绍、季节、地图、景点图、旅行须知）。顶部可按春夏秋冬筛选。
          </p>
          <p>
            界面字大好点，方便路上看；内容按「活跃退休」来写——讲清预约、季节与高原等要点，不默认你们行动不便。
          </p>
          <p>
            每条路线标「慢游」与「快览」：慢游是住下来过日子；快览是特别值得专程看的亮点，看完就走。
          </p>
          <p>
            华北近途可<strong>北京私家车自驾</strong>；云南、新疆等远途建议飞机/高铁抵达后当地租车。英文界面的票务、地图 App 也可以用。
          </p>
        </div>

        <div className="mt-8">
          <BudgetBar />
        </div>

        <section className="mt-8 rounded-2xl border border-sky-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-sky-950">添加到手机桌面</h2>
          <p className="mt-3 text-lg text-sky-800">
            本站点支持 PWA（添加到主屏幕 + 访问过的页面可缓存）。完整静态站另见 GitHub Releases 的离线 zip，打开方法见「离线打开说明」。外链图片与地图仍可能需要网络。
          </p>
          <p className="mt-3 text-lg text-sky-800">
            说明文档：仓库内 <code className="rounded bg-sky-100 px-1">docs/离线打开说明.md</code>
            ；成书预留见 <code className="rounded bg-sky-100 px-1">docs/成书导出说明.md</code>。
          </p>
          <p className="mt-2 text-lg text-sky-700">
            iPhone：Safari 分享 →「添加到主屏幕」。Android：Chrome 菜单 →「安装应用」或「添加到主屏幕」。
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold text-amber-950">攻略从哪来</h2>
          <p className="mt-3 text-lg text-amber-900">
            路线结构已搭好；细节会对照景区官网，并由家人在小红书、知乎上按关键词复核后改写，不会把平台原文整篇搬上来。
          </p>
          <p className="mt-2 text-lg text-amber-800">
            开发与调研说明见仓库文档
            <code className="mx-1 rounded bg-white px-1">docs/内容调研与来源.md</code>
            。
          </p>
        </section>
      </main>
    </>
  );
}
