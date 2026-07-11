import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    name: "Johannes Naaber",
    role: "Founder, Hano",
    quote:
      "Siam did an excellent job developing both the Hano Animations and Hano Insider websites. He understood the project requirements clearly, delivered a modern and professional result, and handled the technical implementation with care.",
  },
  {
    name: "Panther",
    role: "Client, QuantumX",
    quote:
      "Siam helped create a clean and premium landing page that matched the style and direction of the project. He was responsive, easy to work with, and focused on delivering a high-quality final result.",
  },
  {
    name: "Sophie",
    role: "Business Owner",
    quote:
      "Working with Siam was a great experience. He communicated clearly, understood the requirements, and delivered a professional website result. The final work was clean, responsive, and well-structured.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="What clients say."
          subtitle="Kind words from teams and founders I've partnered with."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
            >
              <Quote
                size={72}
                className="pointer-events-none absolute -right-2 -top-4 text-primary/10 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="relative">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
