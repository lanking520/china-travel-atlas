import type {
  GalleryImage,
  HospitalHint,
  PracticalGuide,
  Route,
  Season,
  Stop,
} from "@/content/types";
import { SEASON_FULL_LABELS } from "@/lib/labels";
import {
  placeCoverForRoute,
  placeImageForStop,
} from "@/lib/place-images";

const DEFAULT_NOTICES = [
  "每天留一点空白，别把行程排满。",
  "常用药随身带；长途或高原出行前评估身体状况。",
  "票务、地图可用中英文 App；以景区官网与现场公告为准。",
  "远途优先电梯房、好停车的住处，少搬运行李。",
];

export const HOSPITAL_DISCLAIMER =
  "仅供参考，非医疗建议。出行前请用医院官网或高德/百度地图核实地址、门诊时间与挂号方式；急症优先拨打 120。";

/** Ensure every stop has a place-accurate display image */
export function stopWithImage(stop: Stop, fallback: string): Stop {
  const image =
    placeImageForStop(stop.id, stop.image) || stop.image || fallback;
  return { ...stop, image };
}

export function buildSeasonGuide(route: Route): string {
  if (route.seasonGuide?.trim()) return route.seasonGuide;
  const names = route.seasons.map((s) => SEASON_FULL_LABELS[s]).join("、");
  const avoid = (["spring", "summer", "autumn", "winter"] as Season[])
    .filter((s) => !route.seasons.includes(s))
    .map((s) => SEASON_FULL_LABELS[s]);
  const avoidText =
    avoid.length > 0
      ? `一般不主推：${avoid.join("、")}（可去但体验打折或天气更考验体力）。`
      : "四季皆可按体力灵活安排。";
  return `本线更适合${names}出行。${avoidText}出发前看当地气温与景区开放公告，极端天气果断改期。`;
}

export function buildIntroduction(route: Route): string {
  const base = route.introduction?.trim()
    ? route.introduction.trim()
    : (() => {
        const stopBits = route.stops
          .map(
            (s) =>
              `${s.name}（${s.pace === "slow" ? "慢游" : "快览"}，约${s.days}天）：${s.summary}`,
          )
          .join("\n");
        const home = route.fromHome
          ? "这条线从北京家门口出发，适合周末或节假日练手。"
          : "这条线通常从北京飞/坐高铁抵达后当地活动，结束后建议回京休整。";
        return [
          route.summary,
          home,
          `行程大约 ${route.daysLabel}，交通：${route.transport}。预算参考：${route.budgetLabel}。`,
          stopBits ? `主要停留：\n${stopBits}` : "",
          route.whyFast ? `快览提示：${route.whyFast}` : "",
        ]
          .filter(Boolean)
          .join("\n\n");
      })();

  if (
    route.compositionKind === "compose" &&
    route.legIds &&
    route.legIds.length > 0 &&
    !/下方「嵌入短线」|点进下方短线/.test(base)
  ) {
    return `${base}\n\n下方「嵌入短线」可点进各段详情；本长线只写顺序与衔接。`;
  }
  return base;
}

export function buildNotices(route: Route): string[] {
  const custom = route.notices?.filter(Boolean) ?? [];
  const extras: string[] = [];
  if (route.region === "qingzang" || route.id.includes("qinghai") || route.id.includes("lhasa")) {
    extras.push("高原反应因人而异：抵达先休息，勿剧烈运动；备常用药与氧气咨询医生。");
  }
  if (route.tripType === "long") {
    extras.push("长旅行结束后建议回北京家休整几天，再安排下一段。");
  }
  if (route.fromHome) {
    extras.push("当天往返请早出早归，预留堵车与检票时间。");
  }
  const merged = [...custom, ...extras, ...DEFAULT_NOTICES];
  return [...new Set(merged)];
}

/**
 * Gallery prefers place-accurate stop/cover images.
 * Stale Unsplash galleries from route-details are ignored when they
 * still point at images.unsplash.com (known wrong placeholders).
 */
