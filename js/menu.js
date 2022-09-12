const btnMobile = document.getElementById('bars');

function toggleMenu( event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('nav', "#menu");
 
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if
   (active) {event.currentTarget.setAttribute('aria-laber', 'FECHAR MENU');
  } else{ 
    event.currentTarget.setAttribute('aria-laber', 'Abrir MENU');  
  console.log("click");
  }
}
btnMobile.addEventListener('click', toggleMenu);

btnMobile.addEventListener('touchstart', toggleMenu);