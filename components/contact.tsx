import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  const contacts: Array<{ label: string; href: string; external?: boolean }> = [
    { label: "Email", href: profile.links.email },
    { label: "LinkedIn", href: profile.links.linkedin, external: true },
    { label: "GitHub", href: profile.links.github, external: true }
  ];

  return (
    <section className="section-wrap reveal [animation-delay:600ms]">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Useful"
        subtitle="If you're hiring or building, I can contribute quickly on backend APIs, full-stack delivery, and production debugging."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <h3 className="text-base font-semibold text-[var(--ink)]">Availability</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{profile.contactNotes.availability}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{profile.contactNotes.responseTime}</p>
        </article>

        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <h3 className="text-base font-semibold text-[var(--ink)]">Collaboration Fit</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            {profile.collaborationHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {contacts.map((contact, index) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noreferrer" : undefined}
            className={index === 0 ? "btn btn-primary" : "btn btn-ghost"}
          >
            {contact.label}
          </a>
        ))}
      </div>
    </section>
  );
}
