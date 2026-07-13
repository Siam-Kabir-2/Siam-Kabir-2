import { ScrollTrigger } from "@/lib/gsap";

const NAV_OFFSET = 88;

export function scrollToSectionId(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return false;

  // Lazy/content-visibility and ScrollTrigger need accurate layout before measuring.
  ScrollTrigger.refresh();

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });

  // Second pass after layout/animations settle (sticky stacks, fonts, etc.)
  window.setTimeout(() => {
    ScrollTrigger.refresh();
    const corrected = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    if (Math.abs(corrected - window.scrollY) > 2) {
      window.scrollTo({ top: Math.max(0, corrected), behavior: "auto" });
    }
  }, 80);

  return true;
}

export function getHashId(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1) || null;
}
