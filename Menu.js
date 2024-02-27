const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const navigation = document.getElementById("nav");
const button = document.getElementById("button");
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
const img = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
img.addEventListener("click", ()=>{
    window.open("https://claricehcleaning.com", "_blank");
})
img2.addEventListener("click", () => {
  window.open("https://www.scentedcleaning.com", "_blank");
});
img3.addEventListener("click", () => {
  window.open("https://djalma-clound.github.io/portfolio/index.html", "_blank");
});

button.addEventListener("click", ()=>{
  window.location.href = "#contact";
})