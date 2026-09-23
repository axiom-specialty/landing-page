import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { CoverImage } from "@/components/common/CoverImage";
import { productMenuGroups, type Product } from "@/content/products";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

const statusLabel = (status: Product["status"]) =>
  status === "available"
    ? "Live"
    : status === "in-development"
        ? "In Development"
        : "Soon";

/** Every item in the Solutions menu, flattened in menu order and tagged with
 * the group it came from, so the page and its contents list stay in step with
 * the navigation automatically. */
const entries = productMenuGroups.flatMap((group) =>
  group.items.map((product) => ({ product, group: group.label })),
);

const sectionIds = entries.map((entry) => entry.product.slug);

export default function Coverages() {
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <PageHero
        eyebrow="Coverages"
        title="Specialty coverage for frontier technology"
        subtitle="Our mission is to insure the industrial revolution, tackling the risks of autonomy across the digital and physical worlds. We offer a suite of risk-mitigation tools, insurance services, and instruments for developers."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/partners#brokerages">For Brokers</Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/insights">Publications and Updates</Link>
        </Button>
      </PageHero>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[13rem_1fr] lg:gap-16">
          <ContentsNav activeId={activeId} />

          <div className="min-w-0 space-y-20 md:space-y-28">
            {entries.map(({ product, group }, i) => (
              <ProductRow
                key={product.slug}
                product={product}
                group={group}
                index={i + 1}
                /* Odd rows flip, so the art alternates side down the page. */
                flipped={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

/** Sticky table of contents. Hidden below lg, where a sticky rail has nowhere
 * to sit and the sections are already in reading order. */
function ContentsNav({ activeId }: { activeId: string }) {
  return (
    <nav aria-label="Coverages" className="hidden lg:block">
      <div className="sticky top-28 space-y-6">
        {productMenuGroups.map((group) => (
          <div key={group.label}>
            <p className="data-label text-muted-foreground">{group.label}</p>
            <ul className="mt-2 space-y-0.5 border-l border-border">
              {group.items.map((product) => {
                const active = activeId === product.slug;
                return (
                  <li key={product.slug}>
                    <a
                      href={`#${product.slug}`}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "-ml-px block border-l py-1.5 pl-3 text-sm leading-snug transition-colors",
                        active
                          ? "border-brand-mid font-medium text-brand-mid"
                          : "border-transparent text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {product.menuName ?? product.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

function ProductRow({
  product,
  group,
  index,
  flipped,
}: {
  product: Product;
  group: string;
  index: number;
  flipped: boolean;
}) {
  return (
    <article id={product.slug} className="scroll-mt-28">
      <Reveal>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <CoverImage
            slug={product.slug}
            alt={product.name}
            className={flipped ? "md:order-1" : "md:order-2"}
          />

          <div className={cn("min-w-0", flipped ? "md:order-2" : "md:order-1")}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.7rem] tabular-nums text-muted-foreground">
                {String(index).padStart(2, "0")}
              </span>
              {/* The group is context for the name, so it is noise when it
                  repeats it, as it does for AI Liability itself. */}
              {group !== product.name && <span className="data-label text-brand-mid">{group}</span>}
              <span className="bg-muted px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                {statusLabel(product.status)}
              </span>
            </div>

            <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-foreground md:text-3xl text-balance">
              {product.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {product.summary ?? product.blurb}
            </p>

            <Link
              to={product.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-mid transition-colors hover:text-brand-deep"
            >
              {product.status === "development" || product.status === "in-development"
                ? "What we are building"
                : "Read the coverage"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
