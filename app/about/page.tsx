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
            写给在北京生活、刚退休不久的父母：大约六十岁上下，大学学历，英语也不错；腿脚没问题、身体健康，能爬山走路、能自驾，想用大约两年时间慢慢走大陆。
          </p>
          <p>
            这是一份静态路线图鉴（约 180–200 条），不是跟团 App，也不是「走遍每一个县」的清单。首页「全部景点」是双列目录；底栏可切到「两年」看节奏参考，或留在本页看用法。
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-sky-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-sky-950">怎么用探索</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-sky-900">
            <li>
              <strong>搜索</strong>
              ——在筛选上方，可试城市名、景点名、路线名。
            </li>
            <li>
              <strong>四个维度</strong>
              ——季节 / 长短 / 主题 / 地区。默认全季节、全部长短、全部主题、全部地区。「地区」先选大区，省份可选。「长短」对应短线与长线组合；长居请用主题「长居」。
            </li>
            <li>
              <strong>打开卡片</strong>
              ——短线看停靠与实用指南；长线（组合）先看衔接时间线再进各段短线；长居枢纽先看「门槛」与周边辐射。
            </li>
          </ol>
          <p className="mt-4 text-lg leading-relaxed text-sky-800">
            目录没有地图点选入口；大区/省份只在「地区」筛选里选。详情页也不再放走廊示意图，改用「精细化路线介绍」写清怎么去、段内交通、大致车程与节奏；导航请用高德。
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
          <h2 className="text-2xl font-bold text-emerald-950">三类内容</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-emerald-950">
            <li>
              <strong>短线</strong>
              ——独立行程，通常几天内办完一件事。
            </li>
            <li>
              <strong>长线（组合）</strong>
              ——有序串起已有短线，正文只写 glue（车程、过夜、休息），不重复粘贴景点介绍。
            </li>
            <li>
              <strong>长居枢纽</strong>
              ——住三四周的节奏；须写清进出交通、生活物资、本地医疗（尽量三甲；若只有二甲/县医院会标明并给备选）。
            </li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed text-emerald-900">
            站点标「慢游」与「快览」：慢游是住下来过日子；快览是值得专程看的亮点，看完可走。华北近途可用北京私家车；云南、新疆等远途建议飞机/高铁抵达后当地租车。
          </p>
        </section>

        <div className="mt-8">
          <BudgetBar />
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">诚实边界</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-800">
            <li>
              封面与站点图优先用公开图源；若无合适风景图，会用「示意生成图」——那是插图，不是现场照片。
            </li>
            <li>
              口岸、边防与出境段落（例如河口–沙巴）只作行程结构参考；是否可过境、证件与当日政策须自行核实，不跟不明跨境团。
            </li>
            <li>
              字体与控件偏现代 App；内容按「活跃退休」写清预约、季节、高原等要点，不默认行动不便，也不做成笨重「适老」皮肤。
            </li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-rose-200 bg-rose-50/70 p-6">
          <h2 className="text-2xl font-bold text-rose-950">本站不覆盖</h2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-rose-950">
            <li>港澳台不作为产品目的地。</li>
            <li>极端高山、全线「贯通」类极限自驾（如阿里·珠峰、G219 极限等）不立项。</li>
            <li>不整篇搬运小红书/知乎原文；结构搭好后对照官网，并由家人按关键词复核改写。</li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold text-amber-950">访问与离线</h2>
          <p className="mt-3 text-lg text-amber-900">
            当前托管在 GitHub Pages。大陆手机网络有时打不开或很慢——国内访问方案另见仓库笔记
            <code className="mx-1 rounded bg-white px-1">research/notes/china-mainland-access-20260802.md</code>
            （双部署/备案 CDN 仍在规划，请先用离线包或子女转发的可用链接）。
          </p>
          <p className="mt-3 text-lg text-amber-900">
            本站支持 PWA（添加到主屏幕 + 访问过的页面可缓存）。完整静态站另见 GitHub Releases 的离线 zip；外链图片仍可能需要网络。
          </p>
          <p className="mt-2 text-lg text-amber-800">
            iPhone：Safari 分享 →「添加到主屏幕」。Android：Chrome 菜单 →「安装应用」或「添加到主屏幕」。文档：
            <code className="rounded bg-white px-1">docs/离线打开说明.md</code>
            ；成书预留见
            <code className="rounded bg-white px-1">docs/成书导出说明.md</code>。
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-sky-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-sky-950">来源与许可</h2>
          <p className="mt-3 text-lg text-sky-800">
            调研与改写约定见
            <code className="rounded bg-sky-100 px-1">docs/内容调研与来源.md</code>
            。代码与原创文案见仓库
            <code className="rounded bg-sky-100 px-1">LICENSE</code>
            （MIT）；图片与示意生成图说明见
            <code className="rounded bg-sky-100 px-1">NOTICE</code>。
          </p>
        </section>
      </main>
    </>
  );
}
