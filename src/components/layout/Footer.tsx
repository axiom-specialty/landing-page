import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { AxiomLine } from "@/components/common/AxiomLine";
import { site } from "@/content/site";

const columns = [
  {
    heading: "Solutions",
    links: [
      { label: "All coverages", to: "/coverages" },
      { label: "AI Liability", to: "/products/ai-liability" },
      // Hidden until launch, restore one at a time:
      // { label: "Agentic E&O", to: "/agentic-eo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Insights", to: "/insights" },
      { label: "Partnerships", to: "/partners" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="gradient-navy text-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/60">
              {site.description} Underwriting the industrial revolutions of the AI era.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Axiom Specialty on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink/15 text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/45">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.to}
                        className="text-sm text-ink/70 transition-colors hover:text-ink"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to} className="text-sm text-ink/70 transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <AxiomLine className="my-10 w-full text-ink/40" />

        <div className="flex flex-col gap-6 text-xs text-ink/55 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl space-y-2 leading-relaxed">
            <p>
              Coverage is subject to underwriting approval and policy terms. Product descriptions, limits, and
              pricing shown are illustrative and do not constitute an offer to insure.
            </p>
            <p>© 2026 {site.legalName}. All rights reserved.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-1 md:text-right">
            <a href={`mailto:${site.email.contact}`} className="hover:text-ink">
              {site.email.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
