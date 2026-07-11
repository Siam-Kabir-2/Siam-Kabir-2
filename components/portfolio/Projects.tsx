import { motion } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    image: "/projects/project-hano.svg",
    title: "Hano Animations",
    type: "Business Website",
    description:
      "Professional animated video business website designed to present services, build trust, and convert clients through polished interactive UX.",
    stack: ["Next.js", "GSAP", "Lenis", "Framer Motion", "Spline", "Vercel", "Google Cloud", "Calendly"],
    live: "https://hanoanimations.com",
    role: "Developer",
  },
  {
    image: "/projects/project-insider.svg",
    title: "Hano Insider",
    type: "Membership Website",
    description:
      "Premium crypto signal membership platform with user authentication, protected content, subscription structure, and clean dashboard experience.",
    stack: ["Next.js", "Supabase", "Framer Motion", "Railway", "GSAP", "Lenis", "Vercel", "Resend"],
    live: "https://hanoinsiders.com",
    role: "Developer",
  },
  {
    image: "/projects/project-quantumx.svg",
    title: "QuantumX",
    type: "Crypto Landing Page",
    description:
      "Premium crypto landing page with modern visual style, smooth animations, and strong presentation structure for branding and online promotion.",
    stack: ["Next.js", "Framer Motion", "GSAP", "Lenis", "Vercel"],
    live: "https://qtxhub.com",
    role: "Developer",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected projects."
          subtitle="A few things I've shipped recently for international clients."
        />

        <div className="space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-strong relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className={`grid gap-0 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="glass rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider">
                      {p.type}
                    </span>
                    <span className="glass inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium">
                      <Lock size={10} /> Private Repo
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent lg:hidden" />
                </div>

                <div className="flex flex-col justify-between p-8 sm:p-10">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="text-primary">0{i + 1}</span>
                      <span className="h-px flex-1 bg-border" />
                      <span>{p.role}</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {p.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-border/60 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-[12px] font-medium uppercase tracking-[0.1em] text-primary-foreground transition hover:bg-primary/90"
                    >
                      Visit Live Site
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
