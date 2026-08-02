import {
  bboxFromLonLats,
  createEquirectangularProjection,
  expandBBox,
  type GeoBBox,
} from "./china-geo";

export type { GeoBBox };
export { CHINA_BBOX, createEquirectangularProjection, expandBBox, bboxFromLonLats } from "./china-geo";

export interface LatLng {
  lat: number;
  lng: number;
}

export interface ProjectedPoint {
  x: number;
  y: number;
}

/**
 * Project stops into an SVG viewBox, fitting their lon/lat bbox
 * (with padding). Prefer createEquirectangularProjection for shared basemaps.
 */
export function projectStops(
  stops: LatLng[],
  width: number,
  height: number,
  padding = 24,
): ProjectedPoint[] {
  if (stops.length === 0) return [];
  const bbox = expandBBox(bboxFromLonLats(stops), 0.12);
  const project = createEquirectangularProjection(bbox, width, height, padding);
  return stops.map((stop) => project(stop.lng, stop.lat));
}

/** Build a shared projection for stops + province underlay. */
export function projectionForStops(
  stops: LatLng[],
  width: number,
  height: number,
  padding = 28,
): { project: (lng: number, lat: number) => ProjectedPoint; bbox: GeoBBox } {
  const bbox = expandBBox(bboxFromLonLats(stops, 1.5), 0.18);
  return {
    bbox,
    project: createEquirectangularProjection(bbox, width, height, padding),
  };
}

export function polylinePoints(points: ProjectedPoint[]): string {
  return points.map((p) => `${p.x},${p.y}`).join(" ");
}

/** Truncate stop names for map labels (适老 readable length). */
export function truncateMapLabel(name: string, maxChars = 8): string {
  return name.length > maxChars ? `${name.slice(0, maxChars - 1)}…` : name;
}

/**
 * Extra geo / pixel padding when many stops collapse into a tight bbox
 * (or when local pairs will stack after fitting a long corridor).
 */
export function projectionPaddingForStops(
  stops: LatLng[],
  compact = false,
): { expandFraction: number; paddingPx: number; minSpanDeg: number } {
  if (stops.length === 0) {
    return {
      expandFraction: 0.22,
      paddingPx: compact ? 28 : 36,
      minSpanDeg: 2.2,
    };
  }
  const raw = bboxFromLonLats(stops, 0.01);
  const spanLng = raw.maxLng - raw.minLng;
  const spanLat = raw.maxLat - raw.minLat;
  const tight = spanLng < 1.8 && spanLat < 1.8;
  const many = stops.length >= 5;
  // Local near-duplicates (e.g. 古北+司马台) even inside a long home→dest corridor.
  let nearPairs = 0;
  let midPairs = 0;
  for (let i = 0; i < stops.length; i++) {
    for (let j = i + 1; j < stops.length; j++) {
      const dLng = stops[i].lng - stops[j].lng;
      const dLat = stops[i].lat - stops[j].lat;
      const d = Math.hypot(dLng, dLat);
      if (d < 0.08) nearPairs++;
      else if (d < 1.2) midPairs++;
    }
  }
  // Short day-trip corridors: avoid forcing a 2°+ frame that collapses stops.
  // Keep a modest floor so single-stop / tiny spans still have context.
  let minSpanDeg = 2.2;
  if (nearPairs > 0) minSpanDeg = compact ? 1.15 : 1.05;
  else if (tight && stops.length <= 3) minSpanDeg = compact ? 1.35 : 1.2;
  else if (many || midPairs >= 2) minSpanDeg = 2.4;

  const expandFraction = tight
    ? compact
      ? 0.62
      : 0.55
    : nearPairs > 0
      ? compact
        ? 0.4
        : 0.36
      : many || midPairs >= 2
        ? compact
          ? 0.4
          : 0.38
        : compact
          ? 0.24
          : 0.22;
  const paddingPx = tight
    ? compact
      ? 52
      : 60
    : nearPairs > 0
      ? compact
        ? 44
        : 52
      : many || midPairs >= 2
        ? compact
          ? 44
          : 52
        : compact
          ? 32
          : 40;
  return { expandFraction, paddingPx, minSpanDeg };
}

export type MapLabelMode = "text" | "number" | "hidden";

