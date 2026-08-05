import { Navigate, useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { ProductAxis } from "@/components/home/ProductAxis";
import { bySlug } from "@/content/products";
import { useWaitlist } from "@/features/waitlist/WaitlistProvider";

export default function ComingSoon() {
  const { slug } = useParams();
  const product = slug ? bySlug(slug) : undefined;
  const { open } = useWaitlist();

  // Unknown or non-development slug → 404.
  if (!product || product.status !== "development") {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <PageHero eyebrow="In development" title={product.name} subtitle={product.summary}>
        <Button variant="hero" size="lg" onClick={open}>
          Register interest
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/products/ai-liability">See our live line</Link>
        </Button>
      </PageHero>

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

      <Section tone="dark">
        <Reveal className="text-center">
          <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/45">
            Part of the roadmap
          </p>
          <ProductAxis />
          <div className="mt-14">
            <Button asChild variant="heroOutline">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" /> Back to all lines
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
