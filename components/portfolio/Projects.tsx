"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { ProjectPreviewFrame } from "@/components/portfolio/ProjectCard";
import { featuredProjects, getProjectDomain } from "@/components/portfolio/projects-data";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!stackRef.current) return;

      const mm = gsap.matchMedia();

      const setupStack = (mobile: boolean) => {
        const wraps = gsap.utils.toArray<HTMLElement>(
          stackRef.current!.querySelectorAll(".project-stack-wrap"),
        );
        const stickyTop = mobile ? "12vh" : "14vh";
        const entryY = () => window.innerHeight * (mobile ? 0.32 : 0.45);

        wraps.forEach((wrap, index) => {
          const card = wrap.querySelector<HTMLElement>(".project-stack-card");
          if (!card) return;

          gsap.fromTo(
            card,
            {
              y: entryY,
              scale: mobile ? 0.97 : 0.96,
              opacity: 0.88,
            },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: wrap,
                start: "top bottom",
                end: `top ${stickyTop}`,
                scrub: mobile ? 0.45 : 0.55,
                invalidateOnRefresh: true,
              },
            },
          );

          if (index === 0) return;

          const previousCard = wraps[index - 1]?.querySelector<HTMLElement>(
            ".project-stack-card",
          );
          if (!previousCard) return;

          gsap.fromTo(
            previousCard,
            { scale: 1, opacity: 1, filter: "brightness(1)" },
            {
              scale: mobile ? 0.95 : 0.94,
              opacity: 0.72,
              filter: "brightness(0.88)",
              ease: "none",
              scrollTrigger: {
                trigger: wrap,
                start: "top bottom",
                end: `top ${stickyTop}`,
                scrub: mobile ? 0.45 : 0.55,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      };

      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => setupStack(true),
      );
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => setupStack(false),
      );

      ScrollTrigger.refresh();

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ScrollTrigger.refresh();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_6%,transparent),transparent_65%)]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected projects."
          subtitle="A few things I've shipped recently for international clients."
        />

        <div ref={stackRef} className="project-stack relative mt-2 md:mt-4">
          {featuredProjects.map((project, index) => {
            const domain = getProjectDomain(project.live);
            const reversed = index % 2 === 1;
            const isLast = index === featuredProjects.length - 1;

            return (
              <div
                key={project.id}
                className={`project-stack-wrap ${isLast ? "min-h-[62vh] md:min-h-[58vh]" : "min-h-[105vh] md:min-h-[92vh]"}`}
                style={{ zIndex: index + 1 }}
              >
                <div className="project-stack-pin sticky top-[12vh] md:top-[14vh]">
                  <article className="project-stack-card group premium-frame overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[var(--shadow-elegant)] transition-shadow duration-300 hover:shadow-[var(--shadow-elegant)] will-change-transform">
                    <div
                      className={`grid items-stretch lg:grid-cols-2 ${
                        reversed ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className={`relative block overflow-hidden border-b border-border/60 bg-muted/20 p-4 sm:p-5 lg:border-b-0 ${
                          reversed
                            ? "lg:border-l lg:border-border/60"
                            : "lg:border-r lg:border-border/60"
                        }`}
                      >
                        <ProjectPreviewFrame project={project} />
                      </a>

                      <div className="flex flex-col justify-between bg-card p-6 sm:p-8 lg:p-9">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                              {project.type}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                              <Lock size={10} aria-hidden />
                              Private repo
                            </span>
                          </div>

                          <div className="mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="text-primary">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="h-px flex-1 bg-border" />
                            <span>{project.role ?? "Developer"}</span>
                          </div>

                          <h3 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.35rem)] font-medium leading-tight tracking-[-0.02em]">
                            {project.title}
                          </h3>

                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-[1.75]">
                            {project.description}
                          </p>

                          {project.stack ? (
                            <div className="mt-6 flex flex-wrap gap-2">
                              {project.stack.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>

                        <div className="mt-8">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
                          >
                            Visit live site
                            <ArrowUpRight
                              size={14}
                              className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                              aria-hidden
                            />
                          </a>
                          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/70">
                            {domain}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border/70 pt-10 text-center sm:mt-14">
          <p className="max-w-md text-sm text-muted-foreground sm:text-[15px]">
            These are highlights from a larger body of client work, crypto launches, games, and
            Telegram builds.
          </p>
          <Link
            href="/projects"
            className="hero-cta-primary group inline-flex items-center gap-2 rounded-lg px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.02]"
          >
            View all projects
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
