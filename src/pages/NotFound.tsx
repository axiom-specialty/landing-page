import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AxiomLine } from "@/components/common/AxiomLine";
import { HeroGrid } from "@/components/common/HeroGrid";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden gradient-navy text-ink">
      <HeroGrid className="opacity-50" />
      <div className="container-tight relative px-6 py-32 text-center">
        <p className="font-mono-num font-serif text-7xl font-semibold text-ink md:text-8xl">404</p>
        <AxiomLine className="mx-auto my-8 w-24 text-ink/50" />
        <h1 className="font-serif text-2xl font-semibold">This line doesn't exist, yet.</h1>
        <p className="mx-auto mt-3 max-w-md text-ink/65">
          The page you're looking for isn't here. It may have moved, or it's part of a product still on the roadmap.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="hero">
            <Link to="/">Back to home</Link>
          </Button>
          <Button asChild variant="heroOutline">
            <Link to="/products/ai-liability">See AI Liability</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
