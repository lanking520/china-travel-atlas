import type { Route } from '../types';

/**
 * 深挖缺口 B：宁夏沙坡头 / 山东泰山浅尝 / 沈阳故宫北陵 /
 * 延吉轻线 / 五大莲池夏短住（跳过天津文化线、长春薄线、雪乡慎选）
 */
export const patchRoutes: Route[] = [
  // ── 西北 · 宁夏沙坡头/中卫（互补银川三日）──────────────────
  {
    id: 'xibei-ningxia-shapotou',
    title: '中卫 · 沙坡头黄河浅游',
    region: 'xibei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3–5天',
    transport:
      '北京飞银川河东，高铁/包车至中卫约1.5–2小时；或飞中卫香山机场。结束后经银川或中卫飞回北京',
    budgetLabel: '本趟约2500–4500元（含机票分摊与景区交通）',
    coverImage:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200',
    summary:
      '与「银川西夏陵三日」互补：中卫歇脚，沙坡头选观光缆车/黄河筏等低风险项目，拒高空滑沙与刺激沙漠车。春秋沙尘少；暑期地表烫改银川线。看够经银川回京。',
    whyFast:
      '沙坡头半日至一日即可；腾格里深度穿越与多日沙漠露营一律不排。',
    researchKeywords: [
      '沙坡头 父母 攻略',
      '中卫 沙坡头 缆车 黄河',
      '宁夏 中卫 三日 退休',
    ],
    sources: [
      {
        title: 'Wikivoyage：中卫',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%AD%E5%8D%AB',
        kind: 'other',
        note: '进出与沙坡头区位概览，已改写',
      },
      {
        title: 'Wikivoyage：宁夏',
        url: 'https://zh.wikivoyage.org/wiki/%E5%AE%81%E5%A4%8F',
        kind: 'other',
        note: '省内交通与季节参考',
      },
      {
        title: '宁夏回族自治区文化和旅游厅',
        url: 'https://whhlyt.nx.gov.cn/',
        kind: 'official',
        note: '景区开放与票务以官方公告为准',
      },
    ],
    stops: [
      {
        id: 'zhongwei-base',
        name: '中卫市区（进出休整）',
        days: 2,
        pace: 'slow',
        lat: 37.515,
        lng: 105.197,
        summary:
          '高铁或机场到后近电梯酒店歇脚；市区黄河边浅走即可，不赶夜场演出。',
        tips:
          '银川↔中卫高铁较省力。干燥备润唇与防晒；饮食清淡，手抓羊肉适量。返京优先经银川直飞。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
      {
        id: 'shapotou-scenic',
        name: '沙坡头（观光浅游）',
        days: 1,
        pace: 'slow',
        lat: 37.464,
        lng: 105.005,
        summary:
          '沙漠与黄河交汇。优先观光车/缆车与黄河筏（量力），看沙看水即可。',
        tips:
          '拒高风险滑沙、沙漠冲浪车；恐高可只乘平缓段或岸边观景。紫外与风沙强：帽、墨镜、围巾。60+票务以景区当日为准。上午去、午后回城午休。',
        image:
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
      },
      {
        id: 'shapotou-optional',
        name: '黄河边散步或返银缓冲（可选）',
        days: 1,
        pace: 'fast',
        lat: 37.45,
        lng: 105.05,
        summary:
          '行程松可多一日河边慢走；紧则直接返银川飞京，本站整段可删。',
        tips:
          '勿再塞镇北堡/贺兰山岩画到同一短假——那些留给银川主线。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
  },

  // ── 华北 · 山东泰山缆车浅尝（互补青岛海滨长线）────────────
  {
    id: 'huabei-shandong-taishan',
    title: '泰安 · 泰山缆车浅尝',
    region: 'huabei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约2–4天',
    transport:
      '北京南高铁至泰安约1.5–2小时；景区公交/打车接驳缆车。结束后高铁回北京',
    budgetLabel: '本趟约1200–2800元（高铁+住宿+索道）',
    coverImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    summary:
      '与青岛海滨长线互补的山东短假：泰安歇一夜，天外村或桃花源乘缆车/索道上山浅看，绝不硬爬盘道十八盘。看够当日或次日高铁回京。',
    whyFast:
      '上山缆车+山顶短段即可；红门盘道全线、夜爬看日出一律不排。',
    researchKeywords: [
      '泰山 缆车 父母 攻略',
      '泰安 高铁 一日 两日',
      '泰山 索道 免爬 退休',
    ],
    sources: [
      {
        title: 'Wikivoyage：泰山',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B3%B0%E5%B1%B1',
        kind: 'other',
        note: '索道分区与体力提示，已改写',
      },
      {
        title: '泰安市文化和旅游局',
        url: 'https://www.taian.gov.cn/',
        kind: 'official',
        note: '门票索道与开放公告以官方为准',
      },
      {
        title: 'Wikivoyage：山东',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B1%B1%E4%B8%9C',
        kind: 'other',
        note: '省内高铁回京参考',
      },
    ],
    stops: [
      {
        id: 'taian-base',
        name: '泰安市区（高铁进出）',
        days: 1,
        pace: 'slow',
        lat: 36.2,
        lng: 117.087,
        summary:
          '高铁到泰安，近岱庙或火车站电梯酒店；傍晚平地浅逛岱庙外围即可。',
        tips:
          '北京南↔泰安约1.5–2小时最省事。住电梯房，少搬行李。岱庙内台阶量力，累了外观。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'taishan-cable',
        name: '泰山（缆车浅尝）',
        days: 1,
        pace: 'slow',
        lat: 36.254,
        lng: 117.101,
        summary:
          '天外村或桃花源乘观光车+索道上山，山顶平缓段短走拍照，原路缆车下山。',
        tips:
          '禁止盘道硬爬与夜爬。恐高选车厢式索道、抓紧扶手。风大雾重可改期或只逛山脚。穿防滑鞋；索道与门票分时以当日公告为准。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'taian-return',
        name: '泰安缓冲 / 高铁回京',
        days: 1,
        pace: 'fast',
        lat: 36.195,
        lng: 117.12,
        summary:
          '下山后午休，下午高铁回北京；体力好可次日早班车走。',
        tips:
          '勿再塞曲阜三孔硬拼同一短假（路途与台阶另算）。回京预留检票时间。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
    ],
  },

  // ── 东北 · 沈阳故宫+北陵 ────────────────────────────────────
  {
    id: 'dongbei-liaoning-shenyang',
    title: '沈阳 · 故宫与北陵短住',
    region: 'dongbei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约2–4天',
    transport:
      '北京朝阳/北京站高铁至沈阳约4–5小时，或飞桃仙机场；市内地铁/打车。结束后高铁或飞回北京',
    budgetLabel: '本趟约1500–3500元（高铁/机票+住宿+门票）',
    coverImage:
      'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200',
    summary:
      '与大连海滨互补的辽宁城市短线：沈阳故宫半日、北陵公园平路散步，室内外可调配。春秋舒适；冬寒缩短户外。看够高铁回京。',
    whyFast:
      '故宫与北陵分两日更稳；中街浅逛即可，勿再塞本溪水洞同周特种兵。',
    researchKeywords: [
      '沈阳故宫 攻略 父母',
      '北陵公园 沈阳 散步',
      '沈阳 高铁 两日 退休',
    ],
    sources: [
      {
        title: 'Wikivoyage：沈阳',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B2%88%E9%98%B3',
        kind: 'other',
        note: '市区分区与交通概览，已改写',
      },
      {
        title: '沈阳故宫博物院',
        url: 'https://www.sypm.org.cn/',
        kind: 'official',
        note: '开放与预约以官网为准',
      },
      {
        title: '辽宁省文化和旅游厅',
        url: 'https://www.lntour.gov.cn/',
        kind: 'official',
        note: '文旅提示与适老政策参考',
      },
    ],
    stops: [
      {
        id: 'shenyang-base',
        name: '沈阳市区（进出休整）',
        days: 1,
        pace: 'slow',
        lat: 41.805,
        lng: 123.432,
        summary:
          '高铁沈阳站或机场到后近地铁电梯酒店；中街或太原街浅逛、留午休。',
        tips:
          '京沈高铁当日可达。东北菜适量、别过油咸。冬春风大备厚外套。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'shenyang-palace',
        name: '沈阳故宫',
        days: 1,
        pace: 'slow',
        lat: 41.796,
        lng: 123.45,
        summary:
          '一宫两陵中的宫殿区。院落平地为主，选重点殿宇慢看，不必穷尽讲解。',
        tips:
          '预约与60+优惠以当日为准。石板防滑鞋；暑热选早晚。与北陵分日，勿上午故宫下午硬塞北陵。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'beiling-park',
        name: '北陵（昭陵）公园',
        days: 1,
        pace: 'slow',
        lat: 41.84,
        lng: 123.43,
        summary:
          '清代关外陵寝与城市公园。神道与湖区平路散步，殿区量力短入。',
        tips:
          '公园面积大，坐观光车或只走一段即返。台阶多处可跳过。雨后路面滑。结束后高铁回京。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
    ],
  },

  // ── 东北 · 延吉轻线（优于长春薄线）──────────────────────────
  {
    id: 'dongbei-jilin-yanbian',
    title: '延吉 · 朝鲜族风情轻线',
    region: 'dongbei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3–5天',
    transport:
      '北京飞延吉朝阳川，或高铁至长春再转延吉；市区打车。结束后飞回北京（勿默认接长白山特种兵）',
    budgetLabel: '本趟约2500–4500元（含机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    summary:
      '与长白山北坡互补的吉林城市轻线：延吉市区美食与公园平地慢走，可选帽儿山或布尔哈通河畔浅看。不排长白天池硬接；行程紧只留延吉后飞京。',
    whyFast:
      '市区两三处即可；防川边境口岸路远，腿脚一般整段跳过。',
    researchKeywords: [
      '延吉 旅行 父母 攻略',
      '延边 朝鲜族 美食 慢游',
      '延吉 三日 退休',
    ],
    sources: [
      {
        title: 'Wikivoyage：延吉',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BB%B6%E5%90%89',
        kind: 'other',
        note: '市区与饮食概览，已改写',
      },
      {
        title: '延边州文化和旅游局',
        url: 'https://www.yanbian.gov.cn/',
        kind: 'official',
        note: '景区与活动公告以官方为准',
      },
      {
        title: 'Wikivoyage：吉林',
        url: 'https://zh.wikivoyage.org/wiki/%E5%90%89%E6%9E%97',
        kind: 'other',
        note: '与长白山线区分参考',
      },
    ],
    stops: [
      {
        id: 'yanji-base',
        name: '延吉市区（慢住）',
        days: 3,
        pace: 'slow',
        lat: 42.891,
        lng: 129.509,
        summary:
          '近市中心电梯酒店；每天一段步行街或公园，冷面烤肉适量，下午必留午休。',
        tips:
          '直飞最省力。辣食与酒适量；高血压注意咸度。双语街区拍照尊重他人。勿默认「延吉过夜→天池一日特种兵」。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'yanji-maoershan',
        name: '帽儿山或河畔（二选一）',
        days: 1,
        pace: 'fast',
        lat: 42.92,
        lng: 129.48,
        summary:
          '帽儿山量力短登或只走山下；布尔哈通河畔平路更稳。两处只留一处。',
        tips:
          '台阶多改河畔。雨天防滑。防川/图们口岸车程长，本短线建议跳过。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
    ],
  },

  // ── 东北 · 五大莲池夏短住（优于雪乡慎选）────────────────────
  {
    id: 'dongbei-heilongjiang-wudalianchi',
    title: '五大莲池 · 火山矿泉夏短住',
    region: 'dongbei',
    seasons: ['summer'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约4–6天',
    transport:
      '北京飞哈尔滨太平，火车至北安或五大莲池站再打车/班车约1小时入景区；或哈尔滨包车约4小时。结束后经哈尔滨飞回北京',
    budgetLabel: '本趟约3000–5500元（含机票分摊与景区观光车）',
    coverImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    summary:
      '与哈尔滨冰雪线互补的黑龙江夏短住：五大莲池镇歇脚，北饮泉与火山博物馆平缓段，老黑山乘观光车量力短登。拒雪乡冬线摆渡长途。看够经哈尔滨飞京。',
    whyFast:
      '泉水+博物馆+一处火山即可；龙门石寨长栈道与多日环山可删。',
    researchKeywords: [
      '五大莲池 夏天 攻略',
      '五大莲池 父母 观光车',
      '哈尔滨 五大莲池 两日',
    ],
    sources: [
      {
        title: 'Wikivoyage：五大莲池',
        url: 'https://zh.wikivoyage.org/wiki/%E4%BA%94%E5%A4%A7%E8%BF%9E%E6%B1%A0',
        kind: 'other',
        note: '火山群与交通概览，已改写',
      },
      {
        title: '五大莲池风景区（文旅信息）',
        url: 'https://www.hlj.gov.cn/',
        kind: 'official',
        note: '门票观光车与开放以景区公告为准',
      },
      {
        title: 'Wikivoyage：黑龙江',
        url: 'https://zh.wikivoyage.org/wiki/%E9%BB%91%E9%BE%99%E6%B1%9F',
        kind: 'other',
        note: '与哈尔滨进出衔接参考',
      },
    ],
    stops: [
      {
        id: 'harbin-buffer',
        name: '哈尔滨（进出缓冲）',
        days: 1,
        pace: 'slow',
        lat: 45.757,
        lng: 126.642,
        summary:
          '飞抵后歇一夜再北上；返程亦经哈尔滨飞京，避免景区直接赶红眼航班。',
        tips:
          '本线主推夏季避暑。中央大街可浅走，勿改接冰雪大世界（季节不符）。雪乡路远耐寒要求高，健康约60优先本火山线。',
        image:
          'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
      },
      {
        id: 'wudalianchi-town',
        name: '五大莲池镇（慢住）',
        days: 3,
        pace: 'slow',
        lat: 48.517,
        lng: 126.198,
        summary:
          '住景区附近电梯酒店/疗养型住宿；每天一处泉水或博物馆，下午午休。',
        tips:
          '景点分散务必买观光车通票或包车。早晚温差大备薄外套；防蚊防晒。矿泉胃弱勿空腹豪饮。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
      {
        id: 'wudalianchi-volcano',
        name: '北饮泉 + 老黑山（量力）',
        days: 1,
        pace: 'fast',
        lat: 48.7,
        lng: 126.12,
        summary:
          '北饮泉平地品泉；老黑山乘观光车，山顶观景台短停即下，不走石海长环线。',
        tips:
          '火山岩硌脚穿防滑运动鞋。台阶多可只到半山或改药泉山缓坡。65+大门票优惠以当日为准，观光车常另计。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
    ],
  },
];
