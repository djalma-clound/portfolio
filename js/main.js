const btnMobile = document.getElementById('btn-mobile');

function toggleMenu( event ) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navbar');

    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTargert.setAtribute('aria-expend', active);
    if 
    (active) {
        event.currentTargert.setAtribute('aria-laber', 'FECHAR MENU');

    } else{
        event.currentTargert.setAtribute('aria-label', 'ABRI MENU');
    }
}
btnMobile.addEventListener('click', toggleMenu);

btnMobile.addEventListener('touchstart', toggleMenu);