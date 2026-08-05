import { useEffect, useState } from "react";
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

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-brand-abyss text-ink">
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

          <nav className="flex-1 overflow-y-auto px-6 pb-10 pt-2">
            <Accordion type="multiple" className="border-none">
              <AccordionItem value="solutions" className="border-ink/10">
                <AccordionTrigger className="py-4 text-lg font-serif hover:no-underline">
                  Solutions
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-5 pb-2">
                    {productMenuGroups.map((group) => (
                      <div key={group.label}>
                        <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/50">
                          {group.label}
                        </p>
                        <ul className="space-y-1.5">
                          {group.items.map((product) => (
                            <li key={product.slug}>
                              <Link to={product.href} className="block text-ink/85 hover:text-ink">
                                {product.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link to="/coverages" className="block font-medium text-signal hover:text-ink">
                      View all coverages
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="partners" className="border-ink/10">
                <AccordionTrigger className="py-4 text-lg font-serif hover:no-underline">
                  Partnerships
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pb-2">
                    {partnerLinks.map((item) => (
                      <li key={item.href}>
                        <Link to={item.href} className="block text-ink/85 hover:text-ink">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-2 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
              <Link to="/insights" className="py-4 text-lg font-serif">
                Insights
              </Link>
              <Link to="/about" className="py-4 text-lg font-serif">
                About
              </Link>
            </div>

            <div className="mt-8">
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/partners#contact">Contact us</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
