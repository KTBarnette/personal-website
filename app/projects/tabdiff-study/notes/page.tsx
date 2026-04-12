import Link from "next/link";

export const metadata = {
  title: "TabDiff Research Notes | Kyle Barnette",
  description:
    "Independent Study: TabDiff — Research-backed engineering for synthetic tabular data generation. Notes on problem framing, solution, methodology, and insights."
};

export default function TabDiffNotesPage() {
  return (
    <main className="pb-24 pt-8 md:pt-12">
      <div className="site-shell space-y-6">
        <header className="section-wrap">
          <p className="pill inline-flex">Research Notes</p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--ink)] md:text-4xl">Independent Study: TabDiff</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Research-backed engineering for synthetic tabular data generation
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">Stack: Python • NumPy • Pandas • Jupyter • scikit-learn</p>
        </header>

        <section className="section-wrap grid gap-4">
          <article>
            <h2 className="text-lg font-semibold text-[var(--ink)]">Problem</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Real-world tabular datasets are often limited by class imbalance, sparsity, and privacy constraints,
              making it difficult to perform reliable experimentation—especially for churn prediction tasks where
              minority classes are underrepresented.
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Additionally, naïve resampling or duplication techniques can introduce overfitting and data leakage,
              reducing the validity of downstream models.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-[var(--ink)]">Solution</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Designed and implemented a TabDiff-inspired synthetic data pipeline, leveraging recent research in
              generative modeling for tabular data (e.g., diffusion models, CTGAN, TVAE). The system generates
              synthetic records and evaluates them using both:
            </p>
            <ul className="mt-2 list-disc pl-6 text-sm text-[var(--muted)]">
              <li>Statistical fidelity (distributional similarity to real data)</li>
              <li>Model utility (impact on downstream predictive performance)</li>
            </ul>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Benchmarked synthetic datasets against real baselines using classification metrics such as AUC, PR-AUC,
              F1, and recall, with a focus on improving minority-class performance.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-[var(--ink)]">What I Did</h2>
            <ul className="mt-2 list-disc pl-6 text-sm text-[var(--muted)]">
              <li>
                Designed the experimental framework, including train/test splits and leakage-safe evaluation pipelines
              </li>
              <li>Implemented data preprocessing and feature handling for mixed-type tabular data</li>
              <li>
                Built scripts to compare real vs synthetic distributions and visualize embedding behavior (PCA / UMAP)
              </li>
              <li>Evaluated model performance across datasets to quantify the utility–fidelity tradeoff</li>
              <li>Documented findings and engineering decisions in a structured research report (ACM-style)</li>
            </ul>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-[var(--ink)]">Challenges</h2>
            <ul className="mt-2 list-disc pl-6 text-sm text-[var(--muted)]">
              <li>Preventing data leakage while preserving meaningful statistical structure in generated data</li>
              <li>Balancing fidelity vs utility — highly realistic data does not always improve model performance</li>
              <li>Handling mode collapse and instability in generative approaches for tabular domains</li>
              <li>Ensuring synthetic data remained useful for experimentation without overfitting to training artifacts</li>
            </ul>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-[var(--ink)]">Key Insight</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Synthetic data is not inherently valuable—its effectiveness depends on how well it improves downstream
              model behavior, not just how closely it matches the original distribution.
            </p>
          </article>
        </section>

        <div className="section-wrap flex flex-wrap gap-3">
          <Link href="/projects/tabdiff-study" className="btn btn-ghost">
            Back to Case Study
          </Link>
          <Link href="/projects" className="btn btn-primary">
            All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
