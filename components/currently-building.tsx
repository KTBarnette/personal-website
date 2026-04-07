import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export function CurrentlyBuilding() {
  return (
    <section className="section-wrap reveal [animation-delay:440ms]">
      <SectionHeading
        eyebrow="Currently Building"
        title="Active Right Now"
        subtitle="This section keeps the portfolio alive and shows current momentum."
      />

      <ul className="space-y-2 text-sm text-[var(--muted)] md:text-base">
        {profile.currentlyBuilding.map((item) => (
          <li key={item} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <h3 className="text-base font-semibold text-[var(--ink)]">Debugging Philosophy</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{profile.debuggingPhilosophy}</p>
        </article>

        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <h3 className="text-base font-semibold text-[var(--ink)]">Engineering Notes</h3>
          <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
            {profile.engineeringNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
