#!/usr/bin/env node
/**
 * Destination / product IA overlap screen — catalog-scoped.
 *
 * Catches same-place / same-corridor product collisions that text-paste
 * audits (guide-overlap-audit.mjs) miss: different wording, same user intent.
 *
 * Run: node research/scripts/destination-overlap-screen.mjs
 * See: research/audits/destination-overlap-screen-20260802.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const catalog = JSON.parse(read('lib/generated/explore-routes.json'));
const byId = new Map(catalog.map((r) => [r.id, r]));

/** Primary place / corridor tokens (aliases). Prefer title hits. */
const LANDMARKS = [
  ['沙巴', 'sapa', 'sa pa'],
  ['河口'],
  ['平遥'],
  ['龙门'],
  ['西湖'],
  ['瘦西湖'],
  ['稻城', '亚丁'],
  ['丽江'],
  ['大理'],
  ['洱海'],
  ['拉萨'],
  ['林芝'],
  ['敦煌', '莫高窟'],
  ['张掖', '丹霞'],
  ['张家界'],
  ['黄山'],
  ['婺源'],
  ['桂林'],
  ['阳朔', '漓江'],
  ['赛里木'],
  ['喀纳斯'],
  ['吐鲁番'],
  ['泰山'],
  ['青岛'],
  ['崂山'],
  ['沙坡头'],
  ['三亚'],
  ['海口'],
  ['西安', '兵马俑'],
  ['庐山'],
  ['北戴河'],
  ['洛阳'],
  ['开封'],
  ['少林'],
  ['青海湖'],
  ['西双版纳', '景洪'],
  ['凤凰'],
  ['镇远'],
  ['梵净'],
  ['荔波'],
  ['九寨'],
  ['黄龙'],
  ['峨眉'],
  ['青城'],
  ['都江堰'],
  ['香格里拉'],
  ['鼓浪屿', '厦门'],
  ['武夷'],
  ['乌镇', '西塘'],
  ['苏州', '拙政园'],
  ['承德', '避暑山庄'],
  ['慕田峪', '八达岭'],
  ['呼伦贝尔', '海拉尔'],
  ['长白山'],
  ['哈尔滨'],
  ['景德镇'],
  ['武当'],
  ['神农架'],
  ['恩施'],
  ['重庆'],
  ['成都'],
  ['宽窄巷'],
  ['黄果树'],
  ['喀什'],
  ['库车'],
  ['伊犁'],
  ['西宁'],
  ['烟台'],
  ['九华'],
  ['银滩', '北海'],
];

/** Known retired corridor / monolith ids that must stay out of catalog. */
const RETIRED_IDS = [
  'yunnan-hekou-sapa-corridor',
  'qingzang-railway-slow',
  'qingzang-g318-lhasa-nyingchi',
  'yunnan-dali-lijiang',
  'xibei-xinjiang-north',
  'xibei-xinjiang-south',
  'huadong-suhan-slow',
  'huabei-shandong-coast',
  'national-grand-loop',
  'national-silk-road',
  'national-qingzang',
  'national-chuandian',
  'national-jinghu',
];

const STOPWORDS = new Set([
  '慢廊',
  '慢串',
  '慢环',
  '慢住',
  '慢游',
  '慢线',
  '短线',
  '长线',
  '组合',
  '廊道',
  '边境',
  '跨境',
  '父母',
  '适老',
  '浅段',
  '浅住',
  '浅尝',
  '浅览',
  '浅挂',
  '浅游',
  '枢纽',
  '适应',
  '高原',
  '电梯',
  '包车',
  '自驾',
  '高铁',
  '航班',
  '北京',
  '结束',
  '返京',
  '可选',
  '独立',
  '嵌入',
  '本卡',
  '景点',
  '正文',
  '三日',
  '五日',
  '两周',
  '一个月',
  '县域',
  '日归',
]);

function norm(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/\s+/g, '');
}

