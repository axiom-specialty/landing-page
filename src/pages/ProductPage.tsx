import { Navigate, useLocation } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FaqSection } from "@/components/common/FaqSection";
import {
  ProductSections,
  ReferenceSection,
} from "@/components/common/ProductSections";
import { UnderwritingJourney } from "@/components/products/UnderwritingJourney";
import { productByPath, type Product } from "@/content/products";

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

  const sections = product.detail ?? [];
  return (
    <>
      <PageHero
        title={product.name}
        subname={product.subname}
        subtitle={product.subhead}
        mediaSlug={product.slug}
        video={product.heroVideo}
        note={product.channel}
      />
      {product.detail ? (
        <ProductSections sections={sections} />
      ) : (
        <FocusBlock product={product} />
      )}
      {product.journey && <UnderwritingJourney steps={product.journey} />}
      {product.frameworks && (
        <ReferenceSection
          title={product.frameworks.title}
          items={product.frameworks.items}
          tone={tone(sections.length)}
        />
      )}
      {product.faq && (
        <FaqSection
          items={product.faq}
          bare
          title="Frequently asked questions"
          tone={tone(sections.length + (product.frameworks ? 1 : 0))}
        />
      )}
    </>
  );
}

/** Light sections alternate from cream, continuing past the page's own. */
const tone = (n: number) => (n % 2 === 0 ? "cream" : "canvas");

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
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {product.summary}
          </p>
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
