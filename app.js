const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul ");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Modal display

// Get the modal
const modal = document.querySelector("#myModal");

// Get the button that opens the modal
const btn = document.querySelector(".programContent .btn");

// When the user clicks on the button, open the modal
btn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});

// Get the <span> element that closes the modal
const span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
