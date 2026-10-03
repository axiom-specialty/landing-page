import { Routes, Route, Navigate } from "react-router-dom";
import { SiteLayout } from "@/layouts/SiteLayout";
import Home from "@/pages/Home";
import AILiability from "@/pages/products/AILiability";
// Hidden until launch, restore alongside its product entry:
// import AgenticEO from "@/pages/products/AgenticEO";
import ComingSoon from "@/pages/ComingSoon";
import Coverages from "@/pages/Coverages";
import Insights from "@/pages/insights/Insights";
import InsightPost from "@/pages/insights/InsightPost";
import About from "@/pages/About";
import Partners from "@/pages/Partners";
import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";
import NotFound from "@/pages/NotFound";

/** Retired product URLs and where each one now lands. Mirrored by the
 * `reclaim` entries in seo.json, which give the same moves a real page and a
 * canonical for crawlers. */
const MOVED: Record<string, string> = {
  "/products/embedded-agentic-risk": "/products/ai-vendor-certification",
  "/coming-soon/ai-liability-developers": "/products/ai-vendor-certification",
  "/coming-soon/warehouse-robotics": "/coming-soon/fleet-protection",
  "/coming-soon/manufacturing-autonomous-machinery": "/coming-soon/fleet-protection",
  "/coming-soon/autonomous-machinery-failure": "/coming-soon/fleet-protection",
  "/coming-soon/delivery-robotics": "/coming-soon/fleet-protection",
  "/coming-soon/humanoids": "/coming-soon/fleet-protection",
  "/coming-soon/autonomous-fleet-operations": "/coverages",
  "/coming-soon/autonomous-vehicles": "/coverages",
};

/** Application route table. All pages share the SiteLayout (header/footer/waitlist). */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/coverages" element={<Coverages />} />
        <Route path="/products/ai-liability" element={<AILiability />} />
        {/* Hidden until launch, restore alongside its product entry:
        <Route path="/agentic-eo" element={<AgenticEO />} /> */}
        {/* Promoted out of /coming-soon/. ComingSoon renders any product
            carrying `detail`, so a promoted line needs no page of its own. */}
        <Route path="/products/ai-vendor-certification" element={<ComingSoon slug="ai-vendor-certification" />} />
        <Route path="/coming-soon/:slug" element={<ComingSoon />} />

        {/* Permanent moves from renamed or withdrawn lines, so old links and
            anything already indexed land somewhere relevant, not on a 404. */}
        {Object.entries(MOVED).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Explicit 404 target used by internal <Navigate> redirects */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
