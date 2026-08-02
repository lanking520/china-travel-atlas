import type { Route } from '../types';

/**
 * Prefecture deepen wave after catalog 144 (2026-08-02d).
 * 洛阳孟津/偃师独立浅线 · 开封独立 · 苏州县域 · 大理州日归表（非长居）。
 * Evidence: research/notes/prefecture-depth/{henan-luoyang,henan-kaifeng,jiangsu-suzhou,yunnan-dali}.md
 */
export const patchRoutes: Route[] = [
  // ── 洛阳孟津/偃师县域（独立浅线；龙门/开封另卡）──────────
  {
    id: 'huazhong-henan-luoyang-county',
    title: '洛阳 · 孟津偃师县域浅线',
    region: 'huazhong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京高铁至洛阳龙门/洛阳站；市区电梯酒店连住；白马寺与二里头包车同廊；孟津小浪底另日包车。结束后高铁返京。勿与龙门少林开封同短假硬串',
    budgetLabel: '本趟约2200–4000元（高铁+电梯酒店+门票包车；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/27495-Luoyang%2C_White_Horse_Temple.jpg/1280px-27495-Luoyang%2C_White_Horse_Temple.jpg',
    summary:
      '洛阳县域适老浅线：市区锚点 + 偃师白马寺平缓殿宇 + 二里头室内博物馆；孟津黄河小浪底观光车可选。龙门/少林/开封走既有专线，本卡不硬塞。',
    introduction:
      '搜「孟津」「偃师」「白马寺」「二里头」应对上本卡，而不是再被龙门+开封二选一带走。\n\n节奏：住洛阳市区电梯酒店，每天最多一处主点+午休。白马寺与二里头可同廊但勿赶场；孟津黄河另日，游船量力可删。\n\n龙门石窟、少林、开封宋韵另有专线，默认分两次出门。',
    seasonGuide:
      '春秋最舒适。夏闷热改早出+室内博物馆；午后少久站。冬干冷缩短户外，小浪底可整段删。',
    whyFast: '只白马寺+二里头两日也成立；小浪底与古村可删。',
    notices: [
      '白马寺预约与开放以景区官方为准；殿内外台阶量力。',
      '二里头以室内展陈为主，适合空调日；闭馆日出发前查官网。',
      '小浪底景区大、观光车优先；游船晕动或不适整段跳过。',
      '勿与龙门全线、少林、开封同短假特种兵连赶。',
      '栾川/嵩县山线约60默认不排。',
    ],
    researchKeywords: [
      '洛阳 孟津 偃师 父母',
      '白马寺 二里头 慢游',
      '小浪底 观光车',
      '洛阳 县域 日归',
    ],
    sources: [
      {
        title: 'Wikivoyage：洛阳',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B4%9B%E9%98%B3',
        kind: 'other',
        note: '进出与县域骨架，已改写适老',
      },
      {
        title: '地级笔记：洛阳孟津/偃师',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B2%B3%E5%8D%97',
        kind: 'other',
        note: 'research/notes/prefecture-depth/henan-luoyang.md',
      },
    ],
    stops: [
      {
        id: 'ly-county-base',
        name: '洛阳市区（慢住锚点）',
        days: 1.5,
        pace: 'slow',
        lat: 34.66,
        lng: 112.45,
        summary: '近地铁/医院电梯酒店；抵达日只散步歇脚。',
        tips: '博物馆空调日可作空白。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/27427-Luoyang_%2849067744628%29.jpg/1280px-27427-Luoyang_%2849067744628%29.jpg',
      },
      {
        id: 'ly-baimasi',
        name: '偃师 · 白马寺',
        days: 1,
        pace: 'slow',
        lat: 34.72,
        lng: 112.6,
        summary: '平缓殿宇浅逛；与二里头可同廊但勿赶。',
        tips: '穿防滑鞋；久站带折叠凳。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/27495-Luoyang%2C_White_Horse_Temple.jpg/1280px-27495-Luoyang%2C_White_Horse_Temple.jpg',
      },
      {
        id: 'ly-erlitou',
        name: '偃师 · 二里头夏都遗址博物馆',
        days: 1,
        pace: 'slow',
        lat: 34.7,
        lng: 112.68,
        summary: '室内展陈为主，空调友好。',
        tips: '查闭馆日；体力紧可与白马寺分两日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/20240815_Erlitou_Xia_Capital_Site_Museum_01.jpg/1280px-20240815_Erlitou_Xia_Capital_Site_Museum_01.jpg',
      },
      {
        id: 'ly-xiaolangdi-optional',
        name: '孟津 · 黄河小浪底（可选）',
        days: 1,
        pace: 'fast',
        lat: 34.92,
        lng: 112.36,
        summary: '观光车/观景优先；游船量力可删。',
        tips: '另日出行；勿与二里头同日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Xiaolangdi_Dam_Scenic_Area_-_10323808574.jpg/1280px-Xiaolangdi_Dam_Scenic_Area_-_10323808574.jpg',
      },
      {
        id: 'ly-weipo-optional',
        name: '孟津 · 卫坡古村（可选可删）',
        days: 0.5,
        pace: 'slow',
        lat: 34.85,
        lng: 112.42,
        summary: '古村浅逛换节奏；默认可删。',
        tips: '石板防滑；夜景人多即回。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Xiaolangdi_Dam_Scenic_Area_-_10323808574.jpg/1280px-Xiaolangdi_Dam_Scenic_Area_-_10323808574.jpg',
      },
    ],
  },

  // ── 开封独立宋韵 ────────────────────────────────────────
  {
    id: 'huazhong-henan-kaifeng',
    title: '开封 · 宋韵城慢走',
    region: 'huazhong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京高铁经郑州东转郑开城际/开封站，或洛阳—开封高铁。鼓楼附近电梯酒店连住。结束后经郑州返京。勿与洛阳龙门同日两城特种兵',
    budgetLabel: '本趟约1800–3500元（高铁+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg/1280px-%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg',
    summary:
      '开封独立加深：鼓楼慢住 + 清明上河园宜早 + 铁塔/龙亭平地选段；城墙登顶可删。与洛阳龙门分两次出门，不再只做「二选一」附赠。',
    introduction:
      '搜「开封」「清明上河」「铁塔」应直达本卡。既有洛阳线仍保留开封可选停靠，但想认真走宋韵城，请用本独立产品。\n\n平地为主，适合爸妈：园内早到错峰，午后回酒店歇，傍晚鼓楼浅逛即可。',
    seasonGuide:
      '春秋最佳。夏注意防晒与空调间歇；园内人多更宜早。冬干冷缩短户外，铁塔外观即可。',
    whyFast: '只清明上河园+铁塔外观两日也成立；城墙可删。',
    notices: [
      '清明上河园人多宜早；穿防滑鞋，勿一日刷完全园表演。',
      '铁塔登塔台阶量力，默认可只外观。',
      '城墙选一段即可，硬爬全程默认删。',
      '夜市控油控盐；灌汤包别贪多。',
      '勿与洛阳龙门同日连赶。',
    ],
    researchKeywords: [
      '开封 清明上河园 父母',
      '开封 铁塔 龙亭',
      '开封 鼓楼 慢游',
      '郑开城际 开封',
    ],
    sources: [
      {
        title: 'Wikivoyage：开封',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BC%80%E5%B0%81',
        kind: 'other',
        note: '古城与交通，已改写适老',
      },
    ],
    stops: [
      {
        id: 'kf-gulou-base',
        name: '鼓楼慢住',
        days: 1.5,
        pace: 'slow',
        lat: 34.79,
        lng: 114.35,
        summary: '近鼓楼电梯酒店；抵达日只浅逛歇脚。',
        tips: '夜市浅尝即回，别排太满。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/%E5%BC%80%E5%B0%81%E9%BE%99%E4%BA%AD.JPG/1280px-%E5%BC%80%E5%B0%81%E9%BE%99%E4%BA%AD.JPG',
      },
      {
        id: 'kf-qingming',
        name: '清明上河园',
        days: 1,
        pace: 'slow',
        lat: 34.81,
        lng: 114.35,
        summary: '园内平缓；宜早入园，午后回酒店。',
        tips: '表演选一场即可，勿追全场。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Millennium_City_Park_02.jpg/1280px-Millennium_City_Park_02.jpg',
      },
      {
        id: 'kf-iron-pagoda',
        name: '铁塔 / 龙亭选段',
        days: 1,
        pace: 'slow',
        lat: 34.82,
        lng: 114.36,
        summary: '铁塔外观+龙亭湖景平地；登塔可删。',
        tips: '两处勿与清明上河园同日硬赶。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg/1280px-%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg',
      },
      {
        id: 'kf-wall-optional',
        name: '开封城墙选段（可选可删）',
        days: 0.5,
        pace: 'fast',
        lat: 34.8,
        lng: 114.34,
        summary: '登一段即返；腿脚不稳整段跳过。',
        tips: '勿环城硬爬。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/%E5%BC%80%E5%B0%81%E9%BE%99%E4%BA%AD.JPG/1280px-%E5%BC%80%E5%B0%81%E9%BE%99%E4%BA%AD.JPG',
      },
    ],
  },

  // ── 苏州县域（昆山/常熟/同里；园林另卡）────────────────
  {
    id: 'huadong-jiangsu-suzhou-county',
    title: '苏州县域 · 周庄同里常熟',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京高铁至苏州站/苏州北或昆山南；园区或水乡电梯酒店连住；周庄/同里/常熟城际或包车日归。结束后高铁返京。园林请走「苏州园林·南京可选」',
    budgetLabel: '本趟约2500–4500元（高铁+水乡住宿+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Zhouzhuang_water_town.jpg/1280px-Zhouzhuang_water_town.jpg',
    summary:
      '苏州县域水乡浅线：周庄与同里二选一加深（勿同日），常熟方塔可选；拙政园/平江路走园林专线，本卡不硬塞多园。',
    introduction:
      '搜「周庄」「同里」「常熟」「昆山」应对上县域卡，而不是再被园林清单淹没。\n\n石板路穿防滑鞋，只选一条水巷慢慢走；人多就早到或改同里。常熟方塔平地，虞山台阶量力可删。',
    seasonGuide:
      '春秋最宜。夏湿热缩短午后，早出晚歇。梅雨石板湿滑更须防滑鞋。冬可走但缩短户外。',
    whyFast: '只同一水乡连住两晚也成立；常熟可删。',
    notices: [
      '周庄与同里勿同日特种兵；二选一加深即可。',
      '水乡石板防滑鞋；久站带折叠凳。',
      '园林全集请走江苏专线「苏州园林·南京可选」，本线不排拙政园连刷。',
      '东山/西山岛线约60默认不排。',
      '门票预约以景区官方为准。',
    ],
    researchKeywords: [
      '苏州 周庄 父母',
      '同里 退思园 慢游',
      '常熟 方塔',
      '昆山 水乡 日归',
    ],
    sources: [
      {
        title: 'Wikivoyage：苏州 / 周庄',
        url: 'https://zh.wikivoyage.org/wiki/%E8%8B%8F%E5%B7%9E',
        kind: 'other',
        note: '水乡与进出，已改写适老',
      },
    ],
    stops: [
      {
        id: 'szc-base',
        name: '苏州园区 / 水乡锚点',
        days: 1,
        pace: 'slow',
        lat: 31.32,
        lng: 120.72,
        summary: '电梯酒店连住；抵达休整，次日再进水乡。',
        tips: '也可直接住同里/周庄少换乘。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Humble_Administrator%27s_Garden_2015.JPG/1280px-Humble_Administrator%27s_Garden_2015.JPG',
      },
      {
        id: 'szc-zhouzhuang',
        name: '昆山 · 周庄（水乡二选一）',
        days: 1.5,
        pace: 'slow',
        lat: 31.12,
        lng: 120.85,
        summary: '选一两段水巷；可连住一晚听评弹。',
        tips: '与同里二选一加深；人多宜早。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Zhouzhuang_water_town.jpg/1280px-Zhouzhuang_water_town.jpg',
      },
      {
        id: 'szc-tongli',
        name: '吴江 · 同里（水乡二选一）',
        days: 1.5,
        pace: 'slow',
        lat: 31.16,
        lng: 120.72,
        summary: '较周庄静；退思园量力，石板慢走。',
        tips: '勿与周庄同日；行程紧可整段删改周庄。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Tongli_Town.jpg/1280px-Tongli_Town.jpg',
      },
      {
        id: 'szc-changshu-optional',
        name: '常熟 · 方塔（可选）',
        days: 1,
        pace: 'fast',
        lat: 31.65,
        lng: 120.75,
        summary: '方塔公园平地；虞山台阶默认可删。',
        tips: '另日或回程顺路；默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/%E5%B8%B8%E7%86%9F%E5%AE%8B%E5%B4%87%E6%95%99%E5%85%B4%E7%A6%8F%E5%AF%BA%E6%96%B9%E5%A1%94.jpg/1280px-%E5%B8%B8%E7%86%9F%E5%AE%8B%E5%B4%87%E6%95%99%E5%85%B4%E7%A6%8F%E5%AF%BA%E6%96%B9%E5%A1%94.jpg',
      },
    ],
  },

  // ── 大理州日归表（短假；非 longstay-dali）────────────────
  {
    id: 'xinan-yunnan-dali-daytrips',
    title: '大理州 · 洱源剑川日归表',
    region: 'xinan',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约4–6天',
    transport:
      '北京飞大理（或经昆明转）；古城外/下关电梯酒店连住；喜洲半日、洱源日归、沙溪过夜或日归均包车。结束后大理或昆明飞京。想住三四周请走长居「大理·洱海慢居」',
    budgetLabel: '本趟约2800–4800元（机票+包车+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%E5%89%91%E5%B7%9D%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87.jpg/1280px-%E5%89%91%E5%B7%9D%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87.jpg',
    summary:
      '大理州短假日归表：下关/古城外锚点 + 喜洲半日 + 洱源茈碧湖/地热国 + 剑川沙溪浅住；每天一县，可删段。非长居产品，不与洱海慢住一个月打架。',
    introduction:
      '长居大理请点「大理·洱海慢居约一个月」或丽江快览长线。本卡只服务短假父母：把州内「洱源 / 剑川沙溪」从长居附赠里抽成独立可搜表格式日归。\n\n边界诚实：不排满环洱海特种兵、不排鸡足山硬爬、不硬塞丽江雪山。紫外线强，正午少晒。',
    seasonGuide:
      '春秋最舒适。夏有阵雨与暴晒，备雨衣防晒，缩短午后。冬干冷湖岸风大，沙溪可改日归不过夜。',
    whyFast: '只沙溪两晚或只洱源一日也成立；喜洲/地热国可删。',
    notices: [
      '本卡无 long-stay 主题；月租慢居请走 longstay-dali。',
      '每天最多一县；包车优于自驾疲劳与夜山路。',
      '沙溪石板防滑；山路夜间少赶。',
      '地热国泡汤量力，高血压等遵医嘱。',
      '鸡足山台阶、满环洱海、丽江大索道默认不排。',
    ],
    researchKeywords: [
      '洱源 茈碧湖 父母',
      '剑川 沙溪 日归',
      '大理州 短假 包车',
      '喜洲 半日 慢游',
    ],
    sources: [
      {
        title: 'Wikivoyage：大理',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%A7%E7%90%86',
        kind: 'other',
        note: '州内进出与沙溪，已改写；与长居分卡',
      },
      {
        title: '大理白族自治州人民政府',
        url: 'https://www.dali.gov.cn/',
        kind: 'official',
        note: '文旅公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'dl-dt-base',
        name: '大理市锚点（古城外/下关）',
        days: 1.5,
        pace: 'slow',
        lat: 25.69,
        lng: 100.19,
        summary: '电梯酒店连住；抵达适应紫外线与海拔。',
        tips: '非短租长居；少搬运行李。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
      },
      {
        id: 'dl-dt-xizhou',
        name: '喜洲半日（可选）',
        days: 0.5,
        pace: 'slow',
        lat: 25.85,
        lng: 100.13,
        summary: '白族院落浅逛；勿变一日环海。',
        tips: '默认可删；双廊不排。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/%E5%96%9C%E6%B4%B2%E5%8F%A4%E9%95%87%E7%AE%80%E4%BB%8B.jpg/1280px-%E5%96%9C%E6%B4%B2%E5%8F%A4%E9%95%87%E7%AE%80%E4%BB%8B.jpg',
      },
      {
        id: 'dl-dt-eryuan',
        name: '洱源 · 茈碧湖 / 地热国',
        days: 1,
        pace: 'slow',
        lat: 26.11,
        lng: 99.95,
        summary: '湖岸浅走或泡汤二选一；当日回锚点。',
        tips: '包车日归；泡汤量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cibi_Lake_viewed_form_north_shore.JPG/1280px-Cibi_Lake_viewed_form_north_shore.JPG',
      },
      {
        id: 'dl-dt-shaxi',
        name: '剑川 · 沙溪古镇',
        days: 1.5,
        pace: 'slow',
        lat: 26.32,
        lng: 99.85,
        summary: '茶马古道古镇；可住一晚或日归。',
        tips: '石板防滑；山路勿夜赶。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%E5%89%91%E5%B7%9D%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87.jpg/1280px-%E5%89%91%E5%B7%9D%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87.jpg',
      },
      {
        id: 'dl-dt-hotspring-optional',
        name: '洱源地热国（可选可删）',
        days: 0.5,
        pace: 'fast',
        lat: 26.1,
        lng: 99.98,
        summary: '与茈碧湖同县时可合并；独立可删。',
        tips: '基础病遵医嘱；默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%E6%B4%B1%E6%BA%90%E5%A4%A7%E7%90%86%E5%9C%B0%E7%83%AD%E5%9B%BD%E6%99%AF%E5%8C%BA%E5%86%85%E7%9A%84%E5%A4%A7%E6%BB%9A%E9%94%85.jpg/1280px-%E6%B4%B1%E6%BA%90%E5%A4%A7%E7%90%86%E5%9C%B0%E7%83%AD%E5%9B%BD%E6%99%AF%E5%8C%BA%E5%86%85%E7%9A%84%E5%A4%A7%E6%BB%9A%E9%94%85.jpg',
      },
    ],
  },
];
