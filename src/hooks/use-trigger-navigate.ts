import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Makes a radix navigation-menu trigger navigate on click while still opening
 * its dropdown on hover. A capture-phase listener runs before radix's own
 * click handler (which stops propagation), so the click navigates instead of
 * only toggling the menu. Returns a ref to attach to the trigger.
 */
export function useTriggerNavigate(to: string) {
  const navigate = useNavigate();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      navigate(to);
    };
    el.addEventListener("click", onClick, true);
    return () => el.removeEventListener("click", onClick, true);
  }, [navigate, to]);

  return ref;
}
