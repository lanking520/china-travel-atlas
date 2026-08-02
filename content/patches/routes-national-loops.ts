import type { Route } from '../types';

/**
 * 跨省慢环 → compose + legs（爸妈节奏）。
 * 退役 national-qinggan / silkroad / chuandian；景点正文在各 leg，compose 只管 glue。
 */
export const patchRoutes: Route[] = [
  // ── 青甘 · 西宁湖光腿 ──────────────────────────────────────
  {
    id: 'leg-xining-qinghai-lake',
    title: '西宁 · 青海湖浅段',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约5–7天',
    transport:
      '北京飞西宁曹家堡；市区适应后再包车或正规一日游看青海湖选段。可单飞往返，也可作青甘组合第一段后转兰州。',
    budgetLabel: '本趟约2500–5500元（机票浮动大；含包车）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
    summary:
      '独立短线：西宁电梯房先适应（约2200m），再包车看二郎剑等青海湖岸选段；茶卡盐湖可选半日。不硬环湖、不夜赶。可单订，也可接青甘组合东行兰州。',
    whyFast: '茶卡可整段删；高原不适只留西宁静养也成立。更长环湖见「西宁·青海湖环线慢游」。',
    researchKeywords: [
      '西宁 青海湖 包车 父母',
      '青海湖 二郎剑 预约',
      '茶卡盐湖 半日',
    ],
    sources: [
      {
        title: 'Wikivoyage：西宁',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%81',
        kind: 'other',
        note: '进出与适应节奏概览，已改写',
      },
      {
        title: 'Wikivoyage：青海湖',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E6%B5%B7%E6%B9%96',
        kind: 'other',
        note: '湖面海拔与包车建议，已改写',
      },
      {
        title: '青海省文化和旅游厅',
        url: 'https://whlyt.qinghai.gov.cn/',
        kind: 'official',
        note: '景区开放与天气以官方公告为准',
      },
    ],
    stops: [
      {
        id: 'xining-adapt',
        name: '西宁（适应基地）',
        days: 3,
        pace: 'slow',
        lat: 36.617,
        lng: 101.778,
        summary:
          '先在西宁电梯房歇脚，东关清真大寺、中心广场浅逛；适应高原再出城。',
        tips:
          '海拔约2200m，头两天少爬楼梯、多喝水。近青医附院更安心。别抵达当日就赶茶卡。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
      },
      {
        id: 'qinghai-lake-segment',
        name: '青海湖选段',
        days: 2,
        pace: 'slow',
        lat: 36.9,
        lng: 100.15,
        summary:
          '包车或正规团看二郎剑等青海湖岸选段，环湖公路勿自驾赶全程；紫外线强。',
        tips:
          '备防晒、薄羽绒。骑马短段即可。体力紧压到1–2天回西宁。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
      },
      {
        id: 'chaka-optional',
        name: '茶卡盐湖（可选）',
        days: 1,
        pace: 'fast',
        lat: 36.78,
        lng: 99.08,
        summary: '盐湖打卡半日，观光车减步行；晒伤风险高，不适合作为主线。',
        tips: '行程紧可整段删除，直接转兰州或飞返。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
      },
    ],
  },

  // ── 青甘 compose ───────────────────────────────────────────
  {
    id: 'compose-qinggan-xining-hexi',
    title: '青甘慢环 · 湖光丹霞两三周',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['grand-loop'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'leg-xining-qinghai-lake',
      'leg-zhangye-danxia',
      'leg-dunhuang-mogao',
    ],
    glue: [
      '西宁→兰州高铁/飞机约1–2小时；兰州黄河边电梯酒店缓冲过夜（1–2晚，不硬加白银日驾），再高铁/飞机至张掖。段间可留空白。',
      '张掖→敦煌单日车/铁 ≤4–5小时；两腿之间可插休息日。勿茶卡一夜贯通敦煌；不环线硬赶。可与河西组合对调理解（本廊东→西：张掖后敦煌）。',
    ],
    transport:
      '北京飞西宁进。顺序：西宁青海湖短线 → 兰州缓冲过夜 → 张掖丹霞短线 → 敦煌莫高短线；段末敦煌或兰州飞回北京。',
    budgetLabel: '对照月预算约2万（机票+电梯房+景区观光车；勿硬拼自驾天路）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
    summary:
      '长线组合卡：嵌入西宁青海湖、张掖丹霞、敦煌莫高三条短线；中间兰州只作缓冲过夜。景点正文见各短线。海拔逐步抬、日驾短；不硬赶茶卡—敦煌一夜贯通。',
    whyFast:
      '可只订其中一条短线；走廊可删茶卡、夜赶戈壁与任一河西段。',
    researchKeywords: [
      '青甘大环线 慢游 父母',
      '西宁 青海湖 包车 攻略',
      '张掖丹霞 观光车 父母',
      '敦煌 莫高窟 预约',
    ],
    sources: [
      {
        title: 'Wikivoyage：西宁',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%81',
        kind: 'other',
        note: '进出概览；细节见青海湖短线',
      },
      {
        title: '敦煌研究院：莫高窟票务服务',
        url: 'http://www.dha.ac.cn/skxl/mgk.htm',
        kind: 'official',
        note: '票务以官方为准；细节见敦煌短线',
      },
    ],
    stops: [
      {
        id: 'lanzhou-hub',
        name: '兰州（走廊缓冲过夜）',
        days: 1.5,
        pace: 'slow',
        lat: 36.061,
        lng: 103.834,
        summary:
          '西宁与张掖之间的高铁/飞机枢纽；黄河边散步、牛肉面清淡吃，不硬加点。',
        tips: '兰州海拔较低，适合恢复。别塞进白银长途日驾。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lanzhou.jpg/1280px-Lanzhou.jpg',
      },
    ],
  },

  // ── 丝路 · 西安腿 ──────────────────────────────────────────
  {
    id: 'leg-xian-terracotta',
    title: '西安 · 城墙与兵马俑浅尝',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约5–6天',
    transport:
      '北京高铁/飞机至西安；市区地铁+打车。可单订，也可作丝路组合第一段后西行兰州。',
    budgetLabel: '本趟约2500–5500元（含兵马俑门票）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
    summary:
      '独立短线：城墙选段电瓶车、陕历博或回民街浅尝，兵马俑早场一号坑快览。华山缆车默认可删。可单订，也可接丝路组合西行。',
    whyFast: '华山与二/三号坑可删；只留城墙+一号坑也成立。更长慢住见「西安·慢住两周」。',
    researchKeywords: [
      '西安 兵马俑 父母',
      '西安 城墙 电瓶车',
      '西安 三日 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：西安',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%89',
        kind: 'other',
        note: '古城与兵马俑交通概览',
      },
      {
        title: '秦始皇帝陵博物院（兵马俑）',
        url: 'https://www.bmy.com.cn/',
        kind: 'official',
        note: '预约、票价与开放时间以官网为准',
      },
    ],
    stops: [
      {
        id: 'xian-silk-base',
        name: '西安（慢住）',
        days: 4,
        pace: 'slow',
        lat: 34.341,
        lng: 108.94,
        summary: '城墙选段电瓶车、回民街浅尝；每天一处博物馆或公园。',
        tips: '兵马俑另日早场；台阶多带折叠凳。近交大一附院电梯房更安心。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Xi%27an_City_Wall.jpg/1280px-Xi%27an_City_Wall.jpg',
      },
      {
        id: 'bingmayong-fast',
        name: '兵马俑（快览）',
        days: 1,
        pace: 'fast',
        lat: 34.385,
        lng: 109.278,
        summary: '景区摆渡+一号坑为主，不必三坑硬刷。',
        tips: '预约以官方渠道为准；暑期避开正午。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
      },
    ],
  },

  // ── 丝路 compose ───────────────────────────────────────────
  {
    id: 'compose-silkroad-xian-turpan',
    title: '丝路慢段 · 西安到吐鲁番',
    region: 'xibei',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['grand-loop'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'leg-xian-terracotta',
      'leg-dunhuang-mogao',
      'xibei-xinjiang-turpan',
    ],
    glue: [
      '西安→兰州高铁约3–4小时；兰州黄河边电梯酒店缓冲过夜（1–2晚，不硬加点），再飞或高铁至敦煌。段间可回京拆线。',
      '敦煌→乌鲁木齐飞机，再火车/包车至吐鲁番（单日衔接留余量）。乌市只作中转，不硬开独库、不夜穿戈壁。',
    ],
    transport:
      '北京高铁/飞机至西安进。顺序：西安短线 → 兰州缓冲 → 敦煌莫高短线 → 吐鲁番短线；段末乌市飞回北京。',
    budgetLabel: '对照月预算约2万（交通分段买票+电梯房；莫高窟/兵马俑门票另计）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
    summary:
      '长线组合卡：嵌入西安城墙兵马俑、敦煌莫高、吐鲁番葡萄沟三条短线；中间兰州与乌市只作衔接。景点正文见各短线。不硬开独库与夜穿戈壁。',
    whyFast:
      '可只订其中一条短线；走廊可删交河硬爬、鸣沙骑骆驼与暑期正午吐鲁番户外。',
    researchKeywords: [
      '丝路 自驾 慢游 退休',
      '西安 兵马俑 父母',
      '敦煌 吐鲁番 火车',
      '丝路 分段 回京',
    ],
    sources: [
      {
        title: 'Wikivoyage：西安',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%89',
        kind: 'other',
        note: '细节见西安短线',
      },
      {
        title: 'Wikivoyage：吐鲁番',
        url: 'https://zh.wikivoyage.org/wiki/%E5%90%90%E9%B2%81%E7%95%AA',
        kind: 'other',
        note: '细节见吐鲁番短线',
      },
    ],
    stops: [
      {
        id: 'lanzhou-silk',
        name: '兰州（丝路缓冲过夜）',
        days: 1.5,
        pace: 'slow',
        lat: 36.061,
        lng: 103.834,
        summary: '西安与敦煌之间的中转歇脚；黄河风情线散步恢复，不硬加点。',
        tips: '可与青甘线兰州段合并理解，勿重复赶景。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lanzhou.jpg/1280px-Lanzhou.jpg',
      },
    ],
  },

  // ── 川滇 · 大理腿 ──────────────────────────────────────────
  {
    id: 'leg-dali-erhai',
    title: '大理 · 洱海慢住浅段',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'winter'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约5–7天',
    transport:
      '飞昆明转高铁/直飞大理；古城或海东电梯房。可单订，也可作川滇组合中段（成都后来、丽江续）。',
    budgetLabel: '本趟约2500–5500元（机票浮动大）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
    summary:
      '独立短线：大理古城或海东电梯房连住，洱海电瓶车/游船选段，不骑行环海。苍山索道量力可删。可单订，也可接川滇组合。',
    whyFast: '苍山索道与沙溪可删；只留洱海选段+空白日也成立。月租级慢居见 longstay-dali。',
    researchKeywords: [
      '大理 慢住 退休',
      '洱海 电瓶车 父母',
      '大理 五日 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：大理',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%A7%E7%90%86',
        kind: 'other',
        note: '古城与洱海交通概览',
      },
      {
        title: '云南省文旅厅',
        url: 'https://dct.yn.gov.cn/',
        kind: 'official',
        note: '景区预约与天气以官方为准',
      },
    ],
    stops: [
      {
        id: 'dali-loop-base',
        name: '大理（慢住）',
        days: 5,
        pace: 'slow',
        lat: 25.69,
        lng: 100.16,
        summary: '古城或海东电梯房，洱海电瓶车/游船选段，不骑行环海。',
        tips: '紫外线强。苍山索道量力。每周留空白日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
      },
      {
        id: 'erhai-segment',
        name: '洱海选段',
        days: 1.5,
        pace: 'slow',
        lat: 25.7,
        lng: 100.19,
        summary: '包车或电瓶车看一两段生态廊道；平地为主。',
        tips: '勿一日环海；中午防晒回房。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
      },
    ],
  },

  // ── 川滇 · 丽江腿 ──────────────────────────────────────────
  {
    id: 'leg-lijiang-taste',
    title: '丽江 · 束河与雪山浅尝',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'winter'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约3–4天',
    transport:
      '大理高铁约1.5小时或飞丽江；束河/新城电梯房。可单订，也可作川滇组合末段。',
    budgetLabel: '本趟约2000–4500元（含索道可选）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lijiang_Old_Town.jpg/1280px-Lijiang_Old_Town.jpg',
    summary:
      '独立短线：束河或新城住，古城白天短逛；玉龙雪山只坐索道/蓝月谷观景，不硬徒步。海拔约2400m+须放慢。可单订，也可接川滇组合。',
    whyFast: '玉龙大索道可整段删；优先蓝月谷/云杉坪。不排雨崩徒步。',
    researchKeywords: [
      '丽江 索道 父母',
      '丽江 束河 慢住',
      '玉龙雪山 蓝月谷',
    ],
    sources: [
      {
        title: 'Wikivoyage：丽江',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%BD%E6%B1%9F',
        kind: 'other',
        note: '海拔与雪山须知',
      },
      {
        title: '云南省文旅厅',
        url: 'https://dct.yn.gov.cn/',
        kind: 'official',
        note: '景区预约与天气以官方为准',
      },
    ],
    stops: [
      {
        id: 'lijiang-loop-taste',
        name: '丽江浅住',
        days: 2.5,
        pace: 'slow',
        lat: 26.872,
        lng: 100.23,
        summary: '束河或新城住，古城白天短逛；头两日放慢适应海拔。',
        tips: '海拔约2400m+，气短即停。结束后丽江/昆明飞北京。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lijiang_Old_Town.jpg/1280px-Lijiang_Old_Town.jpg',
      },
      {
        id: 'yulong-optional',
        name: '玉龙雪山观景（可选）',
        days: 1,
        pace: 'fast',
        lat: 27.1,
        lng: 100.2,
        summary: '蓝月谷或索道观景；大索道海拔高，按身体决定。',
        tips: '心肺不适整段删；备薄外套，勿硬徒步。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lijiang_Old_Town.jpg/1280px-Lijiang_Old_Town.jpg',
      },
    ],
  },

  // ── 川滇 compose ───────────────────────────────────────────
  {
    id: 'compose-chuandian-chengdu-dali-lijiang',
    title: '川滇慢环 · 成都大理丽江',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'winter'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['grand-loop'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'leg-chengdu-adapt',
      'leg-dali-erhai',
      'leg-lijiang-taste',
    ],
    glue: [
      '成都→大理飞机或经昆明高铁；单日衔接留余量，勿硬自驾一日达。可在成都多留空白再飞。',
      '大理→丽江高铁约1.5小时；丽江海拔抬升须心肺评估。雨季减少山路自驾；玉龙大索道默认可删。不适下撤大理/昆明飞京。',
    ],
    transport:
      '北京飞成都进。顺序：成都平原适应短线 → 大理洱海短线 → 丽江浅尝短线；段末丽江或昆明飞回北京。',
    budgetLabel: '对照月预算约2万（机票联程+电梯房慢住；索道另计）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
    summary:
      '长线组合卡：嵌入成都平原适应、大理洱海、丽江浅尝三条短线；中间只写飞/高铁衔接。景点正文见各短线。不强制环海骑行与雨崩徒步。',
    whyFast:
      '可只订其中一条短线；走廊可删苍山/玉龙索道与丽江整段，改回成都或大理慢住。',
    researchKeywords: [
      '川滇 大环线 慢游',
      '大理 慢住 退休',
      '丽江 索道 父母',
      '成都 大理 飞',
    ],
    sources: [
      {
        title: 'Wikivoyage：大理',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%A7%E7%90%86',
        kind: 'other',
        note: '细节见大理短线',
      },
      {
        title: 'Wikivoyage：丽江',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%BD%E6%B1%9F',
        kind: 'other',
        note: '细节见丽江短线',
      },
    ],
    stops: [
      {
        id: 'kunming-optional-buffer',
        name: '昆明（可选中转缓冲）',
        days: 1,
        pace: 'fast',
        lat: 25.038,
        lng: 102.718,
        summary: '若经昆明转机/高铁，翠湖浅逛即可；不作强制加点。',
        tips: '防晒；次日转大理或飞京。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
      },
    ],
  },
];
