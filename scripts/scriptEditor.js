/**************************/
/***    SCRIPT EDITOR   ***/
/**************************/

// ANCHORS 

var menuToggler = document.getElementById('menu-toggler');
var collapsedMenu = document.getElementById("collapseTarget");
var cM = collapsedMenu;
var navNewNote = document.getElementById('navNewNote');
var navMyNotes = document.getElementById('navNotes');
var noteTitle = document.getElementById('noteTitle');
var noteSearch = document.getElementById('searchInput');
var notesContainer = document.querySelector('.note-fav-container');


// EVENT LISTENERS 

menuToggler.addEventListener('click', toggleMenu);
navNewNote.addEventListener('click', focusOnTitle);
navNewNote.addEventListener('click', showNotesField);
navMyNotes.addEventListener('click', showNotesField);


// CALLBACKS

function focusOnTitle() {
    noteTitle.focus();
}
function focusOnSearch() {
    noteSearch.focus();
}

// Burger menu - small screens
function toggleMenu() {
    if (cM.classList.contains('menu-collapse')) {
        cM.classList.toggle('menu-collapse');
    }
    else {
        cM.classList.toggle('menu-collapse');
    }
}

// Field for my notes and favorite notes
function showNotesField() {
    notesContainer.classList.toggle('data-container-hd');
}
