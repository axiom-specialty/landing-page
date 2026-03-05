import { forwardRef } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-020-b.png";

const Footer = forwardRef<HTMLElement>((props, ref) => {
  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer ref={ref} className="bg-navy-deep border-t border-cream/10 m-0">
      <div className="container-narrow section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Axiom" className="h-8 w-auto" style={{ minWidth: '120px', width: 'auto' }} />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5">
            <button
              onClick={handleNavClick("platform")}
              className="text-cream/60 hover:text-cream transition-colors text-sm cursor-pointer"
            >
              Platform
            </button>
            <span className="text-cream/30 text-lg select-none">·</span>
            <button
              onClick={handleNavClick("about")}
              className="text-cream/60 hover:text-cream transition-colors text-sm cursor-pointer"
            >
              About
            </button>
            <span className="text-cream/30 text-lg select-none">·</span>
            <button
              onClick={handleNavClick("coverage")}
              className="text-cream/60 hover:text-cream transition-colors text-sm cursor-pointer"
            >
              Coverage
            </button>
            <span className="text-cream/30 text-lg select-none">·</span>
            <a
              href="mailto:contact@axiomspecialty.com"
              className="text-cream/60 hover:text-cream transition-colors text-sm"
            >
              Contact Us
            </a>
            <span className="text-cream/30 text-lg select-none">·</span>
            <Link
              to="/privacy"
              className="text-cream/60 hover:text-cream transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-cream/30 text-lg select-none">·</span>
            <Link
              to="/terms"
              className="text-cream/60 hover:text-cream transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </nav>

          {/* Copyright */}
          
        </div>

        <div className="mt-8 pt-8">
          <p className="text-cream/40 text-sm">
            © 2026 Axiom Specialty Inc. All rights reserved.
          </p>
        </div>
          
        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-cream/10">
          <p className="text-cream/30 text-xs text-center max-w-4xl mx-auto">
            Coverage is subject to underwriting approval and policy terms. This website provides general information only and does not constitute an offer of insurance. 
            All coverage and limits are subject to the terms, conditions, and exclusions of the applicable policy. Axiom Insurance is a managing general agent. 
            Insurance products may be underwritten by various carriers and are subject to their underwriting guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
