"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

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
    const syncHash = () => setActiveHash(window.location.hash || "#home");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const onHero = !scrolled;

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-primary will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding,background-color] duration-300",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={cn(
              "grid grid-cols-[1fr_auto_1fr] items-center px-1 py-3 transition-colors duration-300 sm:px-2",
              scrolled && "border-b border-border bg-background/95",
            )}
          >
            <a href="#home" className="flex items-center gap-3 justify-self-start">
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
                    ? "border-foreground/20 text-foreground/60 dark:border-white/20 dark:text-white/60"
                    : "border-border text-muted-foreground",
                )}
              >
                Siam Kabir
              </span>
            </a>

            <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
              {links.map((l) => {
                const isActive = activeHash === l.href || (activeHash === "" && l.href === "#home");
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "font-mono text-[11px] uppercase tracking-[0.15em] transition-colors",
                      onHero
                        ? isActive
                          ? "text-foreground underline decoration-foreground underline-offset-[6px] dark:text-white dark:decoration-white"
                          : "text-foreground/55 hover:text-foreground/85 dark:text-white/55 dark:hover:text-white/85"
                        : isActive
                          ? "text-foreground underline decoration-foreground underline-offset-[6px]"
                          : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 justify-self-end">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={toggle}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-lg border transition-colors",
                  onHero
                    ? "border-foreground/15 bg-white/35 text-foreground/80 shadow-[0_0_24px_rgba(251,191,36,0.18)] backdrop-blur-sm hover:border-foreground/30 hover:text-foreground dark:border-white/15 dark:bg-black/20 dark:text-white/80 dark:shadow-[0_0_24px_rgba(251,191,36,0.22)] dark:hover:border-white/30 dark:hover:text-white"
                    : "border-border text-foreground/70 hover:border-primary/50 hover:text-primary",
                )}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-lg border md:hidden",
                  onHero
                    ? "border-foreground/15 bg-white/35 text-foreground/80 backdrop-blur-sm dark:border-white/15 dark:bg-black/20 dark:text-white/80"
                    : "border-border text-foreground",
                )}
              >
                {open ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="mx-4 mt-2 border border-border bg-card p-2 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
