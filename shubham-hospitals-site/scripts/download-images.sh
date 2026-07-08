#!/usr/bin/env bash
# Localize all images before decommissioning WordPress.
# Run this ON YOUR OWN COMPUTER from the project root while the old
# WordPress site is still live:
#
#   bash scripts/download-images.sh
#
# It downloads every shubham-hospitals.com image referenced in the code
# into public/wp-content/... (same paths), then rewrites references from
# absolute URLs to local paths. After running, rebuild and redeploy.

set -euo pipefail
cd "$(dirname "$0")/.."

echo "Collecting image URLs..."
grep -rhoE 'https://shubham-hospitals\.com/wp-content/[^"'\'' )]+\.(png|jpe?g|webp|gif|svg)' src extract \
  | sort -u > /tmp/shubham-images.txt
echo "Found $(wc -l < /tmp/shubham-images.txt) images."

while read -r url; do
  path="public/${url#https://shubham-hospitals.com/}"
  mkdir -p "$(dirname "$path")"
  if [ ! -f "$path" ]; then
    echo "  $url"
    curl -sSfL "$url" -o "$path" || echo "  !! failed: $url"
  fi
done < /tmp/shubham-images.txt

echo "Rewriting references to local paths..."
grep -rl 'https://shubham-hospitals\.com/wp-content/' src extract | while read -r f; do
  sed -i.bak 's#https://shubham-hospitals\.com/wp-content/#/wp-content/#g' "$f" && rm -f "$f.bak"
done

echo "Done. Rebuild with: npm run build"
