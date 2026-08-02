import Link from "next/link";
import { Header } from "@/components/Header";

function RouteLink({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <Link
      href={`/routes/${id}/`}
      className="font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-sky-950"
    >
      {children}
    </Link>
  );
}

export default function OverviewPage() {
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

        <h1 className="text-3xl font-bold leading-tight text-sky-950 sm:text-4xl">
          两年怎么走
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-sky-800">
          下面是一份「练手 → 远途 → 回京休整」的参考节奏。不必赶完，按爸妈体力和季节灵活调整；每段远途结束后，建议回北京家歇几天再出发。
        </p>

        {/* Year 1 */}
        <section className="mt-10 rounded-2xl border-2 border-sky-300 bg-sky-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-sky-950 sm:text-3xl">第一年 · 由近及远</h2>
          <p className="mt-3 text-lg text-sky-800">
            主题：先在华北短途练手，再逐步走远；冬天去暖和的地方。
          </p>

          <ol className="mt-6 space-y-6 text-lg leading-relaxed text-sky-900">
            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-sky-700">春 / 秋</span>
              <p className="mt-2">
                <strong>华北短途练手</strong>——从北京家开车或高铁当天/隔夜往返，熟悉「慢走、多歇、不赶场」的节奏。
              </p>
              <p className="mt-2 text-sky-800">
                可参考：
                <RouteLink id="mutianyu-day">慕田峪长城</RouteLink>、
                <RouteLink id="tianjin-day">天津海河</RouteLink>、
                <RouteLink id="chengde-2d">承德避暑山庄</RouteLink>、
                <RouteLink id="gubei-overnight">古北水镇</RouteLink>。
              </p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-emerald-700">夏</span>
              <p className="mt-2">
                <strong>东北林海避暑</strong>——飞长春/延吉，二道白河慢住，北坡环保车看天池。
              </p>
              <p className="mt-2">
                参考：<RouteLink id="dongbei-changbai-summer">长白山 · 林海避暑一周</RouteLink>
              </p>
            </li>

            <li className="rounded-xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-200">
              <span className="text-xl font-bold text-amber-800">↩ 回京休整</span>
              <p className="mt-2">在家歇 5–7 天，恢复作息，整理照片，再计划下一段。</p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-orange-700">秋</span>
              <p className="mt-2">
                <strong>华东江南</strong>——高铁到杭州、苏州，西湖无障碍专线、园林平路，不赶全程。
              </p>
              <p className="mt-2">
                参考：<RouteLink id="huadong-hangzhou-suzhou">江南 · 杭苏园林五日</RouteLink>
              </p>
            </li>

            <li className="rounded-xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-200">
              <span className="text-xl font-bold text-amber-800">↩ 回京休整</span>
              <p className="mt-2">秋季温差大，回家补觉、体检，为冬天避寒做准备。</p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-rose-700">冬</span>
              <p className="mt-2">
                <strong>华南 / 中原避寒</strong>——飞南方暖和处慢住；若只想短途看雪，也可飞哈尔滨 2–3 天（与避寒二选一，不必同年都去）。
              </p>
              <p className="mt-2 text-sky-800">
                避寒可选：
                <RouteLink id="huanan-xiamen-winter">厦门暖海</RouteLink>、
                <RouteLink id="huanan-sanya-winter">三亚慢住</RouteLink>。
              </p>
              <p className="mt-2 text-sky-800">
                看雪可选：
                <RouteLink id="dongbei-harbin-snow-3d">哈尔滨冰雪三日</RouteLink>。
              </p>
            </li>
          </ol>
        </section>

        {/* Year 2 */}
        <section className="mt-10 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">第二年 · 纵深探索</h2>
          <p className="mt-3 text-lg text-emerald-900">
            主题：走进西南、西北、青藏；远途之间多回家，不连轴转。
          </p>

          <ol className="mt-6 space-y-6 text-lg leading-relaxed text-emerald-900">
            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-emerald-700">春</span>
              <p className="mt-2">
                <strong>西南慢住</strong>——成都平原或云南大理，每天 1–2 个景点，下午回酒店歇。
              </p>
              <p className="mt-2 text-emerald-800">
                可选：
                <RouteLink id="xinan-chengdu-slow">成都慢住</RouteLink>、
                <RouteLink id="yunnan-dali-lijiang">大理慢住丽江快览</RouteLink>。
              </p>
            </li>

            <li className="rounded-xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-200">
              <span className="text-xl font-bold text-amber-800">↩ 回京休整</span>
              <p className="mt-2">长途飞行后至少歇一周；如有高反史，多歇几天再安排下一段。</p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-orange-700">秋</span>
              <p className="mt-2">
                <strong>西北丝路</strong>——飞敦煌，租车走河西走廊，莫高窟慢读、张掖丹霞快览。
              </p>
              <p className="mt-2">
                参考：<RouteLink id="xibei-dunhuang-zhangye">河西走廊 · 敦煌张掖</RouteLink>
              </p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-sky-700">夏（窗口期）</span>
              <p className="mt-2">
                <strong>青藏高原</strong>——仅选 6–9 月窗口，抵达先适应 3 日，纳木错只作一日快览。
              </p>
              <p className="mt-2">
                参考：<RouteLink id="qingzang-lhasa-slow">拉萨 · 高原慢适应</RouteLink>
              </p>
              <p className="mt-1 text-base text-emerald-700">
                可与华中文化线穿插：<RouteLink id="huazhong-wudang-3d">武当山三日</RouteLink>。
              </p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-slate-700">贯穿原则</span>
              <p className="mt-2">
                <strong>多回家</strong>——华北长线如
                <RouteLink id="huabei-shanxi-loop">晋北古建慢游</RouteLink>
                结束后也先回京；第二年不必赶满所有区域，舒服第一。
              </p>
            </li>
          </ol>
        </section>

        {/* Principles */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">三条铁律</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-800">
            <li>① 远途段与远途段之间，<strong>回北京休整</strong>再出发。</li>
            <li>② 每天<strong>留空白</strong>——不排满，累了就歇。</li>
            <li>③ 出发前在路线详情页看「参考来源」，子女帮复核最新政策。</li>
          </ul>
          <p className="mt-6">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center rounded-xl bg-sky-700 px-6 py-3 text-lg font-semibold text-white hover:bg-sky-800"
            >
              去挑选具体路线 →
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
