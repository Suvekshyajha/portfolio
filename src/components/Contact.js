export function Contact() {
  return `
    <section class="contact section" id="contact">
      <div class="section-heading">
        <p class="eyebrow">— CONTACT</p>
        <h2>Get in Touch</h2>
      </div>

      <div class="contact-grid">
        <form class="contact-form" id="contact-form">
          <p class="form-title">Send a Message</p>

          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />

          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label for="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What would you like to discuss?"
            required
          />

          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button class="button button-primary" type="submit">
            Send Message
          </button>

          <p class="form-status" id="form-status"></p>
        </form>

        <div class="contact-details">
          <div class="contact-detail">
            <span>Email</span>
            <a href="mailto:suvekshajha11@gmail.com">
              suvekshajha11@gmail.com
            </a>
          </div>

          <div class="contact-detail">
            <span>Location</span>
            <p>Kathmandu, Nepal</p>
          </div>

          <div class="contact-detail">
            <span>Phone</span>
            <p>+977 9865366077</p>
          </div>

          <div class="contact-socials">
            <span>Connect with Me</span>

            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/suvekshya-jha-881331368/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Suvekshyajha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div class="availability-note">
            <span>AVAILABLE</span>

            <p>
              Open to internships, research collaborations, and interesting problems — I respond within a day.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}