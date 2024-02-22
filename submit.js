const form = document.querySelector("#form");
const nameInput = document.getElementById("name"); // No '#' needed
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const nameError = document.querySelector("#nameError"); // Corrected ID
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError"); // Corrected ID
const messageError = document.querySelector("#messageError");

form.addEventListener("submit", function (event) {
  let isValid = true;

  // Validate name field
  if (nameInput.value === "") {
    nameError.textContent = "Please enter your name";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email field
  if (emailInput.value === "") {
    emailError.textContent = "Please enter your email";
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate subject field
  if (subjectInput.value === "") {
    subjectError.textContent = "Please enter a subject";
    isValid = false;
  } else {
    subjectError.textContent = "";
  }

  // Validate message field
  if (messageInput.value === "") {
    messageError.textContent = "Please enter a message";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  // If the form is not valid, prevent submission
  if (!isValid) {
    event.preventDefault();
  }
});

function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
