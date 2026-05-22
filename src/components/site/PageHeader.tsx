interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-secondary/30">
      <div className="container-prose py-20 md:py-28">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="display text-5xl md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
      />
    </section>
  );
}