function titleOf(r) {
  return norm(r.title);
}

function hayOf(r) {
  return norm(
    [
      r.id,
      r.title,
      r.summary,
      ...(r.researchKeywords || []),
      ...(r.stops || []).map((s) => s.name),
    ].join(' '),
  );
}

function kindOf(r) {
  return r.compositionKind || '(unset)';
}

function rowBrief(r) {
  return {
    id: r.id,
    title: r.title,
    kind: kindOf(r),
    tripType: r.tripType,
    daysLabel: r.daysLabel,
  };
}

function titleHitsAlias(title, alias) {
  const t = title || '';
  const a = alias;
  if (!a) return false;
  // Latin / mixed
  if (/[a-z]/i.test(a)) return norm(t).includes(norm(a));
  // Avoid 瘦西湖 matching 西湖, 丹霞山 matching 丹霞-as-张掖, etc.
  let from = 0;
  while (from <= t.length) {
    const i = t.indexOf(a, from);
    if (i < 0) return false;
    const before = i > 0 ? t[i - 1] : '';
    const after = i + a.length < t.length ? t[i + a.length] : '';
    const badBefore = /[\u4e00-\u9fff]/.test(before);
    // allow after to be punctuation / · / end; block if glued into longer place name start
    // (惠州西湖 is OK — 西湖 is the attraction; 瘦西湖 is not)
    if (a === '西湖' && before === '瘦') {
      from = i + 1;
      continue;
    }
    if (!badBefore || before === '州' || before === '南' || before === '州') {
      // "杭州西湖" / "惠州西湖" OK; leading city char immediately before is fine when
      // the match is a known attraction suffix. Block only known false prefixes.
      return true;
    }
    // If previous char is part of a longer toponym glued on, skip
    if (badBefore) {
      from = i + 1;
      continue;
    }
    return true;
  }
  return false;
}

function hitsForAliases(aliases, { titleOnly = true } = {}) {
  return catalog.filter((r) => {
    const t = r.title || '';
    const h = hayOf(r);
    return aliases.some((a) => {
      if (titleOnly) return titleHitsAlias(t, a);
      return titleHitsAlias(t, a) || norm(h).includes(norm(a));
    });
  });
}

