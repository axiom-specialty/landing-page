import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { WaitlistModal } from "./WaitlistModal";

interface WaitlistContextValue {
  open: () => void;
  close: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

/**
 * Provides a single, app-wide waitlist modal. Any component can call
 * `useWaitlist().open()` — the modal is rendered once at the layout root so it
 * works on every page (previously it was coupled inside the homepage hero).
 */
export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <WaitlistModal open={isOpen} onOpenChange={setIsOpen} />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used within a WaitlistProvider");
  return ctx;
}
