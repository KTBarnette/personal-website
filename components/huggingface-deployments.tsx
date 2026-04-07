import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export function HuggingFaceDeployments() {
  return (
    <section className="section-wrap reveal [animation-delay:240ms]">
      <SectionHeading
        eyebrow="Hugging Face Deployments"
        title="Live Deployments"
        subtitle="Active Spaces that are currently deployed and accessible."
      />

      <div className="grid gap-3 md:grid-cols-2">
        {profile.huggingFaceDeployments.map((deployment) => (
          <article key={deployment.name} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <h3 className="text-base font-semibold text-[var(--ink)]">{deployment.name}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{deployment.description}</p>
            <a href={deployment.url} target="_blank" rel="noreferrer" className="btn btn-ghost mt-3">
              Open Space
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
