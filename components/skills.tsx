import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export function Skills() {
  return (
    <section className="section-wrap reveal [animation-delay:280ms]">
      <SectionHeading
        eyebrow="Skills"
        title="Clean Stack Overview"
        subtitle="Organized by the tools and domains I use in real project work."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(profile.skills).map(([category, values]) => (
          <article key={category} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <h3 className="font-semibold text-[var(--ink)]">{category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {values.map((value) => (
                <li key={value} className="pill">
                  {value}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
