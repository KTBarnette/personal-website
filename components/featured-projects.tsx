import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="section-wrap reveal [animation-delay:200ms]">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Real Systems and Production-Style Engineering"
        subtitle="Each project highlights a concrete problem, implementation choices, stack, and delivery tradeoffs."
      />

      <div className="grid gap-4">
        {projects.slice(0, 5).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
