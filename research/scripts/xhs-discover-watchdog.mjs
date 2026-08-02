#!/usr/bin/env node
/**
 * Discovery-only watchdog (macOS-safe). Single MCP consumer.
 * Env: XHS_MAX=1 XHS_PASS1_ONLY=1 XHS_BATCH_WALL_MS=200000
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const rawDir = path.join(root, "research/raw/xhs");
const digDir = path.join(root, "research/notes/xhs-discovery");
const logFile = path.join(rawDir, "discover-keepalive.log");
const wallMs = Number(process.env.XHS_BATCH_WALL_MS || 200000);
const coolOk = Number(process.env.XHS_COOL_OK_MS || 240000);
const coolFail = Number(process.env.XHS_COOL_FAIL_MS || 900000);

fs.mkdirSync(rawDir, { recursive: true });

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFileSync(logFile, line);
  process.stdout.write(line);
}

function missingProvinceDigests() {
  const q = JSON.parse(fs.readFileSync(path.join(root, "research/queries-discovery.json"), "utf8"));
  let left = 0;
  for (const p of q.provinces || []) {
    if (!fs.existsSync(path.join(digDir, `${p.id}.md`))) left++;
  }
  return left;
}

function firstPendingPass1() {
  const q = JSON.parse(fs.readFileSync(path.join(root, "research/queries-discovery.json"), "utf8"));
  const jobs = [{ slug: "national", q: (q.national || [])[0] }];
  for (const p of q.provinces || []) {
    jobs.push({ slug: p.id, q: (p.queries || [])[0] });
  }
  for (const job of jobs) {
    if (!job.q) continue;
    const f = path.join(rawDir, `discover_${job.slug}_0.json`);
    const skip = path.join(rawDir, `discover_${job.slug}_0.skip`);
    if (fs.existsSync(skip)) continue;
    if (fs.existsSync(f) && fs.statSync(f).size > 1000) continue;
    return job;
  }
  return null;
}

function markSkip(slug, reason) {
  const skip = path.join(rawDir, `discover_${slug}_0.skip`);
  fs.writeFileSync(
    skip,
    JSON.stringify({ reason, at: new Date().toISOString() }, null, 2),
  );
  log(`marked skip ${slug}: ${reason}`);
}

function runNode(script, env, wall) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [script], {
      cwd: root,
      env: { ...process.env, ...env },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    const t = setTimeout(() => {
      log(`killing ${script} after ${wall}ms`);
      child.kill("SIGTERM");
      setTimeout(() => child.kill("SIGKILL"), 3000);
    }, wall);
    child.stdout.on("data", (d) => {
      out += d;
      process.stdout.write(d);
      fs.appendFileSync(logFile, d);
    });
    child.stderr.on("data", (d) => {
      out += d;
      process.stderr.write(d);
      fs.appendFileSync(logFile, d);
    });
    child.on("close", (code, signal) => {
      clearTimeout(t);
      resolve({ code, signal, out });
    });
  });
}

async function main() {
  log(`node watchdog start PASS1=${process.env.XHS_PASS1_ONLY || "1"} wall=${wallMs}`);
  for (;;) {
    const left = missingProvinceDigests();
    log(`province_digests_missing=${left}`);
    if (left === 0) {
      log("ALL_PROVINCE_DIGESTS_DONE");
      break;
    }

    const pending = firstPendingPass1();
    log(`next ${pending ? `${pending.slug}: ${pending.q}` : "(none pending files — digest catch-up)"}`);

    const batch = await runNode(
      "research/scripts/xhs-discovery-batch.mjs",
      {
        XHS_MAX: process.env.XHS_MAX || "1",
        XHS_PASS1_ONLY: process.env.XHS_PASS1_ONLY || "1",
        XHS_RPC_TIMEOUT_MS: process.env.XHS_RPC_TIMEOUT_MS || "120000",
      },
      wallMs,
    );

    if (batch.signal || batch.code === null) {
      if (pending) markSkip(pending.slug, "batch_wall_timeout");
      await new Promise((r) => setTimeout(r, coolFail));
    } else if (/STOP after rate-limit|STOP after MCP timeout|Not logged in/i.test(batch.out)) {
      if (/STOP after MCP timeout/i.test(batch.out) && pending) {
        markSkip(pending.slug, "mcp_timeout");
      }
      log("cool fail window");
      await new Promise((r) => setTimeout(r, coolFail));
    } else {
      await new Promise((r) => setTimeout(r, coolOk));
    }

    await runNode("research/scripts/xhs-discover-digest.mjs", {}, 60000);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
