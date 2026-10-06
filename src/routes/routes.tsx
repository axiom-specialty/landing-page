import { Routes, Route, Navigate } from "react-router-dom";
import { SiteLayout } from "@/layouts/SiteLayout";
import Home from "@/pages/Home";
import AILiability from "@/pages/products/AILiability";
// Hidden until launch, restore alongside its product entry:
// import AgenticEO from "@/pages/products/AgenticEO";
import ProductPage from "@/pages/ProductPage";
import Coverages from "@/pages/Coverages";
import Insights from "@/pages/insights/Insights";
import InsightPost from "@/pages/insights/InsightPost";
import About from "@/pages/About";
import Partners from "@/pages/Partners";
import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";

/** Every product URL that has ever been live, and where it lands now.
 * Mirrored by the `reclaim` entries in seo.json, which give the same moves a
 * real page and a canonical for crawlers. */
const MOVED: Record<string, string> = {
  // Before products moved under their category.
  "/products/ai-liability": "/digital-risk/ai-liability",
  "/coming-soon/auxcontrol": "/software/auxcontrol",
  // Lines that were replaced.
  "/products/embedded-agentic-risk": "/digital-risk/ai-liability",
  "/coming-soon/ai-liability-developers": "/digital-risk/ai-liability",
  "/digital-risk/agentic-certification-coverage": "/digital-risk/ai-liability",
  "/digital-risk/vendor-certification": "/digital-risk/ai-liability",
  "/robotics/automaton-fleet-protection": "/robotics/robotic-protection",
  "/robotics/robot-maker-liability": "/robotics/robot-maker-coverage",
  "/robotics/home-humanoid-protection": "/robotics/robot-maker-coverage",
  // Unpublished insights; the current article covers the same ground.
  "/insights/no-policy-you-own-responds": "/insights/ai-liability-deserves-its-own-line",
  "/insights/the-oversight-gap": "/insights/ai-liability-deserves-its-own-line",
  "/insights/underwriting-ai-liability": "/insights/ai-liability-deserves-its-own-line",
  "/coming-soon/warehouse-robotics": "/robotics/robotic-protection",
  "/coming-soon/manufacturing-autonomous-machinery": "/robotics/robotic-protection",
  "/coming-soon/autonomous-machinery-failure": "/robotics/robotic-protection",
  "/coming-soon/delivery-robotics": "/robotics/robotic-protection",
  "/coming-soon/humanoids": "/robotics/robotic-protection",
  "/coming-soon/autonomous-fleet-operations": "/coverages",
  "/coming-soon/autonomous-vehicles": "/coverages",
  // A category on its own has no page; its products are listed together.
  "/digital-risk": "/coverages",
  "/robotics": "/coverages",
  "/software": "/coverages",
};

/** Application route table. All pages share the SiteLayout (header/footer/waitlist). */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/coverages" element={<Coverages />} />
        {/* Products live at /<category>/<slug>. AI Liability has a page of its
            own; every other product page is rendered from its content. */}
        <Route path="/digital-risk/ai-liability" element={<AILiability />} />
        {/* Hidden until launch, restore alongside its product entry:
        <Route path="/agentic-eo" element={<AgenticEO />} /> */}
        <Route path="/digital-risk/:slug" element={<ProductPage />} />
        <Route path="/robotics/:slug" element={<ProductPage />} />
        <Route path="/software/:slug" element={<ProductPage />} />

        {/* Permanent moves, so old links and anything already indexed land
            somewhere relevant rather than on a 404. */}
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
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