// ── 1) Same primary place tokens across 2+ catalog cards ───────────────────
const placeClusters = [];
for (const aliases of LANDMARKS) {
  const hits = hitsForAliases(aliases, { titleOnly: true });
  if (hits.length < 2) continue;
  const kinds = new Set(hits.map(kindOf));
  const hasLegCompose =
    hits.some((r) => kindOf(r) === 'leg' || r.tripType === 'short') &&
    hits.some((r) => kindOf(r) === 'compose');
  const nearDupTitles =
    hits.length >= 2 &&
    hits.some((a, i) =>
      hits.slice(i + 1).some((b) => {
        const ta = titleOf(a).replace(/[·\-—|]/g, '');
        const tb = titleOf(b).replace(/[·\-—|]/g, '');
        // share first 4+ han chars after stripping punctuation noise
        const aHead = (a.title.match(/[\u4e00-\u9fff]{2,}/g) || [])[0] || '';
        const bHead = (b.title.match(/[\u4e00-\u9fff]{2,}/g) || [])[0] || '';
        return aHead && aHead === bHead && ta !== tb;
      }),
    );

  const place = aliases[0];
  const nonCompose = hits.filter((r) => kindOf(r) !== 'compose');
  const legs = hits.filter((r) => kindOf(r) === 'leg');
  const unset = hits.filter((r) => kindOf(r) === '(unset)');
  const composes = hits.filter((r) => kindOf(r) === 'compose');
  const bases = hits.filter((r) => kindOf(r) === 'base');

  // Default: intentional compose listing places in the title is MED, not a paste bug.
  let severity = 'LOW';
  if (hasLegCompose) severity = 'MED';
  if (nonCompose.length >= 2) severity = 'MED';

  // HIGH — peer destination cards (2+ non-compose) sharing title head / near-dup product
  if (nonCompose.length >= 2 && nearDupTitles) severity = 'HIGH';

  // HIGH — same place head on 2+ unset/leg cards (true catalog twins), ignoring compose
  const peerDest = nonCompose.filter((r) => {
    const head = r.title.split(/[·\-—|]/)[0] || '';
    return head.includes(place);
  });
  if (peerDest.length >= 2) severity = 'HIGH';
  // Soften when peer cards already use distinct duration/job lens words after ·
  if (peerDest.length === 2) {
    const tails = peerDest.map((r) => (r.title.split(/[·\-—|]/)[1] || '').trim());
    const lens = /(浅段|浅住|浅线|加环线|两周|一周|适应锚|慢居|日归|县域|看雪|夏日|栈道|索道)/;
    if (tails[0] && tails[1] && tails[0] !== tails[1] && lens.test(tails[0]) && lens.test(tails[1])) {
      severity = 'MED';
    }
  }

  // HIGH — Sapa-pattern: leg title-heads the place AND compose arrow-title also brands it
  // without a clear「组合」lens word (search ranks both as destination peers).
  const legHeadsPlace = legs.some((r) => (r.title.split(/[·\-—|]/)[0] || '').includes(place));
  const arrowComposeBrands = composes.some(
    (c) =>
      /[→➡]/.test(c.title) &&
      c.title.includes(place) &&
      !/组合|串线卡/.test(c.title),
  );
  if (legHeadsPlace && arrowComposeBrands) severity = 'HIGH';

  // Crowded hub note stays MED unless peerDest already elevated
  if (hits.length >= 4 && severity === 'LOW') severity = 'MED';

  placeClusters.push({
    token: place,
    aliases,
    severity,
    count: hits.length,
    kinds: [...kinds],
    peerDestCount: peerDest.length,
    composeCount: composes.length,
    baseCount: bases.length,
    hits: hits.map(rowBrief),
  });
}

// ── 2) Compose whose leg titles heavily overlap compose title ──────────────
const composeLegOverlap = [];
for (const c of catalog.filter((r) => kindOf(r) === 'compose')) {
  const legs = (c.legIds || []).map((id) => byId.get(id)).filter(Boolean);
  if (!legs.length) {
    composeLegOverlap.push({
      id: c.id,
      title: c.title,
      severity: 'MED',
      issue: 'compose missing resolvable legIds in catalog',
      legs: c.legIds || [],
    });
    continue;
  }
  const composePlaces = (c.title.match(/[\u4e00-\u9fff]{2,4}/g) || []).filter(
    (t) => !STOPWORDS.has(t),
  );
  const shared = [];
  for (const t of [...new Set(composePlaces)]) {
    const hitLegs = legs.filter((l) => l.title.includes(t));
    if (hitLegs.length) shared.push({ token: t, legIds: hitLegs.map((l) => l.id) });
  }
  const ratio = composePlaces.length ? shared.length / composePlaces.length : 0;
  // Compose titles naming embedded places is the IA contract → MED signal only.
  // HIGH only for arrow-corridor titles that mirror live leg title-heads (Sapa pattern).
  let severity = 'LOW';
  if (shared.length >= 2 && ratio >= 0.5) severity = 'MED';
  const legHeadTokens = legs
    .map((l) => (l.title.split(/[·\-—|]/)[0] || '').trim())
    .filter((t) => t.length >= 2);
  const arrowMirrorsLegs =
    /[→➡]/.test(c.title) &&
    legHeadTokens.length >= 2 &&
    legHeadTokens.every((t) => c.title.includes(t)) &&
    !/组合|串线卡/.test(c.title);
  if (arrowMirrorsLegs) severity = 'HIGH';
  composeLegOverlap.push({
    id: c.id,
    title: c.title,
    severity,
    shared,
    ratio: Math.round(ratio * 100) / 100,
    legs: legs.map(rowBrief),
  });
}

