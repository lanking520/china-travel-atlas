import type { Route } from '../types';

/** Plan gap fill: each region needs long + short where missing */
export const patchRoutes: Route[] = [
  {
    id: 'huanan-zhuhai-3d',
    title: '珠海滨海 · 两三天',
    region: 'huanan',
    seasons: ['winter', 'spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '2–3天',
    transport: '北京飞珠海或飞广州转城际；市内公交/打车。结束飞回北京。',
    budgetLabel: '本趟约2500–4500元',
    coverImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    summary:
      '珠海情侣路、渔女像一带滨海慢走，节奏轻松，适合华南长线前后穿插的短休。不必赶横琴全线，看海散步即可。',
    researchKeywords: ['珠海 情侣路 两日', '珠海 滨海 退休旅行'],
    sources: [
      {
        title: 'Wikivoyage：珠海',
        url: 'https://zh.wikivoyage.org/wiki/%E7%8F%A0%E6%B5%B7',
        kind: 'other',
      },
    ],
    stops: [
      {
        id: 'zhuhai-lover-road',
        name: '情侣路与海岸',
        days: 2,
        pace: 'slow',
        lat: 22.2707,
        lng: 113.5767,
        summary: '滨海平路分段走，傍晚看海。',
        tips: '防晒防风；海鲜适量；住近海岸电梯酒店。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
    ],
  },
  {
    id: 'xinan-dujiangyan-2d',
    title: '都江堰 · 青城山两日',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '2–3天',
    transport: '飞成都后高铁/打车至都江堰；可与成都慢住衔接。结束飞回北京或回成都基地。',
    budgetLabel: '本趟约1500–3000元（不含大交通）',
    coverImage:
      'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200',
    summary:
      '都江堰水利工程平地参观，青城前山可坐索道减负。适合成都慢住期间的短途快看，不必硬爬后山。',
    researchKeywords: ['都江堰 一日 攻略', '青城山 索道 前山'],
    sources: [
      {
        title: '都江堰景区官网',
        url: 'https://www.djy.gov.cn/',
        kind: 'official',
        note: '以官网预约与开放时间为准',
      },
    ],
    stops: [
      {
        id: 'dujiangyan',
        name: '都江堰',
        days: 1,
        pace: 'slow',
        lat: 31.0034,
        lng: 103.6067,
        summary: '平地看堰，讲解或APP即可。',
        tips: '舒适鞋；暑热避开正午。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
      {
        id: 'qingcheng-front',
        name: '青城前山',
        days: 1,
        pace: 'fast',
        lat: 30.9006,
        lng: 103.3894,
        summary: '索道上山，短段步行。',
        tips: '选前山；雨天石阶防滑；恐高可只逛山门一带。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
    ],
  },
  {
    id: 'qingzang-xining-3d',
    title: '西宁城区 · 高原适应短住',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '3–4天',
    transport: '北京飞西宁曹家堡；市内公交/打车。可作青海湖长线前的适应段，或单独短住后飞回北京。',
    budgetLabel: '本趟约3000–5000元',
    coverImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    summary:
      '西宁海拔约2200米，先在城区慢走、看博物馆与清真大寺周边，不急着上湖。适合作为青藏入口热身；有基础病遵医嘱。',
    researchKeywords: ['西宁 适应 高原', '西宁 博物馆 两日'],
    sources: [
      {
        title: 'Wikivoyage：西宁',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%81',
        kind: 'other',
      },
    ],
    stops: [
      {
        id: 'xining-city',
        name: '西宁城区',
        days: 3,
        pace: 'slow',
        lat: 36.6171,
        lng: 101.7782,
        summary: '多休息、少剧烈运动，适应后再考虑青海湖。',
        tips: '首日静养；多饮水；备常用药；不去太高处。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
    ],
  },
];
