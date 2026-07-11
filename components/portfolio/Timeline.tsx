import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: Briefcase,
    kind: "Experience",
    title: "Freelance Web Developer",
    period: "3+ Years · Present",
    body: "International client projects — business websites, crypto landing pages, membership platforms, and premium marketing sites. End-to-end delivery from design system to deploy.",
  },
  {
    icon: GraduationCap,
    kind: "Education",
    title: "KUET — Khulna University of Engineering & Technology",
    period: "BSc Computer Science · 3rd Year",
    body: "Studying computer science with a focus on modern web systems, databases, and software engineering practice.",
  },
];

export function Timeline() {
  return (
    <section id="journey" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Journey" title="Experience & Education" />

        <div className="relative">
          <div className="absolute left-4 top-2 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
                className={`relative grid gap-6 sm:grid-cols-2 ${
                  i % 2 === 1 ? "sm:[&>*:first-child]:col-start-2" : ""
                }`}
              >
                <div className="absolute left-4 top-4 z-10 -translate-x-1/2 sm:left-1/2">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-background ring-2 ring-[var(--electric)]/60">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                </div>

                <div className="pl-12 sm:pl-0 sm:pr-10">
                  <div
                    className={`glass-strong rounded-2xl p-6 shadow-[var(--shadow-card)] ${
                      i % 2 === 1 ? "sm:ml-10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                        <it.icon size={16} />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                          {it.kind}
                        </div>
                        <div className="text-xs text-muted-foreground">{it.period}</div>
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
