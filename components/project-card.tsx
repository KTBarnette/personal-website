import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-soft">
      <header className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">{project.title}</h3>
        <p className="text-sm text-[var(--muted)] md:text-base">{project.tagline}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((techItem) => (
            <li key={techItem} className="pill">
              {techItem}
            </li>
          ))}
        </ul>
      </header>

      <dl className="mt-5 grid gap-4 text-sm md:grid-cols-2">
        <div>
          <dt className="mb-1 font-semibold text-[var(--ink)]">Problem</dt>
          <dd className="text-[var(--muted)]">{project.problem}</dd>
        </div>
        <div>
          <dt className="mb-1 font-semibold text-[var(--ink)]">Solution</dt>
          <dd className="text-[var(--muted)]">{project.solution}</dd>
        </div>
        <div>
          <dt className="mb-1 font-semibold text-[var(--ink)]">What I Did</dt>
          <dd className="text-[var(--muted)]">{project.contribution}</dd>
        </div>
        <div>
          <dt className="mb-1 font-semibold text-[var(--ink)]">Challenges</dt>
          <dd className="text-[var(--muted)]">{project.challenges}</dd>
        </div>
      </dl>

      <footer className="mt-5 flex flex-wrap gap-2">
        {project.links.map((link, index) => {
          const useExternal = link.external ?? false;
          const className = index === 0 ? "btn btn-primary" : "btn btn-ghost";

          if (useExternal) {
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={className}>
                {link.label}
              </a>
            );
          }

          return (
            <Link key={link.label} href={link.href} className={className}>
              {link.label}
            </Link>
          );
        })}
      </footer>
    </article>
  );
}
