import type { Route } from '../types';

/** 甘肃第二主线：兰州·夏河（河西敦煌线之外；非新疆） */
export const patchRoutes: Route[] = [
  {
    id: 'xibei-lanzhou-xiahe',
    title: '甘肃 · 兰州夏河短住',
    region: 'xibei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约5–8天',
    transport:
      '北京飞兰州中川，市区休整后包车或大巴至夏河（约3.5–4.5小时）；结束后返兰州飞回北京',
    budgetLabel: '本趟约4000–7000元（含机票与夏河住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200',
    summary:
      '河西敦煌线之外的甘肃短住：兰州黄河边慢走适应，再赴夏河拉卜楞寺浅访。夏河海拔约2900米，先兰州再上高；不适则取消夏河、只留兰州后飞京。不与敦煌张掖硬拼一条长线。',
    whyFast:
      '拉卜楞外围与部分经堂量力参观即可；桑科草原可选半日，行程紧删除。',
    researchKeywords: [
      '兰州 夏河 攻略 父母',
      '拉卜楞寺 参观 注意事项',
      '夏河 高反 住宿',
    ],
    sources: [
      {
        title: 'Wikivoyage：兰州',
        url: 'https://zh.wikivoyage.org/wiki/%E5%85%B0%E5%B7%9E',
        kind: 'other',
        note: '进出枢纽与市内概览，已改写',
      },
      {
        title: 'Wikivoyage：夏河',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%8F%E6%B2%B3',
        kind: 'other',
        note: '拉卜楞与海拔提示，已改写',
      },
      {
        title: '甘肃省文化和旅游厅',
        url: 'https://wlt.gansu.gov.cn/',
        kind: 'official',
        note: '景区开放与天气以官方公告为准',
      },
    ],
    stops: [
      {
        id: 'lanzhou-base',
        name: '兰州（进出与适应）',
        days: 2,
        pace: 'slow',
        lat: 36.061,
        lng: 103.834,
        summary:
          '黄河风情线平地慢走、牛肉面清淡尝；近医院电梯房，为夏河留体力。',
        tips:
          '兰州海拔约1500米，多数人轻松。夏河不适者可取消上山，多住一日后飞京。备薄外套与润唇膏。',
        image:
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
      },
      {
        id: 'xiahe-labrang',
        name: '夏河 · 拉卜楞寺',
        days: 3,
        pace: 'slow',
        lat: 35.202,
        lng: 102.522,
        summary:
          '约2900米，先歇再浅访寺院外围；尊重摄影与着装规定，台阶多处可跳过。',
        tips:
          '包车往返最省心，勿夜路。头痛胸闷减活动或下撤兰州。门票与开放院落以现场为准；转经道量力。饮食清淡，少饮酒。',
        image:
          'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      },
      {
        id: 'sangke-optional',
        name: '桑科草原（可选）',
        days: 1,
        pace: 'fast',
        lat: 35.15,
        lng: 102.4,
        summary:
          '包车半日看草原；海拔与日晒仍在，不适整段跳过。',
        tips:
          '紫外线强备帽；勿长时间骑马。行程紧直接返兰州飞北京。',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      },
    ],
  },
];
