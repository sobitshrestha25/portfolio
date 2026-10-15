document.documentElement.classList.add("js");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Highlight the nav link of the section on screen
const links = [...nav.querySelectorAll("a")];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

// Test report: checks appear one by one, then the total
const items = document.querySelectorAll("#report li");
const total = document.getElementById("reportTotal");
const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (calm) {
  items.forEach((li) => li.classList.add("show"));
  total.classList.add("show");
} else {
  items.forEach((li, i) => setTimeout(() => li.classList.add("show"), 500 + i * 350));
  setTimeout(() => total.classList.add("show"), 500 + items.length * 350 + 200);
}
