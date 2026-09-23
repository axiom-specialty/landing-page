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
  const label =
    status === "available"
      ? "Live"
      : status === "alpha"
        ? "Alpha"
        : status === "in-development"
          ? "In development"
          : "Soon";
  const tone =
    status === "available"
      ? "bg-brand-mid/15 text-brand-mid"
      : status === "alpha"
        ? "bg-signal/20 text-brand-deep"
        : "bg-muted text-muted-foreground";
  return (
    <span className={cn("ml-3 shrink-0 whitespace-nowrap px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider", tone)}>
      {label}
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // Clicking a menu trigger navigates; hovering still opens its dropdown.
  const solutionsRef = useTriggerNavigate("/coverages");
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

function MenuGroup({ group }: { group: (typeof productMenuGroups)[number] }) {
  return (
    <div className="min-w-0">
      <div className="border-b border-border pb-3">
        {group.href ? (
          <NavigationMenuLink asChild>
            <Link to={group.href} className="data-label text-brand-mid hover:text-brand-deep">
              {group.label}
            </Link>
          </NavigationMenuLink>
        ) : (
          <span className="data-label text-muted-foreground">{group.label}</span>
        )}
        <p className="mt-1.5 whitespace-nowrap text-xs leading-relaxed text-muted-foreground">
          {group.description}
        </p>
      </div>
      <ul className="mt-2">
        {group.items.map((product) => (
          <li key={product.slug}>
            <NavigationMenuLink asChild>
              <Link
                to={product.href}
                title={product.blurb}
                className="flex items-center justify-between gap-3 rounded-sm px-2 py-2 text-sm font-medium leading-snug text-foreground transition-colors hover:bg-muted"
              >
                <span className="min-w-0">{product.menuName ?? product.name}</span>
                <StatusPill status={product.status} />
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Solutions mega-menu, two columns. Robotics owns the right column on its own
 * because it carries six lines; AI Liability and Software stack in the left.
 * Three equal columns left two short ones beside a long one, which read as
 * misaligned. The group carries the description, so each row stays a name with
 * a right-aligned status tag.
 */
function SolutionsPanel() {
  const [aiLiabilityGroup, roboticsGroup, softwareGroup] = productMenuGroups;
  return (
    <div className="w-[min(720px,calc(100vw-1.5rem))] p-6">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <div className="space-y-8">
          {aiLiabilityGroup && <MenuGroup group={aiLiabilityGroup} />}
          {softwareGroup && <MenuGroup group={softwareGroup} />}
        </div>
        {roboticsGroup && <MenuGroup group={roboticsGroup} />}
      </div>

      <div className="mt-6 border-t border-border pt-4">
        <NavigationMenuLink asChild>
          <Link
            to="/coverages"
            className="inline-flex items-center gap-1 px-2 text-sm font-medium text-brand-mid hover:text-brand-deep"
          >
            View all solutions <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  );
}

const partnerLinks = [
  { title: "Brokerage Appointments", blurb: "Place frontier-technology risk with Auxilium.", href: "/partners#brokerages" },
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