export function buildGallery(route: Route): GalleryImage[] {
  const cover = placeCoverForRoute(route.id, route.coverImage);
  const fromStops = route.stops.map((s) => {
    const url =
      placeImageForStop(s.id, s.image) || s.image || cover;
    return { url, caption: s.name, stopId: s.id };
  });

  const existing = route.gallery ?? [];
  const existingIsUnsplash =
    existing.length > 0 &&
    existing.every((g) => g.url.includes("images.unsplash.com"));

  if (existing.length > 0 && !existingIsUnsplash) {
    // Keep captions but rewrite URLs when we have place maps
    return existing.map((g) => {
      if (g.stopId) {
        const url = placeImageForStop(g.stopId) || g.url;
        return { ...g, url };
      }
      if (g.url.includes("images.unsplash.com")) {
        return { ...g, url: cover };
      }
      return g;
    });
  }

  if (fromStops.length > 0) {
    return [{ url: cover, caption: `${route.title} · 封面景色` }, ...fromStops];
  }
  return [{ url: cover, caption: route.title }];
}

type HubKey =
  | "beijing"
  | "tianjin"
  | "chengde"
  | "datong"
  | "taiyuan"
  | "hailar"
  | "chengdu"
  | "kunming"
  | "dali"
  | "lijiang"
  | "lhasa"
  | "xining"
  | "dunhuang"
  | "zhangye"
  | "lanzhou"
  | "urumqi"
  | "sanya"
  | "xiamen"
  | "hangzhou"
  | "suzhou"
  | "guangzhou"
  | "shanghai"
  | "xian"
  | "harbin"
  | "wuhan"
  | "chongqing"
  | "guiyang"
  | "nanning"
  | "haikou"
  | "yinchuan"
  | "generic";

