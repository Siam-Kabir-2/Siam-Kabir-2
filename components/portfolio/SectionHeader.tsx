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
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.02em] sm:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 font-display text-lg italic text-muted-foreground sm:text-xl">{subtitle}</p>
      )}
      <div className="mx-auto mt-8 h-px w-12 bg-primary/40" />
    </div>
  );
}
