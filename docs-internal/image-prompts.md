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

## The rules that drive the set

**1. Cream owns the biggest surface. This is the one that matters.**
Whatever fills the most area in the frame is `#FFFEF2`: the sky outdoors, the
walls indoors. Deep forest green `#1C4439` is only ever for objects,
silhouettes and shadows, never for the dominant surface.

Get this backwards and the image comes out dark no matter how many times the
prompt says "bright", because the palette assignment has already decided it.
That is exactly what happened to the first interiors: they assigned green to
the walls, and walls are the whole frame.

**2. Bright, always.** Nothing in this set is dark, nocturnal or low-key.
Cream headline text still reads over the hero because the page lays a dark
gradient over the art in CSS, the same way coverage cards already darken their
lower third to carry a title. Darkening belongs in the stylesheet, not the art.

**3. Coverage cards are sparse. The hero is not.** Each card represents exactly
one product at small size, so three or four objects with large flat areas of
empty color is right. The hero is the one frame that has to show the whole book
of business, so it carries more, organized in depth bands rather than laid out
in a row.

**4. Interiors for the corporate products.** AI Liability on both sides, MGBox
and AuxControl are about businesses, benches and instruments, not landscapes.
Only the hero and the four genuinely outdoor lines get a horizon.

**5. No sun anywhere.** It turned up in three straight generations, it is a
cliché, and a setting sun reads as decline, which is the wrong note for an
insurer. The single terracotta accent marks the thing that matters instead.

---

## Status

| Save as                                  | Prompt | Action              |
| ---------------------------------------- | ------ | ------------------- |
| `home-hero.jpg`                          | 1      | generate            |
| `ai-liability.jpg`                       | 2      | **regenerate**      |
| `ai-liability-developers.jpg`            | 3      | generate            |
| `warehouse-robotics.jpg`                 | 4      | generate            |
| `manufacturing-autonomous-machinery.jpg` | 5      | keep, or reroll     |
| `yard-site-autonomy.jpg`                 | 6      | generate            |
| `delivery-robotics.jpg`                  | 7      | generate            |
| `humanoids.jpg`                          | 8      | keep, best in set   |
| `autonomous-vehicles.jpg`                | 9      | keep, or reroll     |
| `mgbox.jpg`                              | 10     | generate            |
| `auxcontrol.jpg`                         | 11     | generate            |

---

## 1. Homepage hero

**What it is:** the whole book of business in one frame. A business deploys AI
indoors, machines act on its behalf outdoors, and Auxilium insures both.
**The idea:** a building sliced open so you can see the office work inside,
standing in a landscape where the machines it is responsible for are at work.
One terracotta line on the ground runs from the office out to them: the duty.

This is the one prompt that carries many elements. They are arranged in depth
bands (near road, middle ground, far skyline) so the frame stays legible.

Save as: `home-hero.jpg`

> A wide panoramic landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. Bright and high contrast. A large luminous warm cream sky fills the entire upper half of the frame and is completely empty, with nothing in it anywhere, because headline text will sit there. Everything else is arranged in three depth bands across the lower half. FAR BAND, at the back: a low flat skyline of stacked shipping containers with one blunt cab-less autonomous haul truck beside them, and next to that an open-sided industrial shed containing a jointed robotic arm and a small shelf-carrying wheeled robot. MIDDLE BAND: standing on open ground, a single humanoid figure seen from behind, and a small six-wheeled delivery robot on a path nearby. NEAR BAND, running across the very bottom of the frame: a straight road carrying one driverless car seen from behind with its interior visible and the driver's seat clearly empty. On the right side of the frame, a low modernist office building is shown in clean architectural cutaway, sliced open like a cross-section so two floors are visible inside: on the upper floor, three people seated at desks in front of plain pale glowing screens; on the lower floor, a workbench with a row of identical small modules travelling away from it toward an opening. The interior walls of the cutaway are pale cream. The ground everywhere is a flat plane ruled with fine parallel lines converging toward a distant vanishing point, and exactly one of those ground lines is burnt terracotta orange, running from the base of the office building out across the ground to the feet of the humanoid figure. Strictly four colors only: warm cream paper (#FFFEF2) for the sky, the cutaway interior walls and the screens, covering the majority of the image, muted sage green (#7D9C90) for the ground plane and mid-tones, deep forest green (#1C4439) only for the machines, vehicles, people, building frame and shadows, and burnt terracotta orange (#C25A38) used only for that single ground line. Flat vector shapes with no outlines, hard-edged geometric shadows raking to one side, heavy paper grain and a faint risograph misregistration texture. Calm, institutional, spacious, confident. No sun, no sunset, no moon, no glowing orb on the horizon. No power lines, no pylons, no transmission towers, no wind turbines, no solar panels, no smokestacks. No text, no lettering, no logos, no signage, no readable screens, no faces, no 3D render look, no neon, no cyberpunk. 16:10 wide landscape.

