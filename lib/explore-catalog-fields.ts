import type { Route } from "@/content/types";

/** Lean list-field patches for Explore — do not import audit detailPatches. */
export const exploreRouteFieldPatchList: Record<string, Partial<Route>>[] = [
  {
  'chengde-2d': {
    summary:
      '比北京凉几度，皇家园林湖区平坦好走。第一天山庄慢游，第二天普宁寺；京津籍60岁以上门票常免。住一晚从容逛完，结束后返京。',
  },

  'huabei-neimeng-summer': {
    fromHome: false,
    summary:
      '北京直飞海拉尔，以城区为慢住基地两三周：每天最多一处——草原骑马、额尔古纳河、满洲里口岸任选。紫外线强、温差大，备防晒与薄外套。结束后飞回北京休整。',
  },

  'compose-shandong-qingdao-yantai': {
    summary:
      '长线组合：青岛滨海短线 → 崂山即墨短线 → 烟台芝罘短线；威海可选。景点正文见各短线。结束后高铁或飞回北京休整。',
  },

  'dongbei-changbai-summer': {
    transport: '飞长春或延吉，包车/租车至二道白河；结束后飞回北京',
    budgetLabel: '对照月预算约2万（含机票分摊与景区交通）',
    summary:
      '飞入二道白河慢住约一周：夏季天池可见概率高，北坡环保大巴串联景点，登顶可乘倒站车。预约北坡组合票，天池关闭改看瀑布与森林。结束后飞回北京。',
  },

  'dongbei-harbin-snow-3d': {
    summary:
      '冬季北国看雪经典短途：飞哈尔滨，冰雪大世界夜景、中央大街漫步。65岁以上可预约免费观光票；园内商服暖房可随时取暖。结束后飞回北京。',
  },

  'dongbei-dalian-summer': {
    tripType: 'long',
    budgetLabel: '对照月预算约2万（含机票分摊）',
    summary:
      '北京直飞大连，滨海慢住约一周：星海广场、滨海路、老虎滩分段走，中间留休息日。旅顺口可选半日。结束后飞回北京休整。',
  },
},
  {
  'huadong-hangzhou-suzhou': {
    summary:
      '高铁抵杭再城际苏州。西湖选段步行，电瓶车与游船按需衔接；拙政园上午入园，平江路喝茶。同里可选。春秋五天，结束后高铁返京。',
    transport: '高铁至杭州，城际至苏州；结束后高铁返京',
    sources: [
      {
        title: '杭州西湖景区环湖交通与游船（亚残运会官网相关报道）',
        url: 'https://www.hangzhou2022.cn/paragames/xw/ycydt/202310/t20231025_74713.shtml',
        kind: 'official',
        note: '环湖电瓶车、游船可衔接三潭印月、花港等，按需减步行',
      },
      {
        title: '环湖一日游线路培育（中新网）',
        url: 'http://www.chinanews.com.cn/sh/2025/05-05/10410679.shtml',
        kind: 'other',
        note: '环湖设施与游线参考，现场以景区公告为准',
      },
    ],
    stops: [
      {
        id: 'hangzhou-west-lake',
        name: '杭州西湖',
        days: 2,
        pace: 'slow',
        lat: 30.243,
        lng: 120.15,
        summary:
          '可走北山街—断桥—白堤等平整路段；也可坐环湖电瓶车或游船串联三潭印月、花港观鱼等。',
        tips:
          '雷峰塔有电梯。春季避开清明高峰；秋季桂花飘香。苏堤走一段再坐船/电瓶车即可，不必硬走全程。',
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      },
      {
        id: 'suzhou-gardens',
        name: '苏州拙政园 + 平江路',
        days: 2,
        pace: 'slow',
        lat: 31.324,
        lng: 120.629,
        summary: '园林移步换景，宜上午入园。平江路沿河喝茶，石板路较平。',
        tips:
          '拙政园台阶不多但需久站，可带折叠凳。上午人少光线好；下午平江路找茶馆歇脚。旺季查预约。',
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      },
      {
        id: 'tongli-optional',
        name: '同里古镇（可选）',
        days: 1,
        pace: 'slow',
        lat: 31.16,
        lng: 120.723,
        summary: '比周庄更静，可住一晚听评弹。',
        tips:
          '古镇石板路，穿防滑软底鞋；不必逛全，选一条水巷慢慢走即可。体力紧可删。',
        image:
          'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?w=800',
      },
    ],
  },

  'huadong-shanghai-short': {
    summary:
      '高铁直达。外滩滨江平地漫步、上博吹空调看一两馆，每天一个主点。朱家角可选。结束后高铁返京。',
    transport:
      '北京南/北京站高铁至上海虹桥或上海站约4.5–6小时；市内地铁+步行；结束后高铁返京',
  },

  'huadong-huangshan-hui': {
    themes: ['famous-scenic'],
    tripType: 'short',
    daysLabel: '5–7天',
    summary:
      '高铁黄山北。云谷/玉屏索道看松石云海，山顶只走精华段；屯溪歇脚吃徽菜，宏村慢看粉墙黛瓦。春秋云海机会多，结束后高铁或飞回北京。',
    transport:
      '高铁至黄山北站，景区大巴/包车；山上索道+步行；结束后高铁或飞回北京',
    budgetLabel: '本趟约5000–8000元（门票索道+山宿或山下宿）',
  },

  'huadong-wuyuan-spring': {
    // Full stitch (婺源+景德镇) in routes-famous-stitch-20260802 — do not clobber.
    themes: ['famous-scenic'],
  },

  'huazhong-wudang-3d': {
    summary:
      '道教圣山。山下太子坡、紫霄宫大巴串联；太和索道往返金顶（约85元）。金顶须分时预约，三天两晚，结束后返京。',
    transport: '飞十堰或高铁至武当山西站，景区大巴；结束后返京',
  },

  'huazhong-luoyang-kaifeng': {
    summary:
      '龙门石窟单线游览，60+常免票须预约。第二天少林或开封二选一，勿同日连赶。春秋适宜，结束后高铁返京。',
    transport:
      '高铁至洛阳龙门/洛阳站；少林包车约1–1.5小时；开封另高铁或包车；结束后高铁返京',
  },

  'huazhong-zhangjiajie': {
    themes: ['famous-scenic'],
    tripType: 'short',
    daysLabel: '5–7天',
    summary:
      '武陵源靠三索一梯+环保车坐看峰林，每天一条线早出早歇。金鞭溪浅走；土家街区浅逛、湘菜微辣。芙蓉可选；凤凰走独立线。结束后飞/高铁返京。',
    transport:
      '飞张家界荷花机场或高铁至张家界西；景区内环保车+三索一梯；结束后飞或高铁返京',
    budgetLabel: '本趟约4500–7500元（含机票分摊+三索一梯）',
  },

  'huazhong-xian-slow': {
    summary:
      '城墙内或大雁塔慢住两到三周，每天最多一馆一寺。兵马俑一日快看；华山仅缆车短停、可删。结束后高铁或飞回北京。',
    stops: [
      {
        id: 'xian-base',
        name: '西安市区（慢住基地）',
        days: 12,
        pace: 'slow',
        lat: 34.341,
        lng: 108.94,
        summary:
          '近地铁电梯酒店，城墙骑行/步行选一段，陕西历史博物馆预约参观，下午回酒店歇。',
        tips:
          '高铁或飞机均可；行李多优先直飞。回民街浅逛尝小吃，别空腹久站。每周留空白日喝茶、逛永兴坊或公园。春秋花粉与沙尘偶发，备口罩。回京订高铁夜宿或白天飞均可。',
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
          '华山陡峭，腿脚好也建议只坐缆车、短走观景台，勿夜爬、勿赶长空栈道。索道常因大风停运，出发前查官方公告；停运即改市区休息日。备薄外套、防滑鞋；有明显不适建议放弃。结束后当日返西安，次日休整后再回京。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
    ],
  },
},
  {
  'huanan-xiamen-winter': {
    // Title/themes/stops overwritten by routes-famous-stitch-20260802
    seasons: ['winter', 'spring'],
  },
  'huanan-guilin-yangshuo': {
    themes: ['famous-scenic'],
    summary:
      '飞两江。桂林米粉歇脚后漓江顺流至阳朔慢住：十里画廊缓骑、竹筏短段，壮瑶田园点到为止。春秋最宜，对照月预算约两万，结束后飞回北京。',
  },
  'xinan-sichuan-leshan-emei': {
    themes: ['famous-scenic'],
  },
  'huanan-sanya-winter': {
    seasons: ['winter', 'spring'],
    transport: '北京飞三亚凤凰机场，市区/海棠湾打车；结束飞回北京',
    summary:
      '冬季均温约22℃，优级避寒城市。椰梦长廊、亚龙湾慢走，抵琼后留1–3天适应期再加大活动。飞进飞出北京，对照月预算约2万。',
  },
  'huanan-zhuhai-3d': {
    summary:
      '北京飞珠海（或广州转城际）：情侣路、渔女像一带滨海慢走，节奏轻松，适合华南长线前后穿插的短休。不必赶横琴全线，看海散步即可；结束飞回北京。',
  },
  'compose-yunnan-dali-lijiang': {
    summary:
      '长线组合：大理洱海短线 → 丽江浅尝短线；昆明可选中转。月租见 longstay-dali。结束后飞回北京。',
    transport:
      '飞昆明转高铁或直飞大理；大理→丽江高铁约1.5小时；结束丽江或昆明飞回北京',
  },
  'xinan-chengdu-slow': {
    transport: '北京飞成都双流/天府机场，市区地铁+打车；结束飞回北京',
    summary:
      '成都平原地势平、节奏慢，大熊猫基地、人民公园喝茶、博物馆空调足。每天1–2个景点，下午回酒店歇。飞进飞出北京，对照月预算约2万。',
  },
  'xinan-dujiangyan-2d': {
    summary:
      '都江堰水利工程平地参观，青城前山可坐索道减负。适合成都慢住期间的短途快看，不必硬爬后山。结束回成都基地或飞回北京。',
  },
},
  {
  'compose-hexi-dunhuang-zhangye': {
    summary:
      '河西组合长线：嵌入敦煌莫高短线与张掖丹霞短线，嘉峪关只过夜衔接。单日车程 ≤4–5 小时；景点正文见各短线。结束后飞回北京休整。',
    transport:
      '飞敦煌进、张掖还车或出；敦煌短线 → 嘉峪关缓冲 → 张掖短线；每日车程 3–4 小时内，勿一日赶完敦煌→张掖',
  },

  'compose-qinggan-xining-hexi': {
    summary:
      '青甘组合长线：嵌入西宁青海湖、张掖丹霞、敦煌莫高三条短线；兰州只缓冲过夜。勿茶卡一夜贯通敦煌。结束后飞回北京休整。',
    transport:
      '飞西宁进；青海湖短线 → 兰州缓冲 → 张掖短线 → 敦煌短线；段末敦煌或兰州飞京',
  },

  'compose-silkroad-xian-turpan': {
    summary:
      '丝路组合长线：嵌入西安兵马俑、敦煌莫高、吐鲁番葡萄沟三条短线；兰州与乌市只衔接。不硬开独库。结束后乌市飞回北京。',
    transport:
      '西安进；西安短线 → 兰州缓冲 → 敦煌短线 → 吐鲁番短线；段末乌市飞京',
  },

  'compose-chuandian-chengdu-dali-lijiang': {
    summary:
      '川滇组合长线：嵌入成都平原适应、大理洱海、丽江浅尝三条短线；飞/高铁衔接。不强制环海骑行与雨崩。结束后飞回北京。',
    transport:
      '飞成都进；成都适应 → 大理短线 → 丽江短线；段末丽江或昆明飞京',
  },

  'compose-jinghu-coast': {
    summary:
      '京沪沿海组合：嵌入天津海河、青岛滨海、上海外滩博物馆三条短线；苏州园林可选停。一日一城，段末可回京。',
    transport:
      '高铁串珠：天津（可删）→ 青岛 →（苏州可选）→ 上海 → 京沪回京；勿一日多城',
  },

  'leg-dunhuang-mogao': {
    summary:
      '敦煌独立短线约5–7天：莫高官方预约分次入场，鸣沙浅尝；市区电梯连住留空白。可单飞往返或接河西长线。',
    transport: '飞敦煌机场；市区打车/包车。结束后可飞返或东行嘉峪关接走廊。',
  },

  'leg-zhangye-danxia': {
    summary:
      '张掖独立短线约2–3天：七彩丹霞区间车串观景台，下午等日落。可单订或作河西走廊末段还车。',
    transport: '飞张掖或兰州转；包车往返丹霞。河西租车可在此还车后飞返。',
  },

  'compose-chuanxi-chengdu-leshan-jiuzhai': {
    summary:
      '川西浅廊组合：嵌入成都平原适应、乐山峨眉、九寨沟三条短线；成都只缓冲回撤。不强制四姑娘/新都桥/稻城；九寨心肺不适可删。',
    transport:
      '飞成都进；成都适应 → 乐山峨眉 → 成都缓冲 → 九寨短线；结束经成都飞京。绝不硬塞四姑娘/稻城',
  },

  'leg-chengdu-adapt': {
    summary:
      '成都平原适应短线约2–3天：电梯酒店、公园喝茶、熊猫可选；作回撤锚。可单订或接川西浅廊。',
    transport: '飞成都双流/天府；市区地铁+打车。可接乐山或九寨组合。',
  },

  'compose-beijiang-sayram-kanas': {
    summary:
      '长线组合：赛里木短线 → 奎屯/克拉玛依缓冲 → 喀纳斯短线；乌市进出。与伊犁短线拆开。结束后飞回北京。',
    transport:
      '飞乌鲁木齐取SUV：赛里木短线 → 奎屯缓冲 → 喀纳斯短线；单日≤5小时。伊犁请改走河谷短线。结束后飞回北京。',
  },

  'xibei-ningxia-3d': {
    summary:
      '塞上短途：西夏陵博物馆+遗址观光车，沙湖或镇北堡二选一。干燥日晒强须补水防晒；春秋最宜，平地为主，返程日飞或高铁回京。',
    transport:
      '北京飞银川河东机场，或高铁/动车至银川站；市内包车串联景点；返程日飞或高铁回京',
  },

  'qingzang-lhasa-slow': {
    summary:
      '飞拉萨（约3650米）后先适应至少3日（前3天勿洗澡），再慢游布达拉宫、大昭寺。纳木错（约4718米）仅一日湖边短停，绝不过夜，心肺不佳整段删。非极端高山（不排阿里/珠峰）。约7–10天短线；可嵌入铁路/林芝组合。结束后飞回北京休整≥1周。',
    transport:
      '飞拉萨，市区包车或跟团；纳木错建议正规一日游（含氧气），勿自驾；可单订或接组合；结束后飞回北京休整',
  },

  'compose-qingzang-railway-lhasa': {
    summary:
      '铁路进藏组合：嵌入西宁适应、青藏铁路列车、拉萨慢适应三条短线。车厢供氧≠无高反；拉萨约3650米只城区慢走。不接阿里/珠峰。',
    transport:
      '飞西宁→西宁短线→软卧列车→拉萨短线→飞京（常经成都）；非自驾强制',
  },

  'compose-qingzang-lhasa-nyingchi': {
    summary:
      '拉萨→林芝组合：嵌入拉萨慢适应与林芝河谷短线；拉林/G318 只衔接。不走川藏全线，不碰珠峰阿里。',
    transport:
      '飞拉萨→拉萨短线→拉林高铁或短段包车→林芝短线→飞返经成都回京',
  },

  'compose-yunnan-hekou-sapa': {
    summary:
      '中越慢廊组合：嵌入河口边贸与沙巴跨境短线。沙巴在越南——须护照与合法签证；只走正式口岸。',
    transport:
      '飞昆明→河口短线→正式口岸→沙巴短线→原路返回→昆明飞京',
  },

  'qingzang-qinghai-lake': {
    summary:
      '西宁（约 2260 米）先适应 2–3 日，再包车青海湖（湖面约 3200 米）。环湖拆段看，不赶全日骑行。强日照与高反须重视，结束后飞回北京。',
    transport:
      '飞西宁曹家堡，市区适应后再包车环湖（优先于自驾）；二郎剑等景区限流须预约；结束后飞回北京',
  },

  'qingzang-xining-3d': {
    summary:
      '西宁海拔约 2200 米，三到四天城区慢住热身：首日静养，再浅逛东关与省博；塔尔寺可选。本线不上青海湖。可作长线前适应，或短住后飞回北京。',
    transport:
      '北京飞西宁曹家堡；市内公交/打车。可作青海湖长线前的适应段，或单独短住后飞回北京。',
    whyFast: '塔尔寺半日可选；不适高原则只留城区适应，不必硬去。',
    stops: [
      {
        id: 'xining-city',
        name: '西宁城区（适应）',
        days: 2,
        pace: 'slow',
        lat: 36.6171,
        lng: 101.7782,
        summary: '首日静养为主：多饮水、少剧烈运动。选近青海省人民医院的电梯酒店。',
        tips: '海拔约 2200–2260 米。前 1–2 天勿酗酒、勿猛走；备血氧仪与常用药。洋葱式穿衣，早晚凉。感冒未愈勿规划更高海拔行程。',
        image:
          'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      },
      {
        id: 'xining-dongguan-museum',
        name: '东关 / 省博物馆',
        days: 1,
        pace: 'slow',
        lat: 36.6405,
        lng: 101.7512,
        summary: '东关清真大寺周边浅逛，或省博吹空调细看一两馆；下午回酒店歇。',
        tips: '平地为主，人多即撤。日照强备帽与墨镜。一天只排一处户外+一处室内即可。',
        image:
          'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800',
      },
      {
        id: 'taer-optional',
        name: '塔尔寺（可选）',
        days: 1,
        pace: 'fast',
        lat: 36.488,
        lng: 101.569,
        summary: '湟中塔尔寺半日；台阶多，适应不佳远观或跳过，不影响主线。',
        tips: '包车往返约 1 小时级。量力而行，不必跟完全部殿宇。高反迹象立即返回西宁城区休息。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
    ],
  },
},
];
