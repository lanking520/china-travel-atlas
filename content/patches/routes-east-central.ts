import type { Route } from '../types';

/** 华东/华中补丁：上海、安徽、江西、河南、湖南（合并进 routes.ts 前独立存放） */
export const patchRoutes: Route[] = [
  // ── 华东 · 上海短住 ──────────────────────────────────────────
  {
    id: 'huadong-shanghai-short',
    title: '上海 · 外滩与博物馆慢走',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '3–5天',
    transport: '北京南/北京站高铁至上海虹桥或上海站约4.5–6小时；市内地铁+步行',
    budgetLabel: '本趟约3500–5500元（高铁+住宿+市内）',
    coverImage:
      'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=1200',
    summary:
      '高铁直达，外滩滨江平地漫步、上海博物馆吹空调看展，节奏可紧可松。腿脚好也不必赶场：每天一个主点，傍晚江边看灯。可选一日朱家角，结束高铁返京。',
    whyFast: '朱家角可压缩为半日快览；核心留给外滩与上博，不硬塞豫园高峰。',
    researchKeywords: [
      '上海 外滩 步行 攻略',
      '上海博物馆 预约 东馆',
      '朱家角 一日 退休',
    ],
    sources: [
      {
        title: '上海博物馆官网（参观预约）',
        url: 'https://www.shanghaimuseum.net/',
        kind: 'official',
        note: '人民广场馆/东馆开放时间与基本陈列预约以官网为准',
      },
      {
        title: 'Wikivoyage：上海',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%8A%E6%B5%B7',
        kind: 'other',
        note: '外滩、交通与城区步行参考，CC 署名已改写',
      },
    ],
    stops: [
      {
        id: 'shanghai-bund',
        name: '外滩滨江',
        days: 1,
        pace: 'slow',
        lat: 31.2404,
        lng: 121.4905,
        summary:
          '万国建筑群一线看江景，全程平地。傍晚至夜景最舒服，不必久站栏杆。',
        tips:
          '选近南京东路或豫园地铁站的电梯酒店。外滩人多时沿江往南或往北走一段即疏；薄外套防江风。别中午硬挤豫园石板路，留体力给晚间灯火。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
      {
        id: 'shanghai-museum',
        name: '上海博物馆',
        days: 1,
        pace: 'slow',
        lat: 31.2283,
        lng: 121.4754,
        summary:
          '青铜、陶瓷、书画任选一两馆细看即可。空调足，适合半天室内节奏。',
        tips:
          '人民广场馆与东馆开放日不同（除节假日外周一/周二分别闭馆），出发前查官网。基本陈列常免预约，特展以当日公告为准。看腻了就人民广场歇脚，勿连刷三馆。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
      {
        id: 'zhujiajiao-optional',
        name: '朱家角古镇（可选）',
        days: 1,
        pace: 'slow',
        lat: 31.112,
        lng: 121.051,
        summary: '上海近郊水乡，石桥与河道慢走，比周庄近、可当日往返市区。',
        tips:
          '地铁17号线至朱家角站再公交/打车。古镇石板路穿防滑软底鞋；旺季上午早到，只走一两段水巷即可，不必刷完全镇。体力紧可跳过，不影响主行程。',
        image:
          'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
      },
    ],
  },

  // ── 华东 · 黄山徽州 ──────────────────────────────────────────
  {
    id: 'huadong-huangshan-hui',
    title: '黄山 · 索道上山与徽州慢走',
    region: 'huadong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '5–7天',
    transport: '高铁至黄山北站，景区大巴/包车；山上靠索道+步行，屯溪/宏村另排',
    budgetLabel: '本趟约5000–8000元（门票索道+山宿或山下宿）',
    coverImage:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    summary:
      '腿脚好也别硬爬：云谷或玉屏索道上下，山顶慢走精华段即可。屯溪老街、宏村平地看徽派，节奏留给徽州慢生活。春秋云海机会多，法定节假日索道排队长，宜错峰。',
    whyFast: '山上一日索道往返看迎客松/西海一带；山下宏村+屯溪各一日，不赶西递连线。',
    researchKeywords: [
      '黄山 索道 云谷 玉屏 老人',
      '黄山 预约 分时 攻略',
      '宏村 屯溪老街 慢游',
    ],
    sources: [
      {
        title: '黄山风景区管理委员会 · 索道服务',
        url: 'https://hsgwh.huangshan.gov.cn/lyfw/lyfw/sd/index.html',
        kind: 'official',
        note: '云谷/玉屏/太平索道信息与咨询电话0559-2590999',
      },
      {
        title: '黄山市：景区开放与预约公告',
        url: 'https://www.huangshan.gov.cn/zwgk/public/6615714/11914258.html',
        kind: 'official',
        note: '强实名分时分方向预约；小程序「黄山旅游官方平台」',
      },
      {
        title: '合肥本地宝：黄山索道订票说明',
        url: 'https://hf.bendibao.com/tour/202332/90409.shtm',
        kind: 'other',
        note: '换乘车与索道宜官方平台一并预约',
      },
    ],
    stops: [
      {
        id: 'huangshan-cable',
        name: '黄山风景区（索道）',
        days: 2,
        pace: 'fast',
        lat: 30.131,
        lng: 118.155,
        summary:
          '先预约门票与索道，上山看精华、下山不硬撑。山顶风大，多穿一层。',
        tips:
          '「黄山旅游官方平台」提前选日期、时段与进山方向。腿脚好仍建议索道双程：云谷或玉屏择一，西海观光缆车按体力。别赶天都峰；步道多石阶，慢走多歇，雨后防滑。山顶住宿贵且紧，也可住山下次日早索道。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'tunxi-old-street',
        name: '屯溪老街',
        days: 1,
        pace: 'slow',
        lat: 29.714,
        lng: 118.317,
        summary: '黄山市区徽派街巷，平地逛吃，适合下山后休整半日到一日。',
        tips:
          '近高铁黄山北需转车入屯溪。老街免费，傍晚人气足；买茶叶认准正规店，别被拉客带远。选电梯酒店，第二天再去宏村。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'hongcun',
        name: '宏村',
        days: 1.5,
        pace: 'slow',
        lat: 30.004,
        lng: 117.989,
        summary: '南湖月沼、粉墙黛瓦，村内以平路为主，适合慢拍慢走。',
        tips:
          '门票实名，可经「徽黄游」等官方渠道预约。石板路防滑鞋；承志堂等室内有台阶，外观+院落足够。住村边或汤口，避免一日连赶西递。可与婺源线衔接，但本线主写安徽。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
    ],
  },

  // ── 华东 · 婺源春花 ──────────────────────────────────────────
  {
    id: 'huadong-wuyuan-spring',
    title: '婺源 · 春日油菜花',
    region: 'huadong',
    seasons: ['spring'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '3–4天（可挂接黄山）',
    transport: '高铁至婺源站，县城班车或包车串江岭/篁岭；亦可黄山北转车',
    budgetLabel: '本趟约2500–4000元（门票+包车+住宿）',
    coverImage:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200',
    summary:
      '三月至四月金黄梯田配徽派民居，江西春日名片。体力好也不必爬满山：观景台+短段步道即可。可独立成行，也可挂在黄山徽州线之后，本 id 专覆盖江西。',
    whyFast: '江岭或篁岭择一主看，李坑等古村浅逛；错开周末早到观景台。',
    researchKeywords: [
      '婺源 油菜花 花期',
      '婺源 江岭 篁岭 攻略',
      '婺源 高铁 三日',
    ],
    sources: [
      {
        title: '央广网：江西婺源梯田花海',
        url: 'https://finance.cnr.cn/jjgd/20250326/t20250326_527113229.shtml',
        kind: 'official',
        note: '3–4月盛花期，江岭/篁岭为核心观赏地',
      },
      {
        title: '南昌本地宝：婺源油菜花花期预报参考',
        url: 'https://nc.bendibao.com/tour/2022217/70352.shtm',
        kind: 'other',
        note: '平原与梯田花期错开，出行前查当年预报',
      },
    ],
    stops: [
      {
        id: 'wuyuan-jiangling',
        name: '江岭梯田花海',
        days: 1.5,
        pace: 'slow',
        lat: 29.348,
        lng: 117.861,
        summary: '层层油菜花海，观景台俯瞰为主，清晨薄雾最出片。',
        tips:
          '盛花多在3月中下旬至4月初（海拔越高越晚）。早到错峰；观景台之间仍有坡度，量力走一两处即可。周末公路易堵，可住江岭/晓起附近。',
        image:
          'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      },
      {
        id: 'wuyuan-huangling',
        name: '篁岭（可选）',
        days: 1,
        pace: 'slow',
        lat: 29.328,
        lng: 118.023,
        summary: '晒秋民居+梯田花，缆车减步行，适合与江岭二选一或浅加半日。',
        tips:
          '索道/缆车上村省腿；玻璃栈道恐高可绕。花期与江岭接近但高山段略晚。门票含多项，出发前核对套票内容。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'wuyuan-village',
        name: '思溪延村/晓起（浅逛）',
        days: 0.5,
        pace: 'slow',
        lat: 29.3,
        lng: 117.9,
        summary: '徽派古村平路多，油菜花环村，适合歇脚喝茶。',
        tips: '别一日刷五个村；选一处慢走半日，下午回酒店午休。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
    ],
  },

  // ── 华中 · 洛阳开封 ──────────────────────────────────────────
  {
    id: 'huazhong-luoyang-kaifeng',
    title: '洛阳龙门 · 少林或开封',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '3–5天',
    transport: '高铁至洛阳龙门/洛阳站；少林包车约1–1.5小时；开封另高铁或包车',
    budgetLabel: '本趟约2500–4000元',
    coverImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    summary:
      '龙门石窟单线游览、台阶有但节奏可控；60岁以上常免票须预约。第二天二选一：少林问禅，或开封宋韵城墙慢走。春秋适宜，暑热与十一高峰宜避开。',
    whyFast: '少林与开封勿同日硬塞；龙门半日到一日足够，余力再加白马寺可选。',
    researchKeywords: [
      '龙门石窟 预约 60岁',
      '少林寺 一日 登封',
      '开封 清明上河 城墙',
    ],
    sources: [
      {
        title: '龙门石窟 · 参观指南',
        url: 'http://www.lmsk.cn/Pwxx_id_4.html',
        kind: 'official',
        note: '60周岁及以上免票须预约；单线游览西山—东山—香山寺—白园',
      },
      {
        title: '龙门石窟实名购票参观通知（光明网转载）',
        url: 'https://m.gmw.cn/2025-03-20/content_1303995949.htm',
        kind: 'official',
        note: '公众号「龙门石窟」预约；爽约机制以公告为准',
      },
      {
        title: '洛阳本地宝：龙门优惠政策汇总',
        url: 'http://ly.bendibao.com/tour/20241129/31065.shtm',
        kind: 'other',
        note: '票价与免票办理程序参考，以景区当日为准',
      },
    ],
    stops: [
      {
        id: 'longmen-grottoes',
        name: '龙门石窟',
        days: 1,
        pace: 'slow',
        lat: 34.555,
        lng: 112.47,
        summary: '伊阙两岸佛龛，奉先寺卢舍那大佛必看。量力走完全线，不必四段全刷。',
        tips:
          '60+凭身份证公众号预约免票，仍须按时段入园。西山台阶与坡道较多，穿防滑鞋、多歇；东山与香山寺体力不够可缩短。带水，景区内久站可备折叠凳。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'shaolin-optional',
        name: '少林寺（二选一）',
        days: 1,
        pace: 'fast',
        lat: 34.507,
        lng: 112.935,
        summary: '禅宗祖庭，常住院与塔林；山门内仍有步行与缓坡。',
        tips:
          '洛阳包车往返最省心。表演场次以当日公告为准；塔林石径不平，慢走即可。与开封二选一，勿同日连赶。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'kaifeng-optional',
        name: '开封宋韵（二选一）',
        days: 1.5,
        pace: 'slow',
        lat: 34.797,
        lng: 114.307,
        summary: '城墙与清明上河园等，平地为主，适合慢走吃灌汤包。',
        tips:
          '高铁洛阳—开封或郑开城际。清明上河园人多宜早；城墙选一段登顶即可。住鼓楼附近，晚上可看灯光，别排太满。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
    ],
  },

  // ── 华中 · 张家界 ──────────────────────────────────────────
  {
    id: 'huazhong-zhangjiajie',
    title: '张家界 · 索道看峰林',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'long',
    fromHome: false,
    daysLabel: '5–7天',
    transport: '飞张家界荷花机场或高铁至张家界西；景区靠环保车+三索一梯',
    budgetLabel: '本趟约4500–7500元（含机票分摊+三索一梯）',
    coverImage:
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200',
    summary:
      '武陵源峰林靠天子山/黄石寨/杨家界索道与百龙天梯上下，腿脚好也不建议全程徒步。大门票多日有效，每天一条线、早出早歇。芙蓉镇或凤凰古镇可选挂接，结束后飞/高铁返京。',
    whyFast: '核心两日索道串袁家界—天子山；金鞭溪精华段浅走；天门山另票另日，体力紧可删。',
    researchKeywords: [
      '张家界 三索一梯 攻略',
      '张家界 分时预约 东门',
      '芙蓉镇 凤凰 挂接',
    ],
    sources: [
      {
        title: '张家界·武陵源旅游官方：大门票说明',
        url: 'http://hnzjj.com/index.php/Ticket/show/2.html',
        kind: 'official',
        note: '大门票含环保车参考；索道电梯另计；「张家界一机游」购票',
      },
      {
        title: '红网：张家界国家森林公园一票制',
        url: 'https://hn.rednet.cn/content/646856/56/14535924.html',
        kind: 'official',
        note: '三索一梯联票组合与官方渠道说明',
      },
    ],
    stops: [
      {
        id: 'wulingyuan-cable',
        name: '武陵源核心景区',
        days: 2.5,
        pace: 'fast',
        lat: 29.325,
        lng: 110.479,
        summary:
          '环保车串联，索道或百龙天梯上下山。袁家界、天子山观景台为主，少走路。',
        tips:
          '购大门票+三索一梯联票（四程或多程），小程序预约入园时段与票站。优先索道，避免下午16:30后天子山索道下山长队。每天一条线，中午找商服点休息；雨雾天观景一般，可改室内或改期。穿防滑鞋，栈道有落差处扶栏慢行。',
        image:
          'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800',
      },
      {
        id: 'jinbian-creek',
        name: '金鞭溪精华段',
        days: 0.5,
        pace: 'slow',
        lat: 29.317,
        lng: 110.445,
        summary: '峡谷平路听溪，适合索道日之外的轻松半日。',
        tips: '只走精华段即可，不必全程；夏季防暑，春秋带薄外套。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
      {
        id: 'furong-optional',
        name: '芙蓉镇（可选）',
        days: 1,
        pace: 'slow',
        lat: 28.744,
        lng: 109.633,
        summary: '瀑布与石板古镇，可住一晚看夜景，台阶比武陵源少但仍须慢走。',
        tips: '张家界市区或武陵源包车约2小时。瀑布旁潮湿防滑；古镇晚上好看，白天人少时拍照。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'fenghuang-optional',
        name: '凤凰古城（可选）',
        days: 1.5,
        pace: 'slow',
        lat: 27.948,
        lng: 109.599,
        summary: '沱江边城夜景，平地河街为主；与芙蓉镇二选一即可，勿两天连赶。',
        tips:
          '高铁或包车衔接。江边散步足够，爬坡去沈从文故居量力。住江景电梯房，晚上看灯后早歇，次日返程。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
    ],
  },
];
