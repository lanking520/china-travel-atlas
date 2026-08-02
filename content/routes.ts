import type { Route } from './types';

export const routes: Route[] = [
  // ── 华北 · 北京出发短途 ──────────────────────────────────────────
  {
    id: 'mutianyu-day',
    title: '慕田峪长城 · 当天往返',
    region: 'huabei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '1天',
    transport: '自驾或包车，约1.5小时',
    budgetLabel: '本趟约800–1200元（门票+油费+简餐）',
    coverImage:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    summary:
      '坡度较缓、人流少于八达岭，适合自驾一日登城。早出发、摆渡进北检票口，厢式缆车到14号敌楼后按体力走几座敌楼，午后返京。',
    researchKeywords: [
      '慕田峪 带父母 攻略',
      '慕田峪 缆车 索道 怎么选',
      '慕田峪 自驾 停车 一日',
    ],
    sources: [
      {
        title: '慕田峪长城景区官网须知',
        url: 'https://www.mutianyugreatwall.com/cnInformation',
        kind: 'official',
        note: '门票优惠、缆车与摆渡规则以当日公告为准',
      },
      {
        title: '携程游记：带老人游慕田峪（参考）',
        url: 'https://you.ctrip.com/travels/beijing1/4099796.html',
        kind: 'other',
        note: '缆车与省力路线参考，非官方政策',
      },
      {
        title: '小红书：带爷爷奶奶爬慕田峪（参考）',
        url: 'https://www.xiaohongshu.com/explore/6a17fe860000000008025fd0',
        kind: 'xiaohongshu',
        note: '亲测省力路线与缆车选择，非官方政策',
      },
      {
        title: '小红书社区检索：慕田峪长城攻略缆车索道滑道都玩无遗憾（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a22d503000000000702a7b4',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
      {
        title: '小红书社区检索：321 慕田峪长城（无痛版）（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/69be3e610000000023014e82',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
    ],
    stops: [
      {
        id: 'mutianyu',
        name: '慕田峪长城',
        days: 1,
        pace: 'slow',
        lat: 40.4319,
        lng: 116.5704,
        summary:
          '厢式缆车直达14号敌楼；向西或向东只走两三座敌楼即可。秋日银杏好看，但别赶全程。',
        tips:
          '北检票口进园 → 摆渡车（停车场到登城口约3公里）→ 厢式缆车双程至14号敌楼，慢走2–3座敌楼即返。索道/滑道刺激，恐高可改厢式缆车。北京户籍60岁以上门票政策更优惠，缆车另计。早场人少；山上厕所少，入口先解决。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
    ],
  },
  {
    id: 'tianjin-day',
    title: '天津 · 海河漫步一日',
    region: 'huabei',
    seasons: ['spring', 'summer', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '1天',
    transport: '北京南↔天津站城际动车约30–40分钟（C字头），或自驾约2小时',
    budgetLabel: '本趟约500–900元（高铁+市内+简餐）',
    coverImage:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200',
    summary:
      '从北京南站坐城际动车到天津站，五大道看洋楼、意风区与海河夜景，全程平地慢走。适合父母周末换口味，当晚返京。',
    researchKeywords: [
      '天津 一日游 自驾 高铁',
      '天津 五大道 海河 路线',
      '天津 周末 退休旅行',
    ],
    sources: [
      {
        title: 'Wikivoyage：天津中心城区',
        url: 'https://en.wikivoyage.org/wiki/Tianjin/Central_Districts',
        kind: 'other',
        note: '五大道、海河等景点与步行路线参考',
      },
      {
        title: 'Wikivoyage：天津交通',
        url: 'https://en.wikivoyage.org/wiki/Tianjin',
        kind: 'other',
        note: '北京南↔天津站动车约33分钟、二等座约55元',
      },
      {
        title: '新华网：12306适老服务',
        url: 'https://www.news.cn/politics/20260121/f14940998c114eb1853842bdcf4e6d36/c.html',
        kind: 'official',
        note: '敬老版、重点旅客预约、优先下铺',
      },
      {
        title: '小红书社区检索：亲测天津一日游不走回头路攻略（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a6882f0000000001102ef5b',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
      {
        title: '小红书社区检索：周末去天津吃煎饼听相声，沿海河吹晚风（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a69ee00000000001003e916',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
    ],
    stops: [
      {
        id: 'wudadao',
        name: '五大道',
        days: 0.5,
        pace: 'slow',
        lat: 39.117,
        lng: 117.195,
        summary:
          '民园广场起，沿重庆道、睦南道慢看小洋楼。街区免费，树荫多，全程平路。',
        tips:
          '地铁营口道/小白楼站步行入区，别自驾进核心（单行道多、停车贵）。从民园广场出发，1.5–2小时慢走足够；累了可坐观光马车（约80元/人，旺季排队）。小洋楼多为私宅或办公，入内参观常有楼梯，看外观即可。夏季避开正午，带遮阳帽和水。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'haihe',
        name: '海河沿线',
        days: 0.5,
        pace: 'slow',
        lat: 39.128,
        lng: 117.19,
        summary:
          '从天津站沿海河走到意式风情区，傍晚看桥与灯光。步道宽平，长椅多，可河边晚餐。',
        tips:
          '天津站出站即近海河，与意风区、津门故里可一路步行，无需赶景点。游船可选（约100元），但步行已够看景。傍晚光线好、气温凉，适合慢慢走。想乘摩天轮须预约，风大可能停运。21:00前后返北京南即可。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
    ],
  },
  {
    id: 'chengde-2d',
    title: '承德 · 避暑山庄两日',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '2天1晚',
    transport: '京承高速自驾约2.5–3小时，或高铁至承德南站再打车约20分钟',
    budgetLabel: '本趟约1500–2200元（门票+车船+住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    summary:
      '比北京凉几度，皇家园林湖区平坦好走。第一天山庄慢游，第二天普宁寺；京津籍60岁以上门票常免。两晚更轻松，结束后返京。',
    researchKeywords: [
      '承德避暑山庄 两日 自驾',
      '避暑山庄 环山车 值不值',
      '承德 普宁寺 行程',
    ],
    sources: [
      {
        title: '避暑山庄官网',
        url: 'https://www.bishushanzhuang.com.cn/index.php/scenic/area_index.html',
        kind: 'official',
        note: '开放时间、游览线路以官网为准',
      },
      {
        title: '承德市文物局：门票价格公示',
        url: 'https://wwj.chengde.gov.cn/art/2025/7/21/art_960_1076356.html',
        kind: 'official',
        note: '旺季130元、淡季90元及优惠细则',
      },
      {
        title: '极目新闻：京津籍老人免票',
        url: 'http://m.cnhubei.com/content/2025-07/06/content_19312478.html',
        kind: 'other',
        note: '跨城养老政策，京津60+免门票须带身份证',
      },
      {
        title: '小红书：承德景交与游玩节奏（参考）',
        url: 'https://www.xiaohongshu.com/explore/68b84b69000000001d02b033',
        kind: 'xiaohongshu',
        note: '景交选择与实地节奏，非官方政策',
      },
      {
        title: '小红书社区检索：穷游承德避暑山庄天价景交车，真不贵（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a33f17f000000000803c8d8',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
      {
        title: '小红书社区检索：周末逛承德｜避暑山庄超懒人省力攻略（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a1572f1000000003700ebba',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
    ],
    stops: [
      {
        id: 'bishu-shanzhuang',
        name: '避暑山庄',
        days: 1,
        pace: 'slow',
        lat: 40.991,
        lng: 117.938,
        summary:
          '宫殿区看正殿，湖区沿湖平路慢走。山区务必乘环山车，车上可远眺外八庙金顶。',
        tips:
          '早7:30–8:30入园，先宫殿后湖区。山区一定买环山车（约50–60元，5–10月运营），别硬爬；11月至4月山区常关闭。四种景交可按需单买，不必购高价全包套票。湖区可慢走，山区坐环山车更省力。北京/天津户籍60+免门票（须身份证），观光车另有优惠。公众号「避暑山庄及周围寺庙」可预约。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'puning-temple',
        name: '普宁寺',
        days: 0.5,
        pace: 'slow',
        lat: 41.016,
        lng: 117.958,
        summary:
          '外八庙代表，千手观音像高26米。主殿台阶不多，香火清净，适合第二天上午慢看。',
        tips:
          '与山庄分开购票，成人约60元；60–69半价、70+免票（以当日公示为准）。从山庄出来别硬接，回酒店午休后再去。主殿前台阶可慢上，不必赶讲解全程。小布达拉宫类外庙台阶多，腿脚不便者慎往。秋季层林尽染，摄影佳；夏季带遮阳帽和水。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
    ],
  },
  {
    id: 'gubei-overnight',
    title: '古北水镇 · 司马台可选过夜',
    region: 'huabei',
    seasons: ['autumn', 'winter'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '1–2天',
    transport: '京承高速自驾约2小时；东直门980快+专线可公交到达',
    budgetLabel: '本趟约1200–2500元（门票+住宿浮动大）',
    coverImage:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200',
    summary:
      '北方水乡石板路平缓，夜景与温泉适合父母慢逛。住景区内可午休；次日可选司马台索道登城。秋看叶、冬看灯，返京约2小时。',
    whyFast: '司马台段较险，建议索道上下只走1–10楼一小段即下，勿硬撑全程。',
    researchKeywords: [
      '古北水镇 司马台 过夜',
      '司马台长城 缆车 夜景',
      '古北水镇 淡季 攻略',
    ],
    sources: [
      {
        title: '古北水镇 FAQ',
        url: 'https://m.wtown.com/phone/discover/faq.html',
        kind: 'official',
        note: '门票价格、水镇与司马台关系、老人优惠',
      },
      {
        title: '司马台长城+往返索道票',
        url: 'http://www.wtown.com/pc/ticket/details_83.html',
        kind: 'official',
        note: '日游9:00–17:00，16:10停止检票',
      },
      {
        title: '长城门票+双程索道（水镇内检票）',
        url: 'https://m.wtown.com/phone/ticket/details_124.html',
        kind: 'official',
        note: '60+长城免票但索道另购，开放1–10楼',
      },
      {
        title: '小红书社区检索：古北水镇3刷终于敢出攻略了（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/68832fd90000000010027c02',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
      {
        title: '小红书社区检索：北京周边｜古北水镇2天1晚保姆攻略夜景（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a65df50000000000a03bbcf',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
    ],
    stops: [
      {
        id: 'gubei-water-town',
        name: '古北水镇',
        days: 1,
        pace: 'slow',
        lat: 40.654,
        lng: 117.278,
        summary:
          '汤市街、日月岛沿水慢走，灯光秀与温泉可选。主街平路，累了可坐电瓶车。',
        tips:
          '散客门票约140元，60+优惠（须身份证）。主街无大坡，累了坐电瓶车（购票）。建议住景区内方便午休；夜间比市区低5℃，带外套。水边石板冬春季防滑；停车场小车约25元/次。',
        image:
          'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
      },
      {
        id: 'simatai',
        name: '司马台长城（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 40.662,
        lng: 117.286,
        summary:
          '与水镇为两个景区。务必买往返索道，开放区1–10楼走一小段即可，感受野趣长城。',
        tips:
          '15:00前检票上山，16:10停止检票、16:30清场。60+长城免票但索道另购；风大或恐高别上。水镇+司马台联票规则以 wtown.com 为准。索道上下后仍有一段步道，穿防滑鞋，只走几座敌楼即返。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
  },

  // ── 华北 · 长线慢游 ──────────────────────────────────────────
  {
    id: 'huabei-shanxi-loop',
    title: '晋北古建 · 大同慢住三周',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    fromHome: true,
    daysLabel: '约3周',
    transport: '京藏 G6 自驾出京约4小时，以大同为基地周边日归，结束 G6 回京',
    budgetLabel: '对照月预算约2万（油费+住宿+门票）',
    coverImage:
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200',
    summary:
      '以大同古城为慢游大本营，每天一处古建，每周留2–3个空白日。云冈细品、悬空寺远观、应县木塔外围瞻仰；左云/灵丘作可选县域日归；体力好再南延平遥。三周后自驾回京休整。',
    whyFast:
      '悬空寺与恒山合并一日快览，山下看即可；左云/灵丘可整段删；登临限流且台阶险，节省体力给云冈。',
    researchKeywords: [
      '大同 云冈 自驾 慢游',
      '悬空寺 登不登 攻略',
      '平遥古城 住几天',
    ],
    sources: [
      {
        title: '新华网：云冈实名预约公告',
        url: 'http://www.sx.xinhuanet.com/20241223/e2b5108eb48649aa813de1663e507d3b/c.html',
        kind: 'official',
        note: '60+也须「云冈研究院」小程序预约免票',
      },
      {
        title: '恒山景区购票调整公告',
        url: 'https://dsynews.net/html/42853.html',
        kind: 'official',
        note: '须停游客中心乘摆渡车；登临须预约0元票',
      },
      {
        title: '山西新闻网：悬空寺登临限流',
        url: 'https://www.sxrb.com/content/202603/18/c122644.html',
        kind: 'other',
        note: '每日登临2475张，老人登临亦须抢免费票',
      },
      {
        title: '携程：大同自驾游记参考',
        url: 'https://you.ctrip.com/travels/datong275/4148385.html',
        kind: 'other',
        note: '行程顺序与讲解参考，非官方政策',
      },
    ],
    stops: [
      {
        id: 'datong-base',
        name: '大同（慢游基地）',
        days: 14,
        pace: 'slow',
        lat: 40.076,
        lng: 113.3,
        summary:
          '古城墙、华严寺、善化寺，生活便利。魏都大道或古城附近住，14天不必天天换酒店。',
        tips:
          '选古城或魏都大道中档酒店，房间宽敞、少台阶。每周留2–3天在城内的空白日：逛城墙、吃刀削面、早市买菜。大同早晚温差大，备薄外套。出京走京藏 G6，回京别走京昆河北段（易堵）；别赶夜路。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'yungang',
        name: '云冈石窟',
        days: 1,
        pace: 'slow',
        lat: 40.113,
        lng: 113.137,
        summary:
          '北魏石刻瑰宝，核心区步道平缓有扶手。上午光线好，建议请讲解或租讲解器。',
        tips:
          '须「云冈研究院」微信小程序提前预约（60+免票也要约）。景区内区间车约15元往返，可减少步行。备防滑鞋；窟内禁拍。从大同基地打车或自驾约30分钟，玩半天即可，不必赶全程。',
        image:
          'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
      },
      {
        id: 'hanging-temple',
        name: '悬空寺 + 恒山',
        days: 1,
        pace: 'fast',
        lat: 39.659,
        lng: 113.712,
        summary:
          '一日往返浑源。山下观景台可拍全貌；登临台阶陡窄且每日限流，可山下拍全貌，登临按体力与当日余票决定。',
        tips:
          '车停恒山游客中心，统一摆渡进山。60+入园免但登临须「北岳云游」小程序抢0元登临票（每日仅数百张，难抢）；70+与恐高者建议山下看看就好。恒山可远观即走，别硬登顶。早出发避排队；穿防滑鞋。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
      {
        id: 'yingxian-pagoda',
        name: '应县木塔',
        days: 1,
        pace: 'fast',
        lat: 39.568,
        lng: 113.191,
        summary:
          '世界最高木塔，景区平地好走。外围瞻仰即可，塔内常仅开放一层。',
        tips:
          '60+凭身份证免票（约50元全价）。从大同自驾约1.5小时，建议上午去光线好。顺路可逛净土寺（步行10分钟）。塔内楼梯陡，不必强登高层；停车场约10元/次。2小时足够。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'datong-zuoyun-optional',
        name: '左云日归（可选）',
        days: 1,
        pace: 'fast',
        lat: 40.013,
        lng: 112.707,
        summary: '左云县城边塞浅走；车程预留午休，疲劳整段删。',
        tips: '不排远县连轴。与灵丘勿同日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yungang_Grottoes.jpg/1280px-Yungang_Grottoes.jpg',
      },
      {
        id: 'datong-lingqiu-optional',
        name: '灵丘浅访（可选）',
        days: 1,
        pace: 'fast',
        lat: 39.439,
        lng: 114.234,
        summary: '灵丘县域觉山寺等浅访；石板量力，可整段删。',
        tips: '车程偏长，优先空白日或删除。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%E8%A7%89%E5%B1%B1%E5%AF%BA%E5%A1%94-1.jpg/1280px-%E8%A7%89%E5%B1%B1%E5%AF%BA%E5%A1%94-1.jpg',
      },
      {
        id: 'pingyao-side',
        name: '平遥古城（可选3日）',
        days: 3,
        pace: 'slow',
        lat: 37.189,
        lng: 112.176,
        summary:
          '体力尚可时南延慢逛票号与明清街。古城内青石板平，但禁止车入城。',
        tips:
          '外来车须停城外停车场，再步行或电瓶车进城。选好停车、近城门的客栈。日升昌等票号有门槛台阶，可进内细看也可外观。平遥牛肉、油茶口味清淡。3日慢住后返大同或直接 G6 回京。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
    ],
  },

  // ── 西南 · 云南长线 ──────────────────────────────────────────
  {
    id: 'yunnan-dali-lijiang',
    title: '云南 · 大理慢住丽江快览',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约4–6周',
    transport:
      '飞昆明（或直飞大理），高铁约2小时至大理；环海包车/当地租车；丽江段高铁1.5小时+包车',
    budgetLabel: '对照月预算约2万（含往返机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    summary:
      '飞昆明中转后直奔大理，洱海边慢住三四周——环海选段包车、每天最多一两个点，每周留空白日。体力好时用1–2日快览丽江（优先云杉坪+蓝月谷；大索道海拔高，按身体状况决定）。结束后飞回北京休整。',
    whyFast: '丽江海拔更高、人流更密，适合作为短途高光，不宜长住赶景点。',
    researchKeywords: [
      '大理 长住 短租 退休',
      '大理 丽江 节奏 带父母',
      '沙溪古镇 住宿 推荐',
    ],
    sources: [
      {
        title: 'Wikivoyage：大理',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%A7%E7%90%86',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
      {
        title: 'Wikivoyage：丽江',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%BD%E6%B1%9F',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
      {
        title: '丽江旅游集团：索道购票须知',
        url: 'https://www.ljbbs.com/ljtour/tournews/2025-01-05/74835.html',
        kind: 'official',
        note: '索道预约与海拔分区选择',
      },
      {
        title: '携程：大理中老年慢游（参考）',
        url: 'https://hk.trip.com/moments/detail/dali-city-1445616-143883965/',
        kind: 'other',
        note: '慢住节奏与环海建议，非官方政策',
      },
      {
        title: '小红书：带爸妈旅居大理（参考）',
        url: 'https://www.xiaohongshu.com/explore/6a64bcb50000000005039f24',
        kind: 'xiaohongshu',
        note: '短租节奏与选院要点，非官方政策',
      },
      {
        title: '小红书社区检索：大理小院|房东直租|周租300月租880包水电（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a687e44000000001302c698',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
      {
        title: '小红书社区检索：大理小院|周租350半月550月租800包水电（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a6dc5170000000035014090',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
    ],
    stops: [
      {
        id: 'kunming-transfer',
        name: '昆明（中转）',
        days: 1,
        pace: 'fast',
        lat: 25.038,
        lng: 102.718,
        summary: '翠湖、滇池边平地散步，适应云南气候。不必久留，次日高铁转大理。',
        tips:
          '防晒必备；可尝过桥米线。昆明海拔1890米，一般无高反，但首日仍宜慢走。选近昆明站/昆明南站的酒店，方便次日转高铁。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
      {
        id: 'dali-base',
        name: '大理（慢游基地）',
        days: 21,
        pace: 'slow',
        lat: 25.606,
        lng: 100.267,
        summary:
          '古城外择安静客栈慢住，环洱海选段包车或电瓶车，每天最多一两个点，每周留2–3个空白日。',
        tips:
          '洱海生态廊道全程平坦，走累了随时有休息椅，也可坐共享电瓶车。环海建议包车（约200–300元/天），司机送到景点门口。才村/龙龛一带短租多，建议先订一周试住再续月租；选有电梯、近大理市第一人民医院的客栈，问清是否包水电。三月樱花、十一月红树；紫外线强，避开正午暴晒。龙龛码头发呆、地热国泡温泉都是不错的休息日选择。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'shaxi',
        name: '沙溪古镇（可选）',
        days: 2,
        pace: 'slow',
        lat: 26.317,
        lng: 99.857,
        summary: '茶马古道遗珠，比大理更静，石板路平缓，适合住一晚慢慢逛。',
        tips:
          '从大理包车往返约2小时，不必搬行李。古镇小，半天即可逛完，另留半天休息。适合作为大理慢住期间的换口味短途。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'lijiang-fast',
        name: '丽江 · 玉龙雪山快览',
        days: 2,
        pace: 'fast',
        lat: 26.876,
        lng: 100.229,
        summary:
          '建议优先云杉坪小索道（3240米）+ 蓝月谷（2950米），栈道平缓、风景好。大索道4506米海拔高，须在丽江适应1–2日且无基础病再考虑。',
        tips:
          '索道票在「丽江旅游集团」小程序预约：大索道20:00放次日票，云杉坪21:00放票。60–69门票半价、70+免票。到大理后至少过一周再去丽江，别刚到就上山。备氧气与厚外套；感到气短立即停下吸氧。有基础病或感觉不适时，只逛蓝月谷即可。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
    ],
  },

  // ── 西北 · 丝路长线 ──────────────────────────────────────────
  {
    id: 'xibei-dunhuang-zhangye',
    title: '河西走廊 · 敦煌张掖租车',
    region: 'xibei',
    seasons: ['autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约3周',
    transport:
      '飞敦煌，机场取车自驾（张掖还车或反之）；每日车程控制在3–4小时内，嘉峪关可作中途歇脚',
    budgetLabel: '对照月预算约2万（含租车+机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200',
    summary:
      '飞敦煌取车，大漠与丹霞的经典组合。敦煌慢住看窟（莫高窟务必提前预约），张掖快览七彩丹霞，中间嘉峪关一日歇脚。每周留休息日，干燥多饮水。结束后飞回北京休整。',
    whyFast: '丹霞最佳在日落，半日足够；把体力留给莫高窟细读。',
    researchKeywords: [
      '敦煌 张掖 租车 自驾',
      '莫高窟 预约 攻略',
      '张掖丹霞 观光车 日落',
    ],
    sources: [
      {
        title: '敦煌研究院：2026莫高窟开放公告',
        url: 'http://www.dha.ac.cn/info/1020/7498.htm',
        kind: 'official',
        note: '实名分时预约、老人陪同要求',
      },
      {
        title: '敦煌研究院：莫高窟票务服务',
        url: 'http://www.dha.ac.cn/skxl/mgk.htm',
        kind: 'official',
        note: '60–69优惠票、70+特优票政策',
      },
      {
        title: 'Wikivoyage：敦煌',
        url: 'https://zh.wikivoyage.org/wiki/%E6%95%A6%E7%85%8C',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
      {
        title: 'Wikivoyage：张掖',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BC%A0%E6%8E%96',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
      {
        title: '小红书社区检索：莫高窟需要的联系（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a683838000000001302c79a',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
      {
        title: '小红书社区检索：敦煌莫高窟常规票和应急票的区别（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a669dd1000000000a038f6b',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
    ],
    stops: [
      {
        id: 'dunhuang-base',
        name: '敦煌（慢游基地）',
        days: 10,
        pace: 'slow',
        lat: 40.142,
        lng: 94.662,
        summary:
          '莫高窟建议分两次入场细读，鸣沙山傍晚骑骆驼或乘观光车。每周留1–2个空白日。',
        tips:
          '干燥多饮水，备润唇膏和防尘口罩。选市区近敦煌市人民医院的酒店，减少搬行李。机场距市区约13公里，建议预约酒店接送。鸣沙山不必爬沙，骑骆驼或坐观光车即可。敦煌夜市可逛但别太晚，保证睡眠。',
        image:
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
      },
      {
        id: 'mogao',
        name: '莫高窟',
        days: 1,
        pace: 'slow',
        lat: 40.037,
        lng: 94.809,
        summary:
          '数字展示中心观影+实体洞窟，务必提前在官方渠道预约。上午光线好，建议分两日各看一次。',
        tips:
          '唯一官方预约：「莫高窟参观预约网」微信小程序或 www.mgk.org.cn，可约30天内门票；旺季常早7点放票，可多刷新、别只在页面死磕一次。须在所约时段前30分钟到数字展示中心。60–69岁优惠票、70+特优票均须提前网上预订后窗口取票。抢不到常规票还有应急票但看窟少，仍须陪同。景区有爱心窗口和绿色通道；按预约时段提前到场。别信第三方代抢。咨询电话4008-333-715（仅咨询，不支持电话预约）。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
      {
        id: 'jiayuguan',
        name: '嘉峪关',
        days: 1,
        pace: 'fast',
        lat: 39.773,
        lng: 98.289,
        summary:
          '天下第一雄关，关城步行不多，可作敦煌→张掖中途休息站，不必赶悬壁长城。',
        tips:
          '从敦煌自驾约4–5小时，中途服务区多休息。关城景区平坦；悬壁长城台阶多，可登一段或远观即走。在此住一晚，第二天从容前往张掖。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'zhangye-danxia',
        name: '张掖七彩丹霞',
        days: 1,
        pace: 'fast',
        lat: 38.93,
        lng: 100.088,
        summary:
          '乘区间车串联各观景台，日落时分色彩最艳。全程少步行，半日足够。',
        tips:
          '秋季晴天最佳，建议下午4点后入园等日落。备防风外套，观景台间风大。65+凭身份证通常有门票优惠。游完可在张掖还车，或续住一晚次日飞回。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
    ],
  },

  // ── 东北 · 夏季 ──────────────────────────────────────────────
  {
    id: 'dongbei-changbai-summer',
    title: '长白山 · 林海避暑一周',
    region: 'dongbei',
    seasons: ['summer'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约7天',
    transport: '飞长春或延吉，包车/租车至二道白河',
    budgetLabel: '本趟约8000–12000元',
    coverImage:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
    summary:
      '夏季天池可见概率高，温度凉爽。北坡开发成熟，全程环保大巴串联景点，登顶天池可乘倒站车，节奏轻松。',
    whyFast: '北坡一日靠环保车+倒站车串联天池、瀑布与谷底森林；西坡需爬1442级台阶看天池，体力不够直接跳过。',
    researchKeywords: [
      '长白山北坡 天池 环保车',
      '长白山 倒站车 攻略',
      '二道白河 住宿 温泉',
    ],
    sources: [
      {
        title: '长白山景区购票服务与帮助（吉林省文旅厅转载）',
        url: 'https://www.peopleapp.com/rmharticle/30049944334',
        kind: 'official',
        note: '官方购票渠道、环保大巴与天池主峰车票价格',
      },
      {
        title: '2025长白山购票通道及相关优惠政策',
        url: 'https://cc.bendibao.com/tour/2025811/67107.shtm',
        kind: 'other',
        note: '65周岁及以上免门票，环保车与倒站车票仍须购买',
      },
    ],
    stops: [
      {
        id: 'erdos-baihe',
        name: '二道白河（基地）',
        days: 4,
        pace: 'slow',
        lat: 42.394,
        lng: 128.147,
        summary: '镇上有温泉酒店，可慢逛美人松苑，每日一景。',
        tips:
          '提前7日在「长白山」微信公众号实名预约北坡组合票。备薄羽绒——山顶与镇里温差大。65岁以上免门票，但环保大巴（约85元）与天池倒站车（约80元，视天气开放）仍须购买。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'changbai-north',
        name: '长白山北坡',
        days: 1,
        pace: 'fast',
        lat: 42.058,
        lng: 128.062,
        summary:
          '景区强制乘环保大巴在各站点换乘，瀑布、温泉群、谷底森林均可短停。天池开放时改乘倒站车上主峰，省体力。',
        tips:
          '北坡设施最全：全程大巴循环，不必长距离徒步。天池因天气常临时关闭，关闭时仍可看瀑布与地下森林，勿白跑一趟失望。建议赶早批入园，13:30前停止检票。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'changbai-west',
        name: '长白山西坡（可选）',
        days: 1,
        pace: 'fast',
        lat: 41.996,
        lng: 127.543,
        summary: '看天池全景需爬1442级台阶，体力不够可跳过。',
        tips: '西坡视角开阔但台阶多，膝盖不好者建议只走北坡。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
  },

  // ── 华东 · 春秋 ──────────────────────────────────────────────
  {
    id: 'huadong-hangzhou-suzhou',
    title: '杭州西湖 · 浙江五日',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约5天',
    transport: '高铁至杭州；结束后高铁返京。苏州请走江苏专线「苏州园林 · 南京可选」。',
    budgetLabel: '本趟约4000–6000元',
    coverImage:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200',
    summary:
      '浙江专线：西湖环湖慢走，电瓶车与游船按需衔接，雷峰塔有电梯。可加乌镇一日。苏州园林请点进江苏省路线，两省各有独立主线。',
    researchKeywords: [
      '杭州西湖 环湖 步行 骑行',
      '苏州园林 一日 路线',
      '杭苏 高铁 五日 退休',
    ],
    sources: [
      {
        title: '杭州西湖景区让「无碍」更「有爱」（亚残运会官网）',
        url: 'https://www.hangzhou2022.cn/paragames/xw/ycydt/202310/t20231025_74713.shtml',
        kind: 'official',
        note: '西湖无障碍旅游专线、无障碍游船与电瓶车衔接',
      },
      {
        title: '「无障碍一日游」假期走红（中新网）',
        url: 'http://www.chinanews.com.cn/sh/2025/05-05/10410679.shtml',
        kind: 'other',
        note: '环湖无障碍设施与特需游客线路培育',
      },
    ],
    stops: [
      {
        id: 'hangzhou-west-lake',
        name: '杭州西湖',
        days: 2,
        pace: 'slow',
        lat: 30.243,
        lng: 120.15,
        summary:
          '可走北山街—断桥—白堤等平整路段；也可坐环湖电瓶车或游船串联三潭印月、花港观鱼等。',
        tips:
          '雷峰塔有电梯。春季避开清明高峰；秋季桂花飘香。苏堤可走一段再坐船/电瓶车，不必硬走全程。',
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      },
      {
        id: 'wuzhen-optional',
        name: '乌镇（可选）',
        days: 1,
        pace: 'slow',
        lat: 30.743,
        lng: 120.488,
        summary: '浙江桐乡水乡，高铁或包车一日可往返杭州。',
        tips: '东栅西栅选一即可；石板路防滑鞋；人多就早到。苏州请走江苏专线。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
    ],
  },

  // ── 华南 · 冬季避寒 ──────────────────────────────────────────
  {
    id: 'huanan-xiamen-winter',
    title: '厦门 · 冬日暖海十日',
    region: 'huanan',
    seasons: ['winter'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约10天–2周',
    transport: '飞厦门，市区打车/地铁即可，不必租车；鼓浪屿须提前预约轮渡',
    budgetLabel: '对照月预算约2万（含机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
    summary:
      '冬日均温约15℃，适合父母避寒。环岛路散步、植物园乘观光车、鼓浪屿逛菽庄花园，节奏慢、海鲜鲜，无需赶场。结束后飞回北京休整。',
    researchKeywords: [
      '厦门 过冬 长住 攻略',
      '鼓浪屿 轮渡 路线',
      '南靖土楼 一日 自驾',
    ],
    sources: [
      {
        title: 'Wikivoyage：厦门',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8E%A6%E9%97%A8',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
      {
        title: '厦门园林植物园：园内观光车',
        url: 'https://www.xiamenbg.cn/Home/yyzn6',
        kind: 'official',
        note: '观光车路线与65+半价政策',
      },
      {
        title: '中国旅游报：厦门老人免票游',
        url: 'https://www.ctnews.com.cn/chanye/m/content/2026-01/27/content_183431.html',
        kind: 'other',
        note: '65+鼓浪屿景点免票案例',
      },
      {
        title: '厦门国旅：带老人逛鼓浪屿（参考）',
        url: 'http://www.lovetly.com/article/111386.htm',
        kind: 'other',
        note: '省力路线与避坑，非官方政策',
      },
    ],
    stops: [
      {
        id: 'xiamen-base',
        name: '厦门市区（基地）',
        days: 7,
        pace: 'slow',
        lat: 24.479,
        lng: 118.089,
        summary:
          '思明区或曾厝垵慢住，环岛路平地散步，八市买海鲜，植物园乘观光车看雨林和多肉。',
        tips:
          '冬季带薄外套，海边风大也需防晒。植物园从西门（虎园路25号）进最方便，65+观光车票半价；南门有扶梯至九号节点再换景交车。选近厦门大学附属第一人民医院的酒店，有电梯。每天安排不超过两个点，中间回酒店午休。',
        image:
          'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
      },
      {
        id: 'gulangyu',
        name: '鼓浪屿',
        days: 1,
        pace: 'fast',
        lat: 24.447,
        lng: 118.064,
        summary:
          '乘早班船登岛，逛菽庄花园、港仔后沙滩。避开日光岩登顶，全程平缓路线。',
        tips:
          '船票须提前7–15天在「厦门轮渡有限公司」微信公众号实名预约，35元往返。选三丘田码头登岛，近核心平缓区。无机动车，穿防滑软底鞋。65+凭身份证免费进日光岩、菽庄花园等收费景点；60–64半价。可坐岛上观光接驳车（约50元/人）减少步行。别正午暴晒，上午9点前或下午3点后最舒适。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'nanjing-tulou',
        name: '南靖土楼（可选2日）',
        days: 2,
        pace: 'slow',
        lat: 24.723,
        lng: 117.357,
        summary:
          '一日团或包车看田螺坑「四菜一汤」，可住土楼民宿体验，不必赶所有土楼群。',
        tips:
          '从厦门包车或报团约2.5小时，山路多弯，备晕车药。土楼内台阶和鹅卵石路多，穿防滑鞋。想轻松就只去田螺坑一处，不必连看洪坑、云水谣。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
    ],
  },

  // ── 华中 · 补充 ──────────────────────────────────────────────
  {
    id: 'huazhong-wudang-3d',
    title: '武当山 · 问道三日',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '3天2晚',
    transport: '飞十堰或高铁至武当山西站，景区大巴',
    budgetLabel: '本趟约2500–3500元',
    coverImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    summary:
      '道教圣山，太和索道往返金顶（约85元），太子坡、紫霄宫平缓好走。金顶须分时预约，适合作为文化插段。',
    whyFast: '金顶一日索道上下，山顶风大不宜久留；山下宫观可慢逛两日。',
    researchKeywords: [
      '武当山 索道 金顶 攻略',
      '武当山 分时预约',
      '武当山 太子坡 紫霄宫',
    ],
    sources: [
      {
        title: '武当山景区「双预约」购票操作指南（十堰广电网）',
        url: 'http://syiptv.com/article/show/258974',
        kind: 'official',
        note: '含金顶套票与金顶分时预约三个时段',
      },
      {
        title: '武当山索道票价下调公告（十堰广电网）',
        url: 'https://www.syiptv.com/article/show/333447',
        kind: 'official',
        note: '太和索道双程85元/单程45元，「武当山智慧旅游」小程序购票',
      },
      {
        title: '武当山景区门票价格及优待政策',
        url: 'http://wh.bendibao.com/tour/2024731/181552.shtm',
        kind: 'other',
        note: '60–69岁182元、70岁以上100元（含金顶套票参考价）',
      },
    ],
    stops: [
      {
        id: 'wudang-base',
        name: '武当山镇',
        days: 1,
        pace: 'slow',
        lat: 32.537,
        lng: 111.004,
        summary: '太子坡、紫霄宫，平缓好走，感受道教氛围。',
        tips:
          '至少提前一天在「武当山智慧旅游」小程序购含金顶套票。第一天先逛山下：太子坡转阁、紫霄宫殿宇平坦，景区大巴串联，不必爬山。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
      {
        id: 'wudang-jinding',
        name: '金顶',
        days: 1,
        pace: 'fast',
        lat: 32.401,
        lng: 111.005,
        summary:
          '乘太和索道上下（双程约85元），金殿一览。索道下站至金顶仍有台阶，可慢走多歇。',
        tips:
          '金顶分三个预约时段（7:30–10:00 / 10:00–13:00 / 13:00–16:00），务必按时段到达检票点。山顶风大备外套；法定节假日索道限流，须先预约金顶再购索道票。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
    ],
  },

  // ── 青藏 · 补充 ──────────────────────────────────────────────
  {
    id: 'qingzang-lhasa-slow',
    title: '拉萨 · 高原慢适应两周',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约2–3周',
    transport:
      '飞拉萨，市区包车或跟团；纳木错建议正规一日游（含氧气），勿自驾',
    budgetLabel: '对照月预算约2万（含机票与氧气等）',
    coverImage:
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200',
    summary:
      '飞拉萨后先休息3日适应低氧（前3天勿洗澡），再慢游布达拉宫、大昭寺。纳木错（4718米）仅作一日湖边短停，绝不过夜。选供氧酒店，随身带氧气与血氧仪。结束后飞回北京，至少休整一周再安排下一段。',
    whyFast: '纳木错海拔4718米、那根拉山口5190米，仅作一日快览，不宜过夜；林芝可另排。',
    researchKeywords: [
      '拉萨 六十岁 高原反应',
      '布达拉宫 预约 攻略',
      '纳木错 一日 体力',
    ],
    sources: [
      {
        title: 'Wikivoyage：拉萨',
        url: 'https://zh.wikivoyage.org/wiki/%E6%8B%89%E8%90%A8',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
      {
        title: '西藏文旅厅：布达拉宫线下购票通告',
        url: 'https://wlt.xizang.gov.cn/xwzx_69/tzgg/202507/t20250705_487937.html',
        kind: 'official',
        note: '60+老年人专用窗口预约政策',
      },
      {
        title: '西藏文旅厅：布达拉宫参观指南',
        url: 'https://wlt.xizang.gov.cn/xccx/lytg/202507/t20250727_492008.html',
        kind: 'official',
        note: '预约渠道、票价与参观须知',
      },
      {
        title: '拉萨本地宝：纳木错攻略',
        url: 'http://m.ls.bendibao.com/jingdian/namucuo/',
        kind: 'other',
        note: '海拔4718米与包车参考，非官方政策',
      },
      {
        title: '小红书：带高龄爸妈游西藏（参考）',
        url: 'https://www.xiaohongshu.com/explore/68f2a76700000000040238bd',
        kind: 'xiaohongshu',
        note: '适应节奏与防风保暖，非官方政策',
      },
      {
        title: '小红书社区检索：带高龄爸妈游西藏（上）（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/68f2a76700000000040238bd',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
      {
        title: '小红书社区检索：65岁第一次到西藏，高反后我才知道这5件事（改写参考）',
        url: 'https://www.xiaohongshu.com/explore/6a2f653c000000001101356d',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },
    ],
    stops: [
      {
        id: 'lhasa-rest',
        name: '拉萨（适应期）',
        days: 5,
        pace: 'slow',
        lat: 29.652,
        lng: 91.172,
        summary:
          '抵达后前3天少活动，八廓街短逛、甜茶馆坐坐。选供氧酒店，近西藏自治区人民医院。',
        tips:
          '进藏前做心肺体检，感冒期间禁止进藏。初到3天勿洗热水澡、勿跑跳，动作慢、多饮水；**防风帽**必备，冷风易加重不适。红景天可提前两周起服，便携氧气当地易购。选供氧酒店，随身带血氧仪；血氧低于90%或症状加重立即吸氧。落地首日只短逛八廓街，别排满。每日游览不超过5小时，中间必回酒店休息。附近有西藏自治区人民医院和拉萨市人民医院。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'potala',
        name: '布达拉宫',
        days: 1,
        pace: 'slow',
        lat: 29.657,
        lng: 91.117,
        summary:
          '需提前预约，台阶约300级但可慢走中途休息。适应3–5日后再参观，勿抵达次日就上。',
        tips:
          '微信搜「布达拉宫票务预订系统」小程序，旺季提前10天预约。60+「运用智能技术困难」者可提前一天到门票预订处「老年人专用窗口」现场预约（9:00起，数量有限）。同一微信号可绑2名老人。参观当天提前1小时到正门安检口。布宫与大昭寺别排同一天。台阶多，累了就歇；也可先在雪城外观，再按体力决定是否上楼。景区未授权任何第三方代售，谨防受骗。',
        image:
          'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      },
      {
        id: 'namtso-day',
        name: '纳木错（一日）',
        days: 1,
        pace: 'fast',
        lat: 30.748,
        lng: 91.118,
        summary:
          '海拔4718米（那根拉山口5190米），仅湖边短停拍照即返，不在此过夜。全程约8–10小时。',
        tips:
          '须在拉萨适应至少3–5日后再去；有心脏病/高血压/慢阻肺不建议前往。建议包车或正规一日游（含氧气与保险），单程约4小时。湖边风大，即便夏季也备羽绒服。感到持续呕吐、呼吸困难立即吸氧并下撤。高反明显宁可改去羊卓雍措（海拔较低），别勉强。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
    ],
  },

  // ── 东北 · 冬季看雪 ──────────────────────────────────────────
  {
    id: 'dongbei-harbin-snow-3d',
    title: '哈尔滨 · 看雪三日',
    region: 'dongbei',
    seasons: ['winter'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3天2晚',
    transport: '飞哈尔滨，市区打车/地铁；冰雪大世界有接驳',
    budgetLabel: '本趟约3500–5500元（含机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200',
    summary:
      '冬季北国看雪经典短途：冰雪大世界夜景、中央大街漫步。65岁以上可预约免费观光票；园内商服暖房可随时取暖。',
    whyFast: '冰雪大世界一日为主角，分段逛、冷了进暖房；索菲亚教堂与松花江可合并半日。',
    researchKeywords: [
      '哈尔滨 冰雪大世界 攻略',
      '哈尔滨 中央大街 冬季',
      '哈尔滨 三日 退休旅行',
    ],
    sources: [
      {
        title: '第二十七届哈尔滨冰雪大世界票务政策',
        url: 'https://27th.hrbicesnow.com/',
        kind: 'official',
        note: '65周岁及以上免门票须预约，每日限量2000张',
      },
      {
        title: '哈尔滨冰雪大世界服务升级（官网）',
        url: 'https://ice.hrbicesnow.com/post/detail/30/1981',
        kind: 'official',
        note: '商服暖房免费开放、园区医疗与无障碍设施',
      },
    ],
    stops: [
      {
        id: 'harbin-ice-festival',
        name: '哈尔滨冰雪大世界',
        days: 1,
        pace: 'fast',
        lat: 45.781,
        lng: 126.563,
        summary:
          '晶莹冰雕夜景，老少咸宜。园内商服空间免费开放供暖，可随时进屋休息补体力。',
        tips:
          '65岁以上须在官方微信公众号提前预约免费观光份额并带身份证。穿防滑保暖鞋，贴暖宝宝；不必赶完全场，分段看、多休息。园内地面湿滑，慢走勿跑。',
        image:
          'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
      },
      {
        id: 'central-street',
        name: '中央大街 + 索菲亚教堂',
        days: 1,
        pace: 'slow',
        lat: 45.773,
        lng: 126.622,
        summary: '百年面包石路，欧式建筑与俄式西餐。索菲亚教堂外观打卡，平地为主。',
        tips: '上午人相对少；累了随时进路边商铺取暖。马迭尔冰棍可尝但别贪凉。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'songhua-river',
        name: '松花江 Stalin 公园（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 45.786,
        lng: 126.618,
        summary: '沿江平路看防洪纪念塔，感受冬日江景。体力不够可跳过。',
        tips: '江边风大，戴帽子手套；江面活动视安全公告，勿擅自上冰。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
    ],
  },

  // ── 华南 · 海南暖冬 ──────────────────────────────────────────
  {
    id: 'huanan-sanya-winter',
    title: '三亚 · 暖冬慢住两周',
    region: 'huanan',
    seasons: ['winter'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约2周',
    transport: '飞三亚凤凰机场，市区/海棠湾打车',
    budgetLabel: '对照月预算约2万（含机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
    summary:
      '冬季均温约22℃，中国气象服务协会「优」级避寒城市。椰梦长廊、亚龙湾慢走，抵琼后留适应期再加大活动量。',
    whyFast: '蜈支洲岛或南山寺可各排一日快览；主体时间在湾畔慢住、晒太阳。',
    researchKeywords: [
      '三亚 避寒 退休 冬季',
      '三亚 两周 慢住',
      '三亚 亚龙湾 行程',
    ],
    sources: [
      {
        title: '今冬避寒康养好去处推荐之海南篇（中国天气网）',
        url: 'https://www.weather.com.cn/hainan/zyqxxx/01/4039323.shtml',
        kind: 'official',
        note: '三亚冬季均温22.5℃、避寒气候良好等级',
      },
      {
        title: '三亚入选「避寒旅游」气象旅游指数定标城市',
        url: 'https://www.sanyarb.com.cn/sanyazonghe/2024/12/20/detail_20241220425502.html',
        kind: 'official',
        note: '优级避寒旅游城市，空气质量与负氧离子数据',
      },
      {
        title: '「候鸟」老人三亚过冬：警惕脑梗风险（海南健康网）',
        url: 'https://www.ehnjk.com/article/11563.html',
        kind: 'other',
        note: '南北温差大，建议1–3天室内适应、渐进加活动量',
      },
    ],
    stops: [
      {
        id: 'sanya-base',
        name: '三亚湾/大东海（慢住基地）',
        days: 10,
        pace: 'slow',
        lat: 18.252,
        lng: 109.512,
        summary: '选近海、电梯房短租或酒店，椰梦长廊傍晚散步，早上海边晒太阳。',
        tips:
          '落地后前3天以静养为主，别一上来就暴晒暴走——南北温差大，有高血压须防血压波动。备薄外套，强冷空气时最低可至11–15℃。选正规酒店或公寓，关注卫健备案。',
        image:
          'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
      },
      {
        id: 'yalong-bay',
        name: '亚龙湾 · 滨海慢走',
        days: 2,
        pace: 'slow',
        lat: 18.231,
        lng: 109.646,
        summary: '沙细水清，滨海栈道平坦，适合慢慢走、找荫凉处歇脚。',
        tips: '中午紫外线强，10:00前或16:00后出行；带遮阳帽与补水。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'nanshan-optional',
        name: '南山文化旅游区（可选1日）',
        days: 1,
        pace: 'fast',
        lat: 18.298,
        lng: 109.206,
        summary: '海上观音壮观，景区有观光车，可远观为主不必全程步行。',
        tips: '景区面积大，买观光车票；穿舒适鞋，带干粮水。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
    ],
  },

  // ── 西南 · 成都慢住 ──────────────────────────────────────────
  {
    id: 'xinan-chengdu-slow',
    title: '成都 · 平原慢住两周',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约2–3周',
    transport: '飞成都双流/天府机场，市区地铁+打车',
    budgetLabel: '对照月预算约2万（含机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    summary:
      '成都平原地势平、节奏慢，大熊猫基地、人民公园喝茶、博物馆空调足。每天1–2个景点，下午回酒店歇。',
    whyFast: '熊猫基地与都江堰各排一日快览；市区以慢游为主，宽窄巷子浅逛即可。',
    researchKeywords: [
      '成都 慢游 两周 退休',
      '成都 熊猫基地 攻略',
      '成都 宽窄巷子 人民公园',
    ],
    sources: [
      {
        title: '成都大熊猫繁育研究基地（官方）',
        url: 'https://www.panda.org.cn/',
        kind: 'official',
        note: '入园时间、观光车与无障碍通道以官网为准',
      },
      {
        title: '带老人去成都适合景点（公开攻略参考）',
        url: 'https://detail.makepolo.com/info/scly/63800.html',
        kind: 'other',
        note: '人民公园、博物馆、熊猫基地省力走法',
      },
    ],
    stops: [
      {
        id: 'chengdu-base',
        name: '成都市区（慢游基地）',
        days: 10,
        pace: 'slow',
        lat: 30.659,
        lng: 104.065,
        summary: '选一环内电梯酒店，人民公园喝盖碗茶，成都博物馆吹空调看展。',
        tips:
          '宽窄巷子、锦里宜上午9点前或傍晚浅逛，人多即撤。饮食选清淡——豆花、抄手，少辣。每天下午留3小时回酒店午睡。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'panda-base',
        name: '大熊猫繁育研究基地',
        days: 1,
        pace: 'fast',
        lat: 30.734,
        lng: 104.144,
        summary: '早8点到，熊猫进食最活跃。进园买观光车票，优先看别墅与幼年活动区。',
        tips:
          '熊猫基地路况平缓，可买观光车票。不必刷完全部场馆，看够即回。下午2点后人少，也可选此时段。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
      {
        id: 'dujiangyan-optional',
        name: '都江堰（可选1日）',
        days: 1,
        pace: 'fast',
        lat: 31.008,
        lng: 103.605,
        summary: '千年水利工程，园区有观光车，平地多，可感受古人智慧。',
        tips: '离市区约1小时车程，包车或跟团省心；台阶不多但须久站，带折叠凳。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
    ],
  },
];
