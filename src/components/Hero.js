export function Hero() {
  return `
    <section class="hero section" id="home">
      

      <div class="hero-content">
        <div class="hero-copy">
          <p class="eyebrow">— AI/ML ENTHUSIAST</p>

          <h1 class="hero-title">
            <span>SUVEKSHYA</span>
            <span class="outlined-name">JHA</span>
          </h1>

          <p class="role-line">
            / <span id="typing-role"></span><span class="cursor">_</span>
          </p>

          <p class="hero-description">
            AI/ML researcher, engineer and multidisciplinary artist building
            intelligent systems and visual stories from Kathmandu.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#projects">
              View Projects
            </a>

            <a
              class="button button-secondary"
              href="/suvresume.pdf"
              download="suvresume.pdf"
            >
              ↓ Download CV
            </a>
          </div>

          <div class="social-links">
            <a
              href="https://github.com/Suvekshyajha"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/suvekshya-jha-881331368/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div class="hero-visual" aria-label="Decorative profile illustration">
          <div class="hero-halo"></div>

          <div class="profile-placeholder">
            <span>YOUR</span>
            <span>IMAGE</span>
          </div>

          <span class="visual-label visual-label-bottom">
            
          </span>
        </div>
      </div>
    </section>
  `;
}