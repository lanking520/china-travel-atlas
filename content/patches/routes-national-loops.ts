import type { Route } from '../types';

/**
 * 跨省慢环（爸妈节奏）：非特种兵一日千里，段末回京。
 * 证据方向：Wikivoyage / 官方文旅；青甘、丝路、川滇为国内常见长线主题。
 */
export const patchRoutes: Route[] = [
  // ── 青甘慢环 ──────────────────────────────────────────────
  {
    id: 'national-qinggan-slow',
    title: '青甘慢环 · 湖光丹霞两三周',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    fromHome: false,
    themes: ['grand-loop'],
    daysLabel: '约2–3周',
    transport:
      '北京飞西宁曹家堡；西宁↔青海湖/茶卡包车或正规一日游；西宁高铁/飞机至兰州，再兰州飞或高铁至张掖/敦煌；段末敦煌或兰州飞回北京',
    budgetLabel: '对照月预算约2万（机票+电梯房+景区观光车；勿硬拼自驾天路）',
    coverImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    summary:
      '把「青甘大环线」拆成爸妈慢环：西宁适应与青海湖浅走，茶卡可选；转兰州歇脚，张掖丹霞观光车，敦煌莫高窟慢读。海拔逐步抬、日驾短；看够飞回北京休整，不硬赶茶卡—敦煌一夜贯通。',
    whyFast:
      '茶卡盐湖半日即可；主体留给西宁休整、青海湖环线选段与敦煌莫高窟预约场次。',
    researchKeywords: [
      '青甘大环线 慢游 父母',
      '西宁 青海湖 包车 攻略',
      '张掖丹霞 观光车 父母',
      '敦煌 莫高窟 预约',
    ],
    sources: [
      {
        title: 'Wikivoyage：西宁',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%81',
        kind: 'other',
        note: '进出与适应节奏概览，已改写',
      },
      {
        title: 'Wikivoyage：敦煌',
        url: 'https://zh.wikivoyage.org/wiki/%E6%95%A6%E7%85%8C',
        kind: 'other',
        note: '莫高窟预约与沙漠区须知',
      },
      {
        title: '青海省文化和旅游厅',
        url: 'https://whlyt.qinghai.gov.cn/',
        kind: 'official',
        note: '景区开放与天气以官方公告为准',
      },
    ],
    stops: [
      {
        id: 'xining-adapt',
        name: '西宁（适应基地）',
        days: 4,
        pace: 'slow',
        lat: 36.617,
        lng: 101.778,
        summary:
          '先在西宁电梯房歇脚，东关清真大寺、中心广场浅逛；适应高原再出城。',
        tips:
          '海拔约2200m，头两天少爬楼梯、多喝水。近青医附院更安心。别抵达当日就赶茶卡。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'qinghai-lake-segment',
        name: '青海湖选段',
        days: 3,
        pace: 'slow',
        lat: 36.9,
        lng: 100.15,
        summary:
          '包车或正规团看二郎剑/洱海一带选段，环湖公路勿自驾赶全程；紫外线强。',
        tips:
          '备防晒、薄羽绒。骑马短段即可。体力紧压到2天回西宁。',
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      },
      {
        id: 'chaka-optional',
        name: '茶卡盐湖（可选）',
        days: 1,
        pace: 'fast',
        lat: 36.78,
        lng: 99.08,
        summary: '盐湖打卡半日，观光车减步行；晒伤风险高，不适合作为主线。',
        tips: '行程紧可整段删除，直接转兰州。',
        image:
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
      },
      {
        id: 'lanzhou-hub',
        name: '兰州（中转歇脚）',
        days: 2,
        pace: 'slow',
        lat: 36.061,
        lng: 103.834,
        summary: '高铁/飞机进兰州，黄河边散步、牛肉面清淡吃；休整后再西行。',
        tips: '兰州海拔较低，适合恢复。别塞进白银长途日驾。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
      {
        id: 'zhangye-danxia-loop',
        name: '张掖七彩丹霞',
        days: 2,
        pace: 'fast',
        lat: 38.97,
        lng: 100.45,
        summary: '观光车+观景台，少下台阶；日落场次人多可改白天。',
        tips: '门票与观光车以景区预约为准。风沙天戴口罩。',
        image:
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      },
      {
        id: 'dunhuang-mogao-loop',
        name: '敦煌莫高窟慢读',
        days: 4,
        pace: 'slow',
        lat: 40.142,
        lng: 94.662,
        summary:
          '莫高窟提前预约普通票或应急票规则以官网为准；鸣沙山可选骑骆驼短段或只看日落。',
        tips:
          '洞窟内禁止拍照闪光。结束后敦煌飞机或返兰州再飞北京。',
        image:
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
      },
    ],
  },

  // ── 丝路慢段 ──────────────────────────────────────────────
  {
    id: 'national-silkroad-slow',
    title: '丝路慢段 · 西安到吐鲁番',
    region: 'xibei',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    themes: ['grand-loop'],
    daysLabel: '约2–3周',
    transport:
      '北京高铁/飞机至西安；西安高铁至兰州；兰州飞或高铁至敦煌；敦煌飞乌鲁木齐，火车/包车至吐鲁番；段末乌市飞回北京',
    budgetLabel: '对照月预算约2万（交通分段买票+电梯房；莫高窟/兵马俑门票另计）',
    coverImage:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200',
    summary:
      '经典丝路拆成慢段：西安古城与兵马俑浅尝，兰州歇脚，敦煌洞窟慢读，吐鲁番葡萄沟避暑式散步。不硬开独库与夜穿戈壁；每段结束可回京，也可一气呵成后乌市飞返。',
    whyFast:
      '兵马俑一日快览即可；主体留给西安慢走与敦煌预约参观。',
    researchKeywords: [
      '丝路 自驾 慢游 退休',
      '西安 兵马俑 父母',
      '敦煌 吐鲁番 火车',
      '丝路 分段 回京',
    ],
    sources: [
      {
        title: 'Wikivoyage：西安',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%89',
        kind: 'other',
        note: '古城与兵马俑交通概览',
      },
      {
        title: 'Wikivoyage：吐鲁番',
        url: 'https://zh.wikivoyage.org/wiki/%E5%90%90%E9%B2%81%E7%95%AA',
        kind: 'other',
        note: '夏季炎热与景点节奏',
      },
      {
        title: '甘肃省文旅信息',
        url: 'https://wlt.gansu.gov.cn/',
        kind: 'official',
        note: '河西走廊景区公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'xian-silk-base',
        name: '西安（慢住）',
        days: 5,
        pace: 'slow',
        lat: 34.341,
        lng: 108.94,
        summary: '城墙选段电瓶车、回民街浅尝；每天一处博物馆或公园。',
        tips: '兵马俑另日早场；台阶多带折叠凳。近交大一附院电梯房更安心。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'bingmayong-fast',
        name: '兵马俑（快览）',
        days: 1,
        pace: 'fast',
        lat: 34.385,
        lng: 109.278,
        summary: '景区摆渡+一号坑为主，不必三坑硬刷。',
        tips: '预约以官方渠道为准；暑期避开正午。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'lanzhou-silk',
        name: '兰州歇脚',
        days: 2,
        pace: 'slow',
        lat: 36.061,
        lng: 103.834,
        summary: '高铁西进中转，黄河风情线散步恢复。',
        tips: '可与青甘线兰州段合并理解，勿重复赶景。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
      {
        id: 'dunhuang-silk',
        name: '敦煌慢读',
        days: 4,
        pace: 'slow',
        lat: 40.142,
        lng: 94.662,
        summary: '莫高窟为主；鸣沙山量力。',
        tips: '洞窟讲解耳机有帮助。结束后飞乌市。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
      {
        id: 'turpan-silk',
        name: '吐鲁番葡萄沟',
        days: 3,
        pace: 'slow',
        lat: 42.951,
        lng: 89.19,
        summary: '火焰山外观、葡萄沟平地散步；交河故城台阶多可浅看。',
        tips: '夏季极热，早晚出门、中午空调房。结束后乌市飞北京。',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      },
    ],
  },

  // ── 川滇慢环 ──────────────────────────────────────────────
  {
    id: 'national-chuandian-slow',
    title: '川滇慢环 · 成都大理丽江',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'winter'],
    tripType: 'long',
    fromHome: false,
    themes: ['grand-loop'],
    daysLabel: '约2–3周',
    transport:
      '北京飞成都；成都高铁/飞机至昆明或直飞大理；大理包车/巴士至丽江；丽江或昆明飞回北京',
    budgetLabel: '对照月预算约2万（机票联程+电梯房慢住；索道另计）',
    coverImage:
      'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=1200',
    summary:
      '西南经典拆成慢环：成都平原休整与熊猫半日，飞大理古城慢住，丽江作快览或浅住——玉龙雪山只坐索道观景，不硬徒步。避开雨季泥石流高发路段硬开；段末飞回北京。',
    whyFast:
      '丽江束河/古城半日至两日即可；主体留给成都与大理空白日。',
    researchKeywords: [
      '川滇 大环线 慢游',
      '大理 慢住 退休',
      '丽江 索道 父母',
      '成都 大理 飞',
    ],
    sources: [
      {
        title: 'Wikivoyage：大理',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%A7%E7%90%86',
        kind: 'other',
        note: '古城与洱海交通概览',
      },
      {
        title: 'Wikivoyage：丽江',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%BD%E6%B1%9F',
        kind: 'other',
        note: '海拔与雪山须知',
      },
      {
        title: '云南省文旅厅',
        url: 'https://dct.yn.gov.cn/',
        kind: 'official',
        note: '景区预约与天气以官方为准',
      },
    ],
    stops: [
      {
        id: 'chengdu-loop-base',
        name: '成都（平原基地）',
        days: 7,
        pace: 'slow',
        lat: 30.572,
        lng: 104.066,
        summary: '宽窄巷子浅逛、茶馆歇脚；熊猫基地早场半日。',
        tips: '火锅微辣；近华西医院电梯房。1–2周版可压到5天。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'dali-loop-base',
        name: '大理（慢住）',
        days: 7,
        pace: 'slow',
        lat: 25.69,
        lng: 100.16,
        summary: '古城或海东电梯房，洱海电瓶车/游船选段，不骑行环海。',
        tips: '紫外线强。苍山索道量力。每周留空白日。',
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      },
      {
        id: 'lijiang-loop-taste',
        name: '丽江浅住',
        days: 4,
        pace: 'slow',
        lat: 26.872,
        lng: 100.23,
        summary: '束河或新城住，古城白天短逛；玉龙雪山蓝月谷或索道观景。',
        tips: '海拔约2400m+，头两日慢。结束后丽江/昆明飞北京。',
        image:
          'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      },
    ],
  },
];
