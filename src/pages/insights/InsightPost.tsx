import { Navigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import remarkGfm from "remark-gfm";
import { getPost } from "@/content/insights/loader";
import { AxiomLine } from "@/components/common/AxiomLine";
import { HeroGrid } from "@/components/common/HeroGrid";

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function InsightPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  if (!post) return <Navigate to="/404" replace />;

  return (
    <article>
      {/* Post header */}
      <header className="relative overflow-hidden gradient-navy text-ink">
        <HeroGrid className="opacity-50" />
        <div className="container-tight relative px-6 pt-36 pb-16 md:pt-44 md:pb-20">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Insights
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[0.62rem] uppercase tracking-wider text-ink/55">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full border border-ink/15 px-2.5 py-0.5">
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] md:text-5xl text-balance">
            {post.title}
          </h1>
          <p className="mt-6 flex items-center gap-3 text-sm text-ink/60">
            <span>{post.author}</span>
            <span className="h-1 w-1 rotate-45 bg-ink/40" />
            <span>{formatDate(post.date)}</span>
            <span className="h-1 w-1 rotate-45 bg-ink/40" />
            <span>{post.readingTime}</span>
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="bg-background">
        <div className="container-tight px-6 py-16 md:py-20">
          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h3:text-xl prose-p:text-foreground/85 prose-p:leading-relaxed prose-a:text-brand-mid prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-foreground/85 prose-li:marker:text-brand-mid"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
          </div>

          {post.ctaLabel && post.ctaHref && (
            <div className="mt-12 flex flex-col items-start gap-4 rounded-lg border border-brand-mid/25 bg-brand-mid/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
              <p className="font-serif text-xl font-semibold text-foreground">{post.ctaText ?? post.ctaLabel}</p>
              <Button asChild variant="hero" size="lg" className="shrink-0">
                <a href={post.ctaHref} target="_blank" rel="noopener noreferrer">
                  {post.ctaLabel} <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          )}

          <AxiomLine className="my-12 w-full text-border" />
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-mid hover:text-brand-deep"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All insights
          </Link>
        </div>
      </div>
    </article>
  );
}
