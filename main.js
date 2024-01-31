const toolsSection = document.getElementById("tools");
const aboutSection = document.getElementById("about");

// Intersection Observer callback function for tools section
function toolsIntersectionCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the "active" class when the #tools section is in view
      toolsSection.classList.add("activ");
      console.log("Tools section is now in view");
    } else {
      // Remove the "active" class when the #tools section is out of view
      toolsSection.classList.remove("activ");
    }
  });
}

// Intersection Observer callback function for about section
function aboutIntersectionCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the "active-about" class when the #about section is in view
      aboutSection.classList.add("active-about");
      console.log("About section is now in view");
    } else {
      // Remove the "active-about" class when the #about section is out of view
      aboutSection.classList.remove("active-about");
    }
  });
}

// Create Intersection Observers for the sections
const toolsObserver = new IntersectionObserver(toolsIntersectionCallback);
const aboutObserver = new IntersectionObserver(aboutIntersectionCallback);

// Start observing the sections
toolsObserver.observe(toolsSection);
aboutObserver.observe(aboutSection);
