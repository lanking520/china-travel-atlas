#!/usr/bin/env node
/**
 * List research queries for content generation.
 * Does not fetch any external platform; safe for CI.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "queries.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));

console.log("Content-research queries (not used in website build)\n");

for (const route of data.routes) {
  console.log(`## ${route.id}`);
  for (const q of route.queries) {
    console.log(`  - 小红书/知乎: ${q}`);
  }
  console.log("");
}

console.log(`Total routes: ${data.routes.length}`);
console.log("Next: fill research/notes/<id>.md then update content/routes.ts");
