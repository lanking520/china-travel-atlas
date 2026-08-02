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
      'https://images.unsplash.com/photo-1508804185872-d83badb8660a?w=1200',
    summary:
      '坡度较缓、人流少于八达岭，适合父母慢慢登城。建议早出发，午后返京休息。',
    stops: [
      {
        id: 'mutianyu',
        name: '慕田峪长城',
        days: 1,
        pace: 'slow',
        lat: 40.4319,
        lng: 116.5704,
        summary: '可乘缆车上下，保存较好，敌楼密集。秋日银杏与长城同框极美。',
        tips: '穿防滑鞋；备外套山顶风大；老人可只走一段即返。',
        image:
          'https://images.unsplash.com/photo-1508804185872-d83badb8660a?w=800',
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
    transport: '高铁约30分钟，或自驾约2小时',
    budgetLabel: '本趟约500–900元',
    coverImage:
      'https://images.unsplash.com/photo-1599579849276-a3d692abe185?w=1200',
    summary:
      '五大道洋楼、意式风情区、海河夜景。平地为主，节奏轻松，适合周末换口味。',
    stops: [
      {
        id: 'wudadao',
        name: '五大道',
        days: 0.5,
        pace: 'slow',
        lat: 39.117,
        lng: 117.195,
        summary: '万国建筑博览，可乘马车或步行，树荫多。',
        tips: '上午光线好，下午转意风区。',
      },
      {
        id: 'haihe',
        name: '海河沿线',
        days: 0.5,
        pace: 'slow',
        lat: 39.128,
        lng: 117.19,
        summary: '傍晚沿河散步，看桥梁与灯光，可河边晚餐。',
        image:
          'https://images.unsplash.com/photo-1599579849276-a3d692abe185?w=800',
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
    transport: '自驾约3小时，或高铁至承德南站再打车',
    budgetLabel: '本趟约1500–2200元',
    coverImage:
      'https://images.unsplash.com/photo-1547981609-4c991a471551?w=1200',
    summary:
      '皇家园林避暑胜地，湖区平坦好走。可联游普宁寺，感受外八庙气势。',
    stops: [
      {
        id: 'bishu-shanzhuang',
        name: '避暑山庄',
        days: 1,
        pace: 'slow',
        lat: 40.991,
        lng: 117.938,
        summary: '分宫殿区与湖区，建议乘电瓶车，少走陡坡。',
        tips: '带遮阳帽；秋季层林尽染，摄影佳。',
        image:
          'https://images.unsplash.com/photo-1547981609-4c991a471551?w=800',
      },
      {
        id: 'puning-temple',
        name: '普宁寺',
        days: 0.5,
        pace: 'slow',
        lat: 41.016,
        lng: 117.958,
        summary: '千手观音像庄严，台阶不多，香火清净。',
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
    transport: '自驾约2小时，景区有接驳',
    budgetLabel: '本趟约1200–2500元（含住宿浮动大）',
    coverImage:
      'https://images.unsplash.com/photo-1518105770772-7edf0af8b036?w=1200',
    summary:
      '水镇夜景与温泉适合慢逛；体力好者可次日登司马台长城，感受野趣。',
    whyFast: '司马台段较险，建议仅快览精华敌楼即下，勿硬撑全程。',
    stops: [
      {
        id: 'gubei-water-town',
        name: '古北水镇',
        days: 1,
        pace: 'slow',
        lat: 40.654,
        lng: 117.278,
        summary: '石板街、温泉、灯光秀。景区内酒店步行可达，老人友好。',
        tips: '冬季注意防滑；可订景区内温泉酒店。',
        image:
          'https://images.unsplash.com/photo-1518105770772-7edf0af8b036?w=800',
      },
      {
        id: 'simatai',
        name: '司马台长城（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 40.662,
        lng: 117.286,
        summary: '险峻雄奇，可乘缆车。仅走东段几座敌楼即可。',
        tips: '风大勿勉强；与水镇联票需提前确认开放时间。',
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
    transport: '自驾出京，大同为基地，周边日归',
    budgetLabel: '对照月预算约2万（油费+住宿+门票）',
    coverImage:
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200',
    summary:
      '以大同为慢游大本营，每日一处古建或自然，中间留空白日。云冈、悬空寺、应县木塔快览串联。',
    whyFast: '悬空寺与恒山可合并一日快览，节省体力给云冈石窟细品。',
    stops: [
      {
        id: 'datong-base',
        name: '大同（慢游基地）',
        days: 14,
        pace: 'slow',
        lat: 40.076,
        lng: 113.3,
        summary: '古城墙、华严寺，生活便利。每周留2–3个休息日。',
        tips: '选古城附近酒店，减少搬行李。',
      },
      {
        id: 'yungang',
        name: '云冈石窟',
        days: 1,
        pace: 'slow',
        lat: 40.113,
        lng: 113.137,
        summary: '北魏石刻瑰宝，建议请讲解，上午参观光线好。',
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
        summary: '一日往返，悬空寺排队可早到。恒山可远观即走。',
        tips: '恐高者慎入悬空寺内部。',
      },
      {
        id: 'yingxian-pagoda',
        name: '应县木塔',
        days: 1,
        pace: 'fast',
        lat: 39.568,
        lng: 113.191,
        summary: '世界最高木塔，外围瞻仰即可，内部常不开放。',
      },
      {
        id: 'pingyao-side',
        name: '平遥古城（可选3日）',
        days: 3,
        pace: 'slow',
        lat: 37.189,
        lng: 112.176,
        summary: '若体力尚可，可南行慢逛票号与城墙，体验晋商文化。',
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
    transport: '飞昆明，高铁/包车至大理；丽江段可一日往返',
    budgetLabel: '对照月预算约2万（含往返机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1547981609-4c991a471551?w=1200',
    summary:
      '昆明中转后直奔大理，洱海边慢住三四周。体力好时用1–2日快览丽江玉龙雪山。',
    whyFast: '丽江海拔更高、人流更密，适合作为短途高光，不宜长住赶景点。',
    stops: [
      {
        id: 'kunming-transfer',
        name: '昆明（中转）',
        days: 1,
        pace: 'fast',
        lat: 25.038,
        lng: 102.718,
        summary: '翠湖、滇池边散步，适应高原气候。',
        tips: '防晒必备；可尝过桥米线。',
      },
      {
        id: 'dali-base',
        name: '大理（慢游基地）',
        days: 21,
        pace: 'slow',
        lat: 25.606,
        lng: 100.267,
        summary: '古城外择安静客栈，环洱海选段骑行或包车，节奏自定。',
        tips: '三月樱花、十一月红树；避免正午暴晒。',
        image:
          'https://images.unsplash.com/photo-1547981609-4c991a471551?w=800',
      },
      {
        id: 'shaxi',
        name: '沙溪古镇（可选）',
        days: 2,
        pace: 'slow',
        lat: 26.317,
        lng: 99.857,
        summary: '茶马古道遗珠，比大理更静，适合住一晚。',
      },
      {
        id: 'lijiang-fast',
        name: '丽江 · 玉龙雪山快览',
        days: 2,
        pace: 'fast',
        lat: 26.876,
        lng: 100.229,
        summary: '乘大索道至4506米平台，蓝月谷步行平缓。勿在丽江长赶。',
        tips: '备氧气与厚外套；老人高反慎上索道。',
        image:
          'https://images.unsplash.com/photo-1508804185872-d83badb8660a?w=800',
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
    transport: '飞敦煌，张掖还车或反之；段内自驾',
    budgetLabel: '对照月预算约2万（含租车+机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200',
    summary:
      '大漠与丹霞的经典组合。敦煌慢住看窟，张掖快览七彩丹霞，中间嘉峪关一日。',
    whyFast: '丹霞最佳在日落，半日足够；把体力留给莫高窟细读。',
    stops: [
      {
        id: 'dunhuang-base',
        name: '敦煌（慢游基地）',
        days: 10,
        pace: 'slow',
        lat: 40.142,
        lng: 94.662,
        summary: '莫高窟需预约，建议分两次入场。鸣沙山傍晚骑骆驼或步行。',
        tips: '干燥多饮水；防尘口罩有用。',
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
        summary: '数字展示中心+实体洞窟，务必提前预约。',
      },
      {
        id: 'jiayuguan',
        name: '嘉峪关',
        days: 1,
        pace: 'fast',
        lat: 39.773,
        lng: 98.289,
        summary: '天下第一雄关，关城步行不多，可作中途休息站。',
      },
      {
        id: 'zhangye-danxia',
        name: '张掖七彩丹霞',
        days: 1,
        pace: 'fast',
        lat: 38.93,
        lng: 100.088,
        summary: '乘区间车各观景台，日落时分色彩最艳。',
        tips: '秋季晴天最佳；备防风外套。',
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
    tripType: 'short',
    fromHome: false,
    daysLabel: '约7天',
    transport: '飞长春或延吉，包车/租车至二道白河',
    budgetLabel: '本趟约8000–12000元',
    coverImage:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
    summary:
      '夏季天池可见概率高，温度凉爽。北坡开发成熟，老人可乘环保车少步行。',
    stops: [
      {
        id: 'erdos-baihe',
        name: '二道白河（基地）',
        days: 4,
        pace: 'slow',
        lat: 42.394,
        lng: 128.147,
        summary: '镇上有温泉酒店，可慢逛美人松苑，每日一景。',
        tips: '备薄羽绒，山顶温差大。',
      },
      {
        id: 'changbai-north',
        name: '长白山北坡',
        days: 1,
        pace: 'fast',
        lat: 42.058,
        lng: 128.062,
        summary: '看天池、瀑布、谷底森林，全程环保车+短步行。',
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
        summary: '看天池全景需爬台阶，体力不够可跳过。',
      },
    ],
  },

  // ── 华东 · 春秋 ──────────────────────────────────────────────
  {
    id: 'huadong-hangzhou-suzhou',
    title: '江南 · 杭苏园林五日',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约5天',
    transport: '高铁至杭州，城际至苏州',
    budgetLabel: '本趟约4000–6000元',
    coverImage:
      'https://images.unsplash.com/photo-1529928520614-0b6b3a5ae0f0?w=1200',
    summary:
      '西湖慢走、苏堤春晓或断桥残雪；苏州拙政园、平江路，平地少台阶，适合父母。',
    stops: [
      {
        id: 'hangzhou-west-lake',
        name: '杭州西湖',
        days: 2,
        pace: 'slow',
        lat: 30.243,
        lng: 120.15,
        summary: '环湖选段，可乘船或电瓶车。雷峰塔有电梯。',
        tips: '春季避开清明高峰；秋季桂花飘香。',
        image:
          'https://images.unsplash.com/photo-1529928520614-0b6b3a5ae0f0?w=800',
      },
      {
        id: 'suzhou-gardens',
        name: '苏州拙政园 + 平江路',
        days: 2,
        pace: 'slow',
        lat: 31.324,
        lng: 120.629,
        summary: '园林移步换景，宜上午入园。平江路沿河喝茶。',
      },
      {
        id: 'tongli-optional',
        name: '同里古镇（可选）',
        days: 1,
        pace: 'slow',
        lat: 31.16,
        lng: 120.723,
        summary: '比周庄更静，可住一晚听评弹。',
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
    transport: '飞厦门，市区打车/公交即可',
    budgetLabel: '对照月预算约2万（含机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
    summary:
      '15℃左右，适合避寒。鼓浪屿、环岛路、植物园，节奏慢、海鲜鲜，无需赶场。',
    stops: [
      {
        id: 'xiamen-base',
        name: '厦门市区（基地）',
        days: 7,
        pace: 'slow',
        lat: 24.479,
        lng: 118.089,
        summary: '曾厝垵或思明区住，环岛路散步，八市买海鲜。',
        tips: '冬季带薄外套；海边风大。',
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
        summary: '乘早班船，逛菽庄花园、日光岩（可不上顶）。',
        tips: '无机动车，全程步行，穿软底鞋。',
      },
      {
        id: 'nanjing-tulou',
        name: '南靖土楼（可选2日）',
        days: 2,
        pace: 'slow',
        lat: 24.723,
        lng: 117.357,
        summary: '一日团或包车，看田螺坑四菜一汤，住土楼民宿体验。',
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
      '道教圣山，索道上下金顶，减少爬山。适合作为长线中的文化插段。',
    stops: [
      {
        id: 'wudang-base',
        name: '武当山镇',
        days: 1,
        pace: 'slow',
        lat: 32.537,
        lng: 111.004,
        summary: '太子坡、紫霄宫，平缓好走，感受道教氛围。',
      },
      {
        id: 'wudang-jinding',
        name: '金顶',
        days: 1,
        pace: 'fast',
        lat: 32.401,
        lng: 111.005,
        summary: '乘索道上下，金殿一览。山顶风大备外套。',
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
    transport: '飞拉萨，市区包车或跟团',
    budgetLabel: '对照月预算约2万（含机票与氧气等）',
    coverImage:
      'https://images.unsplash.com/photo-1544735716-392fe8d79f83?w=1200',
    summary:
      '抵达后先休息3日适应低氧。布达拉宫、大昭寺、纳木错（一日），绝不赶程。',
    whyFast: '纳木错海拔高，仅作一日快览，不宜过夜；林芝可另排。',
    stops: [
      {
        id: 'lhasa-rest',
        name: '拉萨（适应期）',
        days: 5,
        pace: 'slow',
        lat: 29.652,
        lng: 91.172,
        summary: '前两天少活动，八廓街短逛，喝甜茶。',
        tips: '遵医嘱备红景天；勿洗热水澡太久。',
      },
      {
        id: 'potala',
        name: '布达拉宫',
        days: 1,
        pace: 'slow',
        lat: 29.657,
        lng: 91.117,
        summary: '需提前预约，台阶多但可慢走，中途可休息。',
        image:
          'https://images.unsplash.com/photo-1544735716-392fe8d79f83?w=800',
      },
      {
        id: 'namtso-day',
        name: '纳木错（一日）',
        days: 1,
        pace: 'fast',
        lat: 30.748,
        lng: 91.118,
        summary: '海拔4718米，仅湖边短停拍照即返，不在此过夜。',
        tips: '高反者慎往；带氧气。',
      },
    ],
  },
];
