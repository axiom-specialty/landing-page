import { Link } from "react-router-dom";
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
                {/* One tag, the post's own, square and flush left, with the
                    date pushed to the far end of the same line. */}
                <div className="flex items-center justify-between gap-3 font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
                  {post.tags[0] ? (
                    <span className="bg-muted px-2 py-0.5 text-foreground">{post.tags[0]}</span>
                  ) : (
                    <span />
                  )}
                  <span className="whitespace-nowrap">{formatDate(post.date)}</span>
                </div>
                <h2 className="mt-4 font-serif text-2xl font-semibold leading-snug text-foreground group-hover:text-brand-deep">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </Reveal>
        )}
      </Section>
    </>
  );
}
