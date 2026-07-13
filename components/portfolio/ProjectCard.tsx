import { ExternalLink, Github } from "lucide-react";
import type { Project } from "./projects-data";
import { getProjectDomain } from "./projects-data";

type ProjectCardProps = {
  project: Project;
  index?: number;
  compact?: boolean;
};

export function ProjectPreviewFrame({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const domain = getProjectDomain(project.live);
  const aspectClass = project.mobilePreview
    ? "aspect-[9/16] max-w-[220px] mx-auto"
    : "aspect-[16/10] w-full";

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border/70 bg-background shadow-[var(--shadow-card)] transition-transform duration-500 group-hover:-translate-y-0.5 ${
        compact ? "rounded-lg" : ""
      }`}
    >
      <div className="flex items-center gap-2 border-b border-border/60 bg-background/90 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" aria-hidden />
        <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground">{domain}</span>
      </div>

      <div className={`relative overflow-hidden bg-muted/30 ${aspectClass}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className={`h-full w-full object-cover ${project.mobilePreview ? "object-center" : "object-top"}`}
          />
        ) : (
          <div className="absolute inset-3 flex items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/20">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {project.mobilePreview ? "Mobile preview" : "Project preview"}
            </span>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/35 group-hover:opacity-100">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground">
          <ExternalLink size={12} aria-hidden />
          Open live site
        </span>
      </div>
    </div>
  );
}

export function ProjectGridCard({ project }: ProjectCardProps) {
  const domain = getProjectDomain(project.live);

  return (
    <article className="group premium-frame relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/45 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-card/65 hover:shadow-[var(--shadow-elegant)]">
      {project.image ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="block border-b border-border/60 bg-muted/15 p-3 sm:p-4"
        >
          <ProjectPreviewFrame project={project} compact />
        </a>
      ) : (
        <div className="relative flex min-h-24 items-end overflow-hidden border-b border-border/60 px-5 py-4 sm:px-6">
          <div
            className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-primary/[0.07] blur-3xl transition-colors duration-500 group-hover:bg-primary/[0.12]"
            aria-hidden
          />
          <div className="relative flex w-full items-center justify-between gap-4">
            <span className="truncate font-mono text-[10px] tracking-[0.12em] text-muted-foreground">
              {domain}
            </span>
            <ExternalLink
              size={14}
              className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              aria-hidden
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            {project.type}
          </span>
          {project.mobilePreview ? (
            <span className="rounded-full border border-border/60 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              Mobile-first
            </span>
          ) : null}
          {project.repo ? (
            <span className="rounded-full border border-border/60 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              Public repo
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 font-display text-[1.45rem] font-medium leading-tight tracking-[-0.02em]">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-[1.65] text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 border-b border-foreground/20 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            View project
            <ExternalLink size={13} aria-hidden />
          </a>
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 border-b border-foreground/20 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Github size={13} aria-hidden />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
