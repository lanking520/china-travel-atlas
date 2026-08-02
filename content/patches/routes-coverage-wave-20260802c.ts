import type { Route } from '../types';

/**
 * Coverage wave 2026-08-02c: 京沪沿海主题串 + G214 滇西北浅住.
 * Evidence: research/notes/multi-discovery/* + coverage-gap-matrix-20260802.md
 */
export const patchRoutes: Route[] = [
  {
    id: 'national-jinghu-coast-slow',
    title: '京沪沿海慢串 · 津青苏沪高铁廊',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    themes: ['corridor'],
    daysLabel: '约10–14天（可分段回京）',
    transport:
      '北京南城际/高铁至天津站→高铁胶济/青荣方向至青岛→高铁经沪宁至苏州再至上海虹桥/上海站→京沪高铁回京。各城换电梯酒店；日行一城段，勿一日多城特种兵。任一段可单独飞/高铁回京休整',
    budgetLabel: '对照约1.2–2万（高铁分段+电梯酒店；双人；可砍苏州或天津缩短）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
    summary:
      '把散落的天津、青岛、苏沪串成爸妈可走的京沪沿海主题廊：海河浅尝→青岛滨海慢住→苏州园林二选一→上海外滩/博物馆。高铁换住，段末可回京；不硬赶渤海湾自驾贯通。',
    introduction:
      '京沪高铁与沿海城际是父母友好骨架，但城市卡片互不联线时难排节奏。本线只做「串珠」：每站 1–4 日，住地铁/海边电梯酒店，栈道与园林分日。\n\n天津可整段删直达青岛；苏州可删直达上海。不排北戴河—青岛自驾长途，不接港澳。',
    seasonGuide:
      '春秋最佳。夏青岛紫外与暑热强、苏沪湿热；冬海风冷缩短栈道。台风预警期减少海边停留。',
    whyFast: '天津、苏州任一可删；主体青岛慢住+上海浅逛也成立。',
    notices: [
      '一日只换一城；高铁优先二等座靠窗/过道便于起身。',
      '青岛栈道早晚走，正午防晒；海鲜少生冷。',
      '苏州园林勿一日多园；石板雨后防滑。',
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
        title: 'Wikivoyage：天津',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%A9%E6%B4%A5',
        kind: 'other',
        note: '海河与意风区概览，已改写',
      },
      {
        title: 'Wikivoyage：青岛',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E5%B2%9B',
        kind: 'other',
        note: '滨海慢走骨架，已改写',
      },
      {
        title: 'Wikivoyage：上海',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%8A%E6%B5%B7',
        kind: 'other',
        note: '外滩与展馆节奏，已改写',
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
        id: 'jhc-tianjin-haihe',
        name: '天津 · 海河浅尝',
        days: 2,
        pace: 'slow',
        lat: 39.13,
        lng: 117.2,
        summary: '城际入津；海河步道+意风区平地，五大道短段即可。',
        tips: '可整段删直达青岛；勿自驾进五大道核心。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tianjin_Eye_and_Tianjin.jpg/1280px-Tianjin_Eye_and_Tianjin.jpg',
      },
      {
        id: 'jhc-qingdao-coast',
        name: '青岛 · 滨海慢住',
        days: 4,
        pace: 'slow',
        lat: 36.06,
        lng: 120.38,
        summary: '市南近海电梯酒店；八大关/栈道分日早晚走。',
        tips: '主体站点；烟台威海另线，本廊不北延硬赶。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
      },
      {
        id: 'jhc-suzhou-garden',
        name: '苏州 · 园林浅停（可选）',
        days: 2,
        pace: 'fast',
        lat: 31.32,
        lng: 120.62,
        summary: '拙政园或留园二选一；平缓半日+留白。',
        tips: '可删；直达上海亦可。',
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Humble_Administrator%27s_Garden_2015.JPG/1280px-Humble_Administrator%27s_Garden_2015.JPG",
      },
      {
        id: 'jhc-shanghai-bund',
        name: '上海 · 外滩与展馆',
        days: 3,
        pace: 'slow',
        lat: 31.24,
        lng: 121.49,
        summary: '外滩沿江平走；雨天改博物馆/梧桐街区。',
        tips: '住地铁站旁电梯酒店；迪士尼不排入爸妈主线。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Bund_2.jpg/1280px-The_Bund_2.jpg',
      },
      {
        id: 'jhc-exit-beijing',
        name: '京沪回京休整',
        days: 1,
        pace: 'fast',
        lat: 39.87,
        lng: 116.38,
        summary: '虹桥/上海站京沪回京；到家至少休整再排下一段。',
        tips: '行李少换乘；夜间高铁慎选。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Bund_2.jpg/1280px-The_Bund_2.jpg',
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
