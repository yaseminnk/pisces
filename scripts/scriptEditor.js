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


// NEW ELEMENTS CREATED AND ADDED TO THE TOOLBAR 

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

  
/*document.getElementById("theme").addEventListener("click", switchTheme);

function switchTheme() {
    document.getElementById("navBar").style.backgroundColor = "green"; 
    document.getElementById("navBar").style.fontFamily = "arial";
    document.getElementById("navBar").style.fontStyle = "italic";
    document.getElementById("editor").style.backgroundColor = "lightgreen"; 
 
}*/

        /////////////////////////////////////////////////
/*document.getElementById("greentheme").addEventListener("click", switchTheme);
function switchTheme() {
    document.getElementById("navBar").setAttribute("id", "greenTheme"); 
    document.getElementById("editor").setAttribute("id", "green");
}

document.getElementById("bluetheme").addEventListener("click", changeTheme);
function changeTheme() {
    document.getElementById("navBar").setAttribute("id", "blueTheme"); 
    document.getElementById("editor").setAttribute("id", "blue");
}

document.getElementById("pinktheme").addEventListener("click", addTheme);
function addTheme() {
    document.getElementById("navBar").setAttribute("id", "pinkTheme"); 
    document.getElementById("editor").setAttribute("id", "pink");
}*/


var editor = document.querySelector('#editor');
var navBar = document.querySelector('#navBar');
var navNewNote = document.querySelector('#navNewNote');
var navNotes = document.querySelector('#navNotes');
var navFavorites = document.querySelector('#navFavorites');
var navSave = document.querySelector('#navSave');
var navTrash = document.querySelector('#navTrash');
var favContainer = document.querySelector('.note-fav-container');

var stand = document.getElementById('standard');
var green = document.getElementById('greentheme');
var blue = document.getElementById('bluetheme');
var pink = document.getElementById('pinktheme');

stand.addEventListener('click', switchTheme); 
green.addEventListener('click', switchTheme); 
blue.addEventListener('click', switchTheme); 
pink.addEventListener('click', switchTheme); 

// CALLBACKS

	function switchTheme(ev) {		
        navBar.setAttribute('class', '');	
        //editor.setAttribute('class','');
        navNewNote.setAttribute('class','');
        navNotes.setAttribute('class','');
        navFavorites.setAttribute('class','');
        navSave.setAttribute('class','');
        navTrash.setAttribute('class','');
        favContainer.setAttribute('class','');
		var themeId = this.id;  // if ev.id don't work
				
		if( themeId === 'standard') {
            //setAttribute('class','')

            navBar.classList.toggle('stand')
            //editor.classList.toggle('xstand');
            navTrash.classList.toggle('ystand');				
		}
		else if( themeId === 'greentheme' ) {
            navBar.classList.toggle('green');	
            //editor.classList.toggle('xgreen');	
            navTrash.classList.toggle('ygreen');
            favContainer.classList.toggle('green');	
		}
		else if( themeId === 'bluetheme' ) {
            navBar.classList.toggle('blue');
            //editor.classList.toggle('xblue');	
            navNewNote.classList.toggle('yblue');	
            navNotes.classList.toggle('yblue');
            navFavorites.classList.toggle('yblue');
            navSave.classList.toggle('yblue');	
            navTrash.classList.toggle('yblue');		
        }
        else if (themeId === 'pinktheme') {
            navBar.classList.toggle('pink');
           // editor.classList.toggle('xpink');
            navTrash.classList.toggle('ypink');	
        }
    }
    

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
