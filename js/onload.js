
function checkCookies() {
    var text = "";
  
    if (navigator.cookieEnabled == true) {
      text = "welcome.";
    } else {
       text = "come back soon";
    }
    document.getElementsByClassName("second").classList.add('move');
  }