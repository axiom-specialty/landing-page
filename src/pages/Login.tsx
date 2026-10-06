import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuxiliumLine } from "@/components/common/AuxiliumLine";
import { HeroGrid } from "@/components/common/HeroGrid";

/** Where Log In leads until the portal opens. Set like the 404 page. */
export default function Login() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden gradient-navy text-ink">
      <HeroGrid className="opacity-50" />
      <div className="container-tight relative px-6 py-32 text-center">
        <p className="data-label text-signal">Log In</p>
        <h1 className="mt-5 font-serif text-5xl font-semibold text-ink md:text-7xl">Coming Soon</h1>
        <AuxiliumLine className="mx-auto my-8 w-24 text-ink/50" />
        <p className="mx-auto max-w-md text-ink/65">For brokers, underwriters, carriers, and policyholders.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="hero">
            <Link to="/">Back to home</Link>
          </Button>
          <Button asChild variant="heroOutline">
            <Link to="/partners#contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
