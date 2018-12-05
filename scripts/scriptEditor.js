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

for (let i = 0; i < navNewNote.length; i++) {
    navNewNote[i].addEventListener('click', focusOnTitle);
    navNotes[i].addEventListener('click', showNotesField);
}

noteField.addEventListener('click', modNoteField);

// CALLBACKS
function takeMeHome() {
    delete_cookie("visitedQuire");
    window.open('index.html', '_self');
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

// ANCHORS
/*
var navBar = document.querySelector('#navBar');
var themeField = document.querySelector('#themeField');

var navNewNote = document.querySelector('#navNewNote'); 
var navNotes = document.querySelector('#navNotes');
var navFavorites = document.querySelector('#navFavorites');
var navSave = document.querySelector('#navSave');
var navTrash = document.querySelector('#navTrash');
var noteItem = document.querySelectorAll('note-item');
// Theme id:s
var stand = document.getElementById('standard');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var pink = document.getElementById('pink');
*/
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
    dropdown[i].addEventListener("click", function () {
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


/*** We add a print icon to the toolbar ***/
var qlContainer = document.querySelector('.ql-toolbar');
var elSpan = document.createElement('span');
var elAtag = document.createElement('a');
var elIcon = document.createElement('i');

// Set attributes
elIcon.setAttribute('class', 'fas fa-print');
elIcon.classList.add('toolbar-print-icon');
elAtag.setAttribute('class', 'print-note');
elAtag.setAttribute('title', 'Print note');
elAtag.id = "toolbarPrintNote";

// We append all childs
elAtag.appendChild(elIcon);
elSpan.appendChild(elAtag);
qlContainer.appendChild(elSpan);


// CALLBACK PRINT FUNCTION
var toolPrint = document.getElementById('toolbarPrintNote');
var btnPrint = document.getElementById('printNote');
var btnPrintHd = document.getElementById('printNoteHd');

toolPrint.addEventListener('click', printContent);
btnPrint.addEventListener('click', printContent);
btnPrintHd.addEventListener('click', printContent);

function printContent() {
    window.print();
}

function delete_cookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


/*** DROPDOWN MENU TEMPLATE SELECTION ***/

// ANCHORS
var btnDrop = document.querySelector('.btn-drop');
var tmpDef = document.getElementById('tmpDefault');
var tmpBus = document.getElementById('tmpBusiness');
var tmpParty = document.getElementById('tmpParty');
var tmpFan = document.getElementById('tmpFantasy');
var dynStyle = document.getElementById('dynamicStylesheet');

// LISTENERS
btnDrop.addEventListener('click', showDropTheme);
tmpDef.addEventListener('click', changeTemplate);
tmpBus.addEventListener('click', changeTemplate);
tmpParty.addEventListener('click', changeTemplate);
tmpFan.addEventListener('click', changeTemplate);


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

/*** Change template - change dynamic stylesheet ***/

function changeTemplate() {    
    dynStyle.setAttribute('href', '');
    var elId = this.id;

    if (elId === 'tmpDeafult') {
        dynStyle.setAttribute('href', '#');        
    }
    else if (elId === 'tmpBusiness') {
        dynStyle.setAttribute('href', 'css/stylesheetBusiness.css');        
    }
}      

/*** THEME SELECTION ***/

{
// ANCHORS
let menuField = document.querySelector('#menuField');
let earth = document.getElementById('earth');
let sky = document.getElementById('sky');
let themeSet = document.getElementById('themeFieldset');
let btnDrop = document.querySelector('.btn-drop');
//let warm = document.getElementById('warm');

// EVENT LISTENERS
earth.addEventListener('click', changeStylesheet);
sky.addEventListener('click', changeStylesheet);
//warm.addEventListener('click', changeStylesheet);

// CALLBACKS
function changeStylesheet() {
    menuField.setAttribute('class', '');
    var elId = this.id;

    if(elId === 'earth') {        
        menuField.setAttribute('class','earthBg');
        themeSet.style.borderColor = "rgb(102,102,102)";
        btnDrop.style.backgroundColor = "rgb(92,92,92)";
    } 
    else if(elId === 'sky') {
        menuField.setAttribute('class','skyBg');
        themeSet.style.borderColor = "rgb(182,182,182)";
        btnDrop.style.backgroundColor = "rgb(23, 117, 171)";
    }
    /*
    else if( elId === 'warm' ) {
        menuField.setAttribute('class','warmBg');
    }*/
}		
}
