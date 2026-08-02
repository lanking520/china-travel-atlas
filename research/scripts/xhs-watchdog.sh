#!/bin/bash
set -u
cd "$(dirname "$0")/../.."
export PATH="/opt/homebrew/bin:$PATH"
export XHS_MAX=1
export XHS_LOOP_SLEEP_MS=180000
export XHS_GAP_MS=35000
export XHS_ROUTE_GAP_MS=90000
export XHS_BATCH_TIMEOUT_MS=600000
LOG=research/raw/xhs/loop.log
echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] watchdog start" >> "$LOG"
exec node research/scripts/xhs-slow-loop.mjs >> "$LOG" 2>&1
