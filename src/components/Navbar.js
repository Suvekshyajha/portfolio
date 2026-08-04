export function Navbar() {
  return `
    <header class="site-header">
      <nav class="navbar" aria-label="Main navigation">
        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a class="nav-contact" href="#contact">
          Let's Talk
        </a>
      </nav>
    </header>
  `;
}