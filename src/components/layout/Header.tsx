import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/Logo";
import { productMenuGroups } from "@/content/products";
import { useTriggerNavigate } from "@/hooks/use-trigger-navigate";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const triggerClass =
  "bg-transparent px-3 text-sm font-medium text-ink/80 hover:bg-ink/10 hover:text-ink focus:bg-ink/10 focus:text-ink data-[state=open]:bg-ink/10 data-[state=open]:text-ink";

const linkClass =
  "inline-flex h-10 items-center rounded-md px-3 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/10 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal";

function StatusPill({ status }: { status: string }) {
  const label = status === "available" ? "Live" : status === "alpha" ? "Alpha" : "Soon";
  const tone =
    status === "available"
      ? "bg-brand-mid/15 text-brand-mid"
      : status === "alpha"
        ? "bg-signal/20 text-brand-deep"
        : "bg-muted text-muted-foreground";
  return (
    <span className={cn("ml-2 rounded-full px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider", tone)}>
      {label}
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // Clicking a menu trigger navigates; hovering still opens its dropdown.
  const solutionsRef = useTriggerNavigate("/#coverages");
  const partnershipsRef = useTriggerNavigate("/partners");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-brand-abyss/95 backdrop-blur border-b border-ink/10" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-[72px] md:px-10">
        <Logo tone="light" compact />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger ref={solutionsRef} className={triggerClass}>
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <SolutionsPanel />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger ref={partnershipsRef} className={triggerClass}>
                  Partnerships
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <PartnersPanel />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/insights" className={linkClass}>
                    Insights
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about" className={linkClass}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-3 flex items-center">
            <Button asChild variant="hero" size="sm">
              <Link to="/partners#contact">Contact</Link>
            </Button>
          </div>
        </div>

        {/* Mobile */}
        <MobileNav currentPath={pathname} />
      </div>
    </header>
  );
}

function SolutionsPanel() {
  return (
    <div className="w-[min(92vw,720px)] p-5">
      <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
        {productMenuGroups.map((group) => {
          const isDev = group.label === "In development";
          const isSoftware = group.label === "Software";
          return (
            <div
              key={group.label}
              className={cn(
                (isDev || isSoftware) && "md:col-span-2",
                isSoftware && "mt-1 border-t border-border pt-4",
              )}
            >
              <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                {group.label}
              </p>
              <ul className={cn(isDev ? "grid gap-x-6 sm:grid-cols-2" : "space-y-1")}>
                {group.items.map((product) => (
                  <li key={product.slug}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={product.href}
                        className="group block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                      >
                        <span className="flex items-center text-sm font-semibold text-foreground">
                          {product.name}
                          <StatusPill status={product.status} />
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                          {product.blurb}
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mt-4 border-t border-border pt-3">
        <NavigationMenuLink asChild>
          <Link
            to="/coverages"
            className="inline-flex items-center gap-1 px-3 text-sm font-medium text-brand-mid hover:text-brand-deep"
          >
            View all coverages <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  );
}

const partnerLinks = [
  { title: "Brokerage Appointments", blurb: "Place frontier-technology risk with Axiom.", href: "/partners#brokerages" },
  { title: "Carrier Partnerships", blurb: "Structured access to emerging technology risk.", href: "/partners#carriers" },
  { title: "Contact", blurb: "General inquiries and everything else.", href: "/partners#contact" },
];

function PartnersPanel() {
  return (
    <div className="w-[320px] p-3">
      <ul className="space-y-1">
        {partnerLinks.map((item) => (
          <li key={item.title}>
            <NavigationMenuLink asChild>
              <Link to={item.href} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted">
                <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{item.blurb}</span>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
