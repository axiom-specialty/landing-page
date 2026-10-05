# Home hero rotation: six scenes, robots-only motion

The home hero picks one of six scenes at random on each visit, like
charter.space (a broker, not an underwriter; three layered scenes there). Each
scene is a still with a short loop in which only the robots move.

Two tools, both free:

1. **Stills**: whatever image generator you used for the existing covers.
2. **Motion**: Wan 2.2 image-to-video on Hugging Face,
   https://huggingface.co/spaces/zerogpu-aoti/wan2-2-fp8da-aoti-faster
   - Free Hugging Face account: 5 GPU minutes a day (2 without logging in),
     roughly 5 to 8 clips a day.
   - Model license Apache 2.0; Wan claims no rights over generated content,
     so commercial use is fine. The Space adds no watermark.
   - Output 832x480 at 16 fps, up to 5 seconds. Low resolution is fine: only
     the robot regions of the clip are used, laid over the full-size still.

Settings in the Space: Duration **5.0**, Advanced Settings > Inference Steps
**8**, Randomize seed on until a take works, then note the seed. Append the
negative prompt below to the default one already in the box (do not replace
it).

**Negative prompt, append:**

> camera movement, camera pan, zoom, dolly, shaking, handheld, parallax, flicker, color shift, lighting change, morphing, melting, new objects appearing, objects disappearing, text, people, walking person, background moving, clouds moving, plants moving

---

## Shared rules for every still

The hero headline sits in the middle of the frame, so each image keeps a calm,
empty center and puts the robots on the left third, the right third and the
bottom fifth. On phones the sides crop off, so the bottom band always has at
least one robot. Robots are kept apart from each other so each can be cut out
cleanly for the motion layer.

This block ends every image prompt below. It is already included in each.

