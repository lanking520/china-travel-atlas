#!/usr/bin/env bash
# Download xiaohongshu-mcp darwin-arm64 binaries into this folder.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"
TAG="${1:-v2.2.7}"
export PATH="/opt/homebrew/bin:$PATH"
gh release download "$TAG" --repo xpzouying/xiaohongshu-mcp \
  --pattern 'xiaohongshu-*-darwin-arm64' \
  --clobber
chmod +x xiaohongshu-login-darwin-arm64 xiaohongshu-mcp-darwin-arm64
ls -lh xiaohongshu-*-darwin-arm64
echo "OK. Next: npm run research:xhs-mcp:login"
