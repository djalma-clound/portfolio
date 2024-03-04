// Target all section elements
const sections = document.querySelectorAll("section");

// Create a new Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add a class to animate the section when it comes into view
        entry.target.classList.add("animate");
      }
    });
  },
  {
    // Configure the Intersection Observer
    threshold: 0.5, // Trigger when at least 50% of the section is visible
  }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// // Target the .items container
// const items = document.querySelectorAll("section");

// // Create a new Intersection Observer
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Add a class to animate the items when they come into view
//         entry.target.classList.add("animate");
//       }
//     });
//   },
//   {
//     // Configure the Intersection Observer
//     threshold: 0.5, // Trigger when at least 50% of the target is visible
//   }
// );

// // Observe each item
// document.querySelectorAll("items p").forEach((item) => {
//   observer.observe(item);
// });

// // JavaScript to animate the social media section
// window.addEventListener("load", function () {
//   // Select the social media section
//   const socialMedia = document.getElementById("social-media");

//   // Function to fade in the social media section
//   function fadeIn(element) {
//     element.style.opacity = "1";
//   }

//   // Call the fadeIn function after a short delay
//   setTimeout(function () {
//     fadeIn(socialMedia);
//   }, 700); // Adjust the delay as needed
// });

// const social = document.getElementById("social-media");
// const items = document.querySelector(".items");

// social.addEventListener("scroll", () => {
//   const socialRect = social.getBoundingClientRect();
//   const itemsRect = items.getBoundingClientRect();

//   // Check if the items are fully in view vertically
//   if (
//     itemsRect.top >= socialRect.top &&
//     itemsRect.bottom <= socialRect.bottom
//   ) {
//     // If the items are fully in view, do nothing
//     return;
//   }

//   // If the items are not fully in view, scroll them into view
//   if (itemsRect.top < socialRect.top) {
//     // Scroll up
//     items.scrollTop -= socialRect.top - itemsRect.top;
//   } else if (itemsRect.bottom > socialRect.bottom) {
//     // Scroll down
//     items.scrollTop += itemsRect.bottom - socialRect.bottom;
//   }
// });

// // Select the elements to be animated
// const elementsToAnimate = document.querySelectorAll("p");

// // Options for the IntersectionObserver
// const options = {
//   threshold: 0.5, // Trigger when 50% of the element is visible
// };

// // IntersectionObserver callback function
// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Add animation class or styles when the element enters the viewport
//       entry.target.style.opacity = "1";

//       entry.target.style.transition = "top 1s ease-in-out";
//     }
//   });
// };

// // Create an IntersectionObserver instance
// const observer = new IntersectionObserver(callback, options);

// // Observe each element
// elementsToAnimate.forEach((element) => {
//   observer.observe(element);
// });
