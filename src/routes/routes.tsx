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
        {/* Promoted out of /coming-soon/ when they were renamed. ComingSoon
            renders any product carrying `detail`, so these need no new page. */}
        <Route path="/products/embedded-agentic-risk" element={<ComingSoon slug="embedded-agentic-risk" />} />
        <Route path="/coming-soon/:slug" element={<ComingSoon />} />

        {/* Permanent moves. Kept so old links, and anything already indexed,
            land on the renamed page rather than a 404. */}
        <Route
          path="/coming-soon/ai-liability-developers"
          element={<Navigate to="/products/embedded-agentic-risk" replace />}
        />
        <Route
          path="/coming-soon/autonomous-vehicles"
          element={<Navigate to="/coming-soon/autonomous-fleet-operations" replace />}
        />
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
