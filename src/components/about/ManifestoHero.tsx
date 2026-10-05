import { useLayoutEffect, useRef, useState } from "react";
import { Reveal } from "@/components/common/Reveal";

/** The art's pixel size, and how far down it the open sky ends. */
const ART = { w: 1448, h: 1086, skyline: 0.578 };
/** Clear space between the paragraph and the skyline. */
const GAP = 40;
/** The most of the art's bottom edge (empty foreground) that may be cropped
 * to lift the skyline clear of the text. */
const MAX_CROP = 0.15;

interface Fit {
  height: number;
  /** Vertical offset of the art from the section top, in px. */
  offset: number;
}

/**
 * Work out the section height and art position for a viewport. The aim is a
 * hero exactly one screen tall with the art covering it, so the next section
 * starts at the fold. The art is anchored to the bottom, then lowered only as
 * far as needed to keep the skyline under the paragraph, cropping no more than
 * MAX_CROP of its foreground. Only when that is not enough, on short wide
 * screens or phones with a long paragraph, does the section grow past one
 * screen, by the least amount that fits.
 */
function fit(width: number, viewport: number, textBottom: number): Fit {
  const need = textBottom + GAP;
  const artHeight = (h: number) => ART.h * Math.max(width / ART.w, h / ART.h);
  // Highest skyline position available for a given section height.
  const best = (h: number) => h - (1 - ART.skyline - MAX_CROP) * artHeight(h);

  let height = viewport;
  if (best(height) < need) {
    // best() rises with height, so search the smallest height that fits.
    let lo = viewport;
    let hi = viewport * 4;
    for (let i = 0; i < 30; i++) {
      const mid = (lo + hi) / 2;
      if (best(mid) >= need) hi = mid;
      else lo = mid;
    }
    height = hi;
  }
  const art = artHeight(height);
  const anchored = height - art;
  const offset = Math.max(anchored, Math.min(need - ART.skyline * art, anchored + MAX_CROP * art));
  return { height: Math.ceil(height), offset: Math.round(offset) };
}

/**
 * The About page opens on the manifesto, set in the open sky of the campus
 * art. Phones draw the art at its cover size centered, so the structures at
 * either edge fall off screen; from tablet up the text column is capped to the
 * sky between them. The header is solid on this page, since its cream text
 * would vanish against the sky.
 */
export function ManifestoHero({ title, children }: { title: string; children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Fit | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;
    const measure = () => {
      const top = section.getBoundingClientRect().top;
      const textBottom = text.getBoundingClientRect().bottom - top;
      // 576px matches the min-h-[36rem] floor for very short windows.
      setLayout(fit(section.clientWidth, Math.max(window.innerHeight, 576), textBottom));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(text);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-svh min-h-[36rem] overflow-hidden bg-[#faf7e4] bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}about/manifesto.jpg)`,
        ...(layout && {
          height: layout.height,
          backgroundPosition: `center ${layout.offset}px`,
        }),
      }}
    >
      <div className="relative px-6 pt-[5.5rem] md:px-12 md:pt-24">
        <div ref={textRef} className="container-tight md:max-w-[min(48rem,64vw)]">
          <Reveal>
            <h1 className="font-serif text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
          </Reveal>
          <Reveal className="mt-5 space-y-2.5 font-manifesto text-[0.9375rem] font-light leading-relaxed text-foreground sm:mt-6 sm:space-y-3 sm:text-lg">
            {children}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
