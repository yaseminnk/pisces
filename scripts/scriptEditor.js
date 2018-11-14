/**************************/
/***    SCRIPT EDITOR   ***/
/**************************/


// ANCHORS 
var menuToggler = document.getElementById('menu-toggler');
var collapsedMenu = document.getElementById("collapse-target");


// EVENT LISTENERS 
menuToggler.addEventListener('click', toggleMenu);


// CALLBACKS

// Burger menu - small screens
function toggleMenu() {
    var cM = collapsedMenu;
    if (cM.classList.contains("menu-collapse")) {
        cM.classList.toggle("menu-collapse");
    }
    else {
        cM.classList.toggle("menu-collapse");
    }
}