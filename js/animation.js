const jobs = document.querySelectorAll("#features div");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a class to the element to trigger CSS animation
      entry.target.classList.add("slide-in");
      // Stop observing once the element is in view
      observer.unobserve(entry.target);
    }
  });
});

jobs.forEach((job) => {
  observer.observe(job);
});
const job1 = document.getElementById("first");
job1.addEventListener("click", () => {
  window.open("https://claricehcleaning.com", "_blank");
});
const job2 = document.getElementById("second");
job2.addEventListener("click", () => {
  window.open("https://djalma-clound.github.io/portfolio/index.html", "_blank");
});
const jobs = document.querySelectorAll("#jobs div");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a class to the element to trigger CSS animation
      entry.target.classList.add("slide-in");
      // Stop observing once the element is in view
      observer.unobserve(entry.target);
    }
  });
});

jobs.forEach((job) => {
  observer.observe(job);
});
const job1 = document.getElementById("first");
job1.addEventListener("click", () => {
  window.open("https://claricehcleaning.com", "_blank");
});
const job2 = document.getElementById("second");
job2.addEventListener("click", () => {
  window.open("https://djalma-clound.github.io/portfolio/index.html", "_blank");
});

const portugues = document.getElementById("portugues");
portugues.addEventListener("click", () => {
  window.location.href = "portugues.html";
});

const english = document.getElementById("english");
english.addEventListener("click", () => {
  window.location.href = "index.html";
  console.log("clicked");
});
