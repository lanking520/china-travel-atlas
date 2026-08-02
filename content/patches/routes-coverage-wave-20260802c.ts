import type { Route } from '../types';

/**
 * Coverage wave 2026-08-02c: 京沪沿海主题串 + G214 滇西北浅住.
 * Evidence: research/notes/multi-discovery/* + coverage-gap-matrix-20260802.md
 */
export const patchRoutes: Route[] = [
  // ── 京沪 · 青岛滨海腿（原 national-jinghu 抽出）────────────
  {
    id: 'leg-qingdao-coast',
    title: '青岛 · 滨海栈道慢住',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约4天',
    transport:
      '北京南高铁至青岛约3–3.5小时；市南打车/公交。可单订，也可作京沪沿海组合中段。',
    budgetLabel: '本趟约2000–4500元（高铁+近海电梯酒店）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
    summary:
      '独立短线：市南近海电梯酒店连住；八大关/栈道分日早晚走。烟台威海另线，本卡不北延。可单订，也可接京沪沿海或半岛组合。',
    whyFast: '崂山见「青岛·崂山与即墨浅段」；只留栈道+空白日也成立。半岛长廊见「胶东半岛慢串」。',
    researchKeywords: [
      '青岛 滨海 栈道 父母',
      '青岛 八大关 慢住',
      '青岛 四日 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：青岛',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E5%B2%9B',
        kind: 'other',
        note: '滨海慢走骨架，已改写',
      },
      {
        title: '青岛市文化和旅游局',
        url: 'https://whlyj.qingdao.gov.cn/',
        kind: 'official',
        note: '景区开放以官网为准',
      },
    ],
    stops: [
      {
        id: 'jhc-qingdao-coast',
        name: '青岛 · 滨海慢住',
        days: 3,
        pace: 'slow',
        lat: 36.06,
        lng: 120.38,
        summary: '市南近海电梯酒店；八大关/栈道分日早晚走。',
        tips: '正午防晒；海鲜少生冷。烟台威海另线。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
      },
      {
        id: 'qingdao-buffer',
        name: '青岛空白/南行缓冲',
        days: 1,
        pace: 'slow',
        lat: 36.06,
        lng: 120.38,
        summary: '休息补水；若接京沪组合，次日高铁经苏州或直达上海。',
        tips: '疲劳多留一日；勿一日赶青→沪。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
      },
    ],
  },

  // ── 京沪 compose（原 national-jinghu-coast-slow）──────────
  {
    id: 'compose-jinghu-coast',
    title: '京沪沿海慢串 · 津青苏沪高铁廊',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约10–14天（可分段回京）',
    legIds: ['tianjin-day', 'leg-qingdao-coast', 'huadong-shanghai-short'],
    glue: [
      '天津→青岛高铁约4–5小时（或北京直达青岛、删天津短线）。一日只换一城；段间可回京。',
      '青岛→上海高铁经沪宁；可选在苏州停1–2晚园林二选一（拙政园或留园，不硬排南京），也可直达上海。台风预警期减少海边停留。',
    ],
    transport:
      '北京南城际/高铁串珠：天津海河短线（可删）→ 青岛滨海短线 →（苏州可选缓冲）→ 上海外滩博物馆短线 → 京沪回京。勿一日多城；不渤海湾自驾贯通。',
    budgetLabel: '对照约1.2–2万（高铁分段+电梯酒店；双人；可砍天津或苏州缩短）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
    summary:
      '长线组合卡：嵌入天津海河、青岛滨海、上海外滩博物馆三条短线；苏州园林只作可选高铁停点。景点正文见各短线。高铁换住，段末可回京。',
    introduction:
      '京沪高铁与沿海城际是父母友好骨架。本卡是「串珠」组合：天津短线 → 青岛短线 →（苏州可选）→ 上海短线。\n\n景点细节只在各短线维护；此处只管衔接与可删段。不排北戴河—青岛自驾，不接港澳。',
    seasonGuide:
      '春秋最佳。夏青岛紫外与暑热强、苏沪湿热；冬海风冷缩短栈道。台风预警期减少海边停留。',
    whyFast: '天津、苏州任一可删；主体青岛+上海也成立。',
    notices: [
      '一日只换一城；高铁优先二等座靠窗/过道便于起身。',
      '青岛栈道早晚走，正午防晒；海鲜少生冷。',
      '苏州园林勿一日多园；石板雨后防滑；可整段删。',
      '上海外滩周末人多错峰；博物馆预约以当日为准。',
      '任一段不适即回京休整，勿硬拼全廊。',
    ],
    researchKeywords: [
      '京沪高铁 父母 慢游',
      '青岛 滨海 栈道 父母',
      '天津 海河 一日',
      '上海 外滩 博物馆 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：青岛',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E5%B2%9B',
        kind: 'other',
        note: '细节见青岛短线',
      },
      {
        title: 'Wikivoyage：上海',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%8A%E6%B5%B7',
        kind: 'other',
        note: '细节见上海短线',
      },
      {
        title: '中国铁路客户服务中心',
        url: 'https://www.12306.cn/',
        kind: 'official',
        note: '京沪/胶东城际时刻以 12306 为准',
      },
    ],
    stops: [
      {
        id: 'jhc-suzhou-garden',
        name: '苏州 · 园林浅停（可选 glue）',
        days: 1.5,
        pace: 'fast',
        lat: 31.32,
        lng: 120.62,
        summary: '青岛与上海之间的可选高铁停点；拙政园或留园二选一。',
        tips: '可删直达上海；勿一日多园；不硬排南京。',
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Humble_Administrator%27s_Garden_2015.JPG/1280px-Humble_Administrator%27s_Garden_2015.JPG",
      },
    ],
  },
  {
    id: 'yunnan-g214-shangri-la-taste',
    title: 'G214 · 香格里拉浅住',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['corridor'],
    daysLabel: '约4–6天',
    transport:
      '北京经昆明或成都飞迪庆香格里拉机场；市区打车。结束后原路飞返再回京。禁止自西宁沿 G214 连续公路贯通至滇西北；本线为南端独立浅住',
    budgetLabel: '本趟约4000–7500元（含高原机票与供氧住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
    summary:
      'G214 南端适老浅住：飞入香格里拉适应，独克宗古城平缓浅逛；普达措仅观光车短停可选。诚实难度——海拔约3200m，须体检；不与西宁入口浅段公路贯通，不排雨崩徒步。',
    introduction:
      'G214 北起青海、南抵滇西北，全线对心肺与车程要求高。西宁入口见独立浅段；本产品只立项「香格里拉飞入浅住」：供氧电梯酒店连住，古城石板少量力，湖区靠车览。\n\n互补大理/丽江，勿同趟特种兵连轴玉龙与雨崩。',
    seasonGuide:
      '春秋舒适。夏雨季关注塌方与航班；冬严寒供暖与路面结冰须额外评估。',
    whyFast: '普达措可删；只古城适应+空白日也成立。',
    notices: [
      '行前健康评估；心脑血管等高风险者不宜。',
      '备血氧仪；持续头痛呕吐胸闷立即就医或下撤低海拔（丽江/昆明）。',
      '独克宗石板与缓坡量力；勿一日多景点。',
      '不贯通 G214 北段（玉树—昌都—中甸公路连续驾驶）。',
      '不排雨崩、虎跳峡徒步与夜间山路。',
    ],
    researchKeywords: [
      '香格里拉 父母 高反',
      '独克宗 慢游',
      '普达措 观光车',
      'G214 滇西北',
    ],
    sources: [
      {
        title: 'Wikivoyage：香格里拉',
        url: 'https://zh.wikivoyage.org/wiki/%E9%A6%99%E6%A0%BC%E9%87%8C%E6%8B%89',
        kind: 'other',
        note: '海拔与进出概览，已改写',
      },
      {
        title: '云南省文化和旅游厅',
        url: 'https://dct.yn.gov.cn/',
        kind: 'official',
        note: '景区与天气公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'g214s-adapt',
        name: '香格里拉适应慢住',
        days: 2,
        pace: 'slow',
        lat: 27.83,
        lng: 99.7,
        summary: '供氧电梯酒店；头两日少爬楼、多喝水。',
        tips: '近医院；血氧自测。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
      },
      {
        id: 'g214s-dukezong',
        name: '独克宗古城浅逛',
        days: 1,
        pace: 'slow',
        lat: 27.82,
        lng: 99.7,
        summary: '平缓街巷短走；转经处外观即可。',
        tips: '石板防滑；人多即早撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
      },
      {
        id: 'g214s-pudacuo-optional',
        name: '普达措观光车短停（可选）',
        days: 1,
        pace: 'fast',
        lat: 27.9,
        lng: 99.9,
        summary: '观光车减步；不上长线徒步，可删。',
        tips: '紫外线强；高反加重即返城。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
      },
      {
        id: 'g214s-exit',
        name: '下撤飞返',
        days: 1,
        pace: 'fast',
        lat: 27.79,
        lng: 99.68,
        summary: '飞昆明/成都再回京；回京休整后再排高原段。',
        tips: '勿立刻衔接更高海拔行程。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
      },
    ],
  },
];
