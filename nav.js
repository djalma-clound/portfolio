const header = document.querySelector('header');
const menu = document.querySelectorAll("#menu a");
const logo = document.getElementById("logo");
const bars = document.querySelector('span');
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    logo.style.color = 'white';
    header.style.backgroundColor = 'black';
    bars.style.backgroundColor = 'white';
    
    menu.forEach(function(item) {
      item.style.color = 'white';
    });
  } else {
    // Scrolling down
    logo.style.color = 'red';
    bars.style.backgroundColor = 'red';
    
    

    header.style.backgroundColor = 'white';
    menu.forEach(function(item) {
      item.style.color = 'red';
    });
  } 
  prevScrollPos = currentScrollPos;
}

      bars.addEventListener("click", ()=>{
      const menu = document.getElementById("menu");
      menu.classList.toggle("active-menu");
      var i = 10;
      if(i > 5){
        const links = document.querySelectorAll('#menu li a');
        links.forEach(link => {
          link.addEventListener('click', (event) => {
            event.preventDefault(); // prevent default link behavior
           menu.classList.remove('active-menu');
          });
        });
      }
      
      });

  
      // get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');
// const header = document.querySelector("header");


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
  
  
       const img1 = document.getElementById("img1");
        img1.addEventListener("click", (e)=> {
     
         window.location.href = 'http://djalmad.com';
        });
    
        const img2 = document.getElementById("img2");
        img2.addEventListener("click", ()=> {
         window.location.href = 'http://dj-detailing.dj-techs.com';
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