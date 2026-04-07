type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-5 space-y-2">
      {eyebrow ? <p className="pill inline-flex">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] md:text-3xl">{title}</h2>
      {subtitle ? <p className="max-w-3xl text-sm text-[var(--muted)] md:text-base">{subtitle}</p> : null}
    </header>
  );
}