// ── 3) Pairs: short/leg + compose sharing landmark keyword ─────────────────
const legComposePairs = [];
for (const aliases of LANDMARKS) {
  const place = aliases[0];
  const hits = hitsForAliases(aliases, { titleOnly: true });
  const legs = hits.filter(
    (r) => kindOf(r) === 'leg' || (kindOf(r) === '(unset)' && r.tripType === 'short'),
  );
  const composes = hits.filter((r) => kindOf(r) === 'compose');
  if (!legs.length || !composes.length) continue;
  for (const leg of legs) {
    for (const compose of composes) {
      const embedded = (compose.legIds || []).includes(leg.id);
      let severity = embedded ? 'MED' : 'LOW';
      // HIGH only when leg title-heads the place AND compose arrow-brands it without「组合」
      const legHeads = (leg.title.split(/[·\-—|]/)[0] || '').includes(place);
      const composeArrow =
        /[→➡]/.test(compose.title) &&
        compose.title.includes(place) &&
        !/组合|串线卡/.test(compose.title);
      if (embedded && legHeads && composeArrow) severity = 'HIGH';
      legComposePairs.push({
        token: place,
        severity,
        embedded,
        leg: rowBrief(leg),
        compose: rowBrief(compose),
      });
    }
  }
}

// ── 4) Retired / orphan corridor ids still in catalog ──────────────────────
const retiredLive = RETIRED_IDS.filter((id) => byId.has(id)).map((id) => rowBrief(byId.get(id)));

// Also: id patterns that look like pre-compose monoliths still live alongside compose-*
const monolithSuspects = catalog.filter((r) => {
  if (kindOf(r) === 'compose' || kindOf(r) === 'base') return false;
  if (!/(corridor|grand-loop|g318|national-)/.test(r.id)) return false;
  return true;
}).map(rowBrief);

// Near-duplicate title pairs (same head place, both non-compose)
const nearDupPairs = [];
for (let i = 0; i < catalog.length; i++) {
  for (let j = i + 1; j < catalog.length; j++) {
    const a = catalog[i];
    const b = catalog[j];
    if (kindOf(a) === 'compose' || kindOf(b) === 'compose') continue;
    const aPlaces = (a.title.match(/[\u4e00-\u9fff]{2,3}/g) || []).filter((t) => !STOPWORDS.has(t));
    const bPlaces = (b.title.match(/[\u4e00-\u9fff]{2,3}/g) || []).filter((t) => !STOPWORDS.has(t));
    const shared = aPlaces.filter((t) => bPlaces.includes(t));
    if (shared.length < 1) continue;
    const aHead = a.title.split(/[·\-—|]/)[0].trim();
    const bHead = b.title.split(/[·\-—|]/)[0].trim();
    if (aHead !== bHead) continue;
    // same title head before ·
    // Same title head before · — likely peer destination cards
    let severity = 'HIGH';
    // Soften when one is clearly longstay/base-shaped and the other is a short day card
    const aLs = /longstay|慢居|一个月|月租/.test(`${a.id} ${a.title} ${a.daysLabel}`);
    const bLs = /longstay|慢居|一个月|月租/.test(`${b.id} ${b.title} ${b.daysLabel}`);
    const aShort = a.tripType === 'short' || /日归|两日|三日|当天/.test(`${a.title} ${a.daysLabel}`);
    const bShort = b.tripType === 'short' || /日归|两日|三日|当天/.test(`${b.title} ${b.daysLabel}`);
    if ((aLs && bShort) || (bLs && aShort)) severity = 'MED';
    // Soften intentional duration / job splits with distinct lens words after ·
    const aTail = (a.title.split(/[·\-—|]/)[1] || '').trim();
    const bTail = (b.title.split(/[·\-—|]/)[1] || '').trim();
    const lens =
      /(浅段|浅住|浅线|加环线|两周|一周|适应锚|组合用|索道|栈道|县域|看雪|夏日)/;
    if (aTail && bTail && aTail !== bTail && lens.test(aTail) && lens.test(bTail)) {
      severity = 'MED';
    }
    nearDupPairs.push({
      token: shared[0],
      severity,
      a: rowBrief(a),
      b: rowBrief(b),
    });
  }
}

