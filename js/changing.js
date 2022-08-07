const sect = document.getElementById('div-sect');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1) {
        sect.classList.add('active-div');
    } else {
        sect.classList.remove('active-div');
    }
})