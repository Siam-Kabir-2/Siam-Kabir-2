import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { SkillMarquee } from "./SkillMarquee";
import { marqueeRowOne, marqueeRowTwo, specialties } from "./skill-stack";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_6%,transparent),transparent_65%)]"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills & Stack"
          title="Technologies I work with."
          subtitle="Tools and frameworks I use to design, build, and ship production-ready web products."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl border border-border/60 bg-card/30 px-2 py-5 backdrop-blur-sm sm:px-4 sm:py-6"
        >
          <SkillMarquee rowOne={marqueeRowOne} rowTwo={marqueeRowTwo} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="mx-auto mt-10 max-w-3xl text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground"
        >
          Also experienced in{" "}
          <span className="text-foreground/70">{specialties.join(" · ")}</span>
        </motion.p>
      </div>
    </section>
  );
}
