# Cover images

Drop cover art here, named exactly by product slug. Coverage cards read
`/covers/<slug>.jpg`; until a file exists, a branded placeholder shows, so a
missing image never looks broken.

All art is 16:10 landscape, in the house style: flat mid-century editorial
illustration, cream / deep-green / sage with a single terracotta accent. The
generation prompts live in `docs-internal/image-prompts.md` at the repo root.

## Live coverage schedule

These render on `/` and `/coverages`, in this order.

| Order | File name                                  | Coverage                          | Art |
| ----- | ------------------------------------------ | --------------------------------- | --- |
| 1     | `ai-liability.jpg`                         | AI Liability (For Deployers)      | ✅  |
| 2     | `warehouse-robotics.jpg`                   | Warehouse Robotics                | ❌  |
| 3     | `manufacturing-autonomous-machinery.jpg`   | Manufacturing Machinery           | ✅  |
| 4     | `yard-site-autonomy.jpg`                   | Yard & Site Autonomy              | ❌  |
| 5     | `delivery-robotics.jpg`                    | Delivery Robotics                 | ❌  |
| 6     | `humanoids.jpg`                            | Humanoids                         | ✅  |
| 7     | `autonomous-vehicles.jpg`                  | Autonomous Vehicles               | ✅  |

## Menu-only and future

Not on the coverage grid today, but referenced from the Solutions menu or held
for relaunch.

| File name                       | Item                                    | Art |
| ------------------------------- | --------------------------------------- | --- |
| `ai-liability-developers.jpg`   | AI Liability, For Developers            | ❌  |
| `mgbox.jpg`                     | MGBox                                   | ❌  |
| `auxcontrol.jpg`                | AuxControl                              | ❌  |
| `home-hero.jpg`                 | Homepage hero (not wired up yet)        | ❌  |
| `agentic-eo.jpg`                | Agentic E&O, hidden                     | ✅  |
| `energy-infrastructure.jpg`     | Energy Infrastructure, hidden           | ✅  |
| `data-centers-pc.jpg`           | Data Centers P&C, hidden                | ✅  |
| `tech-enterprise-do.jpg`        | Tech Enterprise D&O, hidden             | ✅  |

A PNG renamed to `.jpg` is fine; browsers render by content, not by extension.

## Looping animations

A product page will play a seamless loop if one exists beside the still, named
the same way: `warehouse-robotics.webm` next to `warehouse-robotics.jpg`. Add
`<slug>.mp4` as well for Safari versions that still refuse VP9.

The still always renders underneath and the loop fades in only once the browser
confirms it can play, so a missing, broken or still-downloading file leaves the
still in place. Nothing needs wiring up; drop the file in and it plays.

Rules for these files:

- Seamless. The last frame must flow into the first with no visible cut.
- 5 to 10 seconds, muted, no audio track at all.
- Same 16:10 frame and same four colors as the still.
- Under about 400KB. They autoplay, so weight is a real cost.
- Motion stays slow and small. This is a background, not a showreel.

They are skipped entirely under `prefers-reduced-motion`, so the still has to
work on its own.
