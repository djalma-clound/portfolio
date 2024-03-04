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
