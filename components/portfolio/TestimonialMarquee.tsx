"use client";

export type TestimonialItem = {
  name: string;
  role: string;
  context: string;
  quote: string;
};

function TestimonialCard({ item, index }: { item: TestimonialItem; index: number }) {
  return (
    <article className="group relative flex min-h-[300px] w-[min(86vw,420px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/45 shadow-[var(--shadow-card)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:bg-card/60 hover:shadow-[var(--shadow-elegant)] sm:min-h-[340px] sm:w-[440px]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/6 blur-2xl transition-all duration-500 group-hover:bg-primary/10"
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/90">
            {item.context}
          </span>
          <span className="font-mono text-[11px] tabular-nums tracking-[0.14em] text-muted-foreground/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <blockquote className="relative mt-8 flex flex-1 flex-col pl-1">
          <span
            className="pointer-events-none absolute -left-1 -top-5 font-display text-[3.25rem] leading-none text-primary/15 transition-colors duration-500 group-hover:text-primary/25"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="relative font-display text-[1.06rem] italic leading-[1.7] text-foreground/90 sm:text-[1.125rem] sm:leading-[1.74]">
            {item.quote}
          </p>
        </blockquote>

        <footer className="mt-8 flex items-center gap-4 border-t border-border/60 pt-5">
          <div className="h-10 w-px shrink-0 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <div className="min-w-0">
            <p className="font-display text-[1.2rem] font-medium tracking-[-0.015em] text-foreground">
              {item.name}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {item.role}
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}

export function TestimonialMarquee({ items }: { items: TestimonialItem[] }) {
  const loop = [...items, ...items];

  return (
    <div className="testimonials-marquee relative overflow-hidden py-3">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background via-background/90 to-transparent sm:w-36"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background via-background/90 to-transparent sm:w-36"
        aria-hidden
      />

      <div className="testimonials-marquee-track">
        {loop.map((item, index) => (
          <TestimonialCard
            key={`${item.name}-${index}`}
            item={item}
            index={index % items.length}
          />
        ))}
      </div>
    </div>
  );
}
