#!/usr/bin/env node
/**
 * Run redbook with cookies from a local file — avoids macOS Keychain password spam.
 *
 * Setup (once):
 * 1. Chrome open https://www.xiaohongshu.com (logged in)
 * 2. F12 → Application → Cookies → https://www.xiaohongshu.com
 * 3. Copy values of a1 and web_session
 * 4. Put into research/raw/xhs-cookies.txt as one line:
 *    a1=...; web_session=...
 *
 * Usage:
 *   npm run research:xhs -- whoami
 *   npm run research:xhs -- search "慕田峪 老人 缆车"
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cookieFile = path.join(__dirname, "..", "raw", "xhs-cookies.txt");

if (!fs.existsSync(cookieFile)) {
  console.error(`Missing ${cookieFile}

Do this once (no Keychain prompts):
1. Chrome → https://www.xiaohongshu.com (stay logged in)
2. F12 → Application → Cookies → www.xiaohongshu.com
3. Copy a1 and web_session values
4. Create research/raw/xhs-cookies.txt with ONE line:
   a1=粘贴a1; web_session=粘贴web_session

File is gitignored. Never commit or paste cookies into chat.
`);
  process.exit(1);
}

const cookieString = fs
  .readFileSync(cookieFile, "utf8")
  .split("\n")
  .map((l) => l.trim())
  .find((l) => l && !l.startsWith("#"));

if (!cookieString || !cookieString.includes("a1=")) {
  console.error("xhs-cookies.txt must contain a line like: a1=...; web_session=...");
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Example: npm run research:xhs -- search "慕田峪 老人 缆车"');
  process.exit(1);
}

const result = spawnSync(
  "npx",
  ["redbook", ...args, "--cookie-string", cookieString],
  {
    stdio: "inherit",
    shell: false,
    env: process.env,
  },
);

process.exit(result.status ?? 1);
