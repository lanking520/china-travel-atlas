import type { Route } from '../types';

/** 青藏/华中深挖：日喀则浅尝 / 祁连门源可选 / 汉中慢住 / 宜昌三峡 */
export const patchRoutes: Route[] = [
  // ── 青藏 · 日喀则浅尝（须在拉萨适应之后）────────────────────
  {
    id: 'qingzang-shigatse-taste',
    title: '日喀则 · 浅尝短住',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约5–8天（接在拉萨适应之后）',
    transport:
      '仅在拉萨已适应至少3–5日、身体稳定后再赴日喀则：拉日高铁约2.5–3小时或包车；日喀则机场可飞返拉萨或经拉萨飞回北京。禁止未适应直接飞日喀则。',
    budgetLabel: '本趟约4500–8000元（含拉日交通与住宿；不含拉萨适应段大交通）',
    coverImage:
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200',
    summary:
      '拉萨慢适应完成后的短延伸：日喀则市区约3800米，扎什伦布寺量力浅访，不排珠峰大本营。高反加重立即下撤拉萨；整段可取消。结束后经拉萨飞回北京，再休整至少一周。',
    whyFast:
      '扎什伦布外围与平缓院落即可；珠峰大本营、定日更高海拔一律不排。不适整段跳过，只留拉萨后飞京。',
    researchKeywords: [
      '日喀则 拉萨 适应 攻略',
      '扎什伦布寺 参观 父母 高反',
    ],
    sources: [
      {
        title: 'Wikivoyage：日喀则',
        url: 'https://zh.wikivoyage.org/wiki/%E6%97%A5%E5%96%80%E5%88%99',
        kind: 'other',
        note: '海拔、进出与市区概览，已改写',
      },
      {
        title: 'Wikivoyage：拉萨',
        url: 'https://zh.wikivoyage.org/wiki/%E6%8B%89%E8%90%A8',
        kind: 'other',
        note: '适应节奏与拉日衔接参考',
      },
      {
        title: '西藏自治区文化和旅游厅',
        url: 'https://wlt.xizang.gov.cn/',
        kind: 'official',
        note: '景区开放、票务与进藏提示以官方公告为准',
      },
    ],
    stops: [
      {
        id: 'lhasa-buffer',
        name: '拉萨（缓冲与回撤）',
        days: 2,
        pace: 'slow',
        lat: 29.652,
        lng: 91.172,
        summary:
          '赴日喀则前后各留缓冲：确认血氧与症状平稳再出发；返程亦经拉萨歇脚再飞京。',
        tips:
          '本线前提是已完成拉萨适应主段（见 qingzang-lhasa-slow）。感冒、头痛加重、血氧持续偏低勿西行。选供氧电梯酒店，近医院。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'shigatse-city',
        name: '日喀则市区（浅住）',
        days: 3,
        pace: 'slow',
        lat: 29.267,
        lng: 88.881,
        summary:
          '约3800米，比拉萨再高一截。每日短出门、午休必留；街巷平地浅逛即可。',
        tips:
          '拉日高铁较包车省力。紫外线与风更强：帽、墨镜、薄羽绒。动作慢、多饮水；持续呕吐或呼吸困难立即吸氧并下撤拉萨。勿安排日喀则当「首站进藏」。',
        image:
          'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      },
      {
        id: 'tashilhunpo',
        name: '扎什伦布寺（量力）',
        days: 1,
        pace: 'fast',
        lat: 29.268,
        lng: 88.87,
        summary:
          '班禅驻锡地。外围与平缓院落浅访；台阶多处可跳过，外观亦可。',
        tips:
          '尊重摄影与着装规定；门票开放以当日为准。体力不够整段改市区休息。严禁连排珠峰线。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
    ],
  },

  // ── 青藏 · 祁连/门源夏花（西宁可选延伸）────────────────────
  {
    id: 'qingzang-qilian-optional',
    title: '祁连 · 门源夏花浅游',
    region: 'qingzang',
    seasons: ['summer'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约4–6天（挂接西宁适应之后）',
    transport:
      '北京飞西宁曹家堡；市区适应后再包车赴门源/祁连（单程约3–4.5小时）；结束后返西宁飞回北京',
    budgetLabel: '本趟约3500–6000元（含机票分摊与包车）',
    coverImage:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
    summary:
      '西宁适应后的夏日可选短线：门源油菜花田观景台浅看，祁连县城歇一夜。海拔阶梯：西宁约2260米 → 门源约2800–3000米 → 勿再冲更高山口。不适取消本线，只留西宁后飞京。',
    whyFast:
      '花田选1–2个观景台即可；祁连卓尔山等台阶多处可跳过。行程紧整段删除，不影响青海湖主线。',
    researchKeywords: [
      '门源 油菜花 西宁 包车',
      '祁连 高反 父母 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：西宁',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%81',
        kind: 'other',
        note: '高原门户与周边交通，已改写',
      },
      {
        title: '海北州人民政府文旅信息',
        url: 'https://www.haibei.gov.cn/',
        kind: 'official',
        note: '门源花期、景区开放以当地公告为准',
      },
      {
        title: '青海省文化和旅游厅',
        url: 'https://whlyt.qinghai.gov.cn/',
        kind: 'official',
        note: '天气与文旅提示参考',
      },
    ],
    stops: [
      {
        id: 'xining-ladder',
        name: '西宁（海拔阶梯起点）',
        days: 2,
        pace: 'slow',
        lat: 36.617,
        lng: 101.778,
        summary:
          '约2260米先适应1–2日再北上；可与青海湖线共用适应段，勿落地次日赶花田。',
        tips:
          '前两天少剧烈运动；备血氧仪。头痛胸闷则取消门源/祁连，多住西宁后飞北京。花期多在7月，以当地预报为准。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
      {
        id: 'menyuan-flowers',
        name: '门源油菜花（观景浅看）',
        days: 1,
        pace: 'fast',
        lat: 37.376,
        lng: 101.622,
        summary:
          '花田以观景台俯瞰为主，短停拍照即走；不徒步穿越花田。',
        tips:
          '海拔明显高于西宁，日晒强：帽+防晒。人多车堵可只停一处。不适立即返回西宁，勿过夜硬撑。',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      },
      {
        id: 'qilian-town',
        name: '祁连县城（可选歇脚）',
        days: 2,
        pace: 'slow',
        lat: 38.177,
        lng: 100.253,
        summary:
          '小城慢住一夜到两夜，街景与远山；卓尔山等登高量力或整段跳过。',
        tips:
          '比门源更北更凉，备外套。台阶多景区可只看山脚。返程包车回西宁飞京，勿再串茶卡硬环。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
    ],
  },

  // ── 华中 · 汉中慢住（西安之外的陕南短线）────────────────────
  {
    id: 'huazhong-shaanxi-hanzhong',
    title: '陕南 · 汉中慢住',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约5–7天',
    transport:
      '北京飞汉中城固，或高铁经西安北转汉中（西成高铁约1.5–2小时）；市区打车。结束后飞回北京，或返西安再高铁/飞京',
    budgetLabel: '本趟约3000–5500元（含机票/高铁与住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
    summary:
      '西安慢住之外的陕南短线：汉中盆地海拔低、节奏慢——兴汉胜境或古城浅逛、武侯祠博物馆空调看展，米饭面食清淡。不排硬爬巴山长线。看够飞京或经西安回京。',
    whyFast:
      '诸葛古镇/朱鹮观鸟选一处半日即可；主体留给城区慢住与空白日。',
    researchKeywords: [
      '汉中 慢住 攻略 退休',
      '汉中 兴汉胜境 武侯祠 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：汉中',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B1%89%E4%B8%AD',
        kind: 'other',
        note: '进出与市内概览，已改写',
      },
      {
        title: '汉中市文化和旅游局',
        url: 'https://www.hanzhong.gov.cn/',
        kind: 'official',
        note: '景区开放与天气以当地公告为准',
      },
      {
        title: '武侯祠（汉中）相关文旅信息',
        url: 'https://www.hanzhong.gov.cn/',
        kind: 'official',
        note: '门票与开放时间以现场/官方为准',
      },
    ],
    stops: [
      {
        id: 'hanzhong-base',
        name: '汉中市区（慢住）',
        days: 4,
        pace: 'slow',
        lat: 33.068,
        lng: 107.023,
        summary:
          '选近中心电梯酒店；滨江或古城一带平路散步，每天最多一处，下午回酒店歇。',
        tips:
          '盆地潮湿春日备薄外套。汉中菜偏辣可点微辣/清淡。直飞或经西安均可；行李多重直飞城固更省心。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
      {
        id: 'hanzhong-wuhou',
        name: '武侯祠 · 古汉台一带',
        days: 1,
        pace: 'slow',
        lat: 33.074,
        lng: 107.031,
        summary:
          '平地博物馆与园林为主，空调展厅适合细看半日；台阶多处可跳过。',
        tips:
          '门票规则以当日为准。与兴汉胜境勿排同一天硬赶。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'xinghan-optional',
        name: '兴汉胜境或朱鹮（可选）',
        days: 1,
        pace: 'fast',
        lat: 33.12,
        lng: 107.15,
        summary:
          '二选一浅访：兴汉胜境观光车减步行，或朱鹮基地远观。行程紧整段删除。',
        tips:
          '包车半日即可。暑热避开正午；雨天石板防滑。不必再塞黎坪长徒步。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
    ],
  },

  // ── 华中 · 宜昌三峡（武当之外的湖北短线）────────────────────
  {
    id: 'huazhong-yichang-three-gorges',
    title: '宜昌 · 三峡观光短住',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约4–6天',
    transport:
      '北京飞宜昌三峡机场，或高铁至宜昌东；景区观光船/正规短途游轮码头接驳。结束后飞或高铁回北京',
    budgetLabel: '本趟约3500–6500元（含机票/高铁与船票）',
    coverImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    summary:
      '武当山之外的湖北短线：宜昌歇脚，三峡人家或两坝一峡观光船半日到一日，平地看坝区展览。选正规日游/短航，不排多日特种兵游轮赶场。看够回京。',
    whyFast:
      '船游选半日精华段即可；三峡大坝以观景台与展览馆为主，少走长台阶。',
    researchKeywords: [
      '宜昌 三峡 观光船 攻略',
      '三峡大坝 父母 一日游',
    ],
    sources: [
      {
        title: 'Wikivoyage：宜昌',
        url: 'https://zh.wikivoyage.org/wiki/%E5%AE%9C%E6%98%8C',
        kind: 'other',
        note: '枢纽、坝区与游船概览，已改写',
      },
      {
        title: '三峡大坝旅游区相关官方信息',
        url: 'https://www.yichang.gov.cn/',
        kind: 'official',
        note: '开放预约与安检以当地/景区公告为准',
      },
      {
        title: '宜昌市人民政府',
        url: 'https://www.yichang.gov.cn/',
        kind: 'official',
        note: '天气、交通与文旅提示',
      },
    ],
    stops: [
      {
        id: 'yichang-base',
        name: '宜昌市区（进出休整）',
        days: 2,
        pace: 'slow',
        lat: 30.702,
        lng: 111.287,
        summary:
          '近江电梯酒店歇脚；滨江公园平路散步，次日再上船或赴坝区。',
        tips:
          '机场/宜昌东出站打车最省心。湿润多雾备薄外套。回京订午后航班或高铁，留足赶路余量。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'three-gorges-boat',
        name: '三峡观光船 / 两坝一峡',
        days: 1,
        pace: 'fast',
        lat: 30.825,
        lng: 111.0,
        summary:
          '正规半日或一日观光船，坐船看峡，少换船上岸奔波。',
        tips:
          '认准正规码头与合同；晕船备药。雨雾天观景一般，可改坝区室内。不安排多日廉价长线游轮硬赶。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'three-gorges-dam',
        name: '三峡大坝观景（可选）',
        days: 1,
        pace: 'slow',
        lat: 30.823,
        lng: 111.003,
        summary:
          '观景台与展览馆为主；观光车接驳，量力少爬台阶。',
        tips:
          '安检严，禁带规定物品以现场为准。与船游可分两日，勿一日塞满。暑热或雨天优先室内展。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
    ],
  },
];
