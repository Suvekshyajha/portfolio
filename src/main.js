import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";
const app = document.querySelector("#app");

const roles = [
  "FRONTEND DEVELOPER",
  "AI/ML Enthusiast",
  "MULTIDISCIPLINARY ARTIST",
];

let currentRole = 0;
let currentCharacter = 0;
let isDeleting = false;

app.innerHTML = `
  ${Navbar()}
  <main>
    ${Hero()}
    ${Skills()}
    ${Projects()}
    ${Contact()}

  </main>

   ${Footer()}
`;

const typingElement = document.querySelector("#typing-role");

function typeRole() {
  const role = roles[currentRole];

  if (isDeleting) {
    typingElement.textContent = role.substring(0, currentCharacter - 1);
    currentCharacter -= 1;
  } else {
    typingElement.textContent = role.substring(0, currentCharacter + 1);
    currentCharacter += 1;
  }

  let typingSpeed = isDeleting ? 45 : 90;

  if (!isDeleting && currentCharacter === role.length) {
    typingSpeed = 1600;
    isDeleting = true;
  } else if (isDeleting && currentCharacter === 0) {
    isDeleting = false;
    currentRole = (currentRole + 1) % roles.length;
    typingSpeed = 500;
  }

  window.setTimeout(typeRole, typingSpeed);
}

typeRole();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

// Replace this with your real email address.
const contactEmail = "suvekshajha11@gmail.com";

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const mailtoLink =
    `mailto:${contactEmail}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )}`;

  window.location.href = mailtoLink;

  formStatus.textContent = "Opening your email application...";
});