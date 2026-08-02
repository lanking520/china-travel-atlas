import type { Pace, RegionId, Season, TripType } from "@/content/types";

export const SEASON_LABELS: Record<Season, string> = {
  spring: "春",
  summer: "夏",
  autumn: "秋",
  winter: "冬",
};

export const SEASON_FULL_LABELS: Record<Season, string> = {
  spring: "春季",
  summer: "夏季",
  autumn: "秋季",
  winter: "冬季",
};

export const TRIP_TYPE_LABELS: Record<TripType, string> = {
  long: "长旅行",
  short: "短途",
};

export const PACE_LABELS: Record<Pace, string> = {
  slow: "慢游",
  fast: "快览",
};

export const REGION_SHORT: Record<RegionId, string> = {
  huabei: "华北",
  dongbei: "东北",
  huadong: "华东",
  huazhong: "华中",
  huanan: "华南",
  xinan: "西南",
  xibei: "西北",
  qingzang: "青藏",
};
