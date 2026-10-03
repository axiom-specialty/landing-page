import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface HeroVideoSources {
  webm: string;
  mp4: string;
  /** A frame from the video itself, so the hand-off from still to motion is invisible. */
  poster: string;
}

/**
 * Looping background video for a product page hero. Decorative only.
 *
 * The poster is always painted underneath, and the video fades in on top only
 * once the browser reports it is actually playing, so a slow or failed load
 * leaves the still in place rather than an empty box. Under
 * prefers-reduced-motion nothing is mounted but the still. Playback pauses
 * while the hero is scrolled out of view, so the page is not decoding video
 * nobody can see.
 */
export function HeroVideo({ webm, mp4, poster, className }: HeroVideoSources & { className?: string }) {
  const base = import.meta.env.BASE_URL;
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowMotion(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // A cached video can start before React attaches onPlaying, and that first
  // "playing" event is then missed. So readiness is taken from any evidence of
  // playback: the event, time advancing, or the element already running.
  useEffect(() => {
    const video = ref.current;
    if (video && !video.paused && video.currentTime > 0) setPlaying(true);
  }, [allowMotion]);

  useEffect(() => {
    const video = ref.current;
    if (!video || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, [allowMotion]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${base}${poster})` }}
      />
      {allowMotion && (
        <video
          ref={ref}
          aria-hidden
          tabIndex={-1}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster={`${base}${poster}`}
          onPlaying={() => setPlaying(true)}
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime > 0) setPlaying(true);
          }}
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            playing ? "opacity-100" : "opacity-0",
          )}
        >
          <source src={`${base}${webm}`} type="video/webm" />
          <source src={`${base}${mp4}`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
