"use client";

import { useRef } from "react";
import {
  ArrowUpRight,
  Briefcase,
  User,
  Coins,
  Users2,
  Gamepad2,
  Send,
  type LucideIcon,
} from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { isMobileViewport } from "@/lib/breakpoints";
import { SectionHeader } from "./SectionHeader";

const services: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: Briefcase,
    title: "Business Website Development",
    desc: "Polished, SEO-friendly business sites that convert visitors into customers with clean design and fast performance.",
  },
  {
    icon: User,
    title: "Portfolio Website Development",
    desc: "Personal-brand portfolios and creative sites with cinematic animations and thoughtful storytelling.",
  },
  {
    icon: Coins,
    title: "Crypto Landing Page Development",
    desc: "Premium crypto and web3 landing pages with modern visuals, motion, and strong presentation structure.",
  },
  {
    icon: Users2,
    title: "Membership Website Development",
    desc: "Full membership platforms with authentication, protected content, subscriptions, and clean dashboards.",
  },
  {
    icon: Gamepad2,
    title: "2D Game Development",
    desc: "Lightweight 2D web games with responsive controls, animations, and browser-first performance.",
  },
  {
    icon: Send,
    title: "Telegram Mini App Development",
    desc: "Interactive Telegram mini apps with smooth UX, secure integrations, and production-ready flows built for real users inside Telegram.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <article className="service-card group premium-frame flex h-full flex-col rounded-2xl bg-card/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card/60 hover:shadow-[var(--shadow-elegant)] sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/50 text-primary transition-colors group-hover:border-primary/25 group-hover:bg-primary/5">
          <Icon size={17} aria-hidden />
        </div>
      </div>

      <h3 className="mt-5 font-display text-xl font-medium leading-snug tracking-[-0.01em] sm:text-[1.35rem]">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-[1.75]">
        {service.desc}
      </p>
    </article>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mobile = isMobileViewport();
      if (reducedMotion) return;

      const headerRoot = headerRef.current?.firstElementChild;
      if (headerRoot) {
        gsap.from(headerRoot.querySelectorAll("p, h2"), {
          opacity: 0,
          y: 22,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRoot,
            start: "top 88%",
            once: true,
          },
        });

        const line = headerRoot.querySelector(".h-px");
        if (line) {
          gsap.from(line, {
            scaleX: 0,
            duration: 0.55,
            ease: "power2.inOut",
            transformOrigin: "center center",
            scrollTrigger: {
              trigger: headerRoot,
              start: "top 88%",
              once: true,
            },
          });
        }
      }

      const cards = gsap.utils.toArray<HTMLElement>(
        gridRef.current ? Array.from(gridRef.current.children) : [],
      );
      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: mobile ? 28 : 40,
          x: mobile ? 0 : index % 2 === 0 ? -28 : 28,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            once: true,
          },
        });
      });

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 18,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 94%",
            once: true,
          },
        });
      }

      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  return (
    <section id="services" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,color-mix(in_oklab,var(--primary)_5%,transparent),transparent_65%)]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Services"
            title="What I build for clients."
            subtitle="From marketing sites to full membership platforms — end-to-end delivery, from design to deploy."
          />
        </div>

        <div ref={gridRef} className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div
          ref={ctaRef}
          className="mt-12 flex flex-col items-center gap-4 border-t border-border/70 pt-10 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="max-w-md text-sm text-muted-foreground sm:text-[15px]">
            Need a custom scope or not sure which service fits?{" "}
            <span className="text-foreground/80">Let&apos;s figure it out together.</span>
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
          >
            Contact me
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
