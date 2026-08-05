import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * The hero background grid, with subtle life: a slow continuous drift plus a
 * soft signal-colored glow that follows the pointer across the hero. Both are
 * decorative and pointer-transparent; the glow is disabled under
 * prefers-reduced-motion, leaving the static (drift-frozen) grid.
 *
 * Render inside a `position: relative` hero; it fills it with `inset-0`.
 */
export function HeroGrid({ className }: { className?: string }) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const host = glow?.parentElement;
    if (!glow || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.setProperty("--mx", `${x}%`);
        glow.style.setProperty("--my", `${y}%`);
        glow.style.opacity = "1";
      });
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div aria-hidden className={cn("pointer-events-none absolute inset-0 bg-grid animate-drift", className)} />
      <div ref={glowRef} aria-hidden className="hero-grid-glow pointer-events-none absolute inset-0 opacity-0" />
    </>
  );
}
