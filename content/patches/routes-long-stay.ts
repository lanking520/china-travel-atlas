import type { Route } from '../types';

/**
 * 长居/慢居城市基地：空气相对清新 + 周边自然/短途日归丰富。
 * 约三四周节奏；非特种兵清单。证据：multi-discovery + Wikivoyage/文旅骨架。
 */
export const patchRoutes: Route[] = [
  // ── 大理 ──────────────────────────────────────────────────
  {
    id: 'longstay-dali',
    title: '大理 · 洱海慢居约一个月',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    themes: ['long-stay'],
    daysLabel: '约一个月',
    transport:
      '北京飞大理（或经昆明转），住下洱海侧电梯短租；环海/沙溪包车日归；段末大理或昆明飞回北京',
    budgetLabel:
      '对照月预算约1.5–2万（短租电梯房+机票+每周1–2次包车日归；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    summary:
      '长居首选之一：苍洱之间空气明显好于华北城区，平缓廊道与小镇日归够撑三四周。以才村/龙龛一带为基地，每周最多两三个半日点，留空白日晒太阳喝茶；丽江雪山另线，不硬塞进本月。',
    introduction:
      '把大理当「第二居所」而不是景点打卡：固定电梯短租，熟悉菜市场与州医院方位，再慢慢扩日归半径。才村/龙龛一带湖岸安静、补给齐全，比古城石板夜场更适合约一个月节奏。\n\n空气与紫外线并存——防晒与早晚外套比口罩更常用。海拔约1900m，头两天放慢；多数人无明显高反，但仍忌抵达当日环海骑行。\n\n白族文化浅尝即可：喜洲古镇与扎染作坊半日、三月街/本主节若遇可旁观，勿排满民俗特种兵。周边自然：洱海生态廊道、双廊外观、苍山索道量力、沙溪茶马古道周末过夜可选。丽江雪山另线，不硬塞进本月。',
    seasonGuide:
      '春秋最宜长居。夏季游客与雨季湿滑增多；冬季干冷、部分湖岸风大。暑热与雨季可缩短停留或改昆明中转休整。',
    notices: [
      '短租先试住一周再续；问清电梯、热水与退租规则。',
      '环海骑行量力，父母优先电瓶车/包车选段；勿一日环海。',
      '菌类与生冷野菜遵当地安全提示；少饮酒。',
      '段末预留弹性回程机票，高原感不适可提前下撤昆明。',
      '紫外线强，备防晒与遮阳帽；早晚温差备薄外套。',
    ],
    researchKeywords: [
      '大理 长住 父母',
      '大理 洱海 短租 电梯',
      '大理 空气质量 慢居',
      '沙溪 周末 包车',
    ],
    sources: [
      {
        title: 'Wikivoyage：大理',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%A7%E7%90%86',
        kind: 'other',
        note: '进出、洱海与古城节奏概览，已改写',
      },
      {
        title: '大理白族自治州人民政府',
        url: 'https://www.dali.gov.cn/',
        kind: 'official',
        note: '文旅与交通公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'ls-dali-base',
        name: '大理慢居基地（才村/龙龛一带）',
        days: 16,
        pace: 'slow',
        lat: 25.606,
        lng: 100.267,
        summary:
          '固定电梯短租，熟悉超市与散步路线；每周至少两天完全空白。',
        tips: '优先湖岸安静带，少搬运行李。近州医院更安心。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'ls-erhai-days',
        name: '洱海选段日归',
        days: 6,
        pace: 'slow',
        lat: 25.7,
        lng: 100.2,
        summary:
          '分散在四周里：喜洲、双廊或生态廊道各半日，勿一天跑完。',
        tips: '包车优于自驾疲劳；防晒与饮水。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'ls-cangshan-optional',
        name: '苍山索道（量力）',
        days: 2,
        pace: 'fast',
        lat: 25.68,
        lng: 100.14,
        summary: '索道观景即可，不安排高强度徒步。',
        tips: '高原感明显则改平路廊道。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'ls-shaxi-weekend',
        name: '沙溪周末浅住（可选）',
        days: 3,
        pace: 'slow',
        lat: 26.32,
        lng: 99.85,
        summary: '古镇平缓散步，换一换节奏后回大理基地。',
        tips: '山路夜间少赶；可整段删除。',
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      },
    ],
  },

  // ── 昆明 ──────────────────────────────────────────────────
  {
    id: 'longstay-kunming',
    title: '昆明 · 春城慢居约一个月',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'winter'],
    tripType: 'long',
    fromHome: false,
    themes: ['long-stay'],
    daysLabel: '约一个月',
    transport:
      '北京直飞长水；住翠湖/呈贡或机场可达电梯公寓；石林/安宁/抚仙湖等地包车或大巴日归；段末飞回北京',
    budgetLabel:
      '对照月预算约1.4–1.9万（短租+机票+周边日归；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
    summary:
      '「四季如春」的枢纽型长居：医疗与补给完善，空气与温差通常好于华北冬季。以市区公园步道为主节奏，穿插石林、抚仙湖、安宁温泉等日归；不把昆明当仅中转，也不硬塞滇西高原线。',
    introduction:
      '昆明适合「想长居又不想远离三甲医院」的父母：电梯公寓、菜市场与公园体系完整，也是西南进出与就医下撤枢纽。城区仍有车流扬尘，选翠湖/呈贡等绿化好的居住带、避开施工扬尘路段。\n\n「春城」温差仍在：早晚外套、正午防晒。海拔约1900m，一般无高反，但首日宜慢走。博物馆、翠湖与公园步道撑起空白日，不必天天出城。\n\n周边自然日归半径大：石林观光车、抚仙湖沿岸散步、西山索道量力、安宁温泉休整。滇西大理/丽江另作专题，本月以昆明盆地与近郊为主，勿把本卡当滇西特种兵中转站。',
    seasonGuide:
      '春秋冬皆可长居。夏季阵雨与紫外线仍强。冬季干暖相对华北舒适，注意昼夜温差。',
    notices: [
      '长水机场往返预留拥堵时间。',
      '石林景区步行距离不短，用观光车串联。',
      '野生菌季遵官方安全提示；少饮酒。',
      '雾霾偶发日改室内博物馆/茶馆。',
      '复杂就医优先主城三甲；短租先一周试住再续。',
    ],
    researchKeywords: [
      '昆明 长住 退休',
      '昆明 空气 短租',
      '抚仙湖 日归 父母',
      '石林 观光车',
    ],
    sources: [
      {
        title: 'Wikivoyage：昆明',
        url: 'https://zh.wikivoyage.org/wiki/%E6%98%86%E6%98%8E',
        kind: 'other',
        note: '城市与近郊概览，已改写',
      },
      {
        title: '昆明市文化和旅游局',
        url: 'https://whhly.km.gov.cn/',
        kind: 'official',
        note: '景区与文旅公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'ls-kunming-base',
        name: '昆明慢居基地',
        days: 18,
        pace: 'slow',
        lat: 25.038,
        lng: 102.718,
        summary:
          '翠湖周边或呈贡安静小区；每天公园散步即可，不必赶景点。',
        tips: '近三甲医院片区更安心；备薄外套。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'ls-dianchi-xishan',
        name: '滇池/西山浅走',
        days: 3,
        pace: 'slow',
        lat: 24.85,
        lng: 102.65,
        summary: '湖岸平路与索道二选一，分散在不同周。',
        tips: '风大备外套；索道恐高可只走平路。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'ls-shilin-day',
        name: '石林日归',
        days: 2,
        pace: 'fast',
        lat: 24.82,
        lng: 103.32,
        summary: '观光车为主，短段步行即可。',
        tips: '暑热日早出早归。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'ls-fuxian-optional',
        name: '抚仙湖/安宁（可选）',
        days: 4,
        pace: 'slow',
        lat: 24.5,
        lng: 102.9,
        summary: '湖岸或温泉休整，可不过夜。',
        tips: '可整段删，留给更多空白日。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
  },

  // ── 阳朔（已从长居降级：无本地三甲 → 桂林枢纽短腿）────────
  {
    id: 'longstay-yangshuo',
    title: '阳朔 · 漓江山水短住',
    region: 'huanan',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约5–7天',
    transport:
      '北京飞桂林两江；高铁/包车至阳朔住镇数日；漓江游船、遇龙河竹筏、兴坪/画廊量力日归；段末经桂林飞回北京。就医/大采购以桂林市区为下撤枢纽',
    budgetLabel:
      '本趟约3500–6000元（机票+阳朔电梯民宿+游船/包车；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    summary:
      '【非长居推荐】阳朔山水适合一周内慢短住，不是与昆明同级的月租基地：本地无三甲、镇区物资中等。医疗与大采购下撤桂林；真要约一个月请走「桂林·漓江慢居枢纽」。更长漓江节奏见「桂林阳朔·漓江慢住」。',
    introduction:
      '本卡从「长居」降级为山水短腿：喀斯特仍值得来，但站立门槛（本地三甲+物资深度）不过关，不宜与昆明级基地并列「长居推荐」。\n\n节奏：阳朔镇区或稍离西街的电梯民宿连住数日；漓江正规游船一次、遇龙河竹筏短段量力、十里画廊/兴坪电瓶车半日。攀岩、特种兵骑行与夜场不排。雨天改茶馆空白。\n\n枢纽诚实：进出港与就医下撤用桂林（约1–1.5小时）。约一个月以桂林市区为锚，走「桂林·漓江慢居枢纽」；两三周漓江主线见「桂林阳朔·漓江慢住」。',
    seasonGuide:
      '春秋最舒适。夏季湿热与暴雨宜缩短；冬季阴冷潮湿。台风外围偶发，关注预警。',
    notices: [
      '【已降级】非「长居推荐」；本地无三甲→桂林下撤；月租请走 base-guilin。',
      '游船/竹筏选正规票点，备救生衣与防滑鞋。',
      '雨后山路湿滑，日归改室内或茶馆。',
      '桂林两江机场往返预留堵车与接驳时间。',
      '避开西街夜噪带；短住不必先订满月。',
    ],
    researchKeywords: [
      '阳朔 父母 漓江',
      '遇龙河 竹筏 适老',
      '阳朔 短住 桂林',
      '漓江 游船 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：阳朔',
        url: 'https://zh.wikivoyage.org/wiki/%E9%98%B3%E6%9C%94',
        kind: 'other',
        note: '漓江与镇区节奏概览，已改写',
      },
      {
        title: '桂林市文化广电和旅游局',
        url: 'https://wglj.guilin.gov.cn/',
        kind: 'official',
        note: '景区开放以官方为准',
      },
    ],
    stops: [
      {
        id: 'ls-yangshuo-base',
        name: '阳朔镇区短住',
        days: 3,
        pace: 'slow',
        lat: 24.778,
        lng: 110.496,
        summary: '稍离西街的电梯民宿；空白日喝茶即可。',
        tips: '记桂林下撤路线；备雨具。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'ls-lijiang-boat',
        name: '漓江游船选段',
        days: 1,
        pace: 'slow',
        lat: 24.9,
        lng: 110.4,
        summary: '正规游船观景一次即可，不重复打卡。',
        tips: '早班人少；甲板风大备外套。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'ls-yulong-raft',
        name: '遇龙河竹筏（量力）',
        days: 1,
        pace: 'fast',
        lat: 24.75,
        lng: 110.45,
        summary: '短段竹筏，湿滑小心上下。',
        tips: '膝关节不好可改电瓶车观景。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'ls-xingping-day',
        name: '兴坪/十里画廊日归',
        days: 1,
        pace: 'slow',
        lat: 24.92,
        lng: 110.55,
        summary: '电瓶车或包车浅逛，不必徒步全程。',
        tips: '可删留给空白日。',
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      },
    ],
  },

  // ── 威海 ──────────────────────────────────────────────────
  {
    id: 'longstay-weihai',
    title: '威海 · 海岸慢居约一个月',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    fromHome: false,
    themes: ['long-stay'],
    daysLabel: '约一个月',
    transport:
      '北京高铁经济南/青岛至威海，或飞威海/烟台再短驳；住海边或市区电梯公寓；刘公岛、成山头、乳山等日归；段末高铁或飞机回北京',
    budgetLabel:
      '对照月预算约1.3–1.8万（短租+交通+船票日归；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    summary:
      '胶东「空气口碑」海岸长居：节奏慢、海鲜清淡、平缓滨海步道适合约60父母。以威海市区/环翠为基地，刘公岛日归，荣成成山头与乳山银滩作县域可选日归；文登温泉可作空白休整。青岛只作中转。',
    introduction:
      '威海长期出现在宜居与空气相关公开讨论中，相对华北内陆城区更适合夏秋慢住。以环翠海边电梯公寓为锚，滨海步道与公园撑起日常；海风大、紫外线强，防晒与防风比「赶景点」更重要。\n\n胶东海洋文化浅尝：刘公岛日归看近代史与海景，渔港早市买菜，海鲜以清蒸为主。青岛只作中转，不把本月塞成半岛特种兵。\n\n县域：荣成（成山头/浅湾）、乳山（银滩外观）分周日归，勿一日连轴；文登温泉可留空白日。泰山式登山与刺激海上项目不排本线。',
    seasonGuide:
      '夏秋最佳。冬季干冷风大，非刚需可不排长居。暑期周末景区拥堵，错峰订船票。',
    notices: [
      '海鲜适量，肠胃敏感改清蒸河鲜/蔬菜；高血压控盐。',
      '轮渡关注大风停航。',
      '荣成与乳山分日，疲劳即删。',
      '回京高铁票预留弹性。',
      '复杂就医可转青岛或济南三甲。',
    ],
    researchKeywords: [
      '威海 长住 空气',
      '威海 退休 慢游',
      '刘公岛 轮渡 父母',
      '荣成 成山头 日归',
      '乳山 银滩 适老',
      '威海 短租 海边',
    ],
    sources: [
      {
        title: 'Wikivoyage：威海',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A8%81%E6%B5%B7',
        kind: 'other',
        note: '海岸与进出概览，已改写',
      },
      {
        title: '威海市文化和旅游局',
        url: 'https://whlyj.weihai.gov.cn/',
        kind: 'official',
        note: '景区与船票公告以官方为准',
      },
      {
        title: '地级深挖：威海县域',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A8%81%E6%B5%B7',
        kind: 'other',
        note: 'research/notes/prefecture-depth/shandong-weihai.md',
      },
    ],
    stops: [
      {
        id: 'ls-weihai-base',
        name: '环翠慢居基地',
        days: 16,
        pace: 'slow',
        lat: 37.513,
        lng: 122.12,
        summary: '环翠/海边电梯公寓；每日滨海步道即可。',
        tips: '选避风楼层；备薄羽绒服早晚用。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'ls-liugong-day',
        name: '刘公岛日归',
        days: 2,
        pace: 'fast',
        lat: 37.5,
        lng: 122.18,
        summary: '轮渡上岛浅逛，台阶量力；岛上优先观光车。',
        tips: '大风停航改市区公园。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'ls-rongcheng-day',
        name: '荣成·成山头浅湾（县域日归）',
        days: 2,
        pace: 'slow',
        lat: 37.38,
        lng: 122.7,
        summary: '荣成县域：成山头外观或浅湾车览；风大少久站。',
        tips: '与乳山分日；天鹅湖仅季节浅看。可整段删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/%E6%88%90%E5%B1%B1%E5%A4%B4_-_panoramio.jpg/1280px-%E6%88%90%E5%B1%B1%E5%A4%B4_-_panoramio.jpg',
      },
      {
        id: 'ls-rushan-optional',
        name: '乳山银滩（县域可选）',
        days: 3,
        pace: 'slow',
        lat: 36.92,
        lng: 121.54,
        summary: '乳山县域银滩/海岸浅走；大乳山只外观，不排游乐满日程。',
        tips: '车程预留午休；疲劳整段跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rushan%2C_Weihai%2C_Shandong%2C_China_-_panoramio.jpg/1280px-Rushan%2C_Weihai%2C_Shandong%2C_China_-_panoramio.jpg',
      },
    ],
  },

  // ── 呼伦贝尔 ──────────────────────────────────────────────
  {
    id: 'longstay-hulunbuir',
    title: '呼伦贝尔 · 夏季草原慢居',
    region: 'huabei',
    seasons: ['summer'],
    tripType: 'long',
    fromHome: false,
    themes: ['long-stay'],
    daysLabel: '约3–4周',
    transport:
      '北京飞海拉尔；住海拉尔电梯酒店/短租为基地；陈巴尔虎、满洲里、额尔古纳等分段包车日归或一两夜；段末海拉尔飞回北京',
    budgetLabel:
      '对照月预算约1.8–2.2万（机票波动+基地住宿+包车分段；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
    summary:
      '盛夏清凉与开阔草原的长居向：空气通透，但医疗与补给以海拉尔为锚。不在草原逐日换民宿，而是「城住+短途日归」；骑马短段即可，天路不自驾赶全程。',
    introduction:
      '呼伦贝尔适合7–8月慢住，不是四季长居。紫外线、温差与蚊虫是主要不适源；医疗与补给必须以海拉尔电梯酒店为锚，不在草原逐日换民宿。\n\n以「城住+短途日归」拆开草原、森林与口岸风情：陈巴尔虎选段每周一两次，满洲里可浅住一两晚看国门外观，额尔古纳/莫尔道嘎车程长则压缩或删除。骑马短段即可，天路不自驾赶全程。\n\n蒙古族与口岸文化浅尝：奶茶与手把肉清淡吃，礼仪从简；边境警示牌必须遵守，不参与不明跨境购物。身体不适立即回城或返京。',
    seasonGuide:
      '仅夏季推荐长居向。春秋短暂且温差大；冬季极寒不适合约一个月慢居。',
    notices: [
      '备强防晒、驱蚊、薄羽绒。',
      '草原未硬化路雨后勿硬闯。',
      '骑马与勒勒车慎选，优先观光车。',
      '身体不适立即回海拉尔休整或返京。',
      '满洲里遵守禁拍与管制规定；勿不明跨境项目。',
    ],
    researchKeywords: [
      '呼伦贝尔 长住 夏天',
      '海拉尔 父母 慢游',
      '陈巴尔虎 包车',
      '呼伦贝尔 空气 草原',
    ],
    sources: [
      {
        title: 'Wikivoyage：呼伦贝尔',
        url: 'https://zh.wikivoyage.org/wiki/%E5%91%BC%E4%BC%A6%E8%B4%9D%E5%B0%94',
        kind: 'other',
        note: '草原进出与节奏概览，已改写',
      },
      {
        title: '呼伦贝尔市人民政府',
        url: 'https://www.hulunbeier.gov.cn/',
        kind: 'official',
        note: '文旅与天气公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'ls-hailar-base',
        name: '海拉尔慢居基地',
        days: 14,
        pace: 'slow',
        lat: 49.215,
        lng: 119.765,
        summary: '市区电梯酒店连续住，熟悉医院与餐厅。',
        tips: '别抵达次日就长途包车。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
      {
        id: 'ls-chenbarhu-days',
        name: '陈巴尔虎草原选段',
        days: 6,
        pace: 'slow',
        lat: 49.32,
        lng: 119.45,
        summary: '每周一两次日归观景，不夜宿简陋点。',
        tips: '包车含司机；备水与零食。',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      },
      {
        id: 'ls-manzhouli-taste',
        name: '满洲里浅住（可选）',
        days: 3,
        pace: 'slow',
        lat: 49.598,
        lng: 117.379,
        summary: '国门广场外观，遵守禁拍与管制规定。',
        tips: '不参与不明跨境购物。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'ls-erguna-optional',
        name: '额尔古纳/莫尔道嘎（可选）',
        days: 4,
        pace: 'slow',
        lat: 50.24,
        lng: 120.18,
        summary: '森林河湾换风景，车程长则压缩天数。',
        tips: '可整段删，优先保证休息。',
        image:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      },
    ],
  },

  // ── 都江堰 ────────────────────────────────────────────────
  {
    id: 'longstay-dujiangyan',
    title: '都江堰 · 平原边缘清新慢居',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    themes: ['long-stay'],
    daysLabel: '约一个月',
    transport:
      '北京飞成都双流/天府，高铁或打车至都江堰住下；青城前山、熊猫谷、成都日归；段末经成都飞回北京',
    budgetLabel:
      '对照月预算约1.4–1.9万（都江堰短租+机票+城际日归；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    summary:
      '避开成都雾霾核心的平原西缘慢居：都江堰水利工程平缓可走，青城前山索道减负，周末可进城看熊猫或喝茶。以县城/景区外围电梯房为基地，不把川西高原线塞进本月。',
    introduction:
      '「成都平原边缘清新向」：相对主城盆地静稳污染，西缘靠山更常有对流与绿化。仍非无菌区——遇静稳天气改室内。以县城/景区外围电梯房为基地，成都华西体系作就医下撤，心理更踏实。\n\n节奏：都江堰水利世界遗产用观光车减步，南桥夜景浅逛，青城前山索道观景（后山默认不排），熊猫谷或成都茶馆日归。李冰治水与道观文化半日足够，勿排满宗教特种兵。\n\n火锅清汤/豆花化；峨眉金顶与川西高原另线，本月不硬塞高原。',
    seasonGuide:
      '春秋最宜。夏季湿热多雨；冬季阴冷潮湿，体感偏凉。地震与地质灾害预警期减少山路。',
    notices: [
      '青城后山默认不排；前山也量力。',
      '麻辣与火锅油烟刺激肠胃，改清汤。',
      '复杂就医可当日回成都华西体系。',
      '雨季山路湿滑，改平原散步。',
      '短租先一周试住；不排川西自驾。',
    ],
    researchKeywords: [
      '都江堰 长住 父母',
      '青城山 索道 适老',
      '都江堰 空气 成都',
      '都江堰 短租',
    ],
    sources: [
      {
        title: 'Wikivoyage：都江堰',
        url: 'https://zh.wikivoyage.org/wiki/%E9%83%BD%E6%B1%9F%E5%A0%B0',
        kind: 'other',
        note: '水利工程与进出概览，已改写',
      },
      {
        title: '成都市都江堰景区',
        url: 'https://www.djy.gov.cn/',
        kind: 'official',
        note: '门票与开放以官方为准',
      },
    ],
    stops: [
      {
        id: 'ls-djy-base',
        name: '都江堰慢居基地',
        days: 16,
        pace: 'slow',
        lat: 31.003,
        lng: 103.647,
        summary: '县城电梯公寓；每周多次空白日。',
        tips: '近公交/城际更方便回成都就医。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'ls-djy-site',
        name: '都江堰水利景区',
        days: 3,
        pace: 'slow',
        lat: 31.01,
        lng: 103.61,
        summary: '观光车+平缓步道，分散两三次去。',
        tips: '台阶段量力，带折叠凳。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'ls-qingcheng-front',
        name: '青城前山（索道）',
        days: 2,
        pace: 'fast',
        lat: 30.9,
        lng: 103.57,
        summary: '索道减负，不爬后山。',
        tips: '雨日改期。',
        image:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      },
      {
        id: 'ls-chengdu-daytrips',
        name: '成都/熊猫日归',
        days: 6,
        pace: 'slow',
        lat: 30.67,
        lng: 104.06,
        summary: '熊猫基地或茶馆半日，当晚回都江堰。',
        tips: '雾霾日改都江堰本地休息。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
    ],
  },

  // ── 镇远（已从长居降级：无本地三甲+物资薄 → 贵阳枢纽短腿）──
  {
    id: 'longstay-zhenyuan',
    title: '镇远 · 舞阳河江城短住',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约4–6天',
    transport:
      '北京飞贵阳龙洞堡，高铁至镇远；沿江电梯/低楼层短住数日；舞阳河与古城浅逛；不适或需三甲即高铁下撤贵阳。段末经贵阳飞回北京',
    budgetLabel:
      '本趟约2800–4800元（机票高铁+沿江民宿+少量游船；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200',
    summary:
      '【非长居推荐】江城尺度适合数日慢短住，不是昆明级月租基地：本地无三甲、县城物资偏薄。医疗与补给以贵阳为枢纽；真长居走「贵阳·黔中慢居枢纽」。更紧凑三天见「镇远·舞阳河古城」；黄果树/黔东串线见「贵阳基地」长线。',
    introduction:
      '本卡从「长居」降级为黔东江城短腿：夏凉、沿江平缓仍值得来，但三甲与物资达不到站立门槛，不再与昆明并列「长居推荐」。\n\n节奏：沿江短住数日，舞阳河游船一次、青龙洞外观/平缓段、石板街散步留空白。高坡苗寨特种兵默认不排。比「镇远·舞阳河古城」三天卡略松，仍不是月租。\n\n枢纽诚实：进出与就医下撤用贵阳（高铁便利、本地三甲与商超完整）。约一个月以贵阳市区为锚，走「贵阳·黔中慢居枢纽」；黄果树/黔东串线仍可用「贵阳基地」长线。',
    seasonGuide:
      '春、秋、夏（避暑）可排。冬季阴冷潮湿宜缩短。雨季关注山洪与滑坡预警。',
    notices: [
      '【已降级】非「长居推荐」；本地无三甲+物资薄→贵阳下撤；月租请走 base-guiyang。',
      '古城石板湿滑，夜间少赶路。',
      '自驾山区弯道谨慎，优先高铁+当地交通。',
      '民族村寨尊重当地习俗与拍摄规定。',
      '高坡苗寨特种兵不排；问清热水与防潮。',
    ],
    researchKeywords: [
      '镇远古城 父母',
      '舞阳河 游船',
      '镇远 贵阳 高铁',
      '黔东南 短住',
    ],
    sources: [
      {
        title: 'Wikivoyage：镇远',
        url: 'https://zh.wikivoyage.org/wiki/%E9%95%87%E8%BF%9C',
        kind: 'other',
        note: '古城与进出概览，已改写',
      },
      {
        title: '黔东南州人民政府',
        url: 'https://www.qdn.gov.cn/',
        kind: 'official',
        note: '文旅与天气预警以官方为准',
      },
    ],
    stops: [
      {
        id: 'ls-zhenyuan-base',
        name: '镇远沿江短住',
        days: 3,
        pace: 'slow',
        lat: 27.05,
        lng: 108.42,
        summary: '沿江电梯或低楼层；每日河岸散步留空白。',
        tips: '近车站方便下撤贵阳；确认热水。',
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      },
      {
        id: 'ls-wuyang-boat',
        name: '舞阳河游船',
        days: 1,
        pace: 'slow',
        lat: 27.06,
        lng: 108.4,
        summary: '正规游船观景一次即可。',
        tips: '雨季关注停航。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'ls-qinglong-dong',
        name: '青龙洞/古城浅逛',
        days: 1,
        pace: 'slow',
        lat: 27.049,
        lng: 108.423,
        summary: '外观与平缓段即可，台阶量力。',
        tips: '湿滑日改沿江平路。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'ls-qiandongnan-optional',
        name: '凯里/平缓村寨（可选）',
        days: 1,
        pace: 'slow',
        lat: 26.58,
        lng: 107.98,
        summary: '选交通便利、坡度小的点；默认可删。',
        tips: '雷山等高坡默认不排。',
        image:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      },
    ],
  },

  // ── 海南东线 ──────────────────────────────────────────────
  {
    id: 'longstay-hainan-east',
    title: '万宁/琼海 · 非暑期海岸慢居',
    region: 'huanan',
    seasons: ['winter', 'spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    themes: ['long-stay'],
    daysLabel: '约一个月',
    transport:
      '北京飞海口或三亚，环岛高铁至琼海/万宁；住海岸或镇区电梯公寓；博鳌、石梅湾、兴隆等浅走；段末高铁接飞机回北京',
    budgetLabel:
      '对照月预算约1.5–2万（东线短租+机票+局部包车；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
    summary:
      '海南「非暑期」慢居：空气湿润清新、海岸平缓，人流与房价压力常小于三亚湾核心。以琼海或万宁为基地，博鳌与石梅湾作零星半日；避开盛夏台风高峰，不排高强度潜水。',
    introduction:
      '三亚适合度假热点，东线更适合长住节奏：琼海/万宁补给够用、人流与房价压力常小于三亚湾核心，医疗可经海口/三亚下撤。紫外线全年强，防晒与午休是刚需，不是可选项。\n\n自然节奏：海岸散步、红树林外观、兴隆热带园浅逛、博鳌亚洲论坛外围平路、石梅湾早晚浅走。潜水、冲浪与中午暴晒海滩默认不排主线。\n\n椰风海韵浅尝即可；海鲜清蒸控盐，椰子过敏留意。盛夏湿热+台风季不推荐约一个月硬住。',
    seasonGuide:
      '冬春最佳避寒长居；秋亦可。盛夏湿热+台风风险，不推荐约一个月硬住。关注停航与暴雨预警。',
    notices: [
      '海鲜与椰子过敏留意；肠胃敏感改清淡；高血压控盐。',
      '台风预警期减少出海与沿海骑行。',
      '优先琼海短租近三甲；万宁住则复杂病转琼海或海口。',
      '回程机票留弹性，防天气延误。',
      '紫外线强必午休；短租先一周试住问清空调蚊虫。',
    ],
    researchKeywords: [
      '万宁 长住 冬天',
      '琼海 博鳌 慢游',
      '海南 东线 退休',
      '石梅湾 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：海南',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B5%B7%E5%8D%97',
        kind: 'other',
        note: '环岛与气候概览，已改写',
      },
      {
        title: '海南省旅游和文化广电厅',
        url: 'https://lwt.hainan.gov.cn/',
        kind: 'official',
        note: '台风与景区公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'ls-qionghai-base',
        name: '琼海/万宁慢居基地',
        days: 18,
        pace: 'slow',
        lat: 19.25,
        lng: 110.47,
        summary: '镇区或近高铁电梯公寓；每日海岸或公园散步。',
        tips: '先试住一周；问清空调与蚊虫防护。',
        image:
          'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
      },
      {
        id: 'ls-boao-days',
        name: '博鳌浅走',
        days: 3,
        pace: 'slow',
        lat: 19.15,
        lng: 110.53,
        summary: '平路与海岸外观，分散安排。',
        tips: '论坛活动期间人多错峰。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'ls-shimei-bay',
        name: '石梅湾/日月湾外观',
        days: 3,
        pace: 'slow',
        lat: 18.68,
        lng: 110.3,
        summary: '沙滩浅走，防晒补水；不硬排水上项目。',
        tips: '午后紫外线强，改早晚。',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      },
      {
        id: 'ls-xinglong-optional',
        name: '兴隆热带园（可选）',
        days: 3,
        pace: 'fast',
        lat: 18.73,
        lng: 110.2,
        summary: '园区观光车浅逛即可。',
        tips: '可整段删。',
        image:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      },
    ],
  },

  // ── 桂林（三甲 hub；辐射阳朔/漓江短腿）────────────────────
  {
    id: 'base-guilin',
    title: '桂林 · 漓江慢居枢纽',
    region: 'huanan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'base',
    themes: ['long-stay'],
    fromHome: false,
    daysLabel: '约三四周',
    nearbyLegs: [
      'longstay-yangshuo',
      'huanan-guilin-yangshuo',
    ],
    transport:
      '北京飞桂林两江或高铁桂林/桂林北；市区电梯短租连住。阳朔日归或短住约1–1.5小时；漓江游船磨盘山/竹江接驳。段末两江或高铁回京。',
    budgetLabel:
      '对照月预算约1.5–2.2万（短租电梯房+机票+每周1–2次阳朔/漓江短线；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
    summary:
      '以桂林市区为慢居基地（机场/高铁、省会级商超、本地三甲）：固定电梯短租；周边辐射「阳朔山水短住」与「漓江慢住」主线。景点正文在各短线。阳朔已降级，不与本卡并列长居。',
    introduction:
      '把桂林当「漓江第二居所」而不是阳朔镇区硬月租：市区电梯短租，先熟悉三甲医院、商超与象山/解放桥一带平路，再按周点开阳朔或漓江游船。湿热与阵雨是日常课题——雨具、防滑鞋与空白日比刷西街更重要。\n\n长居三门槛诚实对照：① 交通——两江机场直飞/经转 + 高铁桂林/桂林北，市区打车地铁感弱但包车便利。② 物资——地级市商超菜市场与药店够撑约一个月日常。③ 医疗——桂林医学院附属医院等本地三甲；高难度专科可下撤南宁/广州。\n\n周边短线不复述景点正文：山水短腿走「阳朔·漓江山水短住」；想把漓江当两三周主线，点「桂林阳朔·漓江慢住」。每周至少两天完全空白。攀岩、特种兵骑行与龙脊梯田默认不排进长居主周。',
    seasonGuide:
      '春秋最宜慢居。夏季湿热与暴雨宜缩短户外、多空白；冬季阴冷潮湿可缩户外、以市区散步与茶馆为主。',
    notices: [
      '长居门槛：本地三甲+机场/高铁+市区商超达标；阳朔镇区不作月租主锚。',
      '短租先试住一周再续；问清电梯、热水与退租规则。',
      '周边短线见 nearbyLegs；景点细节只在各短线卡片。',
      '阳朔日归/短住预留堵车；雨后山路湿滑改室内。',
      '游船正规票点；65+票务以当日规则为准。',
      '段末预留弹性回程机票。',
    ],
    researchKeywords: [
      '桂林 长住 父母',
      '桂林 短租 电梯',
      '桂林 阳朔 慢居',
      '漓江 月租 基地',
    ],
    sources: [
      {
        title: 'Wikivoyage：桂林',
        url: 'https://zh.wikivoyage.org/wiki/%E6%A1%82%E6%9E%97',
        kind: 'other',
        note: '进出、气候与市区节奏概览，已改写',
      },
      {
        title: '桂林市文化广电和旅游局',
        url: 'https://www.guilin.gov.cn/',
        kind: 'official',
        note: '文旅与交通公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'ls-guilin-hub',
        name: '桂林慢居基地（市区电梯短租）',
        days: 18,
        pace: 'slow',
        lat: 25.274,
        lng: 110.29,
        summary:
          '象山/解放桥或七星一带电梯短租；熟悉超市、医院与平缓散步。每周至少两天完全空白。',
        tips: '近三甲更安心；湿热备雨具与防暑药。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
      },
      {
        id: 'ls-guilin-city-days',
        name: '市区浅逛分散日',
        days: 6,
        pace: 'slow',
        lat: 25.273,
        lng: 110.295,
        summary:
          '象鼻山外观、东西巷米粉、两江四湖夜景浅尝拆进多周；细节不复述漓江正文。',
        tips: '人多即撤；每天一个点即可。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
      },
      {
        id: 'ls-guilin-yangshuo-radiate',
        name: '阳朔/漓江辐射（见短线）',
        days: 6,
        pace: 'slow',
        lat: 24.778,
        lng: 110.496,
        summary:
          '按周点开阳朔短住或漓江慢住主线；本卡不另写游船/竹筏正文。',
        tips: '可整段删，只留市区静养。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Yangshuo.jpg/1280px-Yangshuo.jpg',
      },
    ],
  },

  // ── 贵阳（三甲 hub；辐射镇远/黄果树/黔东南）──────────────
  {
    id: 'base-guiyang',
    title: '贵阳 · 黔中慢居枢纽',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    compositionKind: 'base',
    themes: ['long-stay'],
    fromHome: false,
    daysLabel: '约三四周',
    nearbyLegs: [
      'longstay-zhenyuan',
      'xinan-guizhou-zhenyuan',
      'xinan-guizhou-huangguoshu',
      'xinan-guizhou-dong-corridor',
      'xinan-guizhou-loop',
    ],
    transport:
      '北京飞贵阳龙洞堡；市区地铁+打车。镇远/凯里高铁便利；黄果树包车或大巴日归/过夜。段末龙洞堡飞回北京。',
    budgetLabel:
      '对照月预算约1.4–2万（短租电梯房+机票+每周1–2次黔东/黄果树短线；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
    summary:
      '以贵阳市区为慢居基地（机场/高铁、省会级商超、本地三甲）：固定电梯短租；周边辐射镇远短腿、黄果树、黔东南浅访或「贵阳基地」串线。景点正文在各短线。镇远已降级，不与本卡并列长居。',
    introduction:
      '把贵阳当「黔中第二居所」而不是镇远县城硬月租：观山湖或喷水池附近电梯短租，先熟悉贵医/省医与商超，再按周点开黔东或黄果树。阴凉多雨是日常课题——薄外套、防滑鞋与空白日写进节奏。\n\n长居三门槛诚实对照：① 交通——龙洞堡机场 + 高铁枢纽，镇远约2–3小时高铁，黄果树公路约1.5–2小时。② 物资——省会级商超菜市场与药店够撑约一个月日常。③ 医疗——贵州医科大学附属医院、贵州省人民医院等本地三甲。\n\n周边短线不复述景点正文：江城短腿走「镇远·舞阳河江城短住」或紧凑「镇远·舞阳河古城」；黄果树扶梯浅览、黔东南西江肇兴浅访各为独立短线；想一次串黄果树+黔东二选一，点「贵阳基地·黄果树与黔东可选」。每周至少两天完全空白。高坡苗寨特种兵与多寨连赶默认不排。',
    seasonGuide:
      '春秋最宜慢居。夏季凉爽可作避暑，但雨多路滑；冬季阴冷潮湿宜缩短户外。关注山洪与滑坡预警。',
    notices: [
      '长居门槛：本地三甲+机场/高铁+省会商超达标；镇远县城不作月租主锚。',
      '短租先试住一周再续；问清电梯、热水与防潮。',
      '周边短线见 nearbyLegs；景点细节只在各短线卡片。',
      '黄果树「安旅通」预约；黔东高铁优于山路夜赶。',
      '酸汤鱼点微辣/免辣；肠胃弱改清汤粉面。',
      '段末预留弹性回程机票。',
    ],
    researchKeywords: [
      '贵阳 长住 父母',
      '贵阳 短租 电梯',
      '贵阳 镇远 慢居',
      '黔中 月租 基地',
    ],
    sources: [
      {
        title: 'Wikivoyage：贵阳',
        url: 'https://zh.wikivoyage.org/wiki/%E8%B4%B5%E9%98%B3',
        kind: 'other',
        note: '进出、气候与市区节奏概览，已改写',
      },
      {
        title: '贵阳市文化和旅游局',
        url: 'https://www.guiyang.gov.cn/',
        kind: 'official',
        note: '文旅与交通公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'ls-guiyang-hub',
        name: '贵阳慢居基地（市区电梯短租）',
        days: 18,
        pace: 'slow',
        lat: 26.647,
        lng: 106.63,
        summary:
          '观山湖或喷水池附近电梯短租；熟悉超市、医院与公园平路。每周至少两天完全空白。',
        tips: '近贵医/省医更安心；阴雨备薄外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
      },
      {
        id: 'ls-guiyang-city-days',
        name: '甲秀楼/黔灵浅段分散日',
        days: 5,
        pace: 'slow',
        lat: 26.58,
        lng: 106.72,
        summary:
          '甲秀楼外观、河岸平走、黔灵山量力拆进多周；勿硬爬。细节见市区短线亦可。',
        tips: '人多即撤；每天一个点即可。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
      },
      {
        id: 'ls-guiyang-radiate',
        name: '镇远/黄果树/黔东南辐射（见短线）',
        days: 7,
        pace: 'slow',
        lat: 27.05,
        lng: 108.42,
        summary:
          '按周点开镇远短腿、黄果树或黔东南浅访；本卡不另写瀑布/古城正文。',
        tips: '勿一周硬拼两线；可整段删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
      },
    ],
  },
];