function bySev(list) {
  const rank = { HIGH: 0, MED: 1, LOW: 2 };
  return [...list].sort((a, b) => (rank[a.severity] ?? 9) - (rank[b.severity] ?? 9));
}

const out = {
  generatedAt: '2026-08-02',
  catalogCount: catalog.length,
  summary: {
    placeClusters: {
      HIGH: placeClusters.filter((c) => c.severity === 'HIGH').length,
      MED: placeClusters.filter((c) => c.severity === 'MED').length,
      LOW: placeClusters.filter((c) => c.severity === 'LOW').length,
    },
    composeLegOverlap: {
      HIGH: composeLegOverlap.filter((c) => c.severity === 'HIGH').length,
      MED: composeLegOverlap.filter((c) => c.severity === 'MED').length,
      LOW: composeLegOverlap.filter((c) => c.severity === 'LOW').length,
    },
    legComposePairs: {
      HIGH: legComposePairs.filter((c) => c.severity === 'HIGH').length,
      MED: legComposePairs.filter((c) => c.severity === 'MED').length,
      LOW: legComposePairs.filter((c) => c.severity === 'LOW').length,
    },
    nearDupPairs: {
      HIGH: nearDupPairs.filter((c) => c.severity === 'HIGH').length,
      MED: nearDupPairs.filter((c) => c.severity === 'MED').length,
    },
    retiredLive: retiredLive.length,
    monolithSuspects: monolithSuspects.length,
  },
  placeClusters: bySev(placeClusters),
  composeLegOverlap: bySev(composeLegOverlap.filter((c) => c.severity !== 'LOW')),
  legComposePairs: bySev(legComposePairs.filter((c) => c.severity !== 'LOW')),
  nearDupPairs: bySev(nearDupPairs),
  retiredLive,
  monolithSuspects,
};

const rawPath = path.join(root, 'research/audits/_destination-overlap-raw.json');
fs.writeFileSync(rawPath, JSON.stringify(out, null, 2));

// Human stdout
console.log(`Catalog: ${out.catalogCount}`);
console.log('Summary:', JSON.stringify(out.summary, null, 2));
console.log('\n=== HIGH place clusters ===');
for (const c of out.placeClusters.filter((x) => x.severity === 'HIGH')) {
  console.log(`\n# ${c.token} (${c.count})`);
  for (const h of c.hits) console.log(`  [${h.kind}/${h.tripType}] ${h.id} — ${h.title}`);
}
console.log('\n=== HIGH leg↔compose pairs ===');
for (const p of out.legComposePairs.filter((x) => x.severity === 'HIGH')) {
  console.log(
    `  ${p.token}: ${p.leg.id} ↔ ${p.compose.id} (embedded=${p.embedded})`,
  );
}
console.log('\n=== HIGH near-dup title heads ===');
for (const p of out.nearDupPairs.filter((x) => x.severity === 'HIGH')) {
  console.log(`  ${p.a.id} ↔ ${p.b.id} | ${p.a.title} // ${p.b.title}`);
}
console.log('\n=== HIGH compose↔leg title overlap ===');
for (const c of out.composeLegOverlap.filter((x) => x.severity === 'HIGH')) {
  console.log(
    `  ${c.id} — ${c.title} | shared=${c.shared.map((s) => s.token).join(',')}`,
  );
}
console.log('\n=== Retired still in catalog ===');
console.log(retiredLive.length ? retiredLive : '(none)');
console.log('\nWrote', path.relative(root, rawPath));
