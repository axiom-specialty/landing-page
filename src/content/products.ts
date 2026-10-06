/**
 * Product taxonomy, the single source of truth for the Solutions mega-menu,
 * the product pages, and any product listing on the site.
 *
 * Every product lives at /<category>/<slug>, and `href` IS that URL: the router
 * resolves a page by matching it, so a product moves by changing one string.
 * Status is a tag on the page, never part of the address, so a line going live
 * does not change its URL.
 *
 * The status tag reads `launch` when a line has a stated launch ("Launching
 * 2027"), and otherwise follows `status`:
 *   "available"      → "Live"
 *   "in-development" → "In Development"
 *   "development"    → "Soon"
 */

import type { FaqItem } from "./faq";

export type ProductStatus = "available" | "in-development" | "development";

/**
 * Printed under every coverage table on the site. Auxilium writes only in the
 * E&S market, so the statement is the same on every line.
 */
export const MARKET_STATEMENT =
  "Auxilium writes only in the excess and surplus (E&S) lines market. Policies are issued on non-admitted paper through licensed surplus lines brokers. Surplus lines taxes and fees are added to premium, and the policy is not protected by a state guaranty fund.";

export const INDICATIVE_NOTE =
  "Indicative summary only. Coverage is governed by the issued policy, subject to underwriting approval.";

/** One row of a coverage schedule. */
export interface CoverageRow {
  name: string;
  covers: string;
  limit?: string;
  /** Shown under the heading the block names: "Retention" or "Deductible". */
  retention?: string;
  /** Short trigger tags: First party, Third party, Claims-made. A table whose
   * rows carry none drops the Basis column. */
  basis?: string[];
  /** Anything about the basis too long for a tag, such as how it attaches. */
  basisNote?: string;
}

/**
 * The building blocks of a product page section, rendered in the order given.
 * Every block reuses a pattern already on the site: the coverage table, the
 * square tags, the card grid, the numbered step grid.
 */
export type Block =
  | {
      kind: "coverage";
      /**
       * Column headings. `covers` renames the description column; omit `limit`
       * or `retention` to drop that column.
       */
      columns?: { covers?: string; limit?: string; retention?: string };
      groups: { label?: string; rows: CoverageRow[] }[];
      /** Terms that apply across the table: aggregates, what counts as one event. */
      notes?: string[];
      /** A panel beside the table, such as the policy's indicative terms. */
      terms?: { title: string; items: string[] };
    }
  | { kind: "table"; heading?: string; columns: string[]; rows: string[][]; footnote?: string }
  | { kind: "bullets"; heading?: string; items: string[] }
  | { kind: "cards"; heading?: string; items: { title: string; body: string | string[] }[] }
  | { kind: "steps"; heading?: string; items: { title: string; body: string }[] }
  | { kind: "text"; body: string }
  | { kind: "tags"; heading?: string; items: string[] }
  | { kind: "fineprint"; body: string };

/**
 * A content section on a product's own page. New pages are written as
 * `blocks`; the older fields still render for pages written before them.
 */
export interface DetailSection {
  /** Omitted for an opening paragraph that needs no heading. */
  title?: string;
  intro?: string;
  blocks?: Block[];
  steps?: { title: string; body: string }[];
  points?: { title: string; body: string }[];
  /** Two columns of plain statements, for a this-not-that contrast. */
  contrast?: { title: string; items: string[] }[];
  /** A three-column coverage schedule. New pages use a coverage block. */
  coverage?: { name: string; covers: string; basis: string[] }[];
  /** Underwriting disclosure, rendered as one spec sheet. */
  underwriting?: {
    asks: string[];
    /** A line under "What we ask for", such as how long the application is. */
    asksNote?: string;
    reads: string[];
    readsNote?: string;
    drivers: string[];
    standards: string[];
    /** Exposure base. Several lines render as a list. */
    rated: string | string[];
    /** How heavy the review gets. Defaults to the robotics fleet wording. */
    review?: string;
  };
  /** `lead` is a sentence shown before the button. Internal links stay in the app. */
  cta?: { label: string; href: string; lead?: string };
  /** Small print under the section. */
  note?: string;
}

export interface Product {
  slug: string;
  name: string;
  /** One-line menu description. */
  blurb: string;
  /**
   * Label for the Solutions menu, where the group heading already supplies the
   * context. Defaults to `name`, which is what coverage cards and page titles
   * always use.
   */
  menuName?: string;
  status: ProductStatus;
  /** A stated launch, shown in place of the status label. */
  launch?: string;
  /** Route or absolute URL. */
  href: string;
  external?: boolean;
  /** Longer copy, used as the description on listings and in page meta. */
  summary?: string;
  /** Short focus bullets, shown only when a product has no written sections. */
  focus?: string[];
  /** How this line is bought, stated near the top of its page. */
  channel?: string;
  /** The policy's own name, set under the page title. */
  subname?: string;
  /** One sentence under the title in the page hero. */
  subhead?: string;
  /**
   * Looping video for this product's page hero, and nowhere else: cards and
   * listings always use the still. Paths are relative to public/.
   */
  heroVideo?: { webm: string; mp4: string; poster: string };
  /** Full sections for products that have a real page rather than a placeholder. */
  detail?: DetailSection[];
  /** Underwriting as a scroll-driven sequence, after the page's sections. */
  journey?: JourneyStep[];
  /** Standards and regulation the line is written against, as named cards. */
  frameworks?: { title: string; items: { name: string; note: string }[] };
  /** Questions answered at the foot of the product page. */
  faq?: FaqItem[];
}

/**
 * One stage of how a policy is written and lives, shown as a scroll-driven
 * sequence in place of an underwriting table. `footnote` is small print shown
 * with that step only.
 */
export interface JourneyStep {
  title: string;
  body: string;
  footnote?: string;
  /** The illustration on this step's face. Defaults to the one for its position. */
  art?: "application" | "bind" | "control" | "fleet" | "renewal";
}

/** The tag shown on menus, cards and listings. */
export const statusLabel = (product: Pick<Product, "status" | "launch">) =>
  product.launch ??
  (product.status === "available" ? "Live" : product.status === "in-development" ? "In Development" : "Soon");

/**
 * Digital risk. AI Liability insures the business that deploys AI agents; its
 * page content lives in ai-liability.ts. It is the only digital line at
 * launch: the Agent Library & Vendor Certification program is withdrawn
 * below until it is offered.
 */
export const aiLiability: Product[] = [
  {
    slug: "ai-liability",
    name: "AI Liability",
    subname: "Autonomous Operations Policy",
    subhead: "Cover for what your AI agents do: the money they move, the commitments they make and the records they change.",
    blurb: "Cover for what your AI agents do: the money they move, the commitments they make and the records they change.",
    summary:
      "The Autonomous Operations Policy pays your own loss when an AI agent errs, and fills the liability gaps that AI exclusions now leave in standard policies. For companies with up to $1bn in revenue.",
    status: "in-development",
    launch: "Launching 2027",
    href: "/digital-risk/ai-liability",
    channel: "Available through: your broker (E&S)",
  },

];

