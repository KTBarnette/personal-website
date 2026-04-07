import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export function Experience() {
  return (
    <section className="section-wrap reveal [animation-delay:360ms]">
      <SectionHeading eyebrow="Experience" title="Recent Work" subtitle="Short, direct highlights with production impact." />

      <div className="grid gap-3 md:grid-cols-2">
        {profile.experience.map((entry) => (
          <article key={entry.company} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--muted)]">{entry.timeframe}</p>
            <h3 className="mt-1 text-lg font-semibold text-[var(--ink)]">{entry.role}</h3>
            <p className="text-sm text-[var(--accent-strong)]">{entry.company}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
