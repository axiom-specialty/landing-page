import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly, including name, work email, company name, job title, and firm size when you request early access or contact us. When you use the Axiom platform, we collect information about your organization's AI tool usage via workspace integrations (Google Workspace, Microsoft 365) that you explicitly authorize. We do not collect personal employee data — only aggregated AI usage telemetry at the organizational level.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to: provide and improve the Axiom platform; calculate your organization's AI governance score; generate insurance pricing estimates; respond to inquiries; and send product updates you've opted into. We do not sell your data to third parties.",
  },
  {
    title: "Data Security",
    body: "We implement industry-standard security measures including encryption in transit and at rest. Your data is stored securely via Supabase infrastructure. Workspace integration data is processed with read-only OAuth permissions and is never shared with third parties.",
  },
  {
    title: "Third-Party Services",
    body: "We use Formspree to process contact form submissions, Supabase for data storage, and Vercel for hosting. Each operates under their own privacy policies.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your data at any time by contacting us at contact@axiomspecialty.com.",
  },
  {
    title: "Contact",
    body: "For privacy-related questions, contact us at contact@axiomspecialty.com.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-background section-padding container-narrow pt-24">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 2026
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Axiom Specialty Inc. (&apos;Axiom&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;) operates axiomspecialty.com and the Axiom platform. This Privacy Policy explains how we collect, use, and protect your information.
          </p>
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-serif font-bold text-foreground mb-3">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
