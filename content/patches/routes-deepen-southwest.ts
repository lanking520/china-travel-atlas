import type { Route } from '../types';

/** 西南深挖：版纳避寒 / 滇西腾冲 / 川西 compose pilot（非新疆） */
export const patchRoutes: Route[] = [
  // ── 西南 · 西双版纳冬避寒（县域深挖 enrich 2026-08-02）────────
  {
    id: 'yunnan-xishuangbanna-winter',
    title: '西双版纳 · 冬避寒慢住',
    region: 'xinan',
    seasons: ['winter', 'spring'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约2–4周（也可压到10–14天）',
    transport:
      '北京飞西双版纳嘎洒（常经昆明中转），市区/告庄打车；勐海/勐仑/野象谷包车日归；结束飞回北京。不经河口出境（跨境见独立廊道）',
    budgetLabel: '对照月预算约2万（含机票分摊）；10–14天版约8000–14000元',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/City_of_Jinghong%2C_Yunnan%2C_China_in_2015.JPG/1280px-City_of_Jinghong%2C_Yunnan%2C_China_in_2015.JPG',
    summary:
      '冬春避寒以景洪为锚：告庄浅逛、曼听平地，再按体力选勐仑植物园、勐海茶山外观或野象谷观光车。湿热蚊虫多，午休必留；勐腊过夜与高强度雨林徒步默认可删。结束后飞回北京休整。',
    introduction:
      '西双版纳傣族自治州以景洪为进出枢纽。爸妈产品优先「景洪电梯短租 + 每周最多一两次县域日归」：曼听/告庄平缓街区打底，中科院勐仑植物园靠观光车，勐海以茶园外观与集镇补给为主，野象谷只走正规景区观光段。\n\n不把勐腊—磨憨口岸硬塞进默认线；不安排未开放通道与夜间山路。跨境越南见河口—沙巴独立廊道，勿与本线连轴。',
    seasonGuide:
      '主推冬春避寒（干季相对好走）。盛夏湿热更重宜缩短户外；雨季路面滑、防蚊升级。雾霾少但紫外强，备帽与驱蚊。',
    whyFast:
      '植物园/勐海/野象谷任一段可删；主体留给景洪慢住与空白日，勿连刷边境口岸。',
    notices: [
      '行前关注天气预报与景区预约；腿脚紧优先观光车/电瓶车。',
      '全年防晒驱蚊；午后强制回酒店歇，防中暑与肠胃不适。',
      '傣味少油辣、少生腌；饮用水与冰块卫生自判。',
      '野象谷遵守园区规定，勿投喂、勿离开步道；体力不够整段删。',
      '不默认过夜勐腊/磨憨；不与河口出境线同趟特种兵。',
    ],
    researchKeywords: [
      '西双版纳 过冬 慢住 退休',
      '景洪 告庄 曼听 攻略',
      '西双版纳 热带植物园 观光车',
      '勐海 爸妈 日归',
      '野象谷 观光车 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：西双版纳',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%8F%8C%E7%89%88%E7%BA%B3',
        kind: 'other',
        note: '景洪枢纽、气候与周边概览，已改写',
      },
      {
        title: '西双版纳傣族自治州人民政府',
        url: 'https://www.xsbn.gov.cn/',
        kind: 'official',
        note: '景区开放与天气公告以当地政府/文旅为准',
      },
      {
        title: '中国科学院西双版纳热带植物园',
        url: 'https://www.xtbg.ac.cn/',
        kind: 'official',
        note: '园区分区与开放信息参考',
      },
    ],
    stops: [
      {
        id: 'jinghong-base',
        name: '景洪（慢住基地）',
        days: 10,
        pace: 'slow',
        lat: 22.009,
        lng: 100.797,
        summary:
          '告庄或市区电梯公寓连住；抵达先适应湿热，每天最多一个主点，下午回酒店歇。',
        tips:
          '北京常经昆明中转；备轻薄长袖防蚊。近医院电梯房，先订一周试住再续。10–14天版把基地压到7–8天。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/City_of_Jinghong%2C_Yunnan%2C_China_in_2015.JPG/1280px-City_of_Jinghong%2C_Yunnan%2C_China_in_2015.JPG',
      },
      {
        id: 'gaozhuang-optional',
        name: '告庄西双景浅逛',
        days: 2,
        pace: 'slow',
        lat: 22.0,
        lng: 100.78,
        summary: '傍晚平地浅逛与夜市外观；人多即撤，勿深夜久留。',
        tips: '台阶与石板量力；消费货比三家。可与基地日合并。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/1b/Jinghong-street-with-palms.jpg',
      },
      {
        id: 'manting-park',
        name: '曼听公园 · 傣式慢走',
        days: 2,
        pace: 'slow',
        lat: 21.978,
        lng: 100.826,
        summary:
          '平地园林与佛寺外观，树荫多；上午或傍晚去，避开正午暴晒。',
        tips:
          '穿防滑鞋。寺庙内尊重习俗、少大声。人多即撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Xishuangbanna.jpg/1280px-Xishuangbanna.jpg',
      },
      {
        id: 'xtbg-optional',
        name: '勐仑 · 中科院热带植物园（可选）',
        days: 1,
        pace: 'fast',
        lat: 21.928,
        lng: 101.252,
        summary:
          '包车往返勐仑（勐腊县境），园内观光车串联；选1–2个片区即可。',
        tips:
          '车程约1.5–2小时当日往返。园大勿硬走完全程；门票与观光车以当日公告为准。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tropical_Botanical_Garden%2C_Xishuangbanna_-_panoramio.jpg/1280px-Tropical_Botanical_Garden%2C_Xishuangbanna_-_panoramio.jpg',
      },
      {
        id: 'menghai-day-optional',
        name: '勐海茶山/集镇日归（可选）',
        days: 1,
        pace: 'fast',
        lat: 21.96,
        lng: 100.45,
        summary:
          '景洪西向包车：茶园外观与勐海县城补给；不排长距徒步采茶体验。',
        tips: '车程约1.5小时级；暑热缩短停留。可整段删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/39/Pu-erh_tea.jpg',
      },
      {
        id: 'wild-elephant-optional',
        name: '野象谷观光车（可选）',
        days: 1,
        pace: 'fast',
        lat: 22.17,
        lng: 100.87,
        summary:
          '正规景区观光车/栈道选段；以观景与科普为主，不期待必见野象。',
        tips:
          '遵守园区规定，勿投喂离道；雨天防滑。体力或排队过长即删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Elephantvalley-elephants.jpg/1280px-Elephantvalley-elephants.jpg',
      },
      {
        id: 'mengla-buffer-optional',
        name: '勐腊浅停缓冲（可选可删）',
        days: 1,
        pace: 'fast',
        lat: 21.48,
        lng: 101.56,
        summary:
          '仅当植物园往返过累需中途歇脚时考虑；默认不过夜、不进磨憨口岸。',
        tips: '默认可删；跨境老挝不在本产品范围。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tropical_Botanical_Garden%2C_Xishuangbanna_-_panoramio.jpg/1280px-Tropical_Botanical_Garden%2C_Xishuangbanna_-_panoramio.jpg',
      },
    ],
  },

  // ── 西南 · 滇西腾冲 ──────────────────────────────────────────
  {
    id: 'yunnan-dianxi-tengchong',
    title: '滇西 · 腾冲慢住',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约8–10天',
    transport:
      '北京飞保山或腾冲驼峰机场，市区打车；和顺/热海包车或景区摆渡；结束飞回北京',
    budgetLabel: '本趟约6000–11000元（含机票与温泉；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    summary:
      '腾冲：市区安顿+和顺+热海/火山选段，约八到十日够充实，不垫两周空日。海拔约1600米，多数人可适应；别把高黎贡硬徒步塞进日程。',
    whyFast:
      '火山公园观光车半日足够；主体时间留给和顺慢走与温泉，勿赶边境口岸环线。',
    researchKeywords: [
      '腾冲 慢住 退休 温泉',
      '和顺古镇 攻略 父母',
      '腾冲 热海 火山 观光车',
    ],
    sources: [
      {
        title: 'Wikivoyage：腾冲',
        url: 'https://zh.wikivoyage.org/wiki/%E8%85%BE%E5%86%B2',
        kind: 'other',
        note: '机场、和顺与热海概览，已改写',
      },
      {
        title: '腾冲市人民政府',
        url: 'https://www.tengchong.gov.cn/',
        kind: 'official',
        note: '景区开放与天气以当地公告为准',
      },
    ],
    stops: [
      {
        id: 'tengchong-base',
        name: '腾冲市区（慢住基地）',
        days: 4,
        pace: 'slow',
        lat: 25.02,
        lng: 98.499,
        summary:
          '近医院电梯酒店：市区散步、超市补给、温泉休整日穿插；不垫七日空转。',
        tips:
          '直飞腾冲或保山再转；行李一次放稳。春秋早晚凉，备薄外套。饮食少油辣。留空白日。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'heshun-town',
        name: '和顺古镇',
        days: 2,
        pace: 'slow',
        lat: 25.009,
        lng: 98.457,
        summary:
          '侨乡古镇，主街石板较平；图书馆与小巷浅逛，下午回城歇。',
        tips:
          '旺季人多，早入晚出。电瓶车可选。石板雨后滑，穿防滑鞋。不必住古镇内硬换酒店。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'rehai-volcano',
        name: '热海 · 火山地质公园（可选）',
        days: 2,
        pace: 'slow',
        lat: 24.95,
        lng: 98.44,
        summary:
          '热海泡正规温泉；火山区优先观光车观景台，别硬徒步全环。',
        tips:
          '温泉选正规景区/酒店，高血压遵医嘱控水温时长。火山台阶多可只看1–2个点。高黎贡徒步整段跳过。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
    ],
  },

  // ── 西南 · 川西 compose pilot（平原锚 + 乐山峨眉 + 九寨；不强制四姑娘/新都桥/稻城）──
  {
    id: 'leg-chengdu-adapt',
    title: '成都 · 平原适应锚',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约2–3天',
    transport:
      '北京飞成都双流/天府；市区地铁+打车。可单订平原适应，也可作川西组合第一段后南行乐山或北飞九寨。',
    budgetLabel: '本趟约1500–3500元（机票浮动大；含熊猫可选）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
    summary:
      '独立短线：成都平原先适应、近华西电梯酒店连住；人民公园喝茶、熊猫基地观光车可选。作回撤锚与医疗下撤点。可单订，也可接川西组合。',
    whyFast: '都江堰/宽窄可删；只留静养+药店熟悉也成立。更长慢住见「成都·平原慢住两周」。',
    researchKeywords: [
      '成都 适应 父母',
      '成都 熊猫基地 观光车',
      '成都 华西 旅行',
    ],
    sources: [
      {
        title: '成都大熊猫繁育研究基地（官方）',
        url: 'https://www.panda.org.cn/',
        kind: 'official',
        note: '入园与观光车以官网为准',
      },
      {
        title: 'Wikivoyage：成都',
        url: 'https://zh.wikivoyage.org/wiki/%E6%88%90%E9%83%BD',
        kind: 'other',
        note: '市区概览，已改写',
      },
    ],
    stops: [
      {
        id: 'chengdu-adapt-base',
        name: '成都市区（适应与回撤）',
        days: 2,
        pace: 'slow',
        lat: 30.659,
        lng: 104.065,
        summary:
          '一环内电梯酒店；人民公园盖碗茶、熟悉药店与地铁。任何高原不适下撤回此。',
        tips:
          '近华西/省医院更安心。宽窄/锦里浅逛即可。火锅改清汤豆花。更长慢住另订成都两周卡。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg/1280px-Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg',
      },
      {
        id: 'chengdu-panda-optional',
        name: '大熊猫基地（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 30.734,
        lng: 104.144,
        summary: '早场观光车看别墅与幼年区；不必刷全园。',
        tips: '疲劳可整段删，只留市区静养。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
      },
    ],
  },

  {
    id: 'compose-chuanxi-chengdu-leshan-jiuzhai',
    title: '川西 · 成都乐山九寨浅廊',
    region: 'xinan',
    seasons: ['autumn', 'spring', 'summer'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周（不适随时缩短）',
    // 长线=短线串：正文在 leg；成都回撤过夜仅 glue。不强制四姑娘/新都桥/稻城。
    legIds: [
      'leg-chengdu-adapt',
      'xinan-sichuan-leshan-emei',
      'xinan-sichuan-jiuzhaigou',
    ],
    glue: [
      '成都→乐山高铁/包车约2–2.5小时；平原段无高反。可留空白日再南行。',
      '乐山→回成都电梯酒店缓冲过夜（1–2晚，不加点），再飞九寨黄龙机场（JZH）。九寨海拔约2000–3000m须心肺评估；黄龙默认可删。不适立即下撤成都飞京。绝不硬塞四姑娘山/新都桥/稻城亚丁。',
    ],
    transport:
      '飞成都进。顺序：平原适应短线 → 乐山峨眉短线 → 成都缓冲过夜 → 九寨沟短线；结束经成都飞京。单日车程/航班衔接留余量；高原段备血氧仪。',
    budgetLabel: '对照月预算约2万（含机票、索道与九寨门票观光车）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/1280px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg',
    summary:
      '长线组合卡：嵌入成都平原适应、乐山峨眉、九寨沟三条短线；中间成都只作回撤过夜衔接。景点正文见各短线。不强制四姑娘/新都桥/稻城；九寨心肺不适整段可删。',
    whyFast:
      '可只订其中一条短线；走廊可删金顶、黄龙与九寨整段，改回成都慢住。',
    researchKeywords: [
      '川西 父母 路线',
      '成都 乐山 九寨',
      '九寨沟 观光车 高反',
    ],
    sources: [
      {
        title: '九寨沟风景名胜区（公开信息）',
        url: 'https://www.jiuzhai.com/',
        kind: 'official',
        note: '开放与票务以官网为准；细节见九寨短线',
      },
      {
        title: 'Wikivoyage：乐山',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B9%90%E5%B1%B1',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
    ],
    stops: [
      {
        id: 'chengdu-corridor-buffer',
        name: '成都（走廊缓冲与回撤）',
        days: 1.5,
        pace: 'slow',
        lat: 30.659,
        lng: 104.066,
        summary:
          '乐山与九寨之间的电梯酒店缓冲；近华西，休息补水，不硬加景点。',
        tips:
          '高原不适立即停在此飞京。勿与四姑娘/新都桥/稻城同周连轴。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
      },
    ],
  },
];
