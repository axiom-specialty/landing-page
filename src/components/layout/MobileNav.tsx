import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/Logo";
import { productMenuGroups } from "@/content/products";

const partnerLinks = [
  { title: "Brokerage Appointments", href: "/partners#brokerages" },
  { title: "Carrier Partnerships", href: "/partners#carriers" },
  { title: "Contact", href: "/partners#contact" },
];

export function MobileNav({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    // Widening to desktop hides this menu, so close it rather than leave the
    // page scroll-locked behind an overlay nobody can see.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onWiden = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    desktop.addEventListener("change", onWiden);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onWiden);
    };
  }, [open]);

  // The path effect above misses links to the page already showing, and hash
  // links within /partners, so any tapped link closes the menu directly.
  const closeOnLink = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-ink/10"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Portaled to <body>: once the page scrolls, the header gains a
          backdrop blur, which makes it the containing block for anything
          fixed inside it and would shrink this overlay to the header strip. */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[60] flex flex-col bg-brand-abyss text-ink lg:hidden">
            <div className="flex h-16 items-center justify-between px-6">
              <Logo tone="light" compact />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-ink/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-10 pt-2"
              onClick={closeOnLink}
            >
              <Accordion type="multiple" className="border-none">
                <AccordionItem value="solutions" className="border-ink/10">
                  <AccordionTrigger className="py-4 text-lg font-serif hover:no-underline">
                    Solutions
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pb-2">
                      {productMenuGroups.map((group) => (
                        <div key={group.label}>
                          <p className="mb-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/50">
                            {group.label}
                          </p>
                          <ul>
                            {group.items.map((product) => (
                              <li key={product.slug}>
                                <Link
                                  to={product.href}
                                  className="block py-2 text-ink/85 hover:text-ink"
                                >
                                  {product.menuName ?? product.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        to="/coverages"
                        className="block py-2 font-medium text-signal hover:text-ink"
                      >
                        View all solutions
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="partners" className="border-ink/10">
                  <AccordionTrigger className="py-4 text-lg font-serif hover:no-underline">
                    Partnerships
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pb-2">
                      {partnerLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            className="block py-2 text-ink/85 hover:text-ink"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-col divide-y divide-ink/10">
                <Link to="/insights" className="py-4 text-lg font-serif">
                  Insights
                </Link>
                <Link to="/about" className="py-4 text-lg font-serif">
                  About
                </Link>
              </div>

              <div className="mt-8">
                <Button asChild variant="hero" size="lg" className="w-full">
                  <Link to="/login">Log In</Link>
                </Button>
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
}
