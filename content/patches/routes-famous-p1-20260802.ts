import type { Route } from '../types';

/**
 * Famous P1 fill + geo-stitch (2026-08-02 wave after catalog 123).
 * Prefer corridors when drive/rail-natural; else independent cards.
 * Evidence: research/notes/multi-discovery/famous-p1-20260802.md
 */
export const patchRoutes: Route[] = [
  // ── 武夷浅尝（名景；九曲竹筏+茶馆，勿硬爬）──────────────────
  {
    id: 'huanan-fujian-wuyi',
    title: '武夷山 · 九曲竹筏浅尝',
    region: 'huanan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京飞武夷山机场（WUS）或高铁至武夷山站；景区内观光车+九曲竹筏。结束后原路飞/高铁回京。勿与厦门鼓浪屿同短假硬赶南北两线',
    budgetLabel: '本趟约2800–4800元（机票/高铁+门票竹筏+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Peak_Yunu.jpg/1280px-Peak_Yunu.jpg',
    summary:
      '闽北名景适老版：住景区口电梯酒店，九曲溪竹筏坐观玉女峰，茶馆歇脚；天游峰台阶多默认可删。夏湿热缩短户外，春秋最宜。',
    introduction:
      '父母搜「武夷」应对上竹筏观峰，而不是特种兵爬天游。本线以九曲竹筏与平缓茶园/茶馆为主，山路徒步整段可删。\n\n与厦门鼓浪屿、土楼廊地理远，分两次出门；福州可作进出缓冲但不塞三坊七巷同日。',
    seasonGuide:
      '春秋最舒适。夏可走但湿热，午后多室内茶馆。冬阴冷竹筏仍可，备防风外套。',
    whyFast: '天游/一线天可删；只竹筏半日+茶馆也成立。',
    notices: [
      '竹筏防溅水，备薄外套；雨天改期。',
      '天游峰台阶多，膝盖不稳默认跳过。',
      '门票与竹筏分时预约以景区官方为准。',
      '勿信黄牛「内部票」。',
      '结束后回京，勿再塞泰宁大金湖同日。',
    ],
    researchKeywords: ['武夷山 竹筏 父母', '九曲溪 玉女峰', '武夷 茶馆 慢游'],
    sources: [
      {
        title: 'Wikivoyage：武夷山',
        url: 'https://zh.wikivoyage.org/wiki/%E6%AD%A6%E5%A4%B7%E5%B1%B1',
        kind: 'other',
        note: '九曲与体力提示，已改写适老',
      },
    ],
    stops: [
      {
        id: 'wy-base',
        name: '武夷山景区口慢住',
        days: 1.5,
        pace: 'slow',
        lat: 27.76,
        lng: 118.03,
        summary: '电梯酒店连住；抵达休整，次日早竹筏。',
        tips: '近景区公交/观光车点；少换店。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Jiuqu_Brook_in_Wuyi_Mountains.jpg/1280px-Jiuqu_Brook_in_Wuyi_Mountains.jpg',
      },
      {
        id: 'wy-jiuqu-raft',
        name: '九曲溪竹筏',
        days: 1,
        pace: 'slow',
        lat: 27.67,
        lng: 117.96,
        summary: '坐筏观玉女峰等丹霞岸线；半日为主。',
        tips: '防晒帽+薄外套；勿站立。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Peak_Yunu.jpg/1280px-Peak_Yunu.jpg',
      },
      {
        id: 'wy-tea-optional',
        name: '茶馆 / 大红袍产区浅访（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 27.7,
        lng: 117.98,
        summary: '室内品茗歇脚；产区外观即可。',
        tips: '少购高价「珍品茶」；量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Jiuqu_Brook_in_Wuyi_Mountains.jpg/1280px-Jiuqu_Brook_in_Wuyi_Mountains.jpg',
      },
      {
        id: 'wy-tianyuan-optional',
        name: '天游峰（可选可删）',
        days: 0.5,
        pace: 'fast',
        lat: 27.66,
        lng: 117.95,
        summary: '台阶多；默认可删，竹筏已够名景。',
        tips: '膝盖血压不稳整段跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Peak_Yunu.jpg/1280px-Peak_Yunu.jpg',
      },
    ],
  },

  // ── 北海银滩（涠洲可选）────────────────────────────────────
  {
    id: 'huanan-guangxi-beihai',
    title: '北海银滩 · 涠洲可选',
    region: 'huanan',
    seasons: ['winter', 'spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约4–6天',
    transport:
      '北京飞北海福成或经南宁高铁/航班中转；市区打车至银滩。涠洲客轮往返看天气与停航公告。结束经北海或南宁回京',
    budgetLabel: '本趟约2500–4500元（机票+海景电梯房；涠洲另加船票住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BeiHaiYanTan.jpg/1280px-BeiHaiYanTan.jpg',
    summary:
      '桂南海滨适老避寒：银滩平路散步、老街浅逛；涠洲岛船渡可选可删，风浪大或爸妈晕船默认不上岛。',
    introduction:
      '北海银滩是父母「冬天暖海」常搜点，不必硬挂桂林漓江同趟。本线以银滩电梯海景房连住为主。\n\n涠洲船渡受天气影响大，行程紧或肠胃晕船整段删除仍完整。',
    seasonGuide:
      '冬春避寒最佳。秋亦可。夏湿热台风季关注预警，缩短午后海滩，优先早晚散步。',
    whyFast: '涠洲整段可删；只银滩三晚也成立。',
    notices: [
      '银滩防晒与补水；午后烈日少久晒。',
      '海鲜点熟、少生冷；肠胃弱改清蒸。',
      '涠洲客轮以港航公告为准，停航勿强渡。',
      '勿与桂林阳朔同短假南北硬赶。',
    ],
    researchKeywords: ['北海银滩 父母', '涠洲岛 船 晕船', '北海 冬 避寒'],
    sources: [
      {
        title: 'Wikivoyage：北海',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8C%97%E6%B5%B7',
        kind: 'other',
        note: '银滩与涠洲交通，已改写',
      },
    ],
    stops: [
      {
        id: 'bh-yintan-base',
        name: '银滩慢住',
        days: 2.5,
        pace: 'slow',
        lat: 21.41,
        lng: 109.14,
        summary: '海景电梯房；早晚平路散步。',
        tips: '选有电梯与餐厅的酒店；空白日可全天休息。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BeiHaiYanTan.jpg/1280px-BeiHaiYanTan.jpg',
      },
      {
        id: 'bh-oldtown',
        name: '北海老街浅逛',
        days: 0.5,
        pace: 'slow',
        lat: 21.48,
        lng: 109.12,
        summary: '骑楼街平走半日；拍照喝茶即可。',
        tips: '防滑鞋；人多即撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BeiHaiYanTan.jpg/1280px-BeiHaiYanTan.jpg',
      },
      {
        id: 'bh-weizhou-optional',
        name: '涠洲岛（可选可删）',
        days: 1.5,
        pace: 'fast',
        lat: 21.03,
        lng: 109.12,
        summary: '客轮往返；火山岸线浅览。晕船/风浪默认删。',
        tips: '行前查停航；岛上少连赶景点。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BeiHaiYanTan.jpg/1280px-BeiHaiYanTan.jpg',
      },
    ],
  },

  // ── 普陀 / 舟山────────────────────────────────────────────
  {
    id: 'huadong-zhejiang-putuo',
    title: '普陀山 · 舟山浅朝',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京高铁至宁波/上海，转舟山客轮或跨海大桥巴士至普陀山登岛；岛内公交。结束后原路经宁波/上海回京。勿与宁波天一阁同日连赶船渡',
    budgetLabel: '本趟约2600–4500元（高铁+船票门票+岛上电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putuoshan.jpg/1280px-Putuoshan.jpg',
    summary:
      '海天佛国适老浅朝：岛上公交串寺院平缓段，不肯去百步沙久晒；佛顶山索道量力。船渡受风浪影响，预留缓冲日。',
    introduction:
      '普陀与宁波同属浙东，但船渡与排队单独成线更稳。爸妈以岛上电梯酒店连住，一天一寺或一沙滩。\n\n宁波天一阁请走宁波专线；本廊不塞东钱湖。',
    seasonGuide:
      '春秋舒适。夏可走但防晒与台风预警必看。冬阴冷海风大，缩短户外。',
    whyFast: '佛顶山索道可删；只普济/法雨浅访也成立。',
    notices: [
      '船票与进山票行前官方预约。',
      '岛上坡道有，选公交点对点。',
      '海鲜清淡吃；素斋可选。',
      '风浪大停航时在沈家门缓冲，勿强渡。',
    ],
    researchKeywords: ['普陀山 父母 攻略', '舟山 客轮', '普陀 索道'],
    sources: [
      {
        title: 'Wikivoyage：普陀山',
        url: 'https://zh.wikivoyage.org/wiki/%E6%99%AE%E9%99%80%E5%B1%B1',
        kind: 'other',
        note: '登岛与寺院节奏，已改写',
      },
    ],
    stops: [
      {
        id: 'pt-gate',
        name: '沈家门 / 登岛缓冲',
        days: 0.5,
        pace: 'slow',
        lat: 29.95,
        lng: 122.3,
        summary: '等船或风浪缓冲；少赶点。',
        tips: '行李少带；防晕船药按需。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putuoshan.jpg/1280px-Putuoshan.jpg',
      },
      {
        id: 'pt-island-base',
        name: '普陀山岛上慢住',
        days: 2,
        pace: 'slow',
        lat: 30.0,
        lng: 122.38,
        summary: '电梯酒店；公交串普济/法雨浅段。',
        tips: '一天一寺；台阶量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putuo_Shan_2006_3.JPG/1280px-Putuo_Shan_2006_3.JPG',
      },
      {
        id: 'pt-foding-optional',
        name: '佛顶山索道（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 30.01,
        lng: 122.39,
        summary: '索道减步；恐高/排队久可删。',
        tips: '山顶风大备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putuoshan.jpg/1280px-Putuoshan.jpg',
      },
    ],
  },

  // ── 泰山+曲阜鲁中廊（overwrite taishan id）──────────────────
  {
    id: 'huabei-shandong-taishan',
    title: '泰山曲阜 · 鲁中名景廊',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: true,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京南高铁泰安→缆车浅尝泰山；再高铁/包车约1小时至曲阜看三孔平缓庭院。结束经曲阜东/济南高铁回京。两城车程近，适合一条廊',
    budgetLabel: '本趟约2200–4000元（高铁+索道门票+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
    summary:
      '鲁中父母廊：泰安歇一夜缆车浅尝泰山（不盘道夜爬），再开进曲阜孔庙孔府平地慢走。三孔与索道分日，勿同一天特种兵。',
    introduction:
      '泰山与曲阜同属鲁中、高铁/高速约一小时，地理串廊自然。爸妈先索道减负看山，再三孔庭院文化线——台阶与人流都可控。\n\n青岛海滨长线互补，勿同短假半岛+鲁中硬拼。',
    seasonGuide:
      '春秋最佳。夏可走，山顶与庭院午后避开暴晒。冬冰雪索道可能停运，以公告为准。',
    whyFast: '泰山或三孔可只留一段；两日一城也成立。',
    notices: [
      '禁止十八盘硬爬与夜爬看日出。',
      '索道排队早到；雾冰可改曲阜日。',
      '孔庙石板防滑；孔林路线长可只孔庙孔府。',
      '住泰安与曲阜各一晚，少当日折返过劳。',
    ],
    researchKeywords: ['泰山 缆车 曲阜', '三孔 父母', '泰安 曲阜 高铁'],
    sources: [
      {
        title: 'Wikivoyage：泰山',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B3%B0%E5%B1%B1',
        kind: 'other',
        note: '索道分区，已改写',
      },
      {
        title: 'Wikivoyage：曲阜',
        url: 'https://zh.wikivoyage.org/wiki/%E6%9B%B2%E9%98%9C',
        kind: 'other',
        note: '三孔节奏，已改写',
      },
    ],
    stops: [
      {
        id: 'taian-base',
        name: '泰安市区',
        days: 1,
        pace: 'slow',
        lat: 36.2,
        lng: 117.087,
        summary: '高铁抵达；岱庙外围浅逛或休整。',
        tips: '电梯酒店；次日早索道。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
      },
      {
        id: 'taishan-cable',
        name: '泰山（缆车浅尝）',
        days: 1,
        pace: 'slow',
        lat: 36.254,
        lng: 117.101,
        summary: '天外村/桃花源观光车+索道；山顶短段即返。',
        tips: '不盘道、不夜爬；风雾可改期。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
      },
      {
        id: 'qufu-sankong',
        name: '曲阜三孔（孔庙孔府）',
        days: 1.5,
        pace: 'slow',
        lat: 35.596,
        lng: 116.984,
        summary: '庭院平缓；孔林路长可删或电瓶车。',
        tips: '分时段预约；石板防滑。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%E6%9B%B2%E9%98%9C%E5%AD%94%E5%BA%99%E5%A4%A7%E6%88%90%E6%AE%BF.jpg/1280px-%E6%9B%B2%E9%98%9C%E5%AD%94%E5%BA%99%E5%A4%A7%E6%88%90%E6%AE%BF.jpg',
      },
      {
        id: 'qufu-exit',
        name: '曲阜东 / 回京',
        days: 0.5,
        pace: 'fast',
        lat: 35.58,
        lng: 117.03,
        summary: '高铁回京；预留检票。',
        tips: '勿再塞济南趵突泉同日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%E6%9B%B2%E9%98%9C%E5%AD%94%E5%BA%99%E5%A4%A7%E6%88%90%E6%AE%BF.jpg/1280px-%E6%9B%B2%E9%98%9C%E5%AD%94%E5%BA%99%E5%A4%A7%E6%88%90%E6%AE%BF.jpg',
      },
    ],
  },

  // ── 开平碉楼（粤西；与丹霞分线）────────────────────────────
  {
    id: 'huanan-guangdong-kaiping',
    title: '开平碉楼 · 侨乡浅访',
    region: 'huanan',
    seasons: ['autumn', 'winter', 'spring', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–4天',
    transport:
      '北京飞广州/深圳，高铁或包车至开平；自力村/锦江里观光车或短途包车。结束后经广深飞回京。与韶关丹霞分属粤北粤西，勿同短假硬串',
    budgetLabel: '本趟约2200–4000元（机票城际+门票包车+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Jinjiangli_0004.jpg/1280px-Jinjiangli_0004.jpg',
    summary:
      '世界遗产碉楼适老线：选自力村或锦江里一处连住浅看，田埂平路+楼外观为主；多村特种兵不排。',
    introduction:
      '开平碉楼是父母「广东名景」常搜点之一。本线只深挖一村群，避免一日四村落。\n\n韶关丹霞山在粤北，地理过远，另开专线。',
    seasonGuide:
      '秋冬春舒适。夏湿热缩短户外，多亭廊歇脚。',
    whyFast: '只留自力村一日半也成立。',
    notices: [
      '碉楼内部楼梯窄陡，腿脚不便以外观为主。',
      '田埂雨后泥滑，穿防滑鞋。',
      '门票以景区官方为准，勿信黄牛。',
      '勿与丹霞山同短假南北对穿。',
    ],
    researchKeywords: ['开平碉楼 父母', '自力村 锦江里', '开平 世界遗产'],
    sources: [
      {
        title: 'Wikivoyage：开平',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BC%80%E5%B9%B3',
        kind: 'other',
        note: '碉楼村落，已改写',
      },
    ],
    stops: [
      {
        id: 'kp-base',
        name: '开平 / 塘口慢住',
        days: 1,
        pace: 'slow',
        lat: 22.38,
        lng: 112.69,
        summary: '电梯酒店；抵达休整。',
        tips: '近自力村交通更省事。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Jinjiangli_0004.jpg/1280px-Jinjiangli_0004.jpg',
      },
      {
        id: 'kp-zili',
        name: '自力村碉楼群',
        days: 1.5,
        pace: 'slow',
        lat: 22.29,
        lng: 112.55,
        summary: '田野碉楼外观+短段步道；半日到一日。',
        tips: '上楼量力；拍远景即可。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Jinjiangli_0004.jpg/1280px-Jinjiangli_0004.jpg',
      },
      {
        id: 'kp-jinjiang-optional',
        name: '锦江里 / 瑞石楼（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 22.27,
        lng: 112.52,
        summary: '与自力二选一或浅加半日。',
        tips: '别一日刷四村落。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Jinjiangli_0004.jpg/1280px-Jinjiangli_0004.jpg',
      },
    ],
  },

  // ── 韶关丹霞（粤北；与开平分线）────────────────────────────
  {
    id: 'huanan-guangdong-danxia',
    title: '韶关丹霞山 · 丹霞浅览',
    region: 'huanan',
    seasons: ['autumn', 'winter', 'spring', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–4天',
    transport:
      '北京飞广州转高铁至韶关，再景区车至丹霞山；景区内观光车/索道减步。结束经韶关/广州回京。勿与开平碉楼同短假硬串粤西',
    budgetLabel: '本趟约2400–4200元（机票高铁+门票观光车+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/39002-Danxiashan_%2848989060302%29.jpg/1280px-39002-Danxiashan_%2848989060302%29.jpg',
    summary:
      '世界自然遗产丹霞适老版：观光车串观景台，索道量力；阳元石等以远观为主，不硬爬长线栈道。',
    introduction:
      '丹霞山是粤北名片，与开平侨乡分属两端，本 atlas 分线立项。爸妈以「坐车看红崖」为主。\n\n张掖七彩丹霞在西北，名称易混，产品页标题写清「韶关」。',
    seasonGuide:
      '秋冬春宜。夏湿热雷雨，缩短徒步。',
    whyFast: '只一日观光车观景台也成立。',
    notices: [
      '台阶与栈道量力；优先观光车。',
      '防晒防滑；峡谷风大备外套。',
      '与开平、桂林勿同短假硬拼。',
    ],
    researchKeywords: ['韶关丹霞山 父母', '丹霞山 观光车', '丹霞 索道'],
    sources: [
      {
        title: 'Wikivoyage：韶关',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9F%B6%E5%85%B3',
        kind: 'other',
        note: '丹霞交通骨架，已改写',
      },
    ],
    stops: [
      {
        id: 'dx-shaoguan-gate',
        name: '韶关缓冲',
        days: 0.5,
        pace: 'slow',
        lat: 24.81,
        lng: 113.6,
        summary: '高铁下站休整或直抵景区。',
        tips: '行李少搬。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/39002-Danxiashan_%2848989060302%29.jpg/1280px-39002-Danxiashan_%2848989060302%29.jpg',
      },
      {
        id: 'dx-scenic',
        name: '丹霞山观景台浅览',
        days: 2,
        pace: 'slow',
        lat: 24.95,
        lng: 113.68,
        summary: '观光车串台；红崖远观。',
        tips: '索道按体力；勿一日刷完所有峰。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/39002-Danxiashan_%2848989060302%29.jpg/1280px-39002-Danxiashan_%2848989060302%29.jpg',
      },
    ],
  },

  // ── 九华山────────────────────────────────────────────────
  {
    id: 'huadong-anhui-jiuhua',
    title: '九华山 · 缆车浅朝',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–4天',
    transport:
      '北京高铁经池州/铜陵至九华山站，景区巴士接驳；山上多用缆车。结束经池州/合肥回京。与黄山徽州线近但体力叠加，建议分两次',
    budgetLabel: '本趟约2200–4000元（高铁+门票缆车+山下电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Jiuhuashan_yunhai.JPG/1280px-Jiuhuashan_yunhai.JPG',
    summary:
      '地藏道场适老浅朝：山下或九华街电梯酒店，缆车减负看核心寺院；不夜爬、不串尽百岁宫全部台阶。',
    introduction:
      '九华与黄山同属皖南，但本线专写礼佛浅朝，不塞西海大峡谷。地理上可与黄山徽州线「隔周」安排，勿同周特种兵。',
    seasonGuide:
      '春秋云海机会多。夏可走，防暑。冬雪冰冻台阶，缩短路线。',
    whyFast: '只九华街+一缆车段也成立。',
    notices: [
      '缆车与门票官方预约。',
      '寺院台阶量力；素斋清淡。',
      '勿与黄山同周连赶两山。',
    ],
    researchKeywords: ['九华山 缆车 父母', '九华街 慢游', '池州 九华山 高铁'],
    sources: [
      {
        title: 'Wikivoyage：九华山',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B9%9D%E5%8D%8E%E5%B1%B1',
        kind: 'other',
        note: '缆车与寺院，已改写',
      },
    ],
    stops: [
      {
        id: 'jh-base',
        name: '九华街 / 山下慢住',
        days: 1.5,
        pace: 'slow',
        lat: 30.48,
        lng: 117.8,
        summary: '电梯酒店；抵达适应。',
        tips: '住山下次日早缆车也可。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Jiuhuashan_yunhai.JPG/1280px-Jiuhuashan_yunhai.JPG',
      },
      {
        id: 'jh-cable-core',
        name: '缆车+核心寺院浅访',
        days: 1.5,
        pace: 'slow',
        lat: 30.49,
        lng: 117.81,
        summary: '缆车减步；化城寺等平缓段。',
        tips: '一天一处主寺。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Jiuhuashan_yunhai.JPG/1280px-Jiuhuashan_yunhai.JPG',
      },
    ],
  },

  // ── 千岛湖（杭淳关系写清，勿硬串黄山）──────────────────────
  {
    id: 'huadong-zhejiang-qiandao',
    title: '千岛湖 · 淳安游船浅览',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–4天',
    transport:
      '北京高铁杭州东，再杭黄高铁至千岛湖站或巴士约2小时入淳安；湖区游船。地理上属杭州都市圈西侧——可与西湖线先后安排，但勿与黄山同日硬串（车程+体力过满）',
    budgetLabel: '本趟约2400–4200元（高铁+游船票+湖景电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Thousand_Island_Lake.JPG/1280px-Thousand_Island_Lake.JPG',
    summary:
      '浙西湖泊名景：淳安连住，游船看岛不登岛硬徒步；与杭州西湖是「可先后、勿同日」。黄山另线，本廊不硬挂。',
    introduction:
      '千岛湖常被塞进「杭黄一日游」——对约60不友好。本线独立立项：住淳安电梯湖景房，半天游船足够。\n\n若与杭州衔接：西湖慢住结束后另日西行，中间留空白；不排黄山索道同周。',
    seasonGuide:
      '春秋最宜。夏可走，船上防晒。冬湖风大，缩短游船。',
    whyFast: '只一日游船+两晚湖宿也成立。',
    notices: [
      '游船防晕；选大船稳态更好。',
      '登岛项目多台阶可整段删。',
      '与黄山、西湖勿三线一日特种兵。',
    ],
    researchKeywords: ['千岛湖 游船 父母', '淳安 千岛湖站', '千岛湖 杭州 衔接'],
    sources: [
      {
        title: 'Wikivoyage：千岛湖',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8D%83%E5%B2%9B%E6%B9%96',
        kind: 'other',
        note: '游船与交通，已改写',
      },
    ],
    stops: [
      {
        id: 'qd-chunan-base',
        name: '淳安湖景慢住',
        days: 2,
        pace: 'slow',
        lat: 29.61,
        lng: 119.04,
        summary: '电梯湖景房；空白日可只散步。',
        tips: '近码头酒店减奔波。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Thousand_Island_Lake.JPG/1280px-Thousand_Island_Lake.JPG',
      },
      {
        id: 'qd-cruise',
        name: '千岛湖精华游船',
        days: 1,
        pace: 'slow',
        lat: 29.56,
        lng: 119.0,
        summary: '坐船观岛；少登岛。',
        tips: '防晒帽；风大备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/%E5%8D%83%E5%B2%9B%E6%B9%96.jpg/1280px-%E5%8D%83%E5%B2%9B%E6%B9%96.jpg',
      },
      {
        id: 'qd-hangzhou-note',
        name: '返杭缓冲（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 30.25,
        lng: 120.16,
        summary: '回杭州东转车回京；不塞西湖当日。',
        tips: '西湖另线另日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
      },
    ],
  },

  // ── 武隆独立──────────────────────────────────────────────
  {
    id: 'xinan-chongqing-wulong',
    title: '武隆天生三桥 · 喀斯特名景',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京飞重庆江北，高铁至武隆；景区观光电梯/扶梯下坑。可主城过夜缓冲。结束后经重庆飞京。重庆慢住线仍保留武隆可选挂接，本 id 供名景直达',
    budgetLabel: '本趟约2000–3800元（机票高铁+门票电梯+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wulongtianshengsanqiao.JPG/1280px-Wulongtianshengsanqiao.JPG',
    summary:
      '武隆名景独立卡：天生三桥电梯下坑看天龙/青龙，量力即返；仙女山可删。不必先钻重庆主城长线才能找到。',
    introduction:
      '父母搜「武隆」应有独立产品。本线以天生三桥为核心，仙女山与其他溶洞默认删除。\n\n若已走重庆主城慢住，可把本线作加段；反之不必强制先住解放碑。',
    seasonGuide:
      '春秋最佳。夏闷热坑底仍可，防滑。冬湿冷缩短步段。',
    whyFast: '只三桥半日+武隆住一晚也成立。',
    notices: [
      '门票+电梯以官方当日为准。',
      '坑底缓坡防滑；雨天慎入。',
      '勿再塞仙女山滑雪/草原同日。',
      '火锅改清油微辣。',
    ],
    researchKeywords: ['武隆天生三桥 父母', '武隆 电梯', '武隆高铁'],
    sources: [
      {
        title: 'Wikivoyage：武隆',
        url: 'https://zh.wikivoyage.org/wiki/%E6%AD%A6%E9%9A%86',
        kind: 'other',
        note: '三桥交通，已改写',
      },
    ],
    stops: [
      {
        id: 'wl-cq-buffer',
        name: '重庆缓冲（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 29.56,
        lng: 106.55,
        summary: '飞入歇一夜或直抵武隆。',
        tips: '行程紧可删，高铁直达武隆。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wulongtianshengsanqiao.JPG/1280px-Wulongtianshengsanqiao.JPG',
      },
      {
        id: 'wl-three-bridges',
        name: '天生三桥',
        days: 1.5,
        pace: 'slow',
        lat: 29.4,
        lng: 107.52,
        summary: '电梯下坑；看天龙青龙即返。',
        tips: '不必走完全程；备水防滑鞋。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wulongtianshengsanqiao.JPG/1280px-Wulongtianshengsanqiao.JPG',
      },
      {
        id: 'wl-town',
        name: '武隆县城歇脚',
        days: 1,
        pace: 'slow',
        lat: 29.33,
        lng: 107.76,
        summary: '电梯酒店；次日返渝飞京。',
        tips: '少赶仙女山。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wulongtianshengsanqiao.JPG/1280px-Wulongtianshengsanqiao.JPG',
      },
    ],
  },

  // ── 黄果树独立────────────────────────────────────────────
  {
    id: 'xinan-guizhou-huangguoshu',
    title: '黄果树大瀑布 · 扶梯浅览',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京飞贵阳龙洞堡，高速/跟团约1.5–2小时至黄果树；安旅通预约+观光车+大瀑布扶梯。结束回贵阳飞京。贵阳慢住/黔东线仍在，本 id 供名景直达',
    budgetLabel: '本趟约1800–3500元（机票+门票观光车扶梯+安顺/景区电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
    summary:
      '黄果树名景独立卡：扶梯看大瀑布，天星桥/水帘洞可删；不必先读完整贵阳–黔东长线才能找到。',
    introduction:
      '搜「黄果树」应直达瀑布产品。本线只写大瀑布观光车+扶梯，镇远与侗寨请走既有黔东线。',
    seasonGuide:
      '夏秋水量大更壮观也更湿滑。春秋舒适。冬水小仍可外观。',
    whyFast: '只大瀑布半日也成立。',
    notices: [
      '至少提前一天「安旅通」分时预约。',
      '穿防滑鞋备雨衣；勿信黄牛票。',
      '天星桥台阶多，默认可删。',
      '辣食点微辣。',
    ],
    researchKeywords: ['黄果树 扶梯 父母', '安旅通 预约', '黄果树 观光车'],
    sources: [
      {
        title: 'Wikivoyage：黄果树',
        url: 'https://zh.wikivoyage.org/wiki/%E9%BB%84%E6%9E%9C%E6%A0%91',
        kind: 'other',
        note: '扶梯与预约，已改写',
      },
    ],
    stops: [
      {
        id: 'hg-guiyang-gate',
        name: '贵阳进出缓冲',
        days: 0.5,
        pace: 'slow',
        lat: 26.65,
        lng: 106.63,
        summary: '飞入歇或直赴安顺/景区。',
        tips: '行程紧可当日车赴瀑布。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
      },
      {
        id: 'hg-waterfall',
        name: '黄果树大瀑布',
        days: 1.5,
        pace: 'slow',
        lat: 25.99,
        lng: 105.67,
        summary: '观光车+扶梯；瀑区即返。',
        tips: '水帘洞按体力；天星桥可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
      },
      {
        id: 'hg-anshun-rest',
        name: '安顺 / 景区歇一夜',
        days: 1,
        pace: 'slow',
        lat: 26.25,
        lng: 105.93,
        summary: '电梯酒店；次日回贵阳飞京。',
        tips: '勿再塞织金洞同日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
      },
    ],
  },

  // ── 常州（城市补线）──────────────────────────────────────
  {
    id: 'huadong-jiangsu-changzhou',
    title: '常州 · 天宁与淹城浅住',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约2–4天',
    transport:
      '北京沪宁高铁常州站；市区地铁/打车。结束后高铁回京。互补苏锡，勿同日连刷拙政园',
    budgetLabel: '本趟约1500–2800元（高铁+住宿+门票）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tianning_Temple_with_Tianning_Pagoda.jpg/1280px-Tianning_Temple_with_Tianning_Pagoda.jpg',
    summary:
      '苏南城市补线：天宁寺塔院平缓、淹城遗址公园观光车；主题乐园默认不排。',
    introduction:
      '常州填沪宁沿线城市缺口。爸妈以天宁与淹城为主，恐龙园等主题园可整段删除。',
    seasonGuide: '春秋舒适。夏闷热多室内。冬缩短户外。',
    whyFast: '只天宁半日+一晚也成立。',
    notices: ['塔院台阶量力。', '淹城观光车优先。', '勿与苏州园林同日连赶。'],
    researchKeywords: ['常州 天宁寺 父母', '淹城 遗址', '常州 高铁'],
    sources: [
      {
        title: 'Wikivoyage：常州',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B8%B8%E5%B7%9E',
        kind: 'other',
        note: '市区要点，已改写',
      },
    ],
    stops: [
      {
        id: 'cz-base',
        name: '常州市区慢住',
        days: 1,
        pace: 'slow',
        lat: 31.81,
        lng: 119.97,
        summary: '近天宁或地铁电梯酒店。',
        tips: '少换店。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/CZ_Wenhuagong_n_Jiaotang.jpg/1280px-CZ_Wenhuagong_n_Jiaotang.jpg',
      },
      {
        id: 'cz-tianning',
        name: '天宁寺 / 天宁宝塔',
        days: 1,
        pace: 'slow',
        lat: 31.77,
        lng: 119.97,
        summary: '塔院浅访；登塔可删。',
        tips: '素斋可选。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tianning_Temple_with_Tianning_Pagoda.jpg/1280px-Tianning_Temple_with_Tianning_Pagoda.jpg',
      },
      {
        id: 'cz-yancheng-optional',
        name: '淹城遗址公园（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 31.7,
        lng: 119.92,
        summary: '观光车环城河；半日。',
        tips: '主题园不排。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/CZ_Wenhuagong_n_Jiaotang.jpg/1280px-CZ_Wenhuagong_n_Jiaotang.jpg',
      },
    ],
  },

  // ── 温州 / 雁荡────────────────────────────────────────────
  {
    id: 'huadong-zhejiang-wenzhou',
    title: '温州雁荡 · 观光车浅览',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京飞温州龙湾或高铁温州南；转巴士/包车至雁荡山乐清。结束后经温州回京。勿与普陀船渡同短假硬赶',
    budgetLabel: '本趟约2400–4200元（机票高铁+门票观光车+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/China2011_Zhejiang_YandangShan.jpg/1280px-China2011_Zhejiang_YandangShan.jpg',
    summary:
      '浙南名山适老：灵峰夜景平缓段+观光车，灵岩长线可删；温州江心屿作进出缓冲可选。',
    introduction:
      '雁荡父母线以灵峰观光为主，不排特种兵爬遍灵岩。与普陀同属浙东/南沿海，船渡与盘山勿同周。',
    seasonGuide: '春秋最佳。夏湿热。冬缩短夜景。',
    whyFast: '只灵峰半日+乐清住也成立。',
    notices: ['山区弯道包车慎夜赶。', '灵岩台阶多默认可删。', '勿与普陀同短假。'],
    researchKeywords: ['雁荡山 父母 观光车', '灵峰 夜景', '温州 雁荡'],
    sources: [
      {
        title: 'Wikivoyage：雁荡山',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9B%81%E8%8D%A1%E5%B1%B1',
        kind: 'other',
        note: '分区与体力，已改写',
      },
    ],
    stops: [
      {
        id: 'wz-city-optional',
        name: '温州 / 江心屿缓冲（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 28.02,
        lng: 120.65,
        summary: '飞入歇脚；江心屿平走可删。',
        tips: '行程紧直赴乐清。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Vue_g%C3%A9n%C3%A9rale_de_Wenzhou.JPG/1280px-Vue_g%C3%A9n%C3%A9rale_de_Wenzhou.JPG',
      },
      {
        id: 'wz-yandang-lingfeng',
        name: '雁荡灵峰浅览',
        days: 2,
        pace: 'slow',
        lat: 28.37,
        lng: 121.07,
        summary: '观光车+夜景平缓段。',
        tips: '灵岩长线可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/China2011_Zhejiang_YandangShan.jpg/1280px-China2011_Zhejiang_YandangShan.jpg',
      },
    ],
  },

  // ── 惠州西湖──────────────────────────────────────────────
  {
    id: 'huanan-guangdong-huizhou',
    title: '惠州西湖 · 岭南湖岸浅住',
    region: 'huanan',
    seasons: ['autumn', 'winter', 'spring', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京飞深圳/广州，城际至惠州；市区打车环湖。结束后经深穗飞回京。互补东莞佛山，勿与开平丹霞同短假硬串',
    budgetLabel: '本趟约1600–3000元（机票城际+湖景电梯酒店）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huizhou_West_Lake.jpg/1280px-Huizhou_West_Lake.jpg',
    summary:
      '粤东湖城补线：惠州西湖平路环湖、泗洲塔外观量力；双月湾海岸可选可删。',
    introduction:
      '惠州填珠三角东岸城市缺口。西湖平缓适合爸妈；海边双月湾车程另算，默认可删。',
    seasonGuide: '秋冬春宜。夏湿热多早晚散步。',
    whyFast: '只西湖两日也成立。',
    notices: ['环湖防晒。', '塔登顶可删。', '勿与开平丹霞同短假。'],
    researchKeywords: ['惠州西湖 父母', '惠州 慢住', '双月湾 可选'],
    sources: [
      {
        title: 'Wikivoyage：惠州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%83%A0%E5%B7%9E',
        kind: 'other',
        note: '西湖要点，已改写',
      },
    ],
    stops: [
      {
        id: 'hz-xihu-base',
        name: '惠州西湖慢住',
        days: 2,
        pace: 'slow',
        lat: 23.1,
        lng: 114.41,
        summary: '湖景电梯房；平路环湖。',
        tips: '早晚散步最佳。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huizhou_West_Lake.jpg/1280px-Huizhou_West_Lake.jpg',
      },
      {
        id: 'hz-sizhou-optional',
        name: '泗洲塔外观（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 23.11,
        lng: 114.4,
        summary: '外观即可；登塔可删。',
        tips: '台阶量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huizhou_West_Lake.jpg/1280px-Huizhou_West_Lake.jpg',
      },
      {
        id: 'hz-shuangyue-optional',
        name: '双月湾海岸（可选可删）',
        days: 1,
        pace: 'fast',
        lat: 22.7,
        lng: 114.55,
        summary: '车程较远；默认可删。',
        tips: '行程紧整段跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huizhou_West_Lake.jpg/1280px-Huizhou_West_Lake.jpg',
      },
    ],
  },
];
