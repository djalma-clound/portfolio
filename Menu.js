const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const navigation = document.getElementById("nav");
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

proj1.addEventListener("click", () => {
  window.open("https://www.claricehcleaning.com", "_blank");
});
proj2.addEventListener("click", () => {
 window.open("https://www.scentedcleaning.com", "_blank");
  
});

