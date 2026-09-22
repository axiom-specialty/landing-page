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

## Three rules that drive the whole set

**1. Everything is bright.** Cream sky, cream light, dark green silhouettes.
Nothing in this set is a dark image, including the hero. Cream headline text
will still read over the hero because the page lays a dark gradient over the
art in CSS, the same way coverage cards already darken their lower third to
carry a title. Darkening belongs in the stylesheet, not in the artwork.

**2. Three or four objects, no more.** The art that already works in this set
is sparse: a hand and a plane, a robot and a chair, pylons and a horizon. Large
flat areas of empty color are the style. A crowded prompt turns to mush.

**3. Interiors for the corporate products.** AI Liability on both sides, MGBox
and AuxControl are about businesses, benches and instruments, not landscapes.
Only the hero and the four genuinely outdoor lines get a horizon. The low
terracotta sun belongs to the hero alone; elsewhere the single terracotta
accent marks the thing that matters, and never decorates.

---

## Status

| Save as                                  | Prompt | Action                   |
| ---------------------------------------- | ------ | ------------------------ |
| `home-hero.jpg`                          | 1      | generate                 |
| `ai-liability.jpg`                       | 2      | **regenerate**           |
| `ai-liability-developers.jpg`            | 3      | generate                 |
| `warehouse-robotics.jpg`                 | 4      | generate                 |
| `manufacturing-autonomous-machinery.jpg` | 5      | keep, or reroll          |
| `yard-site-autonomy.jpg`                 | 6      | generate                 |
| `delivery-robotics.jpg`                  | 7      | generate                 |
| `humanoids.jpg`                          | 8      | keep, best in set        |
| `autonomous-vehicles.jpg`                | 9      | keep, or reroll          |
| `mgbox.jpg`                              | 10     | generate                 |
| `auxcontrol.jpg`                         | 11     | generate                 |

---

## 1. Homepage hero

**What it is:** the whole company. A business deploys AI, machines act on its
behalf, and Auxilium insures the consequence.
**The idea:** one wide landscape where the ground itself is a computational
field, with the insured business at one end and the machines it runs across it.
Open sky on the upper left, because the headline sits there.

This keeps the panoramic build of the first hero attempt, which worked. The
transmission pylons are replaced by the office block, so the frame carries the
AI-liability side of the business rather than energy infrastructure.

Save as: `home-hero.jpg`

