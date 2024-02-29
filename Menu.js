const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const navigation = document.getElementById("nav");
const header = document.querySelector("header");
const logo = document.getElementById("logo");
const button = document.querySelector("#button");
bars.addEventListener("click", () => {
  navigation.classList.toggle("activ");
  menu.classList.toggle("active");
  const nav = document.querySelectorAll("nav a");
  nav.forEach(item => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      
    });
  });
});
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    logo.style.color = "white";
    header.style.backgroundColor = "lightgreen";
    bars.style.backgroundColor = "white";

    menu.forEach(function (item) {
      item.style.color = "white";
    });
  } else {
    // Scrolling down
    logo.style.color = "red";
    bars.style.backgroundColor = "red";

    header.style.backgroundColor = "white";
    menu.forEach(function (item) {
      item.style.color = "red";
    });
  }
  prevScrollPos = currentScrollPos;
};
const proj1 = document.getElementById("proj1");
const proj2 = document.getElementById("proj2");

proj1.addEventListener("click", () => {
  window.open("https://www.claricehcleaning.com", "_blank");
});
proj2.addEventListener("click", () => {
 window.open("https://www.scentedcleaning.com", "_blank");
  
});

