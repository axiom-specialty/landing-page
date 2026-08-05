import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { posts } from "@/content/insights/loader";

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking on frontier risk"
        subtitle={
          <>
            Welcome to our journal. We share case studies, research findings, and our perspective with fellow
            insurance professionals, and we're always glad to collaborate on future publications. For inquiries,{" "}
            <Link to="/partners#contact" className="font-medium text-signal underline underline-offset-4 hover:text-ink">
              contact us
            </Link>
            .
          </>
        }
      />

      <Section tone="cream">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">New writing is on the way.</p>
        ) : (
          <Reveal stagger className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="card-enterprise group flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-mid/30"
              >
                <div className="flex flex-wrap items-center gap-2 font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
                  {post.tags.slice(0, 2).map((t) => (
                    <span key={t} className="rounded-full bg-muted px-2.5 py-0.5">
                      {t}
                    </span>
                  ))}
                  <span>· {post.readingTime}</span>
                </div>
                <h2 className="mt-4 font-serif text-2xl font-semibold leading-snug text-foreground group-hover:text-brand-deep">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-mid">
                    Read <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        )}
      </Section>
    </>
  );
}