export interface DeconflictedStop {
  /** True projected lon/lat → SVG (roads stay here). */
  true: ProjectedPoint;
  /** Icon center after orbit offset. */
  marker: ProjectedPoint;
  /** Middle-anchored name label position. */
  label: ProjectedPoint;
  /** Optional pace/sub label (below marker when shown). */
  subLabel: ProjectedPoint | null;
  /** Draw a callout from marker to name label when they diverge. */
  leader: boolean;
  /** Marker was moved off the true road endpoint. */
  markerOffset: boolean;
  /** How the on-map label is rendered. */
  labelMode: MapLabelMode;
  /** 1-based index when labelMode is "number". */
  number: number | null;
}

export interface DeconflictLegendItem {
  index: number;
  /** Index into the input points / labels array. */
  stopIndex: number;
  name: string;
}

export interface DeconflictLayoutResult {
  stops: DeconflictedStop[];
  /** Numbered stops → render a list beside/under the map. */
  legend: DeconflictLegendItem[];
  /**
   * Compact province cards: when secondary names are suppressed,
   * show primary name + remaining count under the map.
   */
  compactSummary: string | null;
}

export interface DeconflictStopsOptions {
  width: number;
  height: number;
  compact?: boolean;
  /** Min screen distance between markers before orbiting (px). */
  markerMinSep?: number;
  /** Extra padding inside the viewBox for labels. */
  pad?: number;
  labels?: string[];
  /** Show secondary line under marker (e.g. 慢游). */
  showSubLabels?: boolean;
  /** Extra AABB obstacles (e.g. road km chips), center + size. */
  obstacles?: { x: number; y: number; w: number; h: number }[];
}

function dist(a: ProjectedPoint, b: ProjectedPoint): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function findRoot(parent: number[], i: number): number {
  while (parent[i] !== i) {
    parent[i] = parent[parent[i]];
    i = parent[i];
  }
  return i;
}

function unionClusters(
  points: ProjectedPoint[],
  threshold: number,
): Map<number, number[]> {
  const n = points.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (dist(points[i], points[j]) < threshold) {
        const a = findRoot(parent, i);
        const b = findRoot(parent, j);
        if (a !== b) parent[a] = b;
      }
    }
  }
  const clusters = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const root = findRoot(parent, i);
    const list = clusters.get(root);
    if (list) list.push(i);
    else clusters.set(root, [i]);
  }
  return clusters;
}

/** Orbit radius so chord between neighbors ≈ markerMinSep (with air). */
function orbitRadiusForCluster(
  count: number,
  markerMinSep: number,
  compact: boolean,
): number {
  if (count < 2) return 0;
  const chord = markerMinSep * (count >= 3 ? 1.15 : 1.05);
  const geometric = chord / (2 * Math.sin(Math.PI / count));
  const floor = (compact ? 20 : 26) + count * (compact ? 7 : 9);
  const boosted =
    count >= 3
      ? Math.max(geometric, floor, markerMinSep * (0.7 + count * 0.18))
      : Math.max(geometric, floor * 0.85);
  return boosted;
}

/**
 * Orbit-offset markers that collapse on screen, then nudge name labels
 * so they stay readable. Roads should keep using `true` coordinates.
 *
 * Deterministic: clusters union by proximity, members sorted by index,
 * placed evenly on a circle starting from top (−π/2).
 *
 * Dense packs (≥4 in a screen neighborhood, or compact cards with many
 * stops) switch to numbered markers + a legend instead of stacked names.
 */
