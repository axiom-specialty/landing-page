/**
 * How Auxilium measures AI risk, as one figure.
 *
 * NOT CURRENTLY RENDERED. Pulled from the AI Liability page because it showed
 * the rating method in more detail than we want competitors to have. Kept here,
 * not deleted, so it can be restored or reused behind a login.
 *
 * The chain from AXM-UW-001 sections 4.1 to 4.3: the action gate opens a
 * workflow schedule, the schedule yields a magnitude per action, a rate of
 * actions and a time to containment, and their product is the exposure inside
 * the containment window. Coverage modules value that into a gross scenario,
 * and supported recoveries bring it to a net figure.
 *
 * Deliberately not a score. The point of the drawing is that every quantity is
 * measured from the applicant's own declared operating facts.
 *
 * House style: no em dashes.
 */

const ink = "hsl(var(--foreground))";
const muted = "hsl(var(--muted-foreground))";
const line = "hsl(var(--border))";
const brand = "hsl(var(--brand-mid))";
const deep = "hsl(var(--brand-deep))";
const card = "hsl(var(--card))";

function Box({
  x, y, w, h, accent = false,
}: { x: number; y: number; w: number; h: number; accent?: boolean }) {
  return (
    <rect
      x={x} y={y} width={w} height={h} rx="3"
      fill={accent ? "hsl(var(--brand-light) / 0.28)" : card}
      stroke={accent ? brand : line}
      strokeWidth={accent ? 1.4 : 1}
    />
  );
}

