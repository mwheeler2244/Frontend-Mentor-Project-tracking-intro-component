const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const closeNav = document.querySelector(".mobile__close");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  closeNav.classList.toggle("active");
  hamburger.classList.toggle("active");
});

closeNav.addEventListener("click", () => {
  navLinks.classList.remove("active");
  closeNav.classList.remove("active");
  hamburger.classList.remove("active");
});
