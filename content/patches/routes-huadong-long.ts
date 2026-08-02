import type { Route } from '../types';

/**
 * 华东 · 苏杭徽慢住 → compose（景点正文在杭/苏/黄山短线）。
 * 退役 huadong-suhan-slow。
 */
export const patchRoutes: Route[] = [
  {
    id: 'compose-suhan-hangzhou-huangshan',
    title: '苏杭徽 · 水乡慢串两三周',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'long',
    compositionKind: 'compose',
    fromHome: false,
    daysLabel: '约2–3周',
    legIds: [
      'huadong-hangzhou-suzhou',
      'huadong-suzhou-nanjing',
      'huadong-huangshan-hui',
    ],
    glue: [
      '杭州→苏州高铁/城际约1–1.5小时；段间可留空白。乌镇/同里可选挂接（行程紧整段删），勿与苏州园林同日连刷。',
      '苏州→黄山北杭黄高铁约1.5–3小时（视车次）；南京博物院在苏州短线内默认可删。黄山腿脚紧可只屯溪+宏村。',
    ],
    transport:
      '高铁进苏浙皖（北京南→杭州/苏州约4.5–6小时）。顺序：杭州西湖短线 → 苏州园林短线 → 黄山徽州短线；段末黄山北/杭州高铁或航班回北京。',
    budgetLabel: '对照月预算约2万（高铁+电梯房+园林/索道门票）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
    summary:
      '长线组合卡：嵌入杭州西湖、苏州园林、黄山徽州三条短线；乌镇/同里只可选挂接。景点正文见各短线。每天最多一处，春秋最佳。',
    whyFast:
      '可只订其中一条短线；走廊可删黄山、南京与水乡可选段。',
    researchKeywords: [
      '杭州 慢住 两周 退休',
      '苏州 拙政园 平江路 攻略',
      '黄山 索道 宏村 父母',
      '杭黄高铁 苏杭 路线',
    ],
    sources: [
      {
        title: 'Wikivoyage：杭州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%9D%AD%E5%B7%9E',
        kind: 'other',
        note: '细节见杭州短线',
      },
      {
        title: 'Wikivoyage：苏州',
        url: 'https://zh.wikivoyage.org/wiki/%E8%8B%8F%E5%B7%9E',
        kind: 'other',
        note: '细节见苏州短线',
      },
      {
        title: '黄山风景区官方网站',
        url: 'https://www.huangshan.com.cn/',
        kind: 'official',
        note: '细节见黄山短线',
      },
    ],
    stops: [
      {
        id: 'wuzhen-suhan-optional',
        name: '乌镇或同里（可选 glue）',
        days: 1.5,
        pace: 'fast',
        lat: 30.743,
        lng: 120.488,
        summary: '杭苏之间可选水乡停点；东栅西栅或同里选一即可。',
        tips: '可删；勿与苏州园林同日连赶；石板防滑鞋。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
      },
    ],
  },
];
