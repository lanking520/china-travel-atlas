export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export type TripType = 'long' | 'short';

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
  image?: string;
}

/** 人工整理时的参考来源（官网/知乎/小红书等公开链接，禁止整篇搬运） */
export interface RouteSource {
  title: string;
  url: string;
  kind: 'official' | 'zhihu' | 'xiaohongshu' | 'other';
  note?: string;
}

export interface Route {
  id: string;
  title: string;
  region: RegionId;
  seasons: Season[];
  tripType: TripType;
  fromHome: boolean;
  daysLabel: string;
  transport: string;
  budgetLabel: string;
  coverImage: string;
  summary: string;
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
}
