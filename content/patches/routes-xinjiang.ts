import type { Route } from '../types';

/**
 * 新疆多线深挖（同省多 primary）。
 * 北疆经典线仍在 routes-northwest.ts 的 xibei-xinjiang-north（已收紧，少与伊犁线重叠）。
 */
export const patchRoutes: Route[] = [
  {
    id: 'xibei-xinjiang-yili',
    title: '伊犁 · 河谷草原慢住',
    region: 'xibei',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约10–14天',
    transport:
      '飞乌鲁木齐转伊宁，或乌市取车西行；河谷内短途自驾/包车，单日≤4小时。结束后经乌市飞回北京。',
    budgetLabel: '对照月预算约1.5–2万（机票+租车/包车+住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    summary:
      '以伊宁为基地，赛里木环湖、那拉提/喀拉峻分段看草原，不赶独库全程。适合想慢住河谷、少走北疆长车程的父母。',
    whyFast: '赛里木半日环湖观景台；那拉提可选索道，恐高只看山下。',
    researchKeywords: [
      '伊犁 自驾 攻略',
      '那拉提 喀拉峻 慢游',
      '赛里木湖 伊宁 两日',
    ],
    sources: [
      {
        title: 'Wikivoyage：伊宁',
        url: 'https://zh.wikivoyage.org/wiki/%E4%BC%8A%E5%AE%81',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
      {
        title: '乌鲁木齐本地宝：赛里木湖预约',
        url: 'http://wlmq.bendibao.com/news/2023831/57403.shtm',
        kind: 'other',
        note: '票务以当日公告为准',
      },
    ],
    stops: [
      {
        id: 'yining-base',
        name: '伊宁（河谷基地）',
        days: 3,
        pace: 'slow',
        lat: 43.917,
        lng: 81.324,
        summary: '电梯酒店休整，吃面喝奶茶，作为赛里木与草原的往返基地。',
        tips: '优先近市中心电梯房；昼夜温差大备薄外套。留空白日，不连轴转。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'sayram-yili',
        name: '赛里木湖',
        days: 2,
        pace: 'slow',
        lat: 44.6,
        lng: 81.15,
        summary: '从伊宁往返环湖，多停观景台，不必徒步。',
        tips: '公众号提前订票；风大备外套；海拔约2070米，慢走即可。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
      {
        id: 'nalati',
        name: '那拉提草原',
        days: 2,
        pace: 'slow',
        lat: 43.25,
        lng: 84.0,
        summary: '空中草原可坐索道；膝盖不适者山下观光车浅看。',
        tips: '旺季预约交通车；一日足够，勿安排连赶喀拉峻。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
      {
        id: 'kalajun',
        name: '喀拉峻（可选）',
        days: 2,
        pace: 'slow',
        lat: 42.95,
        lng: 82.4,
        summary: '与那拉提二选一加深也可；累了直接跳过回伊宁。',
        tips: '景交为主，少步行；雨天草地滑，穿防滑鞋。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
    ],
  },
  {
    id: 'leg-kuqa-canyon',
    title: '库车 · 天山神秘大峡谷',
    region: 'xibei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约2–3天',
    transport:
      '飞库车或乌市转库车；市区包车/打车往返大峡谷。结束后可西行接南疆走廊，或经乌市飞回北京。',
    budgetLabel: '本趟约2000–4500元（机票浮动大）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuqa.jpg/1280px-Kuqa.jpg',
    summary:
      '独立短线：天山神秘大峡谷以观光车半日为主，库车市区电梯酒店休整补水。不接环塔；可单飞往返，也可作为南疆长线第一段。',
    whyFast: '峡谷硬爬与夜路可整段删；一日观光车足够。',
    researchKeywords: [
      '库车 天山神秘大峡谷',
      '库车 两日 攻略',
      '库车 老年 旅行',
    ],
    sources: [
      {
        title: 'Wikivoyage：库车',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BA%93%E8%BD%A6',
        kind: 'other',
        note: '峡谷与交通参考；开放以现场为准',
      },
    ],
    stops: [
      {
        id: 'kuqa',
        name: '库车市区',
        days: 1.5,
        pace: 'slow',
        lat: 41.718,
        lng: 82.962,
        summary: '电梯酒店安顿；适应干燥与温差，傍晚平地散步即可。',
        tips: '夏季极热，备防晒补水；勿抵达当日赶峡谷。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuqa.jpg/1280px-Kuqa.jpg',
      },
      {
        id: 'kuqa-canyon',
        name: '天山神秘大峡谷',
        days: 1,
        pace: 'slow',
        lat: 42.13,
        lng: 83.05,
        summary: '观光车串联红层峡谷观景；以车览+短停为主，少爬台阶。',
        tips: '早晚出游避正午；峡谷内量力，不适即返市区。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuqa.jpg/1280px-Kuqa.jpg',
      },
      {
        id: 'kuqa-buffer',
        name: '库车空白/返程缓冲',
        days: 0.5,
        pace: 'slow',
        lat: 41.718,
        lng: 82.962,
        summary: '休息或飞乌/京；若接南疆长线，次日西行阿克苏方向。',
        tips: '西行单日车程预留≤5小时；疲劳则多留一日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuqa.jpg/1280px-Kuqa.jpg',
      },
    ],
  },
  {
    id: 'compose-nanjiang-kuqa-kashi',
    title: '南疆 · 库车喀什人文走廊',
    region: 'xibei',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    // 长线=短线串：正文在 leg；阿克苏仅 glue 过夜
    legIds: ['leg-kuqa-canyon', 'xibei-xinjiang-kashi'],
    glue: [
      '库车→阿克苏单日车程≤5小时；阿克苏电梯酒店缓冲过夜（1–2晚，不硬加点），再≤5小时到喀什。两腿之间可留空白休息日。不环塔。',
    ],
    transport:
      '飞库车进、喀什或乌市出（或对调）。走廊按短线顺序：库车峡谷短线 → 阿克苏缓冲过夜 → 喀什老城短线。单日车程≤5小时；边境通行政策出行前核实。',
    budgetLabel: '对照月预算约2万（含机票与包车/租车）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
    summary:
      '长线组合卡：嵌入「库车·天山神秘大峡谷」与「喀什·老城与帕米尔」两条短线，中间阿克苏只作过夜衔接。景点正文见各短线，此处不复述。夏酷冬冷，春秋更稳。',
    whyFast: '可只订库车或只订喀什短线；走廊整段可删帕米尔与峡谷硬爬。',
    researchKeywords: [
      '南疆 自驾 攻略',
      '库车 喀什 路线',
      '喀什古城 慢游',
    ],
    sources: [
      {
        title: 'Wikivoyage：喀什',
        url: 'https://zh.wikivoyage.org/wiki/%E5%96%80%E4%BB%80',
        kind: 'other',
        note: 'CC 署名，已改写；证件与气候以官方为准',
      },
      {
        title: 'Wikivoyage：库车',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BA%93%E8%BD%A6',
        kind: 'other',
        note: '峡谷与交通参考',
      },
    ],
    // 仅保留衔接枢纽；库车/喀什景点文案在各自 leg
    stops: [
      {
        id: 'aksu-rest',
        name: '阿克苏（走廊缓冲过夜）',
        days: 1.5,
        pace: 'slow',
        lat: 41.169,
        lng: 80.264,
        summary: '两短线之间的电梯酒店缓冲；休息补水，不硬加景点。',
        tips: '水果洗净；疲劳多留一晚。西行/东行均单日≤5小时。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Aksu_City.jpg/1280px-Aksu_City.jpg',
      },
    ],
  },
  {
    id: 'xibei-xinjiang-kashi',
    title: '喀什 · 老城与帕米尔浅尝',
    region: 'xibei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约4–6天',
    transport:
      '直飞或经乌市转喀什；市区打车/包车。白沙湖/卡拉库里可选包车一日（高原路段量力，默认可删）。结束后飞回北京。',
    budgetLabel: '本趟约3500–7000元（机票浮动大；含可选帕米尔日）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
    summary:
      '丝路西端气质：艾提尕尔、高台民居外观、巴扎与抓饭酸奶；帕米尔观景台一日可选。市区约三到四天够充实，不垫空日；不挑战独库或环塔。',
    whyFast: '帕米尔整段可删；香妃墓可改半日或跳过。',
    researchKeywords: [
      '喀什 老城 慢游',
      '艾提尕尔 高台民居',
      '白沙湖 卡拉库里 一日',
      '喀什 老年 旅行',
    ],
    sources: [
      {
        title: 'Wikivoyage：喀什',
        url: 'https://zh.wikivoyage.org/wiki/%E5%96%80%E4%BB%80',
        kind: 'other',
        note: '高原与边境通行以当地公告为准',
      },
    ],
    stops: [
      {
        id: 'kashi-stay',
        name: '喀什市区慢住',
        days: 1.5,
        pace: 'slow',
        lat: 39.468,
        lng: 75.994,
        summary: '电梯酒店安顿、适应时差与干燥；傍晚老城外围平地散步即可。',
        tips: '备防晒、润唇膏与常用药；勿抵达当日赶景。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
      },
      {
        id: 'kashi-idkah',
        name: '艾提尕尔与老城选段',
        days: 1.5,
        pace: 'slow',
        lat: 39.472,
        lng: 75.984,
        summary:
          '艾提尕尔清真寺广场外观（礼仪与开放以现场为准）、高台民居外观远眺、选一两段石巷慢走。',
        tips: '尊重宗教场所；台阶多随时歇。人多即撤，不钻满每条巷。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Id_Kah_Mosque_Kashgar.jpg/1280px-Id_Kah_Mosque_Kashgar.jpg',
      },
      {
        id: 'kashi-bazaar-xiangfei',
        name: '巴扎与香妃墓（半日级）',
        days: 1,
        pace: 'slow',
        lat: 39.49,
        lng: 76.02,
        summary:
          '东门/中西亚巴扎一带浅逛买果干；香妃墓（阿帕克霍加麻扎）半日外观+院落即可。',
        tips: '巴扎防暑补水，少久站；香妃墓体力紧可整段删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
      },
      {
        id: 'baisha-lake',
        name: '白沙湖/卡拉库里（可选）',
        days: 1,
        pace: 'fast',
        lat: 38.6,
        lng: 75.0,
        summary: '包车观景台看慕士塔格与湖景即返，不上长徒步；高原不适史默认删除。',
        tips: '海拔明显升高：头痛呕吐立即下撤。通行证与天气出行前核实。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mt_Kongur_Lake_Karakul_Xinjiang_China.jpg/1280px-Mt_Kongur_Lake_Karakul_Xinjiang_China.jpg',
      },
    ],
  },
  {
    id: 'xibei-xinjiang-turpan',
    title: '吐鲁番 · 火焰山葡萄沟短住',
    region: 'xibei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3–5天',
    transport:
      '高铁/飞机经乌市到吐鲁番；市内包车或租车。可接北疆或南疆中转。结束后经乌市回北京。',
    budgetLabel: '本趟约2000–4500元',
    coverImage:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200',
    summary:
      '暑热避夏季正午：坎儿井、葡萄沟、交河故城量力参观，住空调电梯房。适合南北疆之间的休整短住。',
    whyFast: '坎儿井+葡萄沟各半天足够。',
    researchKeywords: ['吐鲁番 两日 攻略', '葡萄沟 交河故城', '吐鲁番 避暑 空调'],
    sources: [
      {
        title: 'Wikivoyage：吐鲁番',
        url: 'https://zh.wikivoyage.org/wiki/%E5%90%90%E9%B2%81%E7%95%AA',
        kind: 'other',
        note: '酷暑与景点开放以现场为准',
      },
    ],
    stops: [
      {
        id: 'turpan-city',
        name: '吐鲁番市区',
        days: 2,
        pace: 'slow',
        lat: 42.951,
        lng: 89.19,
        summary: '空调酒店为家，早晚出游。',
        tips: '夏季气温极高，10–16点少户外；多补水。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
      {
        id: 'grape-valley',
        name: '葡萄沟 / 坎儿井',
        days: 1,
        pace: 'slow',
        lat: 42.98,
        lng: 89.45,
        summary: '荫凉廊道与地下水利遗迹，平路为主。',
        tips: '交河故城台地暴晒、步道长，累可只远观。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
    ],
  },
  {
    id: 'xibei-xinjiang-duku',
    title: '独库公路 · 季节窗浅尝',
    region: 'xibei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约5–7天（仅开放季）',
    transport:
      '仅夏末秋初公路开放窗口；独山子或库车进出，分段住。气象与塌方风险高，不适者改乌奎高速绕行。结束后乌市飞回北京。',
    budgetLabel: '本趟约3500–7000元（含租车）',
    coverImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    summary:
      '把独库当「天气好才走」的加餐，不是必选项。父母行程以观景台短停、早过山、备绕行方案为主。',
    whyFast: '只走精华观景段，不硬开全程夜间山路。',
    researchKeywords: ['独库公路 开放时间', '独库 自驾 注意事项', '独库 绕行 乌奎'],
    sources: [
      {
        title: '新疆交通信息以当地交警/文旅公告为准',
        url: 'https://www.xinjiang.gov.cn/',
        kind: 'official',
        note: '开放时段每年不同，出发前必查',
      },
    ],
    stops: [
      {
        id: 'dushanzi',
        name: '独山子（北口）',
        days: 1,
        pace: 'slow',
        lat: 44.328,
        lng: 84.883,
        summary: '确认路况、补给、过夜，次日早进山。',
        tips: '满油满水；下载离线地图；家属知情绕行方案。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'duku-view',
        name: '独库观景段',
        days: 2,
        pace: 'fast',
        lat: 43.5,
        lng: 84.2,
        summary: '精选观景台短停，中午前过风险路段。',
        tips: '恐高/晕车者可改包车或放弃此线。禁止夜间赶路。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
      {
        id: 'kuqa-south',
        name: '库车（南口休整）',
        days: 2,
        pace: 'slow',
        lat: 41.718,
        lng: 82.962,
        summary: '出山休整，可接南疆线或返回乌市。',
        tips: '检查车况；高原反应或疲劳则终止加餐段。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
    ],
  },
];
