import {
  getProvinceById,
  getRegionById,
  type Route,
} from "@/lib/explore-catalog";
import {
  REGION_SHORT,
  SEASON_LABELS,
  THEME_LABELS,
  TRIP_TYPE_LABELS,
} from "@/lib/labels";

/** Normalize for Chinese/English keyword match (casefold + collapse space). */
export function normalizeSearchQuery(q: string): string {
  return q.trim().toLowerCase().replace(/\s+/g, "");
}

function haystackForRoute(route: Route): string {
  const provinceNames = [
    route.primaryProvince,
    ...(route.provinces ?? []),
  ]
    .filter(Boolean)
    .map((id) => getProvinceById(id!)?.name ?? id)
    .join(" ");

  const themeLabels = (route.themes ?? [])
    .map((t) => THEME_LABELS[t] ?? t)
    .join(" ");

  const seasonLabels = route.seasons
    .map((s) => `${SEASON_LABELS[s]}季`)
    .join(" ");

  const stopBits = route.stops
    .flatMap((s) => [s.name, s.summary, s.tips ?? "", s.id])
    .join(" ");

  const region =
    getRegionById(route.region)?.name ?? REGION_SHORT[route.region] ?? "";

  const compositionBits =
    route.compositionKind === "leg"
      ? "短线 leg"
      : route.compositionKind === "compose"
        ? "长线 compose"
        : route.compositionKind === "base"
          ? "长居 base"
          : "";

  const parts = [
    route.id,
    route.title,
    route.summary,
    route.daysLabel,
    route.budgetLabel,
    route.transport,
    provinceNames,
    themeLabels,
    ...(route.themes ?? []),
    seasonLabels,
    TRIP_TYPE_LABELS[route.tripType],
    compositionBits,
    route.compositionKind ?? "",
    ...(route.legIds ?? []),
    region,
    route.region,
    stopBits,
    ...(route.researchKeywords ?? []),
    route.fromHome ? "从北京 北京家出发 短途" : "",
    route.fromZhengzhouHome ? "从郑州 郑州家出发 岳父岳母 中原" : "",
  ];

  return parts.join(" ").toLowerCase().replace(/\s+/g, " ");
}

/**
 * Client-side catalog search: title, summary, themes, provinces, stops, ids, keywords.
 * Empty query → [].
 */
export function searchRoutes(catalog: Route[], query: string): Route[] {
  const q = normalizeSearchQuery(query);
  if (!q) return [];

  const tokens = q.split(/[,，、|]+/).filter(Boolean);
  const needles = tokens.length > 0 ? tokens : [q];

  const scored: { route: Route; score: number }[] = [];

  for (const route of catalog) {
    const hay = haystackForRoute(route);
    const hayCompact = hay.replace(/\s+/g, "");

    let hit = true;
    let score = 0;
    for (const needle of needles) {
      const n = needle.replace(/\s+/g, "");
      if (!n) continue;
      const title = route.title.toLowerCase().replace(/\s+/g, "");
      if (title.includes(n)) {
        score += 100;
      } else if (hayCompact.includes(n) || hay.includes(needle)) {
        score += 10;
      } else {
        hit = false;
        break;
      }
    }
    if (hit && score > 0) {
      // Composition IA: when both a leg and a compose title-hit the same landmark,
      // prefer the leg as the destination card. Keyword-only compose hits stay (+10).
      if (route.compositionKind === "compose" && score >= 100) score -= 35;
      scored.push({ route, score });
    }
  }

  scored.sort(
    (a, b) =>
      b.score - a.score || a.route.title.localeCompare(b.route.title, "zh"),
  );
  return scored.map((s) => s.route);
}
