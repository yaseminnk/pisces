/**************************/
/***    SCRIPT EDITOR   ***/
/**************************/


// ANCHORS 
var menuToggler = document.getElementById('menu-toggler');
var collapsedMenu = document.getElementById("collapse-target");
var navNewNote = document.getElementById('navNewNote');
var navSearch = document.getElementById('navSearch');
var noteTitle = document.getElementById('noteTitle');
var noteSearch = document.getElementById('noteSearch');


// EVENT LISTENERS 
menuToggler.addEventListener('click', toggleMenu);
navNewNote.addEventListener('click', focusOnTitle);
navSearch.addEventListener('click', focusOnSearch);

// CALLBACKS

function focusOnTitle() {
    noteTitle.focus();  
}

function focusOnSearch() {
    noteSearch.focus();    
}


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