"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Send } from "lucide-react";
import { scrollToSectionId } from "@/lib/scroll-to-section";

const FiverrIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M2.4 9.35h3.25V7.55c0-2.55 1.4-4.2 3.95-4.2.65 0 1.3.08 1.95.25v3.05c-.4-.1-.85-.18-1.3-.18-1.05 0-1.65.6-1.65 1.65v1.23h2.75v2.55H8.6v8.55H5.65v-8.55H2.4V9.35z" />
    <rect x="14.7" y="9.35" width="3.6" height="11.1" rx="0.35" />
    <circle cx="16.5" cy="5.55" r="2.2" />
  </svg>
);

const socials = [
  { href: "https://github.com/Siam-Kabir-2", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/md-siam-kabir/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.fiverr.com/siam_kk", icon: FiverrIcon, label: "Fiverr" },
  { href: "https://t.me/kurosaki106", icon: Send, label: "Telegram" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const activeVideoRef = useRef<"a" | "b">("a");

  const CROSSFADE_SECONDS = 1.25;

  useEffect(() => {
    const section = sectionRef.current;
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!section || !videoA || !videoB) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let inView = false;

    const setOpacity = (video: HTMLVideoElement, value: number) => {
      video.style.opacity = String(value);
    };

    const resetCrossfade = () => {
      setOpacity(videoA, 1);
      setOpacity(videoB, 0);
      activeVideoRef.current = "a";
    };

    const ensureVideoBSource = () => {
      if (videoB.querySelector("source")) return;
      const source = document.createElement("source");
      source.src = "/pfBg.mp4";
      source.type = "video/mp4";
      videoB.appendChild(source);
      videoB.load();
    };

    const playActive = () => {
      const active = activeVideoRef.current === "a" ? videoA : videoB;
      void active.play().catch(() => {});
    };

    const pauseBoth = () => {
      if (!videoA.paused) videoA.pause();
      if (!videoB.paused) videoB.pause();
    };

    const syncPlayback = () => {
      if (inView && !document.hidden) playActive();
      else pauseBoth();
    };

    const handleCrossfade = (
      current: HTMLVideoElement,
      next: HTMLVideoElement,
      nextKey: "a" | "b",
    ) => {
      const duration = current.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;

      const remaining = duration - current.currentTime;
      if (remaining > CROSSFADE_SECONDS) return;

      ensureVideoBSource();

      if (next.paused) {
        next.currentTime = 0;
        void next.play().catch(() => {});
      }

      const progress = 1 - remaining / CROSSFADE_SECONDS;
      setOpacity(current, 1 - progress);
      setOpacity(next, progress);

      if (progress >= 0.99) {
        current.pause();
        current.currentTime = 0;
        activeVideoRef.current = nextKey;
      }
    };

    const onTimeUpdateA = () => {
      if (activeVideoRef.current === "a") handleCrossfade(videoA, videoB, "b");
    };

    const onTimeUpdateB = () => {
      if (activeVideoRef.current === "b") handleCrossfade(videoB, videoA, "a");
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
    videoA.addEventListener("timeupdate", onTimeUpdateA);
    videoB.addEventListener("timeupdate", onTimeUpdateB);

    resetCrossfade();
    void videoA.play().catch(() => {});

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      videoA.removeEventListener("timeupdate", onTimeUpdateA);
      videoB.removeEventListener("timeupdate", onTimeUpdateB);
    };
  }, []);

  const videoClassName =
    "absolute inset-0 h-full w-full object-cover brightness-110 saturate-[0.85] transition-opacity duration-300 ease-linear will-change-[opacity] dark:brightness-100 dark:saturate-100";

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] min-h-[100dvh] flex-col overflow-hidden bg-[#f4f4f6] dark:bg-[#0a0a0b]"
    >
      <div className="absolute inset-0" aria-hidden>
        <video
          ref={videoARef}
          muted
          playsInline
          preload="metadata"
          className={videoClassName}
          style={{ opacity: 1 }}
        >
          <source src="/pfBg.mp4" type="video/mp4" />
        </video>
        <video
          ref={videoBRef}
          muted
          playsInline
          preload="none"
          className={videoClassName}
          style={{ opacity: 0 }}
        />
      </div>

      <div className="absolute inset-0 bg-white/65 dark:bg-black/55" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,255,255,0.45)_0%,rgba(244,244,246,0.88)_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.75)_100%)]"
        aria-hidden
      />
      {/* Soften baked-in Veo watermark (bottom-right of bg video) */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-40 w-52 bg-[radial-gradient(ellipse_100%_100%_at_100%_100%,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.62)_40%,rgba(0,0,0,0.28)_65%,transparent_82%)] dark:h-44 dark:w-56 dark:bg-[radial-gradient(ellipse_100%_100%_at_100%_100%,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.75)_42%,rgba(0,0,0,0.35)_68%,transparent_84%)] sm:h-48 sm:w-64 dark:sm:h-52 dark:sm:w-72"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-2 rounded-xl border border-black/[0.08] shadow-[inset_0_0_100px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.02)] sm:inset-4 sm:rounded-2xl"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col pt-[calc(4.75rem+env(safe-area-inset-top,0px))]">
        <div className="flex flex-1 items-center justify-center px-4 pb-4 sm:px-6 sm:pb-0">
          <div className="w-full max-w-3xl text-center">
            <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.35em] text-foreground/85 dark:text-white/80">
              Available for freelance
            </p>

            <h1 className="animate-fade-up delay-1 mt-4 font-display text-[clamp(2.35rem,10vw,5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground dark:text-white sm:mt-5">
              <span className="italic font-normal">Siam</span>{" "}
              <span className="not-italic">Kabir</span>
            </h1>

            <p className="animate-fade-up delay-1 mt-3 font-display text-lg italic text-foreground/85 dark:text-white/70 sm:text-xl">
              Crafting deliberate, high-quality web products.
            </p>

            <p className="animate-fade-up delay-2 mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/85 dark:text-white/75 sm:mt-5 sm:text-lg sm:leading-relaxed">
              <span className="font-semibold text-foreground dark:text-white/95">
                Full-stack developer
              </span>{" "}
              building responsive platforms with Next.js, Laravel, and Supabase — thoughtful UX,
              solid engineering, outcomes that hold up over time.
            </p>

            <div className="animate-fade-up delay-3 mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7">
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  window.history.pushState(null, "", "#contact");
                  scrollToSectionId("contact");
                }}
                className="hero-cta-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.02]"
              >
                Get in touch
                <ArrowRight size={16} aria-hidden />
              </a>
              <a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  window.history.pushState(null, "", "#projects");
                  scrollToSectionId("projects");
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/30 bg-white/55 px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground/45 hover:bg-white/75 dark:border-white/25 dark:bg-transparent dark:text-white dark:hover:border-white/45 dark:hover:bg-white/[0.04]"
              >
                View work
              </a>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 justify-center px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] pt-2 sm:pb-6">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-md border border-foreground/20 bg-white/60 text-foreground/75 backdrop-blur-sm transition-colors hover:border-foreground/35 hover:text-foreground dark:border-white/15 dark:bg-black/20 dark:text-white/55 dark:hover:border-white/30 dark:hover:text-white"
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
