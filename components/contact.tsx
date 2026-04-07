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
        title="Fast Evaluation Paths"
        subtitle="Reach me directly or review my work through public profiles."
      />

      <div className="flex flex-wrap gap-3">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noreferrer" : undefined}
            className="btn btn-ghost"
          >
            {contact.label}
          </a>
        ))}
      </div>
    </section>
  );
}
