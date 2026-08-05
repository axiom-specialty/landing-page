import { Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { bySlug } from "@/content/products";

export default function ComingSoon() {
  const { slug } = useParams();
  const product = slug ? bySlug(slug) : undefined;

  // Unknown or non-development slug -> 404.
  if (!product || product.status !== "development") {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <PageHero eyebrow="In development" title={product.name} subtitle={product.summary} />

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-mid">
              What we're building for
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground">Where the coverage will focus</h2>
          </Reveal>
          <Reveal stagger className="space-y-3">
            {product.focus?.map((f) => (
              <div key={f} className="card-enterprise flex items-start gap-4">
                <span className="axiom-node mt-1.5" />
                <p className="text-sm leading-relaxed text-foreground">{f}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
