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
const proj1 = document.getElementById("proj1");
const proj2 = document.getElementById("proj2");
const proj3 = document.getElementById("proj3");

proj1.addEventListener("click", () => {
  window.open("https://www.claricehcleaning.com", "_blank");
});
proj2.addEventListener("click", () => {
 window.open("https://www.scentedcleaning.com", "_blank");
  
});
proj3.addEventListener("click", () => {
  window.open("https://low-price-warehouse.company.site/", "_blank");
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("section");

  function checkViewport() {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const bounding = element.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        elements.classList.add("active");
      }
    }
  }

  const learMore = document.getElementById("learn-more");
  learMore.addEventListener("click", ()=>{
    window.location.href = "about.html";
  })
  // Check initially in case some elements are already in view
  checkViewport();

  // Listen for scroll events
  window.addEventListener("scroll", checkViewport);
});