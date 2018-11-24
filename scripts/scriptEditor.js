/**************************/
/***    SCRIPT EDITOR   ***/
/**************************/


// ANCHORS 
var logo = document.getElementById('logo');
var menuToggler = document.getElementById('menu-toggler');
var collapsedMenu = document.getElementById("collapseTarget");
var cM = collapsedMenu;
var navNewNote = document.getElementById('navNewNote');
var navMyNotes = document.getElementById('navNotes');
var noteTitle = document.getElementById('noteTitle');
var noteSearch = document.getElementById('searchInput');
var notesContainer = document.querySelector('.note-fav-container');


// EVENT LISTENERS 
logo.addEventListener('click', takeMeHome);
menuToggler.addEventListener('click', toggleMenu);
navNewNote.addEventListener('click', focusOnTitle);
navNewNote.addEventListener('click', showNotesField);
navMyNotes.addEventListener('click', showNotesField);


// CALLBACKS
function takeMeHome() {
    window.open('index.html','_self');
}

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

/*** NEW SEARCH BAR ELEMENT AND APPEND IT TO THE TOOLBAR ***/

 // ANCHORS
 var qlToolbar = document.querySelector('.ql-toolbar');        
 
 var elFormTitle = document.createElement('form');
 var elFormSearch = document.createElement('form'); 
 var elInputTitle = document.createElement('input');
 var elInputSearch = document.createElement('input');
 
 var elIconTitle = document.createElement('i');
 var elIcon = document.createElement('i');
 
 // ADD ATTRIBUTES TO NEW ELEMENTS
 elFormSearch.setAttribute('id','noteSearch');
 elIcon.setAttribute('class', 'fas fa-search');
 elInputSearch.setAttribute('id','searchInput');
 elIcon.setAttribute('title','Search');  
 elInputSearch.setAttribute('placeholder','Search');

elIconTitle.setAttribute('class', 'fas fa-file-signature');
elIconTitle.setAttribute('title','Title');
 elFormTitle.setAttribute('id','noteTitle');
 elInputTitle.setAttribute('id','titleInput'); 
 elInputTitle.setAttribute('placeholder','Title');

 // APPEND NEW ELEMENTS TO THE DOM
 elFormTitle.appendChild(elIconTitle);
 elFormTitle.appendChild(elInputTitle);
 elFormSearch.appendChild(elIcon);
 elFormSearch.appendChild(elInputSearch);
  
 qlToolbar.insertBefore(elFormTitle, qlToolbar.childNodes[0]);
 qlToolbar.appendChild(elFormSearch);


 