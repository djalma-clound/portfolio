// Select the elements to be animated
const elementsToAnimate = document.querySelectorAll("p");

// Options for the IntersectionObserver
const options = {
  threshold: 0.5, // Trigger when 50% of the element is visible
};

// IntersectionObserver callback function
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation class or styles when the element enters the viewport
      entry.target.style.opacity = "1";
    
      entry.target.style.transition = "top 1s ease-in-out";
    }
  });
};


// Create an IntersectionObserver instance
const observer = new IntersectionObserver(callback, options);

// Observe each element
elementsToAnimate.forEach((element) => {
  observer.observe(element);
});

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Add a class to the body to trigger CSS animation
//       document.body.classList.add("slide-in");
//       // Stop observing once the element is in view
//       observer.unobserve(entry.target);
//     }
//   });
// });

// // Observe the body element
// observer.observe(document.body);
// // Add the class to the body when the DOM content is loaded
// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.querySelector("body");
//   body.classList.add("slide-in");
// });
