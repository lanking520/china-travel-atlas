import type { Route } from '../types';

/** Patch: 新疆 / 青海 / 宁夏 — merge into content/routes.ts when ready */
export const patchRoutes: Route[] = [
  // ── 西北 · 北疆长线 ──────────────────────────────────────────
  {
    id: 'xibei-xinjiang-north',
    title: '北疆 · 赛里木喀纳斯租车',
    region: 'xibei',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约2–3周',
    transport:
      '飞乌鲁木齐取SUV，沿北线：赛里木→奎屯/克拉玛依缓冲→布尔津/喀纳斯；单日≤5小时。伊犁河谷请改走「伊犁·河谷草原慢住」专线，本线不深挖伊犁。结束后飞回北京。',
    budgetLabel: '对照月预算约2万（含租车+机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    summary:
      '北疆经典：赛里木环湖 + 喀纳斯森林。与伊犁专线拆开，避免一条线塞满南北口。干燥多补水，结束后飞回北京。',
    whyFast:
      '赛里木环湖半日至一日足够；喀纳斯观鱼台靠区间车，不必硬爬全程栈道。',
    researchKeywords: [
      '北疆 租车 自驾 退休',
      '赛里木湖 环湖 攻略',
      '喀纳斯 预约 区间车',
    ],
    sources: [
      {
        title: 'Wikivoyage：乌鲁木齐',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90',
        kind: 'other',
        note: 'CC 署名，已改写；进出疆枢纽与市内医疗参考',
      },
      {
        title: '乌鲁木齐本地宝：赛里木湖门票预约',
        url: 'http://wlmq.bendibao.com/news/2023831/57403.shtm',
        kind: 'other',
        note: '「赛里木湖旅游」公众号购票入口，以当日公告为准',
      },
      {
        title: '遇见喀纳斯 · 门票预约平台',
        url: 'https://www.yujiankanasi.com/',
        kind: 'official',
        note: '喀纳斯/禾木实名预约、刷证入园',
      },
      {
        title: '乌鲁木齐本地宝：喀纳斯预约入园提示',
        url: 'http://wlmq.bendibao.com/tour/2023928/57821.shtm',
        kind: 'other',
        note: '建议提前3天购票，旺季易满',
      },
    ],
    stops: [
      {
        id: 'urumqi-base',
        name: '乌鲁木齐（进出枢纽）',
        days: 2,
        pace: 'slow',
        lat: 43.825,
        lng: 87.617,
        summary:
          '落地休整、取还车、补物资。大巴扎浅逛即可，体力留给北疆公路。',
        tips:
          '地窝堡机场取车后先市区住一晚再西行。备润唇膏、防晒、薄羽绒（山区昼夜温差大）。近新疆维吾尔自治区人民医院选酒店。城南穆斯林区回避猪肉。结束后还车飞回北京。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'sayram-lake',
        name: '赛里木湖',
        days: 2,
        pace: 'slow',
        lat: 44.6,
        lng: 81.15,
        summary:
          '天山天湖，环湖公路观景台多。慢开、多停，不必硬走全程徒步。',
        tips:
          '微信「赛里木湖旅游」提前订门票/自驾服务费。环湖约90公里，放慢到大半天；风大备外套。湖面海拔约2070米，多数人可适应，仍别剧烈运动。自驾入园按人头计费，以现场公告为准。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
      {
        id: 'kuitun-buffer',
        name: '奎屯/克拉玛依（北线缓冲）',
        days: 2,
        pace: 'slow',
        lat: 44.427,
        lng: 84.903,
        summary:
          '赛里木与布尔津之间的公路缓冲，电梯酒店休整，不硬加点景区。',
        tips:
          '拆开长车程，每周至少1休息日。补给油水后北上布尔津。想看伊犁草原请改订伊犁专线。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'kanas',
        name: '喀纳斯（贾登峪/布尔津）',
        days: 4,
        pace: 'slow',
        lat: 48.705,
        lng: 87.182,
        summary:
          '湖光与图瓦村落。住贾登峪或布尔津，靠区间车进景区，观鱼台量力而行。',
        tips:
          '「遇见喀纳斯」小程序或「喀纳斯景区」公众号提前预约（建议≥3天）。景区内强制区间车，少步行。观鱼台时段限流、台阶多，累了远观即返。禾木可另排一日或跳过。7–9月旺，9月中后渐凉、人少。单日车程长时中途服务区必歇。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
    ],
  },

  // ── 青藏 · 青海湖 ──────────────────────────────────────────
  {
    id: 'qingzang-qinghai-lake',
    title: '西宁 · 青海湖环线慢游',
    region: 'qingzang',
    seasons: ['summer'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约1–2周',
    transport:
      '飞西宁曹家堡，市区适应后再包车环湖（优先于自驾）；二郎剑等景区限流须预约',
    budgetLabel: '对照月预算约1.2–2万（含机票与包车）',
    coverImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    summary:
      '西宁海拔约2260米，先适应2–3日再上青海湖（湖面约3200米）。环湖包车为主，二郎剑/黑马河分段看，不赶全日骑行。强日照与高反须重视，结束后飞回北京。',
    whyFast:
      '二郎剑观光车半日足够；茶卡盐湖可选一日快览，高原不适者直接跳过。',
    researchKeywords: [
      '西宁 高原适应 老人',
      '青海湖 环湖 包车',
      '青海湖 二郎剑 预约',
    ],
    sources: [
      {
        title: 'Wikivoyage：西宁',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%81',
        kind: 'other',
        note: 'CC 署名，已改写；进出藏门户与班车参考',
      },
      {
        title: 'Wikivoyage：青海湖',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E6%B5%B7%E6%B9%96',
        kind: 'other',
        note: '湖面海拔约3196米、环湖与包车建议',
      },
      {
        title: '去哪儿：青海湖景区票务说明',
        url: 'https://piao.qunar.com/ticket/detail_188945.html',
        kind: 'other',
        note: '60–70优惠、65+等政策以购票页为准',
      },
      {
        title: '新浪旅游：2026青海湖预约限流实测',
        url: 'https://travel.sina.cn/2026-07-23/detail-iniiusme9473811.d.html',
        kind: 'other',
        note: '二郎剑分时预约与「青海湖景区」公众号渠道参考',
      },
    ],
    stops: [
      {
        id: 'xining-adapt',
        name: '西宁（适应期）',
        days: 3,
        pace: 'slow',
        lat: 36.617,
        lng: 101.778,
        summary:
          '高原门户。抵达后少活动、多饮水，东关浅逛或博物馆吹空调，再安排环湖。',
        tips:
          '西宁约2260米：前2天勿剧烈运动、勿酗酒；动作慢、洋葱式穿衣。备血氧仪与便携氧气。选近青海省人民医院或红十字医院的电梯酒店。塔尔寺可适应后再去，台阶多则远观。感冒未愈勿上更高海拔。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
      {
        id: 'qinghai-lake-loop',
        name: '青海湖环线（二郎剑/黑马河）',
        days: 4,
        pace: 'slow',
        lat: 36.888,
        lng: 100.136,
        summary:
          '中国最大咸水湖。包车分段停观景台，二郎剑乘观光车，湖边短停即走。',
        tips:
          '湖面约3196–3260米，须在西宁适应后再去。旺季「青海湖景区」公众号提前分时预约，现场常无散票。紫外线极强：帽、墨镜、防晒、薄羽绒（湖风大）。心脏病/未控制高血压慎往；头痛呕吐加重立即下撤回西宁。环湖全长约360公里，老人行程拆2–3天，别一日硬环。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'chaka-optional',
        name: '茶卡盐湖（可选）',
        days: 1,
        pace: 'fast',
        lat: 36.78,
        lng: 99.08,
        summary: '镜面盐湖半日快览；高反或劳累直接跳过，不影响主线。',
        tips:
          '西宁再往西车程较长，包车当日往返较累。盐壳路面滑，穿防滑鞋、少走长距离。高原不适优先保证青海湖主线。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
  },

  // ── 西北 · 宁夏短途 ──────────────────────────────────────────
  {
    id: 'xibei-ningxia-3d',
    title: '银川 · 西夏陵与沙湖三日',
    region: 'xibei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3天2晚',
    transport:
      '北京飞银川河东机场，或高铁/动车至银川站；市内包车或打车串联景点',
    budgetLabel: '本趟约2500–4500元（含机票/高铁分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200',
    summary:
      '塞上短途：西夏陵博物馆+遗址观光车，沙湖或镇北堡二选一充实一天。春秋沙尘少、温度适宜，平地为主，当晚或次日返京。',
    whyFast:
      '西夏陵半日；沙湖游船或镇北堡影城半日，别两处硬塞同一上午。',
    researchKeywords: [
      '银川 三日 退休',
      '西夏陵 观光车 免票',
      '沙湖 镇北堡 怎么选',
    ],
    sources: [
      {
        title: 'Wikivoyage：银川',
        url: 'https://zh.wikivoyage.org/wiki/%E9%93%B6%E5%B7%9D',
        kind: 'other',
        note: 'CC 署名，已改写；交通与景点清单参考',
      },
      {
        title: '银川西夏区政府：西夏陵免票惠民政策',
        url: 'http://www.ycxixia.gov.cn/qyly/zxzx/202602/t20260225_5176718.html',
        kind: 'official',
        note: '60+免首道门票；观光车等二次消费另计',
      },
      {
        title: '宁夏沙湖旅游官方网站',
        url: 'https://www.nxshahu.com/',
        kind: 'official',
        note: '5A沙湖门票与开放信息',
      },
      {
        title: '宁夏文旅厅：沙湖生态旅游区介绍',
        url: 'https://whhlyt.nx.gov.cn/jqjd/szss_66574/nxshstlyq/',
        kind: 'official',
        note: '景区概况与咨询电话',
      },
    ],
    stops: [
      {
        id: 'xixia-tombs',
        name: '西夏陵',
        days: 1,
        pace: 'slow',
        lat: 38.448,
        lng: 105.987,
        summary:
          '贺兰山下皇家陵寝。先看博物馆，遗址区乘观光车，量力步行短段。',
        tips:
          '60周岁及以上常免首道门票（以景区当日为准），观光车另付。春秋风大备外套与围巾。遗址区日晒强，上午去更凉快。咨询可询景区电话0951-5668966。',
        image:
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
      },
      {
        id: 'shahu-or-zhenbeibu',
        name: '沙湖 或 镇北堡西部影城',
        days: 1,
        pace: 'fast',
        lat: 38.82,
        lng: 106.35,
        summary:
          '二选一：沙湖看沙水芦苇、可乘船；镇北堡看西部影城平地逛堡。',
        tips:
          '沙湖距市区约40–50分钟，官网 nxshahu.com 订票；游船比滑沙更省力。镇北堡60+常免票，电瓶车接驳，适合电影迷。同一天只排一处，留下午回城歇脚。饮食可试手抓羊肉、清淡面食，别过油。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'yinchuan-evening',
        name: '银川市区（返程日）',
        days: 0.5,
        pace: 'slow',
        lat: 38.487,
        lng: 106.231,
        summary: '南关清真寺外观或湖边慢走，午后飞/高铁返京。',
        tips:
          '河东机场距市区约半小时，留足安检时间。高铁可看当日动车时刻。贺兰山岩画路远，三日行程建议跳过。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
    ],
  },
];
