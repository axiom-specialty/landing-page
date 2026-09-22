#!/usr/bin/env bash
#
# Builds the seamless cover loops in public/covers from the stills beside them.
#
# Two motions are composited per image:
#
#   1. A slow circular drift. The still is upscaled slightly and then cropped
#      with the crop window travelling a small circle, which gives the flat
#      art a sense of breathing without any element actually moving.
#   2. A soft radial glow pulsing over the image's own focal light: the orange
#      joint, the lidar dome, the lit plane. The glow is screen-blended, so it
#      brightens what is already there rather than introducing a new shape.
#
# Both are driven by cos/sin over exactly one period across the clip, so the
# last frame flows into the first with no cut and no crossfade. That is the
# whole trick: animate only values that return to where they started.
#
# The glow is evaluated at quarter resolution and scaled up. It is a soft
# gradient, so it loses nothing, and geq is expensive per pixel.
#
# Usage: scripts/make-cover-loops.sh [slug ...]   (default: all configured)

set -euo pipefail

cd "$(dirname "$0")/.."
COVERS=public/covers

SECS=8
FPS=24
FRAMES=$((SECS * FPS))
W=1400
H=876
# Upscale headroom for the drift, and the radius of the circle it travels.
OW=1448
OH=906
DX=24
DY=15

# slug|glow centre x|centre y|sigma|glow r|g|b   (centres are in 1400x875 space)
CONFIGS=(
  "ai-liability|745|600|250|86|84|66"
  "manufacturing-autonomous-machinery|537|255|165|125|48|16"
  "humanoids|905|430|300|66|66|52"
  "autonomous-vehicles|566|400|135|82|80|64"
)

make_loop() {
  local slug=$1 cx=$2 cy=$3 sig=$4 gr=$5 gg=$6 gb=$7
  local src="$COVERS/$slug.jpg"

  if [[ ! -f $src ]]; then
    echo "  skip $slug (no still)"
    return
  fi

  # Quarter-resolution glow plate.
  local qw=$((W / 4)) qh=$((H / 4))
  local qcx=$((cx / 4)) qcy=$((cy / 4)) qsig=$((sig / 4))

  # Gaussian falloff, amplitude swinging over exactly one cosine period.
  local falloff="exp(-(pow(X-$qcx,2)+pow(Y-$qcy,2))/(2*pow($qsig,2)))"
  local pulse="(0.42+0.58*(0.5+0.5*cos(2*PI*N/$FRAMES)))"

  local filter="
    [0:v]scale=$OW:$OH,
         crop=$W:$H:x='$DX+$DX*cos(2*PI*n/$FRAMES)':y='$DY+$DY*sin(2*PI*n/$FRAMES)',
         setsar=1,format=gbrp[base];
    color=c=black:s=${qw}x${qh}:r=$FPS:d=$SECS,format=gbrp,
         geq=r='$gr*$falloff*$pulse':g='$gg*$falloff*$pulse':b='$gb*$falloff*$pulse',
         scale=$W:$H:flags=bicubic,setsar=1[glow];
    [base][glow]blend=all_mode=screen,format=yuv420p[out]
  "

  echo "  $slug"
  ffmpeg -y -loglevel error -loop 1 -framerate "$FPS" -i "$src" -t "$SECS" \
    -filter_complex "$filter" -map "[out]" \
    -c:v libvpx-vp9 -b:v 0 -crf 40 -row-mt 1 -an "$COVERS/$slug.webm"

  ffmpeg -y -loglevel error -loop 1 -framerate "$FPS" -i "$src" -t "$SECS" \
    -filter_complex "$filter" -map "[out]" \
    -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart -an \
    "$COVERS/$slug.mp4"
}

echo "Building ${SECS}s seamless loops:"
for cfg in "${CONFIGS[@]}"; do
  IFS='|' read -r slug cx cy sig gr gg gb <<<"$cfg"
  if [[ $# -gt 0 ]] && [[ ! " $* " == *" $slug "* ]]; then continue; fi
  make_loop "$slug" "$cx" "$cy" "$sig" "$gr" "$gg" "$gb"
done

echo
ls -lh "$COVERS"/*.webm "$COVERS"/*.mp4 2>/dev/null | awk '{printf "  %-52s %s\n", $9, $5}'

# The seam is the whole point, so it is measured rather than assumed: the step
# from the last frame back to the first must be no larger than an ordinary
# step between neighbouring frames.
if command -v python3 >/dev/null && python3 -c "import PIL" 2>/dev/null; then
  echo
  echo "Seam check (wrap step vs largest normal step):"
  python3 - "$COVERS" <<'PYEOF'
import pathlib, subprocess, sys, tempfile
from PIL import Image, ImageChops

covers = pathlib.Path(sys.argv[1])

def mad(a, b):
    d = ImageChops.difference(Image.open(a).convert("L"), Image.open(b).convert("L"))
    h = d.histogram()
    return sum(i * c for i, c in enumerate(h)) / sum(h)

for clip in sorted(covers.glob("*.webm")):
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(clip),
                        "-f", "image2", f"{tmp}/f%04d.png"], check=True)
        fr = sorted(pathlib.Path(tmp).glob("f*.png"))
        steps = [mad(fr[i], fr[i + 1]) for i in range(len(fr) - 1)]
        wrap = mad(fr[-1], fr[0])
        ok = "seamless" if wrap <= max(steps) else "SEAM VISIBLE"
        print(f"  {clip.stem:<42} wrap {wrap:6.3f}  max step {max(steps):6.3f}  {ok}")
PYEOF
fi
