import type { Route } from '../types';

/** 西南深挖：版纳避寒 / 滇西腾冲 / 川西慢走（非新疆） */
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
    daysLabel: '约10天–2周',
    transport:
      '北京飞保山或腾冲驼峰机场，市区打车；和顺/热海包车或景区摆渡；结束飞回北京',
    budgetLabel: '对照月预算约1.5–2万（含机票与温泉）',
    coverImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    summary:
      '腾冲当慢住基地：和顺古镇石板平缓、热海温泉休整，火山地质公园按体力选段。海拔约1600米，多数人可适应；别把高黎贡硬徒步塞进日程。结束后飞回北京。',
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
        days: 7,
        pace: 'slow',
        lat: 25.02,
        lng: 98.499,
        summary:
          '选近医院电梯酒店，每天最多一处：市区散步、超市补给、温泉休整日穿插。',
        tips:
          '直飞腾冲或保山再转；行李一次放稳。春秋早晚凉，备薄外套。饮食少油辣。每周留空白日。',
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

  // ── 西南 · 川西慢走（高反可跳过）────────────────────────────
  {
    id: 'xinan-chuanxi-slow',
    title: '川西 · 新都桥稻城慎行',
    region: 'xinan',
    seasons: ['autumn', 'summer'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约10天–2周（不适随时缩短）',
    transport:
      '北京飞成都适应2–3日，再飞康定/稻城亚丁或包车西行；单日车程严控，高反应立即下撤成都后飞回北京',
    budgetLabel: '对照月预算约2万（含机票、包车与氧气）；高原不适者当季改成都平原线',
    coverImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    summary:
      '川西风光极美但海拔高：成都平原先适应，新都桥约3300米浅停，稻城/亚丁更高——心脑血管等基础病应整段跳过或只到新都桥观景。强调可跳过、可缩短；绝不连赶特种兵环线。结束后下撤成都再飞北京。',
    whyFast:
      '亚丁核心区可只坐观光车远观半日；身体不适整段删除，改回成都喝茶休整。',
    researchKeywords: [
      '川西 新都桥 高反 老人',
      '稻城亚丁 观光车 攻略',
      '川西 自驾 可跳过 路线',
    ],
    sources: [
      {
        title: 'Wikivoyage：康定',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BA%B7%E5%AE%9A',
        kind: 'other',
        note: '进出川西门户与海拔提示，已改写',
      },
      {
        title: 'Wikivoyage：稻城',
        url: 'https://zh.wikivoyage.org/wiki/%E7%A8%BB%E5%9F%8E',
        kind: 'other',
        note: '亚丁海拔与季节窗口参考',
      },
      {
        title: '甘孜州文旅相关公告（以当地为准）',
        url: 'https://www.gzz.gov.cn/',
        kind: 'official',
        note: '景区开放、天气与道路以官方当日为准',
      },
    ],
    stops: [
      {
        id: 'chengdu-adapt',
        name: '成都（适应与回撤基地）',
        days: 3,
        pace: 'slow',
        lat: 30.572,
        lng: 104.066,
        summary:
          '飞抵后平原休整、备药与氧气咨询；川西任何不适立刻下撤回此，再飞北京。',
        tips:
          '有高血压、冠心病、慢阻肺等，出行前务必问医生；不适勿硬上。近三甲医院选酒店。川西段可整段取消，改成都慢住。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'xinduqiao',
        name: '新都桥（观景浅停）',
        days: 2,
        pace: 'slow',
        lat: 30.04,
        lng: 101.55,
        summary:
          '约3300米摄影点，包车观景台多停少走；头痛胸闷立即下撤，勿过夜硬撑。',
        tips:
          '单日车程拆开，勿夜赶山路。紫外线强、昼夜温差大。只适合适应良好者；否则跳过直返成都。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'daocheng-optional',
        name: '稻城 / 亚丁（高可选·可整段跳过）',
        days: 3,
        pace: 'fast',
        lat: 29.037,
        lng: 100.298,
        summary:
          '稻城县城约3700米，亚丁更高。优先观光车远观；体力或高反不允许则整段删除。',
        tips:
          '门票预约以官方为准；核心区少步行。绝不安排长徒步或冲顶。出现高反症状立即下撤成都，勿在景区硬扛。本站默认「可跳过」。',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
    ],
  },
];
