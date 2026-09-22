import { useEffect, useRef, useState } from "react";
import { CoverImage } from "./CoverImage";
import { cn } from "@/lib/utils";

/**
 * Product art with an optional looping animation over it.
 *
 * The still at `public/covers/<slug>.jpg` always renders underneath. If a
 * seamless loop exists at `public/covers/<slug>.webm` it fades in on top once
 * the browser confirms it can actually play, so a missing or broken file
 * leaves the still in place rather than flashing an empty box.
 *
 * The loop is decorative: muted, inert, and skipped entirely under
 * prefers-reduced-motion, where the still is the whole experience.
 */
export function ProductMedia({
  slug,
  alt,
  className,
}: {
  slug: string;
  alt: string;
  className?: string;
}) {
  const base = import.meta.env.BASE_URL;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowMotion(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // A reduced-motion switch mid-visit should stop the loop, not just hide it.
  useEffect(() => {
    if (!allowMotion) {
      videoRef.current?.pause();
      setPlaying(false);
    }
  }, [allowMotion]);

  return (
    <div className={cn("relative", className)}>
      <CoverImage slug={slug} alt={alt} />
      {allowMotion && (
        <video
          ref={videoRef}
          aria-hidden
          tabIndex={-1}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          onPlaying={() => setPlaying(true)}
          onError={() => setPlaying(false)}
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            playing ? "opacity-100" : "opacity-0",
          )}
        >
          <source src={`${base}covers/${slug}.webm`} type="video/webm" />
          <source src={`${base}covers/${slug}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
