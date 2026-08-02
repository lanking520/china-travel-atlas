#!/bin/bash
# Discovery-only keep-alive. Single MCP consumer. Survives batch exits.
set -u
cd "$(dirname "$0")/../.."
export PATH="/opt/homebrew/bin:$PATH"
export XHS_MAX="${XHS_MAX:-1}"
export XHS_PASS1_ONLY="${XHS_PASS1_ONLY:-1}"
export XHS_RPC_TIMEOUT_MS="${XHS_RPC_TIMEOUT_MS:-180000}"
LOG=research/raw/xhs/discover-keepalive.log
mkdir -p research/raw/xhs
echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] discover-only keep-alive start PASS1=$XHS_PASS1_ONLY" >>"$LOG"

while true; do
  echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] tick" >>"$LOG"
  set +e
  # macOS may lack GNU timeout — use perl alarm wrapper
  perl -e 'alarm shift; exec @ARGV' 200 node research/scripts/xhs-discovery-batch.mjs >>"$LOG" 2>&1
  rc=$?
  set -e
  if [ "$rc" -eq 142 ] || [ "$rc" -eq 255 ]; then
    echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] BATCH_TIMEOUT rc=$rc — cool 2m" >>"$LOG"
    sleep 120
  fi
  node research/scripts/xhs-discover-digest.mjs >>"$LOG" 2>&1 || true

  # province digests (exclude national)
  left=$(node -e '
    const fs=require("fs");const path=require("path");
    const q=JSON.parse(fs.readFileSync("research/queries-discovery.json","utf8"));
    const dig="research/notes/xhs-discovery";
    let need=0,have=0;
    for (const p of q.provinces||[]) {
      need++;
      if (fs.existsSync(path.join(dig,p.id+".md"))) have++;
    }
    console.log(need-have);
  ')
  echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] province_digests_missing=$left rc=$rc" >>"$LOG"
  if [ "$left" = "0" ]; then
    echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] ALL_PROVINCE_DIGESTS_DONE" >>"$LOG"
    break
  fi

  if grep -q "STOP after rate-limit\|STOP after MCP timeout\|Not logged in" <(tail -30 "$LOG"); then
    echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] cool 15m" >>"$LOG"
    sleep 900
  else
    sleep 240
  fi
done
