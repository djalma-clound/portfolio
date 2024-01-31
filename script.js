// get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');
const header = document.querySelector("header");


// add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // prevent default link behavior
    const targetId = link.getAttribute('href'); // get the href attribute of the link
    const targetSection = document.querySelector(targetId); // get the corresponding section using the targetId
    targetSection.scrollIntoView({behavior: 'smooth'}); // scroll to the section smoothly
    navLinks.forEach(link => link.classList.remove('active')); // remove "active" class from all links
    link.classList.add('active'); // add "active" class to the clicked link
  });
});

    document.getElementById("back-btn").addEventListener("click", function() {
        window.location.href = "http://dj-techs.com/index.php"; // Replace with your website URL
    });