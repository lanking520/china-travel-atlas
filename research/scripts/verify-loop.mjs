#!/usr/bin/env node
/**
 * Verify loop: repeatedly run multi-status + ux:plan (+ light checks),
 * write research/audits/verify-loop-latest.md until PASS or max rounds.
 *
 * Env: VERIFY_LOOP_ROUNDS=5 VERIFY_LOOP_SLEEP_MS=120000
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const rounds = Number(process.env.VERIFY_LOOP_ROUNDS || 5);
const sleepMs = Number(process.env.VERIFY_LOOP_SLEEP_MS || 120000);
const out = path.join(root, "research/audits/verify-loop-latest.md");

function run(cmd, args) {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { cwd: root, env: process.env, shell: false });
    let buf = "";
    child.stdout.on("data", (d) => (buf += d));
    child.stderr.on("data", (d) => (buf += d));
    child.on("close", (code) => resolve({ code, buf }));
  });
}

function countMulti() {
  const dig = path.join(root, "research/notes/multi-discovery");
  if (!fs.existsSync(dig)) return 0;
  return fs.readdirSync(dig).filter((f) => f.endsWith(".md")).length;
}

function countRoutes() {
  const rp = fs.readFileSync(path.join(root, "content/route-provinces.ts"), "utf8");
  return [...rp.matchAll(/'([a-z0-9-]+)':\s*\{\s*primary:/g)].length;
}

function playbookOk() {
  const t = fs.readFileSync(path.join(root, "research/notes/调研流程.md"), "utf8");
  return /不再作为发现源头|小红书不再/.test(t);
}

async function round(i) {
  const multi = countMulti();
  const routes = countRoutes();
  const playbook = playbookOk();
  const ux = await run("npm", ["run", "ux:plan"]);
  const uxPass = /SUMMARY 13 pass \/ 0 fail/.test(ux.buf);
  const multiOk = multi >= 31;
  const verdict = playbook && multiOk && uxPass ? "PASS" : "PARTIAL";
  const md = [
    `# Verify loop round ${i}/${rounds}`,
    "",
    `Time: ${new Date().toISOString()}`,
    "",
    `**Verdict: ${verdict}**`,
    "",
    `| Check | Result |`,
    `| --- | --- |`,
    `| 调研流程多源优先 | ${playbook ? "PASS" : "FAIL"} |`,
    `| multi-discovery | ${multi}/31 ${multiOk ? "PASS" : "FAIL"} |`,
    `| route-provinces count | ${routes} |`,
    `| ux:plan 13/13 | ${uxPass ? "PASS" : "FAIL"} |`,
    "",
    "## ux:plan tail",
    "```",
    ux.buf.trim().split("\n").slice(-20).join("\n"),
    "```",
    "",
    "## Next if PARTIAL",
    "- Ensure preview on :3000",
    "- Fill missing multi-discovery provinces",
    "- Fix ux:plan failures in research/notes/_plan-playwright.md",
    "",
  ].join("\n");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, md);
  fs.writeFileSync(
    path.join(root, "research/audits", `verify-loop-round-${i}.md`),
    md,
  );
  console.log(verdict, `multi=${multi} routes=${routes} ux=${uxPass}`);
  return verdict;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let last = "PARTIAL";
for (let i = 1; i <= rounds; i++) {
  last = await round(i);
  if (last === "PASS") {
    console.log("VERIFY_LOOP_PASS");
    break;
  }
  if (i < rounds) await sleep(sleepMs);
}
process.exit(last === "PASS" ? 0 : 1);
