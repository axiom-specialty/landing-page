import { useRef, type ElementType, type ReactNode } from "react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger direct children instead of revealing as one block. */
  stagger?: boolean;
  as?: ElementType;
  id?: string;
}

/**
 * Scroll-reveal wrapper. Adds the fade-in (or staggered) animation classes and
 * toggles `is-visible` once the element enters the viewport. Motion is disabled
 * under prefers-reduced-motion via the stylesheet.
 */
export function Reveal({ children, className, stagger = false, as, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(stagger ? "reveal-stagger" : "fade-in-section", isVisible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
