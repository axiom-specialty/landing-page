/**
 * Product taxonomy, the single source of truth for the Products mega-menu,
 * the coming-soon router, and any product listing on the site.
 *
 * status drives the status pill label; routing is by `href`, not status.
 *   "available"      → "Live"
 *   "alpha"          → "Alpha"
 *   "in-development" → "In development"
 *   "development"    → "Soon" (placeholder line, routed to /coming-soon/:slug)
 */

export type ProductStatus = "available" | "alpha" | "in-development" | "development";

export interface Product {
  slug: string;
  name: string;
  /** One-line menu description. */
  blurb: string;
  status: ProductStatus;
  /** Route or absolute URL. */
  href: string;
  external?: boolean;
  /** Longer copy for the coming-soon page. */
  summary?: string;
  /** What the future underwriting will focus on (coming-soon bullets). */
  focus?: string[];
}

export const products: Product[] = [
  {
    slug: "ai-liability",
    name: "AI Liability",
    blurb: "Standalone liability cover for organizations that deploy AI, where the forms they own now exclude.",
    status: "alpha",
    href: "/products/ai-liability",
  },
  /* Temporarily hidden. We are showing only AI Liability and MGBox for now, and
     will bring these back one at a time as each line launches. Kept in place
     (not deleted) so nothing is lost; uncomment an entry to relaunch it.
  {
    slug: "agentic-eo",
    name: "Agentic E&O",
    blurb: "Errors & omissions for deployed AI agents. Certification live; insurance in development.",
    status: "in-development",
    href: "/agentic-eo",
  },
  {
    slug: "energy-infrastructure",
    name: "Energy Infrastructure",
    blurb: "Coverage for the grid, generation, and storage powering the AI build-out.",
    status: "development",
    href: "/coming-soon/energy-infrastructure",
    summary:
      "The compute boom is a power boom. As hyperscale demand reshapes generation, transmission, and storage, Axiom is building specialty coverage for the physical infrastructure the AI era runs on.",
    focus: [
      "Grid interconnection and transmission exposure",
      "Battery and long-duration storage risk",
      "On-site and behind-the-meter generation",
      "Construction and operational phases",
    ],
  },
  {
    slug: "data-centers-pc",
    name: "Data Centers",
    blurb: "Property & casualty for hyperscale and colocation facilities.",
    status: "development",
    href: "/coming-soon/data-centers-pc",
    summary:
      "Data centers concentrate enormous value and novel failure modes, thermal, electrical, water, and supply-chain, in a single footprint. Axiom is developing property & casualty coverage tuned to how these facilities actually fail.",
    focus: [
      "Business interruption and contingent BI",
      "Cooling, power, and thermal-event exposure",
      "Equipment breakdown for high-density racks",
      "Colocation and tenant liability",
    ],
  },
  {
    slug: "tech-enterprise-do",
    name: "Tech Enterprise D&O",
    blurb: "Directors & officers cover for AI-first and deep-tech companies.",
    status: "development",
    href: "/coming-soon/tech-enterprise-do",
    summary:
      "Boards of AI-first companies face disclosure, governance, and duty-of-care questions no prior D&O market was written for. Axiom is designing management liability that understands the technology risk behind the balance sheet.",
    focus: [
      "AI disclosure and securities exposure",
      "Governance and duty-of-care for model risk",
      "Regulatory investigation defense",
      "Growth-stage and pre-IPO structures",
    ],
  },
  {
    slug: "humanoids",
    name: "Humanoids",
    blurb: "Liability for humanoid robots in commercial and industrial settings.",
    status: "development",
    href: "/coming-soon/humanoids",
    summary:
      "Humanoid robots are moving from demos into warehouses, plants, and storefronts. Axiom is building the liability framework for machines that share physical space with people and property.",
    focus: [
      "Bodily injury and third-party property damage",
      "Autonomy-level and operator-oversight rating",
      "Product and operational liability blend",
      "Fleet telemetry-based underwriting",
    ],
  },
  {
    slug: "autonomous-vehicles",
    name: "Autonomous Vehicles",
    blurb: "Liability for self-driving fleets, from robotaxis to autonomous trucking.",
    status: "development",
    href: "/coming-soon/autonomous-vehicles",
    summary:
      "As vehicles take the wheel, liability shifts from the driver to the system that drives. Axiom is building coverage for the operators and fleets deploying autonomous vehicles on real roads.",
    focus: [
      "Bodily injury and third-party property damage",
      "Autonomy-level and operational-domain rating",
      "Sensor, software, and decision-logic failure",
      "Fleet telemetry-based underwriting",
    ],
  },
  {
    slug: "autonomous-machinery-failure",
    name: "Autonomous Machinery Failure",
    blurb: "Coverage for failures of self-directed industrial machinery.",
    status: "development",
    href: "/coming-soon/autonomous-machinery-failure",
    summary:
      "When machinery makes its own decisions, failure is no longer just mechanical, it is a question of software, sensing, and judgment. Axiom is developing coverage for the consequences of autonomous machinery getting it wrong.",
    focus: [
      "Sensor, control, and decision-logic failure",
      "Resulting property and operational loss",
      "Human-in-the-loop and override design",
      "Continuous-monitoring underwriting",
    ],
  },
  */
];

/**
 * Software (not an insurance line): the platforms Axiom builds. Kept separate
 * from `products` so it never appears in coverage listings, the footer, or the
 * /coverages schedule.
 */
export const software: Product[] = [
  {
    slug: "mgbox",
    name: "MGBox",
    blurb: "The AI-native operating platform that runs our MGA, from submission to bind.",
    status: "development",
    href: "/coming-soon/mgbox",
    summary:
      "MGBox is the AI-native platform Axiom runs its own MGA on, from broker submission to underwriter pricing, authority, and bind. We are tenant zero: over the next few years we are hardening it into a platform other MGAs can license to become AI-native.",
    focus: [
      "Broker submissions, quotes, and bind in one place",
      "Authority-gated underwriting decisions and referrals",
      "A product registry: new lines as a workflow, not a rebuild",
      "Appointments, authorities, bordereau, and compliance",
    ],
  },
];

export const bySlug = (slug: string) => [...products, ...software].find((p) => p.slug === slug);

/** Grouping used to render the Solutions mega-menu. Status is conveyed by the
 * per-item tag, so the insurance lines sit under one heading. */
export const productMenuGroups: {
  label: string;
  items: Product[];
}[] = [
  {
    label: "Insurance & Risk",
    items: products,
  },
  {
    label: "Software",
    items: software,
  },
];
