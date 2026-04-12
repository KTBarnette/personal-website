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
      timeframe: "2025 - 2026",
      bullets: [
        "Evaluated model and software-system behavior using structured, repeatable testing workflows.",
        "Investigated pipeline failures, reproduced edge cases, and documented root causes for faster remediation.",
        "Delivered reliability-focused analysis that improved release confidence for downstream stakeholders."
      ]
    },
    {
      role: "R&D Contributor",
      company: "Deepiri (Open Source)",
      timeframe: "2025 - Present",
      bullets: [
        "Contributed backend and DevOps improvements in an active open-source codebase.",
        "Worked through issues and PR review loops with maintainers to ship stable, maintainable changes.",
        "Improved deployment reliability and developer ergonomics through practical engineering refinements."
      ]
    }
  ],
  collaborationHighlights: [
    "Open to backend, API, and full-stack engineering opportunities",
    "Comfortable joining existing teams and ramping quickly on production codebases",
    "Best fit: projects that value reliability, ownership, and clear communication"
  ],
  contactNotes: {
    availability: "Actively open to interviews, contract work, and full-time software engineering roles.",
    responseTime: "Typical response time: within 24 hours."
  },
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
