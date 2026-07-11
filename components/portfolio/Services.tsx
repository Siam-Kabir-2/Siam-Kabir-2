import { Briefcase, User, Coins, Users2, Gamepad2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
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
];

function TiltCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <div
      className="glass group relative h-full overflow-hidden rounded-sm border border-border bg-card p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Services"
          title="What I build for clients."
          subtitle="From marketing sites to full membership platforms — end-to-end delivery, from design to deploy."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <TiltCard key={s.title} delay={i * 0.06}>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-primary/90">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                <span>0{i + 1}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
