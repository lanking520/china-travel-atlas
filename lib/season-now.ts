import type { Season } from "@/content/types";

/**
 * China calendar season from month:
 * spring Mar–May, summer Jun–Aug, autumn Sep–Nov, winter Dec–Feb.
 */
export function getSeasonNow(date: Date = new Date()): Season {
  const month = date.getMonth() + 1;
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}
