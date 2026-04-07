import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function WhatIDo() {
  return (
    <section className="section-wrap reveal [animation-delay:120ms]">
      <SectionHeading
        eyebrow="What I Do"
        title="Engineering That Ships and Stays Reliable"
        subtitle="Fast scan view of where I spend my time and where I add the most value."
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {profile.whatIDo.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--ink)] md:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
