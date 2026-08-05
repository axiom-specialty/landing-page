import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Interactive hero background grid rendered on a canvas. The grid warps toward
 * the pointer like a mass deforming a gravitational field: nearby vertices are
 * pulled in and the lines brighten around the well. When the pointer is away,
 * a slow ambient attractor keeps the field gently alive. Under
 * prefers-reduced-motion it renders a single static grid.
 *
 * Purely decorative and pointer-transparent; render inside a `relative` hero.
 */
export function HeroGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const spacing = 46;
    const R = 165; // gravity radius (px)
    const PULL = 26; // max vertex displacement toward the well (px)

    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let active = false;
    const target = { x: 0, y: 0 };
    const well = { x: 0, y: 0 };

    const resize = () => {
      const r = host.getBoundingClientRect();
      w = Math.max(1, r.width);
      h = Math.max(1, r.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      well.x = w * 0.5;
      well.y = h * 0.4;
    };
    resize();

    const drawGrid = () => {
      ctx.clearRect(0, 0, w, h);
      const cols = Math.ceil(w / spacing) + 2;
      const rows = Math.ceil(h / spacing) + 2;

      // Warped vertex positions
      const px: number[][] = [];
      const py: number[][] = [];
      const glow: number[][] = [];
      for (let j = 0; j < rows; j++) {
        px[j] = [];
        py[j] = [];
        glow[j] = [];
        for (let i = 0; i < cols; i++) {
          const x0 = i * spacing;
          const y0 = j * spacing;
          const dx = x0 - well.x;
          const dy = y0 - well.y;
          const d2 = dx * dx + dy * dy;
          const g = Math.exp(-d2 / (2 * R * R)); // 1 at the well, →0 far away
          const d = Math.sqrt(d2) || 1;
          px[j][i] = x0 - (dx / d) * PULL * g;
          py[j][i] = y0 - (dy / d) * PULL * g;
          glow[j][i] = g;
        }
      }

      // Lines between adjacent vertices; alpha rises near the well
      ctx.lineWidth = 1;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          if (i < cols - 1) {
            const a = 0.05 + 0.42 * Math.max(glow[j][i], glow[j][i + 1]);
            ctx.strokeStyle = `hsla(164, 42%, 58%, ${a})`;
            ctx.beginPath();
            ctx.moveTo(px[j][i], py[j][i]);
            ctx.lineTo(px[j][i + 1], py[j][i + 1]);
            ctx.stroke();
          }
          if (j < rows - 1) {
            const a = 0.05 + 0.42 * Math.max(glow[j][i], glow[j + 1][i]);
            ctx.strokeStyle = `hsla(164, 42%, 58%, ${a})`;
            ctx.beginPath();
            ctx.moveTo(px[j][i], py[j][i]);
            ctx.lineTo(px[j + 1][i], py[j + 1][i]);
            ctx.stroke();
          }
        }
      }

      // Soft light at the well and bright nodes on the nearest vertices
      const halo = ctx.createRadialGradient(well.x, well.y, 0, well.x, well.y, R * 1.1);
      halo.addColorStop(0, "hsla(164, 45%, 55%, 0.14)");
      halo.addColorStop(1, "hsla(164, 45%, 55%, 0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const g = glow[j][i];
          if (g > 0.25) {
            ctx.fillStyle = `hsla(164, 55%, 62%, ${0.5 * g})`;
            ctx.beginPath();
            ctx.arc(px[j][i], py[j][i], 1.4 * g + 0.4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    if (reduce) {
      drawGrid();
      const ro = new ResizeObserver(() => {
        resize();
        drawGrid();
      });
      ro.observe(host);
      return () => ro.disconnect();
    }

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      active = true;
    };
    const onLeave = () => {
      active = false;
    };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const loop = () => {
      t += 0.006;
      // Idle: a slow Lissajous attractor keeps the field alive
      if (!active) {
        target.x = w * (0.5 + 0.28 * Math.cos(t));
        target.y = h * (0.42 + 0.24 * Math.sin(t * 0.9));
      }
      well.x += (target.x - well.x) * 0.07;
      well.y += (target.y - well.y) * 0.07;
      drawGrid();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={cn("pointer-events-none absolute inset-0", className)} />;
}
