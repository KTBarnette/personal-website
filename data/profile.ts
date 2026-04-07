export const profile = {
  name: "Kyle Barnette",
  headline: "Software Engineer | Backend, Full-Stack & Cloud Systems",
  valueStatement:
    "I build backend systems, APIs, and full-stack applications with Python, FastAPI, React, and AWS.",
  currentlyWorkingOn:
    "Contributing to open-source (Deepiri) and building data systems for churn prediction.",
  links: {
    resume: "/Kyle-Barnette-Resume.pdf",
    github: "https://github.com/KTBarnette",
    linkedin: "https://linkedin.com/in/kyle-barnette",
    email: "mailto:Kyle.Barnette7@gmail.com"
  },
  huggingFaceDeployments: [
    {
      name: "churnlab_frontend",
      url: "https://hf.co/spaces/Kbballer3/churnlab_frontend",
      description: "Docker-based Space for the ChurnLab frontend deployment."
    },
    {
      name: "churnlab",
      url: "https://hf.co/spaces/Kbballer3/churnlab",
      description: "Docker-based Space for the ChurnLab backend/service deployment."
    }
  ],
  whatIDo: [
    "Backend APIs and data systems",
    "Full-stack application development",
    "Cloud deployment and debugging",
    "Production-style problem solving"
  ],
  skills: {
    Languages: ["Python", "Java", "C++", "JavaScript", "TypeScript", "C#"],
    Backend: ["FastAPI", "Flask", "Node.js", "REST APIs"],
    Frontend: ["React", "Next.js", "HTML", "CSS"],
    "Cloud / DevOps": ["AWS", "Docker", "Linux", "Git"],
    "Data / ML": ["Pandas", "NumPy", "scikit-learn"]
  },
  experience: [
    {
      role: "Systems Evaluator",
      company: "Outlier AI",
      timeframe: "Recent",
      bullets: [
        "Evaluated model and software-system behavior using structured, repeatable test workflows.",
        "Debugged pipeline issues and documented failure modes with clear recommendations.",
        "Delivered analysis that improved reliability and decision confidence."
      ]
    },
    {
      role: "R&D Contributor",
      company: "Deepiri (Open Source)",
      timeframe: "Current",
      bullets: [
        "Contributed backend and DevOps improvements to an active open-source codebase.",
        "Collaborated with maintainers through issues, pull requests, and peer review.",
        "Focused on practical engineering wins: reliability, deployability, and maintainability."
      ]
    }
  ],
  currentlyBuilding: [
    "Contributing to Deepiri open-source engineering work",
    "Running a churn prediction study using synthetic data",
    "Preparing for AWS Cloud Practitioner certification"
  ],
  engineeringNotes: [
    "Debugging API race conditions under concurrent traffic",
    "Designing reliable retry + idempotency patterns for background jobs",
    "Translating model experiments into production-ready service boundaries"
  ],
  debuggingPhilosophy:
    "I approach bugs by isolating variables, analyzing logs, reproducing issues, and validating fixes systematically."
} as const;
