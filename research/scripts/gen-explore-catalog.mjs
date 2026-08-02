#!/usr/bin/env node
/**
 * Build slim Explore catalog JSON (drops introduction / notices / sources / etc.).
 * Usage: npm run gen:explore-catalog
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const outFile = path.join(root, "lib/generated/explore-routes.json");
const runner = path.join(__dirname, "gen-explore-catalog-run.ts");

fs.mkdirSync(path.dirname(outFile), { recursive: true });

const tsxBin = path.join(root, "node_modules/.bin/tsx");
const result = spawnSync(tsxBin, [runner], {
  cwd: root,
  encoding: "utf8",
  env: { ...process.env },
});

if (result.status !== 0) {
  console.error(result.stderr || result.stdout || "gen-explore-catalog failed");
  process.exit(result.status ?? 1);
}

const routes = JSON.parse(result.stdout);
if (!Array.isArray(routes) || routes.length < 50) {
  console.error("gen-explore-catalog: unexpected route count", routes?.length);
  process.exit(1);
}

// Guard: slim payload must not re-introduce detail prose
const sample = JSON.stringify(routes);
for (const bad of ["introduction", "seasonGuide", "practicalGuide"]) {
  if (sample.includes(`"${bad}"`)) {
    console.error(`gen-explore-catalog: slim JSON still contains ${bad}`);
    process.exit(1);
  }
}

fs.writeFileSync(outFile, `${JSON.stringify(routes)}\n`);
console.error(
  `Wrote ${routes.length} slim explore routes → ${path.relative(root, outFile)} (${Buffer.byteLength(sample)} bytes)`,
);
