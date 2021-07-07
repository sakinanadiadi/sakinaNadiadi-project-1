const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul ");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// // Closing the hamburger menu
// const navLink = document.querySelectorAll("nav li");

// navLink.forEach((n) => n.addEventListener("click", closeMenu));

// function closeMenu() {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }
