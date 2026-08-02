#!/usr/bin/env node
/**
 * Batch search Xiaohongshu via local MCP (localhost:18060).
 * Output: research/raw/xhs/search_<routeId>_<i>.json (gitignored)
 * Does not write into the website.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const queriesPath = path.join(root, "research", "queries.json");
const outDir = path.join(root, "research", "raw", "xhs");
const BASE = process.env.XHS_MCP_URL || "http://127.0.0.1:18060/mcp";

fs.mkdirSync(outDir, { recursive: true });

async function rpc(session, payload) {
  const res = await fetch(BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      ...(session ? { "Mcp-Session-Id": session } : {}),
    },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  const sid = res.headers.get("mcp-session-id") || session;
  return { sid, status: res.status, text };
}

function parseJsonLoose(text) {
  return JSON.parse(text, (k, v) => v);
}

async function main() {
  const health = await fetch("http://127.0.0.1:18060/health").then((r) => r.json());
  if (!health?.success) throw new Error("MCP health check failed");

  let { sid, text } = await rpc(null, {
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: { name: "cta-batch", version: "1.0" },
    },
  });
  await rpc(sid, { jsonrpc: "2.0", method: "notifications/initialized" });

  // login check
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
    throw new Error("Not logged in to Xiaohongshu MCP");
  }

  const data = JSON.parse(fs.readFileSync(queriesPath, "utf8"));
  let id = 100;
  let ok = 0;
  let fail = 0;

  for (const route of data.routes) {
    for (let i = 0; i < route.queries.length; i++) {
      const q = route.queries[i];
      const file = path.join(outDir, `search_${route.id}_${i}.json`);
      if (fs.existsSync(file) && fs.statSync(file).size > 1000) {
        console.log(`skip existing ${route.id}[${i}] ${q}`);
        ok++;
        continue;
      }
      console.log(`search ${route.id}[${i}] ${q}`);
      try {
        ({ sid, text } = await rpc(sid, {
          jsonrpc: "2.0",
          id: id++,
          method: "tools/call",
          params: { name: "search_feeds", arguments: { keyword: q } },
        }));
        fs.writeFileSync(file, text, "utf8");
        const parsed = parseJsonLoose(text);
        if (parsed?.result?.isError) {
          fail++;
          console.log("  ERROR", parsed.result.content?.[0]?.text?.slice(0, 120));
        } else {
          ok++;
          console.log("  ok", fs.statSync(file).size, "bytes");
        }
      } catch (e) {
        fail++;
        console.log("  FAIL", e.message);
        fs.writeFileSync(file, JSON.stringify({ error: String(e) }), "utf8");
      }
      await new Promise((r) => setTimeout(r, 2500));
    }
  }
  console.log(`DONE ok=${ok} fail=${fail}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
