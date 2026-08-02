import type { Route } from '../types';

/**
 * Famous corridor compose batch 5 (2026-08-02).
 * 5 compose from existing legs; glue-only on compose cards.
 * Skip 粤西开平–湛江 (no zhanjiang leg / no multi-discovery for new id).
 * Evidence: research/notes/content-route-composition-ia-20260802.md
 */
export const patchRoutes: Route[] = [
  // ── 1. 桂北海 · 阳朔北海 ────────────────────────────────────
  {
    id: 'compose-gui-beihai',
    title: '桂北海 · 阳朔银滩',
    region: 'huanan',
    seasons: ['winter', 'spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor', 'famous-scenic'],
    fromHome: false,
    daysLabel: '约3–4周',
    legIds: ['huanan-guilin-yangshuo', 'huanan-guangxi-beihai'],
    glue: [
      '阳朔→北海经南宁高铁约3–4小时（南宁可过夜缓冲）；一日只换一城，勿漓江当日赶银滩。',
      '涠洲船渡默认可删；台风/大风停航期只留银滩平路。段末北海或南宁飞回北京。',
    ],
    transport:
      '北京飞桂林进 → 桂林阳朔漓江慢住 → 南宁缓冲（可选）→ 北海银滩短线；段末北海/南宁飞回北京。飞/高铁换住，不硬桂南自驾贯通。',
    budgetLabel: '对照月预算约2–2.5万（机票+高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
    summary:
      '长线组合卡：嵌入桂林阳朔、北海银滩两条短线；中间只写南宁高铁衔接与缓冲。景点正文见各短线。涠洲默认可删，不排桂南特种兵。',
    introduction:
      '桂南名景走廊：漓江峰林 → 北海银滩。本卡嵌入两条已立项短线；此处只管 glue、可删段与 honest 车程。\n\n景点细节只在各短线维护；阳朔慢住可压天数，北海可只银滩三晚。',
    whyFast: '可只订其中一条短线；走廊可删北海，只留漓江也成立；涠洲默认删。',
    notices: [
      '一日只换一城；南宁缓冲过夜优先于连轴高铁。',
      '漓江船票与银滩防晒分线准备；湿热季午后多室内。',
      '涠洲船渡受天气影响大，晕船或行程紧整段删除。',
      '任一段不适即飞回北京休整，勿硬拼全廊。',
    ],
    researchKeywords: [
      '桂林 北海 慢游 父母',
      '阳朔 北海 高铁',
      '银滩 涠洲 可删',
    ],
    sources: [
      {
        title: 'Wikivoyage：桂林',
        url: 'https://zh.wikivoyage.org/wiki/%E6%A1%82%E6%9E%97',
        kind: 'other',
        note: '细节见桂林阳朔短线',
      },
      {
        title: 'Wikivoyage：北海',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8C%97%E6%B5%B7',
        kind: 'other',
        note: '细节见北海短线',
      },
      {
        title: '中国铁路客户服务中心',
        url: 'https://www.12306.cn/',
        kind: 'official',
        note: '高铁时刻以 12306 为准',
      },
    ],
    stops: [
      {
        id: 'gbh-nanning-buffer',
        name: '南宁（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 22.817,
        lng: 108.366,
        summary: '阳朔与北海之间的高铁枢纽过夜；青秀山或邕江浅走可选，酒店空白日即可。',
        tips: '可删直达北海；勿塞德天瀑布同日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BeiHaiYanTan.jpg/1280px-BeiHaiYanTan.jpg',
      },
    ],
  },

  // ── 2. 武夷–厦 ──────────────────────────────────────────────
  {
    id: 'compose-wuyi-xiamen',
    title: '武夷厦 · 九曲鼓浪屿',
    region: 'huanan',
    seasons: ['spring', 'autumn', 'winter'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor', 'famous-scenic'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: ['huanan-fujian-wuyi', 'huanan-xiamen-winter'],
    glue: [
      '武夷山→厦门高铁约3–4小时（经南平/福州）；福州可过夜缓冲，勿与鼓浪屿同日硬赶。',
      '土楼段默认可删；只留九曲竹筏+厦鼓也成立。段末厦门飞回北京。与闽粤沿海廊（泉潮）分次出门更稳。',
    ],
    transport:
      '北京飞武夷山/高铁进 → 武夷九曲短线 → 厦门鼓浪屿短线；段末厦门飞回北京。高铁换住，不硬闽北闽南自驾环。',
    budgetLabel: '对照月预算约2万（机票+高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Peak_Yunu.jpg/1280px-Peak_Yunu.jpg',
    summary:
      '长线组合卡：嵌入武夷山、厦门鼓浪屿两条短线；中间只写高铁衔接。景点正文见各短线。天游峰与土楼默认可删。',
    introduction:
      '闽中名景走廊：九曲竹筏 → 厦鼓慢住。本卡嵌入两条短线，此处只管 glue 与可删段。\n\n与「闽粤沿海·厦泉潮汕」部分重叠厦门段——本廊北起武夷、不南延潮汕；泉潮另订。',
    whyFast: '可只订其中一条短线；走廊可删土楼或天游，只留竹筏+鼓浪屿也成立。',
    notices: [
      '竹筏防溅水；天游峰台阶多默认跳过。',
      '鼓浪屿船票提前预约；岛上无机动车，穿防滑软底。',
      '夏湿热缩短午后户外；台风预警减少出海与山路。',
      '任一段不适即飞回北京休整。',
    ],
    researchKeywords: [
      '武夷 厦门 高铁 父母',
      '九曲溪 鼓浪屿',
      '闽北 闽南 慢游',
    ],
    sources: [
      {
        title: 'Wikivoyage：武夷山',
        url: 'https://zh.wikivoyage.org/wiki/%E6%AD%A6%E5%A4%B7%E5%B1%B1',
        kind: 'other',
        note: '细节见武夷短线',
      },
      {
        title: 'Wikivoyage：厦门',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8E%A6%E9%97%A8',
        kind: 'other',
        note: '细节见厦门短线',
      },
    ],
    stops: [
      {
        id: 'wyxm-fuzhou-buffer',
        name: '福州（可选中转缓冲）',
        days: 1,
        pace: 'fast',
        lat: 26.074,
        lng: 119.296,
        summary: '武夷与厦门之间的可选高铁停点；三坊七巷浅走或酒店空白日。',
        tips: '可删直达厦门；勿与鼓浪屿同日连轴。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gulangyu_Island.jpg/1280px-Gulangyu_Island.jpg',
      },
    ],
  },

  // ── 3. 皖南九华 ────────────────────────────────────────────
  {
    id: 'compose-wantan-jiuhua',
    title: '皖南 · 黄山九华',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor', 'famous-scenic'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: ['huadong-huangshan-hui', 'huadong-anhui-jiuhua'],
    glue: [
      '黄山北→池州/九华山高铁或包车约1–2小时；段间留空白，索道上下黄山，勿硬徒步登顶。',
      '九华缆车浅朝，台阶量力；与苏杭徽水乡廊分次出门更稳（本廊只深挖皖南山岳）。段末黄山/池州/合肥高铁或飞回北京。',
    ],
    transport:
      '北京高铁至黄山北 → 黄山徽州短线 → 九华山短线；段末黄山/池州/合肥回京。高铁换住，不硬皖南盘山自驾环。',
    budgetLabel: '对照月预算约2万（高铁+索道缆车+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Huangshan_pic_4.jpg/1280px-Huangshan_pic_4.jpg',
    summary:
      '长线组合卡：嵌入黄山徽州、九华山两条短线；中间只写高铁/包车衔接。景点正文见各短线。索道缆车减步，不排硬爬特种兵。',
    introduction:
      '皖南名山走廊：黄山索道 → 九华缆车浅朝。本卡嵌入两条短线，此处只管 glue 与 honest 车程。\n\n与「苏杭徽」共用黄山腿——本廊不排西湖水乡，只串皖南两山。',
    whyFast: '可只订其中一条短线；走廊可删九华，只留黄山徽州也成立。',
    notices: [
      '黄山索道上下，台阶与云海日量力；硬爬登顶可删。',
      '九华缆车优先；朝山台阶多则外观即返。',
      '山中湿冷备外套；雨雪结冰缩短户外。',
      '任一段不适即高铁回京休整。',
    ],
    researchKeywords: [
      '皖南 黄山 九华 父母',
      '黄山 池州 高铁',
      '九华山 缆车 适老',
    ],
    sources: [
      {
        title: 'Wikivoyage：黄山',
        url: 'https://zh.wikivoyage.org/wiki/%E9%BB%84%E5%B1%B1',
        kind: 'other',
        note: '细节见黄山短线',
      },
      {
        title: 'Wikivoyage：九华山',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B9%9D%E5%8D%8E%E5%B1%B1',
        kind: 'other',
        note: '细节见九华短线',
      },
    ],
    stops: [
      {
        id: 'wtjh-chizhou-buffer',
        name: '池州（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 30.665,
        lng: 117.492,
        summary: '黄山与九华之间的可选停点；酒店空白日恢复车程疲劳。',
        tips: '可删直达九华；勿夜赶山路。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Jiuhuashan_yunhai.JPG/1280px-Jiuhuashan_yunhai.JPG',
      },
    ],
  },

  // ── 4. 鄂西恩施/三峡 ───────────────────────────────────────
  {
    id: 'compose-exi-enshi-sanxia',
    title: '鄂西 · 恩施三峡',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor', 'famous-scenic'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: ['huazhong-hubei-enshi', 'huazhong-yichang-three-gorges'],
    glue: [
      '恩施→宜昌高铁约2–3小时；段间留空白，勿峡谷当日赶大坝。云龙地缝与多日游轮默认可删。',
      '神农架另线，本廊不北延盘山。段末宜昌飞/高铁回北京。重庆武隆见川渝廊，勿同趟硬并。',
    ],
    transport:
      '北京飞恩施进 → 恩施大峡谷短线 → 宜昌三峡短线；段末宜昌飞/高铁回北京。飞/高铁换住，不硬鄂西自驾环。',
    budgetLabel: '对照月预算约2万（机票+高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Enshi_grand_canyon.jpg/1280px-Enshi_grand_canyon.jpg',
    summary:
      '长线组合卡：嵌入恩施大峡谷、宜昌三峡两条短线；中间只写高铁衔接。景点正文见各短线。电梯观谷+坝区浅览，不排多日游轮特种兵。',
    introduction:
      '鄂西名景走廊：恩施电梯观谷 → 宜昌三峡门户。本卡嵌入两条短线，此处只管 glue 与可删段。\n\n景点细节只在各短线维护；地缝长线与多日游轮默认删除。',
    whyFast: '可只订其中一条短线；走廊可删恩施或只留宜昌坝区也成立。',
    notices: [
      '恩施垂直电梯与观光车减步；恐高选段外观。',
      '宜昌正规短线船量力，晕船则岸上观坝即可。',
      '土家菜与江鲜偏辣油，点微辣/清蒸；清汤面保底。',
      '任一段不适即飞回北京休整。',
    ],
    researchKeywords: [
      '恩施 宜昌 慢游 父母',
      '恩施大峡谷 三峡 高铁',
      '三峡大坝 适老',
    ],
    sources: [
      {
        title: 'Wikivoyage：湖北',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B9%96%E5%8C%97',
        kind: 'other',
        note: '细节见恩施/宜昌短线',
      },
      {
        title: '中国铁路客户服务中心',
        url: 'https://www.12306.cn/',
        kind: 'official',
        note: '高铁时刻以 12306 为准',
      },
    ],
    stops: [
      {
        id: 'exsx-yichang-buffer',
        name: '宜昌（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 30.692,
        lng: 111.286,
        summary: '恩施抵达宜昌后的空白日；滨江散步即可，次日再排坝区/短线船。',
        tips: '勿与恩施峡谷同日连轴；酒店近电梯优先。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Three_Gorges_Dam.jpg/1280px-Three_Gorges_Dam.jpg',
      },
    ],
  },

  // ── 5. 宁夏沙坡头–兰州 ─────────────────────────────────────
  {
    id: 'compose-ningxia-shapotou-lanzhou',
    title: '宁兰 · 沙坡头黄河',
    region: 'xibei',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor', 'famous-scenic'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'xibei-ningxia-3d',
      'xibei-ningxia-shapotou',
      'xibei-gansu-lanzhou-huanghe',
    ],
    glue: [
      '银川→中卫高铁约1.5–2小时；沙坡头拒高空滑沙与沙漠冲浪车，观光缆车/黄河筏量力。',
      '中卫→兰州高铁约3–4小时；段间留空白。夏河拉卜楞另线，本廊不硬上高原。段末兰州飞/高铁回北京。',
    ],
    transport:
      '北京飞银川进 → 银川西夏陵短线 → 中卫沙坡头短线 → 兰州黄河短线；段末兰州飞/高铁回北京。高铁换住，不硬沙漠自驾环。',
    budgetLabel: '对照月预算约2万（机票+高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shapotou.jpg/1280px-Shapotou.jpg',
    summary:
      '长线组合卡：嵌入银川三日、沙坡头、兰州黄河三条短线；中间只写高铁衔接。景点正文见各短线。拒沙漠特种兵与夏河高原硬接。',
    introduction:
      '宁甘黄河走廊：西夏陵 → 沙坡头 → 兰州中山桥。本卡嵌入三条短线，此处只管 glue 与可删段。\n\n河西敦煌张掖见既有河西廊；本廊止于兰州黄河浅住。',
    whyFast: '可只订其中一条短线；走廊可删银川或沙坡头，只留兰州也成立。',
    notices: [
      '干燥防晒护唇；沙尘天缩短户外。',
      '沙坡头拒高风险项目；缆车/岸边观景即可。',
      '牛肉面清汤少辣油；手抓羊肉适量。',
      '任一段不适即飞回北京休整。',
    ],
    researchKeywords: [
      '沙坡头 兰州 慢游 父母',
      '银川 中卫 高铁',
      '兰州 黄河 适老',
    ],
    sources: [
      {
        title: 'Wikivoyage：中卫',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%AD%E5%8D%AB',
        kind: 'other',
        note: '细节见沙坡头短线',
      },
      {
        title: 'Wikivoyage：兰州',
        url: 'https://zh.wikivoyage.org/wiki/%E5%85%B0%E5%B7%9E',
        kind: 'other',
        note: '细节见兰州短线',
      },
      {
        title: '中国铁路客户服务中心',
        url: 'https://www.12306.cn/',
        kind: 'official',
        note: '高铁时刻以 12306 为准',
      },
    ],
    stops: [
      {
        id: 'nxsl-zhongwei-buffer',
        name: '中卫（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 37.515,
        lng: 105.197,
        summary: '银川与兰州之间的过夜枢纽；沙坡头日归后酒店空白，次日再赴兰州。',
        tips: '可与沙坡头短线基地合并理解；勿再塞镇北堡同日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shapotou.jpg/1280px-Shapotou.jpg',
      },
    ],
  },
];
