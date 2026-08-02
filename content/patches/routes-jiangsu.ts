import type { Route } from '../types';

/** 江苏省专属路线（与浙江杭苏线分开，保证每省独立主线） */
export const patchRoutes: Route[] = [
  {
    id: 'huadong-suzhou-nanjing',
    title: '苏州园林 · 南京可选',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '3–5天',
    transport:
      '北京高铁至苏州站/苏州北约4.5–5.5小时；南京与苏州城际约1–1.5小时。结束后高铁返京。',
    budgetLabel: '本趟约3000–5000元（高铁+住宿+门票）',
    coverImage:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
    summary:
      '江苏专线：苏州拙政园、平江路慢走，可选留园或沧浪亭一天。体力好再加南京博物院或夫子庙半日到一日，不必两城排满。春秋最宜，结束后高铁回京。',
    whyFast: '南京可作一日快览；核心留给苏州园林与水巷。',
    researchKeywords: [
      '苏州 拙政园 平江路 攻略',
      '苏州 三日 退休旅行',
      '南京 博物院 一日',
    ],
    sources: [
      {
        title: '拙政园景区（苏州园林）',
        url: 'https://www.sdgarden.com.cn/',
        kind: 'official',
        note: '开放时间与预约以官网/现场为准',
      },
      {
        title: 'Wikivoyage：苏州',
        url: 'https://zh.wikivoyage.org/wiki/%E8%8B%8F%E5%B7%9E',
        kind: 'other',
      },
    ],
    stops: [
      {
        id: 'suzhou-zhuozheng',
        name: '拙政园与平江路',
        days: 2,
        pace: 'slow',
        lat: 31.3245,
        lng: 120.6293,
        summary: '上午入园光线好；下午平江路沿河喝茶，不赶多园。',
        tips: '拙政园宜早到；久站可带折叠凳。一天一园足够，别连刷狮子林。平江路石板穿防滑鞋。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'suzhou-second-garden',
        name: '留园或沧浪亭（可选）',
        days: 1,
        pace: 'slow',
        lat: 31.318,
        lng: 120.588,
        summary: '第二日换一座园子，节奏放慢。',
        tips: '两园二选一即可；中午回酒店歇，傍晚再出门。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
      {
        id: 'nanjing-optional',
        name: '南京博物院（可选）',
        days: 1,
        pace: 'fast',
        lat: 32.0428,
        lng: 118.8489,
        summary: '城际到南京，室内看展吹空调，半日到一日。',
        tips: '提前查闭馆日与预约；不必硬排夫子庙夜市。当晚或次日回苏州/直接返京。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
    ],
  },
];
