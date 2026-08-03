import type { Route } from '../types';

/** 多源 shortlist 立项 A：呼伦贝尔 / 泉州 / 镇远 / 长沙 / 扬州 */
export const patchRoutes: Route[] = [
  // ── 华北 · 呼伦贝尔夏季慢游（7–10天紧凑长线）────────────────
  {
    id: 'huabei-neimeng-hulunbuir',
    title: '海拉尔 · 草原一周浅线',
    region: 'huabei',
    seasons: ['summer'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约7–10天',
    transport:
      '北京飞海拉尔东山；当地正规包车分段看草原，勿一夜赶完全程天路；结束后海拉尔飞回北京',
    budgetLabel: '本趟约6000–10000元（含往返机票分摊与包车）',
    coverImage:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
    summary:
      '7–8月草原最绿：海拉尔慢住数日，陈巴尔虎一带包车看草浪，额尔古纳河岸可选过夜。骑马只走短段；紫外线强、温差大。看够海拉尔飞回北京休整。与「草原慢住两周」互补，本线更紧凑。',
    whyFast:
      '满洲里口岸半日快览即可；主体留给海拉尔周边草原与空白日，勿硬刷环线自驾。',
    researchKeywords: [
      '呼伦贝尔 海拉尔 七日 攻略',
      '呼伦贝尔 草原 包车 父母',
      '额尔古纳 夏季 慢游',
    ],
    sources: [
      {
        title: 'Wikivoyage：呼伦贝尔',
        url: 'https://zh.wikivoyage.org/wiki/%E5%91%BC%E4%BC%A6%E8%B4%9D%E5%B0%94',
        kind: 'other',
        note: '季节、进出港与草原概览，已改写',
      },
      {
        title: 'Wikivoyage：海拉尔',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B5%B7%E6%8B%89%E5%B0%94',
        kind: 'other',
        note: '机场与市区接驳参考',
      },
      {
        title: '呼伦贝尔市人民政府',
        url: 'https://www.hulunbeier.gov.cn/',
        kind: 'official',
        note: '景区开放与天气公告以当地政府/文旅为准',
      },
    ],
    stops: [
      {
        id: 'hailar-slow',
        name: '海拉尔（慢住）',
        days: 4,
        pace: 'slow',
        lat: 49.215,
        lng: 119.736,
        summary:
          '城区电梯酒店近医院；白天短途出城看草，下午回城歇；至少留一日空白。',
        tips:
          '北京直飞约2.5小时。夏日白天晒、早晚凉：帽、墨镜、薄外套。蚊虫多备驱蚊。别天天换酒店。',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      },
      {
        id: 'chenbarag-grass',
        name: '陈巴尔虎草原',
        days: 2,
        pace: 'slow',
        lat: 49.32,
        lng: 119.9,
        summary:
          '包车看草浪与河湾，骑马可选极短段；平地观景为主，不赶远点。',
        tips:
          '选正规车队；膝盖不适只坐车。紫外线强，10:00前或16:00后更舒服。勿雨季硬闯未硬化草原路。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
      {
        id: 'erguna-riverside',
        name: '额尔古纳河岸（可选）',
        days: 2,
        pace: 'slow',
        lat: 50.243,
        lng: 120.178,
        summary:
          '河岸换景可住一晚再返海拉尔；行程紧整段跳过。',
        tips:
          '车程约3–4小时，勿夜间赶路。林区湿滑穿防滑鞋。体力不够半日即返。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'manzhouli-half',
        name: '满洲里口岸（可选半日）',
        days: 1,
        pace: 'fast',
        lat: 49.598,
        lng: 117.378,
        summary: '俄式街区与国门外观快览；看够回海拉尔飞京。',
        tips:
          '国门预约以当日公告为准。别排满购物。回程优先海拉尔直飞北京。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
    ],
  },

  // ── 华南 · 泉州古城 ──────────────────────────────────────────
  {
    id: 'huanan-fujian-quanzhou',
    title: '泉州 · 古城宗教史迹',
    region: 'huanan',
    seasons: ['autumn', 'winter', 'spring'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3天',
    transport:
      '北京飞泉州晋江，或飞厦门转动车至泉州站；古城内步行/打车。结束后经泉州或厦门飞回北京',
    budgetLabel: '本趟约2500–4500元（含机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200',
    summary:
      '秋冬最宜：开元寺、西街与清净寺一带街巷平、室内多，适合约60岁健康父母慢看「宋元中国的世界海洋商贸中心」史迹。每天一主点，下午回酒店歇；看够经厦或晋江飞回北京。',
    whyFast:
      '崇武古城半日可选；主体留西街—开元寺轴，勿一天塞满山海多线。',
    researchKeywords: [
      '泉州 开元寺 西街 攻略',
      '泉州 古城 父母 三日',
    ],
    sources: [
      {
        title: 'Wikivoyage：泉州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B3%89%E5%B7%9E',
        kind: 'other',
        note: '古城步行与史迹概览，已改写',
      },
      {
        title: '泉州市人民政府',
        url: 'https://www.quanzhou.gov.cn/',
        kind: 'official',
        note: '文旅与景区开放以当地公告为准',
      },
    ],
    stops: [
      {
        id: 'quanzhou-west-street',
        name: '西街 · 开元寺',
        days: 1,
        pace: 'slow',
        lat: 24.914,
        lng: 118.586,
        summary:
          '西街平缓石板，开元寺殿宇与东西塔外观；上午人少，中午回酒店午休。',
        tips:
          '住近西街电梯酒店。寺内台阶量力；防晒与薄外套备一件。闽南湿热时缩短户外。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
      {
        id: 'quanzhou-qingjing',
        name: '清净寺 · 涂门街一带',
        days: 1,
        pace: 'slow',
        lat: 24.907,
        lng: 118.59,
        summary:
          '伊斯兰史迹与老街浅逛，室内外结合；不必硬排所有世遗点。',
        tips:
          '尊重宗教场所着装与摄影规定。累了咖啡馆歇脚。海鲜适量，肠胃敏感点清淡。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'chongwu-optional',
        name: '崇武古城（可选）',
        days: 1,
        pace: 'fast',
        lat: 24.84,
        lng: 118.92,
        summary: '滨海石城半日；行程紧或风大整段跳过。',
        tips:
          '打车或包车往返约1小时。城墙与海边风大，备外套；石板防滑。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
  },

  // ── 西南 · 镇远古城 ──────────────────────────────────────────
  {
    id: 'xinan-guizhou-zhenyuan',
    title: '镇远 · 舞阳河古城',
    region: 'xinan',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3天',
    transport:
      '北京飞贵阳龙洞堡，高铁至镇远站；古城步行沿江。结束后高铁回贵阳飞回北京',
    budgetLabel: '本趟约2500–4000元（含机票与高铁分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=1200',
    summary:
      '舞阳河畔古城平缓，适合过夜慢走与夜景浅逛；春秋最宜。不必硬爬青龙洞全线台阶。看够经贵阳飞回北京。与贵阳长线可衔接，也可单独短住。',
    whyFast:
      '青龙洞选平缓段或外观即可；主体沿江散步与空白午休。',
    researchKeywords: [
      '镇远古城 高铁 两日',
      '镇远 舞阳河 父母 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：贵州',
        url: 'https://zh.wikivoyage.org/wiki/%E8%B4%B5%E5%B7%9E',
        kind: 'other',
        note: '黔东交通与古城概览，已改写',
      },
      {
        title: '贵州省文化和旅游厅',
        url: 'https://whhly.guizhou.gov.cn/',
        kind: 'official',
        note: '景区开放与天气提示以官方为准',
      },
    ],
    stops: [
      {
        id: 'zhenyuan-oldtown',
        name: '镇远古城沿江',
        days: 2,
        pace: 'slow',
        lat: 27.05,
        lng: 108.43,
        summary:
          '河街平地慢走、夜景浅逛；住近江电梯客栈，每天一段街巷即可。',
        tips:
          '石板潮湿穿防滑鞋。黔味酸辣适量。天气多变备薄外套。勿夜深赶路。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
      {
        id: 'qinglong-dong-optional',
        name: '青龙洞（量力）',
        days: 1,
        pace: 'fast',
        lat: 27.049,
        lng: 108.425,
        summary:
          '崖壁古建群，台阶多处可跳过，外观与平缓段足够。',
        tips:
          '腿脚不便外观即可。雨天石阶更滑。门票与开放以当日公告为准。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
    ],
  },

  // ── 华中 · 长沙慢游 ──────────────────────────────────────────
  {
    id: 'huazhong-hunan-changsha',
    title: '长沙 · 岳麓与老街慢游',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约2–3天',
    transport:
      '北京西/丰台高铁至长沙南约5–6小时，或飞黄花机场；市内地铁/打车。结束后高铁或飞回北京',
    budgetLabel: '本趟约2000–3500元（高铁/机票+住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
    summary:
      '城市短线：岳麓书院平缓段、橘子洲江风、省博室内看展；可含坡子街/太平街浅逛。辣食点微辣。春秋最宜，看够高铁或飞回北京。',
    whyFast:
      '岳麓山索道/公路减负，不必登顶；主体书院+省博+一处老街。',
    researchKeywords: [
      '长沙 岳麓书院 攻略 父母',
      '长沙 省博 橘子洲 两日',
    ],
    sources: [
      {
        title: 'Wikivoyage：长沙',
        url: 'https://zh.wikivoyage.org/wiki/%E9%95%BF%E6%B2%99',
        kind: 'other',
        note: '城区交通与景点概览，已改写',
      },
      {
        title: '湖南省博物馆',
        url: 'https://www.hnmuseum.com/',
        kind: 'official',
        note: '预约与开放时间以官网为准',
      },
      {
        title: '长沙市文化和旅游局',
        url: 'http://wlj.changsha.gov.cn/',
        kind: 'official',
        note: '文旅提示与景区信息参考',
      },
    ],
    stops: [
      {
        id: 'yuelu-academy',
        name: '岳麓书院 · 山脚段',
        days: 1,
        pace: 'slow',
        lat: 28.184,
        lng: 112.935,
        summary:
          '书院庭院平缓好走；山路与登顶量力跳过，可坐景区交通减负。',
        tips:
          '早到人少。石阶防滑。暑热缩短户外，优先书院与树荫歇脚。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'orange-isle-oldstreet',
        name: '橘子洲 · 老街浅逛',
        days: 1,
        pace: 'slow',
        lat: 28.185,
        lng: 112.96,
        summary:
          '江心洲平路吹风；傍晚太平街/坡子街浅逛，不必夜市硬挤。',
        tips:
          '洲上风大备外套。辣食微辣或免辣；肠胃敏感备常备药。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'hunan-museum',
        name: '湖南省博物馆（可选）',
        days: 1,
        pace: 'slow',
        lat: 28.214,
        lng: 112.99,
        summary:
          '室内看展吹空调，半日足够；与登山日错开更轻松。',
        tips:
          '提前官网预约；周一常闭馆。看一两专题即可，勿连刷。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
    ],
  },

  // ── 华东 · 扬州瘦西湖 ────────────────────────────────────────
  {
    id: 'huadong-jiangsu-yangzhou',
    title: '扬州 · 瘦西湖慢走',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约2天',
    transport:
      '北京南高铁经南京或直达扬州东；市区打车/公交。结束后高铁经南京回北京',
    budgetLabel: '本趟约1500–2800元（高铁+住宿+门票）',
    coverImage:
      'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=1200',
    summary:
      '春日最佳：瘦西湖坐船减步、白塔五亭桥远观，东关街平地浅逛。节奏可很慢，一天湖一天街足够。看够高铁经南京回北京。',
    whyFast:
      '个园或何园二选一即可；勿一天塞满多园。',
    researchKeywords: [
      '扬州 瘦西湖 游船 攻略',
      '扬州 东关街 两日 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：扬州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%89%AC%E5%B7%9E',
        kind: 'other',
        note: '瘦西湖与古城步行参考，已改写',
      },
      {
        title: '扬州市文化和旅游局',
        url: 'https://www.yangzhou.gov.cn/',
        kind: 'official',
        note: '景区开放与票务以当地公告为准',
      },
    ],
    stops: [
      {
        id: 'slender-west-lake',
        name: '瘦西湖',
        days: 1,
        pace: 'slow',
        lat: 32.41,
        lng: 119.42,
        summary:
          '乘游船看白塔、五亭桥，岸上只走平缓段；上午入园光线好。',
        tips:
          '船票/联票以当日景区为准。石径湿滑穿防滑鞋。久站可带折叠凳；中午回酒店歇。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
      {
        id: 'dongguan-street',
        name: '东关街 · 园林可选',
        days: 1,
        pace: 'slow',
        lat: 32.394,
        lng: 119.445,
        summary:
          '东关街平地小吃与茶馆；个园或何园择一浅访，台阶多处可跳过。',
        tips:
          '别空腹重油。园林预约以当日为准。傍晚浅逛即回，次日高铁回京。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
    ],
  },
];
