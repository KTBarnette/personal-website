import { profile } from "@/data/profile";

const primaryActions: Array<{ label: string; href: string; external?: boolean; download?: boolean }> = [
  { label: "Resume", href: profile.links.resume, download: true },
  { label: "GitHub", href: profile.links.github, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, external: true },
  { label: "Contact", href: profile.links.email }
];

export function Hero() {
  const updatedLabel = "Updated April 2026";

  return (
    <section className="section-wrap reveal">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          Active Right Now
        </span>
        <span>{updatedLabel}</span>
      </div>

      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">Kyle Barnette</p>
      <h1 className="mt-2 max-w-4xl text-3xl font-semibold leading-tight text-[var(--ink)] md:text-5xl">
        {profile.headline}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{profile.valueStatement}</p>

      <p className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--ink)] md:text-base">
        <span className="font-semibold text-[var(--accent-strong)]">Currently working on:</span>{" "}
        {profile.currentlyWorkingOn}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {primaryActions.map((action, index) => {
          const isPrimary = index === 0;

          return (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              download={action.download || undefined}
              className={isPrimary ? "btn btn-primary" : "btn btn-ghost"}
            >
              {action.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
