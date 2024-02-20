const header = document.querySelector("#header");
const logo = document.querySelector("logo");
const menuA = document.querySelectorAll("menu a");
const bars = document.getElementById("hamburger");

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    logo.style.color = "white";
    header.style.backgroundColor = "black";
    bars.style.backgroundColor = "white";

    menuA.forEach(function (item) {
      item.style.color = "white";
    });
  } else {
    // Scrolling down
    logo.style.color = "red";
    bars.style.backgroundColor = "red";

    header.style.backgroundColor = "white";
    menuA.forEach(function (item) {
      item.style.color = "red";
    });
  }
  prevScrollPos = currentScrollPos;
};
const h1 = document.getElementById("h1");
h1.addEventListener("click",()=>{
  window.location.href = "index.html";
})