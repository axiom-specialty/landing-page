import { cn } from "@/lib/utils";

interface UnderwritingSheetProps {
  asks: string[];
  asksNote?: string;
  reads: string[];
  readsNote?: string;
  drivers: string[];
  standards: string[];
  rated: string | string[];
  review?: string;
}

const DEFAULT_REVIEW = "No site visit for standard accounts. Large or unusual fleets get a remote risk review.";

/**
 * Underwriting disclosure, laid out as one spec sheet rather than four equal
 * cards, because the four kinds of content are not equal. The exposure base is
 * a single fact and leads. What we read is short and its read-only nature is
 * the point, so it sits beside the basis as a marked panel. What we ask for and
 * what moves price are the long lists, so they get the full width as numbered
 * columns. Standards are short codes and read best as tags.
 */
export function UnderwritingSheet({
  asks,
  asksNote,
  reads,
  readsNote,
  drivers,
  standards,
  rated,
  review,
}: UnderwritingSheetProps) {
  return (
    <div className="border border-border bg-card">
      {/* How it is priced, and what we look at. */}
      <div className="grid md:grid-cols-[1fr_1.2fr]">
        <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
          <SheetLabel>Rated</SheetLabel>
          {/* One basis reads as a statement; several read as a short list,
              set smaller so three lines do not crowd the panel. */}
          {Array.isArray(rated) ? (
            <ul className="mt-3 space-y-2.5">
              {rated.map((line) => (
                <li key={line} className="font-serif text-lg font-semibold leading-snug text-foreground text-balance">
                  {line}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 font-serif text-xl font-semibold leading-snug text-foreground text-balance md:text-2xl">
              {rated}
            </p>
          )}
        </div>
        <div className="bg-brand-mid/[0.05] p-6 md:p-8">
          <div className="flex items-center justify-between gap-3">
            <SheetLabel>What we read</SheetLabel>
            <span className="whitespace-nowrap px-1.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-wider text-brand-deep ring-1 ring-brand-mid/40">
              Read-only
            </span>
          </div>
          <ul className="mt-3 space-y-2">
            {reads.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                <span className="auxilium-node mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          {readsNote && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{readsNote}</p>}
        </div>
      </div>

      {/* The application, and the rating factors. */}
      <div className="grid border-t border-border md:grid-cols-2">
        <NumberedList
          label="What we ask for"
          items={asks}
          note={asksNote}
          className="border-b border-border md:border-b-0 md:border-r"
        />
        <NumberedList label="What moves price" items={drivers} />
      </div>

      {/* Standards, then how heavy the review is. */}
      <div className="border-t border-border p-6 md:px-8">
        <SheetLabel>Standards we reference</SheetLabel>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {standards.map((standard) => (
            <span
              key={standard}
              className="border border-border bg-background px-2 py-1 font-mono text-[0.66rem] leading-snug text-foreground"
            >
              {standard}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 border-t border-border bg-muted/40 px-6 py-4 sm:flex-row sm:items-baseline sm:gap-4 md:px-8">
        <SheetLabel>Review</SheetLabel>
        <p className="text-sm leading-relaxed text-muted-foreground">{review ?? DEFAULT_REVIEW}</p>
      </div>
    </div>
  );
}

function SheetLabel({ children }: { children: React.ReactNode }) {
  return <p className="data-label shrink-0 text-brand-mid">{children}</p>;
}

function NumberedList({
  label,
  items,
  note,
  className,
}: {
  label: string;
  items: string[];
  /** A lead-in line. It replaces the item count, which it would contradict
   * when the list summarizes a longer form. */
  note?: string;
  className?: string;
}) {
  return (
    <div className={cn("p-6 md:p-8", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <SheetLabel>{label}</SheetLabel>
        {!note && <span className="font-mono text-[0.62rem] tabular-nums text-muted-foreground">{items.length}</span>}
      </div>
      {note && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</p>}
      <ol className="mt-4">
        {items.map((item, i) => (
          <li key={item} className="flex gap-4 border-t border-border/70 py-2.5 first:border-t-0 first:pt-0">
            <span className="w-5 shrink-0 pt-px font-mono text-[0.66rem] tabular-nums text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm leading-relaxed text-foreground">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
