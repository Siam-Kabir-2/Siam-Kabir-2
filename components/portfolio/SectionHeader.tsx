export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[clamp(1.875rem,5.5vw,2.75rem)] font-medium tracking-[-0.02em] sm:mt-4">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-display text-base italic text-muted-foreground sm:mt-5 sm:text-lg md:text-xl">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-px w-12 bg-primary/40 md:mt-8" />
    </div>
  );
}
