import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Project Details | Kyle Barnette"
};

export default function ProjectsPage() {
  return (
    <main className="pb-24 pt-8 md:pt-12">
      <div className="site-shell space-y-5">
        <header className="section-wrap">
          <p className="pill inline-flex">Project Index</p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--ink)] md:text-4xl">Engineering Project Details</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Interview-friendly breakdown of problem framing, implementation choices, stack, ownership, and tradeoffs.
          </p>
          <Link href="/" className="btn btn-ghost mt-4">
            Back to Home
          </Link>
        </header>

        <section className="grid gap-3">
          {projects.map((project) => (
            <article key={project.slug} className="section-wrap">
              <h2 className="text-xl font-semibold text-[var(--ink)]">{project.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{project.tagline}</p>
              <Link href={`/projects/${project.slug}`} className="btn btn-primary mt-4">
                Open Case Study
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
