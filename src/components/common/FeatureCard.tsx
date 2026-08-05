import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reusable enterprise card for feature/benefit grids. `tone` switches between
 * the light (cream) and dark (green) surfaces.
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
    <div
      className={cn(
        "group rounded-lg p-6 transition-all duration-300 md:p-7",
        isDark
          ? "border border-ink/10 bg-ink/[0.04] hover:border-ink/25"
          : "card-enterprise hover:-translate-y-0.5 hover:border-brand-mid/30",
        className,
      )}
    >
      {Icon && (
        <div
          className={cn(
            "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors",
            isDark ? "bg-ink/10 text-signal" : "bg-brand-deep/8 text-brand-deep group-hover:bg-brand-mid/12",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className={cn("font-serif text-lg font-semibold", isDark ? "text-ink" : "text-foreground")}>{title}</h3>
      {children && (
        <p className={cn("mt-2.5 text-sm leading-relaxed", isDark ? "text-ink/65" : "text-muted-foreground")}>
          {children}
        </p>
      )}
    </div>
  );
}
