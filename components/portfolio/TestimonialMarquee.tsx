"use client";

export type TestimonialItem = {
  name: string;
  role: string;
  context: string;
  quote: string;
};

function TestimonialCard({ item, index }: { item: TestimonialItem; index: number }) {
  return (
    <article className="group relative flex min-h-0 w-[min(78vw,340px)] shrink-0 flex-col overflow-hidden rounded-xl border border-border/70 bg-card/45 shadow-[var(--shadow-card)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:bg-card/60 hover:shadow-[var(--shadow-elegant)] sm:min-h-[340px] sm:w-[440px] sm:rounded-2xl">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/6 blur-2xl transition-all duration-500 group-hover:bg-primary/10 sm:h-32 sm:w-32"
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col p-4 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-primary/90 sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.18em]">
            {item.context}
          </span>
          <span className="font-mono text-[10px] tabular-nums tracking-[0.14em] text-muted-foreground/60 sm:text-[11px]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <blockquote className="relative mt-4 flex flex-1 flex-col pl-0.5 sm:mt-8 sm:pl-1">
          <span
            className="pointer-events-none absolute -left-0.5 -top-3 font-display text-[2.25rem] leading-none text-primary/15 transition-colors duration-500 group-hover:text-primary/25 sm:-left-1 sm:-top-5 sm:text-[3.25rem]"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="relative line-clamp-5 font-display text-[0.95rem] italic leading-[1.55] text-foreground/90 sm:line-clamp-none sm:text-[1.125rem] sm:leading-[1.74]">
            {item.quote}
          </p>
        </blockquote>

        <footer className="mt-4 flex items-center gap-3 border-t border-border/60 pt-3.5 sm:mt-8 sm:gap-4 sm:pt-5">
          <div className="h-8 w-px shrink-0 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent sm:h-10" />
          <div className="min-w-0">
            <p className="font-display text-[1.05rem] font-medium tracking-[-0.015em] text-foreground sm:text-[1.2rem]">
              {item.name}
            </p>
            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:mt-1 sm:text-[10px] sm:tracking-[0.22em]">
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
