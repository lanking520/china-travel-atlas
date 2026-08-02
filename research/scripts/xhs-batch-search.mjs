#!/usr/bin/env node
/**
 * Slow, resumable Xiaohongshu search via local MCP.
 * Anti-rate-limit: few queries per run, long jitter gaps, backoff + stop on limit.
 *
 * Env:
 *   XHS_MAX=3          max new searches this run (default 3)
 *   XHS_GAP_MS=35000   base gap between searches (default 35s)
 *   XHS_JITTER_MS=20000 random extra 0..N ms (default 20s)
 *   XHS_ROUTE_GAP_MS=90000 extra pause when switching routes (default 90s)
 *   XHS_MCP_URL=http://127.0.0.1:18060/mcp
 *
 * Output: research/raw/xhs/search_<routeId>_<i>.json (gitignored)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const queriesPath = path.join(root, "research", "queries.json");
const outDir = path.join(root, "research", "raw", "xhs");
const BASE = process.env.XHS_MCP_URL || "http://127.0.0.1:18060/mcp";

const MAX = Number(process.env.XHS_MAX || 3);
const GAP_MS = Number(process.env.XHS_GAP_MS || 35000);
const JITTER_MS = Number(process.env.XHS_JITTER_MS || 20000);
const ROUTE_GAP_MS = Number(process.env.XHS_ROUTE_GAP_MS || 90000);

fs.mkdirSync(outDir, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const jittered = (base, jitter) => base + Math.floor(Math.random() * (jitter + 1));

async function rpc(session, payload, timeoutMs = 120000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/event-stream",
        ...(session ? { "Mcp-Session-Id": session } : {}),
      },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });
    const text = await res.text();
    const sid = res.headers.get("mcp-session-id") || session;
    return { sid, status: res.status, text };
  } finally {
    clearTimeout(timer);
  }
}

function parseJsonLoose(text) {
  return JSON.parse(text);
}

function looksRateLimited(text) {
  const s = String(text || "").slice(0, 500);
  // Only inspect short error-like messages — NOT full feed dumps (false positives).
  if (/"feeds"\s*:\s*\[/.test(s) && s.includes("noteCard")) return false;
  return /限流|操作过于频繁|访问频次|稍后重试|验证码|登录失效|未登录|risk control|captcha|blocked|rate.?limit/i.test(
    s,
  );
}

function extractPayloadText(rpcBody) {
  try {
    const parsed = parseJsonLoose(rpcBody);
    if (parsed?.result?.isError) {
      return { error: true, text: parsed.result.content?.[0]?.text || rpcBody };
    }
    const text = parsed?.result?.content?.[0]?.text || rpcBody;
    let feeds = null;
    try {
      const inner = typeof text === "string" ? JSON.parse(text) : text;
      feeds = inner?.feeds || null;
    } catch {
      /* ignore */
    }
    return { error: false, text, feeds };
  } catch {
    return { error: true, text: rpcBody, feeds: null };
  }
}

