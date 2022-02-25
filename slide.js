
var imgObj = null;
var animate ;

function init() {
   imgObj = document.getElementById('theCover');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
}
function moveRight() {
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
   animate = setTimeout(moveRight,10);    // call moveRight in 20msec
}

function stop() {
   clearTimeout(animate);
   imgObj.style.left = '0px'; 
}
function entry() {
   clearTimeout(animate);
   imgObj.style.left = '0px'; 
 animate = setTimeout(moveRight,10);    
}


window.onload = init;