export function RiskChain() {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card p-6 sm:p-8">
      <svg
        viewBox="0 0 860 566"
        className="mx-auto block h-auto w-full min-w-[680px]"
        role="img"
        aria-label="How Auxilium measures AI risk: the action gate opens a workflow schedule, which yields magnitude per action, actions per unit of time, and time to containment. Their product is the exposure inside the containment window, valued into a gross loss scenario and then a net figure after supported recoveries."
      >
        <defs>
          <marker id="rc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill={muted} />
          </marker>
        </defs>

        {/* the gate */}
        <Box x={24} y={18} w={430} h={86} accent />
        <text x={40} y={40} fontSize="10.5" letterSpacing="1.1" fill={deep} fontFamily="ui-monospace, monospace">THE ACTION GATE</text>
        <text x={40} y={60} fontSize="13" fill={ink}>Can it move money, change records, disclose or publish,</text>
        <text x={40} y={78} fontSize="13" fill={ink}>decide consequentially, spend metered resources, or</text>
        <text x={40} y={96} fontSize="13" fill={ink}>control equipment?</text>

        <path d="M239,104 L239,132" stroke={muted} strokeWidth="1.2" fill="none" markerEnd="url(#rc-arrow)" />

        {/* workflow schedule */}
        <Box x={24} y={136} w={430} h={68} />
        <text x={40} y={158} fontSize="10.5" letterSpacing="1.1" fill={deep} fontFamily="ui-monospace, monospace">THE WORKFLOW SCHEDULE</text>
        <text x={40} y={178} fontSize="13" fill={ink}>What it can reach, where approval sits, how it is detected</text>
        <text x={40} y={196} fontSize="13" fill={ink}>and stopped, how you recover, what it shares.</text>

        <path d="M239,204 L239,224 L120,224 L120,248" stroke={muted} strokeWidth="1.2" fill="none" markerEnd="url(#rc-arrow)" />
        <path d="M239,204 L239,248" stroke={muted} strokeWidth="1.2" fill="none" markerEnd="url(#rc-arrow)" />
        <path d="M239,204 L239,224 L358,224 L358,248" stroke={muted} strokeWidth="1.2" fill="none" markerEnd="url(#rc-arrow)" />

        {/* the three measures */}
        <Box x={24} y={252} w={192} h={72} />
        <text x={120} y={278} textAnchor="middle" fontSize="19" fontStyle="italic" fill={ink} fontFamily="Georgia, serif">m</text>
        <text x={120} y={298} textAnchor="middle" fontSize="11.5" fill={muted}>magnitude of</text>
        <text x={120} y={313} textAnchor="middle" fontSize="11.5" fill={muted}>one action</text>

        <Box x={262} y={252} w={192} h={72} />
        <text x={358} y={278} textAnchor="middle" fontSize="19" fontStyle="italic" fill={ink} fontFamily="Georgia, serif">q</text>
        <text x={358} y={298} textAnchor="middle" fontSize="11.5" fill={muted}>actions per</text>
        <text x={358} y={313} textAnchor="middle" fontSize="11.5" fill={muted}>unit of time</text>

        <Box x={500} y={252} w={336} h={72} accent />
        <text x={668} y={278} textAnchor="middle" fontSize="15" fill={ink} fontFamily="Georgia, serif">
          <tspan fontStyle="italic">T</tspan> = time to detect + time to stop
        </text>
        <text x={668} y={298} textAnchor="middle" fontSize="11.5" fill={muted}>unattended hours, weekends, queues already</text>
        <text x={668} y={313} textAnchor="middle" fontSize="11.5" fill={muted}>committed and parallel agents all sit inside T</text>

        <path d="M120,324 L120,344 L239,344 L239,368" stroke={muted} strokeWidth="1.2" fill="none" markerEnd="url(#rc-arrow)" />
        <path d="M358,324 L358,344 L239,344" stroke={muted} strokeWidth="1.2" fill="none" />
        <path d="M668,324 L668,344 L239,344" stroke={muted} strokeWidth="1.2" fill="none" />

        {/* exposure */}
        <Box x={24} y={372} w={430} h={70} accent />
        <text x={239} y={402} textAnchor="middle" fontSize="23" fill={ink} fontFamily="Georgia, serif">
          <tspan fontStyle="italic">E</tspan> = <tspan fontStyle="italic">m</tspan> × <tspan fontStyle="italic">q</tspan> × <tspan fontStyle="italic">T</tspan>
        </text>
        <text x={239} y={426} textAnchor="middle" fontSize="12" fill={muted}>the exposure inside the containment window</text>

        {/* cap note */}
        <rect x={500} y={372} width={336} height={70} rx="3" fill="none" stroke={line} strokeWidth="1" strokeDasharray="3 3" />
        <text x={518} y={394} fontSize="10.5" letterSpacing="1" fill={muted} fontFamily="ui-monospace, monospace">THE CAP ONLY COUNTS IF IT HOLDS</text>
        <text x={518} y={412} fontSize="12" fill={muted}>A limit that resets faster than your stopping</text>
        <text x={518} y={429} fontSize="12" fill={muted}>time does not bound the event.</text>
        <path d="M500,407 L462,407" stroke={muted} strokeWidth="1.2" fill="none" markerEnd="url(#rc-arrow)" />

        <path d="M239,442 L239,466" stroke={muted} strokeWidth="1.2" fill="none" markerEnd="url(#rc-arrow)" />

        {/* G and N */}
        <Box x={24} y={470} w={206} h={76} />
        <text x={127} y={496} textAnchor="middle" fontSize="18" fontStyle="italic" fill={ink} fontFamily="Georgia, serif">G</text>
        <text x={127} y={516} textAnchor="middle" fontSize="11.5" fill={muted}>the gross loss scenario,</text>
        <text x={127} y={531} textAnchor="middle" fontSize="11.5" fill={muted}>each consequence counted once</text>

        <path d="M230,508 L244,508" stroke={muted} strokeWidth="1.2" fill="none" markerEnd="url(#rc-arrow)" />

        <Box x={248} y={470} w={206} h={76} />
        <text x={351} y={496} textAnchor="middle" fontSize="18" fontStyle="italic" fill={ink} fontFamily="Georgia, serif">N</text>
        <text x={351} y={516} textAnchor="middle" fontSize="11.5" fill={muted}>net of recoveries we can</text>
        <text x={351} y={531} textAnchor="middle" fontSize="11.5" fill={muted}>actually support</text>

        <Box x={500} y={470} w={336} h={76} />
        <text x={518} y={492} fontSize="10.5" letterSpacing="1" fill={deep} fontFamily="ui-monospace, monospace">WHAT WE ASK YOU FOR</text>
        <text x={518} y={511} fontSize="12" fill={muted}>Only where a number is unresolved and knowing it</text>
        <text x={518} y={528} fontSize="12" fill={muted}>would change the answer. Never a routine document list.</text>
      </svg>
    </div>
  );
}
