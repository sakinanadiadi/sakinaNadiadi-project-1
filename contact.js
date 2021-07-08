// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul ");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Form Submission

// Selecting the form
const form = document.querySelector("form");

// Adding the event listner to the form on the submit button
form.addEventListener("submit", function (event) {
  // Preventing from the refresh
  event.preventDefault();

  //   Selecting the input and displaying the alert message
  const input = document.querySelector("#name");
  const inputVal = input.value;
  if (inputVal) {
    alert(
      ` ${inputVal}! Thank you choosing Fun Place, you will be contacted shortly`
    );
  }

  //   Selecting the email input
  const email = document.querySelector("#email");

  //   Selecting the message input

  const message = document.querySelector("#message");
  // clearing the input for name, email and message field
  input.value = "";
  email.value = "";
  message.value = "";
});
