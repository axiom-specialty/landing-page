# Cover image prompts

Every prompt is self-contained: copy one, paste it, generate. The house style is
repeated inside each prompt on purpose, so you never have to paste two things.

Above each prompt there are two short lines, **What it is** and **The idea**, so
you can check the logic before spending a generation. Don't paste those; paste
the indented block.

**Where the files go:** `public/covers/` in this repo.
**What to name them:** the "Save as" line. It is the product slug and must match
exactly, or the card falls back to the placeholder.

**After generating:** downloads arrive as `.png` or `.webp` with a random name.
Rename to the exact `.jpg` name given. Renaming a PNG to `.jpg` is fine here,
browsers render by content, not extension. Existing art is 1400x875.

---

## Two rules that drive the whole set

**1. Indoor products get interiors.** AI Liability, MGBox and AuxControl are
about businesses, offices and instruments. They are not landscapes. Only the
four lines that genuinely happen outdoors (yard, delivery, vehicles, and the
hero) get a horizon.

**2. The hero is dark, everything else is light.** The homepage headline is
cream text sitting directly on the image, so a cream-sky hero would make it
unreadable. Prompt 1 is deliberately deep-green dominant. Every other prompt is
cream dominant, because coverage cards put their title on a dark scrim at the
bottom instead.

The single terracotta accent is used once per image, and it always marks the
thing that matters: the loss, the defect, the bound policy. Not decoration, and
not a sunset in every frame.

---

## Status

| Save as                                  | Prompt | Action              |
| ---------------------------------------- | ------ | ------------------- |
| `home-hero.jpg`                          | 1      | generate            |
| `ai-liability.jpg`                       | 2      | **regenerate**      |
| `ai-liability-developers.jpg`            | 3      | generate            |
| `warehouse-robotics.jpg`                 | 4      | generate            |
| `manufacturing-autonomous-machinery.jpg` | 5      | regenerate or keep  |
| `yard-site-autonomy.jpg`                 | 6      | generate            |
| `delivery-robotics.jpg`                  | 7      | generate            |
| `humanoids.jpg`                          | 8      | keep, prompt for rerolls |
| `autonomous-vehicles.jpg`                | 9      | regenerate or keep  |
| `mgbox.jpg`                              | 10     | generate            |
| `auxcontrol.jpg`                         | 11     | generate            |

`ai-liability.jpg` is marked regenerate because the current art is an outdoor
scene, and the product is a corporate one. `humanoids.jpg` is the strongest
image in the set and is worth leaving alone.

---

## 1. Homepage hero

**What it is:** the whole company. AI decides, machines act, Auxilium insures
the consequence.
**The idea:** a field of decision on the right, and the machines it directs
standing in it. Dark, so cream headline text can sit on the left.

Save as: `home-hero.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A dark scene at dusk, deep forest green dominant. The entire left half of the frame is empty: bare dark ground and a dark sky with no subject in it at all, because headline text will be placed there. In the right half, a large flat plane of fine pale parallel light lines lies low across the ground and recedes toward the horizon, like an illuminated field. Standing on that field, facing away from the viewer into the distance, a small group of autonomous machines in silhouette: a humanoid figure nearest, a jointed robotic arm on a low plinth behind it, and a small wheeled mobile robot further back. Their long shadows rake left across the empty ground. Strictly four colors only: deep forest green (#1C4439) for the sky, ground and silhouettes and covering most of the image, muted sage green (#7D9C90) for the mid-tones, warm cream (#FFFEF2) used sparingly and only for the thin field lines, and burnt terracotta orange (#C25A38) used exactly once as a single small marker light on the nearest machine. Predominantly dark, low-key, nocturnal. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Calm, institutional, confident, restrained. No power lines, no pylons, no electrical towers, no wind turbines, no solar panels, no data center, no server racks, no industrial energy infrastructure of any kind. No sun, no sunset, no moon. No text, no lettering, no logos, no signage, no faces, no readable screens, no 3D render look, no neon, no cyberpunk, no lens flare. 16:10 wide landscape.

---

## 2. AI Liability, For Deployers

**What it is:** a business runs AI in its own operations, puts its name on the
output, and owes the duty when a third party is harmed by it.
**The idea:** work leaves the office under the company's name. One piece of it
causes the loss.

Save as: `ai-liability.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A corporate office interior seen from desk height. On the right, a desk with a single monitor whose screen is a plain soft rectangle of pale light with nothing readable on it. A person sits at the desk in silhouette, seen from behind, one hand resting on the desk beside the keyboard rather than on it. Out of the screen's light, a stream of flat document sheets flows across the desk, lifts, and travels left across the room and out through an open doorway, where three small silhouetted figures stand waiting to receive them. Exactly one sheet in that stream is burnt terracotta orange while all the others are pale cream. Strictly four colors only: warm cream paper (#FFFEF2) for the documents and the screen light, deep forest green (#1C4439) for the office walls, desk and silhouettes, muted sage green (#7D9C90) for the floor and mid-tones, and burnt terracotta orange (#C25A38) used exactly once for that single sheet. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Corporate, interior, quiet, accountable. No outdoor scene, no landscape, no horizon, no sky, no sun. No text, no lettering, no logos, no readable UI, no charts, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 3. AI Liability, For Developers

