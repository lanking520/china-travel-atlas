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
    id: 'xibei-xinjiang-south',
    title: '南疆 · 库车喀什人文走廊',
    region: 'xibei',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约2–3周',
    transport:
      '飞库车或乌市转南疆；库车→阿克苏→喀什分段，单日车程≤5小时。边境县需提前了解通行政策。结束后喀什或乌市飞回北京。',
    budgetLabel: '对照月预算约2万（含机票与包车/租车）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
    summary:
      '南疆古城与峡谷慢看：库车天山神秘大峡谷、阿克苏休整，喀什以艾提尕尔/老城/巴扎两日为主（勿空垫到四五天）。夏酷冬冷，春秋更稳；不赶环塔。',
    whyFast: '大峡谷观光车半日；喀什两日够看，香妃墓可半日或删。',
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
    stops: [
      {
        id: 'kuqa',
        name: '库车',
        days: 3,
        pace: 'slow',
        lat: 41.718,
        lng: 82.962,
        summary: '天山神秘大峡谷观光车为主；市区休整补水。',
        tips: '夏季极热，早晚出游；防晒补水。峡谷内少爬台阶。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuqa.jpg/1280px-Kuqa.jpg',
      },
      {
        id: 'aksu-rest',
        name: '阿克苏（缓冲）',
        days: 2,
        pace: 'slow',
        lat: 41.169,
        lng: 80.264,
        summary: '长车程缓冲站，电梯酒店休息，不硬加点。',
        tips: '水果丰富注意清洗；留空白日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Aksu_City.jpg/1280px-Aksu_City.jpg',
      },
      {
        id: 'kashi-old',
        name: '喀什古城',
        days: 2,
        pace: 'slow',
        lat: 39.468,
        lng: 75.994,
        summary:
          '艾提尕尔广场外观、老城选段巷弄与东门一带巴扎；两日够看，勿硬排五天空转。细节见独立「喀什」短线。',
        tips:
          '尊重宗教习俗与安检；巷弄台阶多量力。正午歇酒店，早晚出门。返程机票提前定。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
      },
    ],
  },
  {
    id: 'xibei-xinjiang-kashi',
    title: '喀什 · 老城与帕米尔浅尝',
    region: 'xibei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
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
