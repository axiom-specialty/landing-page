import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { UnderwritingSheet } from "@/components/common/UnderwritingSheet";
import { Button } from "@/components/ui/button";
import {
  INDICATIVE_NOTE,
  MARKET_STATEMENT,
  type Block,
  type CoverageRow,
  type DetailSection,
} from "@/content/products";
import { cn } from "@/lib/utils";

/**
 * Product page sections, shared by every product page including AI Liability,
 * so a broker reads the same shapes on each line. Tones alternate from cream.
 */
export function ProductSections({
  sections,
  startIndex = 0,
}: {
  sections: DetailSection[];
  startIndex?: number;
}) {
  return (
    <>
      {sections.map((section, i) => {
        const n = startIndex + i;
        return (
          <DetailBlock
            key={section.title ?? `section-${n}`}
            section={section}
            tone={n % 2 === 0 ? "cream" : "canvas"}
            first={n === 0}
          />
        );
      })}
    </>
  );
}

export function DetailBlock({
  section,
  tone,
  first,
}: {
  section: DetailSection;
  tone: "cream" | "canvas";
  first?: boolean;
}) {
  return (
    <Section tone={tone} first={first}>
      {section.title && (
        <Reveal>
          <SectionHeading title={section.title} />
        </Reveal>
      )}

      {/* With no heading, the intro is the page's opening paragraph and is
          set larger to lead it. */}
      {section.intro && (
        <Reveal>
          <p
            className={cn(
              "max-w-3xl leading-relaxed text-pretty",
              section.title
                ? "mt-6 text-lg text-muted-foreground"
                : "text-xl text-foreground md:text-2xl md:leading-relaxed",
            )}
          >
            {section.intro}
          </p>
        </Reveal>
      )}

      {section.blocks?.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}

      {/* A numbered flow: one hairline grid so the steps read as a sequence
          rather than as separate cards. */}
      {section.steps && <StepGrid items={section.steps} />}

      {section.coverage && (
        <CoverageTable groups={[{ rows: section.coverage }]} />
      )}

      {section.points && (
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {section.points.map((point) => (
            <div key={point.title} className="card-enterprise">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </div>
          ))}
        </Reveal>
      )}

      {/* Two columns of plain statements, for a read/never-read style contrast. */}
      {section.contrast && (
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {section.contrast.map((col) => (
            <div key={col.title} className="card-enterprise">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {col.title}
              </h3>
              <NodeList items={col.items} className="mt-4" small />
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
          {section.cta.lead && (
            <p className="mb-5 max-w-2xl text-lg leading-relaxed text-foreground text-pretty">
              {section.cta.lead}
            </p>
          )}
          <Button asChild variant="default">
            {section.cta.href.startsWith("http") ? (
              <a
                href={section.cta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {section.cta.label} <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <Link to={section.cta.href}>
                {section.cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </Button>
        </Reveal>
      )}

      {section.note && (
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          {section.note}
        </p>
      )}
    </Section>
  );
}

/**
 * Named reference cards: the regulation a line answers to, or the standards it
 * is written against. Shared so every product page sets them the same way.
 */
export function ReferenceSection({
  title,
  items,
  tone,
}: {
  title: string;
  items: { name: string; note: string }[];
  tone: "cream" | "canvas";
}) {
  return (
    <Section tone={tone}>
      <Reveal>
        <SectionHeading title={title} />
      </Reveal>
      <Reveal
        stagger
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((item) => (
          <div key={item.name} className="card-enterprise">
            <h3 className="font-serif text-base font-semibold text-foreground">
              {item.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.note}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "coverage":
      return (
        <CoverageTable
          groups={block.groups}
          columns={block.columns}
          notes={block.notes}
          terms={block.terms}
        />
      );
    case "table":
      return (
        <div className="mt-10">
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          <DataTable columns={block.columns} rows={block.rows} />
          {block.footnote && (
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {block.footnote}
            </p>
          )}
        </div>
      );
    case "bullets":
      return (
        <Reveal className="mt-8">
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          <NodeList items={block.items} />
        </Reveal>
      );
    case "cards":
      return (
        <div className="mt-10">
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          <Reveal
            stagger
            className={cn(
              "grid gap-5",
              block.items.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2",
            )}
          >
            {block.items.map((card) => (
              <div key={card.title} className="card-enterprise">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                {Array.isArray(card.body) ? (
                  <NodeList items={card.body} className="mt-4" small />
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      );
    case "steps":
      return (
        <div className="mt-10">
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          <StepGrid items={block.items} />
        </div>
      );
    case "text":
      return (
        <Reveal>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {block.body}
          </p>
        </Reveal>
      );
    case "tags":
      return (
        <Reveal className="mt-8">
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          <div className="flex flex-wrap gap-1.5">
            {block.items.map((tag) => (
              <span
                key={tag}
                className="border border-border bg-card px-2.5 py-1.5 font-mono text-[0.72rem] leading-snug text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      );
    case "fineprint":
      return (
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          {block.body}
        </p>
      );
  }
}

function BlockHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
      {children}
    </h3>
  );
}

function NodeList({
  items,
  className,
  small,
}: {
  items: string[];
  className?: string;
  small?: boolean;
}) {
  return (
    <ul className={cn("max-w-3xl space-y-2.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-start gap-3 leading-relaxed",
            small
              ? "text-sm text-muted-foreground"
              : "text-base text-foreground",
          )}
        >
          <span
            className={cn("auxilium-node shrink-0", small ? "mt-1.5" : "mt-2")}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function StepGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <Reveal
      stagger
      className={cn(
        "mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2",
        items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
      )}
    >
      {items.map((step, i) => (
        <div key={step.title} className="bg-card p-6">
          <span className="font-mono text-[0.7rem] tabular-nums text-brand-mid">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {step.body}
          </p>
        </div>
      ))}
    </Reveal>
  );
}

const headClass =
  "px-5 py-3.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground";

/**
 * A cell that loses its column heading when the table stacks on phones, so it
 * carries the heading inline there as a small label.
 */
const labelledCell =
  "block px-5 py-1 text-sm leading-relaxed before:mr-2 before:font-mono before:text-[0.62rem] before:uppercase before:tracking-[0.14em] before:text-muted-foreground before:content-[attr(data-label)] md:table-cell md:py-4 md:before:content-none";

/**
 * Coverage schedule. On phones each row stacks (name, what it covers, the
 * money columns with their own labels, then basis) rather than scrolling
 * sideways; from md up it is a table again. Every coverage table carries the
 * indicative note and the E&S market statement beneath it.
 */
function CoverageTable({
  groups,
  columns,
  notes,
  terms,
}: {
  groups: { label?: string; rows: CoverageRow[] }[];
  columns?: { covers?: string; limit?: string; retention?: string };
  notes?: string[];
  terms?: { title: string; items: string[] };
}) {
  const hasBasis = groups.some((group) =>
    group.rows.some((row) => row.basis?.length),
  );
  const heads = [
    "Coverage",
    columns?.covers ?? "What it covers",
    ...(columns?.limit ? [columns.limit] : []),
    ...(columns?.retention ? [columns.retention] : []),
    ...(hasBasis ? ["Basis"] : []),
  ];
  const wide = heads.length > 3;
  return (
    <>
      {/* With terms, the panel sits beside the table on wide screens and
          below it otherwise, so the table never gets squeezed. */}
      <div
        className={cn(
          "mt-10",
          terms &&
            "grid gap-6 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start",
        )}
      >
        <Reveal className="border border-border md:overflow-x-auto">
          <table
            className={cn(
              "block w-full border-collapse text-left md:table",
              !wide && "md:min-w-[46rem]",
            )}
          >
            <thead className="hidden md:table-header-group">
              <tr className="bg-muted/60">
                {heads.map((h) => (
                  <th key={h} className={headClass}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            {groups.map((group, g) => (
              <tbody
                key={group.label ?? g}
                className="block md:table-row-group"
              >
                {group.label && (
                  <tr
                    className={cn(
                      "block bg-muted/40 md:table-row",
                      g > 0 && "border-t border-border",
                    )}
                  >
                    <th
                      colSpan={heads.length}
                      className="block px-5 py-3 font-serif text-base font-semibold text-foreground md:table-cell"
                    >
                      {group.label}
                    </th>
                  </tr>
                )}
                {group.rows.map((row, r) => (
                  <tr
                    key={row.name}
                    className={cn(
                      "block border-border bg-card align-top md:table-row",
                      (r > 0 || group.label || g > 0) && "border-t",
                    )}
                  >
                    <td className="block px-5 pb-1 pt-4 font-serif text-base font-semibold leading-snug text-foreground md:table-cell md:py-4">
                      {row.name}
                    </td>
                    <td className="block px-5 py-1 text-sm leading-relaxed text-muted-foreground md:table-cell md:py-4">
                      {row.covers}
                    </td>
                    {columns?.limit && (
                      <td
                        data-label={columns.limit}
                        className={cn(labelledCell, "text-foreground")}
                      >
                        {row.limit}
                      </td>
                    )}
                    {columns?.retention && (
                      <td
                        data-label={columns.retention}
                        className={cn(
                          labelledCell,
                          "text-foreground",
                          !row.retention && "hidden md:table-cell",
                          // Last cell of the stacked row when there is no basis.
                          !hasBasis && "pb-4",
                        )}
                      >
                        {row.retention}
                      </td>
                    )}
                    {hasBasis && (
                      <td className="block px-5 pb-4 pt-2 md:table-cell md:py-4">
                        <div className="flex flex-wrap gap-1">
                          {row.basis?.map((b) => (
                            <span
                              key={b}
                              className="inline-block whitespace-nowrap bg-brand-mid/15 px-1.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-wider text-brand-deep ring-1 ring-brand-mid/40"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                        {row.basisNote && (
                          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                            {row.basisNote}
                          </p>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </Reveal>

        {terms && (
          <Reveal
            as="aside"
            className="border border-brand-deep/30 bg-card p-6"
          >
            <h3 className="font-serif text-lg font-semibold text-brand-mid">
              {terms.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {terms.items.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>

      {notes && <NodeList items={notes} className="mt-6" small />}

      <div className="mt-6 max-w-3xl space-y-2 text-xs leading-relaxed text-muted-foreground">
        <p>{INDICATIVE_NOTE}</p>
        <p>{MARKET_STATEMENT}</p>
      </div>
    </>
  );
}

/**
 * A plain table, stacked on phones like the coverage table: the first column
 * leads in bold, the second follows as text, and any further column carries
 * its heading inline.
 */
function DataTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <Reveal className="border border-border md:overflow-x-auto">
      <table className="block w-full border-collapse text-left md:table">
        <thead className="hidden md:table-header-group">
          <tr className="bg-muted/60">
            {columns.map((h) => (
              <th key={h} className={headClass}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {rows.map((row) => (
            <tr
              key={row[0]}
              className="block border-t border-border bg-card align-top first:border-t-0 md:table-row md:first:border-t"
            >
              {row.map((cell, c) =>
                c === 0 ? (
                  <td
                    key={c}
                    className="block px-5 pb-1 pt-4 font-serif text-base font-semibold leading-snug text-foreground md:table-cell md:py-4"
                  >
                    {cell}
                  </td>
                ) : c === 1 ? (
                  <td
                    key={c}
                    className={cn(
                      "block px-5 text-sm leading-relaxed text-muted-foreground md:table-cell md:py-4",
                      row.length === 2 ? "pb-4 pt-1" : "py-1",
                    )}
                  >
                    {cell}
                  </td>
                ) : (
                  <td
                    key={c}
                    data-label={columns[c]}
                    className={cn(
                      labelledCell,
                      "text-foreground",
                      c === row.length - 1 && "pb-4",
                    )}
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
