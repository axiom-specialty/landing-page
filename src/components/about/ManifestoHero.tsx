import { Children, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

/** The art's pixel size, and how far down it the open sky ends. */
const ART = { w: 1448, h: 1086, skyline: 0.578 };
/** Clear space between the paragraph and the skyline. */
const GAP = 40;
/** The most of the art's bottom edge (empty foreground) that may be cropped
 * to lift the skyline clear of the text. */
const MAX_CROP = 0.15;
/** Scroll spent on each paragraph while the hero is pinned, in screens. */
const SCROLL_PER_PARAGRAPH = 0.75;

const ART_URL = `${import.meta.env.BASE_URL}about/manifesto.jpg`;
const VIDEO_URL = `${import.meta.env.BASE_URL}about/manifesto.mp4`;
/** The clip's first frame: the yard before the carts and the dog arrive. */
const LOOP_POSTER_URL = `${import.meta.env.BASE_URL}about/manifesto-loop.jpg`;

interface Fit {
  height: number;
  /** Vertical offset of the art from the section top, in px. */
  offset: number;
  /** The art's drawn size at cover scale, in px. */
  artWidth: number;
  artHeight: number;
  viewport: number;
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
  return {
    height: Math.ceil(height),
    offset: Math.round(offset),
    artWidth: Math.ceil((art * ART.w) / ART.h),
    artHeight: Math.ceil(art),
    viewport,
  };
}

/**
 * The About page opens on the manifesto, set in the open sky of the campus
 * art. Phones draw the art at its cover size centered, so the structures at
 * either edge fall off screen; from tablet up the text column is capped to the
 * sky between them. The header is solid on this page, since its cream text
 * would vanish against the sky.
 *
 * The art is a looping clip in which only the robots move. It plays while the
 * reader is at the top and holds still once they scroll, muted until the
 * reader turns the sound on. The hero is pinned while the reader scrolls
 * through it, and the manifesto shows one paragraph at a time, each fading
 * into the next. Under prefers-reduced-motion the art stays still and the
 * paragraphs are set together, as a plain one-screen hero.
 */
export function ManifestoHero({ title, children }: { title: string; children: React.ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  const paragraphs = Children.toArray(children);
  const count = paragraphs.length;
  const pinned = !reducedMotion && count > 1;

  const trackRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [layout, setLayout] = useState<Fit | null>(null);
  const [active, setActive] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [muted, setMuted] = useState(true);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const text = textRef.current;
    if (!frame || !text) return;
    const measure = () => {
      const top = frame.getBoundingClientRect().top;
      const textBottom = text.getBoundingClientRect().bottom - top;
      // 576px matches the min-h-[36rem] floor for very short windows.
      setLayout(fit(frame.clientWidth, Math.max(window.innerHeight, 576), textBottom));
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
  }, [pinned]);

  // Scroll progress through the pinned hero picks the paragraph, and hides
  // the scroll cue once the reader has started.
  useEffect(() => {
    if (!pinned) return;
    const update = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const distance = rect.height - (frameRef.current?.offsetHeight ?? window.innerHeight);
      const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      setActive(Math.min(count - 1, Math.floor(progress * count)));
      // A few pixels of slack, so a trackpad settling at the top still counts.
      setAtTop(rect.top > -8);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pinned, count]);

  // The clip plays only while the reader is at the top of the hero; once they
  // start scrolling it holds on whatever frame it reached, and picks up from
  // there when they return. While it should play, it is nudged back on if the
  // browser pauses it on its own (a background tab, power saving, a stalled
  // load), since autoplay alone does not restart it.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!atTop) {
      video.pause();
      return;
    }
    let inView = true;
    const resume = () => {
      if (inView && document.visibilityState === "visible" && video.paused) video.play().catch(() => {});
    };
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      resume();
    });
    io.observe(video);
    const watchdog = window.setInterval(resume, 1500);
    document.addEventListener("visibilitychange", resume);
    video.addEventListener("canplay", resume);
    return () => {
      io.disconnect();
      window.clearInterval(watchdog);
      document.removeEventListener("visibilitychange", resume);
      video.removeEventListener("canplay", resume);
    };
  }, [pinned, atTop]);

  // React does not keep the muted property in sync after the first render.
  useEffect(() => {
    const video = videoRef.current;
    if (video) video.muted = muted;
  }, [muted]);

  const scroll = pinned ? count * SCROLL_PER_PARAGRAPH : 0;

  return (
    <section
      ref={trackRef}
      className="relative bg-[#faf7e4]"
      style={{
        height: layout ? layout.height + scroll * layout.viewport : `${100 + scroll * 100}svh`,
      }}
    >
      <div
        ref={frameRef}
        className="sticky h-svh min-h-[36rem] overflow-hidden bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${pinned ? LOOP_POSTER_URL : ART_URL})`,
          // A hero taller than the screen pins by its bottom edge, so the art
          // stays in view while the reader scrolls through it.
          top: layout ? Math.min(0, layout.viewport - layout.height) : 0,
          ...(layout && {
            height: layout.height,
            backgroundPosition: `center ${layout.offset}px`,
          }),
        }}
      >
        {pinned && (
          <video
            ref={videoRef}
            src={VIDEO_URL}
            poster={LOOP_POSTER_URL}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            // Until the layout is measured, the clip covers the frame the way
            // the background art does.
            className={cn(
              "pointer-events-none absolute",
              layout ? "left-1/2 max-w-none -translate-x-1/2" : "inset-0 h-full w-full object-cover object-bottom",
            )}
            style={layout ? { top: layout.offset, width: layout.artWidth, height: layout.artHeight } : undefined}
          />
        )}
        <div className="relative px-6 pt-[5.5rem] md:px-12 md:pt-24">
          <div ref={textRef} className="container-tight md:max-w-[min(34rem,46vw)]">
            {/* The title is not shown, but the page keeps its heading for screen
                readers and search. The space it took is kept, so the text sits
                where it did. */}
            <h1 className="sr-only">{title}</h1>
            <Reveal
              className={cn(
                "mt-[4.75rem] font-manifesto text-[0.9375rem] font-light leading-relaxed text-foreground sm:mt-[5.5rem] sm:text-lg",
                // Pinned, the paragraphs share one cell, sized to the longest.
                pinned ? "grid" : "space-y-2.5 sm:space-y-3",
              )}
            >
              {pinned
                ? paragraphs.map((paragraph, i) => (
                    <div
                      key={i}
                      className={cn(
                        "col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-out",
                        i === active ? "opacity-100" : "pointer-events-none opacity-0",
                        i < active && "-translate-y-2",
                        i > active && "translate-y-2",
                      )}
                    >
                      {paragraph}
                    </div>
                  ))
                : children}
            </Reveal>
            {/* Where the reader is in the manifesto, so it reads as a sequence. */}
            {pinned && (
              <div aria-hidden="true" className="mt-5 flex items-center gap-3 text-xs tabular-nums text-foreground/60">
                <span>
                  {active + 1} / {count}
                </span>
                <span className="flex gap-1.5">
                  {paragraphs.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-px w-6 transition-colors duration-500",
                        i === active ? "bg-foreground/70" : "bg-foreground/20",
                      )}
                    />
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>

        {pinned && (
          <>
            {/* Scroll cue, shown until the reader starts scrolling. */}
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#faf7e4] transition-opacity duration-500",
                atTop ? "opacity-90" : "opacity-0",
              )}
            >
              <span className="text-[0.6875rem] uppercase tracking-[0.2em]">Scroll</span>
              <span className="relative h-10 w-px overflow-hidden bg-[#faf7e4]/30">
                <span className="animate-scroll-cue absolute inset-0 bg-[#faf7e4]" />
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Turn sound on" : "Turn sound off"}
              aria-pressed={!muted}
              className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#faf7e4]/85 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-[#faf7e4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#faf7e4] md:bottom-6 md:right-6"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