const HUB_HOSPITALS: Record<HubKey, HospitalHint[]> = {
  beijing: [
    { name: "北京协和医院", level: "三甲", area: "东单/帅府园", note: "综合实力强，挂号紧张" },
    { name: "北京大学第三医院", level: "三甲", area: "海淀·花园北路", note: "骨科等专科口碑好" },
    { name: "北京医院", level: "三甲", area: "东单", note: "老年医学相关科室较全" },
  ],
  tianjin: [
    { name: "天津医科大学总医院", level: "三甲", area: "和平区·鞍山道", note: "请用高德核实" },
    { name: "天津市第一中心医院", level: "三甲", area: "南开区", note: "请用高德核实" },
  ],
  chengde: [
    { name: "承德医学院附属医院", level: "三甲", area: "承德市区", note: "当地主力综合医院；请用高德核实" },
    { name: "北京协和医院", level: "三甲", area: "北京·东单", note: "急重症可考虑返京；非就近急诊首选" },
  ],
  datong: [
    { name: "大同市第三人民医院", level: "三甲", area: "大同市区", note: "请用高德核实" },
    { name: "山西医科大学第一医院", level: "三甲", area: "太原", note: "晋北转诊常往太原；请用高德核实" },
  ],
  taiyuan: [
    { name: "山西医科大学第一医院", level: "三甲", area: "迎泽区", note: "请用高德核实" },
    { name: "山西省人民医院", level: "三甲", area: "双塔寺街一带", note: "请用高德核实" },
  ],
  hailar: [
    { name: "呼伦贝尔市人民医院", level: "三甲", area: "海拉尔区", note: "请用高德核实" },
    { name: "哈尔滨医科大学附属第一医院", level: "三甲", area: "哈尔滨", note: "草原段急重症常转哈尔滨；请用高德核实" },
  ],
  chengdu: [
    { name: "四川大学华西医院", level: "三甲", area: "武侯区·国学巷", note: "请用高德核实" },
    { name: "四川省人民医院", level: "三甲", area: "青羊区", note: "请用高德核实" },
  ],
  kunming: [
    { name: "昆明医科大学第一附属医院", level: "三甲", area: "西昌路一带", note: "请用高德核实" },
    { name: "云南省第一人民医院", level: "三甲", area: "金碧路一带", note: "请用高德核实" },
  ],
  dali: [
    { name: "大理大学第一附属医院", level: "三甲", area: "大理市区", note: "请用高德核实" },
    { name: "大理白族自治州人民医院", level: "三甲", area: "大理市区", note: "请用高德核实" },
  ],
  lijiang: [
    { name: "丽江市人民医院", level: "三甲", area: "古城区外围", note: "请用高德核实" },
    { name: "昆明医科大学第一附属医院", level: "三甲", area: "昆明", note: "急重症可转昆明；请用高德核实" },
  ],
  lhasa: [
    { name: "西藏自治区人民医院", level: "三甲", area: "拉萨市区", note: "高原相关请遵医嘱；请用高德核实" },
    { name: "西藏阜康医院", level: "三甲", area: "拉萨市区", note: "请用高德核实" },
  ],
  xining: [
    { name: "青海大学附属医院", level: "三甲", area: "西宁市区", note: "请用高德核实" },
    { name: "青海省人民医院", level: "三甲", area: "西宁市区", note: "请用高德核实" },
  ],
  dunhuang: [
    { name: "敦煌市医院", level: "综合医院", area: "敦煌市区", note: "县级市医院；复杂情况转兰州；请用高德核实" },
    { name: "兰州大学第一医院", level: "三甲", area: "兰州", note: "河西段常转兰州三甲；请用高德核实" },
  ],
  zhangye: [
    { name: "张掖市人民医院", level: "三甲", area: "张掖市区", note: "请用高德核实" },
    { name: "甘肃省人民医院", level: "三甲", area: "兰州", note: "请用高德核实" },
  ],
  lanzhou: [
    { name: "兰州大学第一医院", level: "三甲", area: "兰州市区", note: "请用高德核实" },
    { name: "甘肃省人民医院", level: "三甲", area: "兰州市区", note: "请用高德核实" },
  ],
  urumqi: [
    { name: "新疆医科大学第一附属医院", level: "三甲", area: "乌鲁木齐市区", note: "请用高德核实" },
    { name: "新疆维吾尔自治区人民医院", level: "三甲", area: "乌鲁木齐市区", note: "请用高德核实" },
  ],
  sanya: [
    { name: "三亚中心医院（海南省第三人民医院）", level: "三甲", area: "三亚市区", note: "请用高德核实" },
    { name: "海南医学院第二附属医院", level: "三甲", area: "海口", note: "急重症可转海口；请用高德核实" },
  ],
  xiamen: [
    { name: "厦门大学附属中山医院", level: "三甲", area: "思明区", note: "请用高德核实" },
    { name: "厦门大学附属第一医院", level: "三甲", area: "思明/湖里", note: "请用高德核实" },
  ],
  hangzhou: [
    { name: "浙江大学医学院附属第一医院", level: "三甲", area: "庆春路/余杭院区", note: "请用高德核实" },
    { name: "浙江大学医学院附属邵逸夫医院", level: "三甲", area: "庆春东路一带", note: "请用高德核实" },
  ],
  suzhou: [
    { name: "苏州大学附属第一医院", level: "三甲", area: "姑苏/相城等院区", note: "请用高德核实" },
    { name: "南京鼓楼医院", level: "三甲", area: "南京", note: "苏南急重症常转南京；请用高德核实" },
  ],
  guangzhou: [
    { name: "中山大学附属第一医院", level: "三甲", area: "越秀区", note: "请用高德核实" },
    { name: "中山大学孙逸仙纪念医院", level: "三甲", area: "越秀区", note: "请用高德核实" },
  ],
  shanghai: [
    { name: "复旦大学附属中山医院", level: "三甲", area: "徐汇区", note: "请用高德核实" },
    { name: "上海交通大学医学院附属瑞金医院", level: "三甲", area: "黄浦区", note: "请用高德核实" },
  ],
  xian: [
    { name: "西安交通大学第一附属医院", level: "三甲", area: "雁塔区", note: "请用高德核实" },
    { name: "空军军医大学西京医院", level: "三甲", area: "新城区", note: "请用高德核实" },
  ],
  harbin: [
    { name: "哈尔滨医科大学附属第一医院", level: "三甲", area: "南岗区", note: "请用高德核实" },
    { name: "哈尔滨医科大学附属第二医院", level: "三甲", area: "南岗区", note: "请用高德核实" },
  ],
  wuhan: [
    { name: "华中科技大学同济医学院附属同济医院", level: "三甲", area: "汉口/光谷", note: "请用高德核实" },
    { name: "武汉大学中南医院", level: "三甲", area: "武昌区", note: "请用高德核实" },
  ],
  chongqing: [
    { name: "重庆医科大学附属第一医院", level: "三甲", area: "渝中区", note: "请用高德核实" },
    { name: "陆军军医大学西南医院", level: "三甲", area: "沙坪坝", note: "请用高德核实" },
  ],
  guiyang: [
    { name: "贵州医科大学附属医院", level: "三甲", area: "贵阳市区", note: "请用高德核实" },
    { name: "贵州省人民医院", level: "三甲", area: "贵阳市区", note: "请用高德核实" },
  ],
  nanning: [
    { name: "广西医科大学第一附属医院", level: "三甲", area: "南宁市区", note: "请用高德核实" },
    { name: "广西壮族自治区人民医院", level: "三甲", area: "南宁市区", note: "请用高德核实" },
  ],
  haikou: [
    { name: "海南医学院第一附属医院", level: "三甲", area: "海口市区", note: "请用高德核实" },
    { name: "海南省人民医院", level: "三甲", area: "海口市区", note: "请用高德核实" },
  ],
  yinchuan: [
    { name: "宁夏医科大学总医院", level: "三甲", area: "银川市区", note: "请用高德核实" },
    { name: "宁夏回族自治区人民医院", level: "三甲", area: "银川市区", note: "请用高德核实" },
  ],
  generic: [
    {
      name: "当地市人民医院 / 中心医院",
      level: "请核实",
      area: "主基地城区",
      note: "请用高德搜索「三甲医院」并核对官网",
    },
  ],
};

