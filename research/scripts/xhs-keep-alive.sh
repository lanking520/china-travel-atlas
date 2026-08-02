#!/bin/bash
set -u
cd "$(dirname "$0")/../.."
export PATH="/opt/homebrew/bin:$PATH"
MODE="${1:-discover}"
LOG="research/raw/xhs/${MODE}-keepalive.log"
echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] start $MODE" >> "$LOG"
while true; do
  echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] tick $MODE" >> "$LOG"
  if [ "$MODE" = "discover" ]; then
    XHS_MAX=1 node research/scripts/xhs-discovery-batch.mjs >> "$LOG" 2>&1
    node research/scripts/xhs-discover-digest.mjs >> "$LOG" 2>&1 || true
    sleep 300
  else
    XHS_MAX=1 XHS_LOOP_SLEEP_MS=300000 node research/scripts/xhs-slow-loop.mjs >> "$LOG" 2>&1
    # slow-loop exits on rate limit; cool then retry
    sleep 600
  fi
done
