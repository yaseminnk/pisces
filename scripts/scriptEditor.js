/**************************/
/***    SCRIPT EDITOR   ***/
/**************************/


// ANCHORS 
var logo = document.getElementById('logo');
var logoShort = document.getElementById('logoShortVer');
var menuToggler = document.getElementById('menu-toggler');
var collapsedMenu = document.getElementById("collapseTarget");
var cM = collapsedMenu;
var navNewNote = document.querySelectorAll('.nav-newNote');
var navNotes = document.querySelectorAll('.nav-notes');
var navFavorites = document.querySelectorAll('.nav-favorites');
var navSaves = document.querySelectorAll('.nav-saves');
var navDeleteNote = document.querySelectorAll('.nav-delete');

var noteTitle = document.getElementById('noteTitle');
var noteField = document.querySelector('.note-field');
var noteSearch = document.getElementById('searchInput');
var notesContainer = document.querySelector('.note-fav-container');

// EVENT LISTENERS 
logo.addEventListener('click', takeMeHome);
logoShort.addEventListener('click', takeMeHome);
menuToggler.addEventListener('click', toggleMenu);

for(let i = 0; i < navNewNote.length; i++) {
    navNewNote[i].addEventListener('click', focusOnTitle);
    navNotes[i].addEventListener('click', showNotesField);
}

noteField.addEventListener('click', modNoteField);

// CALLBACKS
function takeMeHome() {
    delete_cookie("visitedQuire");
    window.open('index.html','_self');
}

function focusOnTitle() {    
    noteTitle.focus();
    noteTitle.setAttribute('placeholder', '');
    noteTitle.innerHTML = "";
}
function focusOnSearch() {
    noteSearch.focus();
}

function modNoteField() {
    this.classList.toggle('note-field-light');
    this.classList.toggle('note-field');
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
  
var navBar = document.querySelector('#navBar');
var themeField = document.querySelector('#themeField');

var navNewNote = document.querySelector('#navNewNote');
var navNotes = document.querySelector('#navNotes');
var navFavorites = document.querySelector('#navFavorites');
var navSave = document.querySelector('#navSave');
var navTrash = document.querySelector('#navTrash');
var noteItem= document.querySelectorAll('note-item');
// Theme id:s
var stand = document.getElementById('standard');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var pink = document.getElementById('pink');

// EVENT LISTENERS
/*
stand.addEventListener('click', switchTheme); 
green.addEventListener('click', switchTheme); 
blue.addEventListener('click', switchTheme); 
pink.addEventListener('click', switchTheme); 

function switchTheme() {     
    themeField.setAttribute('class', ''); 
    themeField.classList.toggle(this.id);   
}
*/
//dropdown menu
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
            navBar.style.padding = "0 22px";
        }
    });
}
<<<<<<< HEAD

/*var qlContainer = document.querySelector('.ql-container');

var italic = document.getElementById('italic');
var inherit = document.getElementById('inherit');

italic.addEventListener('click', changeTemplate );
inherit.addEventListener('click', changeTemplate);

function changeTemplate() {     
    qlContainer.setAttribute('class', ''); 
    qlContainer.classList.toggle(this.id);  
   console.log('hej på dig');
}*/

function myFunction() {
    window.print();
}
=======
function delete_cookie( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }


/*** DROPDOWN MENU THEME SELECTION ***/

    // ANCHOR
    var btnDrop = document.querySelector('.btn-drop');

    
    // LISTENERS
    btnDrop.addEventListener('click', showDropTheme);


    // CALLBACKS
    function showDropTheme() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.btn-drop')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
>>>>>>> 9ede62f930a9d6c7fc7d42d7f75b28a313c06b31
