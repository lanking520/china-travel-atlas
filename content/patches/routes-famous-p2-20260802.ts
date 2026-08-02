import type { Route } from '../types';

/**
 * Famous / city fill wave after catalog 135 (2026-08-02 P2).
 * 梵净≠荔波分卡；神农架≠恩施分卡；西江+肇兴侗苗廊；中山/兰州黄河/潮汕加深；
 * G318 中段只雅安–泸定浅尝；晋中太谷祁县织入平遥。
 * Evidence: research/notes/multi-discovery/famous-p2-20260802.md
 */
export const patchRoutes: Route[] = [
  // ── 梵净山（独立；与荔波地理过远）────────────────────────
  {
    id: 'xinan-guizhou-fanjing',
    title: '梵净山 · 缆车浅览',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京飞铜仁凤凰或贵阳龙洞堡；景区观光车+索道上山。结束经铜仁/贵阳飞京。勿与荔波小七孔同短假硬赶南北两线',
    budgetLabel: '本趟约2800–4800元（机票+索道门票+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fanjingshan-new.jpg/1280px-Fanjingshan-new.jpg',
    summary:
      '黔东名山适老版：山下电梯酒店连住，观光车+索道至核心观景；红云金顶台阶与窄桥默认可删。海拔与台阶诚实写入。',
    introduction:
      '父母搜「梵净」应对上索道观峰，而不是特种兵爬几千级台阶。本线以索道与平缓观景台为主。\n\n荔波在黔南，车程过长，另开专线；勿与黄果树同周硬拼。',
    seasonGuide:
      '春秋最舒适。夏可走但多雾雨，备雨衣。冬湿冷缩短户外，索道以当日开放为准。',
    whyFast: '金顶窄桥/长台阶整段可删；只索道观景半日也成立。',
    notices: [
      '索道与门票分时预约以景区官方为准；勿信黄牛。',
      '红云金顶台阶陡、桥窄，膝盖血压不稳默认跳过。',
      '山区弯道少夜赶；备薄外套防温差。',
      '勿与荔波/黄果树同短假硬串。',
    ],
    researchKeywords: ['梵净山 索道 父母', '红云金顶 可删', '铜仁 梵净 慢游'],
    sources: [
      {
        title: 'Wikivoyage / UNESCO：梵净山',
        url: 'https://zh.wikivoyage.org/wiki/%E8%B4%B5%E5%B7%9E',
        kind: 'other',
        note: '黔东进出与体力提示，已改写适老',
      },
    ],
    stops: [
      {
        id: 'fj-gate',
        name: '铜仁 / 景区口慢住',
        days: 1,
        pace: 'slow',
        lat: 27.73,
        lng: 109.19,
        summary: '飞入歇脚；近景区电梯酒店连住。',
        tips: '行程紧可直赴景区口。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fanjingshan-new.jpg/1280px-Fanjingshan-new.jpg',
      },
      {
        id: 'fj-cable',
        name: '梵净索道 + 核心观景',
        days: 1.5,
        pace: 'slow',
        lat: 27.9,
        lng: 108.7,
        summary: '观光车+索道；观景台即返。',
        tips: '金顶窄桥默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fanjingshan-new.jpg/1280px-Fanjingshan-new.jpg',
      },
      {
        id: 'fj-jinding-optional',
        name: '红云金顶（可选可删）',
        days: 0.5,
        pace: 'fast',
        lat: 27.91,
        lng: 108.69,
        summary: '台阶与窄桥；默认可删。',
        tips: '恐高/膝稳不佳整段跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fanjingshan-new.jpg/1280px-Fanjingshan-new.jpg',
      },
    ],
  },

  // ── 荔波小七孔（独立）────────────────────────────────────
  {
    id: 'xinan-guizhou-libo',
    title: '荔波小七孔 · 栈道浅览',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京飞贵阳或荔波机场；景区观光车+平缓栈道。结束经贵阳飞京。勿与梵净同短假硬赶',
    budgetLabel: '本趟约2600–4500元（机票+门票观光车+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Xiaoqikong.JPG/1280px-Xiaoqikong.JPG',
    summary:
      '黔南喀斯特名景：小七孔观光车串联、古桥与水上森林浅走；大七孔/漂流默认可删。湿滑防滑鞋必带。',
    introduction:
      '搜「荔波」「小七孔」应直达本卡。以观光车减步行，不排特种兵一日走完全部景点。\n\n梵净在铜仁方向，地理过远另线。',
    seasonGuide:
      '春秋舒适。夏水量大更壮观也更湿滑。冬缩短户外。',
    whyFast: '只小七孔精华段半日也成立；大七孔可删。',
    notices: [
      '栈道湿滑，穿防滑鞋；雨天量力。',
      '漂流/高强度项目默认不排。',
      '门票预约以官方为准。',
      '勿与梵净同短假。',
    ],
    researchKeywords: ['荔波 小七孔 父母', '小七孔 观光车', '黔南 喀斯特 慢游'],
    sources: [
      {
        title: 'Wikivoyage：贵州',
        url: 'https://zh.wikivoyage.org/wiki/%E8%B4%B5%E5%B7%9E',
        kind: 'other',
        note: '黔南进出骨架，已改写',
      },
    ],
    stops: [
      {
        id: 'lb-base',
        name: '荔波县城 / 景区口',
        days: 1,
        pace: 'slow',
        lat: 25.41,
        lng: 107.88,
        summary: '电梯酒店连住；抵达休整。',
        tips: '少换店。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Xiaoqikong.JPG/1280px-Xiaoqikong.JPG',
      },
      {
        id: 'lb-xiaoqikong',
        name: '小七孔精华段',
        days: 1.5,
        pace: 'slow',
        lat: 25.27,
        lng: 107.74,
        summary: '观光车+古桥/水上森林浅走。',
        tips: '勿强求一日全线。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Xiaoqikong.JPG/1280px-Xiaoqikong.JPG',
      },
      {
        id: 'lb-daqikong-optional',
        name: '大七孔（可选可删）',
        days: 0.5,
        pace: 'fast',
        lat: 25.28,
        lng: 107.7,
        summary: '体力一般默认可删。',
        tips: '行程紧整段跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Xiaoqikong.JPG/1280px-Xiaoqikong.JPG',
      },
    ],
  },

  // ── 神农架（独立；恩施山路另卡）──────────────────────────
  {
    id: 'huazhong-hubei-shennongjia',
    title: '神农架 · 木鱼浅住',
    region: 'huazhong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约4–6天',
    transport:
      '北京飞襄阳/宜昌/神农架红坪，转巴士或包车至木鱼镇；景区内观光车。结束原路飞京。勿与恩施大峡谷同短假硬赶盘山',
    budgetLabel: '本趟约3000–5200元（机票包车+门票观光车+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/VM_5318_Muyu_Town.jpg/1280px-VM_5318_Muyu_Town.jpg',
    summary:
      '鄂西林区适老浅住：木鱼镇电梯酒店连住，观光车看神农顶/大九湖选段；长线徒步默认可删。山区弯道诚实写入。',
    introduction:
      '神农架海拔与盘山对爸妈是真实负担。本线以木鱼慢住+观光车选段为主，不排穿越特种兵。\n\n恩施大峡谷另卡；两地山路相连但车程长，默认分两次出门。',
    seasonGuide:
      '春秋最佳。夏凉可避暑。冬雪结冰路滑，非必要勿排。',
    whyFast: '只木鱼两晚+一处观光车也成立。',
    notices: [
      '盘山慎夜赶；晕动备药。',
      '高海拔感监测，不适即下撤宜昌/襄阳。',
      '长徒步与野生动物近距离项目默认删。',
      '勿与恩施同短假硬串。',
    ],
    researchKeywords: ['神农架 木鱼 父母', '神农顶 观光车', '神农架 避暑 慢住'],
    sources: [
      {
        title: 'Wikivoyage：湖北',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B9%96%E5%8C%97',
        kind: 'other',
        note: '鄂西进出，已改写适老',
      },
    ],
    stops: [
      {
        id: 'snj-gate',
        name: '宜昌 / 襄阳进出缓冲（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 30.69,
        lng: 111.29,
        summary: '飞入歇脚；行程紧可直赴木鱼。',
        tips: '下撤点预留。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/VM_5318_Muyu_Town.jpg/1280px-VM_5318_Muyu_Town.jpg',
      },
      {
        id: 'snj-muyu',
        name: '木鱼镇慢住',
        days: 2,
        pace: 'slow',
        lat: 31.45,
        lng: 110.67,
        summary: '电梯酒店连住；作日归基地。',
        tips: '少换店；备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/VM_5318_Muyu_Town.jpg/1280px-VM_5318_Muyu_Town.jpg',
      },
      {
        id: 'snj-scenic',
        name: '神农顶 / 大九湖选段',
        days: 1.5,
        pace: 'slow',
        lat: 31.47,
        lng: 110.3,
        summary: '观光车选一段即返；勿两线同日。',
        tips: '长徒步可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/VM_5318_Muyu_Town.jpg/1280px-VM_5318_Muyu_Town.jpg',
      },
    ],
  },

  // ── 恩施大峡谷（独立）────────────────────────────────────
  {
    id: 'huazhong-hubei-enshi',
    title: '恩施大峡谷 · 电梯浅览',
    region: 'huazhong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京飞恩施许家坪；景区观光车+垂直电梯。结束飞京。勿与神农架同短假硬赶盘山',
    budgetLabel: '本趟约2600–4500元（机票+门票电梯+市区电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Enshi_grand_canyon.jpg/1280px-Enshi_grand_canyon.jpg',
    summary:
      '鄂西峡谷名景：优先观光车与垂直电梯减台阶；云龙地缝长线可删。市区连住，少换店。',
    introduction:
      '搜「恩施大峡谷」应直达本卡。爸妈以电梯观景为主，不排特种兵走完所有栈道。\n\n神农架另线；山路相连但默认分趟。',
    seasonGuide:
      '春秋舒适。夏可走备防晒雨具。冬雾冰缩短户外。',
    whyFast: '只电梯观景半日+两晚也成立。',
    notices: [
      '恐高者选段外观，勿强下地缝。',
      '栈道湿滑防滑鞋。',
      '土家菜偏辣，点微辣。',
      '勿与神农架同短假。',
    ],
    researchKeywords: ['恩施大峡谷 电梯 父母', '恩施 观光车', '云龙地缝 可删'],
    sources: [
      {
        title: 'Wikivoyage：湖北',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B9%96%E5%8C%97',
        kind: 'other',
        note: '恩施进出，已改写',
      },
    ],
    stops: [
      {
        id: 'es-city',
        name: '恩施市区慢住',
        days: 1.5,
        pace: 'slow',
        lat: 30.27,
        lng: 109.49,
        summary: '近医院电梯酒店；抵达休整。',
        tips: '少换店。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/202309_Enshi_City%2C_Hubei_at_Night.jpg/1280px-202309_Enshi_City%2C_Hubei_at_Night.jpg',
      },
      {
        id: 'es-canyon',
        name: '大峡谷电梯观景',
        days: 1.5,
        pace: 'slow',
        lat: 30.4,
        lng: 109.2,
        summary: '观光车+垂直电梯；量力即返。',
        tips: '地缝长线可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Enshi_grand_canyon.jpg/1280px-Enshi_grand_canyon.jpg',
      },
      {
        id: 'es-dislot-optional',
        name: '云龙地缝（可选可删）',
        days: 0.5,
        pace: 'fast',
        lat: 30.41,
        lng: 109.19,
        summary: '台阶与潮湿；默认可删。',
        tips: '膝稳不佳整段跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Enshi_grand_canyon.jpg/1280px-Enshi_grand_canyon.jpg',
      },
    ],
  },

  // ── 西江 + 肇兴（黔东南廊；二选一加深）────────────────────
  {
    id: 'xinan-guizhou-dong-corridor',
    title: '黔东南 · 西江肇兴浅访',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic', 'corridor'],
    daysLabel: '约5–8天',
    transport:
      '北京飞贵阳，高铁/包车经凯里至西江或肇兴；寨内坡道多，包车少换乘。结束回贵阳飞京。镇远古城另线，勿一周硬拼三线',
    budgetLabel: '本趟约3200–5500元（机票高铁包车+门票+电梯/低楼层客栈；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Xijiang_Miao_Village.jpg/1280px-Xijiang_Miao_Village.jpg',
    summary:
      '黔东南侗苗廊：西江千户苗寨观景台浅览 + 肇兴侗寨鼓楼平路二选一加深；坡道台阶诚实可删，勿连赶多寨。',
    introduction:
      '贵阳慢住线里的「侗寨浅访」升格为可搜廊卡。西江与肇兴车程约两小时量级，适合一主一辅，不排特种兵一日三寨。\n\n镇远沿江平地另有专线；黄果树/梵净/荔波分线。',
    seasonGuide:
      '春秋最宜。夏湿热多早晚出门。冬阴冷备抓绒。',
    whyFast: '只西江或只肇兴三晚也成立；另一寨整段可删。',
    notices: [
      '寨内坡道台阶多，选观景台/鼓楼平路，勿强爬最高点。',
      '山路多弯，包车慎夜赶。',
      '酸辣口味改清淡；少强劝酒。',
      '勿与镇远+黄果树同周硬拼。',
    ],
    researchKeywords: ['西江千户苗寨 父母', '肇兴侗寨 鼓楼', '黔东南 慢游 凯里'],
    sources: [
      {
        title: 'Wikivoyage：贵州',
        url: 'https://zh.wikivoyage.org/wiki/%E8%B4%B5%E5%B7%9E',
        kind: 'other',
        note: '黔东南村寨提示，已改写适老',
      },
    ],
    stops: [
      {
        id: 'qd-kaili-gate',
        name: '凯里中转缓冲',
        days: 0.5,
        pace: 'slow',
        lat: 26.58,
        lng: 107.98,
        summary: '高铁/包车节点；可当日续行。',
        tips: '行程紧可不进城过夜。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Xijiang_Miao_Village.jpg/1280px-Xijiang_Miao_Village.jpg',
      },
      {
        id: 'qd-xijiang',
        name: '西江千户苗寨浅住',
        days: 2.5,
        pace: 'slow',
        lat: 26.49,
        lng: 108.17,
        summary: '观景台+寨内平缓段；高坡可删。',
        tips: '夜景人多浅逛即回。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Xijiang_Miao_Village.jpg/1280px-Xijiang_Miao_Village.jpg',
      },
      {
        id: 'qd-zhaoxing',
        name: '肇兴侗寨（二选一加深）',
        days: 2.5,
        pace: 'slow',
        lat: 25.91,
        lng: 109.16,
        summary: '鼓楼平路浅访；与西江勿同日。',
        tips: '可删整段只留西江。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/1_zhaoxing_2015.jpg/1280px-1_zhaoxing_2015.jpg',
      },
    ],
  },

  // ── 中山（珠三角城市补线）────────────────────────────────
  {
    id: 'huanan-guangdong-zhongshan',
    title: '中山 · 孙中山故居浅住',
    region: 'huanan',
    seasons: ['autumn', 'winter', 'spring', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京飞深圳/广州，城际或打车至中山；市区打车。结束后经深穗飞京。互补珠海顺德，勿与开平丹霞同短假硬串',
    budgetLabel: '本趟约1600–3000元（机票城际+电梯酒店）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Former_Residence_of_Mr._Sun_Yat-sen.jpg/1280px-Former_Residence_of_Mr._Sun_Yat-sen.jpg',
    summary:
      '珠西城市补线：翠亨孙中山故居平缓参观，市区公园散步；不排主题乐园特种兵。',
    introduction:
      '中山填珠三角西岸城市缺口。爸妈以故居与平路公园为主，暑热天缩短午后户外。',
    seasonGuide: '秋冬春宜。夏湿热多室内空调馆。',
    whyFast: '只故居半日+两晚也成立。',
    notices: ['故居预约以现场/官方为准。', '暑热防晒补水。', '勿与开平同短假硬赶。'],
    researchKeywords: ['中山 孙中山故居 父母', '翠亨村 慢游', '中山 城际'],
    sources: [
      {
        title: 'Wikivoyage：中山',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%AD%E5%B1%B1',
        kind: 'other',
        note: '市区与故居要点，已改写',
      },
    ],
    stops: [
      {
        id: 'zs-base',
        name: '中山市区慢住',
        days: 1.5,
        pace: 'slow',
        lat: 22.52,
        lng: 113.39,
        summary: '近城际/医院电梯酒店。',
        tips: '少换店。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Former_Residence_of_Mr._Sun_Yat-sen.jpg/1280px-Former_Residence_of_Mr._Sun_Yat-sen.jpg',
      },
      {
        id: 'zs-cuiheng',
        name: '翠亨孙中山故居',
        days: 1,
        pace: 'slow',
        lat: 22.45,
        lng: 113.53,
        summary: '故居与纪念馆平缓参观。',
        tips: '户外暑热缩短。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Former_Residence_of_Mr._Sun_Yat-sen.jpg/1280px-Former_Residence_of_Mr._Sun_Yat-sen.jpg',
      },
      {
        id: 'zs-park-optional',
        name: '市区公园浅走（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 22.52,
        lng: 113.38,
        summary: '平路散步；可删。',
        tips: '午后回酒店避晒。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Former_Residence_of_Mr._Sun_Yat-sen.jpg/1280px-Former_Residence_of_Mr._Sun_Yat-sen.jpg',
      },
    ],
  },

  // ── 兰州黄河（独立；夏河另线）────────────────────────────
  {
    id: 'xibei-gansu-lanzhou-huanghe',
    title: '兰州黄河 · 中山桥浅住',
    region: 'xibei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京飞兰州中川或高铁兰州西；市区地铁/打车滨河。结束后飞/高铁回京。夏河拉卜楞另线，勿同短假硬上高原',
    budgetLabel: '本趟约1800–3200元（机票高铁+黄河边电梯酒店）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lanzhou_Zhongshan_Qiao_2013.12.28_17-26-24.jpg/1280px-Lanzhou_Zhongshan_Qiao_2013.12.28_17-26-24.jpg',
    summary:
      '甘肃枢纽名景独立卡：中山桥与滨河路平走、牛肉面清汤；只作黄河浅住，不硬接河西长线或夏河高原。',
    introduction:
      '兰州常被当作河西/夏河中转——本卡让「黄河风情线」可单独搜索。爸妈以滨河平路与市区三甲便利为主。\n\n夏河约2900米另产品；河西敦煌张掖见既有长线。',
    seasonGuide:
      '春秋舒适。夏可走防晒。冬干冷缩短滨河时间。',
    whyFast: '只中山桥半日+两晚也成立。',
    notices: [
      '滨河风大备外套。',
      '牛肉面清汤少辣油。',
      '勿同短假硬上夏河。',
      '干燥护唇护眼。',
    ],
    researchKeywords: ['兰州 中山桥 父母', '兰州 黄河 慢住', '兰州 牛肉面'],
    sources: [
      {
        title: 'Wikivoyage：兰州',
        url: 'https://zh.wikivoyage.org/wiki/%E5%85%B0%E5%B7%9E',
        kind: 'other',
        note: '黄河风情线，已改写',
      },
    ],
    stops: [
      {
        id: 'lz-huanghe-base',
        name: '兰州市区慢住',
        days: 1.5,
        pace: 'slow',
        lat: 36.06,
        lng: 103.83,
        summary: '近滨河或地铁电梯酒店。',
        tips: '近三甲更安心。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Skyline_Lanzhou_August_2025.jpg/1280px-Skyline_Lanzhou_August_2025.jpg',
      },
      {
        id: 'lz-zhongshan-qiao',
        name: '中山桥 + 滨河路',
        days: 1,
        pace: 'slow',
        lat: 36.065,
        lng: 103.815,
        summary: '铁桥外观与滨河平走；半日为主。',
        tips: '风大备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lanzhou_Zhongshan_Qiao_2013.12.28_17-26-24.jpg/1280px-Lanzhou_Zhongshan_Qiao_2013.12.28_17-26-24.jpg',
      },
      {
        id: 'lz-museum-optional',
        name: '省博 / 室内展（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 36.07,
        lng: 103.84,
        summary: '空调看展歇脚；可删。',
        tips: '预约以官方为准。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Skyline_Lanzhou_August_2025.jpg/1280px-Skyline_Lanzhou_August_2025.jpg',
      },
    ],
  },

  // ── 潮汕加深（脱离广州基地）──────────────────────────────
  {
    id: 'huanan-guangdong-chaoshan',
    title: '潮汕 · 潮州古城与汕头骑楼',
    region: 'huanan',
    seasons: ['autumn', 'winter', 'spring', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约4–6天',
    transport:
      '北京飞揭阳潮汕或高铁经潮汕站；古城打车/公交，勿自驾进窄巷。结束后飞揭阳或经厦门/广州回京。广州慢住线仍保留潮汕可选，本 id 供直达加深',
    budgetLabel: '本趟约2400–4200元（机票高铁+古城电梯酒店+餐饮；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Paifangjie_%28cropped%29.jpg/1280px-Paifangjie_%28cropped%29.jpg',
    summary:
      '潮汕名城加深：潮州牌坊街/广济桥平地慢逛 + 汕头小公园骑楼半日；工夫茶与牛肉火锅节奏慢，南澳默认可删。',
    introduction:
      '广州湾区长线里的潮汕支线升格为独立加深卡。爸妈以潮州古城连住为主，汕头骑楼作半日或一晚，不必连赶南澳。',
    seasonGuide:
      '秋冬春避寒宜。夏湿热缩短午后；台风季关注预警。',
    whyFast: '只潮州三晚也成立；汕头/南澳可删。',
    notices: [
      '潮汕站进城约40–50分钟，别自驾进窄巷。',
      '海鲜火锅别贪凉；肠胃弱改清淡卤味。',
      '广济桥/牌坊街平地为主，暑热上午出门。',
      '南澳船渡默认可删。',
    ],
    researchKeywords: ['潮州 牌坊街 父母', '汕头 小公园 骑楼', '潮汕 高铁 慢游'],
    sources: [
      {
        title: 'Wikivoyage：潮州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%BD%AE%E5%B7%9E',
        kind: 'other',
        note: '古城与交通，已改写',
      },
    ],
    stops: [
      {
        id: 'cs-chaozhou-base',
        name: '潮州古城慢住',
        days: 2.5,
        pace: 'slow',
        lat: 23.66,
        lng: 116.63,
        summary: '近牌坊街电梯酒店；工夫茶浅尝。',
        tips: '石板防滑。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Paifangjie_%28cropped%29.jpg/1280px-Paifangjie_%28cropped%29.jpg',
      },
      {
        id: 'cs-guangji',
        name: '广济桥 / 牌坊街',
        days: 1,
        pace: 'slow',
        lat: 23.66,
        lng: 116.64,
        summary: '平地慢逛；午后回酒店。',
        tips: '桥段人多错峰。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Paifangjie_%28cropped%29.jpg/1280px-Paifangjie_%28cropped%29.jpg',
      },
      {
        id: 'cs-shantou',
        name: '汕头小公园骑楼（可选）',
        days: 1,
        pace: 'slow',
        lat: 23.35,
        lng: 116.68,
        summary: '半日或一晚；与潮州勿同日特种兵。',
        tips: '南澳默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Shantou_harbour_and_skyline_viewed_from_Double_Island_June_2022.jpg/1280px-Shantou_harbour_and_skyline_viewed_from_Double_Island_June_2022.jpg',
      },
    ],
  },

  // ── G318 川藏中段浅尝（雅安–泸定；非全线）────────────────
  {
    id: 'xinan-sichuan-g318-mid',
    title: 'G318 中段 · 雅安泸定浅尝',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['corridor'],
    daysLabel: '约4–6天',
    transport:
      '北京飞成都缓冲→高铁/包车至雅安→泸定桥浅访→必须回撤成都再飞京。不西进康定新都桥以外高原；不与拉萨段贯通',
    budgetLabel: '本趟约2800–4800元（机票包车+住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Luding_Bridge_June_07_350D_127.jpg/1280px-Luding_Bridge_June_07_350D_127.jpg',
    summary:
      'G318 适老中段诚实浅尝：只做成都缓冲 + 雅安歇脚 + 泸定桥外观，不冲理塘折多、不进藏。高原与雨季塌方风险写清；可整段取消。',
    introduction:
      '川藏东段（康定/新都桥）与拉萨–林芝已有独立产品。本卡填「中段」搜索缺口，但诚实限定在雅安–泸定低海拔走廊，避免父母被「中段」误导去冲四千米。\n\n非 G318 全线贯通；雨季与夜间盘山默认不排。',
    seasonGuide:
      '春秋较稳。夏注意暴雨塌方预警。冬冰雪路滑可整段取消改成都平原。',
    whyFast: '只雅安两晚也成立；泸定可删。',
    notices: [
      '成都平原先适应再西行短段。',
      '泸定桥外观为主；铁索桥强行通过可删。',
      '持续不适立即回撤成都。',
      '禁止与康定以西/拉萨段自驾贯通。',
      '心脑血管等基础病应放弃或只留成都。',
    ],
    researchKeywords: ['G318 泸定桥 父母', '雅安 川藏 浅尝', '川藏线 中段 适老'],
    sources: [
      {
        title: 'Wikivoyage：雅安 / 泸定',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9B%85%E5%AE%89',
        kind: 'other',
        note: '进出与诚实边界，已改写',
      },
    ],
    stops: [
      {
        id: 'g318m-chengdu',
        name: '成都平原缓冲',
        days: 2,
        pace: 'slow',
        lat: 30.67,
        lng: 104.06,
        summary: '先休整；近华西体系选酒店。',
        tips: '不适勿西行。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
      },
      {
        id: 'g318m-yaan',
        name: '雅安歇脚',
        days: 1.5,
        pace: 'slow',
        lat: 30.01,
        lng: 103.04,
        summary: '雨城慢住；作泸定日归或过夜节点。',
        tips: '备雨具。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ya%27an%2C_August_2020.jpg/1280px-Ya%27an%2C_August_2020.jpg',
      },
      {
        id: 'g318m-luding',
        name: '泸定桥浅访（可选）',
        days: 1,
        pace: 'fast',
        lat: 29.91,
        lng: 102.23,
        summary: '外观为主；可删整段。',
        tips: '盘山慎夜赶；不适即返雅安/成都。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Luding_Bridge_June_07_350D_127.jpg/1280px-Luding_Bridge_June_07_350D_127.jpg',
      },
      {
        id: 'g318m-descend',
        name: '下撤成都',
        days: 0.5,
        pace: 'fast',
        lat: 30.67,
        lng: 104.06,
        summary: '必须回成都再飞北京。',
        tips: '勿西向加塞康定理塘。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
      },
    ],
  },

  // ── 晋中太谷祁县 ↔ 平遥（overwrite 织紧）──────────────────
  {
    id: 'huabei-shanxi-pingyao-deep',
    title: '晋中 · 平遥太谷祁县廊',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: true,
    themes: ['famous-scenic', 'corridor'],
    daysLabel: '约5–8天',
    transport:
      '北京西/丰台高铁至太原南约2.5–3小时；太原↔平遥高铁约1小时；太谷/祁县（乔家）包车或铁路日归。结束后高铁回京',
    budgetLabel: '本趟约2500–4500元（高铁+古城住宿+门票）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
    summary:
      '晋中名景廊：太原枢纽 + 平遥古城慢住 + 祁县乔家/太谷晋商院落日归一处；勿一日乔家+平遥+太原三线特种兵。',
    introduction:
      '与「晋北大同慢住」互补。本波把太谷/祁县织进平遥产品：古城连住为主，晋商大院只选一处日归，台阶与展馆密度量力。\n\n五台山另线；不必北上云冈悬空寺。',
    seasonGuide:
      '春秋最舒适。夏注意防晒与石板烫脚。冬干冷缩短户外。',
    whyFast: '太原博物馆/晋祠与乔家都可删；只平遥三晚也成立。',
    notices: [
      '平遥禁止车入城；石板防滑鞋。',
      '乔家大院室内展馆密集，选一段即返。',
      '勿一日赶乔家+平遥城墙+太原。',
      '面食清汤少醋少辣。',
    ],
    researchKeywords: [
      '平遥古城 慢住 退休',
      '乔家大院 父母 日归',
      '太谷 祁县 晋商',
      '太原 平遥 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：平遥',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B9%B3%E9%81%A5',
        kind: 'other',
        note: '古城步行与交通，已改写',
      },
      {
        title: 'Wikivoyage：太原',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%AA%E5%8E%9F',
        kind: 'other',
        note: '高铁枢纽参考',
      },
    ],
    stops: [
      {
        id: 'taiyuan-hub',
        name: '太原（枢纽休整）',
        days: 1.5,
        pace: 'slow',
        lat: 37.87,
        lng: 112.55,
        summary:
          '高铁到太原南，近医院电梯房歇；可选晋祠或省博一处，次日去平遥。',
        tips: '回京也经太原最顺。市区不必排满。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
      },
      {
        id: 'pingyao-deep',
        name: '平遥古城（慢住）',
        days: 3.5,
        pace: 'slow',
        lat: 37.189,
        lng: 112.176,
        summary:
          '城外停车/步行入城，近城门电梯客栈；每天一段街巷或一座票号。',
        tips: '日升昌等有门槛台阶，外观亦可。夜景人多浅逛即回。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
      },
      {
        id: 'pingyao-wall-optional',
        name: '城墙选段（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 37.195,
        lng: 112.18,
        summary: '登城选平缓段短走；腿脚不适整段跳过。',
        tips: '不要强行环城一周。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
      },
      {
        id: 'qixian-qiao-optional',
        name: '祁县乔家大院（可选日归）',
        days: 1,
        pace: 'fast',
        lat: 37.36,
        lng: 112.33,
        summary: '晋商院落选一段室内+外观；勿与平遥城墙同日。',
        tips: '太谷晋商院落二选一即可，默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Qiao_Family_Compound%2C_Jinyiyuan.JPG/1280px-Qiao_Family_Compound%2C_Jinyiyuan.JPG',
      },
    ],
  },
];