> A wide panoramic landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A large open warm cream sky fills the entire upper half of the frame and is completely empty, with no object in it anywhere, because headline text will be placed there. All the subjects sit low, along the bottom third. Reading left to right: a low flat-roofed modernist office building in dark silhouette with one grid of small pale lit windows; then, further right and smaller, a jointed industrial robotic arm on a low plinth; then a humanoid figure standing and facing away toward the horizon. The ground beneath all of them is a single flat plane ruled with fine pale parallel lines that converge toward a vanishing point at the far right, so the ground reads as a field of computation the machines stand on. A low burnt terracotta orange sun sits on the horizon at that vanishing point. Long hard-edged shadows rake left from every object. Strictly four colors only: warm cream paper (#FFFEF2) for the sky and the ground lines, deep forest green (#1C4439) for the building, machines, shadows and silhouettes, muted sage green (#7D9C90) for the ground and mid-tones, and burnt terracotta orange (#C25A38) used only for the sun. Bright, high contrast, with a luminous cream sky, not dark and not nocturnal. Flat vector shapes with no outlines, heavy paper grain and a faint risograph misregistration texture. Calm, institutional, confident, spacious. No power lines, no pylons, no transmission towers, no wind turbines, no solar panels, no smokestacks, no cooling towers. No text, no lettering, no logos, no signage, no faces, no 3D render look, no neon, no cyberpunk. 16:10 wide landscape.

---

## 2. AI Liability, For Deployers

**What it is:** a business runs AI in its own operations, puts its name on the
output, and owes the duty when a third party is harmed by it.
**The idea:** work leaves the office under the company's name, and one piece of
it is the claim.

Save as: `ai-liability.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A spare corporate office interior, seen straight on from desk height, with large flat areas of empty wall and floor. Only three things are in the room. On the right, a desk carrying a single monitor whose screen is a plain soft rectangle of pale light with nothing readable on it. Seated at it, one person in dark silhouette seen from behind, one hand resting on the desk beside the keyboard rather than on it. Out of the screen's light, a stream of flat pale document sheets flows across the desk and travels left across the room, exiting through an open doorway into brightness. Exactly one sheet in that stream is burnt terracotta orange; every other sheet is pale cream. Strictly four colors only: warm cream paper (#FFFEF2) for the documents, the screen light and the doorway, deep forest green (#1C4439) for the walls, desk and silhouette, muted sage green (#7D9C90) for the floor and mid-tones, and burnt terracotta orange (#C25A38) used only for that single sheet. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Corporate, interior, quiet, accountable. This is an interior: no horizon, no sky, no sun, no landscape. No text, no lettering, no logos, no readable interface, no charts, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 3. AI Liability, For Developers

**What it is:** the insured builds the AI and supplies it to others. The duty is
what was represented, tested and released; the loss happens in someone else's
deployment.
**The idea:** one thing is made here, and identical copies of it leave for other
people's buildings. The flaw travels.

Save as: `ai-liability-developers.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A spare workshop interior, seen straight on from bench height, with large flat areas of empty wall and floor. Only three things are in the room. On the left, a workbench under one focused cone of pale overhead light, with a single small pale geometric module resting on it. Leaning over the bench, one person in dark silhouette, hands at the work. Leaving the bench and running to the right in a straight evenly spaced row, five identical copies of that module travel away toward a dark open doorway in the far wall, getting slightly smaller with distance. Exactly one copy, the one nearest the doorway and about to pass through it, is burnt terracotta orange; every other copy is pale. Strictly four colors only: warm cream paper (#FFFEF2) for the light and the modules, deep forest green (#1C4439) for the walls, bench, doorway and silhouette, muted sage green (#7D9C90) for the floor and mid-tones, and burnt terracotta orange (#C25A38) used only for that single copy. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Interior, precise, with a quiet sense of something leaving the room. This is an interior: no horizon, no sky, no sun, no landscape. No text, no lettering, no logos, no readable screens, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 4. Warehouse Robotics

**What it is:** autonomous mobile robots and picking systems in fulfillment,
moving fast on a floor they share with people.
**The idea:** the shared floor. That adjacency is the exposure.

Save as: `warehouse-robotics.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. The interior of a vast fulfillment warehouse in strict one-point perspective. Tall plain racking shelves run down both sides and recede to a distant vanishing point, and a broad shaft of pale light falls down the length of the empty central aisle. Only two things are in the aisle: a low flat autonomous mobile robot carrying a tall stacked shelf pod, close to the viewer, and a single human worker standing in dark silhouette at the aisle's edge directly in its path. Large flat areas of empty floor between them. Strictly four colors only: warm cream paper (#FFFEF2) for the shaft of light down the aisle, deep forest green (#1C4439) for the racking, the shelf pod and the human silhouette, muted sage green (#7D9C90) for the floor and mid-tones, and burnt terracotta orange (#C25A38) used only for one small status light on the robot. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows cast long down the aisle, heavy paper grain and a faint risograph misregistration texture. Orderly, industrial, calm on the surface and faintly tense underneath. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no barcodes, no box markings, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 5. Manufacturing Autonomous Machinery

**What it is:** production machinery that makes its own decisions. Failure is
sensing, control and judgment, not just mechanics.
**The idea:** the machine is working and the operator's chair is empty.

Save as: `manufacturing-autonomous-machinery.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A spare factory interior with large flat areas of empty floor and wall. Only three things are in it. Filling the right of the frame, a large jointed industrial robotic arm caught mid-motion, its tool head reaching down toward a conveyor. In the left foreground, close to the viewer, an operator's control station stands empty: a simple console on a pedestal with a vacant stool beside it, and no person anywhere in the scene. Behind them, one high window casting a single hard shaft of pale light across the floor. Strictly four colors only: warm cream paper (#FFFEF2) for the window and the shaft of light, deep forest green (#1C4439) for the structure, console and deep shadow, muted sage green (#7D9C90) for the robotic arm and mid-tones, and burnt terracotta orange (#C25A38) used only for one small indicator light glowing at the arm's elbow joint. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Industrial, restrained, unattended. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no sparks, no readable screens, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 6. Yard & Site Autonomy

**What it is:** heavy equipment moving under its own control on private ground,
inside a defined operating area: yards, ports, quarries, construction sites.
**The idea:** something very large moving with nobody in it, staying inside a
line painted on the ground.

Save as: `yard-site-autonomy.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. An open industrial container yard under a large empty pale sky that fills the upper half of the frame. Only three things are in the scene. In the middle distance, a very large autonomous haul truck moves across the frame from left to right: blunt, heavy, with no cab and no windows at all, clearly built with no place for a driver. Behind it, a row of stacked shipping containers forms a flat blocky geometric skyline. Painted on the ground and running the full width of the image, one crisp boundary line marks the edge of the machine's permitted operating area, and the truck stays well inside it. Strictly four colors only: warm cream paper (#FFFEF2) for the sky and the painted boundary line, deep forest green (#1C4439) for the containers and the truck, muted sage green (#7D9C90) for the ground and mid-tones, and burnt terracotta orange (#C25A38) used only for a single container in the stack. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows raking long across the yard, heavy paper grain and a faint risograph misregistration texture. Vast, quiet, unmanned, institutional, with generous empty sky. No power lines, no pylons, no transmission towers, no wind turbines, no solar panels, no sun, no sunset. No text, no lettering, no logos, no container markings, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 7. Delivery Robotics

**What it is:** sidewalk, curbside and aerial delivery fleets working in public
space. The exposure is third-party from the first mile.
**The idea:** a machine at work among people who never agreed to be near it.

Save as: `delivery-robotics.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. An ordinary residential street scene at sidewalk level, spare and uncluttered with large flat areas of empty pavement and sky. Only three things are in it. In the right foreground, a small six-wheeled sidewalk delivery robot with a closed boxy lid waits at the edge of a curb, angled as if about to cross. On the sidewalk at left, two human figures in dark silhouette pass by without looking at it: an adult walking, and a small child a few steps ahead of them, nearer the curb. Behind them, a flat geometric row of low building facades. Strictly four colors only: warm cream paper (#FFFEF2) for the sky and the road markings, deep forest green (#1C4439) for the buildings and the human silhouettes, muted sage green (#7D9C90) for the sidewalk, road and the robot's body, and burnt terracotta orange (#C25A38) used only for the robot's one small indicator light. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows stretching across the sidewalk, heavy paper grain and a faint risograph misregistration texture. Ordinary, domestic, calm, with the machine deliberately small inside a human-scaled public space. No sun, no sunset. No text, no lettering, no logos, no shop signage, no license plates, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 8. Humanoids

**What it is:** humanoid robots moving into warehouses, plants and storefronts,
sharing physical space with people.
**The idea:** the machine is standing in a room built for a person. The current
art already nails this; prompt kept for rerolls only.

Save as: `humanoids.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A humanoid robot stands alone in a quiet interior, seen from behind, its segmented pale body lit by one hard shaft of daylight falling from an unseen high window and casting a long shadow across the floor toward the viewer. To the left, in shadow, the ordinary furniture of a human room: a low mid-century armchair, a potted plant, and a short flight of steps. The robot is motionless and slightly too still. Strictly four colors only: warm cream paper (#FFFEF2) for the shaft of light, deep forest green (#1C4439) for the walls and deep shadow, muted sage green (#7D9C90) for the robot's body and mid-tones, and burnt terracotta orange (#C25A38) used at most once as a tiny accent, or omitted entirely. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Still, watchful, slightly uncanny, restrained. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no faces, no facial features on the robot, no 3D render look, no neon. 16:10 wide landscape.

---

## 9. Autonomous Vehicles

**What it is:** self-driving fleets on public roads, from robotaxis to trucking.
Liability moves from the driver to the system that drives.
**The idea:** the seat is empty and the car is moving anyway.

Save as: `autonomous-vehicles.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A driverless car seen from behind and slightly to one side, close in the foreground, travelling away down an empty highway that recedes toward a low horizon under a large pale sky. Through the car's rear and side windows the interior is clearly visible and completely empty: the driver's seat vacant, the steering position unoccupied, while the car is plainly in motion. The lane markings run in hard parallel bars toward the vanishing point. Nothing else is in the scene. Strictly four colors only: warm cream paper (#FFFEF2) for the sky and the lane markings, deep forest green (#1C4439) for the road surface and the car's body, muted sage green (#7D9C90) for the mid-tones, and burnt terracotta orange (#C25A38) used only for the car's single tail light. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Calm, empty, forward-moving, institutional, with generous empty sky. No sun, no sunset, no other traffic, no roadside objects. No text, no lettering, no logos, no license plates, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 10. MGBox

**What it is:** the platform the MGA itself runs on. A broker submission comes
in, passes through underwriting and authority, and a bind decision comes out.
Internal infrastructure, not a customer product.
**The idea:** disorder in, a decision out. Show the process, never a computer.

Save as: `mgbox.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A clean geometric abstraction of an administrative process, reading strictly left to right as a flat side elevation with no perspective, on a plain empty background. On the left, a loose untidy heap of pale paper documents at scattered angles. They travel rightward and pass through three tall upright rectangular gateways standing in a row, each gateway narrower than the one before it. On the right, the documents emerge flat, squared and evenly spaced in a neat horizontal row. Exactly one of the emerging documents carries a single solid burnt terracotta orange mark, and no other document has one. Nothing in the image is a computer, a screen, a desk, a machine or a person. Strictly four colors only: warm cream paper (#FFFEF2) for the documents and the background, deep forest green (#1C4439) for the three gateways and their shadows, muted sage green (#7D9C90) for the shadows and mid-tones, and burnt terracotta orange (#C25A38) used only for that single mark. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows falling to one side, heavy paper grain and a faint risograph misregistration texture. Precise, administrative, calm, institutional. No horizon, no sky, no sun, no landscape. No text, no lettering, no numbers, no handwriting, no logos, no interface, no screens, no keyboards, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 11. AuxControl

**What it is:** the risk-mitigation suite handed to the insured: adversarial
testing of their deployed agents, accreditation for what passes, and continuous
governance over how it runs. The active half of the policy.
**The idea:** a proving range. The agent is put in it, stressed, measured and
watched.

Save as: `auxcontrol.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. The interior of a spare testing chamber seen straight on, with large flat areas of empty wall and floor. Only three things are in it. At the center, a single humanoid machine figure stands alone inside a bright circular pool of pale light, with three concentric measurement rings marked on the floor around its feet. Converging on that figure from above and from both sides, a set of thin straight pale instrument lines measure it from many angles at once. At the right edge of the frame, a tall observation window, with one human figure standing behind the glass in dark silhouette, watching and not intervening. Strictly four colors only: warm cream paper (#FFFEF2) for the pool of light and the instrument lines, deep forest green (#1C4439) for the chamber walls, the observer and deep shadow, muted sage green (#7D9C90) for the machine figure, the floor rings and mid-tones, and burnt terracotta orange (#C25A38) used only for one single converging instrument line. Bright and high contrast. Flat vector shapes with no outlines, hard-edged geometric shadows radiating from the central pool of light, heavy paper grain and a faint risograph misregistration texture. Vigilant, clinical, controlled, institutional, never aggressive or military. No shields, no crosshairs, no targets, no weapons, no explosions. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no interface, no screens, no readable instruments, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## If a result drifts off-style

Append the matching line and regenerate.

- **Too dark or murky** → "Bright and high contrast, with large luminous cream areas. The image must not be dark, dim, nocturnal or low-contrast."
- **Too 3D, too glossy** → "Absolutely flat and two-dimensional. No gradients except a single soft glow, no specular highlights, no reflections, no depth of field."
- **Too many colors** → "Use only these four colors in the entire image and no other hues whatsoever: #FFFEF2, #1C4439, #7D9C90, #C25A38."
- **Too busy** → "Simplify. At most three distinct objects in the entire composition, with large areas of empty flat color between them."
- **It added a sunset** → "No sun, no sunset, no moon, no glowing orb, no circular light source on the horizon."
- **It added energy infrastructure** → "No power lines, no pylons, no transmission towers, no wind turbines, no solar panels, no smokestacks, no cooling towers."
- **The terracotta is everywhere** → "Burnt terracotta orange #C25A38 must appear exactly once, on one single small object, and nowhere else."
- **An interior turned into a landscape** → "This is an interior scene. No horizon, no sky, no ground receding to a vanishing point, no outdoor light."
