import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so a table of contents can follow
 * the reader. Returns the id of the last section whose top has passed the
 * offset line, which is the one filling the viewport.
 *
 * `ids` is joined into a string dependency so a fresh array literal on every
 * render does not restart the listener.
 */
export function useScrollSpy(ids: string[], offset = 140) {
  const key = ids.join("|");
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const list = key ? key.split("|") : [];
    if (list.length === 0) return;

    const onScroll = () => {
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      // The final section can be too short to ever cross the offset line, so
      // hitting the bottom of the page always selects it.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActiveId(atBottom ? list[list.length - 1] : current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key, offset]);

  return activeId;
}
