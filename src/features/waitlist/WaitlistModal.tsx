import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvreeao";

const ROLES = ["Managing Partner / CEO", "Risk & Compliance", "CFO / Finance", "Legal / General Counsel", "Other"];
const FIRM_SIZES = ["1–25", "26–100", "101–500", "500+"];

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [role, setRole] = useState("");
  const [firmSize, setFirmSize] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("role", role);
    data.set("firmSize", firmSize);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please email contact@axiomspecialty.com.");
    }
  }

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) {
      // reset shortly after close so the success state isn't visible mid-fade
      setTimeout(() => {
        setStatus("idle");
        setRole("");
        setFirmSize("");
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        {status === "success" ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-mid/12">
              <CheckCircle2 className="h-7 w-7 text-brand-mid" />
            </div>
            <DialogTitle className="font-serif text-2xl">You're on the list</DialogTitle>
            <DialogDescription className="mt-3 text-base">
              Thanks for your interest in Axiom. We'll be in touch as we open early access.
            </DialogDescription>
            <Button className="mt-7" variant="enterprise" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">Request early access</DialogTitle>
              <DialogDescription>
                Tell us about your firm and we'll reach out as coverage opens.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="wl-name">Full name</Label>
                <Input id="wl-name" name="name" required autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wl-email">Work email</Label>
                <Input id="wl-email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wl-company">Company</Label>
                <Input id="wl-company" name="company" required autoComplete="organization" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Select value={role} onValueChange={setRole} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Firm size</Label>
                  <Select value={firmSize} onValueChange={setFirmSize} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {FIRM_SIZES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                type="submit"
                variant="enterprise"
                size="lg"
                className="w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  "Request early access"
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting you agree to our{" "}
                <a href="/privacy" className="underline underline-offset-2 hover:text-foreground">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
