// Scroll Animations
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight * 0.75) {
          section.classList.add("visible");
      }
  });
});

// Fix Navbar and Offset Anchor Links
const navbarHeight = document.querySelector(".navbar").offsetHeight;
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
          top: targetSection.offsetTop - navbarHeight,
          behavior: "smooth",
      });
  });
});

// Entry Animation for Experience Section
document.addEventListener("scroll", () => {
  const experienceSection = document.querySelector(".experience-container");
  const rect = experienceSection.getBoundingClientRect();
  if (rect.top >= 0 && rect.top <= window.innerHeight * 0.75) {
      experienceSection.classList.add("animate");
  }
});

// Add Animation CSS Class
const container = document.querySelector(".experience-container");
container.classList.add("hidden");

