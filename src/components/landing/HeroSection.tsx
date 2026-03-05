import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield, BarChart2, DollarSign } from "lucide-react";
import heroBg from "@/assets/cover-02.webp";

const audienceHooks = [
  {
    icon: Shield,
    bold: "For General Counsel",
    text: "Berkley, Hamilton, and others have introduced absolute AI exclusions. Your E&O and D&O policies may already bar coverage for any claim arising from AI use — even when the AI didn't cause the harm. An employee's failure to verify AI output is a human negligence claim. It's still excluded.",
  },
  {
    icon: BarChart2,
    bold: "For Risk & Compliance",
    text: "Shadow AI usage, unverified outputs in client deliverables, and AI-assisted decisions are live exposures today. Axiom monitors employee AI behavior across your workspace and surfaces the governance gaps before a claim does.",
  },
  {
    icon: DollarSign,
    bold: "For the CFO",
    text: "Your governance posture determines your premium. Firms that operate with documented oversight protocols, human verification workflows, and NIST RMF alignment qualify for materially lower rates. Axiom builds and measures that posture continuously.",
  },
];

const roleOptions = [
  "Managing Partner / CEO",
  "Risk & Compliance",
  "CFO / Finance",
  "Legal",
  "Other",
];

const firmSizeOptions = [
  "1–25 employees",
  "26–100",
  "101–500",
  "500+",
];

const HeroSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [firmSize, setFirmSize] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenWaitlist = () => {
      setIsWaitlistOpen(true);
    };
    window.addEventListener("openWaitlist", handleOpenWaitlist);
    return () => window.removeEventListener("openWaitlist", handleOpenWaitlist);
  }, []);

  const handleRequestAccess = () => {
    setIsWaitlistOpen(true);
  };

  const handleSeePlatform = () => {
    const platformSection = document.getElementById("platform");
    if (platformSection) {
      platformSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmitEarlyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("https://formspree.io/f/xwvreeao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          company,
          role: role || undefined,
          firmSize: firmSize || undefined,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFullName("");
        setEmail("");
        setCompany("");
        setRole("");
        setFirmSize("");
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center gradient-navy">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 container-narrow section-padding pt-32">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold leading-[1.15] mb-6">
              <span className="text-cream drop-shadow-[0_3px_12px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                AI is already in your workflows. <br></br> But are you insured?
              </span>
            </h1>

            <p className="text-lg md:text-xl text-cream/80 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] [text-shadow:_0_1px_4px_rgba(0,0,0,0.7)] max-w-2xl mb-12">
              Axiom is the first platform purpose-built for mid-market and enterprise firms that need to govern how their employees use AI — and obtain affirmative insurance coverage for the human oversight failures that existing policies now explicitly exclude.
            </p>

            {/* Audience hooks - horizontal row of cards, stack on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {audienceHooks.map((hook, index) => (
                <div
                  key={index}
                  className="bg-cream/10 backdrop-blur-md border border-cream/20 rounded-xl p-5 hover:bg-cream/15 transition-colors"
                >
                  <hook.icon className="w-8 h-8 text-gold mb-3" />
                  <p className="font-serif font-bold text-cream mb-2 text-base">
                    {hook.bold}
                  </p>
                  <p className="text-cream/90 text-sm leading-relaxed">
                    {hook.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={handleRequestAccess}
                className="shadow-xl"
              >
                Request Early Access
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={handleSeePlatform}
                className="!bg-cream/30 backdrop-blur-md !border-cream/40 hover:!bg-cream/40 shadow-lg text-cream"
              >
                See the Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request Early Access</DialogTitle>
            <DialogDescription>
              Be among the first to get access to Axiom Specialty — AI risk intelligence and insurance for professional services firms.
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <div className="py-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-lg font-semibold text-foreground mb-2">
                Thank you!
              </p>
              <p className="text-sm text-muted-foreground">
                We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmitEarlyAccess}
              className="space-y-4 mt-4"
            >
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Jane Smith"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@firm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Firm"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roleOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Firm Size</Label>
                <Select value={firmSize} onValueChange={setFirmSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select firm size" />
                  </SelectTrigger>
                  <SelectContent>
                    {firmSizeOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {submitError && (
                <p className="text-sm text-destructive">{submitError}</p>
              )}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={submitting}
              >
                {submitting ? "Submitting…" : "Request Early Access"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroSection;
