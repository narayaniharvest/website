// ===============================
// Auto‑update footer year
// ===============================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===============================
// Mobile Menu Toggle
// ===============================

// Create toggle button dynamically (keeps HTML clean)
const nav = document.querySelector("nav");
if (nav) {
  const toggleBtn = document.createElement("div");
  toggleBtn.classList.add("menu-toggle");
  toggleBtn.innerHTML = "&#9776;"; // hamburger icon
  nav.parentNode.insertBefore(toggleBtn, nav);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
