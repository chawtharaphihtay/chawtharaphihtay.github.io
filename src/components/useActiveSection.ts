import { useEffect, useState } from "react";
import { nav } from "@/content/data";

const ids = nav.map((item) => item.href.replace("#", ""));

/**
 * Tracks which page section is currently in view, so the navbar can
 * highlight the matching link. The active section is the one crossing
 * the middle band of the viewport. At the very top (hero) nothing is
 * active, and at the very bottom the last section wins.
 */
export function useActiveSection(): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const lastId = ids[ids.length - 1];
    const nearBottom = () =>
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 4;

    const observer = new IntersectionObserver(
      (entries) => {
        // Bottom of the page always belongs to the last section, even
        // when a shorter final section never reaches the middle band.
        if (nearBottom()) {
          setActiveId(lastId);
          return;
        }
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveId(visible[0].target.id);
          return;
        }
        // Nothing in the middle band: only the hero is showing.
        if (window.scrollY < 100) {
          setActiveId(null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Backstop for the bottom edge when intersections stop changing
    // (for example, the page loading already scrolled to the bottom).
    const onScroll = () => {
      if (nearBottom()) {
        setActiveId(lastId);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return activeId;
}
