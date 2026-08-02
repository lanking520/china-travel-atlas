import type { Route } from '../types';

/** 广东 / 广西 / 重庆 / 贵州 — merge into routes.ts later */
export const patchRoutes: Route[] = [
  // ── 华南 · 广东 ──────────────────────────────────────────────
  {
    id: 'huanan-guangzhou-chaoshan',
    title: '广州慢住 · 潮汕或珠海可选',
    region: 'huanan',
    seasons: ['winter', 'spring'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约2–3周（或压缩7–10天）',
    transport: '北京飞广州白云，市内地铁+打车；潮汕高铁约2.5–3小时，珠海城际约1小时；结束飞回北京',
    budgetLabel: '对照月预算约2万（含机票分摊）；7–10天版约8000–12000元',
    coverImage:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200',
    summary:
      '冬春避寒首选湾区：广州当慢住基地，早茶、珠江夜步、陈家祠与博物馆空调看展。体力好再加潮汕美食古城或珠海滨海散步；不必两线都排满。飞进飞出北京，中间不赶场。',
    whyFast:
      '潮汕或珠海二选一快看3–5天即可；主体时间留给广州慢节奏，别连轴转美食打卡。',
    researchKeywords: [
      '广州 过冬 慢住 退休',
      '潮州 古城 高铁 两日',
      '珠海 情侣路 散步',
    ],
    sources: [
      {
        title: '广州市人民政府：银发文旅康养',
        url: 'https://www.gz.gov.cn/xw/zwlb/bmdt/smzj/content/post_10468980.html',
        kind: 'official',
        note: '银发旅游与康养旅居政策背景',
      },
      {
        title: 'Wikivoyage：广州',
        url: 'https://en.wikivoyage.org/wiki/Guangzhou',
        kind: 'other',
        note: '市区分区、地铁与珠江沿线参考，已改写',
      },
      {
        title: 'Wikivoyage：潮州',
        url: 'https://en.wikivoyage.org/wiki/Chaozhou',
        kind: 'other',
        note: '潮汕高铁站接驳与古城步行参考',
      },
      {
        title: 'Wikivoyage：珠海',
        url: 'https://en.wikivoyage.org/wiki/Zhuhai',
        kind: 'other',
        note: '情侣路滨海散步与城际接驳参考',
      },
    ],
    stops: [
      {
        id: 'guangzhou-base',
        name: '广州市区（慢住基地）',
        days: 10,
        pace: 'slow',
        lat: 23.129,
        lng: 113.264,
        summary:
          '选天河或越秀电梯公寓，早茶一盅两件，珠江新城夜步，陈家祠、省博吹空调看展。',
        tips:
          '每天最多一个主点+一顿早茶，下午回酒店歇。地铁换乘别赶末班；珠江边傍晚最舒服，中午湿热少出门。粤菜清淡可选白切、炖汤；肠胃敏感少试生腌海鲜。近三甲医院的酒店更安心。7–10天版把基地压到5–6天即可。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'chaoshan-optional',
        name: '潮州 / 汕头（可选）',
        days: 4,
        pace: 'slow',
        lat: 23.657,
        lng: 116.622,
        summary:
          '高铁至潮汕站，古城平地慢逛、工夫茶与牛肉火锅。汕头小公园骑楼可半日合并。',
        tips:
          '潮汕站出站打车或公交进城约40–50分钟，别硬自驾进古城窄巷。广济桥、牌坊街平地为主，午后暑热强，上午出门。海鲜火锅别贪凉；体力不够只住潮州两晚即可，不必连赶汕头南澳。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
      {
        id: 'zhuhai-optional',
        name: '珠海情侣路（可选）',
        days: 3,
        pace: 'slow',
        lat: 22.271,
        lng: 113.576,
        summary:
          '广州城际到珠海，情侣路滨海平路散步，节奏比市区更松。与潮汕二选一，别两边硬排。',
        tips:
          '住香洲或情侣路附近电梯酒店，傍晚海风散步即可，不必进澳门。海边紫外线强，帽+防晒；风大备薄外套。返穗或直接飞深圳/广州回京均可。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
    ],
  },

  // ── 华南 · 广西 ──────────────────────────────────────────────
  {
    id: 'huanan-guilin-yangshuo',
    title: '桂林阳朔 · 漓江慢住',
    region: 'huanan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约10–14天',
    transport:
      '北京飞桂林两江，市区打车；漓江游船磨盘山/竹江码头接驳；阳朔租电动车或包车；结束飞回北京',
    budgetLabel: '本趟约8000–14000元（含机票与船票；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=1200',
    summary:
      '春秋漓江：桂林歇两三日→星级游船顺流阳朔→峰林田园慢住约一周，不垫三周空日。月租级见 base-guilin。',
    whyFast:
      '漓江游船一日完成桂林→阳朔转移；遇龙河竹筏半日快览，其余时间田园慢住。',
    researchKeywords: [
      '桂林 阳朔 慢住 退休',
      '漓江 游船 老人 购票',
      '遇龙河 竹筏 体力',
    ],
    sources: [
      {
        title: '桂林本地宝：漓江门票老人优惠与购票',
        url: 'https://gl.bendibao.com/tour/2023127/15083.shtm',
        kind: 'other',
        note: '65+免门票、60–65半价；船票本身无老年优惠，以当日公告为准',
      },
      {
        title: '桂林本地宝：漓江船票购票入口',
        url: 'http://gl.bendibao.com/tour/2023127/15082.shtm',
        kind: 'other',
        note: '「漓江售票处」公众号 /「桂林漓江商城」小程序预约',
      },
      {
        title: 'Wikivoyage：桂林',
        url: 'https://en.wikivoyage.org/wiki/Guilin',
        kind: 'other',
        note: '漓江游船与阳朔接驳概述，已改写',
      },
    ],
    stops: [
      {
        id: 'guilin-base',
        name: '桂林市区',
        days: 3,
        pace: 'slow',
        lat: 25.274,
        lng: 110.29,
        summary:
          '象鼻山外观或两江四湖夜景，东西巷吃米粉。先歇脚，再订漓江船票。',
        tips:
          '住象山或解放桥附近电梯酒店，减少通勤。象鼻山可只外观拍照，不必登顶。湿热天气备防暑药；每天一个点就够。船票提前在「漓江售票处」预约，旺季早订。',
        image:
          'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800',
      },
      {
        id: 'lijiang-cruise',
        name: '漓江游船（桂林→阳朔）',
        days: 1,
        pace: 'fast',
        lat: 24.85,
        lng: 110.4,
        summary:
          '磨盘山三星或竹江四星游船顺流约4小时，甲板看峰林，船舱可坐歇。下船即转阳朔。',
        tips:
          '65+景区门票常免，船票仍须购（以当日规则为准）。甲板风大日晒强，备帽与薄外套；船程长，备水与常用药。行李提前送到阳朔酒店或用接驳行李服务，别扛大箱上船。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'yangshuo-slow',
        name: '阳朔（慢住）',
        days: 7,
        pace: 'slow',
        lat: 24.778,
        lng: 110.496,
        summary:
          '遇龙河沿线或兴坪民宿：竹筏/画廊选段 + 西街浅逛 + 空白穿插；不垫十日无活动日。',
        tips:
          '电动车选助力缓速，雨天不骑；山路弯多备晕车药。遇龙河竹筏选短段即可，过坝有颠簸，腰椎不好可改骑行看景。西街夜市人挤，早去早撤。暑热与黄金周避开；春秋最宜。更长慢居走 base-guilin。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
  },

  // ── 西南 · 重庆 ──────────────────────────────────────────────
  {
    id: 'xinan-chongqing-slow',
    title: '重庆 · 山城慢走',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约8–12天',
    transport:
      '北京飞重庆江北，市区地铁+轻轨+打车；武隆高铁或包车一日/过夜；结束飞回北京',
    budgetLabel: '本趟约7000–12000元（含机票分摊；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    summary:
      '山城用腿也用轨：解放碑、李子坝、南山分段歇，主城约一周够充实，不垫三周空日。武隆天生三桥可选一日。',
    whyFast:
      '武隆天生三桥一日快览（电梯+核心桥段），主城以慢走与轨道交通为主。',
    researchKeywords: [
      '重庆 慢游 退休 地铁',
      '李子坝 轻轨 南山 夜景',
      '武隆 天生三桥 电梯',
    ],
    sources: [
      {
        title: '武隆旅游网（官方）',
        url: 'https://www.wlkst.com/',
        kind: 'official',
        note: '天生三桥、仙女山等景区资讯与购票入口',
      },
      {
        title: 'Wikivoyage：武隆',
        url: 'https://en.wikivoyage.org/wiki/Wulong',
        kind: 'other',
        note: '天生三桥票价区间与电梯说明，已改写',
      },
      {
        title: '重庆市武隆区人民政府：在线购票',
        url: 'https://cqwl.gov.cn/bmjz_sites/bm/wlw/zwxx_98939/jqjd/zxgp/',
        kind: 'official',
        note: '政府站点购票入口汇总',
      },
    ],
    stops: [
      {
        id: 'chongqing-base',
        name: '重庆主城（慢走基地）',
        days: 6,
        pace: 'slow',
        lat: 29.563,
        lng: 106.552,
        summary:
          '住解放碑或江北嘴电梯酒店：轻轨看山城、洪崖洞外观、磁器口浅逛；隔日空白，不垫十日空转。',
        tips:
          '山城台阶多，路线用地铁/轻轨拆段，一天一个片区。李子坝观景平台人多，错开早晚高峰。火锅选清油微辣，备肠胃药；脚力好再加鹅岭或长江索道。雨天路面滑，穿防滑鞋。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'nanshan-view',
        name: '南山 / 一棵树观景',
        days: 1,
        pace: 'slow',
        lat: 29.558,
        lng: 106.612,
        summary: '傍晚上山看两江灯火，打车往返，少走路。适合作为主城轻松半日。',
        tips: '雾霾或雨天观景差可改日；山上风凉备外套。不必夜爬，打车点对点最省力。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'wulong-optional',
        name: '武隆天生三桥（可选）',
        days: 1,
        pace: 'fast',
        lat: 29.41,
        lng: 107.849,
        summary:
          '世界自然遗产喀斯特，观光电梯下坑，重点看天龙、青龙桥，量力即返。',
        tips:
          '高铁至武隆或包车，门票+电梯以官方当日为准。坑底仍有步行与缓坡，穿防滑鞋、带水；不必走完全程。雨天石阶湿滑可改期。体力一般只排一日，别再塞仙女山。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
    ],
  },

  // ── 西南 · 贵州 ──────────────────────────────────────────────
  {
    id: 'xinan-guizhou-loop',
    title: '贵阳基地 · 黄果树与黔东可选',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约10–12天',
    transport:
      '北京飞贵阳龙洞堡，市区打车/地铁；黄果树高速约1.5–2小时或跟团；镇远/黔东南高铁或包车；结束飞回北京',
    budgetLabel: '本趟约8000–14000元（含机票与景区观光车；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    summary:
      '贵阳大本营数日+黄果树+镇远/黔东南二选一；不垫三周空日。月租级见 base-guiyang。',
    whyFast:
      '黄果树一日（或过夜）快看大瀑布；镇远与黔东南二选一，其余时间贵阳休整。',
    researchKeywords: [
      '贵阳 慢住 退休 春秋',
      '黄果树 观光车 预约',
      '镇远古城 高铁 两日',
    ],
    sources: [
      {
        title: '黄果树旅游区管委会：亲近黄果树',
        url: 'https://hgsgwh.anshun.gov.cn/qjhgs/',
        kind: 'official',
        note: '景区公告、夜游与交通资讯',
      },
      {
        title: '黄果树：安旅通预约与游览须知',
        url: 'https://hgsgwh.anshun.gov.cn/qjhgs/jqgg/202301/t20230116_77944108.html',
        kind: 'official',
        note: '分时预约、观光车、大瀑布扶梯票价参考',
      },
      {
        title: '黄果树购票与优免说明（管委会）',
        url: 'https://hgsgwh.anshun.gov.cn/qjhgs/jqdt/202002/t20200228_52060942.html',
        kind: 'official',
        note: '门票含三大景区、观光车另计；渠道以当日安旅通为准',
      },
    ],
    stops: [
      {
        id: 'guiyang-base',
        name: '贵阳（慢住基地）',
        days: 5,
        pace: 'slow',
        lat: 26.647,
        lng: 106.63,
        summary:
          '观山湖或喷水池电梯酒店：黔味浅尝、花溪/公园散步；为黄果树与黔东留体力，不垫八日空转。',
        tips:
          '贵阳多雨阴凉，薄羽绒或抓绒常备。辣椒重，点菜说「微辣」或「免辣」。每天一个轻松点。近贵州医科大学附属医院更安心。更长慢居走 base-guiyang。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
      {
        id: 'huangguoshu',
        name: '黄果树大瀑布',
        days: 2,
        pace: 'fast',
        lat: 25.992,
        lng: 105.667,
        summary:
          '安旅通提前预约，观光车串联，大瀑布扶梯省腿力；水帘洞按体力决定进不进。',
        tips:
          '至少提前一天小程序「安旅通」分时预约；门票与观光车常打包，扶梯另购。穿防滑鞋，瀑区水花大备雨衣。天星桥台阶多，体力一般可只看大瀑布。勿信黄牛票。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'zhenyuan-or-qiandongnan',
        name: '镇远古城或黔东南（二选一）',
        days: 3,
        pace: 'slow',
        lat: 27.049,
        lng: 108.43,
        summary:
          '镇远：舞阳河畔古城平地慢走。黔东南：凯里中转，西江或肇兴浅访，山路多弯量力。',
        tips:
          '镇远高铁直达更省心，夜景沿河散步即可。黔东南村寨台阶与坡道多，选短线、包车少换乘；避免连续赶多个寨。两线只留一条，回贵阳再飞北京。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
    ],
  },
];
