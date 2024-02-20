const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuA = document.querySelectorAll("a");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const header = document.querySelector("#header");

let prevScrollPos = window.pageYOffset;

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    nav.classList.add("activ");
  } else {
    nav.classList.remove("activ");
  }
});

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    logo.style.color = "blue";
    header.style.backgroundColor = "lightgray";
    hamburger.style.backgroundColor = "red";
    menu.style.backgroundColor = "";

    menuA.forEach(function (item) {
      item.style.color = "blue";
    });
  } else {
    // Scrolling down
    logo.style.color = "black";
    hamburger.style.backgroundColor = "red";
    // menu.style.backgroundColor = "white";

    header.style.backgroundColor = "white";
    menuA.forEach(function (item) {
      item.style.color = "black";
    });
  }
  if (window.pageYOffset >= 600) {
    menuA.style.Color = "red";
    // Your code here
  }

  prevScrollPos = currentScrollPos;
};

// Function to toggle hamburger color
function toggleHamburgerColor(isWhite) {
  if (isWhite) {
    hamburger.classList.add("white");
  } else {
    hamburger.classList.remove("white");
  }
}

// Example usage: toggle hamburger color to white
toggleHamburgerColor(true);

menuA.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.remove("active");
    nav.classList.remove("activ");
  });
});
const about = document.getElementById("more-info");
about.addEventListener("click", () => {
  window.location.href = "about.html";
});
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // You can add logic to handle the form submission here
    alert("Form submitted!"); // Example alert
  });
});
const h1 = document.getElementById("h1");
h1.addEventListener("click", () => {
  window.location.href = "index.html";
});