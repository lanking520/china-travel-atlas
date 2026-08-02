import type { Route } from '../types';

/**
 * 地级市深挖：河北承德 / 秦皇岛 / 张家口 / 保定 / 唐山 / 石家庄正定（北京出发友好）+ 山东青岛县域织补。
 * 方法见 research/notes/prefecture-depth/README.md
 */
export const patchRoutes: Route[] = [
  // ── 承德市深挖（替换原两日骨架）────────────────────────────
  {
    id: 'chengde-2d',
    title: '承德 · 山庄外庙与近郊慢走',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约4–6天',
    transport:
      '京承高速自驾约2.5–3小时，或高铁至承德南/承德站再打车；磬锤峰、双滦可打车/公交；结束后原路回京',
    budgetLabel: '本趟约2200–4000元（门票+景交+电梯酒店；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    summary:
      '把「山庄两日」织成承德市区+近郊慢线：避暑山庄分两日走完湖区与环山车，普宁寺与普陀宗乘之庙（小布达拉）分天量力，加磬锤峰索道观景与双滦滦河平路。京津籍60+门票常免；不硬赶围场塞罕坝一日达。',
    introduction:
      '承德市双桥区集中了山庄与外八庙，周边县（承德县磬锤峰、双滦区、更远的丰宁/围场）适合「选一处日归」而不是特种兵环线。\n\n节奏：住双桥电梯酒店为锚，每天最多一处主景点+午休。山区防火季环山车可能停运；外庙台阶多的点（如普陀宗乘）腿脚不便可外观。',
    seasonGuide:
      '夏末秋初最舒适。冬春山区常封闭，仅宫殿湖区可走，建议缩短为2–3日。暑热正午少久站。',
    notices: [
      '公众号「避暑山庄及周围寺庙」预约与票务以当日为准。',
      '京津户籍60+免门票常见，观光车/索道另计；须带身份证。',
      '外八庙勿一天排两座大庙。',
      '围场塞罕坝车程长，本线默认不排；想去另作专题并分段住。',
      '结束后当日或次日回京，勿夜间山路疲劳驾驶。',
    ],
    whyFast:
      '普陀宗乘、磬锤峰可改外观/半日；主体留给山庄湖区与休息。',
    researchKeywords: [
      '承德避暑山庄 环山车 父母',
      '承德 普宁寺 普陀宗乘',
      '磬锤峰 索道',
      '承德 四日 自驾',
    ],
    sources: [
      {
        title: '避暑山庄官网',
        url: 'https://www.bishushanzhuang.com.cn/index.php/scenic/area_index.html',
        kind: 'official',
        note: '开放与游览线路以官网为准',
      },
      {
        title: 'Wikivoyage：承德',
        url: 'https://zh.wikivoyage.org/wiki/%E6%89%BF%E5%BE%B7',
        kind: 'other',
        note: '区划、外八庙与进出概览，已改写',
      },
      {
        title: '承德市文物局门票公示',
        url: 'https://wwj.chengde.gov.cn/art/2025/7/21/art_960_1076356.html',
        kind: 'official',
        note: '票价与优惠以公示为准',
      },
    ],
    stops: [
      {
        id: 'chengde-base',
        name: '承德双桥（慢住基地）',
        days: 2,
        pace: 'slow',
        lat: 40.974,
        lng: 117.963,
        summary:
          '近山庄或武烈河电梯酒店；抵达日只散步歇脚，熟悉超市与医院。',
        tips: '高铁承德南出站打车约20分钟。备薄外套，山区风凉。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'bishu-shanzhuang',
        name: '避暑山庄（分两日）',
        days: 2,
        pace: 'slow',
        lat: 40.991,
        lng: 117.938,
        summary:
          '一日宫殿+湖区平路；另一日环山车远眺外庙金顶。勿一天硬爬山区。',
        tips:
          '早入园。环山车约5–10月运营；淡季山区常关闭。景交按需单买，慎高价全包。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'puning-temple',
        name: '普宁寺',
        days: 1,
        pace: 'slow',
        lat: 41.016,
        lng: 117.958,
        summary:
          '外八庙代表，千手观音大佛；主殿台阶可控，适合单独半天。',
        tips: '与山庄分日。小布达拉类外庙另日，勿连轴。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'putuo-zongcheng',
        name: '普陀宗乘之庙（量力）',
        days: 1,
        pace: 'fast',
        lat: 41.012,
        lng: 117.928,
        summary:
          '「小布达拉」外观气势足；内部台阶多，腿脚不便可只外观拍照。',
        tips: '恐高或膝关节不好整段可删，改安远庙平缓外观。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'qingchui-peak',
        name: '磬锤峰 / 棒槌山（承德县）',
        days: 1,
        pace: 'fast',
        lat: 40.96,
        lng: 118.02,
        summary:
          '市区东侧县域景区：索道/观光车观棒槌山奇石，少徒步。',
        tips: '与山庄分日；风大备外套。可改双滦滦河平路散步。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'shuangluan-optional',
        name: '双滦滦河浅走（可选）',
        days: 1,
        pace: 'slow',
        lat: 40.939,
        lng: 117.739,
        summary: '换一片区平路吹风，不进山；适合空白日。',
        tips: '整段可删。丰宁坝上另线，勿当日来回。',
        image:
          'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800',
      },
    ],
  },

  // ── 秦皇岛市深挖（北戴河+山海关+昌黎县域）────────────────
  {
    id: 'huabei-hebei-beidaihe',
    title: '秦皇岛 · 北戴河山海关昌黎慢线',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约5–7天',
    transport:
      '北京站/朝阳高铁至北戴河、秦皇岛或山海关约2–2.5小时，或京哈自驾；区内打车/公交串联；结束后高铁/自驾回京',
    budgetLabel: '本趟约2000–4500元（交通+海滨住宿+门票轮渡；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    summary:
      '秦皇岛四区三县织成爸妈慢线：北戴河海滨慢住，山海关长城与老龙头分半日，抚宁南戴河换沙滩，昌黎黄金海岸县域日归看沙丘海岸。避正午暴晒与台风；不安排刺激海上游乐。',
    introduction:
      '秦皇岛市下辖海港、北戴河、山海关、抚宁四区与昌黎、卢龙、青龙等县。对本线：北戴河=休整锚点；山海关区=长城主题；抚宁/南戴河=备选海滩；昌黎县黄金海岸=沙丘与自由海滩（少排游乐园项目）。\n\n青龙满族自治县山区默认不排（弯道多）。卢龙可作过路，不必单列。',
    seasonGuide:
      '夏秋适宜。台风与暴雨天果断改室内或提前回京。冬季海风干冷，非刚需缩短。',
    notices: [
      '高铁可按日程灵活停北戴河或山海关站。',
      '海鲜适量；肠胃敏感改清淡。',
      '老龙头海风大，台阶量力。',
      '昌黎滑沙/游乐项目可整段跳过，只留海岸散步。',
    ],
    whyFast:
      '联峰山、南戴河、昌黎可三选一或二；主体海边散步与休息。',
    researchKeywords: [
      '北戴河 山海关 五日',
      '老龙头 父母',
      '昌黎 黄金海岸 沙丘',
      '秦皇岛 高铁 慢游',
    ],
    sources: [
      {
        title: 'Wikivoyage：秦皇岛',
        url: 'https://zh.wikivoyage.org/wiki/%E7%A7%A6%E7%9A%87%E5%B2%9B',
        kind: 'other',
        note: '区县与昌黎海岸概览，已改写',
      },
      {
        title: 'Wikivoyage：北戴河',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8C%97%E6%88%B4%E6%B2%B3',
        kind: 'other',
        note: '海滨分区参考',
      },
      {
        title: '秦皇岛市人民政府',
        url: 'https://www.qinhuangdao.gov.cn/',
        kind: 'official',
        note: '文旅与台风预警以官方为准',
      },
    ],
    stops: [
      {
        id: 'beidaihe-base',
        name: '北戴河（海滨慢住）',
        days: 3,
        pace: 'slow',
        lat: 39.825,
        lng: 119.484,
        summary:
          '近海电梯酒店；早晚滨海步道，中午回酒店歇；留空白半日。',
        tips: '北戴河站出站打车省心。防晒补水；听预警。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
      {
        id: 'lianfengshan-optional',
        name: '联峰山或鸽子窝（二选一）',
        days: 1,
        pace: 'fast',
        lat: 39.838,
        lng: 119.52,
        summary: '联峰山量力短登或山下；鸽子窝平地观海。只留一处。',
        tips: '台阶多改平地观海。人多即撤。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'shanhaiguan-laolongtou',
        name: '山海关 · 老龙头',
        days: 1,
        pace: 'slow',
        lat: 39.978,
        lng: 119.796,
        summary:
          '天下第一关外观+老龙头入海长城；关城平缓段优先，箭楼台阶量力。',
        tips: '与北戴河分日。可高铁山海关站下车更近。风大备外套。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'nandahe-funing',
        name: '南戴河 / 抚宁浅滩（可选）',
        days: 1,
        pace: 'slow',
        lat: 39.816,
        lng: 119.42,
        summary: '换一片沙滩散步，不安排游乐设施为主线。',
        tips: '可整段删，把天数还给北戴河空白日。',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      },
      {
        id: 'changli-goldcoast',
        name: '昌黎黄金海岸（县域日归）',
        days: 1,
        pace: 'slow',
        lat: 39.55,
        lng: 119.25,
        summary:
          '昌黎县海岸：自由海滩或沙丘外观；滑沙/游乐园默认不排。',
        tips: '自驾或包车往返；午后紫外线强。卢龙/青龙山区不延伸。',
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      },
    ],
  },

  // ── 青岛市县域织补（崂山·即墨）────────────────────────────
  {
    id: 'huabei-shandong-coast',
    title: '青岛慢住 · 崂山即墨与烟威',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    fromHome: true,
    daysLabel: '约10天–2周',
    transport:
      '北京南高铁至青岛约3–3.5小时；崂山仰口/太清景区巴士或包车；即墨古城城际/打车；烟台威海高铁；结束后高铁或飞回北京',
    budgetLabel: '对照月预算约2万（高铁+住宿+海鲜+崂山门票；双人）',
    coverImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    summary:
      '青岛市南慢住为锚，补上崂山区海岸与索道减负段、即墨区古城平缓街巷；体力好可北延威海。想在烟台多住几天，改走独立线「烟台慢住」。县域点分散到不同周，勿一日崂山+即墨+栈桥特种兵。',
    introduction:
      '青岛地级市范畴含市南/市北、崂山、即墨、胶州、黄岛等。爸妈优先：市南海滨栈道、崂山仰口或太清（索道/观光车）、即墨古城；胶州少海、黄岛金沙滩可选但本线不强制。\n\n威海为半岛城际延伸；烟台独立慢住见 `huabei-shandong-yantai`。',
    seasonGuide:
      '夏秋宜。暑期崂山与海滨拥堵，错峰早出。秋日海风凉备外套。',
    notices: [
      '崂山分景区，选一处即可，勿赶全山。',
      '海鲜控盐控生冷。',
      '即墨古城石板防滑鞋。',
      '烟威段可整段删，留给青岛空白日。',
    ],
    whyFast:
      '烟台山、刘公岛、即墨可各半日；崂山只留一个索道点。',
    researchKeywords: [
      '青岛 崂山 仰口 父母',
      '即墨古城 慢逛',
      '青岛 八大关 慢住',
      '烟台 威海 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：青岛',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E5%B2%9B',
        kind: 'other',
        note: '海滨与分区概览，已改写',
      },
      {
        title: '青岛市文化和旅游局',
        url: 'https://whlyj.qingdao.gov.cn/',
        kind: 'official',
        note: '景区开放以官网为准',
      },
      {
        title: 'Wikivoyage：烟台',
        url: 'https://zh.wikivoyage.org/wiki/%E7%83%9F%E5%8F%B0',
        kind: 'other',
        note: '半岛延伸参考',
      },
    ],
    stops: [
      {
        id: 'qingdao-base',
        name: '青岛市区（慢住基地）',
        days: 6,
        pace: 'slow',
        lat: 36.067,
        lng: 120.383,
        summary:
          '市南近海或李沧电梯酒店；每天一段栈道或老街，下午午睡。',
        tips: '北京南→青岛约3小时。每周留空白日。回京高铁或直飞。',
        image:
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      },
      {
        id: 'badaguan',
        name: '八大关 + 汇泉湾栈道',
        days: 2,
        pace: 'slow',
        lat: 36.055,
        lng: 120.348,
        summary: '树荫坡缓，早晚慢走；栈道平坦，累了坐长椅。',
        tips: '避正午紫外线。不必强爬信号山。',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      },
      {
        id: 'laoshan-yangkou',
        name: '崂山仰口或太清（二选一）',
        days: 1,
        pace: 'slow',
        lat: 36.23,
        lng: 120.67,
        summary:
          '崂山区海岸线：仰口或太清选一；索道/观光车减负，少登陡段。',
        tips: '提前查景区小程序预约；雾天观景差可改期。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'jimo-oldtown',
        name: '即墨古城（县域浅逛）',
        days: 1,
        pace: 'slow',
        lat: 36.389,
        lng: 120.447,
        summary: '即墨区古城街巷平缓，半日足够；当晚回青岛基地。',
        tips: '与崂山分日。商业街可浅尝即走。',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      },
      {
        id: 'yantai-optional',
        name: '烟台（可选2日）',
        days: 2,
        pace: 'slow',
        lat: 37.539,
        lng: 121.391,
        summary: '烟台山与滨海路；高铁或包车自青岛往返。',
        tips: '台阶可走一段即返。',
        image:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      },
      {
        id: 'weihai-optional',
        name: '威海 / 刘公岛（可选1–2日）',
        days: 2,
        pace: 'fast',
        lat: 37.513,
        lng: 122.121,
        summary: '滨海平整；刘公岛轮渡+观光车。长居向见「长居推荐·威海」。',
        tips: '风浪大可改市区海边。结束后经烟台或青岛回京。',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      },
    ],
  },

  // ── 张家口市深挖（京张高铁友好）──────────────────────────
  {
    id: 'huabei-hebei-zhangjiakou',
    title: '张家口 · 大境门与坝上浅走',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约4–6天',
    transport:
      '京张高铁至张家口站，市区打车；崇礼/张北包车日归；蔚县车程长可改高铁+包车。结束后高铁回京',
    budgetLabel: '本趟约2000–4000元（高铁+电梯酒店+包车日归；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dajingmen_%2820171008104017%29.jpg/1280px-Dajingmen_%2820171008104017%29.jpg',
    summary:
      '把张家口织成「市区锚点+县域日归」：大境门关城平地外观，崇礼秋色车览（非滑雪），张北坝上选段包车；蔚县古堡可选但车程远可整段删。不夜赶山路、不排滑雪主线。',
    introduction:
      '张家口下辖桥东/桥西城区与崇礼、张北、蔚县等。爸妈优先城区电梯酒店为锚，每天最多一处日归。\n\n坝上与崇礼分日安排；蔚县石板古镇腿脚紧可只外观或删除。冬春风大且滑雪季拥堵，本线默认夏秋。',
    seasonGuide:
      '夏末秋初最舒适。冬春仅建议市区短住；滑雪季人车拥堵，约60默认不排雪道。',
    notices: [
      '大境门台阶与关城以现场开放为准，量力外观即可。',
      '坝上紫外线强、温差大，备防晒与薄外套。',
      '蔚县当日往返疲劳，可改为过夜或删除。',
      '山区防火与封路公告出行前核实。',
    ],
    whyFast: '崇礼、张北、蔚县均可半日或整段删除；主体留给市区休整。',
    researchKeywords: [
      '张家口 大境门 父母',
      '京张高铁 张家口',
      '张北 坝上 包车',
      '崇礼 秋天 慢游',
    ],
    sources: [
      {
        title: 'Wikivoyage：张家口',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BC%A0%E5%AE%B6%E5%8F%A3',
        kind: 'other',
        note: '区划与大境门概览，已改写',
      },
      {
        title: '张家口市人民政府',
        url: 'https://www.zjk.gov.cn/',
        kind: 'official',
        note: '文旅与交通公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'zjk-qiaodong-base',
        name: '桥东/桥西慢住',
        days: 3,
        pace: 'slow',
        lat: 40.824,
        lng: 114.888,
        summary: '近高铁站电梯酒店；堡子里或市区公园浅逛，留空白半日。',
        tips: '京张高铁张家口站出站打车。风大备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dajingmen_%2820171008104017%29.jpg/1280px-Dajingmen_%2820171008104017%29.jpg',
      },
      {
        id: 'zjk-dajingmen',
        name: '大境门',
        days: 1,
        pace: 'slow',
        lat: 40.851,
        lng: 114.883,
        summary: '长城关城外观与周边平地；台阶量力，不必强登。',
        tips: '与市区散步同日或次日均可；人多即撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dajingmen_%2820171008104017%29.jpg/1280px-Dajingmen_%2820171008104017%29.jpg',
      },
      {
        id: 'zjk-chongli-optional',
        name: '崇礼秋色车览（可选）',
        days: 1,
        pace: 'fast',
        lat: 40.975,
        lng: 115.282,
        summary: '包车看山谷秋色与小镇外观；不安排滑雪与高强度步道。',
        tips: '冬雪季改删。车程预留午休回城。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Golden_forests_at_Chongli_%E5%B4%87%E7%A4%BC%E9%87%91%E7%A7%8B_%288181833932%29.jpg/1280px-Golden_forests_at_Chongli_%E5%B4%87%E7%A4%BC%E9%87%91%E7%A7%8B_%288181833932%29.jpg',
      },
      {
        id: 'zjk-zhangbei-optional',
        name: '张北坝上选段（可选）',
        days: 1,
        pace: 'slow',
        lat: 41.159,
        lng: 114.72,
        summary: '草原包车选一段河湾/草浪，骑马短段可选；不夜住蒙古包连轴。',
        tips: '紫外线与温差大。可整段删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
      },
      {
        id: 'zjk-yuxian-optional',
        name: '蔚县古堡浅逛（可选）',
        days: 1,
        pace: 'fast',
        lat: 39.837,
        lng: 114.589,
        summary: '暖泉/古城堡石板浅走；腿脚紧只外观或删除。',
        tips: '车程偏长，优先过夜或整段跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zhangjiakou_Banner.jpg/1280px-Zhangjiakou_Banner.jpg',
      },
    ],
  },

  // ── 保定市深挖（京广南向短线）────────────────────────────
  {
    id: 'huabei-hebei-baoding',
    title: '保定 · 直隶署与清西陵浅走',
    region: 'huabei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约4–6天',
    transport:
      '京广高铁至保定东站，市区打车；易县清西陵、安新白洋淀、涞水野三坡包车日归。结束后高铁回京',
    budgetLabel: '本趟约2000–3800元（高铁+电梯酒店+包车日归；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/%E4%BF%9D%E5%AE%9A%E7%9B%B4%E9%9A%B6%E6%80%BB%E7%9D%A3%E7%BD%B2.jpg/1280px-%E4%BF%9D%E5%AE%9A%E7%9B%B4%E9%9A%B6%E6%80%BB%E7%9D%A3%E7%BD%B2.jpg',
    summary:
      '把保定织成「市区锚点+县域日归」：直隶总督署平路半日，易县清西陵神道选段，白洋淀乘船观苇与涞水野三坡浅山可选可删。不排涞源白石山高强度栈道，不夜赶山路。',
    introduction:
      '保定下辖莲池/竞秀城区与易县、安新、涞水等县。爸妈优先城区电梯酒店为锚，每天最多一处日归。\n\n清西陵与白洋淀分日；野三坡车程与台阶量力。涞源白石山玻璃栈道腿脚与恐高风险高，约60默认整段跳过。',
    seasonGuide:
      '春秋最舒适。夏季白洋淀注意防晒与蚊虫；冬季风大雾霾偶发，可缩短为市区+清西陵两日。',
    notices: [
      '清西陵开放陵区与票务以景区当日为准，选平缓神道即可。',
      '白洋淀乘船看天气与风浪；码头步行量力。',
      '野三坡山区弯道多，当日往返预留午休，疲劳即删。',
      '不排涞源白石山高强度段；勿与清东陵（唐山遵化）同趟硬赶两陵。',
    ],
    whyFast: '白洋淀、野三坡均可半日或整段删除；主体留给总督署与休整。',
    researchKeywords: [
      '保定 直隶总督署 父母',
      '易县 清西陵 慢游',
      '白洋淀 安新 乘船',
      '保定东 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：保定',
        url: 'https://zh.wikivoyage.org/wiki/%E4%BF%9D%E5%AE%9A',
        kind: 'other',
        note: '区划与进出概览，已改写',
      },
      {
        title: '保定市人民政府',
        url: 'https://www.baoding.gov.cn/',
        kind: 'official',
        note: '文旅与交通公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'bd-lianchi-base',
        name: '莲池/竞秀慢住',
        days: 2,
        pace: 'slow',
        lat: 38.874,
        lng: 115.489,
        summary: '近保定东或市区电梯酒店；抵达日只散步歇脚，熟悉超市与医院。',
        tips: '保定东出站打车。备薄外套，春秋温差大。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Baoding_001.jpg/1280px-Baoding_001.jpg',
      },
      {
        id: 'bd-zhili-yamen',
        name: '直隶总督署',
        days: 1,
        pace: 'slow',
        lat: 38.855,
        lng: 115.49,
        summary: '清代直隶总督署平路参观；半日足够，人多即撤。',
        tips: '与市区慢住同日或次日均可；台阶少，适合约60。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/%E4%BF%9D%E5%AE%9A%E7%9B%B4%E9%9A%B6%E6%80%BB%E7%9D%A3%E7%BD%B2%E5%A4%A7%E5%A0%822019.jpg/1280px-%E4%BF%9D%E5%AE%9A%E7%9B%B4%E9%9A%B6%E6%80%BB%E7%9D%A3%E7%BD%B2%E5%A4%A7%E5%A0%822019.jpg',
      },
      {
        id: 'bd-qingxiling',
        name: '易县清西陵',
        days: 1,
        pace: 'slow',
        lat: 39.388,
        lng: 115.192,
        summary: '包车日归；神道与陵区选一段平缓走，勿硬爬多座陵寝。',
        tips: '预约与开放以景区为准。可整段删改市区空白。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Western_Qing_Tombs%2C_2016-09-07_03.jpg/1280px-Western_Qing_Tombs%2C_2016-09-07_03.jpg',
      },
      {
        id: 'bd-baiyangdian-optional',
        name: '安新白洋淀（可选）',
        days: 1,
        pace: 'slow',
        lat: 38.935,
        lng: 115.936,
        summary: '乘船看苇荡与水面；码头短走即可，不安排长途荡舟连轴。',
        tips: '风浪大或雾霾重改删。防晒与防蚊。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Baiyangdian_Lake.JPG/1280px-Baiyangdian_Lake.JPG',
      },
      {
        id: 'bd-yesanpo-optional',
        name: '涞水野三坡浅山（可选）',
        days: 1,
        pace: 'fast',
        lat: 39.67,
        lng: 115.4,
        summary: '包车浅山车览或景区短段；涞源白石山高强度默认不排。',
        tips: '车程与台阶量力；疲劳整段跳过。勿夜返。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Yesanpo.jpg/1280px-Yesanpo.jpg',
      },
    ],
  },

  // ── 唐山市深挖（京哈走廊补丁）────────────────────────────
  {
    id: 'huabei-hebei-tangshan',
    title: '唐山 · 南湖与清东陵浅走',
    region: 'huabei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约4–6天',
    transport:
      '京哈/津唐高铁至唐山站，市区打车；遵化清东陵、迁西喜峰口包车日归；乐亭海岸可选。结束后高铁回京或转秦皇岛',
    budgetLabel: '本趟约2000–3800元（高铁+电梯酒店+包车日归；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Eastern_Qing_Tombs.jpg/1280px-Eastern_Qing_Tombs.jpg',
    summary:
      '把唐山织成「市区南湖锚点+县域日归」：南湖公园平路，遵化清东陵神道选段，迁西长城车览外观与乐亭海岸可选可删。不与北戴河同趟连轴赶海，不排长城硬徒步。',
    introduction:
      '唐山下辖路南/路北城区与遵化、迁西、乐亭等。爸妈优先近南湖电梯酒店为锚，每天最多一处日归。\n\n清东陵与迁西分日；乐亭岸线与秦皇岛北戴河同属渤海湾，已走北戴河线可整段删。曹妃甸工业港区本线不排。',
    seasonGuide:
      '春秋最舒适。夏季南湖与海岸注意防晒；冬季风大，可缩短为南湖+清东陵。',
    notices: [
      '清东陵开放与票务以景区当日为准，选平缓神道即可。',
      '迁西长城以车览外观为主，勿硬爬残垣。',
      '乐亭与北戴河勿同趟连轴；二选一即可。',
      '勿与保定清西陵同趟硬赶东西两陵。',
    ],
    whyFast: '迁西、乐亭均可半日或整段删除；主体留给南湖与休整。',
    researchKeywords: [
      '唐山 南湖 慢游',
      '遵化 清东陵 父母',
      '迁西 喜峰口 长城',
      '唐山 高铁 四日',
    ],
    sources: [
      {
        title: 'Wikivoyage：唐山',
        url: 'https://zh.wikivoyage.org/wiki/%E5%94%90%E5%B1%B1',
        kind: 'other',
        note: '区划概览，已改写',
      },
      {
        title: '唐山市人民政府',
        url: 'https://www.tangshan.gov.cn/',
        kind: 'official',
        note: '文旅与交通公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'ts-lunan-base',
        name: '路南/路北慢住',
        days: 2,
        pace: 'slow',
        lat: 39.625,
        lng: 118.18,
        summary: '近南湖或市中心电梯酒店；抵达日只散步歇脚。',
        tips: '唐山站出站打车。备薄外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_Lake_of_Tangshan_1.jpg/1280px-South_Lake_of_Tangshan_1.jpg',
      },
      {
        id: 'ts-nanhu',
        name: '南湖公园',
        days: 1,
        pace: 'slow',
        lat: 39.605,
        lng: 118.175,
        summary: '湖岸平路散步；量力选一段，不必环湖特种兵。',
        tips: '与市区慢住同日亦可。人多时段错开午后。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_Lake_of_Tangshan_1.jpg/1280px-South_Lake_of_Tangshan_1.jpg',
      },
      {
        id: 'ts-qingdongling',
        name: '遵化清东陵',
        days: 1,
        pace: 'slow',
        lat: 40.186,
        lng: 117.647,
        summary: '包车日归；神道与陵区选一段平缓走，勿硬爬多座陵寝。',
        tips: '预约与开放以景区为准。可整段删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Eastern_Qing_Tombs.jpg/1280px-Eastern_Qing_Tombs.jpg',
      },
      {
        id: 'ts-qianxi-optional',
        name: '迁西长城车览（可选）',
        days: 1,
        pace: 'fast',
        lat: 40.45,
        lng: 118.3,
        summary: '喜峰口/潘家口一带包车外观；不安排残垣硬徒步。',
        tips: '山区弯道预留午休回城。疲劳整段跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Xifengkou-Great-Wall-Qianxi-Tangshan-China.jpg/1280px-Xifengkou-Great-Wall-Qianxi-Tangshan-China.jpg',
      },
      {
        id: 'ts-laoting-optional',
        name: '乐亭海岸（可选）',
        days: 1,
        pace: 'slow',
        lat: 39.426,
        lng: 118.912,
        summary: '渤海湾岸浅走；已走北戴河线可整段删，勿同趟连轴。',
        tips: '防晒与风浪提示。车程留意疲劳。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
      },
    ],
  },

  // ── 烟台市独立慢住（从青岛线拆出）────────────────────────
  {
    id: 'huabei-shandong-yantai',
    title: '烟台慢住 · 芝罘与蓬莱浅走',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    fromHome: true,
    daysLabel: '约5–8天',
    transport:
      '北京南高铁至烟台约4–5小时（或经青岛中转）；市区打车；蓬莱城际/包车；长岛轮渡视风浪。结束后高铁或经青岛回京',
    budgetLabel: '对照月预算约1.2–1.8万（高铁+电梯酒店+海鲜；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg/1280px-%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg',
    summary:
      '把烟台从青岛延伸段拆成独立慢住：芝罘烟台山与滨海路为锚，蓬莱阁外观可选，长岛轮渡风浪大可整段删。不与青岛崂山同日特种兵。',
    introduction:
      '烟台下辖芝罘、莱山、蓬莱区等。爸妈优先芝罘近海电梯酒店连续住，每天最多一处日归。\n\n蓬莱与长岛分日；招远金矿/栖霞主题本线默认不排。青岛线仍可把烟台标为可选延伸，本线给想多住几天的家庭。',
    seasonGuide:
      '夏秋宜。暑期海滨人多错峰早晚；秋日海风凉备外套。冬季风大非刚需可缩短。',
    notices: [
      '烟台山台阶量力，可走一段即返。',
      '海鲜控盐控生冷。',
      '长岛关注停航公告，大风改市区空白。',
      '蓬莱阁台阶多，腿脚紧只外观或删除。',
    ],
    whyFast: '蓬莱、长岛均可半日或整段删除；主体留给芝罘休整。',
    researchKeywords: [
      '烟台 芝罘 慢住 父母',
      '烟台山 滨海路',
      '蓬莱阁 适老',
      '长岛 轮渡 风浪',
    ],
    sources: [
      {
        title: 'Wikivoyage：烟台',
        url: 'https://zh.wikivoyage.org/wiki/%E7%83%9F%E5%8F%B0',
        kind: 'other',
        note: '区划与进出概览，已改写',
      },
      {
        title: '烟台市文化和旅游局',
        url: 'https://whlyj.yantai.gov.cn/',
        kind: 'official',
        note: '景区与船票以官方为准',
      },
    ],
    stops: [
      {
        id: 'yt-zhifu-base',
        name: '芝罘慢住基地',
        days: 4,
        pace: 'slow',
        lat: 37.539,
        lng: 121.391,
        summary: '近海或地铁电梯酒店；每日一段滨海路，下午午睡。',
        tips: '高铁烟台站出站打车。每周留空白买菜。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg/1280px-%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg',
      },
      {
        id: 'yt-yantaishan',
        name: '烟台山 + 滨海浅走',
        days: 1,
        pace: 'slow',
        lat: 37.547,
        lng: 121.407,
        summary: '近代建筑群与灯塔外观；台阶走一段即返，平路看海即可。',
        tips: '避正午紫外线。人多即撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Yantaishan_lighthouse_and_monument.jpg/1280px-Yantaishan_lighthouse_and_monument.jpg',
      },
      {
        id: 'yt-penglai-optional',
        name: '蓬莱阁外观（可选）',
        days: 1,
        pace: 'fast',
        lat: 37.826,
        lng: 120.744,
        summary: '蓬莱区仙境海岸/阁外观；台阶多量力，可整段删。',
        tips: '城际或包车往返；勿与长岛同日硬赶。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/PenglaiPavilion.jpg/1280px-PenglaiPavilion.jpg',
      },
      {
        id: 'yt-changdao-optional',
        name: '长岛轮渡（可选）',
        days: 1,
        pace: 'fast',
        lat: 37.921,
        lng: 120.736,
        summary: '轮渡登岛浅逛；风浪大或身体不适整段跳过。',
        tips: '关注停航；岛上少硬爬。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/%E7%83%9F%E5%8F%B0%E9%95%BF%E5%B2%9B-%E5%8D%97%E9%95%BF%E5%B1%B1%E5%B2%9B.JPG/1280px-%E7%83%9F%E5%8F%B0%E9%95%BF%E5%B2%9B-%E5%8D%97%E9%95%BF%E5%B1%B1%E5%B2%9B.JPG',
      },
    ],
  },

  // ── 石家庄/正定深挖（京广南向，与保定错开）────────────────
  {
    id: 'huabei-hebei-shijiazhuang',
    title: '石家庄 · 正定古城浅走',
    region: 'huabei',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约3–5天',
    transport:
      '京广高铁至石家庄站，市区地铁/打车；正定古城打车或石家庄↔正定短途火车约15分钟。赵县赵州桥包车日归可选。结束后高铁回京',
    budgetLabel: '本趟约1600–3200元（高铁+电梯酒店+正定门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Zhengding_Longxing_Si_2013.08.31_15-50-10.jpg/1280px-Zhengding_Longxing_Si_2013.08.31_15-50-10.jpg',
    summary:
      '把石家庄织成「市区锚点+正定县域」：长安/桥西电梯酒店慢住，正定隆兴寺与古城四塔分日浅走，河北省博物院空调日与赵州桥可选可删。不排苍岩山高强度栈道，不与保定清西陵同趟硬赶。',
    introduction:
      '石家庄市辖长安/桥西/裕华等区与正定、赵县、平山等县。爸妈优先市区电梯酒店为锚，正定作独立一日或两日浅走，勿与市区景点特种兵连轴。\n\n隆兴寺台阶与殿阁量力；四塔外观为主。赵州桥车程可控但可整段删。平山温塘、苍岩山默认不排高强度。',
    seasonGuide:
      '春秋最舒适。夏季午后少久站寺庙外；冬季风大雾霾偶发，可缩短为正定一日+博物院。',
    notices: [
      '隆兴寺开放与票务以景区当日为准；大悲阁台阶多，腿脚紧可外观主轴。',
      '正定古城石板防滑；四塔以外观为主，勿硬爬。',
      '石家庄↔正定短途火车或打车均可；高峰预留时间。',
      '不排苍岩山/井陉高强度山线；勿与保定清西陵同趟连轴。',
    ],
    whyFast: '赵州桥、博物院均可半日或整段删除；主体留给正定与休整。',
    researchKeywords: [
      '正定 隆兴寺 父母',
      '正定古城 四塔',
      '石家庄 高铁 三日',
      '赵州桥 赵县',
    ],
    sources: [
      {
        title: 'Wikivoyage：石家庄',
        url: 'https://zh.wikivoyage.org/wiki/%E7%9F%B3%E5%AE%B6%E5%BA%84',
        kind: 'other',
        note: '区划、正定与进出概览，已改写',
      },
      {
        title: '石家庄市人民政府',
        url: 'https://www.sjz.gov.cn/',
        kind: 'official',
        note: '文旅与交通公告以官方为准',
      },
    ],
    stops: [
      {
        id: 'sjz-changan-base',
        name: '长安/桥西慢住',
        days: 2,
        pace: 'slow',
        lat: 38.042,
        lng: 114.515,
        summary: '近石家庄站或地铁电梯酒店；抵达日只散步歇脚，熟悉超市与医院。',
        tips: '高铁石家庄站出站。备薄外套，春秋温差大。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%E7%9F%B3%E5%AE%B6%E5%BA%84%E9%95%BF%E5%AE%89%E5%85%AC%E5%9B%AD.jpg/1280px-%E7%9F%B3%E5%AE%B6%E5%BA%84%E9%95%BF%E5%AE%89%E5%85%AC%E5%9B%AD.jpg',
      },
      {
        id: 'sjz-longxing',
        name: '正定隆兴寺',
        days: 1,
        pace: 'slow',
        lat: 38.144,
        lng: 114.576,
        summary: '摩尼殿与中轴线浅走；大悲阁台阶量力，半日足够。',
        tips: '与四塔分日更轻松。人多即撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E6%AD%A3%E5%AE%9A%E9%9A%86%E5%85%B4%E5%AF%BA%E6%91%A9%E5%B0%BC%E6%AE%BF2026.3.jpg/1280px-%E6%AD%A3%E5%AE%9A%E9%9A%86%E5%85%B4%E5%AF%BA%E6%91%A9%E5%B0%BC%E6%AE%BF2026.3.jpg',
      },
      {
        id: 'sjz-zhengding-towers',
        name: '正定古城与四塔',
        days: 1,
        pace: 'slow',
        lat: 38.146,
        lng: 114.571,
        summary: '古城街巷与凌霄/澄灵等塔外观；石板短段即可，不安排硬爬。',
        tips: '可与隆兴寺同城分日。疲劳改空白。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Zhengding_3.jpg/1280px-Zhengding_3.jpg',
      },
      {
        id: 'sjz-hebei-museum-optional',
        name: '河北省博物院（可选）',
        days: 1,
        pace: 'slow',
        lat: 38.041,
        lng: 114.531,
        summary: '市区空调馆；中山国与满城汉墓展选一段，不必全馆特种兵。',
        tips: '预约以馆方为准。腿脚紧优先此日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/20250118_Hebei_Museum.jpg/1280px-20250118_Hebei_Museum.jpg',
      },
      {
        id: 'sjz-zhaozhou-optional',
        name: '赵县赵州桥（可选）',
        days: 1,
        pace: 'fast',
        lat: 37.722,
        lng: 114.767,
        summary: '包车日归看隋代石桥外观；博物馆浅入即可，可整段删。',
        tips: '车程预留午休回城。勿夜赶。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Anji_%28Zhaozhou%29_Bridge_2011.jpg/1280px-Anji_%28Zhaozhou%29_Bridge_2011.jpg',
      },
    ],
  },
];
