import { profile } from "@/data/profile";

export function ResumeCta() {
  return (
    <section className="section-wrap reveal [animation-delay:520ms]">
      <div className="flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[var(--ink)]">Resume</h2>
          <p className="text-sm text-[var(--muted)]">Download a one-page summary of experience, projects, and technical stack.</p>
        </div>
        <a href={profile.links.resume} download className="btn btn-primary w-fit">
          Download Resume
        </a>
      </div>
    </section>
  );
}
