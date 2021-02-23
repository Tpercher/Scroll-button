// Quand l'utilisateur scroll en dessous de 20px, le bouton s'affiche

window.onscroll = function() {
scrollFunction()
};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("btnScroll").style.display = "block";
} else {
document.getElementById("btnScroll").style.display = "none";
}
}

// Quand l'on click sur le bouton, cela scroll tout en haut du site
function topFunction() {
document.body.scrollTop = 0; // Chrome, Safari & Opera
document.documentElement.scrollTop = 0; // IE & Firefox
}