export function deconflictStopLayout(
  points: ProjectedPoint[],
  options: DeconflictStopsOptions,
): DeconflictLayoutResult {
  const n = points.length;
  if (n === 0) {
    return { stops: [], legend: [], compactSummary: null };
  }

  const compact = Boolean(options.compact);
  // Icons are ~24–28px across; keep clear air between centers for 适老.
  // Compact province cards are CSS-scaled down, so use a larger viewBox sep.
  const markerMinSep = options.markerMinSep ?? (compact ? 46 : 48);
  const pad = options.pad ?? (compact ? 12 : 16);
  const fontSize = compact ? 12 : 14;
  // CJK glyphs are roughly full em-width; pad for stroke halo.
  const charW = fontSize * 1.12;
  const labelH = fontSize + 10;
  const nameGap = compact ? 22 : 28;
  const subGap = 34;
  const showSub = Boolean(options.showSubLabels);
  const labels = options.labels ?? points.map(() => "");
  // Slightly larger than minSep so "almost touching" pairs still orbit.
  const clusterThreshold = markerMinSep * 1.2;
  const denseRadius = compact ? 100 : 130;

  const clusters = unionClusters(points, clusterThreshold);
  const denseRegions = unionClusters(points, denseRadius);

  const markers: ProjectedPoint[] = points.map((p) => ({ x: p.x, y: p.y }));
  const markerOffset = Array.from({ length: n }, () => false);

  for (const members of clusters.values()) {
    if (members.length < 2) continue;
    members.sort((a, b) => a - b);
    let cx = 0;
    let cy = 0;
    for (const i of members) {
      cx += points[i].x;
      cy += points[i].y;
    }
    cx /= members.length;
    cy /= members.length;
    const orbitR = orbitRadiusForCluster(
      members.length,
      markerMinSep,
      compact,
    );
    for (let k = 0; k < members.length; k++) {
      const i = members[k];
      const angle = -Math.PI / 2 + (2 * Math.PI * k) / members.length;
      markers[i] = {
        x: cx + orbitR * Math.cos(angle),
        y: cy + orbitR * Math.sin(angle),
      };
      markerOffset[i] = true;
    }
  }

  // Second pass: push remaining near-collisions apart (cross-cluster).
  // Use a slightly stricter target so post-orbit pairs keep readable air.
  const repelSep = markerMinSep * 1.12;
  for (let iter = 0; iter < 16; iter++) {
    let moved = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const d = dist(markers[i], markers[j]);
        if (d < 1e-6) {
          markers[i] = {
            x: markers[i].x - repelSep * 0.5,
            y: markers[i].y,
          };
          markers[j] = {
            x: markers[j].x + repelSep * 0.5,
            y: markers[j].y,
          };
          markerOffset[i] = true;
          markerOffset[j] = true;
          moved = true;
          continue;
        }
        if (d >= repelSep) continue;
        const push = (repelSep - d) / 2;
        const ux = (markers[j].x - markers[i].x) / d;
        const uy = (markers[j].y - markers[i].y) / d;
        markers[i] = {
          x: markers[i].x - ux * push,
          y: markers[i].y - uy * push,
        };
        markers[j] = {
          x: markers[j].x + ux * push,
          y: markers[j].y + uy * push,
        };
        markerOffset[i] = true;
        markerOffset[j] = true;
        moved = true;
      }
    }
    if (!moved) break;
  }

  // Clamp markers into the drawable pad so orbit doesn't leave the viewBox.
  const markerClampPad = pad + (compact ? 14 : 16);
  for (let i = 0; i < n; i++) {
    const nx = Math.min(
      options.width - markerClampPad,
      Math.max(markerClampPad, markers[i].x),
    );
    const ny = Math.min(
      options.height - markerClampPad,
      Math.max(markerClampPad, markers[i].y),
    );
    if (nx !== markers[i].x || ny !== markers[i].y) {
      markers[i] = { x: nx, y: ny };
      markerOffset[i] = true;
    }
  }

  // —— Label strategy ——
  const useNumbered = new Set<number>();
  let compactSummary: string | null = null;

  const maxDense = Math.max(
    0,
    ...[...denseRegions.values()].map((m) => m.length),
  );

  if (compact) {
    // Province cards: prefer numbers / primary-only over stacked CJK.
    if (n >= 4 || maxDense >= 3) {
      for (let i = 0; i < n; i++) useNumbered.add(i);
    } else if (n >= 3 && [...clusters.values()].some((m) => m.length >= 2)) {
      for (let i = 0; i < n; i++) useNumbered.add(i);
    } else if (n >= 3) {
      // Show primary only + count (no numbers clutter on sparse cards).
      compactSummary = `${labels[0] || "站点"} · 共${n}站`;
    }
  } else {
    // Full maps: number only true dense packs (≥4 in a neighborhood).
    for (const members of denseRegions.values()) {
      if (members.length >= 4) {
        for (const i of members) useNumbered.add(i);
      }
    }
  }

  const legend: DeconflictLegendItem[] = [];
  const numberOf = new Map<number, number>();
  if (useNumbered.size > 0) {
    const ordered = [...useNumbered].sort((a, b) => a - b);
    ordered.forEach((i, idx) => {
      const num = idx + 1;
      numberOf.set(i, num);
      legend.push({
        index: num,
        stopIndex: i,
        name: labels[i] || `站点${num}`,
      });
    });

    // Numbered packs still need air between icons (labels are gone, but
    // digits become unreadable when circles kiss). Compact cards are
    // CSS-shrunk, so push a bit harder.
    const numberedSep = markerMinSep * (compact ? 1.5 : 1.35);
    const numbered = ordered;
    for (let iter = 0; iter < 12; iter++) {
      let moved = false;
      for (let a = 0; a < numbered.length; a++) {
        for (let b = a + 1; b < numbered.length; b++) {
          const i = numbered[a];
          const j = numbered[b];
          const d = dist(markers[i], markers[j]);
          if (d >= numberedSep || d < 1e-6) continue;
          const push = (numberedSep - d) / 2;
          const ux = (markers[j].x - markers[i].x) / d;
          const uy = (markers[j].y - markers[i].y) / d;
          markers[i] = {
            x: markers[i].x - ux * push,
            y: markers[i].y - uy * push,
          };
          markers[j] = {
            x: markers[j].x + ux * push,
            y: markers[j].y + uy * push,
          };
          markerOffset[i] = true;
          markerOffset[j] = true;
          moved = true;
        }
      }
      if (!moved) break;
    }
    // Re-clamp after numbered push.
    for (const i of numbered) {
      const nx = Math.min(
        options.width - markerClampPad,
        Math.max(markerClampPad, markers[i].x),
      );
      const ny = Math.min(
        options.height - markerClampPad,
        Math.max(markerClampPad, markers[i].y),
      );
      if (nx !== markers[i].x || ny !== markers[i].y) {
        markers[i] = { x: nx, y: ny };
        markerOffset[i] = true;
      }
    }
  }

  type Box = { x: number; y: number; w: number; h: number; cx: number; cy: number };

  function labelBox(cx: number, cy: number, text: string): Box {
    const w = Math.max(charW + 8, text.length * charW + 10);
    const h = labelH;
    return { x: cx - w / 2, y: cy - h * 0.72, w, h, cx, cy };
  }

  function overlaps(a: Box, b: Box, gap = 6): boolean {
    return !(
      a.x + a.w + gap < b.x ||
      b.x + b.w + gap < a.x ||
      a.y + a.h + gap < b.y ||
      b.y + b.h + gap < a.y
    );
  }

  function clampLabel(cx: number, cy: number, text: string): ProjectedPoint {
    const w = Math.max(charW + 8, text.length * charW + 10);
    return {
      x: Math.min(options.width - pad - w / 2, Math.max(pad + w / 2, cx)),
      y: Math.min(options.height - pad, Math.max(pad + labelH, cy)),
    };
  }

  // Wider nudges for 适老 font sizes / Chinese label boxes.
  const nudges: [number, number][] = [
    [0, 0],
    [0, -22],
    [0, -42],
    [28, -14],
    [-28, -14],
    [36, 10],
    [-36, 10],
    [0, 28],
    [48, -28],
    [-48, -28],
    [0, -60],
    [56, 0],
    [-56, 0],
    [40, 24],
    [-40, 24],
    [0, 44],
    [64, -16],
    [-64, -16],
  ];

  const markerR = compact ? 14 : 17;
  const markerObstacles: Box[] = markers.map((m) => ({
    x: m.x - markerR,
    y: m.y - markerR,
    w: markerR * 2,
    h: markerR * 2,
    cx: m.x,
    cy: m.y,
  }));
  const extraObstacles: Box[] = (options.obstacles ?? []).map((o) => ({
    x: o.x - o.w / 2,
    y: o.y - o.h / 2,
    w: o.w,
    h: o.h,
    cx: o.x,
    cy: o.y,
  }));

  const labelPos: ProjectedPoint[] = [];
  const leaders: boolean[] = [];
  const labelModes: MapLabelMode[] = [];
  const placedLabels: Box[] = [];

  for (let i = 0; i < n; i++) {
    if (useNumbered.has(i)) {
      // Number sits inside the marker; no external name label.
      labelPos.push({ x: markers[i].x, y: markers[i].y + 1 });
      leaders[i] = false;
      labelModes[i] = "number";
      continue;
    }

    if (compactSummary && i > 0) {
      labelPos.push({ x: markers[i].x, y: markers[i].y - nameGap });
      leaders[i] = false;
      labelModes[i] = "hidden";
      continue;
    }

    const text = labels[i] || "";
    // Prefer the side away from the true road endpoint when orbited,
    // so bottom-orbit markers (司马台/兵马俑) label below instead of
    // stacking between the orbit pair.
    let preferDy = -nameGap;
    let preferDx = 0;
    if (markerOffset[i]) {
      const vx = markers[i].x - points[i].x;
      const vy = markers[i].y - points[i].y;
      if (Math.abs(vy) >= Math.abs(vx)) {
        preferDy = vy >= 0 ? nameGap + 4 : -nameGap;
        preferDx = 0;
      } else {
        preferDy = -6;
        preferDx = vx >= 0 ? nameGap + 8 : -(nameGap + 8);
      }
    }
    const seatX = markers[i].x + preferDx;
    const seatY = markers[i].y + preferDy;

    let best: ProjectedPoint | null = null;
    let bestHits = Infinity;

    for (const [dx, dy] of nudges) {
      const cand = clampLabel(seatX + dx, seatY + dy, text);
      const box = labelBox(cand.x, cand.y, text);
      let hits = 0;
      for (let j = 0; j < n; j++) {
        if (j === i) continue;
        if (overlaps(box, markerObstacles[j])) hits++;
      }
      for (const p of extraObstacles) {
        if (overlaps(box, p)) hits++;
      }
      for (const p of placedLabels) {
        if (overlaps(box, p)) hits++;
      }
      if (hits === 0) {
        best = cand;
        bestHits = 0;
        break;
      }
      if (hits < bestHits) {
        bestHits = hits;
        best = cand;
      }
    }

    const chosen = best ?? clampLabel(seatX, seatY, text);
    labelPos.push(chosen);
    placedLabels.push(labelBox(chosen.x, chosen.y, text));
    labelModes[i] = "text";

    const natural = { x: seatX, y: seatY };
    leaders[i] =
      dist(chosen, natural) > 12 || Math.abs(chosen.x - markers[i].x) > 12;
  }

  const subLabel: (ProjectedPoint | null)[] = points.map(() => null);
  if (showSub) {
    for (let i = 0; i < n; i++) {
      if (markerOffset[i] || labelModes[i] !== "text") {
        subLabel[i] = null;
        continue;
      }
      // Hide pace chips when neighbors are close — they stack under icons.
      let neighborNear = false;
      for (let j = 0; j < n; j++) {
        if (j === i) continue;
        if (dist(markers[i], markers[j]) < markerMinSep * 2.2) {
          neighborNear = true;
          break;
        }
      }
      if (neighborNear) {
        subLabel[i] = null;
        continue;
      }
      const cand = {
        x: markers[i].x,
        y: markers[i].y + subGap,
      };
      const box = labelBox(cand.x, cand.y, "慢游");
      let hit = false;
      for (let j = 0; j < n; j++) {
        if (j === i) continue;
        if (overlaps(box, markerObstacles[j], 4)) {
          hit = true;
          break;
        }
      }
      if (!hit) {
        for (const p of [...extraObstacles, ...placedLabels]) {
          if (overlaps(box, p, 4)) {
            hit = true;
            break;
          }
        }
      }
      if (!hit) {
        subLabel[i] = cand;
        placedLabels.push(box);
      }
    }
  }

  return {
    legend,
    compactSummary,
    stops: points.map((p, i) => ({
      true: { x: p.x, y: p.y },
      marker: markers[i],
      label: labelPos[i],
      subLabel: subLabel[i],
      leader: leaders[i],
      markerOffset: markerOffset[i],
      labelMode: labelModes[i],
      number: numberOf.get(i) ?? null,
    })),
  };
}
