"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { isMobileViewport } from "@/lib/breakpoints";

const PROFILE_IMAGE = "/profile.png";

const metaItems = [
  {
    label: "Location",
    value: "Rangpur, Bangladesh",
    className: "",
  },
  {
    label: "Experience",
    value: "3+ years freelance",
    className: "",
  },
  {
    label: "Education",
    value: "BSc CS · KUET · 3rd Year",
    className: "col-span-2 sm:col-span-1",
  },
] as const;

function ScrollRevealWords({ text, className }: { text: string; className?: string }) {
  const words = text.trim().split(/\s+/);

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="about-word inline opacity-[0.14]">{word}</span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

function ProfilePortrait() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="about-image relative h-full min-h-[18rem] w-full overflow-hidden sm:min-h-[24rem] lg:min-h-[36rem]">
      <div className="about-image-inner relative h-full w-full">
        {!hasError ? (
          <div className="about-portrait-fade absolute inset-0 -translate-y-4 sm:-translate-y-6 lg:-translate-y-8">
            <Image
              src={PROFILE_IMAGE}
              alt="MD. Siam Kabir — full-stack web developer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-bottom"
              onError={() => setHasError(true)}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-end bg-[linear-gradient(160deg,var(--muted),var(--background))] p-8">
            <span className="font-display text-6xl italic text-foreground/15 sm:text-7xl">SK</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mobile = isMobileViewport();
      const words = gsap.utils.toArray<HTMLElement>(".about-word");

      if (reducedMotion) {
        gsap.set(words, { opacity: 1 });
        gsap.set(".about-meta-item", { opacity: 1, y: 0 });
        gsap.set(".about-cta", { opacity: 1, y: 0 });
        return;
      }

      gsap.set(".about-image-inner", { clipPath: "inset(0 100% 0 0)" });

      if (!mobile) {
        gsap.set(".about-meta-item", { opacity: 0, y: 24 });
        gsap.set(".about-cta", { opacity: 0, y: 16 });
      }

      gsap.to(".about-image-inner", {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.15,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 82%",
          once: true,
        },
      });

      gsap.fromTo(
        words,
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: mobile ? "power1.out" : "none",
          duration: mobile ? 0.45 : undefined,
          stagger: mobile ? 0.012 : 0.022,
          scrollTrigger: mobile
            ? {
                trigger: ".about-content",
                start: "top 88%",
                once: true,
              }
            : {
                trigger: ".about-content",
                start: "top 92%",
                end: "bottom 90%",
                scrub: 0.3,
              },
        },
      );

      if (!mobile) {
        gsap.to(".about-meta-item", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-meta",
            start: "top 88%",
            once: true,
          },
        });

        gsap.to(".about-cta", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-bottom-cta",
            start: "top 92%",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-stretch gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <div className="lg:col-span-5">
            <ProfilePortrait />
          </div>

          <div className="about-content flex flex-col justify-center lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground sm:tracking-[0.34em]">
              <ScrollRevealWords text="About Me" />
            </p>

            <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.65rem,6vw,2.85rem)] font-medium leading-[1.14] tracking-[-0.02em] sm:mt-4">
              <ScrollRevealWords text="Full-stack developer building modern web products for real users and clients." />
            </h2>

            <p className="mt-5 max-w-xl font-display text-lg italic text-muted-foreground sm:text-xl">
              <ScrollRevealWords text="Turning ideas into clean experiences and business-ready digital products." />
            </p>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-muted-foreground sm:mt-7 sm:space-y-5 sm:text-[17px] sm:leading-[1.8]">
              <p>
                <ScrollRevealWords text="I'm" />{" "}
                <span className="text-foreground/90">
                  <ScrollRevealWords text="MD. Siam Kabir," />
                </span>{" "}
                <ScrollRevealWords text="a full-stack web developer based in Rangpur, Bangladesh. I focus on responsive, performance-driven websites and applications using Next.js, Laravel, Supabase, and modern frontend tools — turning ideas into clean experiences and business-ready digital products." />
              </p>
              <p>
                <ScrollRevealWords text="I'm pursuing a BSc in Computer Science at Khulna University of Engineering and Technology (KUET), currently in my third year. Alongside my studies, I work as a freelance developer with international clients on business sites, membership platforms, and premium landing pages — from design and frontend work through backend integration and deployment." />
              </p>
            </div>

            <div className="about-bottom mt-8 sm:mt-10">
              <div className="about-meta grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
                {metaItems.map((item) => (
                  <div
                    key={item.label}
                    className={`about-meta-item rounded-xl border border-border/60 bg-card/30 px-4 py-3.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 ${item.className}`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.22em]">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-snug text-foreground/90 sm:mt-2">
                      {item.label === "Education" ? (
                        <>
                          <span className="block sm:inline">BSc CS · KUET</span>
                          <span className="hidden sm:inline"> · </span>
                          <span className="block text-foreground/75 sm:inline sm:text-foreground/90">
                            3rd Year
                          </span>
                        </>
                      ) : (
                        item.value
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <div className="about-bottom-cta mt-6 border-t border-border/70 pt-6 sm:mt-8 sm:pt-8">
                <a
                  href="#contact"
                  className="about-cta group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border/70 bg-card/35 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary/30 hover:bg-card/55 hover:text-primary sm:w-auto sm:justify-start sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
                >
                  Contact me
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
