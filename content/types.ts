export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export type TripType = 'long' | 'short';

/** 跨省大环线 / 边陲城市 / 长居慢住 / 经典走廊等探索主题（非省份互斥） */
export type RouteTheme = 'grand-loop' | 'frontier' | 'long-stay' | 'corridor';

export type Pace = 'slow' | 'fast';

export type RegionId =
  | 'huabei'
  | 'dongbei'
  | 'huadong'
  | 'huazhong'
  | 'huanan'
  | 'xinan'
  | 'xibei'
  | 'qingzang';

export interface Stop {
  id: string;
  name: string;
  days: number;
  pace: Pace;
  lat: number;
  lng: number;
  summary: string;
  tips?: string;
  /** 景点实景/代表图 */
  image?: string;
}

/** 人工整理时的参考来源（官网/知乎/小红书等公开链接，禁止整篇搬运） */
export interface RouteSource {
  title: string;
  url: string;
  kind: 'official' | 'zhihu' | 'xiaohongshu' | 'other';
  note?: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
  /** 可选关联站点 */
  stopId?: string;
  /** photo = 实拍/Commons；generated = 示意生成图 */
  kind?: 'photo' | 'generated';
}

/** 基地附近医院提示（仅供参考，非医疗建议） */
export interface HospitalHint {
  name: string;
  /** 如 三甲 / 可信二甲 */
  level?: string;
  /** 大致区位，如 东单、海拉尔市区 */
  area?: string;
  note?: string;
}

/**
 * 适老实用指南：路线怎么走、时间块、餐饮、长居、就医。
 * 缺省时由 buildPracticalGuide 按站点与枢纽城市启发式生成模板。
 */
export interface PracticalGuide {
  /** 路线指南：节奏、顺序、可跳过项 */
  routeGuide?: string;
  /** 时间规划：按 daysLabel 的日/块安排（字符串或条目列表） */
  timePlan?: string | string[];
  /** 景点补充提示（站点 timeline 之外的深化） */
  sightsTips?: string;
  /** 餐饮：地方特色 + 清淡/适老选项 */
  dining?: string;
  /** 长居建议：片区类型、电梯房/短租、作息 */
  longStay?: string;
  /** 主基地附近三甲/可信二甲（须可核实的真实医院名） */
  hospitals?: HospitalHint[];
  /** true = 由模板生成，医院须标注「请用高德核实」 */
  fromTemplate?: boolean;
}

export interface Route {
  id: string;
  title: string;
  region: RegionId;
  /** 主省份（地图：大区→省→路线） */
  primaryProvince?: import('./provinces').ProvinceId;
  /** 途经省份 */
  provinces?: import('./provinces').ProvinceId[];
  seasons: Season[];
  tripType: TripType;
  fromHome: boolean;
  /** 可选主题：全国大环线、边陲城市等 */
  themes?: RouteTheme[];
  daysLabel: string;
  transport: string;
  budgetLabel: string;
  coverImage: string;
  /** 列表用短摘要 */
  summary: string;
  /**
   * 详情页详细介绍（多段，用 \n\n 分段）。
   * 若缺省，界面会用 summary + 站点信息拼出可读版。
   */
  introduction?: string;
  /** 适合季节说明：为何这些季节、避开什么 */
  seasonGuide?: string;
  /** 旅行须知（门票预约、体力、天气、回京等） */
  notices?: string[];
  /** 景点相册（封面以外的补充图） */
  gallery?: GalleryImage[];
  /** 适老实用指南（路线/时间/餐饮/长居/医院） */
  practicalGuide?: PracticalGuide;
  whyFast?: string;
  stops: Stop[];
  /** 调研关键词，方便子女在小红书/知乎复核 */
  researchKeywords?: string[];
  sources?: RouteSource[];
}

export interface Region {
  id: RegionId;
  name: string;
  blurb: string;
  bases: string[];
}

export interface RouteFilter {
  region?: RegionId;
  season?: Season;
  tripType?: TripType;
  theme?: RouteTheme;
}
