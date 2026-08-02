#!/usr/bin/env node
/**
 * Slow loop: keep calling research:xhs-batch until all query files exist or rate-limit stop.
 * Env: XHS_MAX=2 XHS_LOOP_SLEEP_MS=180000 (3min between runs)
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const queries = JSON.parse(fs.readFileSync(path.join(root, "research/queries.json"), "utf8"));
const outDir = path.join(root, "research/raw/xhs");
const sleepMs = Number(process.env.XHS_LOOP_SLEEP_MS || 180000);
const max = process.env.XHS_MAX || "2";

function pendingCount() {
  let pending = 0;
  let total = 0;
  for (const route of queries.routes) {
    for (let i = 0; i < route.queries.length; i++) {
      total++;
      const f = path.join(outDir, `search_${route.id}_${i}.json`);
      if (!fs.existsSync(f) || fs.statSync(f).size < 1000) pending++;
    }
  }
  return { pending, total };
}

function runBatch() {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, ["research/scripts/xhs-batch-search.mjs"], {
      cwd: root,
      env: { ...process.env, XHS_MAX: String(max) },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    const killTimer = setTimeout(() => {
      console.log("batch timeout — killing");
      child.kill("SIGTERM");
      setTimeout(() => child.kill("SIGKILL"), 3000);
    }, Number(process.env.XHS_BATCH_TIMEOUT_MS || 300000));
    child.stdout.on("data", (d) => {
      out += d;
      process.stdout.write(d);
    });
    child.stderr.on("data", (d) => {
      out += d;
      process.stderr.write(d);
    });
    child.on("close", (code) => {
      clearTimeout(killTimer);
      resolve({ code, out });
    });
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  for (;;) {
    const { pending, total } = pendingCount();
    console.log(`\n[${new Date().toISOString()}] pending ${pending}/${total}`);
    if (pending === 0) {
      console.log("ALL_SEARCHES_DONE");
      break;
    }
    const { out } = await runBatch();
    // Refresh digests + coverage status after every batch attempt
    await new Promise((resolve) => {
      const d = spawn(process.execPath, ["research/scripts/xhs-digest.mjs"], {
        cwd: root,
        stdio: "inherit",
        env: process.env,
      });
      d.on("close", resolve);
    });
    await new Promise((resolve) => {
      const s = spawn("node", ["research/scripts/xhs-status.mjs"], {
        cwd: root,
        stdio: "inherit",
        env: process.env,
      });
      s.on("close", resolve);
    });
    await new Promise((resolve) => {
      const a = spawn(process.execPath, ["research/scripts/xhs-apply-digest.mjs"], {
        cwd: root,
        stdio: "inherit",
        env: process.env,
      });
      a.on("close", resolve);
    });
    if (/STOP after rate-limit|Not logged in|MCP health check failed/i.test(out)) {
      console.log("hard stop (rate-limit/auth); cooling 45min then retry once");
      await sleep(Number(process.env.XHS_HARD_COOLDOWN_MS || 2700000));
      continue;
    }
    if (/STOP after MCP timeout/i.test(out)) {
      console.log("MCP timeout; cooling 15min then continue");
      await sleep(Number(process.env.XHS_TIMEOUT_COOLDOWN_MS || 900000));
      continue;
    }
    const after = pendingCount();
    if (after.pending === pending) {
      console.log("no progress this run; cooling 10min");
      await sleep(600000);
    } else {
      console.log(`sleep ${sleepMs}ms before next run`);
      await sleep(sleepMs);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
