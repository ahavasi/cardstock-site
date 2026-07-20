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

# Display hole rect, measured from the frame's cutout (magick mask -trim = %@).
# Matches the native screenshot aspect (~0.461) so the fill crops ~nothing and the
# status bar / tab bar stay fully inside the display.
SW=1103; SH=2394; SX=93; SY=201
CANVAS=1290x2796
CX=644; CY=1398                                 # a point inside the screen hole
WEB_W=560                                       # output width for the web

pairs=(
  "01-Home:home" "02-Inventory:inventory" "03-CardDetail:card"
  "04-Showcase:showcase" "05-ShowMode:showmode" "06-Insights:insights"
  "07-ShowDetail:showdetail" "08-Calendar:calendar" "09-Rarity:rarity"
)

tmp="$(mktemp -d)"

# Build the display mask ONCE from the frame's own cutout. The bezel is opaque and
# the display is a transparent hole *enclosed* by it; the area outside the phone is
# also transparent. Flood-fill from a point inside the hole to isolate ONLY the
# display (the fill can't cross the opaque bezel ring into the outside), so the
# screenshot is shaped exactly like the display — rounded corners, no square poke.
magick "$FRAME" -alpha extract "$tmp/a.png"                       # bezel=white, holes=black
magick "$tmp/a.png" -fuzz 40% -fill white -draw "color $CX,$CY floodfill" "$tmp/f.png"
magick "$tmp/f.png" "$tmp/a.png" -compose Difference -composite "$tmp/mask.png"  # display=white, else=black

for p in "${pairs[@]}"; do
  in="${p%%:*}"; out="${p##*:}"
  shot="$SRC/iPhone 17 Pro Max-$in.png"
  [ -f "$shot" ] || { echo "missing: $shot" >&2; continue; }
  # cover-crop the screenshot to the display rect, place it on the canvas,
  # clip it to the display mask, then lay the frame on top.
  magick "$shot" -resize "${SW}x${SH}^" -gravity center -extent "${SW}x${SH}" "$tmp/scr.png"
  magick -size "$CANVAS" xc:none "$tmp/scr.png" -geometry "+${SX}+${SY}" -composite "$tmp/scrfull.png"
  magick "$tmp/scrfull.png" "$tmp/mask.png" -alpha Off -compose CopyOpacity -composite "$tmp/scrm.png"
  magick "$tmp/scrm.png" "$FRAME" -compose over -composite \
    -resize "${WEB_W}x" \
    -quality 84 -define webp:alpha-quality=92 "$OUT/framed-$out.webp"
  echo "baked framed-$out.webp"
done
rm -rf "$tmp"
