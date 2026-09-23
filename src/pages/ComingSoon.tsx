import { Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { bySlug, type DetailSection, type Product } from "@/content/products";

/**
 * A product's own page. Products carrying `detail` render those sections;
 * anything else in development stays deliberately minimal, its name over its
 * art and nothing more.
 */
export default function ComingSoon() {
  const { slug } = useParams();
  const product = slug ? bySlug(slug) : undefined;

  // Unknown slug, or one that has a real page of its own -> 404.
  if (!product || (product.status !== "development" && product.status !== "in-development")) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <PageHero title={product.name} mediaSlug={product.slug} />
      {product.detail
        ? product.detail.map((section, i) => (
            <DetailBlock key={section.title} section={section} tone={i % 2 === 0 ? "cream" : "canvas"} />
          ))
        : <FocusBlock product={product} />}
    </>
  );
}

function DetailBlock({ section, tone }: { section: DetailSection; tone: "cream" | "canvas" }) {
  return (
    <Section tone={tone}>
      <Reveal>
        <SectionHeading rule title={section.title} />
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
        <Reveal className="mt-10 overflow-x-auto border border-border">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <thead>
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
            <tbody>
              {section.coverage.map((c) => (
                <tr key={c.name} className="border-t border-border bg-card align-top">
                  <td className="px-5 py-4 font-serif text-base font-semibold leading-snug text-foreground">
                    {c.name}
                  </td>
                  <td className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">{c.covers}</td>
                  <td className="px-5 py-4">
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
    <Section tone="cream">
      <Reveal>
        <SectionHeading rule title="What we are building" />
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
