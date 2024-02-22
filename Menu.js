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
const img = document.getElementById("img1");
const img2 = document.getElementById("img2");
img.addEventListener("click", ()=>{
    window.open("https://claricehcleaning.com", "_blank");
})
img2.addEventListener("click", () => {
  window.open("https://youtube.com", "_blank");
});
// const imgs = document.querySelectorAll(" #img1, #img2");
// imgs.forEach((item) => {
//   item.addEventListener("click", () => {
//     if (imgs) {
//       window.open("https://google.com", "_blank");
//     }
//   });
// });
// imgs.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     if (event.target === item) {
//       window.open("https://claricehcleaning.com", "_blank");
//     }
//   });
// });
