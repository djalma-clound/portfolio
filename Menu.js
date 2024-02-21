const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const navigation = document.getElementById("nav");
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
