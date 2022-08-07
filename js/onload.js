
function checkCookies() {
  var text = "";

  if (navigator.cookieEnabled == true) {
    text = "voce chegou.";
  } else {
     text = "qualse la DJALMA.";
  }
  document.getElementById("div-sect").classList.add('change');
}