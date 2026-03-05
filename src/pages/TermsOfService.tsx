import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    title: "Use of Platform",
    body: "The Axiom platform is intended for use by authorized representatives of business entities. You agree to provide accurate information and to use the platform only for lawful purposes.",
  },
  {
    title: "No Insurance Binding",
    body: "Use of the Axiom platform, including receiving a governance score or premium estimate, does not constitute a binding insurance policy. Coverage is subject to underwriting approval, policy terms, and execution of a formal policy agreement with an authorized carrier.",
  },
  {
    title: "Intellectual Property",
    body: "All platform content, scoring methodology, and software are the intellectual property of Axiom Specialty Inc. You may not reproduce, distribute, or create derivative works without written permission.",
  },
  {
    title: "Limitation of Liability",
    body: "Axiom Specialty Inc. is not liable for any indirect, incidental, or consequential damages arising from use of the platform or reliance on governance scores or premium estimates.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the State of Delaware, United States.",
  },
  {
    title: "Contact",
    body: "For questions about these terms, contact us at contact@axiomspecialty.com.",
  },
];

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-background section-padding container-narrow pt-24">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 2026
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            These Terms of Service govern your use of axiomspecialty.com and the Axiom Specialty platform. By accessing our platform, you agree to these terms.
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

export default TermsOfService;
