#!/usr/bin/env bash
# Composite raw App Store screenshots into the iPhone device frame, producing
# transparent-background framed PNGs for the site. Re-run if screenshots change.
#
# Requires ImageMagick (`magick`). Source screenshots come from the CardOps iOS
# project's fastlane output.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(dirname "$HERE")"
FRAME="$HERE/iphone-frame.png"                 # 1290x2796, transparent screen
SRC="$HOME/Documents/Projects/Swift/pokemon-tracker/fastlane/screenshots/en-US"
OUT="$ROOT/public/framed"
mkdir -p "$OUT"

# frame screen rect (measured from the transparent cutout): 1163x2454 +63+171
SW=1163; SH=2454; SX=63; SY=171
CANVAS=1290x2796
WEB_W=560                                       # output width for the web

pairs=(
  "01-Home:home" "02-Inventory:inventory" "03-CardDetail:card"
  "04-Showcase:showcase" "05-ShowMode:showmode" "06-Insights:insights"
  "07-ShowDetail:showdetail" "08-Calendar:calendar" "09-Rarity:rarity"
)

tmp="$(mktemp -d)"
for p in "${pairs[@]}"; do
  in="${p%%:*}"; out="${p##*:}"
  shot="$SRC/iPhone 17 Pro Max-$in.png"
  [ -f "$shot" ] || { echo "missing: $shot" >&2; continue; }
  # cover-crop the screenshot to the screen opening, then composite into the frame
  magick "$shot" -resize "${SW}x${SH}^" -gravity center -extent "${SW}x${SH}" "$tmp/scr.png"
  magick -size "$CANVAS" xc:none \
    "$tmp/scr.png" -geometry "+${SX}+${SY}" -composite \
    "$FRAME" -composite \
    -resize "${WEB_W}x" \
    -quality 84 -define webp:alpha-quality=92 "$OUT/framed-$out.webp"
  echo "baked framed-$out.webp"
done
rm -rf "$tmp"
