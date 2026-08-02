import type { Route } from '../types';

/** North patch: 内蒙古 / 山东 / 辽宁 / 陕西 — merge into routes.ts later */
export const patchRoutes: Route[] = [
  // ── 华北 · 呼伦贝尔夏 ──────────────────────────────────────────
  {
    id: 'huabei-neimeng-summer',
    title: '呼伦贝尔 · 草原慢住',
    region: 'huabei',
    seasons: ['summer'],
    tripType: 'long',
    fromHome: true,
    daysLabel: '约10–14天',
    transport:
      '飞海拉尔（或高铁/自驾经张家口出京），当地包车或租车；结束后飞回北京',
    budgetLabel: '本趟约8000–14000元（含往返机票分摊；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
    summary:
      '海拉尔城住为锚，陈巴尔虎草原选段+额尔古纳/满洲里可选；约十到十四日，不垫三周空日。更紧凑见呼伦贝尔短线；月租见 longstay-hulunbuir。',
    whyFast:
      '满洲里与莫尔道嘎可各排一日快览；主体时间在海拉尔周边草原慢走，勿赶环线。',
    researchKeywords: [
      '呼伦贝尔 海拉尔 慢住 夏天',
      '呼伦贝尔 草原 包车 路线',
      '额尔古纳 莫尔道嘎 退休旅行',
    ],
    sources: [
      {
        title: 'Wikivoyage：呼伦贝尔',
        url: 'https://zh.wikivoyage.org/wiki/%E5%91%BC%E4%BC%A6%E8%B4%9D%E5%B0%94',
        kind: 'other',
        note: '交通、季节与景点概览，已改写',
      },
      {
        title: 'Wikivoyage：海拉尔',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B5%B7%E6%8B%89%E5%B0%94',
        kind: 'other',
        note: '机场、市区与周边草原接驳参考',
      },
      {
        title: '呼伦贝尔市人民政府旅游专栏',
        url: 'https://www.hulunbeier.gov.cn/',
        kind: 'official',
        note: '景区开放与天气公告以当地政府/文旅为准',
      },
    ],
    stops: [
      {
        id: 'hailar-base',
        name: '海拉尔（慢住基地）',
        days: 6,
        pace: 'slow',
        lat: 49.215,
        lng: 119.736,
        summary:
          '城区电梯酒店近医院超市；短途出城看草原后回城歇；空白穿插，不垫十日空转。',
        tips:
          '北京直飞海拉尔约2.5小时最省心。夏日白天晒、早晚凉，备防晒帽与薄羽绒。蚊虫多备驱蚊。别天天换酒店。',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      },
      {
        id: 'hulunbuir-grassland',
        name: '呼伦贝尔草原（陈巴尔虎一带）',
        days: 3,
        pace: 'slow',
        lat: 49.32,
        lng: 119.9,
        summary:
          '包车出城看草浪与河湾，骑马可选短段；平地多，别硬赶远点。',
        tips:
          '包车一日约400–600元量级（议价），选正规车队。骑马只走短途、系好头盔；膝盖不适可只坐车观景。中午紫外线强，10:00前或16:00后出片更好。注意防火，勿乱扔烟头。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
      {
        id: 'erguna-optional',
        name: '额尔古纳 / 莫尔道嘎（可选）',
        days: 2,
        pace: 'fast',
        lat: 50.243,
        lng: 120.178,
        summary:
          '河岸与林区换景，可住一晚再返海拉尔。莫尔道嘎林海可选，体力不够可跳过。',
        tips:
          '从海拉尔车程约3–4小时，建议包车往返，勿夜间赶路。林区湿滑，穿防滑鞋；海拔不高但昼夜温差大。行程紧可只去额尔古纳河岸半日即返。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'manzhouli-optional',
        name: '满洲里口岸（可选1日）',
        days: 1,
        pace: 'fast',
        lat: 49.598,
        lng: 117.378,
        summary: '俄式街区与国门外观快览，平地为主；看够即回海拉尔或次日飞回北京。',
        tips:
          '国门需预约时段（以当日景区公告为准）。城区步行即可，别排满购物。回程可从满洲里或海拉尔飞回北京，提前查直飞班次。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
    ],
  },

  // ── 山东半岛已迁至 prefecture-hebei-shandong：leg-qingdao-laoshan / compose-shandong-qingdao-yantai（reuse leg-qingdao-coast / yantai）──

  // ── 东北 · 大连滨海 ──────────────────────────────────────────
  {
    id: 'dongbei-dalian-summer',
    title: '大连 · 滨海慢走一周',
    region: 'dongbei',
    seasons: ['summer'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约7–10天',
    transport:
      '飞大连周水子或高铁经沈阳中转；市区打车/地铁，滨海路可包车；结束后飞回北京',
    budgetLabel: '本趟约5000–9000元（含机票分摊）',
    coverImage:
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
    summary:
      '夏季大连比华北内陆凉快，星海广场、滨海路、老虎滩分段走。每天一处海景，中间留休息日。旅顺口可选半日。结束后飞回北京。',
    whyFast: '旅顺军港与金石滩可各排半日快览；主体在市区滨海慢走。',
    researchKeywords: [
      '大连 滨海路 夏天 攻略',
      '大连 星海广场 老虎滩',
      '大连 一周 退休旅行',
    ],
    sources: [
      {
        title: 'Wikivoyage：大连',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%A7%E8%BF%9E',
        kind: 'other',
        note: '分区、滨海路与交通概览',
      },
      {
        title: '大连市文化和旅游局',
        url: 'https://whly.dl.gov.cn/',
        kind: 'official',
        note: '景区公告与季节活动以官网为准',
      },
      {
        title: 'Wikivoyage：旅顺',
        url: 'https://zh.wikivoyage.org/wiki/%E6%97%85%E9%A1%BA',
        kind: 'other',
        note: '旅顺一日往返参考',
      },
    ],
    stops: [
      {
        id: 'dalian-base',
        name: '大连市区（基地）',
        days: 5,
        pace: 'slow',
        lat: 38.914,
        lng: 121.615,
        summary:
          '中山/沙河口近地铁电梯酒店，早晚沿海散步，中午回酒店避晒。',
        tips:
          '北京直飞约1.5小时。海鲜码头与人民路一带吃饭方便，少吃生冷。滨海路全长不必一天走完，包车分段停靠更省力。夏日海雾偶发，备薄外套。',
        image:
          'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
      },
      {
        id: 'xinghai-square',
        name: '星海广场 + 滨海路东段',
        days: 1,
        pace: 'slow',
        lat: 38.876,
        lng: 121.586,
        summary: '广场开阔平坦，可慢走、坐看海；旁有公园长椅多。',
        tips:
          '清晨或傍晚最舒服；正午广场晒、风大。附近咖啡馆可歇。别硬骑共享单车赶全程滨海路。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'laohutan',
        name: '老虎滩 / 滨海路中段',
        days: 1,
        pace: 'slow',
        lat: 38.876,
        lng: 121.676,
        summary: '海岸栈道与公园结合，可走一段即返；极地馆可选、室内空调足。',
        tips:
          '景区人多时错峰上午入园。栈道湿滑处慢走。极地馆久站可带折叠凳；不想进馆只走海边也够看。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
      {
        id: 'lushun-optional',
        name: '旅顺口（可选半日）',
        days: 0.5,
        pace: 'fast',
        lat: 38.816,
        lng: 121.235,
        summary: '军港与历史遗迹外观为主，包车往返市区约1小时车程。',
        tips:
          '部分区域有参观限制，以现场公告为准。山上炮台台阶多，可山下远观。体力不够可跳过，把时间留给市区海边。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
    ],
  },

  // ── 华中 · 西安慢住 ──────────────────────────────────────────
  {
    id: 'huazhong-xian-slow',
    title: '西安 · 慢住',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '约10–12天',
    transport:
      '北京西/丰台高铁至西安北约4.5–5.5小时，或直飞咸阳机场；市区地铁+打车；结束后高铁或飞回北京',
    budgetLabel: '本趟约8000–14000元（含往返分摊；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200',
    summary:
      '城墙内/雁塔电梯房为锚：市区安顿与空白→城墙/陕历博→兵马俑一日→华山缆车可选；约十到十二日，不垫三周空日。',
    whyFast:
      '兵马俑与华山（缆车）各作一日快览；市区博物馆、城墙、回民街以慢游为主。',
    researchKeywords: [
      '西安 慢住 两周 退休',
      '兵马俑 预约 攻略 老人',
      '华山 索道 西峰 体力',
    ],
    sources: [
      {
        title: 'Wikivoyage：西安',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%89',
        kind: 'other',
        note: '城区分区、交通与博物馆概览',
      },
      {
        title: '秦始皇帝陵博物院（兵马俑）',
        url: 'https://www.bmy.com.cn/',
        kind: 'official',
        note: '预约、票价与开放时间以官网为准',
      },
      {
        title: '华山景区官方信息',
        url: 'https://www.huashan.org.cn/',
        kind: 'official',
        note: '索道运行、天气关闭与安全提示',
      },
      {
        title: 'Wikivoyage：华山',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8D%8E%E5%B1%B1',
        kind: 'other',
        note: '索道与登山风险参考',
      },
    ],
    stops: [
      {
        id: 'xian-base',
        name: '西安市区（慢住基地）',
        days: 6,
        pace: 'slow',
        lat: 34.341,
        lng: 108.94,
        summary:
          '近地铁电梯酒店：回民街浅逛、永兴坊/公园空白穿插；不垫十二日空转。',
        tips:
          '高铁或飞机均可；行李多优先直飞。回民街别空腹久站。春秋花粉与沙尘偶发，备口罩。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
      {
        id: 'city-wall-museum',
        name: '城墙 + 陕历博',
        days: 2,
        pace: 'slow',
        lat: 34.266,
        lng: 108.947,
        summary:
          '城墙平地可走可骑，选南门一段即可；陕历博空调足、电梯有，适合细看半日。',
        tips:
          '陕历博须提前预约（以官网/小程序为准）。城墙骑行顺时针走一段下城，不必环全城。夏天正午热，春秋最舒服。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
      {
        id: 'terracotta',
        name: '兵马俑（一日快看）',
        days: 1,
        pace: 'fast',
        lat: 34.385,
        lng: 109.278,
        summary:
          '一早进一号坑看主阵，二、三号坑按体力选看；馆内平地多，可租讲解器。',
        tips:
          '官网或正规渠道预约，旺季早场。园区大，优先一号坑；累了坐观光车往返停车场。别跟低价团赶华清池连环，体力留给主坑。带水、穿舒适鞋。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
      {
        id: 'huashan-optional',
        name: '华山缆车（可选1日）',
        days: 1,
        pace: 'fast',
        lat: 34.483,
        lng: 110.086,
        summary:
          '西峰或北峰索道上下，只走索道站附近平缓段看景；恐高、膝踝不适、大风天气勿上。',
        tips:
          '华山以陡峭著称，腿脚好也建议**只坐缆车、短走观景台**，勿夜爬、勿赶长空栈道。索道常因大风停运，出发前查官方公告；停运即改市区休息日。海拔与落差有，备薄外套、防滑鞋；心脏病/严重高血压建议放弃。结束后当日返西安，次日休整后再回京。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
    ],
  },
];