async function main() {
  console.log(
    `slow batch: max=${MAX} gap≈${GAP_MS / 1000}s+jitter${JITTER_MS / 1000}s routeGap≈${ROUTE_GAP_MS / 1000}s`,
  );

  const health = await fetch("http://127.0.0.1:18060/health").then((r) => r.json());
  if (!health?.success) throw new Error("MCP health check failed");

  let { sid, text } = await rpc(null, {
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: { name: "cta-batch-slow", version: "2.0" },
    },
  });
  await rpc(sid, { jsonrpc: "2.0", method: "notifications/initialized" });

  ({ sid, text } = await rpc(sid, {
    jsonrpc: "2.0",
    id: 2,
    method: "tools/call",
    params: { name: "check_login_status", arguments: {} },
  }));
  const login = parseJsonLoose(text);
  const loginMsg = login?.result?.content?.[0]?.text || text;
  console.log(loginMsg);
  if (!String(loginMsg).includes("已登录")) {
    throw new Error("Not logged in to Xiaohongshu MCP — run research:xhs-mcp:login");
  }

  const data = JSON.parse(fs.readFileSync(queriesPath, "utf8"));
  let id = 100;
  let ok = 0;
  let skip = 0;
  let fail = 0;
  let doneThisRun = 0;
  let lastRoute = null;

  // Breadth-first: finish query[0] for every route before query[1], etc.
  // So every route gets at least one Xiaohongshu pass ASAP.
  const maxQueries = Math.max(0, ...data.routes.map((r) => r.queries.length));
  const jobs = [];
  for (let i = 0; i < maxQueries; i++) {
    for (const route of data.routes) {
      if (i >= route.queries.length) continue;
      jobs.push({ route, i, q: route.queries[i] });
    }
  }

  function fileOk(file) {
    if (!fs.existsSync(file) || fs.statSync(file).size <= 1000) return false;
    try {
      const prev = fs.readFileSync(file, "utf8");
      if (looksRateLimited(prev) || prev.includes('"error"')) {
        console.log(`retry bad file ${path.basename(file)}`);
        fs.unlinkSync(file);
        return false;
      }
      return true;
    } catch {
      return true;
    }
  }

  outer: for (const job of jobs) {
    if (doneThisRun >= MAX) {
      console.log(`hit XHS_MAX=${MAX}, stop for now (re-run later to continue)`);
      break outer;
    }

    const { route, i, q } = job;
    const file = path.join(outDir, `search_${route.id}_${i}.json`);
    if (fileOk(file)) {
      console.log(`skip ${route.id}[${i}] ${q}`);
      skip++;
      continue;
    }

    if (lastRoute && lastRoute !== route.id && doneThisRun > 0) {
      const pause = jittered(ROUTE_GAP_MS, Math.floor(ROUTE_GAP_MS / 3));
      console.log(`route gap ${(pause / 1000).toFixed(0)}s (${lastRoute} → ${route.id})`);
      await sleep(pause);
    }
    lastRoute = route.id;

    console.log(`search ${route.id}[${i}] ${q}`);
    try {
      ({ sid, text } = await rpc(
        sid,
        {
          jsonrpc: "2.0",
          id: id++,
          method: "tools/call",
          params: { name: "search_feeds", arguments: { keyword: q } },
        },
        Number(process.env.XHS_RPC_TIMEOUT_MS || 180000),
      ));

      const payload = extractPayloadText(text);
      const hasFeeds = Array.isArray(payload.feeds) && payload.feeds.length > 0;
        if (!hasFeeds && (payload.error || looksRateLimited(payload.text) || looksRateLimited(text))) {
          fail++;
          const msg = String(payload.text || text).slice(0, 200);
          console.log("  RATE/ERROR — backing off, not writing stub. Message:");
          console.log(" ", msg);
          const isTimeout = /deadline exceeded|timeout|ETIMEDOUT|aborted/i.test(msg);
          // cool-down then exit so account / MCP is not kept hammered
          await sleep(jittered(isTimeout ? 120000 : 180000, 60000));
          console.log(
            isTimeout
              ? "STOP after MCP timeout; re-run in 10–20+ min"
              : "STOP after rate-limit signal; re-run in 30–60+ min",
          );
          break outer;
        }
      if (!hasFeeds) {
        fail++;
        console.log("  EMPTY feeds — skip write, cool briefly");
        await sleep(jittered(60000, 30000));
        break outer;
      }

      fs.writeFileSync(file, text, "utf8");
      ok++;
      doneThisRun++;
      console.log(`  ok ${fs.statSync(file).size} bytes feeds=${payload.feeds.length} (${doneThisRun}/${MAX} this run)`);
    } catch (e) {
      fail++;
      console.log("  FAIL", e.message, "— no stub written; will retry next run");
      await sleep(jittered(120000, 30000));
      console.log("STOP after failure; re-run later");
      break outer;
    }

    if (doneThisRun < MAX) {
      const gap = jittered(GAP_MS, JITTER_MS);
      console.log(`  wait ${(gap / 1000).toFixed(0)}s`);
      await sleep(gap);
    }
  }

  console.log(`DONE thisRun=${doneThisRun} ok=${ok} skip=${skip} fail=${fail}`);
  console.log("Tip: npm run research:xhs-batch   # again later; skips existing files");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
