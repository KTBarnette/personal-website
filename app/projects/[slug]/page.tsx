import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-24 pt-8 md:pt-12">
      <div className="site-shell space-y-5">
        <header className="section-wrap">
          <p className="pill inline-flex">Case Study</p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--ink)] md:text-4xl">{project.title}</h1>
          <p className="mt-3 text-[var(--muted)]">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </header>

        <section className="section-wrap grid gap-4 md:grid-cols-2">
          <article>
            <h2 className="text-lg font-semibold text-[var(--ink)]">Problem</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{project.problem}</p>
          </article>
          <article>
            <h2 className="text-lg font-semibold text-[var(--ink)]">Solution</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{project.solution}</p>
          </article>
          <article>
            <h2 className="text-lg font-semibold text-[var(--ink)]">What I Did</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{project.contribution}</p>
          </article>
          <article>
            <h2 className="text-lg font-semibold text-[var(--ink)]">Challenges</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{project.challenges}</p>
          </article>
        </section>

        <section className="section-wrap">
          <h2 className="text-lg font-semibold text-[var(--ink)]">Links</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.links.map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className="btn btn-ghost">
                  {link.label}
                </Link>
              )
            )}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className="btn btn-ghost">
            All Projects
          </Link>
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