> Composition: wide 16:9 landscape. The center of the image is calm and empty: an area about 55% of the image width and the middle half of the image height is plain flat warm cream, with no objects, no lines, no lamps, no signage and no texture detail, reserved for a headline. All robots and machinery sit in the left third, the right third and the bottom fifth of the frame. Each robot is clearly separated from the others with open space around it and is shown mid-task. Style: flat mid-century modernist editorial illustration, like a 1960s corporate annual report cover or a vintage screen print. Strictly four colors only: warm cream paper (#FFFEF2) covering the majority of the image, muted sage green (#7D9C90) for floors and mid-tones, deep forest green (#1C4439) for the robots, machines, structures and shadows, and burnt terracotta orange (#C25A38) only for small beacon lights on the robots. Bright and high key, never dark. Flat shapes with no outlines, long hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. No people, no text, no lettering, no numbers, no logos, no readable screens, no 3D render look.

---

## 1. Fulfillment warehouse (Automaton & Fleet Protection)

**Image:**

> The interior of a tall, sunlit fulfillment warehouse with a long skylight in the ceiling. On the left, tall racking stacked with crates, and a robotic picking arm mounted on the racking lifting a crate from a shelf. On the right, an industrial palletizing robot arm stacking boxes onto a pallet. Along the bottom of the frame, two low autonomous mobile robots carrying shelving pods across the polished floor, heading in opposite directions, each with a small orange beacon. In the center, the far back wall of the warehouse is a plain pale cream expanse. Composition: wide 16:9 landscape. The center of the image is calm and empty: an area about 55% of the image width and the middle half of the image height is plain flat warm cream, with no objects, no lines, no lamps, no signage and no texture detail, reserved for a headline. All robots and machinery sit in the left third, the right third and the bottom fifth of the frame. Each robot is clearly separated from the others with open space around it and is shown mid-task. Style: flat mid-century modernist editorial illustration, like a 1960s corporate annual report cover or a vintage screen print. Strictly four colors only: warm cream paper (#FFFEF2) covering the majority of the image, muted sage green (#7D9C90) for floors and mid-tones, deep forest green (#1C4439) for the robots, machines, structures and shadows, and burnt terracotta orange (#C25A38) only for small beacon lights on the robots. Bright and high key, never dark. Flat shapes with no outlines, long hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. No people, no text, no lettering, no numbers, no logos, no readable screens, no 3D render look.

**Motion (Wan prompt):**

> Locked-off static camera, the frame does not move. The picking arm on the left slowly lifts the crate off the shelf and swings it a short distance. The palletizing arm on the right lowers a box onto the stack and rises again. The two mobile robots glide slowly across the floor in opposite directions, moving only a short distance. Their small orange beacons blink. Everything else in the scene stays perfectly still.

## 2. Robot assembly hall (Robot Maker Liability)

**Image:**

> A bright, high-ceilinged robot assembly hall. On the left, a robotic arm assembling a humanoid robot torso held on a workstand. On the right, a finished humanoid robot standing on a test platform under a steel gantry, with a second robotic arm beside it holding a calibration tool to its shoulder. Along the bottom of the frame, a low conveyor belt runs across the full width carrying robot parts: forearms, joints and a robot head. In the center, the tall back wall of the hall is plain pale cream. Composition: wide 16:9 landscape. The center of the image is calm and empty: an area about 55% of the image width and the middle half of the image height is plain flat warm cream, with no objects, no lines, no lamps, no signage and no texture detail, reserved for a headline. All robots and machinery sit in the left third, the right third and the bottom fifth of the frame. Each robot is clearly separated from the others with open space around it and is shown mid-task. Style: flat mid-century modernist editorial illustration, like a 1960s corporate annual report cover or a vintage screen print. Strictly four colors only: warm cream paper (#FFFEF2) covering the majority of the image, muted sage green (#7D9C90) for floors and mid-tones, deep forest green (#1C4439) for the robots, machines, structures and shadows, and burnt terracotta orange (#C25A38) only for small beacon lights on the robots. Bright and high key, never dark. Flat shapes with no outlines, long hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. No people, no text, no lettering, no numbers, no logos, no readable screens, no 3D render look.

**Motion (Wan prompt):**

> Locked-off static camera, the frame does not move. The assembly arm on the left rotates its wrist and presses a part into the robot torso. On the right, the humanoid robot on the test platform slowly turns its head and raises one arm a little while the calibration arm follows it. The conveyor belt along the bottom moves slowly from left to right, carrying the parts with it. Everything else in the scene stays perfectly still.

## 3. Living room (Home Humanoid Protection)

**Image:**

> A calm, sunlit modern living room with a tall window on the right edge. On the left, a slender humanoid robot standing at a low sideboard, folding a towel, with a neat stack of folded towels beside it. On the right, in front of the window, a second humanoid robot watering a potted plant with a small can. Along the bottom of the frame, a low round robot vacuum crossing a pale rug. In the center, a large plain pale cream wall with nothing on it. Composition: wide 16:9 landscape. The center of the image is calm and empty: an area about 55% of the image width and the middle half of the image height is plain flat warm cream, with no objects, no lines, no lamps, no signage and no texture detail, reserved for a headline. All robots and machinery sit in the left third, the right third and the bottom fifth of the frame. Each robot is clearly separated from the others with open space around it and is shown mid-task. Style: flat mid-century modernist editorial illustration, like a 1960s corporate annual report cover or a vintage screen print. Strictly four colors only: warm cream paper (#FFFEF2) covering the majority of the image, muted sage green (#7D9C90) for floors and mid-tones, deep forest green (#1C4439) for the robots, machines, structures and shadows, and burnt terracotta orange (#C25A38) only for small beacon lights on the robots. Bright and high key, never dark. Flat shapes with no outlines, long hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. No people, no text, no lettering, no numbers, no logos, no readable screens, no 3D render look.

**Motion (Wan prompt):**

> Locked-off static camera, the frame does not move. The humanoid robot on the left folds the towel in half and places it on the stack. The robot on the right tilts the watering can and slowly lowers it. The round robot vacuum glides slowly across the rug. The plants and the window stay perfectly still. Everything else in the scene stays perfectly still.

## 4. City street (Automaton & Fleet Protection, delivery)

**Image:**

> A quiet city street in the morning, seen from across the road at eye level, with a long row of low cream buildings along the back. On the left sidewalk, a six-wheeled sidewalk delivery robot with a small orange flag on a thin mast. On the right, a driverless car with a sensor pod on its roof, stopped at a crossing. Along the bottom of the frame, a second delivery robot rolling along the near curb. Above the low rooftops in the center, a large plain pale cream sky. Composition: wide 16:9 landscape. The center of the image is calm and empty: an area about 55% of the image width and the middle half of the image height is plain flat warm cream, with no objects, no lines, no lamps, no signage and no texture detail, reserved for a headline. All robots and machinery sit in the left third, the right third and the bottom fifth of the frame. Each robot is clearly separated from the others with open space around it and is shown mid-task. Style: flat mid-century modernist editorial illustration, like a 1960s corporate annual report cover or a vintage screen print. Strictly four colors only: warm cream paper (#FFFEF2) covering the majority of the image, muted sage green (#7D9C90) for floors and mid-tones, deep forest green (#1C4439) for the robots, machines, structures and shadows, and burnt terracotta orange (#C25A38) only for small beacon lights on the robots. Bright and high key, never dark. Flat shapes with no outlines, long hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. No people, no text, no lettering, no numbers, no logos, no readable screens, no 3D render look.

**Motion (Wan prompt):**

> Locked-off static camera, the frame does not move. The delivery robot on the left rolls slowly forward along the sidewalk, a short distance. The sensor pod on the driverless car's roof spins slowly. The delivery robot along the bottom rolls slowly the other way. Their small orange lights blink. The buildings, the sky and the road stay perfectly still.

## 5. Data hall (AI Liability, Agentic Certification & Coverage)

**Image:**

> A bright, clean data hall with tall rows of server racks receding on both sides. On the left, a robotic tape library: a gripper on a vertical rail moving storage cartridges between shelves. On the right, a slim wheeled inspection robot with a tall mast camera, scanning a rack. Along the bottom of the frame, a small low autonomous floor robot carrying a replacement drive across the polished floor. Small orange status lights on the racks and robots. In the center, the plain pale cream end wall of the hall. Composition: wide 16:9 landscape. The center of the image is calm and empty: an area about 55% of the image width and the middle half of the image height is plain flat warm cream, with no objects, no lines, no lamps, no signage and no texture detail, reserved for a headline. All robots and machinery sit in the left third, the right third and the bottom fifth of the frame. Each robot is clearly separated from the others with open space around it and is shown mid-task. Style: flat mid-century modernist editorial illustration, like a 1960s corporate annual report cover or a vintage screen print. Strictly four colors only: warm cream paper (#FFFEF2) covering the majority of the image, muted sage green (#7D9C90) for floors and mid-tones, deep forest green (#1C4439) for the robots, machines, structures and shadows, and burnt terracotta orange (#C25A38) only for small beacon lights on the robots. Bright and high key, never dark. Flat shapes with no outlines, long hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. No people, no text, no lettering, no numbers, no logos, no readable screens, no 3D render look.

**Motion (Wan prompt):**

> Locked-off static camera, the frame does not move. The tape library gripper on the left slides up its rail and pulls a cartridge from a shelf. The inspection robot on the right rolls forward a little and its mast camera pans slowly across the rack. The small floor robot glides slowly along the bottom. The orange status lights blink. The racks and walls stay perfectly still.

## 6. Robot test range (Agentic Certification & Coverage, Robot Maker Liability)

**Image:**

> A large, bright open hangar used as a robot test range, with painted lane markings on the floor. On the left, a four-legged quadruped robot stepping over a row of low obstacle blocks. On the right, a robotic arm at a test bench stacking small blocks into a tower. Along the bottom of the frame, a low wheeled robot following a painted line on the floor. In the center, the plain pale cream back wall of the hangar. Composition: wide 16:9 landscape. The center of the image is calm and empty: an area about 55% of the image width and the middle half of the image height is plain flat warm cream, with no objects, no lines, no lamps, no signage and no texture detail, reserved for a headline. All robots and machinery sit in the left third, the right third and the bottom fifth of the frame. Each robot is clearly separated from the others with open space around it and is shown mid-task. Style: flat mid-century modernist editorial illustration, like a 1960s corporate annual report cover or a vintage screen print. Strictly four colors only: warm cream paper (#FFFEF2) covering the majority of the image, muted sage green (#7D9C90) for floors and mid-tones, deep forest green (#1C4439) for the robots, machines, structures and shadows, and burnt terracotta orange (#C25A38) only for small beacon lights on the robots. Bright and high key, never dark. Flat shapes with no outlines, long hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. No people, no text, no lettering, no numbers, no logos, no readable screens, no 3D render look.

**Motion (Wan prompt):**

> Locked-off static camera, the frame does not move. The quadruped robot on the left takes two careful steps forward over an obstacle block. The arm on the right picks up a block and sets it on top of the tower. The wheeled robot along the bottom follows the painted line slowly. Everything else in the scene stays perfectly still.

---

## If a take goes wrong

- **The camera drifts or zooms**: start the prompt with "Static shot from a
  tripod. The camera is completely fixed." and regenerate with a new seed.
- **Too much motion, robots leave the frame**: replace "slowly" with "very
  slightly" and set Duration to 3.5.
- **The background ripples or shimmers**: does not matter. Only the robot
  regions of the clip are used; the rest of the frame comes from the still.
- **A robot morphs or grows an extra limb**: new seed. Wan holds rigid
  machines well but struggles with hands, so keep humanoid tasks simple.
