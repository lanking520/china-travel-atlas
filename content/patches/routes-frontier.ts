import type { Route } from '../types';

/**
 * 边陲城市短线：看边境风情，不涉越境；证件/口岸规定以当地公告为准。
 */
export const patchRoutes: Route[] = [
  // ── 丹东 ──────────────────────────────────────────────────
  {
    id: 'frontier-dandong',
    title: '丹东 · 鸭绿江边境浅游',
    region: 'dongbei',
    seasons: ['summer', 'autumn', 'spring'],
    tripType: 'short',
    fromHome: false,
    themes: ['frontier'],
    daysLabel: '约3–5天',
    transport:
      '北京飞丹东浪头，或高铁经沈阳中转至丹东；市区打车/公交沿江；结束后原路回京',
    budgetLabel: '本趟约2000–4000元（含机票/高铁与沿江住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200',
    summary:
      '东北边陲轻松线：鸭绿江断桥外观、沿江公园平地散步，抗美援朝纪念馆可选。不安排偷渡式「过桥」、不参与不明边境项目；看对岸风光即可。夏秋宜人，冬冷风大缩短停留。',
    whyFast: '断桥与沿江半日即可；主体留给休整与市区吃饭。',
    researchKeywords: [
      '丹东 鸭绿江 父母',
      '丹东 断桥 一日',
      '丹东 高铁 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：丹东',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%B9%E4%B8%9C',
        kind: 'other',
        note: '进出与沿江景点概览，已改写',
      },
      {
        title: '丹东市人民政府',
        url: 'https://www.dandong.gov.cn/',
        kind: 'official',
        note: '口岸与文旅公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'dandong-base',
        name: '丹东市区（沿江）',
        days: 2,
        pace: 'slow',
        lat: 40.129,
        lng: 124.394,
        summary: '住沿江电梯酒店，江景散步、海鲜清淡吃。',
        tips: '边境拍照遵守警示牌；勿进入管制区。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
      {
        id: 'yalu-bridge',
        name: '鸭绿江断桥',
        days: 1,
        pace: 'fast',
        lat: 40.115,
        lng: 124.392,
        summary: '购票上桥外观，台阶量力；江风大备外套。',
        tips: '人多时错峰。结束后可加抗美援朝纪念馆半日。',
        image:
          'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
      },
    ],
  },

  // ── 满洲里 ────────────────────────────────────────────────
  {
    id: 'frontier-manzhouli',
    title: '满洲里 · 国门广场浅住',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    themes: ['frontier'],
    daysLabel: '约3–5天',
    transport:
      '北京飞海拉尔再包车/火车至满洲里，或看季节直飞满洲里西郊；结束后经海拉尔飞回北京',
    budgetLabel: '本趟约2500–5000元（含联程机票与市区住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
    summary:
      '中俄国门风情：国门广场、套娃景区外观为主，市区俄式建筑街浅逛。不参与不明跨境购物团；边检与拍照禁区遵守警示。可与呼伦贝尔草原线分两次走，勿一夜连轴。',
    whyFast: '国门半日快览即可；套娃景区量力。',
    researchKeywords: [
      '满洲里 国门 父母',
      '满洲里 海拉尔 交通',
      '满洲里 夏季 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：满洲里',
        url: 'https://zh.wikivoyage.org/wiki/%E6%BB%A1%E6%B4%B2%E9%87%8C',
        kind: 'other',
        note: '口岸城市进出概览',
      },
      {
        title: '满洲里市人民政府',
        url: 'https://www.manzhouli.gov.cn/',
        kind: 'official',
        note: '口岸与旅游公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'manzhouli-base',
        name: '满洲里市区',
        days: 2,
        pace: 'slow',
        lat: 49.598,
        lng: 117.379,
        summary: '电梯酒店歇脚，市中心街道与餐厅浅逛。',
        tips: '夏季日照长，备防晒；秋季温差大。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
      {
        id: 'guomen-square',
        name: '国门景区',
        days: 1,
        pace: 'fast',
        lat: 49.63,
        lng: 117.36,
        summary: '国门广场参观，遵从安检与禁拍规定。',
        tips: '门票与开放时间以景区当日为准。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
    ],
  },

  // ── 漠河 ──────────────────────────────────────────────────
  {
    id: 'frontier-mohe',
    title: '漠河 · 北极村夏日浅住',
    region: 'dongbei',
    seasons: ['summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['frontier'],
    daysLabel: '约4–6天',
    transport:
      '北京飞漠河古莲（航班少，可经哈尔滨中转）；景区摆渡/包车至北极村；结束后原路飞回北京',
    budgetLabel: '本趟约3500–6500元（含机票与北极村住宿；航班波动大）',
    coverImage:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200',
    summary:
      '中国最北端夏日：北极村木栈道平地散步，北红村可选，极光与冒烟需运气勿强求。冬季极寒不推荐本线；夏季防蚊虫、早晚温差。航班取消常见，预留机动日。',
    whyFast: '北红村半日即可；主体北极村慢走。',
    researchKeywords: [
      '漠河 北极村 父母',
      '漠河 夏天 航班',
      '北极村 攻略 退休',
    ],
    sources: [
      {
        title: 'Wikivoyage：漠河',
        url: 'https://zh.wikivoyage.org/wiki/%E6%BC%A0%E6%B2%B3',
        kind: 'other',
        note: '进出与北极村概览',
      },
      {
        title: '漠河市人民政府',
        url: 'https://www.mohe.gov.cn/',
        kind: 'official',
        note: '景区与交通公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'mohe-town',
        name: '漠河县城',
        days: 1,
        pace: 'slow',
        lat: 52.972,
        lng: 122.539,
        summary: '落地休整一夜，再进北极村。',
        tips: '备长袖防蚊。药店先补常用药。',
        image:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      },
      {
        id: 'beiji-village',
        name: '北极村',
        days: 3,
        pace: 'slow',
        lat: 53.333,
        lng: 121.517,
        summary: '木屋民宿/酒店，哨所广场与江边栈道浅走。',
        tips: '「天涯」碑人群可错峰。不安排野外露营。',
        image:
          'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
      },
    ],
  },

  // ── 二连浩特 ──────────────────────────────────────────────
  {
    id: 'frontier-erlian',
    title: '二连浩特 · 国门短住',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: true,
    themes: ['frontier'],
    daysLabel: '约3–4天',
    transport:
      '北京高铁/火车至二连浩特，或自驾经集宁；市区短距离；结束后火车/自驾回北京',
    budgetLabel: '本趟约1500–3000元（交通+住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200',
    summary:
      '中蒙边境口岸城市：国门景区外观、恐龙博物馆可选，市区休整。风沙大备口罩；不参与跨境不明团。适合北京出发的短途边陲体验，与草原长线分开走。',
    whyFast: '国门半日；恐龙馆量力。',
    researchKeywords: [
      '二连浩特 国门 攻略',
      '二连浩特 火车 北京',
      '二连 父母 旅行',
    ],
    sources: [
      {
        title: 'Wikivoyage：二连浩特',
        url: 'https://zh.wikivoyage.org/wiki/%E4%BA%8C%E8%BF%9E%E6%B5%A9%E7%89%B9',
        kind: 'other',
        note: '口岸城市概览',
      },
      {
        title: '二连浩特市人民政府',
        url: 'https://www.elht.gov.cn/',
        kind: 'official',
        note: '口岸开放与文旅公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'erlian-base',
        name: '二连浩特市区',
        days: 2,
        pace: 'slow',
        lat: 43.653,
        lng: 111.978,
        summary: '口岸城市歇脚，街道与餐饮浅逛。',
        tips: '昼夜温差大。近医院的电梯房优先。',
        image:
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
      },
      {
        id: 'erlian-guomen',
        name: '国门景区',
        days: 1,
        pace: 'fast',
        lat: 43.7,
        lng: 111.95,
        summary: '国门参观，遵守边防规定。',
        tips: '开放时间季节性变化，出发前查公告。',
        image:
          'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
      },
    ],
  },

  // ── 东兴 ──────────────────────────────────────────────────
  {
    id: 'frontier-dongxing',
    title: '东兴 · 中越边境浅游',
    region: 'huanan',
    seasons: ['autumn', 'winter', 'spring'],
    tripType: 'short',
    fromHome: false,
    themes: ['frontier'],
    daysLabel: '约3–5天',
    transport:
      '北京飞南宁再高铁/包车至东兴，或飞防城港再转；结束后经南宁飞回北京',
    budgetLabel: '本趟约2500–4500元（含联程与海边住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
    summary:
      '广西边陲：东兴口岸外观、万尾金滩京族风情浅逛，北仑河沿岸散步。不办「一日游越南」不明团除非正规护照签注；暑期湿热改秋冬。可与德天瀑布线分两次。',
    whyFast: '口岸外观半日；金滩半日。',
    researchKeywords: [
      '东兴 边境 父母',
      '东兴 金滩 京族',
      '防城港 东兴 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：东兴',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%9C%E5%85%B4',
        kind: 'other',
        note: '边境城市与海滩概览',
      },
      {
        title: '东兴市人民政府',
        url: 'https://www.dxzf.gov.cn/',
        kind: 'official',
        note: '口岸与旅游公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'dongxing-base',
        name: '东兴市区',
        days: 2,
        pace: 'slow',
        lat: 21.548,
        lng: 107.972,
        summary: '口岸城市歇脚，北仑河岸散步。',
        tips: '边境管理区听从标识；护照出行备用。',
        image:
          'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
      },
      {
        id: 'wanwei-beach',
        name: '万尾金滩（京族）',
        days: 1,
        pace: 'slow',
        lat: 21.53,
        lng: 108.13,
        summary: '沙滩平地慢走，避正午暴晒。',
        tips: '海鲜清淡；防晒必备。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
  },

  // ── 瑞丽 ──────────────────────────────────────────────────
  {
    id: 'frontier-ruili',
    title: '瑞丽 · 畹町边境浅住',
    region: 'xinan',
    seasons: ['autumn', 'winter', 'spring'],
    tripType: 'short',
    fromHome: false,
    themes: ['frontier'],
    daysLabel: '约4–6天',
    transport:
      '北京飞昆明再飞芒市（德宏），包车至瑞丽；结束后原路经昆明回北京',
    budgetLabel: '本趟约3000–5500元（含联程与边境城市住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=1200',
    summary:
      '滇西边陲：瑞丽江畔、畹町桥外观、市区珠宝街浅逛。边境管理严格，不进入不明通道；暑期湿热与雨季路滑宜避。可与腾冲线分两次，勿一日连赶。',
    whyFast: '畹町桥半日；主体瑞丽休整。',
    researchKeywords: [
      '瑞丽 边境 父母',
      '芒市 瑞丽 交通',
      '畹町 桥 攻略',
    ],
    sources: [
      {
        title: 'Wikivoyage：瑞丽',
        url: 'https://zh.wikivoyage.org/wiki/%E7%91%9E%E4%B8%BD',
        kind: 'other',
        note: '德宏边境城市概览',
      },
      {
        title: '瑞丽市人民政府',
        url: 'https://www.rl.gov.cn/',
        kind: 'official',
        note: '口岸与疫情/边防规定以官方最新为准',
      },
    ],
    stops: [
      {
        id: 'ruili-base',
        name: '瑞丽市区',
        days: 3,
        pace: 'slow',
        lat: 24.013,
        lng: 97.852,
        summary: '电梯酒店慢住，江边与市区市场浅逛。',
        tips: '防晒防蚊。珠宝购物量力、防骗。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'wanding-bridge',
        name: '畹町桥（外观）',
        days: 1,
        pace: 'fast',
        lat: 24.08,
        lng: 98.07,
        summary: '历史口岸外观，遵守边防指示。',
        tips: '勿擅自靠近警戒线。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
    ],
  },
];
