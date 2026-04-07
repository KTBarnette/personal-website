import { Contact } from "@/components/contact";
import { CurrentlyBuilding } from "@/components/currently-building";
import { Experience } from "@/components/experience";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { HuggingFaceDeployments } from "@/components/huggingface-deployments";
import { ResumeCta } from "@/components/resume-cta";
import { Skills } from "@/components/skills";
import { WhatIDo } from "@/components/what-i-do";

export default function HomePage() {
  return (
    <main className="pb-24 pt-8 md:pt-12">
      <div className="site-shell flex flex-col gap-6 md:gap-7">
        <Hero />
        <WhatIDo />
        <FeaturedProjects />
        <HuggingFaceDeployments />
        <Skills />
        <Experience />
        <CurrentlyBuilding />
        <ResumeCta />
        <Contact />
      </div>
    </main>
  );
}
