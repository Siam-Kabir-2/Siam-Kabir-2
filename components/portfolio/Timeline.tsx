"use client";

import { useRef } from "react";
import { Briefcase, GraduationCap, School } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { SectionHeader } from "./SectionHeader";

const items: {
  icon: LucideIcon;
  kind: string;
  title: string;
  period: string;
  body: string;
}[] = [
  {
    icon: School,
    kind: "Higher secondary",
    title: "Carmichael College, Rangpur",
    period: "Science · Session 2021–22",
    body: "Completed higher secondary education in the science group from Carmichael College, Rangpur.",
  },
  {
    icon: GraduationCap,
    kind: "University",
    title: "Khulna University of Engineering & Technology",
    period: "BSc Computer Science · 3rd year",
    body: "Studying computer science at KUET with focus on web systems, databases, software engineering, and applied development practice.",
  },
  {
    icon: Briefcase,
    kind: "Experience",
    title: "Freelance Web Developer",
    period: "3+ years · Present",
    body: "Building for international clients — business websites, crypto landing pages, membership platforms, and premium marketing sites. End-to-end from design to deploy.",
  },
];

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!listRef.current) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const entries = gsap.utils.toArray<HTMLElement>(
        listRef.current.querySelectorAll(".journey-entry"),
      );
      const lineProgress = listRef.current.querySelector<HTMLElement>(".journey-line-progress");

      if (reducedMotion) {
        lineProgress && gsap.set(lineProgress, { scaleY: 1 });
        entries.forEach((entry) => entry.classList.add("journey-entry-active"));
        return;
      }

      gsap.set(entries, { autoAlpha: 1 });

      if (lineProgress) {
        gsap.set(lineProgress, { scaleY: 0, transformOrigin: "top center" });
        gsap.to(lineProgress, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        });
      }

      entries.forEach((entry) => {
        const card = entry.querySelector<HTMLElement>(".journey-card");
        const dot = entry.querySelector<HTMLElement>(".journey-dot");
        const reveals = entry.querySelectorAll<HTMLElement>(".journey-reveal");

        if (card) {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: entry,
                start: "top 88%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            },
          );
        }

        if (reveals.length) {
          gsap.fromTo(
            reveals,
            { autoAlpha: 0, y: 12 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              stagger: 0.07,
              force3D: true,
              scrollTrigger: {
                trigger: entry,
                start: "top 86%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            },
          );
        }

        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0.72, autoAlpha: 0.35 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.out",
              force3D: true,
              scrollTrigger: {
                trigger: entry,
                start: "top 88%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            },
          );
        }

        ScrollTrigger.create({
          trigger: entry,
          start: "top 68%",
          end: "bottom 35%",
          onEnter: () => entry.classList.add("journey-entry-active"),
          onLeave: () => entry.classList.remove("journey-entry-active"),
          onEnterBack: () => entry.classList.add("journey-entry-active"),
          onLeaveBack: () => entry.classList.remove("journey-entry-active"),
          invalidateOnRefresh: true,
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: sectionRef },
  );

  return (
    <section id="journey" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_0%_50%,color-mix(in_oklab,var(--primary)_5%,transparent),transparent_60%)]"
        aria-hidden
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Journey"
          title="Experience & education."
          subtitle="Where I've been building skills and shipping work."
        />

        <div ref={listRef} className="journey-list relative mt-4">
          <div
            className="absolute bottom-3 left-[11px] top-3 w-px bg-border/70 sm:left-[13px]"
            aria-hidden
          />
          <div
            className="journey-line-progress absolute bottom-3 left-[11px] top-3 w-px origin-top will-change-transform bg-gradient-to-b from-primary via-primary/70 to-primary/30 sm:left-[13px]"
            aria-hidden
          />

          <div className="space-y-8 sm:space-y-10">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="journey-entry group/entry relative pl-9 sm:pl-12"
                >
                  <div
                    className="journey-dot absolute left-0 top-7 z-10 grid h-[22px] w-[22px] place-items-center rounded-full border border-primary/25 bg-background shadow-[0_0_0_4px_var(--background)] transition-[border-color,box-shadow,transform] duration-500 ease-out will-change-transform group-[.journey-entry-active]/entry:border-primary/60 group-[.journey-entry-active]/entry:shadow-[0_0_0_4px_var(--background),0_0_20px_color-mix(in_oklab,var(--primary)_35%,transparent)] sm:top-8 sm:h-6 sm:w-6"
                    aria-hidden
                  >
                    <span className="journey-dot-inner h-1.5 w-1.5 rounded-full bg-primary/50 transition-all duration-500 ease-out group-[.journey-entry-active]/entry:scale-125 group-[.journey-entry-active]/entry:bg-primary sm:h-2 sm:w-2" />
                  </div>

                  <div className="journey-card premium-frame rounded-2xl border border-border/70 bg-card/35 p-5 backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-500 ease-out will-change-transform hover:border-primary/25 hover:bg-card/50 group-[.journey-entry-active]/entry:border-primary/30 group-[.journey-entry-active]/entry:bg-card/55 group-[.journey-entry-active]/entry:shadow-[var(--shadow-elegant)] sm:p-7">
                    <div className="journey-reveal flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border/60 bg-background/60 text-primary transition-colors duration-500 ease-out group-[.journey-entry-active]/entry:border-primary/30 group-[.journey-entry-active]/entry:bg-primary/10">
                          <Icon size={17} aria-hidden />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/85">
                            {item.kind}
                          </p>
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                            {item.period}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] tabular-nums tracking-[0.12em] text-muted-foreground/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="journey-reveal mt-5 font-display text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium leading-snug tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="journey-reveal mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-[1.75]">
                      {item.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
