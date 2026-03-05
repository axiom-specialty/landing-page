import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-020-b.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRequestEarlyAccess = () => {
    window.dispatchEvent(new CustomEvent("openWaitlist"));
  };

  const handleContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("final-cta");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const section = document.getElementById("final-cta");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerOffset = 80;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 150);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-cream/10">
      <div className="container-narrow section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Axiom" className="h-10 w-auto" />
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={handleNavClick("platform")}
              className="text-cream/80 hover:text-cream transition-colors text-sm font-medium cursor-pointer"
            >
              Platform
            </button>
            <button 
              onClick={handleNavClick("coverage")} 
              className="text-cream/80 hover:text-cream transition-colors text-sm font-medium cursor-pointer"
            >
              Coverage
            </button>
            <button 
              onClick={handleNavClick("how-it-works")} 
              className="text-cream/80 hover:text-cream transition-colors text-sm font-medium cursor-pointer"
            >
              How It Works
            </button>
            <button 
              onClick={handleNavClick("about")} 
              className="text-cream/80 hover:text-cream transition-colors text-sm font-medium cursor-pointer"
            >
              About
            </button>
            <Link to="/case-studies" className="text-cream/80 hover:text-cream transition-colors text-sm font-medium">
              Case Studies
            </Link>
            {/* <Link to="/workshops" className="text-cream/80 hover:text-cream transition-colors text-sm font-medium">
              Workshops
            </Link> */}
          </nav>

          {/* CTAs - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="heroOutline" size="sm" onClick={handleContact}>
              Contact
            </Button>
            <Button variant="hero" size="sm" onClick={handleRequestEarlyAccess}>
              Request Early Access
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-cream/80 hover:text-cream"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-cream/10 shadow-lg">
          <nav className="container-narrow section-padding py-6 flex flex-col gap-4">
            <button
              onClick={handleNavClick("platform")}
              className="text-left text-cream/80 hover:text-cream transition-colors text-sm font-medium py-2"
            >
              Platform
            </button>
            <button
              onClick={handleNavClick("coverage")}
              className="text-left text-cream/80 hover:text-cream transition-colors text-sm font-medium py-2"
            >
              Coverage
            </button>
            <button
              onClick={handleNavClick("how-it-works")}
              className="text-left text-cream/80 hover:text-cream transition-colors text-sm font-medium py-2"
            >
              How It Works
            </button>
            <button
              onClick={handleNavClick("about")}
              className="text-left text-cream/80 hover:text-cream transition-colors text-sm font-medium py-2"
            >
              About
            </button>
            <Link
              to="/case-studies"
              className="text-cream/80 hover:text-cream transition-colors text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <div className="pt-4 mt-2 border-t border-cream/10">
              <Button
                variant="hero"
                size="sm"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleRequestEarlyAccess();
                }}
              >
                Request Early Access
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
