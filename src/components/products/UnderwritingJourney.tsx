import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import type { JourneyStep } from "@/content/products";
import { cn } from "@/lib/utils";

/**
 * Underwriting as a scroll-driven sequence. The section is several screens
 * tall; inside it a stage stays pinned while the reader scrolls, and a
 * four-sided drum rolls a quarter turn per step, pausing on each so its text
 * can be read. Each face carries a small illustration of its step that
 * animates while that face is in front.
 *
 * Built on CSS 3D transforms, so there is no WebGL dependency. Under
 * prefers-reduced-motion the steps render as a plain grid instead.
 */
export function UnderwritingJourney({ steps }: { steps: JourneyStep[] }) {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? (
    <StaticJourney steps={steps} />
  ) : (
    <ScrollJourney steps={steps} />
  );
}

/** Share of each step's scroll spent turning to the next; the rest holds still. */
const TURN = 0.35;

function ScrollJourney({ steps }: { steps: JourneyStep[] }) {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const drumRef = useRef<HTMLDivElement>(null);
  const shadeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [depth, setDepth] = useState(150);
  const [active, setActive] = useState(0);
  const count = steps.length;

  // The drum's radius is half a face's height, so it is measured, not fixed.
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = () => setDepth(stage.clientHeight / 2);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const track = trackRef.current;
      const drum = drumRef.current;
      if (!track || !drum) return;
      const rect = track.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const progress =
        distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      // Position along the steps, held on each and eased through the turn.
      const along = progress * count;
      const index = Math.min(count - 1, Math.floor(along));
      const local = along - index;
      const turn =
        index < count - 1 ? ease(Math.max(0, (local - (1 - TURN)) / TURN)) : 0;
      const position = index + turn;

      drum.style.transform = `translateZ(${-depth}px) rotateX(${position * 90}deg)`;
      // Faces darken as they turn away from the reader.
      shadeRefs.current.forEach((shade, i) => {
        if (shade)
          shade.style.opacity = String(
            Math.min(1, Math.abs(position - i)) * 0.6,
          );
      });
      setActive(Math.round(position));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [count, depth]);

  return (
    <section
      ref={trackRef}
      aria-label="Underwriting"
      className="relative gradient-navy text-ink"
      style={{ height: `${count * 100}svh` }}
    >
      <JourneyStyles />
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <div className="container-narrow w-full px-6 pt-24 md:px-12 md:pt-28 lg:px-20">
          <SectionHeading tone="light" title="Underwriting" />
        </div>

        <div className="container-narrow grid w-full flex-1 content-center gap-8 px-6 pb-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-12 md:px-12 lg:px-20">
          {/* Text: every step occupies the same grid cell, so the block is as
              tall as the longest and nothing jumps as steps change. */}
          <div className="order-2 md:order-1">
            <Progress count={count} active={active} />
            <div className="mt-6 grid">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  aria-hidden={i !== active}
                  className={cn(
                    "[grid-area:1/1] transition-all duration-500 ease-out",
                    i === active
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0",
                  )}
                >
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-ink md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">
                    {step.body}
                  </p>
                  {step.footnote && (
                    <p className="mt-4 text-xs leading-relaxed text-ink/50">
                      {step.footnote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* The drum. */}
          <div className="order-1 md:order-2">
            <div
              ref={stageRef}
              className="relative mx-auto aspect-[5/3] w-full max-w-[22rem] md:max-w-[30rem]"
              style={{ perspective: "1600px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: "rotateY(-16deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  ref={drumRef}
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `translateZ(${-depth}px)`,
                  }}
                >
                  {steps.map((step, i) => (
                    <div
                      key={step.title}
                      className="absolute inset-0 overflow-hidden border border-ink/20 bg-ink text-brand-deep [backface-visibility:hidden]"
                      style={{
                        transform: `rotateX(${-i * 90}deg) translateZ(${depth}px)`,
                      }}
                    >
                      <Face
                        index={i}
                        title={step.title}
                        active={i === active}
                      />
                      <div
                        ref={(el) => {
                          shadeRefs.current[i] = el;
                        }}
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-brand-abyss"
                        style={{ opacity: i === 0 ? 0 : 0.6 }}
                      />
                    </div>
                  ))}
                  {/* End caps, so the turning drum reads as a solid. */}
                  {[-1, 1].map((side) => (
                    <div
                      key={side}
                      aria-hidden
                      className="absolute top-1/2 bg-brand-deep"
                      style={{
                        width: depth * 2,
                        height: depth * 2,
                        left: side < 0 ? 0 : "100%",
                        marginTop: -depth,
                        marginLeft: -depth,
                        transform: `rotateY(${side * 90}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Ground shadow. */}
              <div
                aria-hidden
                className="absolute -bottom-10 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-[50%] bg-black/30 blur-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Progress({ count, active }: { count: number; active: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[0.72rem] tabular-nums text-signal">
        {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
      </span>
      <div className="flex gap-1.5">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-0.5 w-8 transition-colors duration-500",
              i <= active ? "bg-signal" : "bg-ink/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}

/** Reduced motion: the same steps and art, laid out flat. */
function StaticJourney({ steps }: { steps: JourneyStep[] }) {
  return (
    <section className="section-padding gradient-navy text-ink">
      <JourneyStyles />
      <div className="container-narrow">
        <SectionHeading tone="light" title="Underwriting" />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <div key={step.title}>
              <div className="aspect-[5/3] overflow-hidden border border-ink/20 bg-ink text-brand-deep">
                <Face index={i} title={step.title} active={false} />
              </div>
              <span className="mt-5 block font-mono text-[0.72rem] tabular-nums text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                {step.body}
              </p>
              {step.footnote && (
                <p className="mt-3 text-xs leading-relaxed text-ink/50">
                  {step.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** One face of the drum: the step label and its illustration. */
function Face({
  index,
  title,
  active,
}: {
  index: number;
  title: string;
  active: boolean;
}) {
  const Art =
    [ApplicationArt, BindArt, ControlArt, RenewalArt][index] ?? ApplicationArt;
  return (
    <div
      className={cn("flex h-full flex-col p-4 md:p-5", active && "uwj-active")}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-brand-mid">
          Step {String(index + 1).padStart(2, "0")}
        </span>
        <span className="truncate font-serif text-sm font-semibold text-brand-deep">
          {title}
        </span>
      </div>
      <div className="mt-2 min-h-0 flex-1">
        <Art />
      </div>
    </div>
  );
}

const DEEP = "#1C4439";
const SAGE = "#7D9C90";
const PAPER = "#FFFEF2";
const ACCENT = "#C25A38";

/** Step 1: the application, its use cases ticked off one by one. */
function ApplicationArt() {
  const rows = [70, 96, 122, 148];
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden>
      <rect
        x="40"
        y="14"
        width="200"
        height="176"
        fill={PAPER}
        stroke={DEEP}
        strokeWidth="2"
      />
      <rect x="40" y="14" width="200" height="30" fill={DEEP} />
      <rect x="54" y="25" width="90" height="8" fill={PAPER} opacity="0.85" />
      {rows.map((y, i) => (
        <g key={y}>
          <rect
            x="56"
            y={y - 9}
            width="16"
            height="16"
            fill="none"
            stroke={DEEP}
            strokeWidth="2"
          />
          <path
            d={`M59 ${y} l4 4 l7 -9`}
            fill="none"
            stroke={DEEP}
            strokeWidth="2.5"
            className="uwj-check"
            style={{ animationDelay: `${0.15 + i * 0.25}s` }}
          />
          <rect
            x="82"
            y={y - 4}
            width={[120, 96, 132, 84][i]}
            height="7"
            fill={SAGE}
          />
        </g>
      ))}
      <path
        d="M58 176 q10 -12 20 0 t20 0 t20 0"
        fill="none"
        stroke={DEEP}
        strokeWidth="2"
        className="uwj-sign"
      />
      {/* Use cases, as tags beside the form. */}
      {["Agents", "Use cases", "Controls"].map((label, i) => (
        <g
          key={label}
          className="uwj-rise"
          style={{ animationDelay: `${0.2 + i * 0.2}s` }}
        >
          <rect
            x="262"
            y={40 + i * 46}
            width="112"
            height="32"
            fill={PAPER}
            stroke={DEEP}
            strokeWidth="2"
          />
          <circle
            cx="280"
            cy={56 + i * 46}
            r="6"
            fill={i === 0 ? ACCENT : SAGE}
          />
          <rect
            x="294"
            y={53 + i * 46}
            width={[52, 64, 58][i]}
            height="7"
            fill={DEEP}
            opacity="0.75"
          />
        </g>
      ))}
    </svg>
  );
}

/** Step 2: the quote, and the binding stamp coming down on it. */
function BindArt() {
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden>
      <rect
        x="70"
        y="14"
        width="190"
        height="176"
        fill={PAPER}
        stroke={DEEP}
        strokeWidth="2"
      />
      <rect x="88" y="34" width="110" height="10" fill={DEEP} />
      {[64, 84, 104].map((y, i) => (
        <g key={y}>
          <rect x="88" y={y} width={[70, 90, 60][i]} height="6" fill={SAGE} />
          <rect x="200" y={y} width="42" height="6" fill={DEEP} opacity="0.7" />
        </g>
      ))}
      <line x1="88" y1="126" x2="242" y2="126" stroke={DEEP} strokeWidth="2" />
      <rect x="88" y="138" width="60" height="9" fill={DEEP} />
      <rect x="190" y="136" width="52" height="13" fill={DEEP} />
      {/* The stamp. */}
      <g className="uwj-stamp" style={{ transformOrigin: "285px 120px" }}>
        <circle
          cx="285"
          cy="120"
          r="44"
          fill="none"
          stroke={ACCENT}
          strokeWidth="4"
        />
        <circle
          cx="285"
          cy="120"
          r="34"
          fill="none"
          stroke={ACCENT}
          strokeWidth="1.5"
        />
        <path
          d="M268 121 l11 11 l22 -24"
          fill="none"
          stroke={ACCENT}
          strokeWidth="5"
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}

/** Step 3: AuxControl at the center, testing each connected agent in turn. */
function ControlArt() {
  const nodes = [
    [70, 50],
    [70, 150],
    [200, 26],
    [330, 50],
    [330, 150],
  ];
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <line x1="200" y1="110" x2={x} y2={y} stroke={SAGE} strokeWidth="2" />
          <line
            x1="200"
            y1="110"
            x2={x}
            y2={y}
            stroke={DEEP}
            strokeWidth="3"
            strokeDasharray="10 200"
            className="uwj-pulse"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        </g>
      ))}
      {nodes.map(([x, y], i) => (
        <g key={`n${i}`}>
          <rect
            x={x - 18}
            y={y - 14}
            width="36"
            height="28"
            fill={PAPER}
            stroke={DEEP}
            strokeWidth="2"
          />
          <circle cx={x} cy={y - 2} r="5" fill={DEEP} />
          <rect x={x - 9} y={y + 6} width="18" height="3" fill={DEEP} />
          {i === 3 && (
            <circle
              cx={x + 18}
              cy={y - 14}
              r="6"
              fill={ACCENT}
              className="uwj-blink"
            />
          )}
        </g>
      ))}
      {/* The hub, with a shield. */}
      <rect x="166" y="80" width="68" height="60" fill={DEEP} />
      <path
        d="M200 92 l16 6 v12 c0 10 -7 17 -16 20 c-9 -3 -16 -10 -16 -20 v-12 z"
        fill={PAPER}
      />
      <path
        d="M193 110 l5 5 l9 -10"
        fill="none"
        stroke={DEEP}
        strokeWidth="2.5"
      />
    </svg>
  );
}

/** Step 4: the year coming back around to renewal. */
function RenewalArt() {
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden>
      <g className="uwj-spin" style={{ transformOrigin: "200px 100px" }}>
        <path
          d="M200 26 a74 74 0 0 1 72 92"
          fill="none"
          stroke={DEEP}
          strokeWidth="5"
        />
        <path
          d="M262 114 l10 12 l8 -15"
          fill="none"
          stroke={DEEP}
          strokeWidth="5"
        />
        <path
          d="M200 174 a74 74 0 0 1 -72 -92"
          fill="none"
          stroke={SAGE}
          strokeWidth="5"
        />
        <path
          d="M138 86 l-10 -12 l-8 15"
          fill="none"
          stroke={SAGE}
          strokeWidth="5"
        />
      </g>
      {/* The calendar at the center. */}
      <rect
        x="166"
        y="70"
        width="68"
        height="62"
        fill={PAPER}
        stroke={DEEP}
        strokeWidth="2.5"
      />
      <rect x="166" y="70" width="68" height="16" fill={DEEP} />
      <rect x="178" y="63" width="5" height="12" fill={DEEP} />
      <rect x="217" y="63" width="5" height="12" fill={DEEP} />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={174 + c * 14}
            y={94 + r * 12}
            width="8"
            height="6"
            fill={r === 2 && c === 3 ? ACCENT : SAGE}
          />
        )),
      )}
    </svg>
  );
}

/** Keyframes for the face art. Each runs only while its face is in front. */
function JourneyStyles() {
  return (
    <style>{`
      .uwj-check { stroke-dasharray: 20; stroke-dashoffset: 20; }
      .uwj-active .uwj-check { animation: uwj-draw 0.4s ease-out forwards; }
      .uwj-sign { stroke-dasharray: 80; stroke-dashoffset: 80; }
      .uwj-active .uwj-sign { animation: uwj-draw 0.8s 1.2s ease-out forwards; }
      .uwj-rise { opacity: 0.35; }
      .uwj-active .uwj-rise { animation: uwj-rise 0.5s ease-out forwards; }
      .uwj-stamp { opacity: 0; transform: scale(1.35); }
      .uwj-active .uwj-stamp { animation: uwj-stamp 0.45s 0.35s cubic-bezier(.2,.8,.3,1.2) forwards; }
      .uwj-active .uwj-pulse { animation: uwj-pulse 1.8s linear infinite; }
      .uwj-pulse { stroke-dashoffset: 0; opacity: 0; }
      .uwj-active .uwj-blink { animation: uwj-blink 1.6s ease-in-out infinite; }
      .uwj-active .uwj-spin { animation: uwj-spin 9s linear infinite; }
      @keyframes uwj-draw { to { stroke-dashoffset: 0; } }
      @keyframes uwj-rise { from { opacity: 0.35; transform: translateY(6px); } to { opacity: 1; transform: none; } }
      @keyframes uwj-stamp { to { opacity: 1; transform: scale(1); } }
      @keyframes uwj-pulse { 0% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: -190; opacity: 1; } }
      @keyframes uwj-blink { 50% { opacity: 0.3; } }
      @keyframes uwj-spin { to { transform: rotate(360deg); } }
      @media (prefers-reduced-motion: reduce) {
        .uwj-check, .uwj-sign { stroke-dashoffset: 0; }
        .uwj-stamp { opacity: 1; transform: none; }
        .uwj-rise { opacity: 1; }
      }
    `}</style>
  );
}

function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}
