export function Projects() {
  const medicalRagRepo =
    "https://github.com/Suvekshyajha/medical_report_qa";

  const fakeNewsRepo =
    "https://github.com/Suvekshyajha/fake_news_prediction";

  return `
    <section class="projects section" id="projects">
      <div class="section-heading section-heading-row">
        <div>
          <p class="eyebrow">— SELECTED WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <span class="section-counter">02 / 06</span>
      </div>

      <div class="project-grid">
        <article class="project-card">
          <div class="project-image project-image-one">
            <span>MEDICAL RAG</span>
          </div>

          <div class="project-card-content">
            <p class="project-label">01 / FEATURED PROJECT</p>

            <h3>Medical Report Q&amp;A System</h3>

            <p>
              A production-grade RAG system that answers plain-language
              questions against uploaded medical PDFs with cited,
              context-grounded responses — dual-vector-store retrieval over
              50,000+ chunks from 4,000 transcripts, cutting response latency
              by 30% and improving accuracy by 20%.
            </p>

            <a
              class="github-link"
              href="${medicalRagRepo}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Medical Report Q&A System GitHub repository"
              title="View GitHub repository"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
                />
              </svg>
            </a>
          </div>
        </article>

        <article class="project-card">
          <div class="project-image project-image-two">
            <span>FAKE NEWS DETECTION</span>
          </div>

          <div class="project-card-content">
            <p class="project-label">02 / FEATURED PROJECT</p>

            <h3>Fake News Detection with NLP &amp; Ensemble Learning</h3>

            <p>
              An automated NLP and ensemble-learning pipeline built as a
              scalable first-pass filter for editorial fact-checking —
              combining TF-IDF, sentiment features, and voting ensembles
              including Logistic Regression, Random Forest, and XGBoost to hit
              F1 = 0.88 and AUC = 0.95.
            </p>

            <a
              class="github-link"
              href="${fakeNewsRepo}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Fake News Detection GitHub repository"
              title="View GitHub repository"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  `;
}