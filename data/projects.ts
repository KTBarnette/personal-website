export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  contribution: string;
  challenges: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "churnlab",
    title: "ChurnLab",
    tagline: "Flagship data + backend system for churn prediction experimentation",
    problem:
      "Retention teams need fast, testable signals for which customers are likely to churn, but raw event data is noisy and difficult to operationalize.",
    solution:
      "Built a backend-driven analysis platform that ingests customer-behavior data, engineers features, and exposes prediction and reporting endpoints for downstream tools.",
    tech: ["Python", "FastAPI", "Pandas", "scikit-learn", "PostgreSQL", "Docker", "AWS"],
    contribution:
      "Designed API contracts, implemented feature-generation workflows, and integrated model output into a usable service layer for product-facing decisions.",
    challenges:
      "Balanced model iteration speed with data quality guarantees and built repeatable validation checks to avoid silent training regressions.",
    links: [
      { label: "Case Study", href: "/projects/churnlab" },
      { label: "Repository", href: "https://github.com/KTBarnette/SaaS-Churn-Prediction", external: true }
    ]
  },
  {
    slug: "tabdiff-study",
    title: "Independent Study: TabDiff",
    tagline: "Research-backed engineering for synthetic tabular data generation",
    problem:
      "Real datasets can be sparse or constrained, making it hard to run safe, repeatable churn experiments at scale.",
    solution:
      "Implemented and tested a TabDiff-inspired workflow to generate synthetic tabular records and benchmarked downstream prediction behavior against baseline datasets.",
    tech: ["Python", "NumPy", "Pandas", "Jupyter", "scikit-learn"],
    contribution:
      "Framed the experiment design, implemented preprocessing and evaluation scripts, and documented tradeoffs between fidelity and utility.",
    challenges:
      "Controlled for data leakage risk while keeping synthetic outputs statistically meaningful enough for practical experimentation.",
    links: [
      { label: "Case Study", href: "/projects/tabdiff-study" },
      { label: "Research Notes", href: "https://github.com/KTBarnette?tab=repositories", external: true }
    ]
  },
  {
    slug: "deepiri-contributions",
    title: "Deepiri (Open Source)",
    tagline: "Production-minded collaboration in a real team codebase",
    problem:
      "Open-source platforms need reliable backend and infrastructure improvements that support active contributors and real users.",
    solution:
      "Contributed backend and deployment-facing updates that improved maintainability and made development workflows smoother for contributors.",
    tech: ["Python", "FastAPI", "Docker", "GitHub Actions", "Linux"],
    contribution:
      "Delivered scoped fixes and enhancements through PRs, coordinated with maintainers, and adapted implementation details based on review feedback.",
    challenges:
      "Worked within existing architecture constraints and maintained backward compatibility while improving core behavior.",
    links: [
      { label: "Case Study", href: "/projects/deepiri-contributions" },
      { label: "Open Source Repo", href: "https://github.com/deepiri", external: true }
    ]
  },
  {
    slug: "rubiks-system",
    title: "Rubik's Cube Solver Project",
    tagline: "Team-based system design and algorithmic problem solving",
    problem:
      "The challenge was to translate cube-solving logic into a clear, testable software architecture that team members could build on in parallel.",
    solution:
      "Built a modular solver implementation with predictable state transitions, move validation, and collaboration-friendly code boundaries.",
    tech: ["Java", "Data Structures", "Unit Testing", "Git"],
    contribution:
      "Owned critical logic paths, improved solver correctness with test cases, and helped align architecture decisions across teammates.",
    challenges:
      "Debugging edge-case move sequences required systematic state inspection and careful handling of orientation rules.",
    links: [
      { label: "Case Study", href: "/projects/rubiks-system" },
      { label: "Repository", href: "https://github.com/KTBarnette/Java-Chess-Game", external: true }
    ]
  },
  {
    slug: "service-api",
    title: "Backend Service API",
    tagline: "Production-style CRUD and service orchestration backend",
    problem:
      "Many internal tools need stable APIs with clear contracts, validation, and observability, not just quick demo endpoints.",
    solution:
      "Built a service-oriented API with authentication, structured error handling, and deployment-ready configuration for staging and production.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "AWS", "REST"],
    contribution:
      "Implemented endpoint logic, schema validation, and health/diagnostic endpoints to support reliable operations.",
    challenges:
      "Designed for backwards-compatible API evolution while improving performance on heavier query paths.",
    links: [
      { label: "Case Study", href: "/projects/service-api" },
      { label: "Repository", href: "https://github.com/KTBarnette?tab=repositories", external: true }
    ]
  }
];
