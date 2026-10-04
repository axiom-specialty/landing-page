import { Navigate, useLocation } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { productByPath, type DetailSection, type Product } from "@/content/products";
import { UnderwritingSheet } from "@/components/common/UnderwritingSheet";

/**
 * A product's own page, at /<category>/<slug>. The product is found by matching
 * the pathname against its `href`, so the URL and the taxonomy cannot disagree:
 * a slug under the wrong category is a 404 rather than a duplicate page.
 */
export default function ProductPage() {
  const { pathname } = useLocation();
  const product = productByPath(pathname);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <PageHero
        title={product.name}
        mediaSlug={product.slug}
        video={product.heroVideo}
        note={product.channel}
      />
      {product.detail
        ? product.detail.map((section, i) => (
            <DetailBlock key={section.title} section={section} tone={i % 2 === 0 ? "cream" : "canvas"} first={i === 0} />
          ))
        : <FocusBlock product={product} />}
    </>
  );
}

function DetailBlock({ section, tone, first }: { section: DetailSection; tone: "cream" | "canvas"; first?: boolean }) {
  return (
    <Section tone={tone} first={first}>
      <Reveal>
        <SectionHeading title={section.title} />
      </Reveal>

      {section.intro && (
        <Reveal>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">{section.intro}</p>
        </Reveal>
      )}

      {/* A numbered flow: one hairline grid so the steps read as a sequence
          rather than as separate cards. */}
      {section.steps && (
        <Reveal
          stagger
          className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {section.steps.map((step, i) => (
            <div key={step.title} className="bg-card p-6">
              <span className="font-mono text-[0.7rem] tabular-nums text-brand-mid">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </Reveal>
      )}

      {section.coverage && (
        // On phones each row stacks (name, then what it covers, then basis)
        // rather than scrolling sideways; from md up it is a table again.
        <Reveal className="mt-10 border border-border md:overflow-x-auto">
          <table className="block w-full border-collapse text-left md:table md:min-w-[46rem]">
            <thead className="hidden md:table-header-group">
              <tr className="bg-muted/60">
                {["Coverage", "What it covers", "Basis"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {section.coverage.map((c) => (
                <tr
                  key={c.name}
                  className="block border-t border-border bg-card align-top first:border-t-0 md:table-row md:first:border-t"
                >
                  <td className="block px-5 pb-1 pt-4 font-serif text-base font-semibold leading-snug text-foreground md:table-cell md:py-4">
                    {c.name}
                  </td>
                  <td className="block px-5 py-1 text-sm leading-relaxed text-muted-foreground md:table-cell md:py-4">
                    {c.covers}
                  </td>
                  <td className="block px-5 pb-4 pt-2 md:table-cell md:py-4">
                    <div className="flex flex-wrap gap-1">
                      {c.basis.map((b) => (
                        <span
                          key={b}
                          className="inline-block whitespace-nowrap bg-brand-mid/15 px-1.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-wider text-brand-deep ring-1 ring-brand-mid/40"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      )}

      {section.points && (
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {section.points.map((point) => (
            <div key={point.title} className="card-enterprise">
              <h3 className="font-serif text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
            </div>
          ))}
        </Reveal>
      )}

      {/* Two columns of plain statements, for a read/never-read style contrast. */}
      {section.contrast && (
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {section.contrast.map((col) => (
            <div key={col.title} className="card-enterprise">
              <h3 className="font-serif text-lg font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="auxilium-node mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      )}

      {section.underwriting && (
        <Reveal className="mt-10">
          <UnderwritingSheet {...section.underwriting} />
        </Reveal>
      )}

      {section.cta && (
        <Reveal className="mt-10">
          <Button asChild variant="default">
            <a href={section.cta.href} target="_blank" rel="noopener noreferrer">
              {section.cta.label} <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      )}

      {section.note && <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{section.note}</p>}
    </Section>
  );
}

/** Fallback for products that have focus bullets but no written sections yet. */
function FocusBlock({ product }: { product: Product }) {
  if (!product.focus?.length) return null;
  return (
    <Section tone="cream" first>
      <Reveal>
        <SectionHeading title="What we are building" />
      </Reveal>
      {product.summary && (
        <Reveal>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">{product.summary}</p>
        </Reveal>
      )}
      <Reveal stagger className="mt-10 space-y-3">
        {product.focus.map((f) => (
          <div key={f} className="card-enterprise flex items-start gap-4">
            <span className="auxilium-node mt-1.5" />
            <p className="text-sm leading-relaxed text-foreground">{f}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
