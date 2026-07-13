"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Moon,
  Sun,
  Menu,
  X,
  User,
  Layers,
  Briefcase,
  LayoutGrid,
  MessageSquareQuote,
  Route,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { getHashId, scrollToSectionId } from "@/lib/scroll-to-section";

const links: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/#about", label: "About", icon: User },
  { href: "/#skills", label: "Skills", icon: Layers },
  { href: "/#services", label: "Services", icon: Briefcase },
  { href: "/#projects", label: "Projects", icon: LayoutGrid },
  { href: "/#testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/#journey", label: "Journey", icon: Route },
  { href: "/#contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    // Wait a tick for sections to mount, then correct land position
    const timer = window.setTimeout(() => scrollToSectionId(id, "auto"), 50);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const onHero = pathname === "/" && !scrolled;

  const handleSectionLink = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const id = getHashId(href);
    if (!id) return;

    // Same-page: accurate scroll. Cross-page: let the browser navigate to /#id
    if (pathname !== "/") return;

    event.preventDefault();
    setOpen(false);
    setActiveHash(`#${id}`);
    window.history.pushState(null, "", `/#${id}`);
    scrollToSectionId(id);
  };

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-primary will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-[padding,background-color] duration-300",
          scrolled ? "py-2" : "py-3 sm:py-4",
        )}
      >
        <div className="mx-auto max-w-[92rem] px-4 sm:px-6 xl:px-8">
          <div
            className={cn(
              "relative flex items-center justify-between gap-4 px-1 py-3 transition-colors duration-300 sm:px-2",
              scrolled && "border-b border-border bg-background/95",
            )}
          >
            <a href="/" className="relative z-10 flex shrink-0 items-center gap-3">
              <span
                className={cn(
                  "font-display text-2xl font-light italic leading-none",
                  onHero ? "text-foreground dark:text-white" : "text-primary",
                )}
              >
                SK
              </span>
              <span
                className={cn(
                  "hidden border-l pl-3 font-mono text-[10px] uppercase tracking-[0.25em] sm:block",
                  onHero
                    ? "border-foreground/30 text-foreground/85 dark:border-white/20 dark:text-white/60"
                    : "border-border text-foreground/75",
                )}
              >
                Siam Kabir
              </span>
            </a>

            <nav
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 xl:gap-1.5 lg:flex"
              aria-label="Main"
            >
              {links.map((l) => {
                const isActive = Boolean(activeHash) && l.href.endsWith(activeHash);
                const Icon = l.icon;

                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(event) => handleSectionLink(event, l.href)}
                    className={cn(
                      "group relative inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 font-mono text-[10px] uppercase leading-none tracking-[0.08em] transition-all duration-300 xl:gap-2 xl:px-3",
                      onHero
                        ? isActive
                          ? "bg-black/[0.07] text-foreground dark:bg-white/[0.08] dark:text-white"
                          : "text-foreground/85 hover:bg-black/[0.05] hover:text-foreground dark:text-white/55 dark:hover:bg-white/[0.05] dark:hover:text-white/90"
                        : isActive
                          ? "bg-primary/10 text-foreground"
                          : "text-foreground/75 hover:bg-accent/60 hover:text-foreground",
                    )}
                  >
                    <span className="grid h-3.5 w-3.5 shrink-0 place-items-center">
                      <Icon
                        size={13}
                        strokeWidth={1.75}
                        className={cn(
                          "block transition-colors duration-300",
                          isActive
                            ? "text-primary"
                            : "text-current opacity-80 group-hover:opacity-100 dark:opacity-55 dark:group-hover:opacity-90",
                        )}
                        aria-hidden
                      />
                    </span>
                    <span className="translate-y-[0.5px] leading-none">{l.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={toggle}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-lg border transition-colors",
                  onHero
                    ? "border-foreground/25 bg-white/70 text-foreground shadow-[0_0_24px_rgba(251,191,36,0.18)] backdrop-blur-sm hover:border-foreground/40 hover:text-foreground dark:border-white/15 dark:bg-black/20 dark:text-white/80 dark:shadow-[0_0_24px_rgba(251,191,36,0.22)] dark:hover:border-white/30 dark:hover:text-white"
                    : "border-border text-foreground/80 hover:border-primary/50 hover:text-primary",
                )}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-lg border lg:hidden",
                  onHero
                    ? "border-foreground/25 bg-white/70 text-foreground backdrop-blur-sm dark:border-white/15 dark:bg-black/20 dark:text-white/80"
                    : "border-border text-foreground",
                )}
              >
                {open ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-[2px] lg:hidden"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-x-3 top-full z-50 mt-2 max-h-[min(72dvh,calc(100dvh-5.5rem))] overflow-y-auto overscroll-contain rounded-xl border border-border bg-card/98 p-2 shadow-[var(--shadow-elegant)] backdrop-blur-md sm:inset-x-4 lg:hidden">
              {links.map((l) => {
                const isActive = Boolean(activeHash) && l.href.endsWith(activeHash);
                const Icon = l.icon;

                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(event) => handleSectionLink(event, l.href)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3.5 font-mono text-[11px] uppercase leading-none tracking-[0.08em] transition-colors",
                      isActive
                        ? "bg-accent text-foreground"
                        : "text-foreground/75 hover:bg-accent/70 hover:text-foreground",
                    )}
                  >
                    <span className="grid h-4 w-4 shrink-0 place-items-center">
                      <Icon
                        size={15}
                        strokeWidth={1.75}
                        className={cn(
                          "block",
                          isActive ? "text-primary" : "text-muted-foreground",
                        )}
                        aria-hidden
                      />
                    </span>
                    <span className="translate-y-[0.5px] leading-none">{l.label}</span>
                  </a>
                );
              })}
            </div>
          </>
        )}
      </header>
    </>
  );
}
