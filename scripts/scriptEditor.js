/**************************/
/***    SCRIPT EDITOR   ***/
/**************************/


// ANCHORS 
var menuToggler = document.getElementById('menu-toggler');
var collapsedMenu = document.getElementById("collapseTarget");

var navNewNote = document.getElementById('navNewNote');
var navMyNotes = document.getElementById('navNotes');

//var navSearch = document.getElementById('navSearch');
var noteTitle = document.getElementById('noteTitle');
var noteSearch = document.getElementById('searchInput');
var notesContainer = document.querySelector('.note-fav-container');
var cM = collapsedMenu;


// EVENT LISTENERS 
menuToggler.addEventListener('click', toggleMenu);
navNewNote.addEventListener('click', focusOnTitle);
//navSearch.addEventListener('click', focusOnSearch);
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

// Field for new, my, favorite notes
function showNotesField() {
    notesContainer.classList.toggle('data-container-hd');
}
