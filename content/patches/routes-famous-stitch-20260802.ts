import type { Route } from '../types';

/**
 * Famous-scenic discoverability + geographic stitching (2026-08-02).
 * Prefer coherent drive corridors over orphan one-spot cards.
 * Evidence: research/notes/multi-discovery/famous-stitch-20260802.md
 * Does NOT touch yunnan-xishuangbanna-winter / compose-yunnan-hekou-sapa（河口沙巴已拆腿）.
 */
export const patchRoutes: Route[] = [
  // ── 赣东北廊：婺源 + 景德镇（overwrite wuyuan id）──────────────
  {
    id: 'huadong-wuyuan-spring',
    title: '婺源景德镇 · 春花与瓷都廊',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约4–6天',
    transport:
      '北京高铁经上饶/黄山北至婺源站，县城包车串江岭/篁岭；再包车或高铁至景德镇看陶瓷馆；结束经景德镇/上饶/南昌高铁回京。亦可黄山徽州线之后挂接本廊',
    budgetLabel: '本趟约3200–5500元（门票+包车+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
    summary:
      '赣东北父母友好廊：婺源江岭/篁岭观花或秋色为主，再开进景德镇陶瓷博物馆与作坊室内线。包车串珠，勿一日多村特种兵；瓷都以展馆电梯为主。',
    introduction:
      '婺源与景德镇同属赣东北，车程约2–3小时，适合一条廊走完。爸妈以婺源县城或江岭附近电梯酒店为花海锚点，观景台+短段步道即可；景德镇连住看陶瓷馆与御窑厂浅逛，体力友好。\n\n花期主看春（3–4月）；秋色亦可。别与南昌省会线同一天硬赶。',
    seasonGuide:
      '春（油菜花）最佳；秋赏叶亦宜。夏湿热缩短户外；冬阴冷馆线仍可走景德镇段。',
    whyFast: '篁岭与江岭二选一；景德镇馆线半日也可成立。',
    notices: [
      '江岭观景台之间有坡，量力一两处；周末公路易堵。',
      '篁岭缆车减步；玻璃栈道恐高可绕。',
      '景德镇优先室内展馆，作坊参观少久站。',
      '包车单日≤4小时；石板雨后防滑。',
      '结束后高铁回京，勿再塞黄山西递同日。',
    ],
    researchKeywords: [
      '婺源 景德镇 自驾 父母',
      '婺源 油菜花 江岭',
      '景德镇 陶瓷博物馆',
    ],
    sources: [
      {
        title: 'Wikivoyage：婺源',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A9%BA%E6%BA%90',
        kind: 'other',
        note: '花期与村落骨架，已改写',
      },
      {
        title: 'Wikivoyage：景德镇',
        url: 'https://zh.wikivoyage.org/wiki/%E6%99%AF%E5%BE%B7%E9%95%87',
        kind: 'other',
        note: '瓷都展馆节奏，已改写',
      },
    ],
    stops: [
      {
        id: 'wuyuan-jiangling',
        name: '江岭梯田花海',
        days: 1.5,
        pace: 'slow',
        lat: 29.348,
        lng: 117.861,
        summary: '观景台俯瞰为主；清晨薄雾最出片。',
        tips: '盛花多在3月中下旬至4月初；台与台有坡，量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
      },
      {
        id: 'wuyuan-huangling',
        name: '篁岭（可选）',
        days: 1,
        pace: 'slow',
        lat: 29.33,
        lng: 117.9,
        summary: '缆车上村；与江岭二选一或浅加半日。',
        tips: '玻璃栈道恐高可绕；门票套票出发前核。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
      },
      {
        id: 'wuyuan-village',
        name: '思溪延村/晓起浅逛',
        days: 0.5,
        pace: 'slow',
        lat: 29.28,
        lng: 117.84,
        summary: '徽派古村平路；选一处喝茶即可。',
        tips: '别一日刷五村。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
      },
      {
        id: 'jdz-ceramic-museum',
        name: '景德镇 · 陶瓷博物馆',
        days: 1,
        pace: 'slow',
        lat: 29.29,
        lng: 117.2,
        summary: '室内空调展线；电梯友好，半日到一日。',
        tips: '周一闭馆常见，行前核实；久站带折叠凳。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/37/Porcelain_Workshop%2C_Jingdezhen%2C_Jiangxi%2C_China.jpg',
      },
      {
        id: 'jdz-imperial-kiln',
        name: '御窑厂 / 陶溪川浅逛',
        days: 1,
        pace: 'slow',
        lat: 29.3,
        lng: 117.18,
        summary: '遗址公园与创意街区平走；作坊外观为主。',
        tips: '少购不明低价「古董」；累了回酒店。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%E6%99%AF%E5%BE%B7%E9%95%87%E5%B8%82%E6%98%8C%E6%B1%9F%E4%B8%9C%E5%B2%B8.JPG/1280px-%E6%99%AF%E5%BE%B7%E9%95%87%E5%B8%82%E6%98%8C%E6%B1%9F%E4%B8%9C%E5%B2%B8.JPG',
      },
    ],
  },

  // ── 闽南廊：厦门鼓浪屿 + 土楼（overwrite xiamen id）────────────
  {
    id: 'huanan-xiamen-winter',
    title: '厦门鼓浪屿 · 土楼浅挂',
    region: 'huanan',
    seasons: ['winter', 'spring', 'autumn', 'summer'],
    tripType: 'long',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约8–12天（土楼可删）',
    transport:
      '北京飞厦门高崎；市区地铁/打车。鼓浪屿须「厦门轮渡」公众号提前预约。南靖/永定土楼包车日归或一夜（约2.5小时）。结束飞回北京',
    budgetLabel: '对照约1.2–2万（含机票分摊+土楼包车；双人；可删土楼缩短）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gulangyu_Island.jpg/1280px-Gulangyu_Island.jpg',
    summary:
      '厦鼓名景主线 + 闽南土楼浅挂：思明慢住、菽庄花园平路、日光岩可免；田螺坑「四菜一汤」包车一日或过夜。勿一日连赶鼓浪屿与土楼。',
    introduction:
      '父母搜「厦门」「鼓浪屿」「土楼」常期望一条线。本产品以厦门市区电梯酒店为基地：环岛路与植物园观光车打底，鼓浪屿半日到一日；南靖田螺坑作为可删的地理挂接，山路备晕车药，只看一处土楼群即可。\n\n土楼不是必须——腿脚紧或晕车整段删除，厦鼓仍成立。',
    seasonGuide:
      '冬春避寒最舒适。秋亦可。夏湿热缩短户外、午后回酒店；台风预警减少出海与山路。',
    whyFast: '土楼整段可删；鼓浪屿只菽庄+沙滩也够。',
    notices: [
      '鼓浪屿船票提前7–15天实名预约；选三丘田码头。',
      '岛上无机动车，穿防滑软底；观光接驳车减步。',
      '日光岩登顶可免；65+景点优待以当日为准。',
      '土楼只去田螺坑一处；勿连洪坑云水谣特种兵。',
      '土楼与鼓浪屿勿同日；山路弯多备药。',
    ],
    researchKeywords: [
      '厦门 鼓浪屿 父母',
      '南靖土楼 田螺坑',
      '厦门 过冬 慢住',
    ],
    sources: [
      {
        title: 'Wikivoyage：厦门',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8E%A6%E9%97%A8',
        kind: 'other',
        note: '厦鼓节奏，已改写',
      },
      {
        title: 'Wikivoyage：南靖',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8D%97%E9%9D%96',
        kind: 'other',
        note: '土楼浅挂，已改写',
      },
    ],
    stops: [
      {
        id: 'xiamen-base',
        name: '厦门市区慢住',
        days: 5,
        pace: 'slow',
        lat: 24.48,
        lng: 118.09,
        summary: '思明/曾厝垵电梯酒店；环岛路平走、植物园观光车。',
        tips: '每天≤2点；近厦大附一更安心。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiamen.jpg/1280px-Xiamen.jpg',
      },
      {
        id: 'gulangyu',
        name: '鼓浪屿 · 菽庄花园',
        days: 1,
        pace: 'slow',
        lat: 24.45,
        lng: 118.06,
        summary: '早班船；菽庄与港仔后沙滩；日光岩登顶可免。',
        tips: '轮渡预约；岛上接驳车减步行。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gulangyu_Island.jpg/1280px-Gulangyu_Island.jpg',
      },
      {
        id: 'nanjing-tulou',
        name: '南靖土楼 · 田螺坑',
        days: 2,
        pace: 'slow',
        lat: 24.64,
        lng: 117.0,
        summary: '包车看「四菜一汤」；可住一晚或日归厦门。',
        tips: '山路备晕车药；台阶鹅卵石防滑；可整段删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Nanjing_Tianluokeng_Tulou_cluster_20140829.JPG/1280px-Nanjing_Tianluokeng_Tulou_cluster_20140829.JPG',
      },
    ],
  },

  // ── 乐山峨眉（overwrite；名景标题强化）────────────────────────
  {
    id: 'xinan-sichuan-leshan-emei',
    title: '乐山峨眉 · 大佛与金顶浅尝',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京飞成都→高铁/车至乐山；峨眉山多用观光车与索道，不硬爬。结束后回成都飞北京。可单订，也可作川西组合中段。',
    budgetLabel: '本趟约2200–4200元（含索道；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leshan_Giant_Buddha%2C_20161102.jpg/1280px-Leshan_Giant_Buddha%2C_20161102.jpg',
    summary:
      '乐山与峨眉同城廊：大佛观光车/舟船减步，金顶索道量力；不排全山徒步。心脏病/严重高血压建议放弃金顶。',
    introduction:
      '乐山市与峨眉山市车程近，本线一条走完。爸妈以乐山城区电梯酒店为锚；大佛世界遗产用观光车/舟船减步看全貌，台阶段量力。金顶低温风大，可整段删，只留大佛仍是完整名景线。\n\n佛教名山文化浅尝：大佛开凿与水上交通史半日讲解足够；峨眉金顶若上山，只坐索道观景、短留即撤，不排全山徒步与夜宿金顶。心脏病/严重高血压建议放弃金顶。\n\n回成都歇一夜再飞京，勿当日连飞过劳。豆腐与清汤菜系更适老，少麻辣油烟。',
    seasonGuide:
      '春秋最佳。夏暑热雷雨早出；冬金顶更冷，厚外套与防滑。',
    whyFast: '峨眉金顶可整段删；只留乐山大佛。',
    notices: [
      '大佛区观光车/船优先；台阶量力。',
      '金顶索道与低温；不适即放弃。',
      '回成都再飞京，勿当日连飞过劳。',
      '尊重寺观礼仪；少高香强推摊点。',
      '火锅改清汤/豆花；少饮酒。',
    ],
    researchKeywords: ['乐山大佛 观光车 父母', '峨眉山 索道 金顶', '乐山 峨眉 慢游'],
    sources: [
      {
        title: 'Wikivoyage：乐山',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B9%90%E5%B1%B1',
        kind: 'other',
        note: '大佛与峨眉进出，已改写',
      },
    ],
    stops: [
      {
        id: 'le-leshan-base',
        name: '乐山城区慢住',
        days: 2,
        pace: 'slow',
        lat: 29.57,
        lng: 103.76,
        summary: '电梯酒店；抵达休整。',
        tips: '成都高铁或包车。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leshan_Giant_Buddha%2C_20161102.jpg/1280px-Leshan_Giant_Buddha%2C_20161102.jpg',
      },
      {
        id: 'le-giant-buddha',
        name: '乐山大佛（观光）',
        days: 1,
        pace: 'slow',
        lat: 29.54,
        lng: 103.77,
        summary: '观光车/舟船减步；半日。',
        tips: '台阶量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leshan_Giant_Buddha%2C_20161102.jpg/1280px-Leshan_Giant_Buddha%2C_20161102.jpg',
      },
      {
        id: 'le-emei-optional',
        name: '峨眉金顶索道（可选）',
        days: 1,
        pace: 'fast',
        lat: 29.52,
        lng: 103.33,
        summary: '索道上下；短留即撤，可删。',
        tips: '低温厚外套；高反应式不适立即下撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mount_Qingcheng.jpg/1280px-Mount_Qingcheng.jpg',
      },
      {
        id: 'le-back-chengdu',
        name: '返回成都',
        days: 1,
        pace: 'fast',
        lat: 30.67,
        lng: 104.06,
        summary: '成都歇一夜再飞京。',
        tips: '勿当日连飞过劳。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
      },
    ],
  },

  // ── P0 九寨沟（黄龙可选）────────────────────────────────────
  {
    id: 'xinan-sichuan-jiuzhaigou',
    title: '九寨沟 · 栈道慢线（黄龙可选）',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约4–6天（含进出）',
    transport:
      '北京经成都飞九寨黄龙机场（JZH），机场大巴/包车至沟口约1.5–2小时；景区内强制观光车+栈道。黄龙另日索道量力。结束原路经成都飞京。可单订，也可作川西组合末段。勿与四姑娘/稻城同周连轴',
    budgetLabel: '本趟约4500–8000元（高原机票+门票观光车+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/1280px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg',
    summary:
      '九寨名景适老版：飞入沟口电梯酒店，景区内观光车串谷、栈道短段慢走；每天一条沟支线。黄龙钙华池索道可选可删。海拔约2000–3000m，须诚实评估心肺。',
    introduction:
      '九寨沟不是成都郊游——进出靠航线与盘山接驳，旺季与冬季封沟政策须行前自查官方公告。爸妈以「坐车看海子 + 平缓栈道」为主，不徒步原始森林远端；沟口电梯酒店连住，早进早出。\n\n藏羌走廊的水色名景：日则沟五花海、树正沟串湖分两日，诺日朗换乘中心歇脚吃饭。沟内藏寨风貌与转经文化可外观浅尝，勿打扰宗教场所与村民生活。海拔约2000–3000m，须诚实评估心肺——血氧自测，持续头痛呕吐立即下撤成都。\n\n黄龙钙华池另票另日，索道减步仍有台阶与高反叠加，膝盖/血压不稳默认删除。勿与四姑娘、新都桥、稻城同周连轴；可挂川西浅廊但段间回成都缓冲。',
    seasonGuide:
      '秋彩林最美也最挤；春夏青绿可走。冬雪封路/缩线常见，以景区公告为准；雨雪防滑。',
    whyFast: '黄龙整段可删；只日则+树正精华栈道也成立。',
    notices: [
      '行前健康评估；心脑血管等高风险者不宜。',
      '备血氧仪与常用药；持续头痛呕吐立即下撤成都。',
      '景区内只乘观光车，私家车禁入。',
      '栈道湿滑慢走；勿抄近路下湖岸。',
      '冬季/灾后开放状态以九寨沟景区官方为准，可能整沟关闭。',
      '勿与四姑娘山、新都桥、稻城亚丁同周连轴；可与川西浅廊组合但段间须回成都缓冲。',
      '尊重藏寨习俗；少饮酒，高原忌暴饮暴食。',
    ],
    researchKeywords: [
      '九寨沟 观光车 父母',
      '九寨沟 栈道 慢游',
      '黄龙 索道 可选',
      '九寨黄龙机场',
    ],
    sources: [
      {
        title: 'Wikivoyage：九寨沟',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B9%9D%E5%AF%A8%E6%B2%9F',
        kind: 'other',
        note: '谷内交通与季节，已改写适老',
      },
      {
        title: '九寨沟风景名胜区（公开信息）',
        url: 'https://www.jiuzhai.com/',
        kind: 'official',
        note: '开放、票务、预约以官网为准',
      },
    ],
    stops: [
      {
        id: 'jz-airport-buffer',
        name: '沟口适应慢住',
        days: 1,
        pace: 'slow',
        lat: 33.26,
        lng: 103.92,
        summary: '机场接驳后电梯酒店；少爬楼、多喝水。',
        tips: '近医院优先；次日早进沟。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Jiuzhaigou_Sichuan_China_Jiuzhaigou-Valley-02.jpg/1280px-Jiuzhaigou_Sichuan_China_Jiuzhaigou-Valley-02.jpg',
      },
      {
        id: 'jz-rize-boardwalk',
        name: '日则沟精华栈道',
        days: 1,
        pace: 'slow',
        lat: 33.16,
        lng: 103.9,
        summary: '观光车至五花海等站点，栈道短段即返；海子彩池是九寨灵魂，不必刷完全部支线。',
        tips: '先远端后下行；中午诺日朗歇；备水防晒，高原忌奔跑。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/1280px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg',
      },
      {
        id: 'jz-shuzheng',
        name: '树正沟海子浅走',
        days: 1,
        pace: 'slow',
        lat: 33.2,
        lng: 103.91,
        summary: '下部谷串湖；平缓为主，量力下车站点。',
        tips: '与日则分两日，勿一日刷完。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Jiuzhaigou_Sichuan_China_Jiuzhaigou-Valley-02.jpg/1280px-Jiuzhaigou_Sichuan_China_Jiuzhaigou-Valley-02.jpg',
      },
      {
        id: 'jz-huanglong-optional',
        name: '黄龙钙华池（可选）',
        days: 1,
        pace: 'fast',
        lat: 32.74,
        lng: 103.83,
        summary: '另日索道减步；高反与台阶叠加，默认可删。',
        tips: '血压不稳整段跳过；短留即撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Huanglong_Sichuan_China_Multicolored-ponds-02.jpg/1280px-Huanglong_Sichuan_China_Multicolored-ponds-02.jpg',
      },
    ],
  },

  // ── P0 凤凰 + 湘西浅挂───────────────────────────────────────
  {
    id: 'huazhong-hunan-fenghuang',
    title: '凤凰古城 · 湘西沱江慢住',
    region: 'huazhong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京高铁经怀化至凤凰古城站，或飞张家界/铜仁转车；古城内步行。芙蓉镇包车约2小时可选挂接。结束经怀化/张家界回京。勿与武陵源同日连赶',
    budgetLabel: '本趟约2200–4000元（高铁+江景电梯房；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hunan_Fenghuang_County_ancient_town.jpg/1280px-Hunan_Fenghuang_County_ancient_town.jpg',
    summary:
      '凤凰独立浅住：沱江平路河街、夜景电梯房；沈从文故居爬坡量力。芙蓉镇瀑布古镇可挂一夜，与张家界线二选一加深，勿两天特种兵。',
    introduction:
      '父母搜「凤凰」应有独立产品，而不是张家界可选尾巴。本线以凤凰古城电梯江景房连住，白天沱江河街平路慢走，晚上看灯早歇——石板雨后极滑，防滑鞋是刚需。\n\n苗疆边城与沈从文笔下的湘西气质：吊脚楼、沱江夜景、故居爬坡量力即可；勿一日刷完所有「网红店」。辣食点微辣，肠胃弱改清蒸河鲜与粥。\n\n芙蓉镇瀑布古镇可挂一夜，与张家界武陵源专线二选一加深，勿两天特种兵连赶三索一梯。',
    seasonGuide:
      '春秋舒适。夏闷热夜景仍可；冬湿冷石板防滑，缩短户外。',
    whyFast: '芙蓉镇可删；只凤凰沱江两晚也成立。',
    notices: [
      '住江景电梯房，少换店。',
      '石板雨后极滑；穿防滑鞋。',
      '故居台阶量力；江边平路足够。',
      '辣食点微辣；肠胃弱改清蒸。',
      '与张家界挂接则中间留缓冲日。',
      '尊重当地苗族习俗；少夜间喧哗。',
    ],
    researchKeywords: [
      '凤凰古城 父母 慢住',
      '沱江 夜景 电梯房',
      '芙蓉镇 挂接',
    ],
    sources: [
      {
        title: 'Wikivoyage：凤凰',
        url: 'https://zh.wikivoyage.org/wiki/%E5%87%A4%E5%87%B0',
        kind: 'other',
        note: '古城与交通，已改写',
      },
    ],
    stops: [
      {
        id: 'fh-tuojiang-base',
        name: '凤凰 · 沱江慢住',
        days: 2,
        pace: 'slow',
        lat: 27.95,
        lng: 109.6,
        summary: '江景电梯酒店；河街平走。',
        tips: '高铁凤凰古城站打车；少行李过石板。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hunan_Fenghuang_County_ancient_town.jpg/1280px-Hunan_Fenghuang_County_ancient_town.jpg',
      },
      {
        id: 'fh-night-riverside',
        name: '沱江夜景浅逛',
        days: 1,
        pace: 'slow',
        lat: 27.948,
        lng: 109.599,
        summary: '傍晚看灯即返；不夜逛到深更。',
        tips: '湿滑扶栏；人多早撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Fenghuang_County%2C_Hunan%2C_China%2C_21_December_2016a.jpg/1280px-Fenghuang_County%2C_Hunan%2C_China%2C_21_December_2016a.jpg',
      },
      {
        id: 'fh-furong-optional',
        name: '芙蓉镇（可选）',
        days: 1,
        pace: 'slow',
        lat: 28.74,
        lng: 109.63,
        summary: '瀑布与石板古镇一夜；可删。',
        tips: '包车约2小时；台阶比沱江多，量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Furong_Zhen.jpg/1280px-Furong_Zhen.jpg',
      },
    ],
  },

  // ── P0 乌鲁木齐市区慢住──────────────────────────────────────
  {
    id: 'xibei-xinjiang-urumqi-city',
    title: '乌鲁木齐 · 市区慢住',
    region: 'xibei',
    seasons: ['summer', 'autumn', 'spring'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约4–6天',
    transport:
      '北京直飞乌鲁木齐地窝堡；市区地铁/打车。红山公园与博物馆分段。结束飞回北京。本线不租车出北疆长线——北疆湖光见独立产品',
    budgetLabel: '本趟约2800–4800元（机票分摊+市区电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Urumqi_skyline.jpg/1280px-Urumqi_skyline.jpg',
    summary:
      '把乌市从「北疆枢纽过夜」升级为独立慢住：红山公园浅登/观光、自治区博物馆室内、二道桥外观。海拔约800m、无高原负担；干燥补水，时差约晚北京2小时。',
    introduction:
      '父母常只在乌市转飞，其实市区值得单独几天。博物馆空调足，红山俯瞰量力，国际大巴扎外观即可。\n\n想去赛里木/喀纳斯请改订北疆专线；本线默认不租SUV出城。',
    seasonGuide:
      '夏秋舒适。春多风沙备口罩；冬严寒缩短户外，馆线仍可。',
    whyFast: '大巴扎可删；博物馆+红山浅览足够。',
    notices: [
      '干燥补水、润唇；强防晒。',
      '安检与证件随身；遵从当地规定。',
      '清真餐饮尊重习惯；少生冷。',
      '红山台阶量力，可山下远观。',
      '不适优先自治区人民医院等三甲。',
    ],
    researchKeywords: [
      '乌鲁木齐 红山公园 父母',
      '新疆博物馆 乌鲁木齐',
      '乌鲁木齐 慢住',
    ],
    sources: [
      {
        title: 'Wikivoyage：乌鲁木齐',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90',
        kind: 'other',
        note: '市区节奏，已改写',
      },
    ],
    stops: [
      {
        id: 'urumqi-city-base',
        name: '乌市电梯慢住',
        days: 2,
        pace: 'slow',
        lat: 43.83,
        lng: 87.62,
        summary: '近地铁电梯酒店；适应干燥与时差。',
        tips: '机场打车；头两日少排满。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Urumqi_skyline.jpg/1280px-Urumqi_skyline.jpg',
      },
      {
        id: 'urumqi-hongshan',
        name: '红山公园浅览',
        days: 1,
        pace: 'slow',
        lat: 43.8,
        lng: 87.6,
        summary: '俯瞰市区；台阶量力，可短停。',
        tips: '风大备外套；膝不适山下远观。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/A_glance_at_Urumqi_from_Hongshan_Park.jpg/1280px-A_glance_at_Urumqi_from_Hongshan_Park.jpg',
      },
      {
        id: 'urumqi-museum',
        name: '自治区博物馆',
        days: 1,
        pace: 'slow',
        lat: 43.82,
        lng: 87.58,
        summary: '室内展线；预约以当日为准。',
        tips: '周一常闭；久站折叠凳。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Urumqi_skyline.jpg/1280px-Urumqi_skyline.jpg',
      },
      {
        id: 'urumqi-bazaar-optional',
        name: '国际大巴扎外观（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 43.79,
        lng: 87.58,
        summary: '建筑外观与周边平走；可删。',
        tips: '人多错峰；少久站购物。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hongshan_Park_-_Entrance%2C_Urumuqi.jpg/1280px-Hongshan_Park_-_Entrance%2C_Urumuqi.jpg',
      },
    ],
  },

  // ── P1 庐山牯岭────────────────────────────────────────────
  {
    id: 'huadong-jiangxi-lushan',
    title: '庐山牯岭 · 避暑慢住',
    region: 'huadong',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–4天',
    transport:
      '北京高铁至九江/庐山站，景区巴士或观光车上牯岭镇；镇上步行/观光车。结束经九江高铁回京。不排五老峰硬爬',
    budgetLabel: '本趟约2200–4000元（含景区交通；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mount_Lu.jpg/1280px-Mount_Lu.jpg',
    summary:
      '庐山适老避暑：住牯岭镇区散步与观景台，靠景区交通上山；云雾湿冷备外套。非必须登险峰。',
    introduction:
      '庐山牯岭是近代避暑与文人叙事交汇的山上小镇——电梯酒店连住比日登日返轻松。花径、如琴湖、博物馆类平缓点优先；含鄱口等观景台量力，五老峰默认不排。\n\n山上简餐清淡少油辣，云雾湿冷备外套。靠景区交通上山，非必须登险峰。',
    seasonGuide:
      '夏避暑主体。秋清爽云海；冬结冰防滑，缩短户外。',
    whyFast: '只牯岭镇散步+一处观景台也成立。',
    notices: [
      '山上温差大，薄羽绒常备。',
      '云雾路滑，穿防滑鞋。',
      '勿轻信「必爬五老峰」。',
      '门票与观光车以景区公告为准。',
    ],
    researchKeywords: ['庐山 牯岭 避暑 父母', '庐山 观光车', '九江 庐山 高铁'],
    sources: [
      {
        title: 'Wikivoyage：庐山',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BA%90%E5%B1%B1',
        kind: 'other',
        note: '牯岭节奏，已改写',
      },
    ],
    stops: [
      {
        id: 'ls-jiujiang-gate',
        name: '九江上山缓冲',
        days: 0.5,
        pace: 'fast',
        lat: 29.7,
        lng: 116.0,
        summary: '高铁九江/庐山站转景区交通。',
        tips: '行李少；晕山备药。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mount_Lu.jpg/1280px-Mount_Lu.jpg',
      },
      {
        id: 'ls-guling-base',
        name: '牯岭镇慢住',
        days: 2,
        pace: 'slow',
        lat: 29.58,
        lng: 115.98,
        summary: '镇上电梯酒店；街巷平缓散步。',
        tips: '云雾湿冷备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mount_Lu_16147-Lushan_%2849052568127%29.jpg/1280px-Mount_Lu_16147-Lushan_%2849052568127%29.jpg',
      },
      {
        id: 'ls-viewpoint',
        name: '花径 / 观景台浅览',
        days: 1,
        pace: 'slow',
        lat: 29.57,
        lng: 115.97,
        summary: '观光车串联；一处观景台即可。',
        tips: '五老峰不排；雨雾改室内。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mount_Lu_16158-Lushan_%2849052568687%29.jpg/1280px-Mount_Lu_16158-Lushan_%2849052568687%29.jpg',
      },
    ],
  },

  // ── P1 绍兴（可挂杭州）──────────────────────────────────────
  {
    id: 'huadong-zhejiang-shaoxing',
    title: '绍兴古城 · 水巷黄酒浅住',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–4天（可挂杭州）',
    transport:
      '北京高铁至绍兴北/柯桥，市区打车。可前/后挂杭州西湖半日至一日。结束高铁回京',
    budgetLabel: '本趟约1800–3500元（高铁+古城电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Shaoxing_Cityscape.jpg/1280px-Shaoxing_Cityscape.jpg',
    summary:
      '绍兴水巷与鲁迅故里平缓街巷；黄酒文化浅尝。体力友好，可挂杭州西湖，勿一日多古镇特种兵。',
    introduction:
      '绍兴是水巷、鲁迅故里与黄酒文化叠在一起的古城：石板河道平缓，爸妈选近鲁迅故里电梯酒店即可。绍菜少油重，黄酒浅尝，肠胃弱改茶与粥面。\n\n安昌古镇可选一日；杭州作进出缓冲，不硬塞乌镇西塘（见江南水乡专线）。',
    seasonGuide: '春秋最佳。梅雨湿滑；夏湿热早晚走。',
    whyFast: '安昌可删；鲁迅故里+书圣故里半日也够。',
    notices: [
      '石板雨后防滑。',
      '黄酒适量；肠胃弱改茶。',
      '与杭州挂接则留空白半日。',
    ],
    researchKeywords: ['绍兴古城 父母', '鲁迅故里 慢游', '绍兴 杭州 高铁'],
    sources: [
      {
        title: 'Wikivoyage：绍兴',
        url: 'https://zh.wikivoyage.org/wiki/%E7%BB%8D%E5%85%B4',
        kind: 'other',
        note: '古城节奏，已改写',
      },
    ],
    stops: [
      {
        id: 'sx-city-base',
        name: '绍兴古城慢住',
        days: 2,
        pace: 'slow',
        lat: 30.0,
        lng: 120.58,
        summary: '近故里电梯酒店；水巷平走。',
        tips: '高铁站打车。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Shaoxing_Cityscape.jpg/1280px-Shaoxing_Cityscape.jpg',
      },
      {
        id: 'sx-luxun',
        name: '鲁迅故里浅逛',
        days: 1,
        pace: 'slow',
        lat: 30.0,
        lng: 120.59,
        summary: '街区博物馆；半日。',
        tips: '人多早去。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ke_Bridge_in_Shaoxing_01_2017-08.jpg/1280px-Ke_Bridge_in_Shaoxing_01_2017-08.jpg',
      },
      {
        id: 'sx-hangzhou-optional',
        name: '杭州西湖半日（可选）',
        days: 1,
        pace: 'fast',
        lat: 30.25,
        lng: 120.15,
        summary: '进出缓冲；电瓶车/断桥平段。',
        tips: '可删；雷峰塔台阶量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
      },
    ],
  },

  // ── P1 五台山适老减负────────────────────────────────────────
  {
    id: 'huabei-shanxi-wutai',
    title: '五台山 · 台怀适老减负',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–4天',
    transport:
      '北京高铁/公路至忻州或台怀镇；台怀内电瓶车/短途车。结束回京。不排五台顶峰特种兵徒步；与大同云冈分线，勿同周硬赶',
    budgetLabel: '本趟约2000–3800元（交通+台怀电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Wutai_shan_temples.jpg/1280px-Wutai_shan_temples.jpg',
    summary:
      '五台山适老减负：住台怀镇，显通寺/塔院寺等平缓寺院浅访；黛螺顶索道量力可删。海拔约3000m级台顶不去，心肺评估优先。',
    introduction:
      '五台山是文殊道场，晋北线曾明确勿再塞五台长线——本产品单独立项减负版。爸妈以台怀显通/塔院等平缓寺院为主，黛螺顶索道量力可删；台顶约3000m级不去，心肺评估优先。\n\n素斋清淡，高原感忌剧烈与饮酒。与大同云冈、平遥分线，中间回京休整。不适即下撤忻州/太原。',
    seasonGuide:
      '夏秋适宜。冬严寒封路风险高，默认不排；高原感备薄羽绒。',
    whyFast: '黛螺顶可删；台怀两寺+空白日成立。',
    notices: [
      '台怀海拔已有高原感，不适即下撤忻州/太原。',
      '寺院台阶量力；尊重香火与摄影规定。',
      '素斋清淡；高原反应忌剧烈。',
      '勿与悬空寺登临同日。',
    ],
    researchKeywords: ['五台山 台怀 父母', '五台山 索道 减负', '忻州 五台山'],
    sources: [
      {
        title: 'Wikivoyage：五台山',
        url: 'https://zh.wikivoyage.org/wiki/%E4%BA%94%E5%8F%B0%E5%B1%B1',
        kind: 'other',
        note: '台怀减负，已改写',
      },
    ],
    stops: [
      {
        id: 'wt-taihuai-base',
        name: '台怀镇慢住',
        days: 2,
        pace: 'slow',
        lat: 39.04,
        lng: 113.59,
        summary: '电梯酒店；适应海拔与早晚温差。',
        tips: '近医务室优先。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Wutai_shan_temples.jpg/1280px-Wutai_shan_temples.jpg',
      },
      {
        id: 'wt-xiantong',
        name: '显通寺 / 塔院寺浅访',
        days: 1,
        pace: 'slow',
        lat: 39.04,
        lng: 113.595,
        summary: '核心寺院平缓段；一至两处即可。',
        tips: '台阶慢走；人多早去。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Wutai_2009_431.jpg/1280px-Wutai_2009_431.jpg',
      },
      {
        id: 'wt-dailuoding-optional',
        name: '黛螺顶索道（可选）',
        days: 1,
        pace: 'fast',
        lat: 39.05,
        lng: 113.6,
        summary: '索道减步；恐高或高反应式不适可删。',
        tips: '短留即撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Wutai_Shan_Buddhist_Garden_woodwork.jpg/1280px-Wutai_Shan_Buddhist_Garden_woodwork.jpg',
      },
    ],
  },
];
