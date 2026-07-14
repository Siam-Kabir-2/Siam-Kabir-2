import { ScrollTrigger } from "@/lib/gsap";
import { getLenisInstance } from "@/lib/lenis-instance";

const NAV_OFFSET = 88;

function getSectionTop(el: HTMLElement) {
  return el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSectionId(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return false;

  ScrollTrigger.refresh();

  const top = Math.max(0, getSectionTop(el));
  const lenis = getLenisInstance();
  const immediate = behavior === "auto" || prefersReducedMotion();

  if (lenis) {
    const distance = Math.abs(lenis.scroll - top);
    lenis.scrollTo(top, {
      offset: 0,
      immediate,
      duration: immediate ? 0 : Math.min(1.4, Math.max(0.85, distance / 1600)),
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      onComplete: () => {
        ScrollTrigger.refresh();
        const corrected = Math.max(0, getSectionTop(el));
        if (Math.abs(corrected - lenis.scroll) > 6) {
          lenis.scrollTo(corrected, { immediate: false, duration: 0.35 });
        }
      },
    });
    return true;
  }

  window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
  return true;
}

export function getHashId(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1) || null;
}
