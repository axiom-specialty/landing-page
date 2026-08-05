import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WaitlistProvider } from "@/features/waitlist/WaitlistProvider";

/**
 * Handles scroll behavior across route changes: jump to top on a new path, or
 * smooth-scroll to an in-page anchor when the URL carries a hash.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        // Delay so the target section has mounted.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function SiteLayout() {
  return (
    <WaitlistProvider>
      <ScrollManager />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </WaitlistProvider>
  );
}
