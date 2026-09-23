# Animation prompts

> On hold. Product heroes currently use the still image only. Keep this for
> when video comes back.

For turning each cover still into a short film where the objects in the scene
actually move.

Drop the result into `public/covers/<slug>.webm` (plus `<slug>.mp4`) and the
product page hero plays it automatically. Nothing needs wiring.

---

## Why not ffmpeg

The first attempt built these locally with ffmpeg: the still drifted in a slow
circle and a glow pulsed over the focal light. It looped perfectly and weighed
100KB, and it was still just the picture moving. That is the ceiling of the
technique. A flat JPG has no separable parts, so nothing inside it can move.

Getting the arm to swing or the papers to fly needs one of two things: a model
that generates new frames, or the illustration rebuilt as vector shapes that
can be keyframed. The first is far less work.

---

## What to use

**Image-to-video, ranked for this art.** All take the still plus a motion
prompt, hold the composition, and invent the in-between frames.

1. **Kling** (kling.ai). Free daily credits, and the best of the free tiers at
   holding a non-photographic style. Use Image to Video, not Text to Video.
2. **Hailuo / MiniMax** and **Luma Dream Machine**. Both have free tiers worth
   trying if a shot fights you elsewhere.
3. **Runway**. Strong, but the free credits run out fast.

Sora is gone: sora.chatgpt.com now serves a "Sora is no longer available"
notice with an export link, checked 23 September 2026. An earlier version of
this file recommended it first.

Earlier in this project I said AI video would wreck this style. That was too
broad and it was wrong. It applies to text-to-video, where the model invents
the scene. Image-to-video starts from your frame and only has to move it, which
is a much easier job and what these models are now good at.

**Local and genuinely free** is possible but not worth it here: ComfyUI plus
LTX-Video or Wan on an M4 with 16GB means a 20 to 40GB install and slow
generations for output no better than Kling's free tier.

**Not an image-to-video job:** if you want precise, art-directed motion, the
answer is Rive, rebuilding each illustration as vector shapes. Total control
and a 30KB file, at the cost of redrawing everything.

---

## Settings

- **8 to 10 seconds.** Generate the longest the tool allows, then trim.
- **Static camera.** Every prompt below says so explicitly. Left alone these
  models add a drift or a push-in, which breaks a hero image.
- **No motion-blur or "cinematic" presets.** They add photographic depth of
  field this style should not have.
- **Keep the still.** It is the poster and the reduced-motion fallback.

---

## Looping

These models do not loop. The last frame will not match the first, so a hero
will visibly jump when it restarts.

Fix it by ping-ponging: play the clip forward, then in reverse. The join is
exact at both ends, so the loop is seamless by construction, and at this kind
of slow ambient motion the reversal is invisible. A 5-second generation becomes
a 10-second loop.

```bash
ffmpeg -i in.mp4 -filter_complex "[0:v]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1[out]" \
  -map "[out]" -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 -an public/covers/<slug>.webm
```

Pick a shot that reverses cleanly: papers drifting, light shifting, rings
pulsing. Avoid anything with a clear one-way direction, like a car passing, or
the reversal will read as rewinding.

---

## The prompts

Each one describes **only what moves**. The image already supplies the scene,
so re-describing it invites the model to redraw it.

### AI Liability, For Deployers → `ai-liability`

> The sheets of paper drift slowly along their existing path across the room and out through the open doorway, lifting and settling gently as they travel, like pages caught in a soft draught. The single red sheet moves with them at the same pace. Everything else is completely motionless: the seated man does not move at all, and the desk, chair, monitor, walls, floor, window and plant are frozen. Locked-off static camera, no pan, no zoom, no push-in, no parallax. Preserve the flat two-dimensional illustration style exactly as it is: no added depth, no 3D, no photographic realism, no motion blur, no new objects, no text.

### Manufacturing Machinery → `manufacturing-autonomous-machinery`

> The concentric orange rings around the glowing joint pulse outward one after another and fade as they expand, like a slow repeating sensor ping, and the glow at the centre brightens and dims gently in time with them. The robotic arm makes one slow, small, smooth movement: the elbow rotates a few degrees and the gripper lowers slightly toward the crate below, then settles. Everything else is motionless: the factory walls, window, railing, conveyor and crates are frozen. Locked-off static camera, no pan, no zoom, no push-in. Preserve the flat two-dimensional illustration style exactly: no added depth, no 3D, no photographic realism, no sparks, no smoke, no new objects, no text.

If the arm deforms, drop the second sentence and let only the rings pulse.

### Humanoids → `humanoids`

> Fine dust drifts slowly through the shaft of light, and the light itself brightens and dims almost imperceptibly, as if a cloud were passing outside. The robot turns its head very slightly, a few degrees, then holds still. Nothing else moves: the chair, plant, steps, walls and floor are frozen, and the robot's body and limbs stay exactly where they are. Locked-off static camera, no pan, no zoom, no push-in. Preserve the flat two-dimensional illustration style exactly: no added depth, no 3D, no photographic realism, no new objects, no text.

### Autonomous Fleet Operations → `autonomous-fleet-operations`

> The pale speed lines and the curved sensor arcs stream continuously past the car from front to back, conveying forward motion, and the road surface and lane markings flow beneath the wheels in the same direction. The car itself holds its exact position and size in the frame, as though the camera were tracking alongside it. The hills, sky and sun stay completely still. Locked-off static camera, no pan, no zoom, no push-in, no shake. Preserve the flat two-dimensional illustration style exactly: no added depth, no 3D, no photographic realism, no motion blur on the car body, no new objects, no text.

This one has a clear direction of travel, so it will not ping-pong. Either
generate a long enough take that the restart is rare, or ask for the streaming
lines to move at a steady rate and cut on a repeat.

### For the covers that do not exist yet

The pattern: name the one or two things that move, say everything else is
frozen, lock the camera, and forbid depth, realism and new objects. Keep the
motion small. On a hero, a scene that is almost still reads as composed; a
scene in full motion reads as a screensaver.

---

## If a result comes back wrong

- **The camera moved** → "The camera is completely locked off and static. No pan, no tilt, no zoom, no push-in, no dolly, no handheld motion, no parallax."
- **It turned 3D or photographic** → "Strictly flat 2D vector illustration, exactly as in the source image. No added depth, no shading, no lighting changes, no photographic texture, no depth of field."
- **Everything started moving** → "Only <the one thing> moves. Every other element in the frame is completely frozen and identical to the source image."
- **It added things** → "Do not add any new objects, people, text, logos, particles, smoke or effects. The scene contains exactly what is in the source image."
- **The motion is too fast** → "The motion is extremely slow, gentle and subtle, barely perceptible over the full duration."
