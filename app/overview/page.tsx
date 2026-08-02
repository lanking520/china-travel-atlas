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
          这是一份「练手 → 远途 → 回京休整」的参考节奏，不是必须赶完的日程表。按体力、季节和兴趣挑一两段就够；每段远途结束后，建议回家歇几天再出发。
        </p>

        <section className="mt-8 rounded-2xl border border-sky-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-sky-950">先认三类卡片</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-sky-900">
            <li>
              <strong>短线</strong>
              ——一两天到一周左右，一个清楚目的（景点、城市慢走）。详情里有停靠点、吃住与医院提示。
            </li>
            <li>
              <strong>长线（组合）</strong>
              ——把几条短线按顺序串起来，页面只写衔接与过夜，不重复抄景点正文。点开「组合」时间线，可跳进每一段短线。
            </li>
            <li>
              <strong>长居枢纽</strong>
              ——在一地住三四周；详情写清进出交通、日常物资、本地医疗（三门槛），再从枢纽辐射周边短线。阳朔、镇远已降为山水短住，不与昆明级并列。
            </li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed text-sky-800">
            用法：本页看季节节奏 → 回探索搜地名，或用「季节 / 长短 / 主题 / 地区」收窄（长短里看短线与长线；长居用主题「长居」）→ 远途选组合或枢纽，近途选短线。全库约两百条，不必扫完。
          </p>
        </section>

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
                <strong>华北短途练手</strong>
                ——从北京家开车或高铁当天/隔夜往返，熟悉「慢走、多歇、不赶场」。探索里地区选「华北」即可收窄。
              </p>
              <p className="mt-2 text-sky-800">
                可参考：
                <RouteLink id="mutianyu-day">慕田峪长城</RouteLink>、
                <RouteLink id="tianjin-day">天津海河</RouteLink>、
                <RouteLink id="chengde-2d">承德避暑山庄</RouteLink>、
                <RouteLink id="gubei-overnight">古北水镇</RouteLink>
                ；稍熟后也可试
                <RouteLink id="compose-jingjinji-jin">京津冀晋浅廊</RouteLink>。
              </p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-emerald-700">夏</span>
              <p className="mt-2">
                <strong>东北林海避暑</strong>
                ——飞长春/延吉，二道白河慢住，北坡环保车看天池。
              </p>
              <p className="mt-2">
                参考：
                <RouteLink id="dongbei-changbai-summer">长白山 · 林海避暑一周</RouteLink>
                ；若想多走几段，可看
                <RouteLink id="compose-dongbei-loop">东北浅环</RouteLink>。
              </p>
            </li>

            <li className="rounded-xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-200">
              <span className="text-xl font-bold text-amber-800">↩ 回京休整</span>
              <p className="mt-2">在家歇 5–7 天，恢复作息，整理照片，再计划下一段。</p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-orange-700">秋</span>
              <p className="mt-2">
                <strong>华东江南</strong>
                ——高铁到杭州、苏州，西湖环湖慢走、园林平路，不赶全程。
              </p>
              <p className="mt-2">
                参考：
                <RouteLink id="huadong-hangzhou-suzhou">江南 · 杭苏园林五日</RouteLink>
                、
                <RouteLink id="compose-suhan-hangzhou-huangshan">苏杭徽组合</RouteLink>。
              </p>
            </li>

            <li className="rounded-xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-200">
              <span className="text-xl font-bold text-amber-800">↩ 回京休整</span>
              <p className="mt-2">秋季温差大，回家补觉、体检，为冬天避寒做准备。</p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-rose-700">冬</span>
              <p className="mt-2">
                <strong>华南避寒，或东北看雪</strong>
                ——二选一即可，不必同年都去。想多住几周，可看主题「长居」下的海南东线枢纽。
              </p>
              <p className="mt-2 text-sky-800">
                避寒：
                <RouteLink id="huanan-xiamen-winter">厦门暖海</RouteLink>、
                <RouteLink id="huanan-sanya-winter">三亚慢住</RouteLink>、
                <RouteLink id="longstay-hainan-east">万宁/琼海慢居</RouteLink>。
              </p>
              <p className="mt-2 text-sky-800">
                看雪：
                <RouteLink id="dongbei-harbin-snow-3d">哈尔滨冰雪三日</RouteLink>。
              </p>
            </li>
          </ol>
        </section>

        {/* Year 2 */}
        <section className="mt-10 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">第二年 · 纵深探索</h2>
          <p className="mt-3 text-lg text-emerald-900">
            主题：西南慢居、西北走廊、青藏窗口期；远途之间多回家，不连轴转。优先选「组合」或「长居枢纽」，再按需点进短线。
          </p>

          <ol className="mt-6 space-y-6 text-lg leading-relaxed text-emerald-900">
            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-emerald-700">春</span>
              <p className="mt-2">
                <strong>西南枢纽 + 浅廊</strong>
                ——可先定一个长居枢纽（昆明/大理/成都平原），再串周边短线；或直接走川西浅廊、滇西组合。
              </p>
              <p className="mt-2 text-emerald-800">
                枢纽：
                <RouteLink id="longstay-kunming">昆明春城</RouteLink>、
                <RouteLink id="longstay-dali">大理月租</RouteLink>、
                <RouteLink id="longstay-dujiangyan">都江堰西缘</RouteLink>、
                <RouteLink id="base-guiyang">贵阳黔中</RouteLink>。
              </p>
              <p className="mt-2 text-emerald-800">
                组合 / 短线：
                <RouteLink id="compose-chuanxi-chengdu-leshan-jiuzhai">川西浅廊</RouteLink>
                、
                <RouteLink id="compose-yunnan-dali-lijiang">滇西大理丽江</RouteLink>
                、
                <RouteLink id="xinan-chengdu-slow">成都慢住</RouteLink>
                、
                <RouteLink id="leg-chengdu-adapt">成都适应短线</RouteLink>。
              </p>
            </li>

            <li className="rounded-xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-200">
              <span className="text-xl font-bold text-amber-800">↩ 回京休整</span>
              <p className="mt-2">长途飞行后至少歇一周；如有高反史，多歇几天再安排下一段。</p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-orange-700">秋</span>
              <p className="mt-2">
                <strong>西北走廊</strong>
                ——河西、北疆等多以组合呈现：先看衔接与过夜，再点进敦煌、喀纳斯等短线。也可飞银川做短途。
              </p>
              <p className="mt-2">
                参考：
                <RouteLink id="compose-hexi-dunhuang-zhangye">河西 · 敦煌张掖</RouteLink>
                、
                <RouteLink id="leg-dunhuang-mogao">敦煌短线</RouteLink>
                、
                <RouteLink id="compose-beijiang-sayram-kanas">北疆赛里木喀纳斯</RouteLink>
                、
                <RouteLink id="base-kashi">喀什丝路枢纽</RouteLink>
                、
                <RouteLink id="xibei-ningxia-3d">宁夏银川</RouteLink>
              </p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-sky-700">夏（窗口期）</span>
              <p className="mt-2">
                <strong>青藏高原</strong>
                ——仅选 6–9 月窗口，抵达先适应数日；纳木错等只作一日快览。可与中原文化短线穿插，不必同年塞满。
              </p>
              <p className="mt-2">
                参考：
                <RouteLink id="qingzang-lhasa-slow">拉萨 · 高原慢适应</RouteLink>
                、
                <RouteLink id="compose-qingzang-railway-lhasa">青藏铁路慢进藏</RouteLink>
                、
                <RouteLink id="compose-qingzang-lhasa-nyingchi">拉萨林芝</RouteLink>
                、
                <RouteLink id="qingzang-qinghai-lake">西宁青海湖</RouteLink>
              </p>
              <p className="mt-1 text-base text-emerald-700">
                穿插：
                <RouteLink id="huazhong-wudang-3d">武当山三日</RouteLink>
                、
                <RouteLink id="huazhong-xian-slow">西安慢住</RouteLink>。
              </p>
            </li>

            <li className="rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xl font-bold text-slate-700">贯穿原则</span>
              <p className="mt-2">
                <strong>多回家</strong>
                ——华北长线如
                <RouteLink id="huabei-shanxi-loop">晋北古建慢游</RouteLink>
                结束后也先回京；第二年不必赶满所有大区，舒服第一。
              </p>
            </li>
          </ol>
        </section>

        <section className="mt-10 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-amber-950 sm:text-3xl">
            加餐 · 主题线
          </h2>
          <p className="mt-3 text-lg text-amber-900">
            季节节奏之外，还可按主题挑：跨省慢组合、边陲短住、空气清新向的长居。探索点「主题」选长居 / 名景，或用「地区」收窄，也可搜路线名。
          </p>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-amber-950">
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="font-bold text-amber-800">跨省慢组合（不是特种兵）</p>
              <p className="mt-2">
                <RouteLink id="compose-qinggan-xining-hexi">青甘慢环</RouteLink>、
                <RouteLink id="compose-silkroad-xian-turpan">丝路慢段</RouteLink>、
                <RouteLink id="compose-chuandian-chengdu-dali-lijiang">川滇慢环</RouteLink>、
                <RouteLink id="compose-jinghu-coast">京沪沿海</RouteLink>
                ——段与段之间留空白，段末建议回京休整。
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="font-bold text-slate-800">边陲城市</p>
              <p className="mt-2">
                <RouteLink id="frontier-dandong">丹东鸭绿江</RouteLink>、
                <RouteLink id="frontier-manzhouli">满洲里国门</RouteLink>、
                <RouteLink id="frontier-mohe">漠河北极村</RouteLink>、
                <RouteLink id="frontier-erlian">二连浩特</RouteLink>、
                <RouteLink id="frontier-dongxing">东兴金滩</RouteLink>、
                <RouteLink id="frontier-ruili">瑞丽畹町</RouteLink>
                ——遵守边防标识，不跟不明跨境团。涉及出境的组合（如
                <RouteLink id="compose-yunnan-hekou-sapa">河口–沙巴</RouteLink>
                ）须自备有效证件，以口岸当日规定为准。
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="font-bold text-teal-800">长居枢纽（过三门槛）</p>
              <p className="mt-2">
                <RouteLink id="longstay-dali">大理洱海</RouteLink>、
                <RouteLink id="longstay-kunming">昆明春城</RouteLink>、
                <RouteLink id="longstay-weihai">威海海岸</RouteLink>、
                <RouteLink id="longstay-hulunbuir">呼伦贝尔夏</RouteLink>、
                <RouteLink id="longstay-dujiangyan">都江堰西缘</RouteLink>、
                <RouteLink id="longstay-hainan-east">琼海万宁</RouteLink>、
                <RouteLink id="base-kashi">喀什丝路</RouteLink>、
                <RouteLink id="base-guilin">桂林漓江</RouteLink>、
                <RouteLink id="base-guiyang">贵阳黔中</RouteLink>
                ——约三四周慢居；详情页「门槛」写清交通 / 物资 / 医疗。阳朔、镇远由桂林、贵阳辐射，不作月租主锚。
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">三条铁律</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-800">
            <li>
              ① 远途段与远途段之间，<strong>回北京休整</strong>再出发。
            </li>
            <li>
              ② 每天<strong>留空白</strong>——组合里的衔接日也可当休息日，累了就歇。
            </li>
            <li>
              ③ 出发前在路线详情看预约、海拔与「参考来源」，子女帮复核最新政策。
            </li>
          </ul>
          <p className="mt-6">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center rounded-xl bg-sky-700 px-6 py-3 text-lg font-semibold text-white hover:bg-sky-800"
            >
              去探索挑选路线 →
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
