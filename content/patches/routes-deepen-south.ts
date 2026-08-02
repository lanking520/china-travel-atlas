import type { Route } from '../types';

/** 华南深挖：德天边境浅游 / 海南西线慢住（非三亚主线） */
export const patchRoutes: Route[] = [
  // ── 华南 · 广西德天 ──────────────────────────────────────────
  {
    id: 'huanan-guangxi-detian',
    title: '广西 · 德天瀑布浅游',
    region: 'huanan',
    seasons: ['autumn', 'spring', 'winter'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约4–6天',
    transport:
      '北京飞南宁吴圩，高铁或包车至崇左/德天景区；景区内观光车为主；结束返南宁飞回北京',
    budgetLabel: '本趟约3500–6000元（含机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=1200',
    summary:
      '桂林阳朔之外的广西短线：南宁歇一夜，崇左中转后德天跨国瀑布浅游。观光车减步行，中越边境只看公开观景面，不安排出境手续折腾。看够即返南宁飞北京。',
    whyFast:
      '德天核心观景台半日足够；明仕田园可选半日，行程紧整段删。',
    researchKeywords: [
      '德天瀑布 攻略 父母',
      '崇左 德天 高铁 两日',
      '德天 观光车 边境',
    ],
    sources: [
      {
        title: 'Wikivoyage：崇左',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B4%87%E5%B7%A6',
        kind: 'other',
        note: '德天接驳与边境提示，已改写',
      },
      {
        title: '崇左市人民政府',
        url: 'https://www.chongzuo.gov.cn/',
        kind: 'official',
        note: '景区开放与交通公告以当地为准',
      },
    ],
    stops: [
      {
        id: 'nanning-hub',
        name: '南宁（进出枢纽）',
        days: 1,
        pace: 'slow',
        lat: 22.817,
        lng: 108.366,
        summary:
          '落地休整、近医院电梯房；次日高铁或包车西行，结束日飞回北京。',
        tips:
          '南宁湿热，备薄衣。市内不必排满景点。回程预留延误余量。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'detian-falls',
        name: '德天瀑布 · 观景浅游',
        days: 2,
        pace: 'slow',
        lat: 22.855,
        lng: 106.72,
        summary:
          '跨国瀑布观景台+观光车；板石湿滑慢走，拍全景即可，不必下到水边折腾。',
        tips:
          '门票与观光车以官方当日为准；60+优惠常见但仍要约/查公告。带防滑鞋与薄外套（瀑区凉）。不安排出境一日游，证件与体力都更省心。',
        image:
          'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800',
      },
      {
        id: 'mingshi-optional',
        name: '明仕田园（可选）',
        days: 1,
        pace: 'fast',
        lat: 22.78,
        lng: 106.95,
        summary:
          '峰林田园竹筏或沿岸慢走半日；与德天二选一加深即可，勿两线硬排。',
        tips:
          '竹筏量力；晒强备帽。行程紧可跳过，直接返南宁。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
    ],
  },

  // ── 华南 · 海南西线 ──────────────────────────────────────────
  {
    id: 'huanan-hainan-slow-west',
    title: '海南西线 · 儋州慢住',
    region: 'huanan',
    seasons: ['winter', 'spring'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约2–3周',
    transport:
      '北京飞海口美兰或三亚凤凰，租车/包车走西线（G98）；儋州/昌江滨海慢住；结束飞回北京',
    budgetLabel: '对照月预算约2万（含机票与西线住宿；比三亚旺季通常更松）',
    coverImage:
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
    summary:
      '三亚之外的海南避寒：以儋州一带为西线慢住基地，滨海平路散步、温泉休整，可浅访昌江棋子湾。人比东线少、节奏更慢；紫外线仍强，午休必留。结束后飞回北京。',
    whyFast:
      '棋子湾或一处滨海点半日快览即可；主体时间西线慢住，勿环岛特种兵。',
    researchKeywords: [
      '海南 西线 慢住 退休',
      '儋州 过冬 滨海',
      '昌江 棋子湾 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：儋州',
        url: 'https://zh.wikivoyage.org/wiki/%E5%84%92%E5%B7%9E',
        kind: 'other',
        note: '西线位置与交通概览，已改写',
      },
      {
        title: '海南省旅游和文化广电体育厅',
        url: 'https://lwt.hainan.gov.cn/',
        kind: 'official',
        note: '景区与天气公告以官方为准',
      },
      {
        title: 'Wikivoyage：海南',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B5%B7%E5%8D%97',
        kind: 'other',
        note: '环岛分区参考，本线只取西线慢住',
      },
    ],
    stops: [
      {
        id: 'danzhou-base',
        name: '儋州（西线慢住基地）',
        days: 12,
        pace: 'slow',
        lat: 19.521,
        lng: 109.581,
        summary:
          '选滨海或市区电梯公寓，每天海边短走或市内补给；每周留空白日，不赶环岛。',
        tips:
          '可海口进、三亚出或反之。冬春仍防晒；强冷空气备薄外套。选正规短租/酒店。饮食清淡，海鲜不过量。',
        image:
          'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
      },
      {
        id: 'danzhou-coast',
        name: '西线滨海散步',
        days: 3,
        pace: 'slow',
        lat: 19.45,
        lng: 108.95,
        summary:
          '选择一处平缓海岸栈道/沙滩浅区，早晚走、中午歇；不安排摩托艇等高强度项目。',
        tips:
          '潮汐与风浪看当地提示；石滩穿防滑鞋。紫外线强，10:00前或16:00后更好。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'qiziwan-optional',
        name: '昌江棋子湾（可选）',
        days: 2,
        pace: 'fast',
        lat: 19.27,
        lng: 108.85,
        summary:
          '包车日归或住一晚看海湾；与儋州基地二选一加深，勿再塞五指山雨林线。',
        tips:
          '车程留意疲劳驾驶；景区台阶量力。行程紧可整段跳过。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
    ],
  },
];