---

## 2. AI Liability, For Deployers

**What it is:** a business runs AI in its own operations, puts its name on the
output, and owes the duty when a third party is harmed by it.
**The idea:** work leaves the office under the company's name, and one piece of
it is the claim.

Save as: `ai-liability.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A bright, airy, sunlit corporate office interior. The back wall and ceiling are large flat expanses of warm cream and fill most of the frame, lit by a tall window of pale light, so the room reads as bright and open with generous empty space. Only three things are in the room, all of them dark shapes against that pale wall. On the right, a desk carrying a single monitor whose screen is a plain soft rectangle of pale light with nothing readable on it. Seated at it, one person in deep green silhouette seen from behind, one hand resting on the desk beside the keyboard rather than on it. Out of the screen, a stream of flat pale document sheets flows across the desk and travels left across the room, exiting through an open doorway. Exactly one sheet in that stream is burnt terracotta orange; every other sheet is pale cream. Strictly four colors only: warm cream paper (#FFFEF2) for the walls, ceiling, window light and documents, covering the majority of the image, muted sage green (#7D9C90) for the floor and mid-tones, deep forest green (#1C4439) only for the desk, the seated silhouette, the doorframe and the shadows, and burnt terracotta orange (#C25A38) used only for that single sheet. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Corporate, interior, quiet, accountable. This is an interior: no horizon, no sky, no sun, no landscape. No text, no lettering, no logos, no readable interface, no charts, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 3. AI Liability, For Developers

**What it is:** the insured builds the AI and supplies it to others. The duty is
what was represented, tested and released; the loss happens in someone else's
deployment.
**The idea:** one thing is made here, and identical copies of it leave for other
people's buildings. The flaw travels.

Save as: `ai-liability-developers.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A bright, airy, well-lit workshop interior. The back wall and ceiling are large flat expanses of warm cream and fill most of the frame, so the room reads as bright and open with generous empty space. Only three things are in the room, all of them dark shapes against that pale wall. On the left, a workbench with a single small pale geometric module resting on it, and one person in deep green silhouette leaning over the work. Leaving the bench and running to the right in a straight evenly spaced row, five identical copies of that module travel away toward an open doorway in the far wall, getting slightly smaller with distance. Exactly one copy, the one nearest the doorway and about to pass through it, is burnt terracotta orange; every other copy is pale. Strictly four colors only: warm cream paper (#FFFEF2) for the walls, ceiling and the modules, covering the majority of the image, muted sage green (#7D9C90) for the floor and mid-tones, deep forest green (#1C4439) only for the bench, the silhouette, the doorframe and the shadows, and burnt terracotta orange (#C25A38) used only for that single copy. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Interior, precise, with a quiet sense of something leaving the room. This is an interior: no horizon, no sky, no sun, no landscape. No text, no lettering, no logos, no readable screens, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 4. Warehouse Robotics

**What it is:** autonomous mobile robots and picking systems in fulfillment,
moving fast on a floor they share with people.
**The idea:** the shared floor. That adjacency is the exposure.

Save as: `warehouse-robotics.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. The interior of a vast, bright, airy fulfillment warehouse in strict one-point perspective. The upper half of the frame is a large flat expanse of warm cream: a high pale ceiling and a wall of clerestory light at the far end of the aisle, so the space reads as luminous and open. Plain racking shelves in muted sage green run down both sides and recede toward a distant vanishing point. Only two things are in the wide empty aisle, both dark shapes against the pale far wall: a low flat autonomous mobile robot carrying a tall stacked shelf pod, close to the viewer, and a single human worker in deep green silhouette standing at the aisle's edge directly in its path. Large flat areas of empty pale floor between them. Strictly four colors only: warm cream paper (#FFFEF2) for the ceiling, the far light and the aisle floor, covering the majority of the image, muted sage green (#7D9C90) for the racking and mid-tones, deep forest green (#1C4439) only for the robot, the shelf pod, the human silhouette and the shadows, and burnt terracotta orange (#C25A38) used only for one small status light on the robot. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows cast long down the aisle, heavy paper grain and a faint risograph misregistration texture. Orderly, industrial, calm on the surface and faintly tense underneath. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no barcodes, no box markings, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 5. Manufacturing Autonomous Machinery

**What it is:** production machinery that makes its own decisions. Failure is
sensing, control and judgment, not just mechanics.
**The idea:** the machine is working and the operator's chair is empty.

Save as: `manufacturing-autonomous-machinery.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A bright, airy factory interior. The back wall is a large flat expanse of warm cream with a tall window of pale light, filling most of the frame, so the space reads as luminous and open with generous empty floor. Only three things are in it, all dark shapes against that pale wall. Filling the right of the frame, a large jointed industrial robotic arm caught mid-motion, its tool head reaching down toward a conveyor. In the left foreground, close to the viewer, an operator's control station stands empty: a simple console on a pedestal with a vacant stool beside it, and no person anywhere in the scene. Strictly four colors only: warm cream paper (#FFFEF2) for the back wall, window and light, covering the majority of the image, muted sage green (#7D9C90) for the floor, the conveyor and mid-tones, deep forest green (#1C4439) only for the robotic arm, the console, the stool and the shadows, and burnt terracotta orange (#C25A38) used only for one small indicator light glowing at the arm's elbow joint. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Industrial, restrained, unattended. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no sparks, no readable screens, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 6. Yard & Site Autonomy

**What it is:** heavy equipment moving under its own control on private ground,
inside a defined operating area: yards, ports, quarries, construction sites.
**The idea:** something very large moving with nobody in it, staying inside a
line painted on the ground.

Save as: `yard-site-autonomy.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. An open industrial container yard under a large empty warm cream sky that fills the upper half of the frame. Only three things are in the scene. In the middle distance, a very large autonomous haul truck moves across the frame from left to right: blunt, heavy, with no cab and no windows at all, clearly built with no place for a driver. Behind it, a row of stacked shipping containers forms a flat blocky geometric skyline. Painted on the ground and running the full width of the image, one crisp pale boundary line marks the edge of the machine's permitted operating area, and the truck stays well inside it. Strictly four colors only: warm cream paper (#FFFEF2) for the sky and the painted boundary line, covering the majority of the image, muted sage green (#7D9C90) for the ground and mid-tones, deep forest green (#1C4439) only for the containers, the truck and the shadows, and burnt terracotta orange (#C25A38) used only for a single container in the stack. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows raking long across the yard, heavy paper grain and a faint risograph misregistration texture. Vast, quiet, unmanned, institutional, with generous empty sky. No sun, no sunset. No power lines, no pylons, no transmission towers, no wind turbines, no solar panels. No text, no lettering, no logos, no container markings, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 7. Delivery Robotics

**What it is:** sidewalk, curbside and aerial delivery fleets working in public
space. The exposure is third-party from the first mile.
**The idea:** a machine at work among people who never agreed to be near it.

Save as: `delivery-robotics.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. An ordinary residential street scene at sidewalk level, spare and uncluttered, under a large empty warm cream sky filling the upper half of the frame. Only three things are in it. In the right foreground, a small six-wheeled sidewalk delivery robot with a closed boxy lid waits at the edge of a curb, angled as if about to cross. On the sidewalk at left, two human figures in deep green silhouette pass by without looking at it: an adult walking, and a small child a few steps ahead of them, nearer the curb. Behind them, a flat geometric row of low building facades. Strictly four colors only: warm cream paper (#FFFEF2) for the sky, the sidewalk and the road markings, covering the majority of the image, muted sage green (#7D9C90) for the road and the robot's body, deep forest green (#1C4439) only for the building facades, the human silhouettes and the shadows, and burnt terracotta orange (#C25A38) used only for the robot's one small indicator light. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows stretching across the sidewalk, heavy paper grain and a faint risograph misregistration texture. Ordinary, domestic, calm, with the machine deliberately small inside a human-scaled public space. No sun, no sunset. No text, no lettering, no logos, no shop signage, no license plates, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 8. Humanoids

**What it is:** humanoid robots moving into warehouses, plants and storefronts,
sharing physical space with people.
**The idea:** the machine is standing in a room built for a person. The current
art already nails this; prompt kept for rerolls only. This is the one image in
the set that is deliberately moodier than the rest, and it works, so it keeps
its darker walls.

Save as: `humanoids.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A humanoid robot stands alone in a quiet interior, seen from behind, its segmented pale body lit by one hard shaft of daylight falling from an unseen high window and casting a long shadow across the floor toward the viewer. To the left, in shadow, the ordinary furniture of a human room: a low mid-century armchair, a potted plant, and a short flight of steps. The robot is motionless and slightly too still. Strictly four colors only: warm cream paper (#FFFEF2) for the broad shaft of light, which is a large bright area of the frame, deep forest green (#1C4439) for the walls and deep shadow, muted sage green (#7D9C90) for the robot's body and mid-tones, and burnt terracotta orange (#C25A38) used at most once as a tiny accent, or omitted entirely. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Still, watchful, slightly uncanny, restrained. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no faces, no facial features on the robot, no 3D render look, no neon. 16:10 wide landscape.

---

## 9. Autonomous Vehicles

**What it is:** self-driving fleets on public roads, from robotaxis to trucking.
Liability moves from the driver to the system that drives.
**The idea:** the seat is empty and the car is moving anyway.

Save as: `autonomous-vehicles.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A driverless car seen from behind and slightly to one side, close in the foreground, travelling away down an empty highway that recedes toward a low horizon under a large empty warm cream sky filling the upper half of the frame. Through the car's rear and side windows the interior is clearly visible and completely empty: the driver's seat vacant, the steering position unoccupied, while the car is plainly in motion. The lane markings run in hard parallel bars toward the vanishing point. Nothing else is in the scene. Strictly four colors only: warm cream paper (#FFFEF2) for the sky and the lane markings, covering the majority of the image, muted sage green (#7D9C90) for the road surface and mid-tones, deep forest green (#1C4439) only for the car's body and the shadows, and burnt terracotta orange (#C25A38) used only for the car's single tail light. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Calm, empty, forward-moving, institutional, with generous empty sky. No sun, no sunset, no other traffic, no roadside objects. No text, no lettering, no logos, no license plates, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## 10. MGBox

**What it is:** the platform the MGA itself runs on. A broker submission comes
in, is priced against a versioned ratebook, passes an authority gate that
decides who is allowed to answer it, and a bind decision comes out. Internal
infrastructure, not a customer product.
**The idea:** disorder in, one decision out. Show the process, never a computer.

Save as: `mgbox.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A clean geometric abstraction of an administrative process, reading strictly left to right as a flat side elevation with no perspective, on a large plain empty warm cream background that fills the whole frame. On the left, a loose untidy heap of pale paper documents at scattered angles, overlapping each other. They travel rightward in a single line and pass through three tall upright rectangular gateways standing in a row, each gateway visibly narrower than the one before it, so the path tightens as it goes. On the right, the documents emerge flat, squared, evenly spaced and perfectly aligned in a neat horizontal row. Exactly one of the emerging documents carries a single solid burnt terracotta orange stamp mark, and no other document has one. Nothing in the image is a computer, a screen, a desk, a machine or a person. Strictly four colors only: warm cream paper (#FFFEF2) for the background and the documents, covering the majority of the image, muted sage green (#7D9C90) for the shadows and mid-tones, deep forest green (#1C4439) only for the three gateways, and burnt terracotta orange (#C25A38) only for that single stamp. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows falling to one side, heavy paper grain and a faint risograph misregistration texture. Precise, administrative, calm, institutional. No horizon, no sky, no sun, no landscape. No text, no lettering, no numbers, no handwriting, no logos, no interface, no screens, no keyboards, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

The narrowing gateways are the point: intake, then the ratebook, then authority.
If they come back equal, append: "Each of the three gateways is clearly narrower
than the one to its left, so the opening visibly tightens from first to last."

---

## 11. AuxControl

**What it is:** the loss-control half of a policy. It connects to the insured's
workspace read-only, discovers every AI model, agent and shadow tool in use,
scores the exposure on the same basis the policy is underwritten, and keeps
watching. Adversarial testing and accreditation sit inside the same suite.
**The idea:** the AI you did not know was running. Discovery is the story, and
the one tool nobody sanctioned is the thing worth finding.

Save as: `auxcontrol.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A bright open-plan office interior seen straight on in flat elevation, with the back wall and ceiling as large expanses of warm cream filling most of the frame, so the space reads as luminous and uncluttered. Along the lower third, a simple repeating row of identical dark desk shapes in silhouette, evenly spaced like a diagram rather than a scene. A single broad horizontal band of pale light sweeps across the room at mid height, and where it passes, small geometric marker shapes are revealed hovering above some of the desks, each one joined to its desk by a thin vertical line. Most markers are pale and sit neatly in the row. Exactly one marker is burnt terracotta orange, and it hovers away from the row, off in an empty corner of the room with no desk beneath it at all. Strictly four colors only: warm cream paper (#FFFEF2) for the walls, ceiling and the sweeping band of light, covering the majority of the image, muted sage green (#7D9C90) for the floor and mid-tones, deep forest green (#1C4439) only for the desks, the markers and the shadows, and burnt terracotta orange (#C25A38) only for that single out-of-place marker. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Calm, clinical, observant, institutional. This is an interior: no horizon, no sky, no sun, no landscape. No text, no lettering, no numbers, no logos, no interface, no screens, no readable displays, no charts, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

The terracotta marker with no desk under it is the shadow AI, so it has to sit
clearly apart. If it lands inside the row, append: "The single orange marker is
positioned well away from every desk, alone in an otherwise empty part of the
room."

**Alternate, if you would rather lead with the testing half.** AuxControl also
runs deployed agents through an adversarial certification range, which reads as
a proving ground rather than a discovery. Use this only if accreditation
matters more than monitoring:

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. The interior of a bright, clean testing chamber seen straight on. The chamber walls and ceiling are large flat expanses of warm cream filling most of the frame, so the space reads as luminous, clinical and open. Only three things are in it, all dark shapes against those pale walls. At the center, a single humanoid machine figure stands alone inside a circular pool of light, with three concentric measurement rings marked on the floor around its feet. Converging on that figure from above and from both sides, a set of thin straight instrument lines measure it from many angles at once. At the right edge of the frame, a tall observation window, with one human figure standing behind the glass in deep green silhouette, watching and not intervening. Strictly four colors only: warm cream paper (#FFFEF2) for the chamber walls, ceiling and the pool of light, covering the majority of the image, muted sage green (#7D9C90) for the floor, the machine figure and the measurement rings, deep forest green (#1C4439) only for the instrument lines, the observer silhouette, the window frame and the shadows, and burnt terracotta orange (#C25A38) only for one single converging instrument line. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows radiating from the central pool of light, heavy paper grain and a faint risograph misregistration texture. Vigilant, clinical, controlled, institutional, never aggressive or military. No shields, no crosshairs, no targets, no weapons, no explosions. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no interface, no screens, no readable instruments, no faces, no 3D render look, no neon. 16:10 wide landscape.

---

## If a result drifts off-style

Append the matching line and regenerate.

- **It came out dark** → "The walls and the largest surfaces in this image must be warm cream #FFFEF2, not green. Deep forest green appears only on small objects, silhouettes and shadows. The overall image must read as bright, sunlit and high key."
- **Too 3D, too glossy** → "Absolutely flat and two-dimensional. No gradients except a single soft glow, no specular highlights, no reflections, no depth of field."
- **Too many colors** → "Use only these four colors in the entire image and no other hues whatsoever: #FFFEF2, #1C4439, #7D9C90, #C25A38. No yellow, no gold, no warm lamp light."
- **Too busy** → "Simplify. At most three distinct objects in the entire composition, with large areas of empty flat color between them."
- **It added a sunset** → "No sun, no sunset, no moon, no glowing orb, no circular light source on the horizon."
- **It added energy infrastructure** → "No power lines, no pylons, no transmission towers, no wind turbines, no solar panels, no smokestacks, no cooling towers."
- **The terracotta is everywhere** → "Burnt terracotta orange #C25A38 must appear exactly once, on one single small object, and nowhere else."
- **An interior turned into a landscape** → "This is an interior scene. No horizon, no sky, no ground receding to a vanishing point, no outdoor light."
