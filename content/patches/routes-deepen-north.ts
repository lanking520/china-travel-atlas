import type { Route } from '../types';

/** 华北深挖：平遥太原短住 / 北戴河夏（哈尔滨雪线已有则不再加冰城） */
export const patchRoutes: Route[] = [
  // ── 华北 · 山西平遥太原（互补晋北长线）────────────────────────
  {
    id: 'huabei-shanxi-pingyao-deep',
    title: '晋中 · 平遥太原慢住',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约5–8天',
    transport:
      '北京西/北京丰台高铁至太原南约2.5–3小时，太原↔平遥高铁约1小时；结束后高铁回北京',
    budgetLabel: '本趟约2500–4500元（高铁+古城住宿+门票）',
    coverImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
    summary:
      '与「晋北大同慢住」互补：高铁直达太原歇脚，再平遥古城慢住数日——票号、城墙选段、明清街平地为主。不必北上云冈悬空寺；看够高铁回京。',
    whyFast:
      '太原博物馆或晋祠选一处半日即可；主体时间平遥，勿再塞五台山长线。',
    researchKeywords: [
      '平遥古城 慢住 退休',
      '太原 平遥 高铁 攻略',
      '平遥 票号 城墙 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：平遥',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B9%B3%E9%81%A5',
        kind: 'other',
        note: '古城步行与交通概览，已改写',
      },
      {
        title: '平遥县人民政府文旅信息',
        url: 'https://www.pingyao.gov.cn/',
        kind: 'official',
        note: '门票与开放以当地公告为准',
      },
      {
        title: 'Wikivoyage：太原',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%AA%E5%8E%9F',
        kind: 'other',
        note: '高铁枢纽与市内参考',
      },
    ],
    stops: [
      {
        id: 'taiyuan-hub',
        name: '太原（枢纽休整）',
        days: 2,
        pace: 'slow',
        lat: 37.87,
        lng: 112.55,
        summary:
          '高铁到太原南，近医院电梯房歇一夜；可选晋祠或省博一处，次日去平遥。',
        tips:
          '回京也经太原最顺。面食选清淡；市区不必排满。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'pingyao-deep',
        name: '平遥古城（慢住）',
        days: 4,
        pace: 'slow',
        lat: 37.189,
        lng: 112.176,
        summary:
          '城外停车/步行入城，近城门电梯客栈；每天一段街巷或一座票号，下午午休。',
        tips:
          '通票规则以景区当日为准；日升昌等有门槛台阶，外观亦可。青石板防滑鞋。夜景人多浅逛即回。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
      {
        id: 'pingyao-wall-optional',
        name: '城墙选段（可选）',
        days: 1,
        pace: 'fast',
        lat: 37.195,
        lng: 112.18,
        summary:
          '城墙登城选平缓段短走，累了即下；腿脚不适整段跳过，只在城内平地。',
        tips:
          '风大备外套；夏日防晒。不要强行环城一周。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
    ],
  },

  // ── 华北 · 河北北戴河 ────────────────────────────────────────
  {
    id: 'huabei-hebei-beidaihe',
    title: '河北 · 北戴河夏日浅住',
    region: 'huabei',
    seasons: ['summer'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约3–5天',
    transport:
      '北京站/北京朝阳高铁至北戴河或秦皇岛约2–2.5小时，或京哈自驾约3小时；结束后高铁/自驾回北京',
    budgetLabel: '本趟约1500–3500元（交通+海滨住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    summary:
      '承德之外的河北短线：北戴河联峰山浅走、海边平路吹风，适合北京周末延长假。避正午暴晒与台风天；不安排刺激海上项目。看够当天或次日回京。',
    whyFast:
      '鸽子窝/联峰山选一处半日即可；主体时间海边散步与休息。',
    researchKeywords: [
      '北戴河 夏天 高铁 攻略',
      '北戴河 联峰山 父母',
      '秦皇岛 北戴河 两日',
    ],
    sources: [
      {
        title: 'Wikivoyage：北戴河',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8C%97%E6%88%B4%E6%B2%B3',
        kind: 'other',
        note: '海滨分区与交通概览，已改写',
      },
      {
        title: '秦皇岛市文化和旅游局',
        url: 'https://www.qinhuangdao.gov.cn/',
        kind: 'official',
        note: '景区与天气（含台风）公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'beidaihe-base',
        name: '北戴河（海滨慢住）',
        days: 3,
        pace: 'slow',
        lat: 39.825,
        lng: 119.484,
        summary:
          '选近海电梯酒店，早晚滨海步道散步，中午回酒店空调歇；每周（本线即全程）留空白半日。',
        tips:
          '高铁北戴河站出站打车更省心。夏日防晒与补水；听台风预警果断改期。海鲜不过量。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'lianfengshan-optional',
        name: '联峰山或鸽子窝（二选一）',
        days: 1,
        pace: 'fast',
        lat: 39.838,
        lng: 119.52,
        summary:
          '联峰山量力短登或只走山下；鸽子窝平地观海。两处只留一处。',
        tips:
          '台阶多可改平地观海点。人多即撤。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
    ],
  },
];
