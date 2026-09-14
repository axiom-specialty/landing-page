import { cn } from "@/lib/utils";

/**
 * The "auxilium line", a hairline terminating in a diamond node, echoing the
 * axis that runs through the logo. Used as a divider and eyebrow underline.
 * Inherits color from `currentColor`; set text color on a parent to tint it.
 */
export function AuxiliumLine({ className, draw = false }: { className?: string; draw?: boolean }) {
  return <span aria-hidden className={cn("auxilium-line block", draw && "auxilium-line--draw", className)} />;
}
