import { useState } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvreeao";

interface PortalFormProps {
  /** Identifies which portal the submission came from. */
  portal: string;
  /** Direct email shown as a fallback. */
  toEmail: string;
  orgLabel?: string;
  showOrg?: boolean;
  cta?: string;
}

/**
 * Reusable inquiry form for the Partners portals. Posts to Formspree with a
 * `portal` tag and a subject so submissions are distinguishable, and always
 * surfaces the direct email address as a fallback.
 */
export function PortalForm({
  portal,
  toEmail,
  orgLabel = "Organization",
  showOrg = true,
  cta = "Send",
}: PortalFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const id = portal.toLowerCase().replace(/\s+/g, "-");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    data.set("portal", portal);
    data.set("_subject", `[${portal}] Axiom inquiry`);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("idle");
      toast.error(`Something went wrong. Please email ${toEmail} directly.`);
    }
  }

  if (status === "success") {
    return (
      <div className="card-enterprise flex flex-col items-center py-10 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-mid/12">
          <CheckCircle2 className="h-6 w-6 text-brand-mid" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground">Message sent</h3>
        <p className="mt-2 text-sm text-muted-foreground">Thanks, our team will follow up shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-enterprise space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${id}-name`}>Full name</Label>
          <Input id={`${id}-name`} name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${id}-email`}>Work email</Label>
          <Input id={`${id}-email`} name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      {showOrg && (
        <div className="space-y-2">
          <Label htmlFor={`${id}-org`}>{orgLabel}</Label>
          <Input id={`${id}-org`} name="organization" autoComplete="organization" />
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor={`${id}-msg`}>Message</Label>
        <Textarea id={`${id}-msg`} name="message" rows={4} required />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="enterprise" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            cta
          )}
        </Button>
        <a
          href={`mailto:${toEmail}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <Mail className="h-3.5 w-3.5" /> {toEmail}
        </a>
      </div>
    </form>
  );
}
