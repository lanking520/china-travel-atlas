import type { Route } from '../types';

/**
 * Famous corridor compose batch 4 (2026-08-02).
 * 12 compose + 2 extracted Hainan legs; glue-only on compose cards.
 * Evidence: research/notes/content-route-composition-ia-20260802.md
 */
export const patchRoutes: Route[] = [
  // ── 海南西线浅段（从儋州慢住抽出）────────────────────────────
  {
    id: 'leg-hainan-west-shallow',
    title: '海南西线 · 儋州棋子湾浅段',
    region: 'huanan',
    seasons: ['winter', 'spring'],
    tripType: 'short',
    compositionKind: 'leg',
    themes: ['famous-scenic'],
    fromHome: false,
    daysLabel: '约4–6天',
    transport:
      '北京飞海口美兰，环岛高铁或包车西行至儋州/昌江；滨海慢住后飞回北京或转东线。可单订，也可作海南环岛组合中段。',
    budgetLabel: '本趟约2500–4500元（机票+西线住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
    summary:
      '独立短线：儋州一带西线滨海平路散步、温泉休整，棋子湾可选浅访。人比东线少；紫外线仍强。可单订，也可接海南环岛组合。更长慢住见「海南西线·儋州慢住」。',
    whyFast: '棋子湾整段可删；只留儋州滨海慢住也成立。勿环岛特种兵。',
    researchKeywords: [
      '儋州 西线 浅住 父母',
      '昌江 棋子湾 攻略',
      '海南 西线 包车',
    ],
    sources: [
      {
        title: 'Wikivoyage：儋州',
        url: 'https://zh.wikivoyage.org/wiki/%E5%84%92%E5%B7%9E',
        kind: 'other',
        note: '西线位置与交通概览，已改写',
      },
      {
        title: '海南省旅游和文化广电体育厅',
        url: 'https://lwt.hainan.gov.cn/',
        kind: 'official',
        note: '景区与天气公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'lh-danzhou-base',
        name: '儋州（西线慢住基地）',
        days: 3,
        pace: 'slow',
        lat: 19.521,
        lng: 109.581,
        summary: '滨海或市区电梯酒店；每天海边短走或市内补给，留空白日。',
        tips: '冬春仍防晒；强冷空气备薄外套。饮食清淡，海鲜不过量。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
      },
      {
        id: 'lh-danzhou-coast',
        name: '西线滨海散步',
        days: 1,
        pace: 'slow',
        lat: 19.45,
        lng: 108.95,
        summary: '平缓海岸栈道/沙滩浅区，早晚走、中午歇。',
        tips: '紫外线强，10:00前或16:00后更好；石滩穿防滑鞋。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
      },
      {
        id: 'lh-qiziwan-optional',
        name: '昌江棋子湾（可选）',
        days: 1,
        pace: 'fast',
        lat: 19.27,
        lng: 108.85,
        summary: '包车日归或住一晚看海湾；与儋州基地二选一加深。',
        tips: '车程留意疲劳驾驶；景区台阶量力。行程紧可整段跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
      },
    ],
  },

  // ── 三亚湾浅段（从暖冬慢住抽出）────────────────────────────
  {
    id: 'leg-sanya-beach',
    title: '三亚 · 海湾浅住',
    region: 'huanan',
    seasons: ['winter', 'spring'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约5–7天',
    transport:
      '北京飞三亚凤凰；市区/三亚湾电梯酒店打车。可单订，也可作海南环岛组合末段。更长慢住见「三亚·暖冬慢住两周」。',
    budgetLabel: '本趟约3500–6500元（机票+近海住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
    summary:
      '独立短线：三亚湾/大东海近海电梯酒店慢住，椰梦长廊傍晚散步，亚龙湾滨海栈道可选。抵琼留适应期；南山可删。可单订，也可接海南环岛组合。',
    whyFast: '南山与亚龙湾可各删；只留三亚湾慢住也成立。勿一日刷全岛。',
    researchKeywords: [
      '三亚 浅住 父母',
      '三亚湾 椰梦长廊',
      '亚龙湾 栈道 适老',
    ],
    sources: [
      {
        title: 'Wikivoyage：三亚',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%89%E4%BA%9A',
        kind: 'other',
        note: '海湾慢住概览，已改写',
      },
      {
        title: '今冬避寒康养好去处推荐之海南篇（中国天气网）',
        url: 'https://www.weather.com.cn/hainan/zyqxxx/01/4039323.shtml',
        kind: 'official',
        note: '冬季均温与避寒提示',
      },
    ],
    stops: [
      {
        id: 'lh-sanya-base',
        name: '三亚湾/大东海（慢住基地）',
        days: 4,
        pace: 'slow',
        lat: 18.252,
        lng: 109.512,
        summary: '近海电梯酒店；椰梦长廊傍晚散步，早上海边晒太阳。',
        tips: '落地前3天静养为主；南北温差大，备薄外套。选正规酒店或公寓。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
      },
      {
        id: 'lh-yalong-bay',
        name: '亚龙湾 · 滨海慢走（可选）',
        days: 2,
        pace: 'slow',
        lat: 18.231,
        lng: 109.646,
        summary: '沙细水清，滨海栈道平坦，适合慢慢走、找荫凉处歇脚。',
        tips: '中午紫外线强，10:00前或16:00后出行；带遮阳帽与补水。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
      },
      {
        id: 'lh-nanshan-optional',
        name: '南山文化旅游区（可选）',
        days: 1,
        pace: 'fast',
        lat: 18.298,
        lng: 109.206,
        summary: '海上观音壮观，景区有观光车，可远观为主不必全程步行。',
        tips: '景区面积大，买观光车票；疲劳可整段删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
      },
    ],
  },

  // ── 1. 江南浙赣 · 西湖婺源庐山 ─────────────────────────────
  {
    id: 'compose-jiangnan-zhegan-lushan',
    title: '江南浙赣 · 西湖婺源庐山',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huadong-hangzhou-suzhou',
      'huadong-wuyuan-spring',
      'huadong-jiangxi-lushan',
    ],
    glue: [
      '杭州→婺源高铁经上饶/黄山北约2–3小时；段间留1–2晚空白，勿一日多城。春花期与庐山避暑季可错开，不必硬同趟。',
      '婺源→庐山高铁至九江/庐山站约2–3小时，景区巴士上牯岭；庐山云雾湿冷备外套，五老峰默认不排。',
    ],
    transport:
      '北京高铁至杭州 → 婺源景德镇短线 → 庐山牯岭短线；段末九江/南昌高铁或飞回北京。高铁换住，不硬自驾贯通。',
    budgetLabel: '对照月预算约2万（高铁+电梯酒店+景区交通；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
    summary:
      '长线组合卡：嵌入杭州西湖、婺源景德镇、庐山牯岭三条短线；中间只写高铁衔接与缓冲。景点正文见各短线。不排黄山硬爬与一日多村特种兵。',
    introduction:
      '华东名景走廊：西湖慢走 → 赣东北花海瓷都 → 庐山牯岭避暑。本卡是「串珠」组合，嵌入三条已立项短线；此处只管衔接、可删段与 honest 车程。\n\n景点细节只在各短线维护；任一段不适可中止回京。',
    whyFast: '可只订其中一条短线；走廊可删乌镇、篁岭或庐山整段，只留西湖也成立。',
    notices: [
      '一日只换一城；高铁优先二等座靠窗/过道便于起身。',
      '西湖雷峰塔有电梯；庐山靠观光车，勿硬爬五老峰。',
      '婺源花期看预报；周末公路易堵，包车单日≤4小时。',
      '任一段不适即回京休整，勿硬拼全廊。',
    ],
    researchKeywords: [
      '江南 浙赣 慢游 父母',
      '杭州 婺源 高铁',
      '庐山 牯岭 观光车',
    ],
    sources: [
      {
        title: 'Wikivoyage：杭州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%9D%AD%E5%B7%9E',
        kind: 'other',
        note: '细节见西湖短线',
      },
      {
        title: 'Wikivoyage：婺源',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A9%BA%E6%BA%90',
        kind: 'other',
        note: '细节见婺源短线',
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
        id: 'jnz-nanchang-buffer',
        name: '南昌/上饶（可选中转缓冲）',
        days: 1,
        pace: 'fast',
        lat: 28.682,
        lng: 115.857,
        summary: '婺源与庐山之间的可选高铁停点；滕王阁外观或酒店空白日即可。',
        tips: '可删直达庐山；勿塞额外景点。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
      },
    ],
  },

  // ── 2. 闽粤沿海 ───────────────────────────────────────────
  {
    id: 'compose-min-yue-coast',
    title: '闽粤沿海 · 厦泉潮汕',
    region: 'huanan',
    seasons: ['winter', 'spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huanan-xiamen-winter',
      'huanan-fujian-quanzhou',
      'huanan-guangzhou-chaoshan',
    ],
    glue: [
      '厦门→泉州动车约30–40分钟；土楼段可删，只留厦鼓+泉州古城也成立。段间留空白，勿一日多城。',
      '泉州→潮汕高铁经厦门或直达约2–3小时；潮汕美食浅尝，勿硬排南澳岛自驾。台风预警期减少海边与山路。',
    ],
    transport:
      '北京飞厦门进 → 厦门鼓浪屿短线 → 泉州海丝短线 → 广州潮汕短线；段末潮汕/广州/厦门飞回北京。飞/高铁换住，不硬环海自驾。',
    budgetLabel: '对照月预算约2万（机票+高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gulangyu_Island.jpg/1280px-Gulangyu_Island.jpg',
    summary:
      '长线组合卡：嵌入厦门鼓浪屿、泉州海丝、广州潮汕三条短线；中间只写飞/动车衔接。景点正文见各短线。土楼与南澳默认可删。',
    introduction:
      '闽粤沿海是父母友好暖冬/春秋廊：厦鼓慢住 → 泉州古城 → 潮汕美食。本卡嵌入三条短线，此处只管 glue 与可删段。\n\n景点细节只在各短线维护；土楼整段可删，厦鼓仍成立。',
    whyFast: '土楼、泉州或潮汕任一可删；主体厦门+潮汕也成立。',
    notices: [
      '鼓浪屿船票提前预约；岛上无机动车，穿防滑软底。',
      '泉州古城平路为主；潮汕勿一日多城。',
      '台风预警减少出海与土楼山路；海鲜少生冷。',
      '任一段不适即飞回北京休整。',
    ],
    researchKeywords: [
      '闽粤 沿海 慢游 父母',
      '厦门 泉州 动车',
      '潮汕 高铁 美食',
    ],
    sources: [
      {
        title: 'Wikivoyage：厦门',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8E%A6%E9%97%A8',
        kind: 'other',
        note: '细节见厦门短线',
      },
      {
        title: 'Wikivoyage：泉州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B3%89%E5%B7%9E',
        kind: 'other',
        note: '细节见泉州短线',
      },
    ],
    stops: [
      {
        id: 'myc-xiamen-buffer',
        name: '厦门（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 24.479,
        lng: 118.089,
        summary: '土楼归来或转泉州前的空白日；环岛路早晚散步即可。',
        tips: '勿与鼓浪屿同日硬赶；台风天改室内。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gulangyu_Island.jpg/1280px-Gulangyu_Island.jpg',
      },
    ],
  },

  // ── 3. 湘黔桂 ───────────────────────────────────────────────
  {
    id: 'compose-xiang-qian-gui',
    title: '湘黔桂 · 张家界黄果树阳朔',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor', 'famous-scenic'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huazhong-zhangjiajie',
      'xinan-guizhou-huangguoshu',
      'longstay-yangshuo',
    ],
    glue: [
      '张家界→贵阳/安顺高铁约3–4小时；段间留空白，勿硬自驾一日达。天门山索道默认可删，只留森林公园观光车线。',
      '黄果树→桂林高铁约2–3小时；阳朔就医下撤桂林（约1–1.5小时）。雨天改室内，竹筏/游船量力。',
    ],
    transport:
      '北京飞张家界/长沙进 → 张家界名景短线 → 黄果树瀑布短线 → 阳朔漓江短住；段末桂林飞回北京。飞/高铁换住，不硬环黔桂自驾。',
    budgetLabel: '对照月预算约2万（机票+高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1_tianzishan_wulingyuan_zhangjiajie_2012.jpg/1280px-1_tianzishan_wulingyuan_zhangjiajie_2012.jpg',
    summary:
      '长线组合卡：嵌入张家界、黄果树、阳朔三条短线；中间只写飞/高铁衔接。景点正文见各短线。不排天门山硬爬与漓江特种兵。',
    introduction:
      '湘黔桂名景走廊：武陵源 → 黄果树 → 漓江山水。本卡嵌入三条短线，此处只管衔接与 honest 车程。\n\n景点细节只在各短线维护；任一段可删，只留张家界或阳朔也成立。',
    whyFast: '可只订其中一条短线；走廊可删天门山、黄果树或阳朔整段。',
    notices: [
      '张家界靠观光车，台阶量力；天门山索道恐高可删。',
      '黄果树水雾大，备雨衣与防滑鞋。',
      '阳朔本地无三甲，就医下撤桂林；竹筏选正规票点。',
      '任一段不适即中止飞回北京。',
    ],
    researchKeywords: [
      '湘黔桂 慢游 父母',
      '张家界 黄果树 高铁',
      '阳朔 漓江 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：张家界',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BC%A0%E5%AE%B6%E7%95%8C',
        kind: 'other',
        note: '细节见张家界短线',
      },
      {
        title: 'Wikivoyage：黄果树',
        url: 'https://zh.wikivoyage.org/wiki/%E9%BB%84%E6%9E%9C%E6%A0%91',
        kind: 'other',
        note: '细节见黄果树短线',
      },
    ],
    stops: [
      {
        id: 'xqg-guiyang-buffer',
        name: '贵阳（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 26.647,
        lng: 106.63,
        summary: '张家界与黄果树之间的可选高铁停点；甲秀楼外观或酒店空白日。',
        tips: '可删直达安顺；勿塞黔东南长线。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
      },
    ],
  },

  // ── 4. 陕晋豫 ───────────────────────────────────────────────
  {
    id: 'compose-shan-jin-yu',
    title: '陕晋豫 · 西安平遥洛阳',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huabei-shanxi-pingyao-deep',
      'leg-xian-terracotta',
      'huazhong-luoyang-kaifeng',
    ],
    glue: [
      '平遥→西安高铁约2–3小时；段间留空白，勿硬加华山。兵马俑早场后回市区歇脚。',
      '西安→洛阳高铁约1.5–2小时；龙门石窟观光车减步，少林寺可删。段末郑州/洛阳/西安飞回北京。',
    ],
    transport:
      '北京高铁至平遥 → 西安兵马俑短线 → 洛阳开封短线；段末洛阳/西安/郑州飞回北京。高铁换住，不硬晋陕豫自驾环。',
    budgetLabel: '对照月预算约2万（高铁+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
    summary:
      '长线组合卡：嵌入平遥古城、西安兵马俑、洛阳开封三条短线；中间只写高铁衔接。景点正文见各短线。华山与少林寺默认可删。',
    introduction:
      '陕晋豫历史走廊：晋商古城 → 秦俑 → 河洛石窟。本卡嵌入三条短线，此处只管 glue 与可删段。\n\n景点细节只在各短线维护；华山整段可删，西安城墙+兵马俑仍成立。',
    whyFast: '可只订其中一条短线；走廊可删平遥或洛阳，只留西安也成立。',
    notices: [
      '平遥古城石板防滑；城墙电瓶车优先。',
      '兵马俑须预约早场；华山缆车默认可删。',
      '龙门石窟台阶量力；少林寺远，可整段删。',
      '任一段不适即高铁回京休整。',
    ],
    researchKeywords: [
      '陕晋豫 慢游 父母',
      '平遥 西安 高铁',
      '洛阳 龙门石窟 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：西安',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%89',
        kind: 'other',
        note: '细节见西安短线',
      },
      {
        title: 'Wikivoyage：平遥',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B9%B3%E9%81%A5',
        kind: 'other',
        note: '细节见平遥短线',
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
        id: 'sjy-taiyuan-buffer',
        name: '太原（可选中转缓冲）',
        days: 1,
        pace: 'fast',
        lat: 37.87,
        lng: 112.55,
        summary: '平遥与西安之间的可选高铁停点；晋祠外观或酒店空白日。',
        tips: '可删直达西安；勿塞额外日驾。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
      },
    ],
  },

  // ── 5. 东北浅环 · 哈长沈连 ─────────────────────────────────
  {
    id: 'compose-dongbei-loop',
    title: '东北浅环 · 哈长沈连',
    region: 'dongbei',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'dongbei-heilongjiang-harbin-summer',
      'dongbei-jilin-changchun',
      'dongbei-liaoning-shenyang',
      'dongbei-dalian-summer',
    ],
    glue: [
      '哈尔滨→长春高铁约1–1.5小时；段间留空白，勿与冰雪线混排。夏日舒适，冬寒走独立雪乡/冰雪产品。',
      '长春→沈阳高铁约1–1.5小时；沈阳→大连高铁约1.5–2小时。段末大连或沈阳飞回北京；不硬环渤海湾自驾。',
    ],
    transport:
      '北京高铁至哈尔滨 → 长春 → 沈阳 → 大连；段末大连/沈阳飞回北京。高铁串珠，单日只换一城。',
    budgetLabel: '对照月预算约2万（高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saint_Sophia_Cathedral_in_Harbin.jpg/1280px-Saint_Sophia_Cathedral_in_Harbin.jpg',
    summary:
      '长线组合卡：嵌入哈尔滨、长春、沈阳、大连四条夏线短线；中间只写高铁衔接。景点正文见各短线。不排雪乡与长白山硬线。',
    introduction:
      '东北夏日浅环：索菲亚 → 长影 → 沈阳故宫 → 大连滨海。本卡嵌入四条短线，此处只管 glue 与 honest 车程。\n\n景点细节只在各短线维护；任一段可删，只留哈尔滨+大连也成立。',
    whyFast: '可只订其中一条短线；走廊可删长春或沈阳，只留哈连也成立。',
    notices: [
      '一日只换一城；高铁优先二等座靠窗/过道便于起身。',
      '江边/海边风大备外套；勿与冬季冰雪线同趟硬拼。',
      '大连滨海栈道早晚走，正午防晒。',
      '任一段不适即高铁回京休整。',
    ],
    researchKeywords: [
      '东北 浅环 慢游 父母',
      '哈长沈连 高铁',
      '大连 滨海 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：哈尔滨',
        url: 'https://zh.wikivoyage.org/wiki/%E5%93%88%E5%B0%94%E6%BB%A8',
        kind: 'other',
        note: '细节见哈尔滨短线',
      },
      {
        title: 'Wikivoyage：大连',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%A7%E8%BF%9E',
        kind: 'other',
        note: '细节见大连短线',
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
        id: 'dbl-shenyang-buffer',
        name: '沈阳（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 41.805,
        lng: 123.431,
        summary: '长春与大连之间的可选停点；故宫外观或酒店空白日即可。',
        tips: '可删直达大连；勿塞本溪千山硬线。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saint_Sophia_Cathedral_in_Harbin.jpg/1280px-Saint_Sophia_Cathedral_in_Harbin.jpg',
      },
    ],
  },

  // ── 6. 内蒙古草原线 ─────────────────────────────────────────
  {
    id: 'compose-neimeng-grassland',
    title: '内蒙古草原线 · 呼市阿尔山呼伦贝尔',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huabei-neimeng-hohhot',
      'huabei-neimeng-aershan',
      'huabei-neimeng-hulunbuir',
    ],
    glue: [
      '呼和浩特→阿尔山火车/飞机约4–6小时（或包车分段，单日≤5小时）；段间留空白，勿硬一日贯通。',
      '阿尔山→呼伦贝尔（海拉尔）车/铁约4–5小时；草原风大备外套，骑马短段即可。段末海拉尔/呼和浩特飞回北京。',
    ],
    transport:
      '北京飞呼和浩特进 → 呼市草原短线 → 阿尔山森林公园短线 → 呼伦贝尔草原短线；段末海拉尔/呼和浩特飞回北京。飞/铁换住，不硬草原自驾环。',
    budgetLabel: '对照月预算约2万（机票+包车/火车+住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
    summary:
      '长线组合卡：嵌入呼和浩特、阿尔山、呼伦贝尔三条草原短线；中间只写飞/铁/车衔接。景点正文见各短线。不排越野穿越与夜赶草原。',
    introduction:
      '内蒙古草原走廊：希拉穆仁/大召 → 阿尔山天池 → 呼伦贝尔牧区。本卡嵌入三条短线，此处只管 glue 与 honest 车程。\n\n景点细节只在各短线维护；阿尔山或呼伦贝尔任一可删。',
    whyFast: '可只订其中一条短线；走廊可删阿尔山，只留呼市+呼伦贝尔也成立。',
    notices: [
      '草原紫外线强，备防晒与薄羽绒；风大备外套。',
      '骑马短段即可；勿越野穿越与夜赶。',
      '阿尔山海拔抬升须评估；不适下撤呼和浩特。',
      '任一段不适即飞回北京休整。',
    ],
    researchKeywords: [
      '内蒙古 草原 慢游 父母',
      '阿尔山 呼伦贝尔 衔接',
      '呼和浩特 草原 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：呼和浩特',
        url: 'https://zh.wikivoyage.org/wiki/%E5%91%BC%E5%92%8C%E6%B5%A9%E7%89%B9',
        kind: 'other',
        note: '细节见呼市短线',
      },
      {
        title: 'Wikivoyage：呼伦贝尔',
        url: 'https://zh.wikivoyage.org/wiki/%E5%91%BC%E4%BC%A6%E8%B4%9D%E5%B0%94',
        kind: 'other',
        note: '细节见呼伦贝尔短线',
      },
    ],
    stops: [
      {
        id: 'nmg-ulangab-buffer',
        name: '乌兰浩特/中转缓冲（可选）',
        days: 1,
        pace: 'slow',
        lat: 46.076,
        lng: 122.064,
        summary: '呼市与阿尔山之间的可选停点；酒店空白日恢复车程疲劳。',
        tips: '可删直达阿尔山；勿硬夜赶。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
      },
    ],
  },

  // ── 7. 海南环岛浅 ───────────────────────────────────────────
  {
    id: 'compose-hainan-island-shallow',
    title: '海南环岛浅 · 海口西线三亚',
    region: 'huanan',
    seasons: ['winter', 'spring'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huanan-hainan-haikou',
      'leg-hainan-west-shallow',
      'leg-sanya-beach',
    ],
    glue: [
      '海口→西线高铁/包车约2–3小时至儋州；段间留空白，勿环岛特种兵。紫外线全年强，午休强制。',
      '西线→三亚高铁/包车约2–3小时；抵三亚留适应期再加大活动量。段末三亚或海口飞回北京。',
    ],
    transport:
      '北京飞海口进 → 海口骑楼短线 → 西线儋州浅段 → 三亚海湾浅段；段末三亚/海口飞回北京。飞/高铁换住，不硬全岛自驾环。',
    budgetLabel: '对照月预算约2万（机票+环岛交通+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
    summary:
      '长线组合卡：嵌入海口骑楼、西线儋州、三亚海湾三条短线；中间只写飞/高铁衔接。景点正文见各短线。棋子湾与南山默认可删。',
    introduction:
      '海南浅环：骑楼省会 → 西线儋州 → 三亚海湾。本卡嵌入三条短线，此处只管 glue 与 honest 车程。\n\n景点细节只在各短线维护；西线或三亚任一可删，只留海口+三亚也成立。更长慢住见独立西线/三亚产品。',
    whyFast: '可只订其中一条短线；走廊可删西线整段，海口+三亚飞联也成立。',
    notices: [
      '落地留适应期；南北温差大，备薄外套。',
      '紫外线强，10:00前或16:00后海边活动；台风预警关注停航。',
      '海鲜少生冷；棋子湾无把握可删。',
      '任一段不适即飞回北京休整。',
    ],
    researchKeywords: [
      '海南 环岛 浅游 父母',
      '海口 三亚 高铁',
      '儋州 西线 慢住',
    ],
    sources: [
      {
        title: 'Wikivoyage：海口',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B5%B7%E5%8F%A3',
        kind: 'other',
        note: '细节见海口短线',
      },
      {
        title: 'Wikivoyage：三亚',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%89%E4%BA%9A',
        kind: 'other',
        note: '细节见三亚浅段',
      },
    ],
    stops: [
      {
        id: 'hn-qionghai-buffer',
        name: '琼海/东线（可选中转缓冲）',
        days: 1,
        pace: 'slow',
        lat: 19.246,
        lng: 110.466,
        summary: '西线与三亚之间的可选高铁停点；博鳌外围平路或酒店空白日。',
        tips: '可删直达三亚；勿塞潜水主线。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
      },
    ],
  },

  // ── 8. 京津冀晋 ─────────────────────────────────────────────
  {
    id: 'compose-jingjinji-jin',
    title: '京津冀晋 · 京北戴河平遥',
    region: 'huabei',
    seasons: ['spring', 'summer', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huabei-beijing-city-slow',
      'huabei-hebei-beidaihe',
      'huabei-shanxi-pingyao-deep',
    ],
    glue: [
      '北京市区休整后高铁至北戴河约2–3小时；段间留空白，勿与慕田峪同日连轴。海边早晚走，正午防晒。',
      '北戴河→平遥须回京缓冲1–2晚（高铁约4–5小时经北京换乘，勿硬一日达）。回京歇脚后再赴平遥，段末太原/北京飞回。',
    ],
    transport:
      '本市颐和园慢游 → 高铁北戴河 → 回京缓冲 → 高铁平遥古城；段末太原/北京返家。高铁换住，不硬晋冀自驾环。',
    budgetLabel: '对照月预算约1.5–2万（高铁+电梯酒店；双人；含回京缓冲）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
    summary:
      '长线组合卡：嵌入北京市区、北戴河、平遥三条短线；北戴河与平遥之间须回京缓冲。景点正文见各短线。不硬一日贯通冀晋。',
    introduction:
      '京津冀晋走廊：颐和园休整 → 北戴河滨海 → 回京缓冲 → 平遥古城。本卡嵌入三条短线，此处只管 glue 与 honest 车程。\n\n景点细节只在各短线维护；北戴河或平遥任一可删。赴平遥前回京缓冲是爸妈友好设计，勿硬省。',
    whyFast: '可只订其中一条短线；走廊可删北戴河或平遥，只留京郊休整也成立。',
    notices: [
      '北戴河与平遥之间须回京缓冲；勿硬一日达。',
      '颐和园优先电瓶车与游船；万寿山硬爬可删。',
      '平遥古城石板防滑；城墙电瓶车优先。',
      '任一段不适即回京休整。',
    ],
    researchKeywords: [
      '京津冀晋 慢游 父母',
      '北戴河 平遥 高铁',
      '颐和园 电瓶车 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：北京',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8C%97%E4%BA%AC',
        kind: 'other',
        note: '细节见北京市区短线',
      },
      {
        title: 'Wikivoyage：平遥',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B9%B3%E9%81%A5',
        kind: 'other',
        note: '细节见平遥短线',
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
        id: 'jjj-beijing-buffer',
        name: '北京（回京缓冲）',
        days: 2,
        pace: 'slow',
        lat: 39.904,
        lng: 116.407,
        summary: '北戴河归来后在家或近郊酒店歇脚1–2晚，再赴平遥。整理行李、熟悉药店。',
        tips: '勿硬省缓冲；高铁票预留换乘余量。颐和园可再浅逛半日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG/1280px-%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG',
      },
    ],
  },

  // ── 9. 云贵川浅环 ───────────────────────────────────────────
  {
    id: 'compose-yun-gui-chuan-shallow',
    title: '云贵川浅环 · 成都黄果树昆明',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'leg-chengdu-adapt',
      'xinan-guizhou-huangguoshu',
      'xinan-yunnan-kunming-city',
    ],
    glue: [
      '成都→贵阳/安顺飞机或高铁约3–4小时；段间留空白，平原适应后再南下。不适下撤回成都（华西锚）。',
      '黄果树→昆明高铁约2–3小时；昆明海拔约1900m，心肺一般者友好。段末昆明飞回北京。',
    ],
    transport:
      '北京飞成都进 → 成都适应短线 → 黄果树瀑布短线 → 昆明城区短线；段末昆明飞回北京。飞/高铁换住，不硬云贵川自驾环。',
    budgetLabel: '对照月预算约2万（机票+高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
    summary:
      '长线组合卡：嵌入成都适应、黄果树、昆明三条短线；中间只写飞/高铁衔接。景点正文见各短线。不排川西高原与黔东南硬线。',
    introduction:
      '云贵川浅环：成都平原锚 → 黄果树 → 春城昆明。本卡嵌入三条短线，此处只管 glue 与 honest 车程。\n\n景点细节只在各短线维护；黄果树或昆明任一可删，只留成都适应也成立。',
    whyFast: '可只订其中一条短线；走廊可删黄果树，成都+昆明飞联也成立。',
    notices: [
      '成都作医疗下撤锚；不适即返平原静养。',
      '黄果树水雾大，备雨衣与防滑鞋。',
      '昆明紫外线强；翠湖浅逛即可，勿硬排石林一日。',
      '任一段不适即飞回北京休整。',
    ],
    researchKeywords: [
      '云贵川 浅环 慢游 父母',
      '成都 黄果树 高铁',
      '昆明 城区 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：成都',
        url: 'https://zh.wikivoyage.org/wiki/%E6%88%90%E9%83%BD',
        kind: 'other',
        note: '细节见成都适应短线',
      },
      {
        title: 'Wikivoyage：昆明',
        url: 'https://zh.wikivoyage.org/wiki/%E6%98%86%E6%98%8E',
        kind: 'other',
        note: '细节见昆明短线',
      },
    ],
    stops: [
      {
        id: 'ygc-guiyang-buffer',
        name: '贵阳（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 26.647,
        lng: 106.63,
        summary: '成都与黄果树之间的可选停点；甲秀楼外观或酒店空白日。',
        tips: '可删直达安顺；勿塞黔东南长线。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
      },
    ],
  },

  // ── 10. 川渝 ────────────────────────────────────────────────
  {
    id: 'compose-chuanyu-chengdu-chongqing',
    title: '川渝 · 成都重庆',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'winter'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: ['leg-chengdu-adapt', 'xinan-chongqing-slow'],
    glue: [
      '成都→重庆高铁/动车约1.5–2小时；段间留空白，平原适应后再东行。不适下撤回成都（华西锚）。',
      '重庆坡多备防滑鞋；洪崖洞/索道量力，武隆天坑可删。段末重庆或成都飞回北京。',
    ],
    transport:
      '北京飞成都进 → 成都适应短线 → 重庆慢游短线；段末重庆/成都飞回北京。飞/高铁换住，不硬川渝自驾环。',
    budgetLabel: '对照月预算约2万（机票+高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Chongqing.jpg/1280px-Chongqing.jpg',
    summary:
      '长线组合卡：嵌入成都适应、重庆慢游两条短线；中间只写高铁衔接。景点正文见各短线。不排武隆与三峡硬线。',
    introduction:
      '川渝双城：成都平原锚 → 山城重庆。本卡嵌入两条短线，此处只管 glue 与 honest 车程。\n\n景点细节只在各短线维护；重庆整段可删，只留成都适应也成立。',
    whyFast: '可只订其中一条短线；走廊可删武隆/索道，只留成都+重庆城区也成立。',
    notices: [
      '成都作医疗下撤锚；不适即返平原静养。',
      '重庆坡多台阶量力；索道恐高可删。',
      '火锅改清汤；少喝酒。',
      '任一段不适即飞回北京休整。',
    ],
    researchKeywords: [
      '川渝 慢游 父母',
      '成都 重庆 高铁',
      '重庆 洪崖洞 适老',
    ],
    sources: [
      {
        title: 'Wikivoyage：成都',
        url: 'https://zh.wikivoyage.org/wiki/%E6%88%90%E9%83%BD',
        kind: 'other',
        note: '细节见成都适应短线',
      },
      {
        title: 'Wikivoyage：重庆',
        url: 'https://zh.wikivoyage.org/wiki/%E9%87%8D%E5%BA%86',
        kind: 'other',
        note: '细节见重庆短线',
      },
      {
        title: '中国铁路客户服务中心',
        url: 'https://www.12306.cn/',
        kind: 'official',
        note: '成渝高铁时刻以 12306 为准',
      },
    ],
    stops: [
      {
        id: 'cy-chengdu-buffer',
        name: '成都（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 30.659,
        lng: 104.065,
        summary: '赴重庆前的空白日；人民公园喝茶或熟悉药店即可。',
        tips: '勿硬省缓冲；高铁票预留换乘余量。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
      },
    ],
  },

  // ── 11. 湘西名景 ────────────────────────────────────────────
  {
    id: 'compose-xiangxi-changsha-fenghuang',
    title: '湘西名景 · 长沙张家界凤凰',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor', 'famous-scenic'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huazhong-hunan-changsha',
      'huazhong-zhangjiajie',
      'huazhong-hunan-fenghuang',
    ],
    glue: [
      '长沙→张家界高铁约2.5–3.5小时；段间留空白，勿硬加天门山。森林公园观光车为主，台阶量力。',
      '张家界→凤凰古城包车/高铁转约3–4小时；凤凰石板路防滑，沱江两岸慢走即可。段末长沙/张家界飞回北京。',
    ],
    transport:
      '北京飞长沙进 → 长沙城区短线 → 张家界名景短线 → 凤凰古城短线；段末长沙/张家界飞回北京。飞/高铁换住，不硬湘西自驾环。',
    budgetLabel: '对照月预算约2万（机票+高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hunan_Fenghuang_County_ancient_town.jpg/1280px-Hunan_Fenghuang_County_ancient_town.jpg',
    summary:
      '长线组合卡：嵌入长沙、张家界、凤凰三条短线；中间只写飞/高铁衔接。景点正文见各短线。天门山默认可删，不排湘西特种兵。',
    introduction:
      '湘西名景走廊：橘子洲 → 武陵源 → 凤凰古城。本卡嵌入三条短线，此处只管 glue 与 honest 车程。\n\n景点细节只在各短线维护；凤凰或张家界任一可删。',
    whyFast: '可只订其中一条短线；走廊可删凤凰，只留长沙+张家界也成立。',
    notices: [
      '张家界靠观光车，台阶量力；天门山索道恐高可删。',
      '凤凰古城石板防滑；沱江两岸慢走，勿夜赶。',
      '长沙岳麓山量力；橘子洲平路为主。',
      '任一段不适即飞回北京休整。',
    ],
    researchKeywords: [
      '湘西 慢游 父母',
      '长沙 张家界 高铁',
      '凤凰古城 适老',
    ],
    sources: [
      {
        title: 'Wikivoyage：长沙',
        url: 'https://zh.wikivoyage.org/wiki/%E9%95%BF%E6%B2%99',
        kind: 'other',
        note: '细节见长沙短线',
      },
      {
        title: 'Wikivoyage：凤凰',
        url: 'https://zh.wikivoyage.org/wiki/%E5%87%A4%E5%87%B0',
        kind: 'other',
        note: '细节见凤凰短线',
      },
    ],
    stops: [
      {
        id: 'xx-jishou-buffer',
        name: '吉首/张家界（段间缓冲）',
        days: 1,
        pace: 'slow',
        lat: 28.318,
        lng: 109.738,
        summary: '张家界与凤凰之间的可选停点；酒店空白日恢复车程疲劳。',
        tips: '可删直达凤凰；勿硬夜赶山路。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hunan_Fenghuang_County_ancient_town.jpg/1280px-Hunan_Fenghuang_County_ancient_town.jpg',
      },
    ],
  },

  // ── 12. 齐鲁泰青 ────────────────────────────────────────────
  {
    id: 'compose-lu-taishan-qingdao',
    title: '齐鲁泰青 · 泰山崂山青岛',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor', 'famous-scenic'],
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huabei-shandong-taishan',
      'leg-qingdao-laoshan',
      'leg-qingdao-coast',
    ],
    glue: [
      '泰山→青岛高铁约2–3小时；段间留空白，索道上下泰山，勿硬徒步登顶。段末青岛飞/高铁回北京。',
      '崂山与青岛滨海可二选一加深；烟台威海另线，本廊不北延。台风预警期减少海边停留。',
    ],
    transport:
      '北京高铁至泰安 → 泰山名景短线 → 青岛崂山浅段 → 青岛滨海短线；段末青岛飞/高铁回北京。高铁换住，不硬胶东自驾环。',
    budgetLabel: '对照月预算约2万（高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
    summary:
      '长线组合卡：嵌入泰山、崂山、青岛滨海三条短线；中间只写高铁衔接。景点正文见各短线。索道上下，不硬徒步登顶。',
    introduction:
      '齐鲁名景走廊：泰山 → 崂山 → 青岛滨海。本卡嵌入三条短线，此处只管 glue 与 honest 车程。\n\n景点细节只在各短线维护；崂山或滨海任一可删，只留泰山+青岛也成立。',
    whyFast: '可只订其中一条短线；走廊可删崂山，只留泰山+青岛滨海也成立。',
    notices: [
      '泰山索道上下，台阶量力；硬爬登顶可删。',
      '青岛栈道早晚走，正午防晒；海鲜少生冷。',
      '崂山台阶多，观光车减步；疲劳可整段删。',
      '任一段不适即高铁回京休整。',
    ],
    researchKeywords: [
      '齐鲁 泰青 慢游 父母',
      '泰山 青岛 高铁',
      '崂山 适老 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：泰山',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B3%B0%E5%B1%B1',
        kind: 'other',
        note: '细节见泰山短线',
      },
      {
        title: 'Wikivoyage：青岛',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E5%B2%9B',
        kind: 'other',
        note: '细节见青岛短线',
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
        id: 'ltq-jinan-buffer',
        name: '济南（可选中转缓冲）',
        days: 1,
        pace: 'fast',
        lat: 36.651,
        lng: 117.12,
        summary: '泰山与青岛之间的可选高铁停点；趵突泉外观或酒店空白日。',
        tips: '可删直达青岛；勿塞额外景点。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
      },
    ],
  },
];
