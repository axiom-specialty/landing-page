import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { applySeo } from "@/lib/seo";

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
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/**
 * Keeps document title, description, canonical, and OG/Twitter tags in sync with
 * the current route on client navigation (the prerendered HTML sets them for the
 * initial load and non-JS crawlers). Also normalizes a trailing slash to the
 * canonical no-slash path so prerendered folder URLs match the router.
 */
function SeoManager() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname.length > 1 && pathname.endsWith("/")) {
      navigate(pathname.replace(/\/+$/, "") + search + hash, { replace: true });
      return;
    }
    applySeo(pathname);
  }, [pathname, search, hash, navigate]);
  return null;
}

export function SiteLayout() {
  return (
    <>
      <ScrollManager />
      <SeoManager />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