const HUB_DINING: Partial<Record<HubKey, string>> = {
  beijing: "家常面饺、烤鸭可点半只；清淡可选粥、素炒时蔬、去皮白切鸡。景区餐饮偏贵，可自带点心与温水。",
  tianjin: "煎饼果子选少油少酱；海鲜现做清蒸。清淡：疙瘩汤、素包、白粥配酱菜。少碰过油炸货。",
  chengde: "宫廷菜口味可点清汤、炖菜；清淡选山庄附近家常馆的清炒时蔬与炖豆腐。",
  datong: "刀削面可选清汤少醋少辣椒；清淡：剔尖、素蒸饺、小米粥。肠胃弱少碰过油过酸。",
  taiyuan: "面食选清汤；清淡：莜面栲栳栳配清酱、小米粥、煮青菜。平遥牛肉可少量试吃。",
  hailar: "牛羊肉选清炖少盐；清淡：奶茶少糖、手把肉去肥、素炒白菜。草原餐油大，可点半份。",
  chengdu: "火锅必点清汤/番茄锅，少麻辣；清淡：豆花、抄手白汤、冒菜改清汤、蒸蛋。",
  dali: "饵丝、乳扇适量；清淡：过桥米线少油、清蒸洱海鱼（合规餐厅）、青菜豆腐汤。少生冷。",
  lhasa: "甜茶、藏面适量；清淡：清汤面、白米饭配清炒蔬菜。抵达头几日少油少酒，遵医嘱饮食。",
  xining: "牛肉面选清汤少辣；清淡：酸奶（温服）、清炖牛羊肉、素包子。高原少饮酒。",
  dunhuang: "夜市烧烤少油烟；清淡：拉面清汤、黄面少辣、新鲜瓜果（洗净）。干燥多喝温水。",
  urumqi: "拌面、抓饭少油；清淡：清炖羊肉、酸奶、素抓饭。少碰过辣过烫。",
  sanya: "海鲜清蒸；清淡：白灼时蔬、椰子鸡清汤、粥粉。防晒补水，少喝酒暴晒。",
  xiamen: "沙茶面可点少酱；清淡：海鲜粥、蒸排骨、花生汤。鼓浪屿餐饮贵，市区吃更稳。",
  hangzhou: "杭帮菜偏甜可声明少糖；清淡：片儿川少辣、龙井虾仁、白切鸡、蔬菜豆腐煲。",
  suzhou: "苏帮菜声明少甜少油；清淡：奥灶面清汤、白切羊肉少量、时蔬豆腐。",
  guangzhou: "早茶选白粥、肠粉少油；清淡：清蒸鱼、白切鸡去皮、烫青菜。少甜品饮料。",
  shanghai: "本帮菜声明少糖少油；清淡：生煎可少吃、白切鸡、蔬菜面、小馄饨汤。",
  xian: "泡馍可选清汤；清淡：葫芦头少油、素包子、米粥。少碰过油凉菜。",
  harbin: "炖菜可点素多肉少；清淡：饺子清淡馅、粥、凉拌白菜少醋。室内外温差大别贪凉。",
  chongqing: "火锅清汤；清淡：小面清汤、抄手、酸辣粉改微辣或不辣。",
};

