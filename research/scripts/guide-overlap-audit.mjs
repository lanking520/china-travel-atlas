/**
 * Guide overlap audit — catalog-scoped (~explore-routes.json ids).
 * Parses content TS sources (no app import). Longer intros approximate preferRicherText.
 *
 * Run: node research/scripts/guide-overlap-audit.mjs
 * See: research/audits/guide-overlap-20260802.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const CAT = new Set(
  JSON.parse(read('lib/generated/explore-routes.json')).map((r) => r.id),
);

const BOILER = [
  '父母线成功标准是「看懂气质、吃得清淡、每天留白」，不是打卡清单刷完',
  '每天最多一主点，午后强制空白；腿脚紧再删一半也完全成立',
  '每天最多一主点，午后强制空白；腿脚紧再删一半景点也完全成立',
  '本卡嵌入三条短线，此处只管 glue 与 honest 车程',
  '本卡嵌入两条短线，此处只管 glue 与 honest 车程',
  '建议从北京飞或乘高铁抵达后当地活动；结束后回京休整再出发下一段',
  '出行前复核票务预约、天气与交通；英文不错的话可用英文界面 App 订票查地图',
  '文化看点优先室内馆与平缓外观，美食声明清淡，行程允许整段删除',
  '节奏以慢游为主，快览点单独穿插，每天留空白，不把日程排满',
  '出行前复核票务预约、天气与身体信号；高原与干燥地区宁可少景，不可硬撑。',
];

function stripBoiler(s) {
  let t = s;
  for (const b of BOILER) t = t.replaceAll(b, '');
  return t.replace(/\n{2,}/g, '\n\n').trim();
}

function extractField(block, key) {
  const m = block.match(new RegExp(`${key}\\s*:\\s*(['\`"])([\\s\\S]*?)\\1`, 'm'));
  return m ? m[2].replace(/\\n/g, '\n') : '';
}

function splitEntries(src, hint) {
  let body = src;
  if (hint && body.includes(hint)) body = body.slice(body.indexOf(hint));
  const entries = new Map();
  const keyRe = /\n\s*(?:['"]([\w.-]+)['"]|([\w.-]+))\s*:\s*\{/g;
  let m;
  while ((m = keyRe.exec(body))) {
    const id = m[1] || m[2];
    if (!id || ['as', 'export', 'Record', 'Partial', 'practicalGuide'].includes(id))
      continue;
    const start = m.index + m[0].length - 1;
    let depth = 0;
    let end = start;
    for (let j = start; j < body.length; j++) {
      const ch = body[j];
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          end = j + 1;
          break;
        }
      } else if (ch === "'" || ch === '"' || ch === '`') {
        const q = ch;
        j++;
        while (j < body.length) {
          if (body[j] === '\\') {
            j += 2;
            continue;
          }
          if (body[j] === q) break;
          j++;
        }
      }
    }
    entries.set(id, body.slice(start, end));
  }
  return entries;
}

const routes = new Map();
function row(id) {
  if (!routes.has(id)) routes.set(id, { id, sources: {} });
  return routes.get(id);
}

// Route records
const routeFiles = [
  'content/routes.ts',
  ...fs
    .readdirSync(path.join(root, 'content/patches'))
    .filter((f) => f.startsWith('routes-') && f.endsWith('.ts'))
    .map((f) => `content/patches/${f}`),
];
for (const file of routeFiles) {
  const src = read(file);
  const idRe = /\bid\s*:\s*['"]([\w.-]+)['"]/g;
  let im;
  while ((im = idRe.exec(src))) {
    const id = im[1];
    if (!CAT.has(id)) continue;
    let start = im.index;
    while (start > 0 && src[start] !== '{') start--;
    let depth = 0;
    let end = start;
    for (let j = start; j < src.length; j++) {
      const ch = src[j];
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          end = j + 1;
          break;
        }
      } else if (ch === "'" || ch === '"' || ch === '`') {
        const q = ch;
        j++;
        while (j < src.length) {
          if (src[j] === '\\') {
            j += 2;
            continue;
          }
          if (src[j] === q) break;
          j++;
        }
      }
    }
    const block = src.slice(start, end);
    const r = row(id);
    const summary = extractField(block, 'summary');
    const introduction = extractField(block, 'introduction');
    if (summary) {
      r.summary = summary;
      r.sources.summary = file;
    }
    if (introduction) {
      r.introduction = introduction;
      r.sources.introduction = file;
    }
    const km = block.match(/compositionKind\s*:\s*['"](\w+)['"]/);
    if (km) r.kind = km[1];
    const legs = block.match(/legIds\s*:\s*\[([\s\S]*?)\]/);
    if (legs) {
      r.legIds = [...legs[1].matchAll(/(['`"])([\s\S]*?)\1/g)].map((x) => x[2]);
    }
    const glue = block.match(/glue\s*:\s*\[([\s\S]*?)\]/);
    if (glue) {
      r.glue = [...glue[1].matchAll(/(['`"])([\s\S]*?)\1/g)].map((x) => x[2]);
    }
  }
}

function mergeIntro(id, intro, file) {
  if (!intro || !CAT.has(id)) return;
  const r = row(id);
  const cur = r.introduction || '';
  if (intro.length >= cur.length) {
    r.introduction = intro;
    r.sources.introduction = file;
  }
}

function mergePg(id, rg, file) {
  if (!rg || !CAT.has(id)) return;
  const r = row(id);
  r.routeGuide = rg;
  r.sources.routeGuide = file;
}

for (const [id, block] of splitEntries(read('content/route-details.ts'), 'export const routeDetails')) {
  mergeIntro(id, extractField(block, 'introduction'), 'route-details');
  mergePg(id, extractField(block, 'routeGuide'), 'route-details');
}

for (const [id, block] of splitEntries(
  read('content/practical-guides.ts'),
  'export const practicalGuides',
)) {
  const r = row(id);
  if (!r.routeGuide) mergePg(id, extractField(block, 'routeGuide'), 'practical-guides');
}

const patchOrder = [
  'huabei-dongbei.ts',
  'huadong-huazhong.ts',
  'huanan-xinan.ts',
  'xibei-qingzang.ts',
  'city-character-20260802.ts',
  'coverage-character-20260802.ts',
  'leg-compose-character-20260802.ts',
  'famous-frontier-character-20260802.ts',
  'soft-short-character-20260802.ts',
  'ctrip-enrich-huabei-dongbei-20260802.ts',
  'ctrip-enrich-xibei-qingzang-20260802.ts',
  'ctrip-enrich-xinan-20260802.ts',
  'ctrip-enrich-huazhong-huanan-20260802.ts',
  'ctrip-enrich-huadong-20260802.ts',
];

for (const fn of patchOrder) {
  const file = `content/audit-patches/${fn}`;
  const src = read(file);
  for (const [id, block] of splitEntries(src, 'export const detailPatches')) {
    mergeIntro(id, extractField(block, 'introduction'), file);
    const rg = extractField(block, 'routeGuide');
    if (rg) mergePg(id, rg, file);
  }
  if (src.includes('routeFieldPatches')) {
    const slice = src.slice(src.indexOf('routeFieldPatches'));
    for (const [id, block] of splitEntries(slice, 'routeFieldPatches')) {
      if (!CAT.has(id)) continue;
      const r = row(id);
      const summary = extractField(block, 'summary');
      if (summary) {
        r.summary = summary;
        r.sources.summary = `${file}#rf`;
      }
      mergeIntro(id, extractField(block, 'introduction'), `${file}#rf`);
    }
  }
}

for (const [id, block] of splitEntries(
  read('content/audit-patches/ctrip-enrich-xibei-qingzang-pg-20260802.ts'),
  'export const practicalGuidePatches',
)) {
  mergePg(id, extractField(block, 'routeGuide'), 'xibei-pg-companion');
}

function norm(s) {
  return s.replace(/\s+/g, '').replace(/[，。；、！？：""''（）【】《》·…—\-—]/g, '');
}

function sentences(s) {
  return s
    .split(/[。！？\n]+/)
    .map((x) => x.trim())
    .filter((x) => x.length >= 12);
}

const hits = [];

// Intra-field dups
for (const r of routes.values()) {
  if (!CAT.has(r.id)) continue;
  for (const field of ['introduction', 'routeGuide']) {
    const text = r[field] || '';
    const paras = text
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter((p) => p.length >= 15);
    const seen = new Map();
    for (const p of paras) seen.set(p, (seen.get(p) || 0) + 1);
    for (const [p, n] of seen) {
      if (n >= 2) {
        hits.push({
          kind: 'intra-field-dup',
          severity: 'HIGH',
          a: r.id,
          b: r.id,
          score: n,
          evidence: `${field}×${n}: 「${p.slice(0, 80)}」`,
        });
      }
    }
  }
}

// Summary ⊂ intro
for (const r of routes.values()) {
  if (!CAT.has(r.id)) continue;
  const s = r.summary || '';
  const i = r.introduction || '';
  if (s.length < 30 || i.length < 40) continue;
  if (norm(i).includes(norm(s))) {
    hits.push({
      kind: 'summary-vs-intro',
      severity: 'HIGH',
      a: r.id,
      b: r.id,
      score: 1,
      evidence: `summary⊂intro「${s.slice(0, 70)}」`,
    });
  }
}

// Compose vs legs (unique body)
for (const c of [...routes.values()].filter((r) => r.kind === 'compose' && r.legIds?.length)) {
  const blob = stripBoiler(
    [c.introduction, ...(c.glue || []), c.routeGuide].filter(Boolean).join('\n'),
  );
  for (const lid of c.legIds) {
    const L = routes.get(lid);
    if (!L) continue;
    const text = stripBoiler(L.introduction || '');
    if (text.length < 60 || blob.length < 60) continue;
    const shared = sentences(blob).filter((s) => {
      const n = norm(s);
      return n.length >= 28 && sentences(text).some((t) => norm(t) === n);
    });
    if (shared.length >= 2) {
      hits.push({
        kind: 'compose-vs-leg-intro',
        severity: 'HIGH',
        a: c.id,
        b: lid,
        score: shared.length,
        evidence: shared.slice(0, 2).join(' | '),
      });
    } else if (shared.length === 1) {
      hits.push({
        kind: 'compose-vs-leg-intro',
        severity: 'MED',
        a: c.id,
        b: lid,
        score: 1,
        evidence: shared[0],
      });
    }
  }
}

const summary = {
  catalog: CAT.size,
  rows: [...routes.values()].filter((r) => CAT.has(r.id)).length,
  high: hits.filter((h) => h.severity === 'HIGH').length,
  med: hits.filter((h) => h.severity === 'MED').length,
  low: hits.filter((h) => h.severity === 'LOW').length,
};

const out = path.join(root, 'research/audits/_guide-overlap-raw.json');
fs.writeFileSync(out, JSON.stringify({ summary, hits }, null, 2));
console.log(JSON.stringify(summary, null, 2));
console.log('Wrote', out);
if (hits.length) {
  for (const h of hits.slice(0, 40)) {
    console.log(h.severity, h.kind, h.a, h.b, h.evidence.slice(0, 100));
  }
}
