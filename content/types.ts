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
