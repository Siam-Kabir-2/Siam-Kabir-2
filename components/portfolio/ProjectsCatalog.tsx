"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { ProjectGridCard } from "@/components/portfolio/ProjectCard";
import {
  allProjects,
  filterProjects,
  projectFilters,
  type ProjectFilter,
} from "@/components/portfolio/projects-data";
import { cn } from "@/lib/utils";

export function ProjectsCatalog() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const visibleProjects = useMemo(
    () => filterProjects(activeFilter),
    [activeFilter],
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pb-20 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:pt-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(ellipse_65%_55%_at_70%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_70%)]"
          aria-hidden
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="border-b border-border/70 pb-10 sm:pb-14">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={14} aria-hidden />
              Back to featured work
            </Link>

            <div className="mx-auto mt-9 max-w-3xl text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary">
                Project Archive
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.4rem,7vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.035em]">
                Selected work,
                <span className="block font-normal italic text-foreground/65">all in one place.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                A growing collection of client platforms, crypto launches, product experiments,
                Telegram apps, and browser games.
              </p>
            </div>
          </header>

          <div className="sticky top-[4.75rem] z-30 border-b border-border/70 bg-background/90 py-4 backdrop-blur-xl sm:top-[5rem]">
            <div className="flex flex-wrap justify-center gap-2 px-2 sm:px-0">
            {projectFilters.map((filter) => {
              const count =
                filter.id === "all"
                  ? allProjects.length
                  : filterProjects(filter.id).length;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors",
                    activeFilter === filter.id
                      ? "border-foreground bg-foreground text-background"
                      : "border-border/70 bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                  )}
                >
                  {filter.label}
                  <span
                    className={cn(
                      "ml-2",
                      activeFilter === filter.id
                        ? "text-background/60"
                        : "text-muted-foreground/60",
                    )}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <ProjectGridCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <section className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border/70 pt-10 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                Have a project in mind?
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em]">
                Let&apos;s build it properly.
              </h2>
            </div>
            <Link
              href="/#contact"
              className="hero-cta-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white"
            >
              Start a conversation
              <ArrowUpRight size={14} aria-hidden />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
