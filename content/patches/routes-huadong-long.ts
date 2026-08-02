import type { Route } from '../types';

/** 华东 · 苏杭徽慢住长线（黄山短线之外的多周节奏） */
export const patchRoutes: Route[] = [
  {
    id: 'huadong-suhan-slow',
    title: '苏杭徽 · 水乡慢住两三周',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约2–3周',
    transport:
      '高铁进苏浙皖（北京南→苏州/杭州约4.5–6小时；杭黄高铁约1.5小时）；城际/包车串联；结束后高铁或航班回北京',
    budgetLabel: '对照月预算约2万（高铁+电梯房慢住+园林/索道门票）',
    coverImage:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200',
    summary:
      '以杭州为慢住枢纽，苏州园林与平江路分段歇脚，再经杭黄高铁到黄山/徽州村落浅住几日。每天最多一处，春秋最佳；盛夏可早出晚歇、多室内。结束后高铁或飞回北京休整。',
    whyFast:
      '黄山索道一日到两日快看即可；主体时间留给杭苏慢节奏与空白日，勿把园林、水乡、山岳一日连刷。',
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
        note: '西湖分区、城际与季节概览，已改写',
      },
      {
        title: 'Wikivoyage：苏州',
        url: 'https://zh.wikivoyage.org/wiki/%E8%8B%8F%E5%B7%9E',
        kind: 'other',
        note: '园林与古城步行节奏参考',
      },
      {
        title: '黄山风景区官方网站',
        url: 'https://www.huangshan.com.cn/',
        kind: 'official',
        note: '门票、索道与进山预约以官方当日为准',
      },
      {
        title: '杭州市人民政府文旅信息',
        url: 'https://www.hangzhou.gov.cn/',
        kind: 'official',
        note: '西湖景区开放与天气公告以当地政府/文旅为准',
      },
    ],
    stops: [
      {
        id: 'hangzhou-base',
        name: '杭州（慢住基地）',
        days: 8,
        pace: 'slow',
        lat: 30.274,
        lng: 120.155,
        summary:
          '选西湖或武林附近电梯酒店，环湖电瓶车/游船按需，雷峰塔有电梯；每周留空白日逛超市、喝茶。',
        tips:
          '北京高铁直达杭州东约5–6小时。每天最多一个主点，下午回酒店午休。梅雨与盛夏湿热，中午少户外；春秋桂花与花港更舒服。近浙一/邵逸夫医院的住处更安心。别天天换酒店。',
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      },
      {
        id: 'suzhou-slow',
        name: '苏州园林 · 平江路',
        days: 5,
        pace: 'slow',
        lat: 31.324,
        lng: 120.629,
        summary:
          '城际或高铁杭苏约1–1.5小时。拙政园上午入园，一天一园；下午平江路沿河喝茶，石板路较平。',
        tips:
          '住观前或平江路附近电梯房，减少搬运行李。拙政园久站可带折叠凳；别连刷狮子林。旺季查预约。体力紧可压到3天，直接返杭或进徽。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'huangshan-hui-slow',
        name: '黄山索道 · 徽州村落',
        days: 5,
        pace: 'slow',
        lat: 30.133,
        lng: 118.168,
        summary:
          '杭黄高铁至黄山北约1.5小时。云谷/玉屏索道上下，山顶只走精华段；下山屯溪歇，宏村或西递选一处慢看。',
        tips:
          '「黄山旅游官方平台」提前约门票与进山方向；索道双程最省心，天都峰不赶。雨后石阶滑，穿防滑鞋。村落石板路量力，别西递宏村一日连刷。结束后可黄山北高铁/飞回北京，或返杭再走。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'wuzhen-optional',
        name: '乌镇或同里（可选）',
        days: 2,
        pace: 'fast',
        lat: 30.743,
        lng: 120.488,
        summary:
          '杭苏之间水乡一日到两日，东栅西栅或同里选一即可；行程紧可整段删除。',
        tips:
          '石板路防滑鞋；人多就早到。与苏州园林错开日期，勿同日连赶。体力不够直接跳过。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
    ],
  },
];