/**
 * Robotics, in two lines that follow who carries the risk: the business that
 * deploys robots, and the company that makes, leases, integrates or services
 * them: Robotic Protection and Robot Maker Coverage. Home humanoids are an
 * endorsement on the maker's policy from 2029
 * rather than a line of their own. Each renders as a coverage card, so each
 * needs art at `public/covers/<slug>.jpg`.
 */
export const robotics: Product[] = [
  {
    slug: "robotic-protection",
    name: "Robotic Protection",
    subhead: "Autonomy is physically deployed, we got you covered",
    blurb: "Cover for every robot you run: the robot, the downtime, and the liability your GL now excludes.",
    status: "development",
    launch: "Launching 2027",
    href: "/robotics/robotic-protection",
    channel: "Available through: your broker, or included in your robot vendor's sale or lease (E&S)",
    summary:
      "For every company running robots. Robot damage, collateral damage, operational interruption, robot liability and incident response, through your broker or included when you buy or lease the robot.",
    detail: [
      {
        title: "Coverage",
        blocks: [
          {
            kind: "coverage",
            columns: { covers: "Description", limit: "Limit", retention: "Deductible" },
            groups: [
              {
                rows: [
                  {
                    name: "Robot Damage",
                    covers:
                      "Collision, fall, fire, breakdown, software-caused failure, hacking, theft; includes leased robots",
                    limit: "Scheduled value, up to $10m per site",
                    retention: "$5,000 per robot, $25,000 per event",
                  },
                  {
                    name: "Collateral Damage",
                    covers:
                      "Damage a robot does to your goods, racking, machines and other robots; pays your property deductible",
                    limit: "$1m",
                    retention: "$10,000",
                  },
                  {
                    name: "Operational Interruption",
                    covers: "Downtime with or without damage, paid at an agreed amount per site-day; vendor failure",
                    limit: "$2m (vendor failure $1m)",
                    retention: "12-hour wait",
                  },
                  {
                    name: "Robot Liability",
                    covers:
                      "Injury and damage to visitors, contractors, the public and client sites, including remote-operation errors and privacy claims",
                    limit: "$5m",
                    retention: "$25,000",
                  },
                  {
                    name: "Incident Response",
                    covers: "OSHA defense, data preservation, crisis communications",
                    limit: "$250,000",
                    retention: "$10,000",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    journey: [
      {
        title: "Broker submission",
        body: "Work with your broker to fill in the application: the robots you run, where they work, who shares the space with them, and how they are maintained. If your robot vendor offers our cover, it can be included when you buy or lease the robots instead.",
      },
      {
        title: "Quote and bind",
        body: "We review your application and come back with a quote through your broker. Accept it, and your fleet is covered!",
        footnote: "Some applications may be declined.",
      },
      {
        title: "Risk mitigation",
        art: "fleet",
        body: "Your policy comes with AuxControl, a suite of risk mitigation and governance tools that gives you a clear picture of your fleet's exposure. Fleets of 10 or more robots connect a read-only data feed within 30 days, so patterns like repeated emergency stops or a troublesome software release come to light early and are fixed before they cost you anything.",
      },
      {
        title: "Renewal",
        body: "Ahead of renewal, your broker receives a renewal application that already reflects what we know about your fleet, so there is less to fill in. The work you put in during the year counts: safer operations and stronger controls are taken into account in your renewal terms. New robots, sites and vendors are added at the same time, so your cover keeps pace with your fleet.",
      },
    ],
    frameworks: {
      title: "Regulatory frameworks",
      items: [
        {
          name: "ANSI/A3 R15.08",
          note: "The US safety standard for industrial mobile robots, from the robot itself to how it is integrated and used on site.",
        },
        {
          name: "ISO 10218",
          note: "Safety requirements for industrial robots and robot systems, revised in 2025 to take in collaborative operation.",
        },
        {
          name: "ISO 3691-4",
          note: "Safety for driverless industrial trucks and their systems, including autonomous forklifts and mobile robots.",
        },
        {
          name: "UL 3100",
          note: "The safety standard for automated mobile platforms, covering their electrical systems, batteries and charging.",
        },
        {
          name: "ISO/TS 15066",
          note: "Guidance for collaborative robots working alongside people, including limits on contact force and pressure.",
        },
        {
          name: "FM Data Sheet 8-34",
          note: "Loss prevention guidance for lithium-ion batteries, which we apply to charging areas: spacing, detection and suppression.",
        },
      ],
    },
    faq: [
      {
        q: "Who is Robotic Protection for?",
        a: "Any business running robots, whether they own them, lease them or use them as a service. It is built for fleets of 10 to 500 robots, and is bought by the operations or risk lead through a broker, or included when you buy or lease robots from a vendor that offers it.",
      },
      {
        q: "Which robots can be covered?",
        a: [
          "Robots with a recognized safety standard: industrial arms, cobots, warehouse robots, autonomous forklifts, and cleaning, hospitality and other service robots.",
          "A robot without a certification can be covered once it has an independent safety assessment.",
          "Drones are not covered.",
        ],
      },
      {
        q: "Doesn't my property or general liability policy already cover my robots?",
        a: [
          "Usually not fully. Property policies pay for downtime only after physical damage, and many general liability policies now exclude AI and autonomy.",
          "Robotic Protection pays first for your scheduled robots, pays your property deductible when a robot caused the damage, and sits over your GL, dropping down where it excludes robots or AI.",
          "A loss is never paid twice.",
        ],
      },
      {
        q: "What if a software update grounds my whole fleet?",
        a: "Operational Interruption pays an agreed amount for each site-day your robots are down, with or without physical damage, after a 12-hour wait. One software release counts as one event, however many robots it reaches.",
      },
      {
        q: "What if my robot vendor goes out of business?",
        a: "Vendor failure is part of Operational Interruption, with a limit of $1m, so a vendor that stops supporting your robots does not leave you carrying the downtime alone.",
      },
      {
        q: "Do I need to share data with you?",
        a: [
          "Fleets of 10 or more robots connect a read-only data feed to the fleet manager or robot controllers within 30 days.",
          "It lets us review each fleet's safety every quarter and check every software release within 7 days, and clean fleets earn a credit.",
          "If the feed lapses, default rates apply and the deductible doubles.",
        ],
      },
      {
        q: "How are claims handled?",
        a: [
          "Robots record everything, so claims are proven from fleet data rather than argued.",
          "Notice is acknowledged within 24 hours, the fleet data is already preserved, you get a coverage position within 30 days, and first-party losses are paid within 10 business days of agreement.",
          "For example, an autonomous forklift that misreads a pallet and strikes racking, damaging itself, $120,000 of stock and closing the aisle for 2 days, would be paid across Robot Damage, Collateral Damage and Operational Interruption from the fleet logs.",
        ],
      },
      {
        q: "What isn't covered?",
        a: [
          "Your own employees, who are covered by workers' comp.",
          "Wear and tear.",
          "Buildings and stock in a fire, which stay with your property policy.",
          "Contract penalties and SLA credits.",
          "Cyber downtime with no damage, which belongs to your cyber policy.",
          "Uncertified robots without an independent assessment.",
          "Drones.",
          "War, state-backed cyber attacks and intentional acts.",
        ],
      },
      {
        q: "How is it priced?",
        a: "Per robot, on the same five factors for every robot type: its energy (mass, speed, payload and battery), who is near it, how it decides, where it works, and the evidence behind it (certification, the fleet data feed and loss history). Certification, staged software updates and a low incident rate earn credits.",
      },
      {
        q: "How do I buy it?",
        a: "Through your broker, as an annual policy in the E&S market, or included when you buy or lease robots from a vendor that offers it.",
      },
    ],
  },
  {
    slug: "robot-maker-coverage",
    name: "Robot Maker Coverage",
    subhead: "Liability for the robots you make, lease, integrate or service, with autonomy covered, not excluded.",
    blurb: "Liability for the robots you make, lease, integrate or service, with autonomy covered, not excluded.",
    status: "development",
    launch: "Launching 2027",
    href: "/robotics/robot-maker-coverage",
    channel: "Available through: your broker (E&S)",
    // The loop shows earlier art, so it is off until one is cut from the
    // current cover. The files are still in public/covers.
    // heroVideo: {
    //   webm: "covers/robot-maker-liability.webm",
    //   mp4: "covers/robot-maker-liability.mp4",
    //   poster: "covers/robot-maker-liability-poster.jpg",
    // },
    summary:
      "For robot makers, vendors, integrators and service companies. Products liability, recall and field fix, performance E&O and general liability, with autonomy covered, not excluded.",
    detail: [
      {
        title: "Coverage",
        blocks: [
          {
            kind: "coverage",
            columns: { covers: "Description", limit: "Limit", retention: "Deductible" },
            groups: [
              {
                rows: [
                  {
                    name: "Products Liability",
                    covers:
                      "Injury and damage caused by robots you made, leased, integrated or serviced, including your customers' employees' suits and hack-caused harm",
                    limit: "$5m ($10m on referral)",
                    retention: "$50,000",
                  },
                  {
                    name: "Recall & Field Fix",
                    covers:
                      "Recall, retrofit, field service and emergency software rollout after a dangerous defect",
                    limit: "$1m",
                    retention: "$50,000",
                  },
                  {
                    name: "Performance E&O",
                    covers:
                      "Your customers' financial loss when your robots fail to perform; waived when the customer holds our Robotic Protection",
                    limit: "$2m",
                    retention: "$50,000",
                  },
                  {
                    name: "General Liability",
                    covers: "Your premises and operations, with autonomy covered, not excluded",
                    limit: "$2m per occurrence",
                    retention: "$25,000",
                  },
                ],
              },
            ],
          },
        ],
        cta: {
          lead: "Want to sell your robots with cover included? Offer Robotic Protection to your customers.",
          label: "See Robotic Protection",
          href: "/robotics/robotic-protection",
        },
      },
    ],
  },
];

/**
 * Software (not an insurance line): the platforms Auxilium builds. Kept separate
 * from `products` so it never appears in coverage listings, the footer, or the
 * /coverages schedule.
 */
export const software: Product[] = [
  {
    slug: "auxcontrol",
    name: "AuxControl",
    blurb: "The risk-mitigation suite every insured gets: adversarial agent testing, accreditation, and continuous governance.",
    status: "in-development",
    href: "/software/auxcontrol",
    summary:
      "AuxControl is the active side of an Auxilium policy. Rather than transferring the risk and waiting for a claim, the insured gets the tooling to find and close exposure while the policy is in force: adversarial testing of deployed agents, accreditation of the systems that pass, and continuous governance over how they run.",
    focus: [
      "Adversarial testing and red-teaming of deployed agents",
      "Accreditation for the systems that pass evaluation",
      "Continuous governance: authority, logging, and kill switch",
      "Findings that feed pricing and renewal terms",
    ],
    detail: [
      {
        title: "See the AI running through your organization",
        intro:
          "AuxControl connects to your workspace read-only, discovers every AI model, agent and shadow tool in use, scores the exposure the way an underwriter would, and keeps watching so nothing drifts unseen. It is the loss-control half of the policy: the part that lowers the risk rather than transferring it.",
        points: [
          {
            title: "Discovery, including the shadow",
            body: "It inventories the AI actually in use, sanctioned or not, maps each tool to the people using it, and surfaces the ones nobody told you about. Most organizations are surprised by this list.",
          },
          {
            title: "Scored like an underwriter",
            body: "A versioned scoring engine turns that surface into a single risk index, on the same basis your policy is underwritten. The number your broker sees and the number you see are the same number.",
          },
          {
            title: "Watched continuously",
            body: "Live telemetry and scheduled syncs re-check posture, raise alerts when an agent drifts or goes silent, and produce reports a board can read. Risk is managed between renewals, not only at them.",
          },
        ],
      },
      {
        title: "How it works",
        steps: [
          {
            title: "Connect your workspace",
            body: "Your admin grants read-only access to Google Workspace or Microsoft 365. No software to deploy, no code changes, no agent to install.",
          },
          {
            title: "We assess the surface",
            body: "It inventories the AI models, agents and copilots in use, maps them to your people, and flags shadow AI.",
          },
          {
            title: "Risk is scored",
            body: "The scoring engine turns that surface into a collective risk index, versioned so a score can be explained later.",
          },
          {
            title: "Monitored continuously",
            body: "Detection rules run around the clock against live telemetry, raising alerts on drift and producing board-ready reports.",
          },
        ],
        note: "Live in an afternoon rather than a quarter. The first sync reads your directory and AI activity within minutes.",
      },
      {
        title: "What it reads, and what it never touches",
        intro:
          "AuxControl reads through the providers' own admin APIs. It never writes to your tenant, never opens file contents, and can be disconnected at any time.",
        contrast: [
          {
            title: "What it reads",
            items: [
              "Directory headcount, which sizes the monitored population",
              "AI application and model usage, which finds sanctioned and shadow AI",
              "Admin audit events, which detect drift and silent agents",
            ],
          },
          {
            title: "What it never touches",
            items: [
              "File and message contents, which are never accessed",
              "Anything written back to your tenant, because access is strictly read-only",
              "Your environment, because there is nothing to install in it",
            ],
          },
        ],
      },
      {
        title: "Adversarial testing and accreditation",
        intro:
          "Monitoring tells you what an agent is doing. Testing tells you what it would do under pressure. AuxControl runs deployed agents through a certification range: live tool calls, adversarial users and poisoned documents, producing a risk profile across the dimensions of agentic liability rather than a pass or fail.",
        points: [
          {
            title: "A range, not a checklist",
            body: "Agents face simulated adversaries and hostile inputs in a live environment. What comes out is a measured profile of how the agent behaves when someone is actively trying to make it fail.",
          },
          {
            title: "Bound to the deployment",
            body: "An accreditation is hash-bound to the configuration that earned it: model, scaffold, tools, guardrails and prompt. Change the thing materially and the accreditation is void, because it no longer describes what is running.",
          },
          {
            title: "Evidence, never a condition",
            body: "Results inform underwriting and renewal terms. They are never a condition of cover, and accreditation is not insurance: it is evidence about a system, not a promise to pay.",
          },
        ],
        cta: { label: "Go to the certification range", href: "https://certify.auxiliums.com" },
      },
      {
        title: "How you get it",
        intro:
          "AuxControl is loss control attached to an Auxilium policy, not software sold on its own. Binding a policy provisions it.",
        points: [
          {
            title: "Included at bind",
            body: "Every AI Liability policyholder is provisioned AuxControl free when the policy binds. No separate purchase, and everything needed to monitor your covered exposure is in it.",
          },
          {
            title: "Upgrade for the whole organization",
            body: "Policyholders who want to govern beyond the exposure their policy covers can upgrade: full workspace discovery, compliance frameworks, governance policies, scheduled reports and the audit trail.",
          },
          {
            title: "Priced on the population",
            body: "The upgrade is priced on the population pulled from your directory rather than on seats, because the risk spans the whole workforce and not just the people who log in. Annual, all features included.",
          },
        ],
        cta: { label: "Go to AuxControl", href: "https://govern.auxiliums.com" },
        note: "In development under this name. Findings feed underwriting and renewal, and enrollment is never a condition of coverage.",
      },
    ],
  },
];

/**
 * The coverage schedule: insurance lines only, in the order they render on
 * /coverages and the home grid. Software is excluded by construction.
 */
export const products: Product[] = [...aiLiability, ...robotics];

/* Temporarily hidden lines. Kept in place (not deleted) so nothing is lost;
   restore an entry here and its route in seo.json to relist it.

   - agentic-eo             → /agentic-eo
   - energy-infrastructure  → /coming-soon/energy-infrastructure
   - data-centers-pc        → /coming-soon/data-centers-pc
   - tech-enterprise-do     → /coming-soon/tech-enterprise-do

   Their full definitions are in git history at 03932a1:src/content/products.ts.

   Yard & Site Autonomy was withdrawn later; its definition, SEO entry and
   image prompt are at 1315c81. */

/** The live product whose page sits at this pathname, ignoring a trailing slash. */
export const productByPath = (pathname: string) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return [...aiLiability, ...robotics, ...software].find((p) => p.href === path);
};

export const bySlug = (slug: string) =>
  [...aiLiability, ...robotics, ...software].find((p) => p.slug === slug);

/**
 * Grouping used to render the Solutions mega-menu, one group per URL category:
 * /digital-risk, /robotics, /software. Groups with no items are
 * dropped, so a withdrawn group leaves no empty heading behind.
 */
export const productMenuGroups: {
  label: string;
  /** One line under the group heading, so the rows below can stay just names. */
  description: string;
  items: Product[];
  /** Where the group heading itself links, when it has a page of its own. */
  href?: string;
}[] = [
  {
    label: "Digital Risk",
    description: "Cover for the duty owed when AI acts.",
    items: aiLiability,
  },
  {
    label: "Robotics",
    description: "Liability for machines that act physically.",
    items: robotics,
  },
  {
    label: "Software",
    description: "Risk tools for the insured, and our own platform.",
    items: software,
  },
].filter((group) => group.items.length > 0);

/**
 * Withdrawn lines. Not rendered, not routed and not in the sitemap, but kept
 * typed so they cannot rot: to relaunch one, move its entry back into the array
 * it came from and restore its route in seo.json.
 *
 * Embedded Agentic Risk gave way to the Agent Library & Vendor Certification
 * program (briefly Agentic Certification & Coverage). The five
 * robotics lines gave way to the three that follow the deck. MGBox is not
 * offered publicly.
 */
export const withdrawn: Product[] = [
  {
    slug: "embedded-agentic-risk",
    name: "Embedded Agentic Risk",
    blurb:
      "Cover your customers can bind on an agent deployment, offered inside your product and underwritten by Auxilium.",
    status: "in-development",
    href: "/products/embedded-agentic-risk",
    channel:
      "Available through: your AI vendor's product, sold by Auxilium's licensed agency",
    summary:
      "Let your customers insure their agent deployments at the moment they go live. One API, offered inside your product, underwritten by Auxilium.",
    detail: [
      {
        title: "Who it is for",
        points: [
          {
            title: "For developers",
            body: "Companies that build agentic software: support agents, finance and operations agents, coding and IT agents, sales agents. You offer cover as part of deployment rather than leaving your customer to find it.",
          },
          {
            title: "Who is insured",
            body: "Your customer, the business deploying the agent inside its own operations. The policy is issued in the customer's name and they are the policyholder.",
          },
          {
            title: "What is insured",
            body: "The losses the agent's actions cause the deploying business and the people it owes duties to. Not the agent, and not you.",
          },
        ],
      },
      {
        title: "How it works",
        steps: [
          {
            title: "Integrate",
            body: "Add the Auxilium API: a quote endpoint, a bind endpoint and a webhook for policy events.",
          },
          {
            title: "Deploy",
            body: "When a customer deploys an agent, your product passes the deployment configuration with the customer's consent: what the agent can do, which systems it can reach, spending and action limits, and where a human approves.",
          },
          {
            title: "Offer and bind",
            body: "The customer sees a quote inside the deployment flow and can bind it in a few clicks. Cover is sold by Auxilium's licensed agency, and the customer is the policyholder.",
          },
          {
            title: "Covered from day one",
            body: "The policy is bound on the configuration at deployment, so there is no uncovered waiting period.",
          },
          {
            title: "Adjust on real activity",
            body: "After the first 30 days, read-only activity logs from your platform feed a rate adjustment. After that, rates are reviewed at set intervals, for example quarterly, rather than changed continuously.",
          },
          {
            title: "Claims",
            body: "Customers report claims directly to Auxilium.",
          },
        ],
      },
      {
        title: "What it covers",
        intro:
          "Cover answers to the deployer, the business that turned the agent on inside its own operations.",
        coverage: [
          {
            name: "Third-party liability",
            covers:
              "A claim arising from an agent's action: wrong or harmful communications to customers, unauthorized commitments, mishandled personal data, or erroneous transactions affecting a third party.",
            basis: ["Third party"],
          },
          {
            name: "First-party loss",
            covers:
              "The deployer's own loss from an agent's unauthorized or erroneous action, including funds sent in error and the cost to reverse or remediate the action.",
            basis: ["First party"],
          },
          {
            name: "Incident response",
            covers:
              "Investigation, notification and remediation costs after an agent-caused incident.",
            basis: ["First party"],
          },
          {
            name: "Regulatory defense",
            covers: "Defense costs in a regulatory proceeding arising from an agent's action.",
            basis: ["Regulatory"],
          },
        ],
      },
      {
        title: "What it does not cover",
        intro:
          "We do not insure the agent. Three exclusions follow from that and they are the ones worth stating plainly.",
        points: [
          {
            title: "The agent itself",
            body: "Its performance, accuracy or uptime, and the cost to fix or replace it. If the agent is simply bad at its job, that is a product question between you and your customer.",
          },
          {
            title: "The developer's own liability",
            body: "Your product liability and your errors and omissions are not covered here. This policy belongs to your customer, not to you.",
          },
          {
            title: "Approved actions outside permissions",
            body: "Loss from an action a human approved outside the agent's configured permissions. The configuration is what was underwritten.",
          },
        ],
      },
      {
        title: "For developers: what you get",
        points: [
          {
            title: "A differentiator in the sale",
            body: "Cover offered at deployment is a reason to choose you, and a faster path through your customer's security and risk review.",
          },
          {
            title: "No insurance operations",
            body: "Auxilium handles licensing, underwriting, policy issuance and claims. You ship an integration, not a carrier relationship.",
          },
          {
            title: "Compensation",
            body: "A marketing fee that is not tied to whether a customer buys, unless you hold a producer license.",
          },
        ],
        // TODO(legal): confirm the marketing-fee description and the
        // producer-license carve-out against the agency agreement and the
        // anti-rebating and licensing rules in each state we write in.
        note:
          "In development. Nothing here is an offer of insurance or a commitment to quote, and the policy wording governs in every respect.",
      },
    ],
  },
  {
    slug: "warehouse-robotics",
    name: "Warehouse Robotics",
    blurb: "Liability for autonomous mobile robots and picking systems inside fulfillment operations.",
    status: "development",
    href: "/coming-soon/warehouse-robotics",
    channel: "Available through: your broker",
    summary:
      "Fulfillment floors now mix people, autonomous mobile robots, and picking arms at speed and density no prior general liability form was rated for. Auxilium is building coverage for what happens when that mix goes wrong.",
    focus: [
      "Human and robot shared-floor bodily injury",
      "Inventory and third-party goods damage",
      "Fleet coordination and traffic-management failure",
      "Telemetry-based rating across the fleet",
    ],
    detail: [
      {
        title: "Coverage",
        intro:
          "Fulfillment floors run autonomous mobile robots and picking systems in the same aisles as people, at densities ISO 3691-4 and ANSI/RIA R15.08 were written to govern and that no general liability form was rated for. The cover follows the ways that mix actually fails.",
        coverage: [
          {
            name: "Third-party bodily injury",
            covers:
              "Injury to third parties, including visitors, drivers, contractors and temporary workers supplied by a staffing agency, struck, trapped or crushed by a mobile robot or a picking system. Your own employees are covered by workers' compensation.",
            basis: ["Third party"],
          },
          {
            name: "Goods in your care",
            covers:
              "Damage to inventory and to third-party goods held for a customer when a robot drops, collides with or mishandles a load, including the pod or rack it was carrying.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Fleet coordination failure",
            covers:
              "Loss when the traffic-management layer, not an individual robot, is at fault: deadlock, mis-sequencing, or two machines routed into the same space.",
            basis: ["First party"],
          },
          {
            name: "Operational interruption",
            covers:
              "Lost throughput while a fleet is stood down after an event, including the cost of reverting to manual picking and the re-commissioning needed to restart.",
            basis: ["First party"],
          },
          {
            name: "Unauthorized control",
            covers:
              "Physical loss following unauthorized access to the fleet management system, where a cyber policy answers the intrusion but not the damage the machines then do.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Robot physical loss and breakdown",
            covers:
              "Damage to, or breakdown of, the robots, chargers and fleet infrastructure from collision, fire, electrical fault or mechanical failure. Includes leased and financed robots, and the cost of meeting the lease's replacement obligation.",
            basis: ["First party"],
          },
          {
            name: "Vendor failure and stranded fleet",
            covers:
              "If your robot vendor becomes insolvent, exits the business or ends software support, the cost to keep the fleet running, migrate to a new fleet management system, or replace robots that can no longer operate.",
            basis: ["First party"],
          },
          {
            name: "Regulatory proceedings",
            covers:
              "Defense and investigation costs in a workplace safety proceeding arising from an event involving the fleet, within the elected scope.",
            basis: ["Regulatory"],
          },
        ],
        note: "Indicative cover for a line in development, not a schedule of insurance and not an offer to quote. Agreement names, triggers, sublimits and exclusions are subject to the filed wording, and the wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Fleet list: make, model, count, age",
            "Robot type: goods-to-person, AMR pickers, autonomous forklifts",
            "Site layout, including whether robots share aisles with people and forklifts",
            "Your mobile robot risk assessment",
            "Maintenance and software support contracts",
            "Charging area setup",
            "Three years of incidents",
          ],
          reads: [
            "A read-only export from your fleet management system: operating hours, emergency stops, contact and near-miss events, speed and safety-field settings, uptime",
          ],
          drivers: [
            "Mixed traffic versus segregated zones",
            "People density",
            "Robot mass and speed",
            "Safety-field configuration",
            "Incident and emergency-stop rate per 1,000 operating hours",
            "Vendor concentration and financial strength",
            "Fire controls in charging areas",
          ],
          standards: [
            "ANSI/A3 R15.08-1, -2 and -3, including the 2026 user requirements",
            "ISO 3691-4",
            "UL 3100",
          ],
          rated: "Per robot per year, by robot class.",
        },
      },
    ],
  },
  {
    slug: "manufacturing-autonomous-machinery",
    name: "Manufacturing Machinery",
    blurb: "Coverage for self-directed machinery on the production line.",
    status: "development",
    href: "/coming-soon/manufacturing-autonomous-machinery",
    channel: "Available through: your broker",
    summary:
      "When machinery makes its own decisions, failure is no longer just mechanical, it is a question of software, sensing, and judgment. Auxilium is developing coverage for the consequences of autonomous production machinery getting it wrong.",
    focus: [
      "Sensor, control, and decision-logic failure",
      "Resulting property and operational loss",
      "Human-in-the-loop and override design",
      "Continuous-monitoring underwriting",
    ],
    detail: [
      {
        title: "Coverage",
        intro:
          "When a machine chooses its own next action, failure stops being purely mechanical. The cover is written around sensing, control and judgment, and around collaborative operation, where ISO 10218 and ISO/TS 15066 put a person inside the working envelope by design.",
        coverage: [
          {
            name: "Decision-logic failure",
            covers:
              "Loss where the machine did what it decided to do and the decision was wrong: mis-sensed material, a misread setpoint, or an action taken outside the intended envelope.",
            basis: ["First party"],
          },
          {
            name: "Resulting product loss",
            covers:
              "Scrap, rework and the cost of quarantining and re-inspecting output produced between the failure and its discovery, which is usually the larger number.",
            basis: ["First party"],
          },
          {
            name: "Collaborative operation injury",
            covers:
              "Injury to a visitor, contractor, vendor technician or temporary worker inside the machine's envelope, where power and force limiting, speed and separation monitoring, or the safeguarding around them did not hold. Your own employees are covered by workers' compensation.",
            basis: ["Third party"],
          },
          {
            name: "Override and stop failure",
            covers:
              "Loss where a human-in-the-loop control existed but did not arrest the process: an override ignored, a stop that did not stop, or an approval gate bypassed.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Operational interruption",
            covers:
              "Downtime while the line is stopped, the cell is re-validated and the control configuration is re-qualified before production restarts.",
            basis: ["First party"],
          },
          {
            name: "Regulatory proceedings",
            covers:
              "Defense and investigation costs in a workplace safety or machinery-directive proceeding arising from a covered event, within the elected scope.",
            basis: ["Regulatory"],
          },
        ],
        note: "Indicative cover for a line in development, not a schedule of insurance and not an offer to quote. Agreement names, triggers, sublimits and exclusions are subject to the filed wording, and the wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Inventory of robot cells and cobots",
            "Application: welding, palletizing, machine tending, assembly",
            "Guarding method: fenced, safety scanners, or power and force limited cobots",
            "Your robot cell risk assessment",
            "Integrator",
            "Lockout and access procedures",
            "Who else enters the cells: visitors, vendor technicians, contractors",
          ],
          reads: [
            "Read-only exports of robot controller and safety controller alarm and fault history",
          ],
          drivers: [
            "Fenced versus collaborative operation",
            "Payload and speed",
            "Third-party access",
            "How dependent output is on each cell",
            "The consequence of a robot error on the product you ship",
          ],
          standards: [
            "ISO 10218-1 and -2 (2025)",
            "ISO/TS 15066",
            "ANSI/A3 R15.06-2025",
          ],
          rated: "Per robot cell per year.",
        },
      },
    ],
  },
  {
    slug: "delivery-robotics",
    name: "Delivery Robotics",
    blurb: "Liability for sidewalk, curbside, and aerial delivery fleets in public space.",
    status: "development",
    href: "/coming-soon/delivery-robotics",
    channel: "Available through: your broker",
    summary:
      "Delivery robots operate where the public is, on sidewalks, at curbs, and overhead. The exposure is third-party from the first mile. Auxilium is building coverage for the operators putting those fleets into public space.",
    focus: [
      "Pedestrian and third-party bodily injury",
      "Municipal permitting and public-right-of-way conditions",
      "Cargo, custody, and last-mile loss",
      "Route, density, and operational-domain rating",
    ],
    detail: [
      {
        title: "Coverage",
        intro:
          "A delivery fleet works where the public is. Sidewalk and curbside robots generally sit outside auto liability and fall to general and product liability, which means the exposure is third-party from the first mile and the permit conditions are part of the risk.",
        coverage: [
          {
            name: "Public bodily injury",
            covers:
              "Injury to a pedestrian, cyclist or bystander struck by, tripped over or obstructed by a robot operating in public space, including at crossings and curb transitions.",
            basis: ["Third party"],
          },
          {
            name: "Third-party property damage",
            covers:
              "Damage to vehicles, storefronts, street furniture and private property caused by a unit in transit or at rest.",
            basis: ["Third party"],
          },
          {
            name: "Cargo and custody",
            covers:
              "Loss of or damage to the goods carried, including spoilage on a stalled unit and loss following theft or tampering while the robot is unattended.",
            basis: ["First party"],
          },
          {
            name: "Right-of-way and permit conditions",
            covers:
              "Defense costs and claims arising from operation in the public right of way, including alleged breach of a municipal permit condition or operating-area restriction.",
            basis: ["Third party", "Regulatory"],
          },
          {
            name: "Fleet grounding",
            covers:
              "Operational loss where a regulator, a municipality or your own protocol grounds the fleet in a jurisdiction after an event.",
            basis: ["First party"],
          },
          {
            name: "Unauthorized control",
            covers:
              "Physical and third-party loss following unauthorized access to a unit or to the fleet control plane, where a cyber policy answers the intrusion and not its consequences.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Theft and vandalism",
            covers:
              "Loss of or damage to a unit taken, tipped, stripped or destroyed while working unattended in public space.",
            basis: ["First party"],
          },
        ],
        note:
          "Aerial delivery is not automatic cover and requires an express endorsement and specialist review. " + "Indicative cover for a line in development, not a schedule of insurance and not an offer to quote. Agreement names, triggers, sublimits and exclusions are subject to the filed wording, and the wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Cities and states of operation, and compliance with each state's personal delivery device law",
            "Fleet size, weight class and speed caps",
            "Route profile: sidewalks, crosswalks, campuses",
            "Remote supervision ratio",
            "Municipal permit terms and insurance minimums",
          ],
          reads: [
            "Miles traveled",
            "Interventions per 1,000 miles",
            "Contact events",
            "Route exposure by area",
          ],
          drivers: [
            "Pedestrian density",
            "Street crossings per mile",
            "Supervision ratio",
            "Device weight and speed",
            "Weather",
          ],
          standards: [
            "State personal delivery device statutes, several of which set a minimum liability limit, for example Virginia at $100,000",
            "Municipal permit conditions",
          ],
          rated: "Per device per year, plus a per-mile component.",
        },
      },
    ],
  },
  {
    slug: "humanoids",
    name: "Humanoids",
    blurb: "Liability for humanoid robots in commercial and industrial settings.",
    status: "development",
    href: "/coming-soon/humanoids",
    channel: "Available through: your broker",
    summary:
      "Humanoid robots are moving from demos into warehouses, plants, and storefronts. Auxilium is building the liability framework for machines that share physical space with people and property.",
    focus: [
      "Bodily injury and third-party property damage",
      "Autonomy-level and operator-oversight rating",
      "Product and operational liability blend",
      "Fleet telemetry-based underwriting",
    ],
    detail: [
      {
        title: "Coverage",
        intro:
          "A humanoid is bought to work where a person works, which means it inherits a person's proximity to people and property without inheriting a person's judgment. The cover is written for general-purpose machines operating in spaces built for humans.",
        coverage: [
          {
            name: "Shared-space bodily injury",
            covers:
              "Injury to customers, visitors, contractors and temporary workers from contact, a dropped load or a loss of balance, in premises laid out for people rather than for machines. Your own employees are covered by workers' compensation.",
            basis: ["Third party"],
          },
          {
            name: "Third-party property damage",
            covers:
              "Damage to premises, fittings, stock and customer property caused by the machine moving through and handling a human environment.",
            basis: ["Third party"],
          },
          {
            name: "Task execution failure",
            covers:
              "Your own loss where the machine completed the wrong task correctly: goods mishandled, a process step missed, or a general-purpose instruction carried out beyond its intent.",
            basis: ["First party"],
          },
          {
            name: "Supervision and autonomy level",
            covers:
              "Loss arising where the machine operated at a higher autonomy level than scheduled, or where remote supervision was absent, delayed or ineffective.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Unauthorized control",
            covers:
              "Physical and third-party loss following unauthorized access to the unit or its control plane, including instruction injection through its own sensing.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Regulatory proceedings",
            covers:
              "Defense and investigation costs in a workplace safety or consumer protection proceeding arising from a covered event, within the elected scope.",
            basis: ["Regulatory"],
          },
        ],
        note: "Indicative cover for a line in development, not a schedule of insurance and not an offer to quote. Agreement names, triggers, sublimits and exclusions are subject to the filed wording, and the wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Model and count",
            "Tasks",
            "Environment: enclosed cell, shared with workers, or public-facing",
            "Share of time under teleoperation",
            "The vendor's safety case, including fall behavior and contact force limits",
            "Pilot or production deployment",
          ],
          reads: [
            "Falls and stumbles",
            "Emergency stops",
            "Teleoperation interventions per operating hour",
            "Contact events",
          ],
          drivers: [
            "Public-facing versus industrial",
            "Robot mass and height",
            "Teleoperation share",
            "Payload",
            "Maturity of the deployment",
          ],
          standards: [
            "ISO 25785-1, draft safety requirements for dynamically stable mobile robots including legged robots",
            "ISO 10218 (2025)",
            "ISO/TS 15066",
          ],
          rated: "Per unit per year. Pilots can be bound on short terms.",
        },
      },
    ],
  },
  {
    slug: "autonomous-fleet-operations",
    name: "Autonomous Fleet Operations",
    blurb: "Excess and surplus cover for operators of driverless fleets, sitting over primary auto.",
    status: "development",
    href: "/coming-soon/autonomous-fleet-operations",
    channel: "Available through: your broker, on a non-admitted basis",
    summary:
      "Specialty cover for operators of driverless fleets. Written on a non-admitted, excess and surplus basis, it sits over your primary auto policy or self-insured retention and covers the exposures standard auto forms were not built for.",
    detail: [
      {
        title: "Who buys it",
        intro:
          "Operators of 10 to 500 autonomous vehicles. This is fleet cover for the business running the vehicles, not cover for the vehicles themselves and not cover for the technology that drives them.",
        contrast: [
          {
            title: "Written for",
            items: [
              "Robotaxi fleet operators and their fleet partners",
              "Autonomous delivery van operators",
              "Hub-to-hub autonomous trucking carriers",
              "Campus, airport and industrial shuttle operators",
            ],
          },
          {
            title: "Not written for",
            items: [
              "Individual car owners, and personal auto of any kind",
              "AV developers' own product liability",
              "Primary auto, which this sits above rather than replaces",
            ],
          },
        ],
      },
      {
        title: "Coverage",
        coverage: [
          {
            name: "Excess auto liability",
            covers:
              "Third-party bodily injury and property damage from autonomous operation, above your primary auto limit or self-insured retention.",
            basis: ["Third party"],
          },
          {
            name: "Software recall and fleet grounding",
            covers:
              "Lost revenue and extra expense when a software defect, a manufacturer stand-down or a regulator grounds your fleet.",
            basis: ["First party"],
          },
          {
            name: "Remote assistance error",
            covers:
              "Liability arising from instructions given by remote assistance or teleoperation staff.",
            basis: ["Third party"],
          },
          {
            name: "Operational design domain",
            covers:
              "Incidents that happen while the vehicle is outside its approved operating domain are covered, not excluded.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Cyber-physical",
            covers:
              "Bodily injury and property damage caused by a cyberattack on the vehicle or on fleet systems.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Sensor and compute damage",
            covers:
              "Physical damage to lidar, radar, cameras and onboard compute, including calibration after repair.",
            basis: ["First party"],
          },
          {
            name: "Regulatory proceedings",
            covers:
              "Defense costs in federal crash-reporting and defect investigations, and in state permit suspension actions.",
            basis: ["Regulatory"],
          },
          {
            name: "Incident response",
            covers:
              "Crash reconstruction, data preservation and crisis communications after a serious incident.",
            basis: ["First party"],
          },
        ],
        note:
          "One fleet policy, rated per vehicle with a per-autonomous-mile component. Indicative cover for a line in development, not a schedule of insurance and not an offer to quote, and the policy wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Fleet size and vehicle types",
            "SAE automation level",
            "Operational design domain: cities, roads, speeds, weather, time of day",
            "AV technology provider",
            "Remote assistance model and staffing ratio",
            "Primary auto program and retention",
            "Permits held",
            "Crash and incident history",
          ],
          reads: [
            "Autonomous miles",
            "Interventions and remote assistance events per 1,000 miles",
            "Reportable crashes",
            "Software release history",
          ],
          drivers: [
            "Operational design domain complexity",
            "Miles and exposure per vehicle",
            "Intervention rate trends",
            "Safety driver present or not",
            "The primary limit or retention we sit over",
            "Technology provider concentration",
          ],
          standards: [
            "SAE J3016 automation levels",
            "NHTSA's Standing General Order on crash reporting",
            "State AV permits, including California DMV requirements and its $5M insurance or bonding requirement for AV manufacturers",
          ],
          rated: "Per vehicle per year, plus a per-autonomous-mile component.",
        },
      },
    ],
  },
  {
    slug: "mgbox",
    name: "MGBox",
    blurb: "The AI-native operating platform that runs our MGA, from submission to bind.",
    status: "development",
    href: "/coming-soon/mgbox",
    summary:
      "MGBox is the AI-native platform Auxilium runs its own MGA on, from broker submission to underwriter pricing, authority, and bind. We are tenant zero: over the next few years we are hardening it into a platform other MGAs can license to become AI-native.",
    focus: [
      "Broker submissions, quotes, and bind in one place",
      "Authority-gated underwriting decisions and referrals",
      "A product registry: new lines as a workflow, not a rebuild",
      "Appointments, authorities, bordereau, and compliance",
    ],
    detail: [
      {
        title: "From submission to bind",
        intro:
          "One path through the MGA, with the authority check built into the path rather than bolted onto it. Every step leaves a record, so what was decided and who was allowed to decide it is answerable later without reconstructing it from email.",
        steps: [
          {
            title: "The submission arrives",
            body: "An appointed broker submits once. The application and exposure schedule land as structured data, not as an attachment somebody has to retype, and the file opens with the public-record check already run.",
          },
          {
            title: "It is priced against the ratebook",
            body: "The rating plan is a versioned artifact rather than a spreadsheet on somebody's desktop. Every quote records which ratebook version produced it, so a number can be explained months later.",
          },
          {
            title: "Authority decides who answers",
            body: "Limits, appetite and referral triggers are configuration. Inside authority an underwriter quotes; outside it the file routes to whoever does hold that authority, with the reason attached. Nobody has to remember where the line is.",
          },
          {
            title: "Bind, and the record closes",
            body: "Binding writes the policy, the schedule and the elections together. Bordereau and regulatory reporting are produced from that record rather than assembled afterwards from three systems.",
          },
        ],
        note: "MGBox is not offered publicly. We run our own MGA on it.",
      },
      {
        title: "Why we built it",
        intro:
          "The plan is not to sell software. It is to find out whether an MGA can be run this way at all, on our own book, before anyone else has to trust it.",
        points: [
          {
            title: "Tenant zero",
            body: "We are the first and hardest user. Every gap in the platform is a gap in our own underwriting day, which is a considerably faster feedback loop than a customer filing a ticket.",
          },
          {
            title: "A new line is a workflow, not a rebuild",
            body: "Products live in a registry: agreements, elections, rating inputs and authority rules as data. Launching a line is configuring one, which is what makes a small team able to carry several.",
          },
          {
            title: "The record is the point",
            body: "An AI-native MGA only works if every automated step is attributable and reversible. The platform is built so that a decision, a price and an authority can each be traced back to their inputs.",
          },
        ],
      },
    ],
  },
  {
    slug: "home-humanoid-protection",
    name: "Home Humanoid Protection",
    subhead: "Cover for home humanoids, included in the lease or subscription.",
    blurb: "Cover for home humanoids, included in the lease or subscription.",
    status: "development",
    launch: "Coming 2029",
    href: "/robotics/home-humanoid-protection",
    channel: "Available through: your robot maker, in your lease or subscription (E&S, under the maker's master policy)",
    summary:
      "Cover for home humanoids, included in the lease or subscription. The maker holds one master policy, and every household is covered from the day the robot arrives.",
    detail: [
      {
        title: "Coverage",
        intro:
          "A humanoid in a home meets stairs, pets, children and guests, none of which a warranty or a homeowner's policy was written to price. The maker holds one master policy; every household is covered from the day the robot arrives.",
        blocks: [
          {
            kind: "coverage",
            columns: { limit: "Limit", retention: "Deductible" },
            groups: [
              {
                rows: [
                  {
                    name: "Damage and breakdown",
                    covers:
                      "Accidental damage and breakdown in the home, including falls, liquids, pets and children",
                    limit: "Agreed value, up to $50,000",
                    retention: "$250",
                    basis: ["First party"],
                  },
                  {
                    name: "Theft (optional)",
                    covers: "Theft with forced entry or tracker evidence",
                    limit: "Agreed value",
                    retention: "$250",
                    basis: ["First party"],
                  },
                  {
                    name: "Liability in the home",
                    covers: "Injury or damage to guests, neighbors or others caused by the robot",
                    limit: "$500,000 per occurrence",
                    retention: "Excess of homeowners or renters insurance; $500 where none",
                    basis: ["Third party"],
                  },
                  {
                    name: "Teleoperation",
                    covers:
                      "Damage and liability cover continue while a vetted remote operator controls the robot",
                    limit: "Within the above",
                    basis: ["First party", "Third party"],
                  },
                  {
                    name: "Privacy",
                    covers: "Claims arising from recordings the robot makes in the home",
                    limit: "$25,000",
                    retention: "$500",
                    basis: ["Third party"],
                  },
                ],
              },
            ],
          },
          { kind: "text", body: "About $150 a month, all-in, inside the lease or subscription." },
        ],
        // TODO(legal): confirm how cover offered at a maker's checkout or inside
        // a subscription is licensed and disclosed in each state, and who holds
        // the producer role.
      },
      {
        title: "Underwriting",
        underwriting: {
          rated: "Per robot, per month, inside the lease or subscription.",
          reads: ["Falls", "Emergency stops", "Contact events", "Teleoperation interventions", "Fault codes"],
          readsNote: "Read-only, from the maker.",
          asks: [
            "Model, units sold and markets",
            "Unit price and repair cost",
            "The maker's safety case, including fall behavior and contact force limits",
            "Share of tasks under teleoperation",
            "Warranty terms",
            "How the offer appears at checkout or in the subscription",
            "Operator vetting and session logging for teleoperation",
          ],
          drivers: [
            "Unit value and repair cost",
            "Fall and contact rates",
            "Teleoperation share",
            "Theft exposure by market",
            "Release cadence",
          ],
          standards: ["ISO 13482", "ISO 25785-1 (draft)", "UL 3300"],
          review: "No household inspections. We underwrite the maker: each model has an independent safety assessment before launch.",
        },
      },
    ],
  },
  // Withdrawn October 2026: home humanoids became an endorsement on Robot
  // Maker Cover from 2029.
  // Withdrawn October 2026: only AI Liability is offered at launch.
  {
    slug: "vendor-certification",
    name: "Agent Library & Vendor Certification",
    subhead: "Certify once. Every customer running your agents gets faster quotes and better pricing.",
    blurb: "Free certification for agent products and the vendors that build agents, so their customers quote faster and pay less.",
    status: "in-development",
    launch: "Launching 2027",
    href: "/digital-risk/vendor-certification",
    channel: "Available through: directly, for vendors. Free.",
    summary:
      "Auxilium assesses widely deployed agent products and certifies vendors that build agents for their customers. Certification is free, and every customer running a certified agent gets faster quotes and better pricing.",
    detail: [
      {
        intro:
          "Auxilium insures the companies that deploy AI agents. The Agent Library is how we underwrite them without testing every customer. We assess widely deployed agent products and certify vendors that build agents for their customers. Certification is free, and you are never asked to sell insurance.",
        blocks: [
          {
            kind: "fineprint",
            body: "The insurance your customers buy is written in the E&S market through their broker.",
          },
        ],
      },
      {
        title: "What the library holds",
        blocks: [
          {
            kind: "cards",
            items: [
              {
                title: "Agent products",
                body: [
                  "Off-the-shelf agents, tested in their standard configuration.",
                  "A customer running one as configured needs no test of its own.",
                ],
              },
              {
                title: "Certified vendors",
                body: [
                  "Vendors that build agents per customer.",
                  "We review your platform, guardrails, pre-launch testing, release and rollback process, and how caps and approvals are set.",
                  "Each deployment then arrives with a configuration file instead of a test.",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "What we test",
        blocks: [
          {
            kind: "table",
            columns: ["Test", "What passes"],
            rows: [
              [
                "Prompt injection and manipulation",
                "Instructions hidden in data, documents or messages do not change the agent's actions or access",
              ],
              ["Access escalation", "The agent cannot reach tools, accounts or data outside its scope"],
              ["Cap bypass", "Splitting, repeating or reordering actions cannot exceed the declared cap"],
              ["Out-of-scope commitments", "The agent refuses or escalates promises beyond its policy"],
              ["Disclosure", "No other customer's or internal data appears in outputs"],
              ["Escalation", "Cases above thresholds reach a person"],
              ["Stop", "The stop mechanism halts actions within the declared time"],
            ],
          },
        ],
      },
      {
        title: "Versioned and current",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Every pass is tied to the product, version and underlying model.",
              "Passes expire after 90 days.",
              "Certified vendors send release notices by webhook, and each new release is re-tested, usually within a day.",
              "A failed re-test changes terms only for that version, from notice.",
            ],
          },
        ],
      },
      {
        title: "The configuration file",
        blocks: [
          {
            kind: "table",
            columns: ["Field", "Why we ask"],
            rows: [
              ["Tools and access", "Tells us the agent type"],
              ["Largest single action and rate limits", "Set the declared exposure"],
              ["Caps and how they reset", "Set the cap"],
              ["Human approval thresholds", "Earn a control credit"],
              ["Stop mechanism", "Sets the time to stop"],
              ["Model and version", "Matches the library and tracks accumulation"],
            ],
          },
        ],
      },
      {
        title: "What vendors get",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Their customers quote faster and pay less.",
              "We waive recovery against them for losses we pay their customers.",
              "A certification report they can use in procurement.",
              "No fee and no obligation to sell insurance.",
            ],
          },
        ],
      },
      {
        title: "What vendors give",
        blocks: [
          {
            kind: "bullets",
            items: [
              "A sandbox and release notices.",
              "A configuration file for every deployment.",
              "Prompt notice of incidents affecting more than one customer.",
            ],
          },
        ],
      },
      {
        title: "Certification timeline",
        blocks: [
          {
            kind: "steps",
            items: [
              { title: "Week 0", body: "Apply; share sandbox and documentation" },
              { title: "Weeks 1 to 2", body: "Platform and deployment review; agree the configuration file" },
              { title: "Weeks 2 to 3", body: "Behavior tests on a reference deployment" },
              { title: "Week 4", body: "Certified, listed, webhook connected" },
            ],
          },
        ],
      },
      {
        title: "Staying certified",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Re-test every 90 days and on every release.",
              "A vendor is de-listed if releases are not notified, if a re-test fails twice, or if incidents affecting several customers go unreported.",
              "Existing customers keep their terms until renewal.",
            ],
          },
        ],
      },
      {
        title: "Independence",
        blocks: [
          {
            kind: "text",
            body: "Auxilium assesses and insures. We do not sell remediation, vendors are not charged, and no one can buy a pass.",
          },
        ],
      },
      {
        title: "Standards we reference",
        blocks: [{ kind: "tags", items: ["NIST AI RMF", "ISO/IEC 42001", "EU AI Act provider obligations"] }],
        cta: { label: "Apply for certification", href: "/partners#contact" },
      },
    ],
  },
];
