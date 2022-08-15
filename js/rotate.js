const sect = document.getElementById('the-box');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        sect.classList.add('active-div');
    } else {
        sect.classList.remove('active-div');
    }
    if (window.scrollY >= 680) {
        sect.classList.add('active-form');
    } else {
        sect.classList.remove('active-form');
    }
})
