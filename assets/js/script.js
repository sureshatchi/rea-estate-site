// Toggle mobile navigation
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.createElement("button");
  navToggle.innerText = "☰ Menu";
  navToggle.classList.add("nav-toggle");
  document.querySelector("nav").prepend(navToggle);

  navToggle.addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("open");
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
