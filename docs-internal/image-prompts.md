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

**What it is:** an agent developer embeds our API once, and every customer they
deploy to can take cover on that deployment.
**The idea:** a part inside the product, made by someone else. Open the
developer's product and the cover is already in there, seated among the working
components like a supplier's part in a finished machine.

**Four attempts failed before this one, and the reason is worth keeping.** An
API has no physical form, so every metaphor slid off: a defect travelling
downstream read as a warehouse, a fan of lines read as an architecture slide,
machined casings read as blobs, and a cutaway of offices read as an office.
This version works because "embedded" is a physical word before it is a
technical one, and a component sitting inside another maker's product is
something everyone already recognizes. The foreign part is a seal rather than a
chip, so it reads as cover rather than hardware.

Save as: `ai-liability-developers.jpg`

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A close three-quarter view of a single well-made product resting on a broad flat surface: a simple modernist rectangular enclosure with clean proportions, in the manner of mid-century industrial design. One face of the enclosure is opened and swung aside, revealing the inside, which is filled with an orderly arrangement of pale rectangular components seated neatly in rows, all clearly belonging to the same product and all in the same pale tone. Among them, seated in its own bay and unmistakably not like the others, sits one small circular seal in burnt terracotta orange, raised slightly proud of the components around it, with the plain concentric rings of a struck seal or an issued mark. It is plainly a part supplied by someone else and already built in. That orange appears nowhere else in the image. A very large expanse of empty warm cream fills the upper half and the right of the frame, and one long hard-edged shadow rakes from the product across the surface. Strictly four colors only: warm cream paper (#FFFEF2) for the background, the surface and the internal components, covering the majority of the image, muted sage green (#7D9C90) for the inner walls of the enclosure and mid-tones, deep forest green (#1C4439) only for the outer shell of the product, the opened face and the shadows, and burnt terracotta orange (#C25A38) only for that single seal. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, heavy paper grain and a faint risograph misregistration texture. Precise, engineered, quiet, institutional. No wires, no cables, no circuit traces, no connector lines, no arrows, no network diagram, no nodes, no icons, no screens, no buildings, no map. No people, no faces, no hands. No text, no lettering, no numbers, no logos, no sky, no horizon, no sun, no 3D render look, no neon. 16:10 wide landscape.

The whole read is one part that does not belong to the product it is inside. If
the seal blends in, append: "The orange circular seal is visibly different in
shape, colour and finish from every other component around it, and clearly made
by a different manufacturer."

If it turns into electronics, append: "This is not a circuit board and there
are no electronics. The interior holds plain, solid, featureless blocks, and
one struck seal among them."

---

## 4. Warehouse Robotics

**What it is:** autonomous mobile robots and picking systems in fulfillment,
moving fast on a floor they share.
**The idea:** a fleet, not a machine. Three robots on three different headings
in one aisle is what traffic management actually looks like, and it is where
the exposure lives.

Save as: `warehouse-robotics.jpg`

**Note on the palette.** This is the one image in the set with more than one
terracotta accent. Each robot carries the same orange marker light, so it reads
as a repeated piece of equipment rather than decoration, which is why the rule
bends here.

### If you already have the single-robot version, edit it

Feed the existing image back in with this. It keeps the aisle, the racking and
the light, which are the parts worth keeping.

> Edit this image. Remove the person standing on the right entirely, leaving the aisle floor and racking behind them intact and unbroken. Keep the existing robot where it is, carrying its shelf pod and facing toward the viewer. Add a second identical robot on the right side of the aisle, roughly where the person was standing, travelling in the opposite direction so it is seen from behind, moving away from the viewer down the aisle. Add a third robot much smaller and far away in the background, crossing the frame horizontally from left to right through a perpendicular cross-aisle, so it is travelling across the view rather than along it. Each of the three robots carries the same small horizontal burnt terracotta orange marker light on its base. Change nothing else: the racking, the pendant lights, the bright far wall, the floor, the perspective, the palette and the texture all stay exactly as they are. Keep the flat two-dimensional mid-century illustration style with no added depth, no 3D, no photographic realism and no text.

### Or generate it fresh

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. The interior of a vast, bright, airy fulfillment warehouse in strict one-point perspective. The upper half of the frame is a large flat expanse of warm cream: a high pale ceiling with a row of simple pendant lights, and a wall of clerestory light at the far end of the aisle, so the space reads as luminous and open. Plain racking shelves in muted sage green run down both sides and recede toward a distant vanishing point. Three autonomous mobile robots are in the aisle and no people at all. The first is close to the viewer on the left, carrying a tall stacked shelf pod and travelling toward the viewer. The second is further back on the right, travelling in the opposite direction and seen from behind as it moves away down the aisle. The third is much smaller and far away, crossing the frame horizontally from left to right through a perpendicular cross-aisle, travelling across the view rather than along it. Each robot carries one small horizontal burnt terracotta orange marker light on its base, and that orange appears nowhere else in the image. Large flat areas of empty pale floor between them. Strictly four colors only: warm cream paper (#FFFEF2) for the ceiling, the far light and the aisle floor, covering the majority of the image, muted sage green (#7D9C90) for the racking and mid-tones, deep forest green (#1C4439) only for the robots, the shelf pod, the pendant lights and the shadows, and burnt terracotta orange (#C25A38) only for the three marker lights. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows cast long down the aisle, heavy paper grain and a faint risograph misregistration texture. Orderly, industrial, busy but calm, with three machines working past each other on three different headings. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no barcodes, no box markings, no people, no faces, no 3D render look, no neon. 16:10 wide landscape.

If the third robot comes back travelling down the aisle like the others,
append: "The smallest robot in the far distance moves sideways across the
frame, perpendicular to the main aisle, crossing from the left edge toward the
right."

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
**The idea:** machines at work among people who never agreed to be near them.
The pedestrians are walking away, which leaves the robot alone at the curb with
the crossing in front of it.

Save as: `delivery-robotics.jpg`

**Note on the palette.** Like warehouse robotics, this one carries more than one
terracotta accent: each robot has the same indicator light, which reads as
equipment rather than decoration.

### If you already have the single-robot version, edit it

> Edit this image. Move the woman and the child further away down the same sidewalk, so they are smaller and deeper into the scene, and turn them so their backs are to the viewer and they are walking away into the distance rather than across the frame. Add a second delivery robot on the opposite sidewalk, across the road on the far side, smaller with distance and carrying the same small burnt terracotta orange indicator light. Reposition the main delivery robot so its vertical centre sits on the horizontal midline of the image, halfway between the top and bottom edges, keeping it at the curb and keeping its size and its orange indicator as they are. Change nothing else: the buildings, hedges, trees, road, crossing stripes, sky, palette and texture all stay exactly as they are. Keep the flat two-dimensional mid-century illustration style with no added depth, no 3D, no photographic realism and no text.

### Or generate it fresh

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. An ordinary residential street scene at sidewalk level, spare and uncluttered, under a large empty warm cream sky filling the upper half of the frame. A small six-wheeled sidewalk delivery robot with a closed boxy lid waits at the edge of a curb beside a pedestrian crossing, positioned so that its vertical centre sits on the horizontal midline of the image, halfway between the top and bottom edges of the frame. Further down the same sidewalk, deeper into the scene and noticeably smaller with distance, two human figures in deep green silhouette walk away from the viewer with their backs turned: an adult and a child beside them, neither looking at the robot. Across the road on the opposite sidewalk, a second delivery robot of the same kind travels along, smaller again with distance. Behind everything, a flat geometric row of low building facades, clipped hedges and a few simple trees. Each robot carries one small burnt terracotta orange indicator light, and that orange appears nowhere else in the image. Strictly four colors only: warm cream paper (#FFFEF2) for the sky, the sidewalk and the crossing stripes, covering the majority of the image, muted sage green (#7D9C90) for the road, hedges, trees and the robots' bodies, deep forest green (#1C4439) only for the building facades, the human silhouettes and the shadows, and burnt terracotta orange (#C25A38) only for the indicator lights. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows stretching across the sidewalk, heavy paper grain and a faint risograph misregistration texture. Ordinary, domestic, calm, with the machines deliberately small inside a human-scaled public space. No sun, no sunset. No text, no lettering, no logos, no shop signage, no license plates, no faces, no 3D render look, no neon. 16:10 wide landscape.

If the figures come back in profile again, append: "The adult and the child are
seen strictly from behind, walking directly away from the viewer down the
sidewalk. Neither face is visible."

---

## 8. Humanoids

**What it is:** humanoid robots moving out of demos and into warehouses, plants
and storefronts, sharing physical space with people and property.
**The idea:** the machine at work, close to someone. The exposure is the
proximity, not the machine.

The current art, a robot standing alone in a shaft of light, is the most
atmospheric image in the set but it says uncanny rather than operating. These
three show it working. **Option A is the recommendation**, because a plant floor
carries bodily injury and property damage more plainly than the others.

Save as: `humanoids.jpg`

### A. Factory floor, recommended

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A bright, airy plant interior. The back wall and high clerestory windows are large flat expanses of warm cream filling most of the frame, so the space reads as luminous and open. At a long workbench in the middle distance, a humanoid robot stands working with both hands at the bench, its segmented pale body turned in three-quarter view, clearly mid-task. Beside it at the same bench, close enough to touch, a human worker in deep green silhouette works on the same line. Behind them, the flat geometry of the plant: a structural column, a mezzanine rail and a row of simple crates. Exactly one small burnt terracotta orange marker light sits on the robot's shoulder, and that orange appears nowhere else. Strictly four colors only: warm cream paper (#FFFEF2) for the walls, windows and light, covering the majority of the image, muted sage green (#7D9C90) for the robot's body, the bench and mid-tones, deep forest green (#1C4439) only for the human silhouette, the structure, the crates and the shadows, and burnt terracotta orange (#C25A38) only for that marker. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Ordinary, industrial, matter of fact: two workers at one bench, one of them a machine. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no sparks, no readable screens, no faces, no facial features on the robot, no 3D render look, no neon. 16:10 wide landscape.

### B. Folding laundry

Laundry folding is the demo task every humanoid company shows, so this reads as
knowing rather than generic. It is the warmest of the three and the lowest
stakes, which cuts both ways for an insurer.

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A bright commercial laundry room interior. The walls and a tall window are large flat expanses of warm cream filling most of the frame, so the space reads as luminous, clean and calm. At a broad folding table in the centre, a humanoid robot stands with both arms raised, holding a large square of pale folded cloth taut between its hands, caught mid-fold, its segmented pale body in three-quarter view. On the table beside it, a neat stack of already-folded linen, and a low cart of unfolded cloth waiting at the table's end. A human worker in deep green silhouette works further down the same table. Exactly one small burnt terracotta orange marker light sits on the robot's shoulder, and that orange appears nowhere else. Strictly four colors only: warm cream paper (#FFFEF2) for the walls, window, light and the linen, covering the majority of the image, muted sage green (#7D9C90) for the robot's body, the table and mid-tones, deep forest green (#1C4439) only for the human silhouette, the cart and the shadows, and burnt terracotta orange (#C25A38) only for that marker. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Domestic in feel but plainly a place of work, quiet and unremarkable. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no faces, no facial features on the robot, no 3D render look, no neon. 16:10 wide landscape.

### C. Storefront, back of house

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A bright retail aisle interior. The ceiling and the far end of the aisle are large flat expanses of warm cream filling most of the upper frame, so the space reads as luminous and open. A humanoid robot stands at the shelving on the left, one arm raised, placing a pale box onto a shelf at head height, its segmented pale body in three-quarter view. A few steps down the aisle, a customer in deep green silhouette stands with their back turned, reaching for something on the opposite shelf, unaware of the machine behind them. Plain shelving runs down both sides in muted sage green. Exactly one small burnt terracotta orange marker light sits on the robot's shoulder, and that orange appears nowhere else. Strictly four colors only: warm cream paper (#FFFEF2) for the ceiling, the far light and the floor, covering the majority of the image, muted sage green (#7D9C90) for the shelving, the robot's body and mid-tones, deep forest green (#1C4439) only for the human silhouette, the stock and the shadows, and burnt terracotta orange (#C25A38) only for that marker. Bright and high contrast, never dark or dim. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Ordinary, public, calm on the surface, with a machine working at arm's length from a member of the public. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no brand markings, no barcodes, no faces, no facial features on the robot, no 3D render look, no neon. 16:10 wide landscape.

### D. The existing standing robot, kept

The art currently in the repo. Keep this prompt if the working scenes lose the
stillness that makes the present image good.

> A wide landscape editorial illustration in flat mid-century modernist style, like a 1960s corporate annual report cover or a vintage screen print. A humanoid robot stands alone in a quiet interior, seen from behind, its segmented pale body lit by one hard shaft of daylight falling from an unseen high window and casting a long shadow across the floor toward the viewer. To the left, in shadow, the ordinary furniture of a human room: a low mid-century armchair, a potted plant, and a short flight of steps. The robot is motionless and slightly too still. Strictly four colors only: warm cream paper (#FFFEF2) for the broad shaft of light, which is a large bright area of the frame, deep forest green (#1C4439) for the walls and deep shadow, muted sage green (#7D9C90) for the robot's body and mid-tones, and burnt terracotta orange (#C25A38) used at most once as a tiny accent, or omitted entirely. Flat vector shapes with no outlines, hard-edged geometric shadows, heavy paper grain and a faint risograph misregistration texture. Still, watchful, slightly uncanny, restrained. This is an interior: no horizon, no sky, no sun. No text, no lettering, no logos, no faces, no facial features on the robot, no 3D render look, no neon. 16:10 wide landscape.

If a working scene comes back with the robot idle or posed, append: "The robot
is clearly in the middle of performing the task, with its arms engaged in the
work, not standing still and not posing."

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
