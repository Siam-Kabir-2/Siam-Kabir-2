"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Instagram, Send } from "lucide-react";

const XIcon = (props: { size?: number }) => (
  <svg width={props.size ?? 16} height={props.size ?? 16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2H21l-6.52 7.451L22 22h-6.828l-4.77-6.243L4.8 22H2l7.02-8.02L2 2h6.914l4.34 5.74L18.244 2Zm-2.39 18h1.66L8.24 4H6.475l9.379 16Z" />
  </svg>
);

const socials = [
  { href: "https://github.com/Siam-Kabir-2", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/siam-kabir-1517b42b2/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/_Siam__", icon: XIcon, label: "X" },
  { href: "https://www.instagram.com/__the.lost.oni_/", icon: Instagram, label: "Instagram" },
  { href: "https://t.me/kurosaki106", icon: Send, label: "Telegram" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let inView = false;

    const play = () => {
      video.play().catch(() => {});
    };

    const pause = () => {
      if (!video.paused) video.pause();
    };

    const syncPlayback = () => {
      if (inView && !document.hidden) play();
      else pause();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex h-[100dvh] flex-col overflow-hidden bg-[#f4f4f6] dark:bg-[#0a0a0b]"
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover brightness-110 saturate-[0.85] dark:brightness-100 dark:saturate-100"
      >
        <source src="/pfBg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-white/55 dark:bg-black/55" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.72)_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.75)_100%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-3 rounded-2xl border border-black/[0.08] shadow-[inset_0_0_100px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.02)] sm:inset-4"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col pt-[4.75rem]">
        <div className="flex flex-1 items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-3xl text-center">
            <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.35em] text-foreground/70 dark:text-white/80">
              Available for freelance
            </p>

            <h1 className="animate-fade-up delay-1 mt-4 font-display text-[clamp(2.75rem,6.5vw,5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground dark:text-white sm:mt-5">
              <span className="italic font-normal">Siam</span>{" "}
              <span className="not-italic">Kabir</span>
            </h1>

            <p className="animate-fade-up delay-1 mt-3 font-display text-lg italic text-foreground/65 dark:text-white/70 sm:text-xl">
              Crafting deliberate, high-quality web products.
            </p>

            <p className="animate-fade-up delay-2 mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 dark:text-white/75 sm:mt-5 sm:text-lg sm:leading-relaxed">
              <span className="font-semibold text-foreground/90 dark:text-white/95">
                Full-stack developer
              </span>{" "}
              building responsive platforms with Next.js, Laravel, and Supabase —{" "}
              <span className="text-premium-accent text-foreground/85 dark:text-white/90">
                thoughtful UX, solid engineering, outcomes that hold up over time.
              </span>
            </p>

            <div className="animate-fade-up delay-3 mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7">
              <a
                href="#contact"
                className="hero-cta-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.02]"
              >
                Get in touch
                <ArrowRight size={16} aria-hidden />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-white/20 px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground/35 hover:bg-white/35 dark:border-white/25 dark:bg-transparent dark:text-white dark:hover:border-white/45 dark:hover:bg-white/[0.04]"
              >
                View work
              </a>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 justify-center px-4 pb-5 pt-2 sm:pb-6">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-md border border-foreground/15 bg-white/35 text-foreground/55 backdrop-blur-sm transition-colors hover:border-foreground/30 hover:text-foreground dark:border-white/15 dark:bg-black/20 dark:text-white/55 dark:hover:border-white/30 dark:hover:text-white"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
