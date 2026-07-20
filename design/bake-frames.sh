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
OUT="${OUT:-$ROOT/public/framed}"              # override to bake into a temp dir
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

# wifi-off glyph (the app's own IconWifiOff shape), white, sized for the status
# bar. Stamped onto the ShowMode shot below so its status bar reads "no wifi".
magick -size 100x100 xc:none -fill none -stroke white \
  -draw "stroke-width 1.8 stroke-linecap round stroke-linejoin round scale 4.1667,4.1667 path 'M2 4 l18 18 M8.5 15.5 a5 5 0 0 1 6 0 M5 12 a10 10 0 0 1 3.3 -2.2 M19 12 a10 10 0 0 0 -6.5 -2.9 M1.8 8.6 A15 15 0 0 1 6 6 M22.2 8.6 a15 15 0 0 0 -5 -2.8 M11.9 19 h.1'" \
  -resize 20x20 "$tmp/wifioff.png"

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

  # ShowMode carries a "Wi-Fi off · still selling" chip, so a full-signal status
  # bar (fastlane bakes one) contradicts the page's core offline message. Rewrite
  # it to the real dead-zone state: dim cellular bars 2-4 to one bar (weak signal)
  # and stamp the wifi-off glyph. Coords are in ${WEB_W}px output space; #1F1B4C is
  # the ShowMode header's own navy. Upstream alternative: override the simulator
  # status bar at fastlane capture time so the source screenshot ships this state
  # (xcrun simctl status_bar <dev> override --wifiMode failed --cellularBars 1 …).
  if [ "$out" = showmode ]; then
    magick "$OUT/framed-$out.webp" \
      -fill 'srgba(31,27,76,0.62)' -draw 'rectangle 385,104 405,133' \
      "$tmp/wifioff.png" -geometry +408+111 -composite \
      -quality 84 -define webp:alpha-quality=92 "$OUT/framed-$out.webp"
  fi
  echo "baked framed-$out.webp"
done
rm -rf "$tmp"