**What it is:** the insured builds the AI and supplies it to others. The duty is
about what was represented, tested and released; the exposure lands in someone
else's deployment.
**The idea:** one thing is made here, and copies of it leave for other people's
buildings. The flaw travels.

Save as: `ai-liability-developers.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A workshop interior seen from bench height. On the left, a workbench under a single focused overhead light, with one small glowing geometric module resting on it and a person in silhouette leaning over it, hands at the bench. Leaving the bench to the right, a row of identical copies of that module travels away in a straight line and passes out through three separate dark doorways in the far wall, each doorway a different size, each leading into darkness. The copies get smaller and fainter with distance. Exactly one copy, already far from the bench and about to pass through a doorway, glows burnt terracotta orange while all the others are pale. Strictly four colors only: warm cream paper (#FFFEF2) for the light and the modules, deep forest green (#1C4439) for the walls, bench and silhouette, muted sage green (#7D9C90) for the floor and mid-tones, and burnt terracotta orange (#C25A38) used exactly once for that single distant copy. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Interior, precise, with a quiet sense of consequence leaving the room. No outdoor scene, no landscape, no horizon, no sky, no sun. No text, no lettering, no logos, no readable screens, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 4. Warehouse Robotics

**What it is:** autonomous mobile robots and picking systems in fulfillment,
moving at speed on a floor they share with people.
**The idea:** the shared floor. That adjacency is the exposure.

Save as: `warehouse-robotics.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. The interior of a vast fulfillment warehouse in one-point perspective. Tall racking shelves run down both sides and recede toward a distant vanishing point, and a hard shaft of pale light falls down the length of the central aisle from high clerestory windows. On the aisle floor, three low flat autonomous mobile robots carrying tall stacked shelf pods move at different distances from the viewer. A single human worker stands in silhouette at the edge of the aisle, small against the racking, directly in the path of the nearest robot. Strictly four colors only: warm cream paper (#FFFEF2) for the shaft of light down the aisle, deep forest green (#1C4439) for the racking, shelf pods and the human silhouette, muted sage green (#7D9C90) for the floor and mid-tones, and burnt terracotta orange (#C25A38) used exactly once as the small status light on the nearest robot. Flat vector shapes with no outlines, hard-edged geometric shadows cast long down the aisle, heavy paper grain and a faint risograph misregistration texture. Orderly, industrial, calm on the surface and faintly tense underneath. No outdoor scene, no sky, no sun. No text, no lettering, no logos, no barcodes, no box markings, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 5. Manufacturing Autonomous Machinery

**What it is:** production machinery that makes its own decisions. Failure is
sensing, control and judgment, not just mechanical.
**The idea:** the machine is working and the operator's station is empty.

Save as: `manufacturing-autonomous-machinery.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A factory interior. Filling the right of the frame, a large jointed industrial robotic arm is caught mid-motion over a production line, its tool head reaching down toward a part on a conveyor. In the left foreground, close to the viewer and turned slightly away, an operator's control station stands empty: a simple console on a pedestal with a vacant stool beside it and no person anywhere in the scene. Behind them, the flat geometry of the plant: a mezzanine rail, a structural column, and a high window casting one hard shaft of pale light across the floor. Strictly four colors only: warm cream paper (#FFFEF2) for the shaft of light and the window, deep forest green (#1C4439) for the structure, console and deep shadow, muted sage green (#7D9C90) for the robotic arm and mid-tones, and burnt terracotta orange (#C25A38) used exactly once as a single small indicator light glowing at the arm's elbow joint. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Industrial, restrained, unattended. No outdoor scene, no sky, no sun. No text, no lettering, no logos, no sparks, no readable screens, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 6. Yard & Site Autonomy

**What it is:** heavy equipment moving under its own control on private ground,
inside a defined operating area: yards, ports, quarries, construction sites.
**The idea:** something very large moving with nobody in it, staying inside a
line painted on the ground.

Save as: `yard-site-autonomy.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. An open industrial container yard under a wide pale sky. In the middle distance, a very large autonomous haul truck moves across the frame from left to right: blunt, heavy, and with no cab and no windows at all, clearly built with no place for a driver. Behind it, stacked shipping containers form a flat blocky geometric skyline, and a gantry crane frames the left edge of the image. Painted on the ground and running the full width of the frame, a single crisp boundary line marks the edge of the machine's permitted operating area, and the truck stays well inside it. Strictly four colors only: warm cream paper (#FFFEF2) for the sky and the painted boundary line, deep forest green (#1C4439) for the containers, crane and truck silhouette, muted sage green (#7D9C90) for the ground and mid-tones, and burnt terracotta orange (#C25A38) used exactly once for a single container in the stack. Flat vector shapes with no outlines, hard-edged geometric shadows raking long across the yard, heavy paper grain and a faint risograph misregistration texture. Vast, quiet, unmanned, institutional, with generous empty sky in the upper half. No power lines, no pylons, no electrical towers, no wind turbines, no solar panels, no sun, no sunset. No text, no lettering, no logos, no container markings, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 7. Delivery Robotics

**What it is:** sidewalk, curbside and aerial delivery fleets operating in
public space. The exposure is third-party from the first mile.
**The idea:** a machine at work among people who are not its customers and
never agreed to be near it.

Save as: `delivery-robotics.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. An ordinary residential street scene at pavement level. In the right foreground, a small six-wheeled sidewalk delivery robot with a closed boxy lid waits at the edge of a curb, angled as if about to cross. Across the middle of the frame, a pedestrian crossing's parallel bars run over the road. On the sidewalk at left, three human figures in silhouette pass by at different distances, none of them looking at the robot: an adult walking, a person with a stroller, and a small child a few steps ahead of them near the curb. Behind everything, a flat geometric row of low building facades and one street tree. Strictly four colors only: warm cream paper (#FFFEF2) for the sky and the road markings, deep forest green (#1C4439) for the buildings, tree and human silhouettes, muted sage green (#7D9C90) for the sidewalk, road and the robot's body, and burnt terracotta orange (#C25A38) used exactly once as the robot's single small indicator light. Flat vector shapes with no outlines, hard-edged geometric shadows stretching across the sidewalk, heavy paper grain and a faint risograph misregistration texture. Ordinary, domestic, calm, with the machine deliberately small inside a human-scaled public space. No sun, no sunset. No text, no lettering, no logos, no shop signage, no license plates, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 8. Humanoids

**What it is:** humanoid robots moving into warehouses, plants and storefronts,
sharing physical space with people.
**The idea:** the machine is standing in a room built for a person. Current art
already nails this; prompt kept for rerolls only.

Save as: `humanoids.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A humanoid robot stands alone in a quiet interior, seen from behind, its segmented pale body lit by one hard shaft of daylight falling from an unseen high window and casting a long shadow across the floor toward the viewer. To the left, in shadow, the ordinary furniture of a human room: a low mid-century armchair, a potted plant, and a short flight of steps. The robot is motionless and slightly too still. Strictly four colors only: warm cream paper (#FFFEF2) for the shaft of light, deep forest green (#1C4439) for the walls and deep shadow, muted sage green (#7D9C90) for the robot's body and mid-tones, and burnt terracotta orange (#C25A38) used at most once as a single tiny accent, or omitted entirely. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Still, watchful, slightly uncanny, restrained. No outdoor scene, no sky, no sun. No text, no lettering, no logos, no faces, no facial features on the robot, no 3D render look, no neon. 16:10 wide landscape.

---

## 9. Autonomous Vehicles

**What it is:** self-driving fleets on public roads, from robotaxis to trucking.
Liability moves from the driver to the system that drives.
**The idea:** the seat is empty and the car is moving anyway.

Save as: `autonomous-vehicles.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A driverless car seen from behind and slightly to one side, close in the foreground, travelling away down a highway that recedes toward a low horizon. Through the car's rear and side windows the interior is clearly visible and completely empty: the driver's seat is vacant and the steering position unoccupied, while the car is plainly in motion. The lane markings run in hard parallel bars toward the vanishing point, and a faint fan of fine pale radiating lines spreads from the car's roof across the road ahead, suggesting the sensing that replaced the driver. Strictly four colors only: warm cream paper (#FFFEF2) for the sky and lane markings, deep forest green (#1C4439) for the road surface and the car's body, muted sage green (#7D9C90) for the mid-tones and the sensing fan, and burnt terracotta orange (#C25A38) used exactly once as the car's single tail light. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Calm, empty, forward-moving, institutional, with generous empty sky. No sun, no sunset, no other traffic. No text, no lettering, no logos, no license plates, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 10. MGBox

**What it is:** the platform the MGA itself runs on. A broker submission comes
in, passes through underwriting and authority, and a bind decision comes out.
Internal infrastructure, not a customer product.
**The idea:** disorder in, a decision out. Show the process, never a computer.

Save as: `mgbox.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A clean geometric abstraction of an administrative process, reading strictly left to right, shown as a side elevation with no perspective. On the left, a loose untidy heap of tilted paper documents at different angles. They travel rightward and pass in turn through three tall upright rectangular gateways standing in a row, each gateway narrower than the one before it. On the right, the documents emerge flat, squared, evenly spaced and perfectly aligned in a neat row. Exactly one of the emerging documents carries a single solid burnt terracotta orange mark, and it is the only one that does. Fine pale horizontal guide lines run the full width beneath everything, tying the stages together. Nothing in the image is a computer, a screen, a desk or a person. Strictly four colors only: warm cream paper (#FFFEF2) for the documents and background, deep forest green (#1C4439) for the three gateways and their shadows, muted sage green (#7D9C90) for the guide lines and mid-tones, and burnt terracotta orange (#C25A38) used exactly once for that single stamped mark. Flat vector shapes with no outlines, hard-edged geometric shadows falling to one side, heavy paper grain and a faint risograph misregistration texture. Precise, administrative, calm, institutional. No outdoor scene, no sky, no sun. No text, no lettering, no numbers, no handwriting, no logos, no UI, no screens, no keyboards, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 11. AuxControl

**What it is:** the risk-mitigation suite handed to the insured: adversarial
testing of their deployed agents, accreditation for what passes, and continuous
governance over how it runs. The active half of the policy.
**The idea:** a proving range. The agent is put in it, stressed, measured and
watched, before and during cover.

Save as: `auxcontrol.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. The interior of a testing chamber, seen straight on. At the center, a single humanoid machine figure stands alone inside a bright circular pool of light on the floor, with three concentric measurement rings marked on the floor around its feet. From above and from both sides, thin straight instrument lines converge precisely on the figure from many angles, measuring it from every direction at once. Along the right edge of the frame, a tall observation window looks into the chamber, and behind the glass one human figure stands in silhouette, watching and not intervening. Strictly four colors only: warm cream paper (#FFFEF2) for the pool of light and the instrument lines, deep forest green (#1C4439) for the chamber walls, the observer and deep shadow, muted sage green (#7D9C90) for the machine figure, the floor rings and mid-tones, and burnt terracotta orange (#C25A38) used exactly once for a single one of the converging instrument lines. Flat vector shapes with no outlines, hard-edged geometric shadows radiating from the central pool of light, heavy paper grain and a faint risograph misregistration texture. Vigilant, clinical, controlled, institutional, and never aggressive or military. No shields, no crosshairs, no targets, no weapons, no explosions. No outdoor scene, no sky, no sun. No text, no lettering, no logos, no UI, no screens, no readable instruments, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## If a result drifts off-style

Append the matching line to the prompt and regenerate.

- **Too 3D, too glossy** → "Absolutely flat and two-dimensional. No gradients except a single soft glow, no specular highlights, no reflections, no depth of field, no ambient occlusion."
- **Too many colors** → "Use only these four colors in the entire image and no other hues whatsoever: #FFFEF2, #1C4439, #7D9C90, #C25A38."
- **It added a sunset anyway** → "No sun, no sunset, no moon, no glowing orb, no circular light source on the horizon."
- **It added energy infrastructure** → "No power lines, no pylons, no transmission towers, no wind turbines, no solar panels, no smokestacks, no cooling towers."
- **The terracotta is everywhere** → "Burnt terracotta orange #C25A38 must appear exactly once, on one single small object, and nowhere else in the image."
- **An interior turned into a landscape** → "This is an interior scene. No horizon, no sky, no ground plane extending into the distance, no outdoor light."
- **Too busy** → "Simplify. At most three distinct objects in the entire composition, with large areas of empty flat color between them."