function resolveHub(route: Route): HubKey {
  const blob = [
    route.id,
    route.title,
    route.primaryProvince ?? "",
    ...route.stops.map((s) => `${s.id} ${s.name}`),
  ]
    .join(" ")
    .toLowerCase();

  const tests: [RegExp, HubKey][] = [
    [/mutianyu|gubei|simatai|beijing|八达岭|慕田峪|古北/, "beijing"],
    [/tianjin|天津|haihe|wudadao/, "tianjin"],
    [/chengde|承德|避暑山庄/, "chengde"],
    [/datong|大同|yungang|云冈|hanging-temple|yingxian/, "datong"],
    [/pingyao|平遥|taiyuan|太原|shanxi-pingyao/, "taiyuan"],
    [/hailar|呼伦贝尔|hulunbuir|满洲里|neimeng/, "hailar"],
    [/chengdu|成都|panda|dujiangyan|chuandian/, "chengdu"],
    [/dali|大理/, "dali"],
    [/lijiang|丽江/, "lijiang"],
    [/kunming|昆明|xishuangbanna|tengchong/, "kunming"],
    [/lhasa|拉萨|shigatse|日喀则/, "lhasa"],
    [/qinghai|xining|西宁|qinggan/, "xining"],
    [/dunhuang|敦煌|mogao/, "dunhuang"],
    [/zhangye|张掖|danxia/, "zhangye"],
    [/lanzhou|兰州|xiahe/, "lanzhou"],
    [/urumqi|xinjiang|乌鲁木齐|喀纳斯|kashi|turpan|yili|duku/, "urumqi"],
    [/sanya|三亚|hainan-slow/, "sanya"],
    [/haikou|海口/, "haikou"],
    [/xiamen|厦门|gulangyu|quanzhou/, "xiamen"],
    [/hangzhou|杭州|west-lake|wuzhen|suhan/, "hangzhou"],
    [/suzhou|苏州|nanjing|yangzhou/, "suzhou"],
    [/guangzhou|广州|zhuhai|chaoshan/, "guangzhou"],
    [/shanghai|上海/, "shanghai"],
    [/xian|西安|bingmayong|hanzhong/, "xian"],
    [/harbin|哈尔滨|changbai|yanbian|wudalianchi|shenyang|dalian/, "harbin"],
    [/wuhan|武汉|yichang|zhangjiajie|changsha|wudang|luoyang/, "wuhan"],
    [/chongqing|重庆/, "chongqing"],
    [/guiyang|贵州|zhenyuan/, "guiyang"],
    [/guilin|阳朔|nanning|detian|dongxing/, "nanning"],
    [/yinchuan|宁夏|shapotou/, "yinchuan"],
  ];

  for (const [re, hub] of tests) {
    if (re.test(blob)) return hub;
  }

  const byProvince: Record<string, HubKey> = {
    beijing: "beijing",
    tianjin: "tianjin",
    hebei: "chengde",
    shanxi: "taiyuan",
    neimenggu: "hailar",
    sichuan: "chengdu",
    yunnan: "kunming",
    xizang: "lhasa",
    qinghai: "xining",
    gansu: "lanzhou",
    xinjiang: "urumqi",
    hainan: "sanya",
    fujian: "xiamen",
    zhejiang: "hangzhou",
    jiangsu: "suzhou",
    guangdong: "guangzhou",
    shanghai: "shanghai",
    shaanxi: "xian",
    heilongjiang: "harbin",
    jilin: "harbin",
    liaoning: "harbin",
    hubei: "wuhan",
    hunan: "wuhan",
    henan: "wuhan",
    chongqing: "chongqing",
    guizhou: "guiyang",
    guangxi: "nanning",
    ningxia: "yinchuan",
  };
  if (route.primaryProvince && byProvince[route.primaryProvince]) {
    return byProvince[route.primaryProvince];
  }

  const byRegion: Record<string, HubKey> = {
    huabei: "beijing",
    dongbei: "harbin",
    huadong: "hangzhou",
    huazhong: "wuhan",
    huanan: "guangzhou",
    xinan: "chengdu",
    xibei: "lanzhou",
    qingzang: "xining",
  };
  return byRegion[route.region] ?? "generic";
}

function templateTimePlan(route: Route): string[] {
  const slow = route.stops.filter((s) => s.pace === "slow");
  const fast = route.stops.filter((s) => s.pace === "fast");
  const lines: string[] = [
    `总时长约 ${route.daysLabel}。原则：每天最多 1 个主景点 + 午休；快览点可删。`,
  ];
  if (route.fromHome && route.tripType === "short") {
    lines.push("上午出发 → 主景点半天 → 下午返程，预留堵车/检票。");
  } else if (slow[0]) {
    lines.push(`前段：在「${slow[0].name}」先住稳 ${Math.min(slow[0].days || 2, 3)} 天，适应作息再外拓。`);
  }
  for (const s of route.stops.slice(0, 6)) {
    const pace = s.pace === "slow" ? "慢游" : "快览可删";
    lines.push(`· ${s.name}（约${s.days}天，${pace}）：上午出门，下午回住地休息。`);
  }
  if (fast.length) {
    lines.push(`可跳过以减负：${fast.map((s) => s.name).join("、")}。`);
  }
  if (route.tripType === "long") {
    lines.push("每周留 2–3 个空白日；段末预留回京休整。");
  }
  return lines;
}

