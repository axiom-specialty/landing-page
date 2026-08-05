import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Editorial feature column: a top hairline that "draws" to full width on hover
 * (a beam), the diamond signature marker with a small inline icon, then title
 * and body. Deliberately not a rounded icon-in-a-box card. `tone` switches
 * between light (cream) and dark (green) surfaces.
 */
export function FeatureCard({
  icon: Icon,
  title,
  children,
  tone = "light",
  className,
}: {
  icon?: LucideIcon;
  title: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div className={cn("group relative pt-6", className)}>
      {/* base hairline + hover beam */}
      <span aria-hidden className={cn("absolute inset-x-0 top-0 h-px", isDark ? "bg-ink/15" : "bg-border")} />
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-0 h-px w-8 transition-[width] duration-500 ease-out group-hover:w-full",
          isDark ? "bg-signal" : "bg-brand-mid",
        )}
      />
      <div className="flex items-center gap-3">
        <span className={cn("h-2 w-2 rotate-45", isDark ? "bg-signal" : "bg-brand-mid")} />
        {Icon && <Icon className={cn("h-4 w-4", isDark ? "text-ink/45" : "text-brand-mid/60")} strokeWidth={1.75} />}
      </div>
      <h3 className={cn("mt-5 font-serif text-lg font-semibold", isDark ? "text-ink" : "text-foreground")}>{title}</h3>
      {children && (
        <p className={cn("mt-2 text-sm leading-relaxed", isDark ? "text-ink/65" : "text-muted-foreground")}>
          {children}
        </p>
      )}
    </div>
  );
}
