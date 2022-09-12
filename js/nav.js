const nav = document.getElementById('body');


window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('active-nav');
     
     }
    
     else {
        nav.classList.remove('active-nav');
      
    }
    if (window.scrollY >= 70) {
        nav.classList.add('slide-in');
     
     }
    
     else {
        nav.classList.remove('slide-in');
      
    }
    if (window.scrollY >= 170) {
        nav.classList.add('slide-in1');
     
     }
    
     else {
        nav.classList.remove('slide-in1');
      
    }
    if (window.scrollY >= 850) {
        nav.classList.add('slide-in2');
     
     }
    
    
    if (window.scrollY >= 1320) {
        nav.classList.add('slide-in3');
     
     }
    
     if (window.scrollY >= 1820) {
        nav.classList.add('slide-in4');
     
     }
      console.log("nav");
})