function templateRouteGuide(route: Route): string {
  const order = route.stops.map((s) => s.name).join(" → ");
  const skip = route.stops
    .filter((s) => s.pace === "fast" || /可选|optional/i.test(s.name))
    .map((s) => s.name);
  return [
    `建议顺序：${order || "按站点时间线"}。`,
    "节奏：适老慢游——半天一景、午休必留；台阶/爬山优先缆车、观光车或远观。",
    skip.length ? `体力紧可跳过：${skip.join("、")}。` : "不必打卡全部景点，看累即回。",
    `交通要点：${route.transport}`,
  ].join("\n\n");
}

function templateSightsTips(route: Route): string {
  return route.stops
    .map((s) => {
      const tip = s.tips?.trim() || s.summary;
      return `· ${s.name}：${tip}`;
    })
    .join("\n");
}

function templateDining(route: Route, hub: HubKey): string {
  const local = HUB_DINING[hub];
  const base =
    local ??
    "优先清蒸、白灼、清汤面/粥；声明少油少盐少辣。地方特色浅尝即可，肠胃弱备常备药。";
  return `${base}\n\n共性：两餐之间温水；慎生冷与街头长时间摆摊的凉菜。`;
}

function templateLongStay(route: Route): string {
  if (route.tripType === "short" && route.fromHome) {
    return "短途当日往返一般不必长居。若偶发过夜：选高速出口或景区附近电梯酒店，少搬运行李。";
  }
  const base = route.stops.find((s) => s.pace === "slow")?.name ?? "主基地城区";
  return [
    `长住优先「${base}」一类生活便利区：近超市、药店、公交/打车方便，避免纯景区山顶民宿。`,
    "住宿：电梯房、低楼层、无障碍或少台阶；短租先订 3–7 天试住再续。问清是否含水电、能否开发票。",
    "节奏：早出晚归不硬撑；每周空白日洗衣休整；保持与北京接近的服药与血压监测习惯。",
  ].join("\n\n");
}

/**
 * 合并人工 practicalGuide 与模板兜底，保证详情页各段非空。
 * 人工稿优先；缺段用站点 + 枢纽城市启发式补齐。模板医院带「请用高德核实」。
 */
export function buildPracticalGuide(route: Route): PracticalGuide {
  const custom = route.practicalGuide;
  const hub = resolveHub(route);
  const hospitalsFromTemplate = !(custom?.hospitals && custom.hospitals.length > 0);
  const hospitals = hospitalsFromTemplate
    ? (HUB_HOSPITALS[hub] ?? HUB_HOSPITALS.generic).map((h) => ({
        ...h,
        note: h.note?.includes("请用高德核实")
          ? h.note
          : [h.note, "请用高德核实"].filter(Boolean).join("；"),
      }))
    : custom!.hospitals!;

  /** True when the whole guide (or at least hospitals) came from hub heuristics */
  const fromTemplate =
    !custom || Boolean(custom.fromTemplate) || hospitalsFromTemplate;

  return {
    routeGuide: custom?.routeGuide?.trim() || templateRouteGuide(route),
    timePlan:
      custom?.timePlan &&
      (Array.isArray(custom.timePlan) ? custom.timePlan.length > 0 : Boolean(custom.timePlan.trim()))
        ? custom.timePlan
        : templateTimePlan(route),
    sightsTips: custom?.sightsTips?.trim() || templateSightsTips(route),
    dining: custom?.dining?.trim() || templateDining(route, hub),
    longStay: custom?.longStay?.trim() || templateLongStay(route),
    hospitals,
    fromTemplate,
  };
}

export function amapUrlForRoute(route: Route): string | null {
  const stop = route.stops[0];
  if (!stop) return null;
  const name = encodeURIComponent(stop.name);
  return `https://uri.amap.com/marker?position=${stop.lng},${stop.lat}&name=${name}`;
}

export function paragraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function asPlanLines(plan: string | string[]): string[] {
  if (Array.isArray(plan)) return plan.map((l) => l.trim()).filter(Boolean);
  return plan
    .split(/\n+/)
    .map((l) => l.replace(/^[-·•]\s*/, "").trim())
    .filter(Boolean);
}
