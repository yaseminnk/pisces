/**************************/
/***    SCRIPT EDITOR   ***/
/**************************/


// ANCHORS 
var logo = document.getElementById('logo');
var logoShort = document.getElementById('logoShortVer');
var menuToggler = document.getElementById('menu-toggler');
var collapsedMenu = document.getElementById("collapseTarget");
var cM = collapsedMenu;
var navNewNote = document.querySelector('.nav-newNote');
//var navNotes = document.getElementById('navNotes');
var navFavorites = document.getElementById('navFavorites');
var noteTitle = document.getElementById('noteTitle');
var noteField = document.querySelector('.note-field');

var noteSearch = document.getElementById('searchInput');
//var notesContainer = document.querySelector('.note-fav-container');


// EVENT LISTENERS 
logo.addEventListener('click', takeMeHome);
logoShort.addEventListener('click', takeMeHome);
menuToggler.addEventListener('click', toggleMenu);
navNewNote.addEventListener('click', focusOnTitle);
//navNotes.addEventListener('click', showNotesField);
//navFavorites.addEventListener('click', showNotesField);
noteField.addEventListener('click', modNoteField);

// CALLBACKS
function takeMeHome() {
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
//      notesContainer.classList.toggle('data-container-hd');
    
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

 /*
elIconTitle.setAttribute('class', 'fas fa-file-signature');
elIconTitle.setAttribute('title','Title');
 elFormTitle.setAttribute('id','noteTitle');
 elInputTitle.setAttribute('id','titleInput'); 
 elInputTitle.setAttribute('placeholder','Title');
*/
 // APPEND NEW ELEMENTS TO THE DOM
 //elFormTitle.appendChild(elIconTitle);
 //elFormTitle.appendChild(elInputTitle);
 elFormSearch.appendChild(elIcon);
 elFormSearch.appendChild(elInputSearch);
  
 //qlToolbar.insertBefore(elFormTitle, qlToolbar.childNodes[0]);
 qlToolbar.appendChild(elFormSearch);

  
var navBar = document.querySelector('#navBar');
var navNewNote = document.querySelector('#navNewNote');
var navNotes = document.querySelector('#navNotes');
var navFavorites = document.querySelector('#navFavorites');
var navSave = document.querySelector('#navSave');
var navTrash = document.querySelector('#navTrash');
var noteItem= document.querySelectorAll('note-item');

var stand = document.getElementById('standard');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var pink = document.getElementById('pink');


stand.addEventListener('click', switchTheme); 
green.addEventListener('click', switchTheme); 
blue.addEventListener('click', switchTheme); 
pink.addEventListener('click', switchTheme); 

function switchTheme() {            
    navBar.setAttribute('class', '');        
    navBar.classList.toggle(this.id);
    console.log(this.id);
    
}
/*for(var i=0; i<noteItem.length; i++){
    noteItem[i].innerHTML.style = 'color:white';*/


// CALLBACKS

	/*function switchTheme(ev) {		
        navBar.setAttribute('class', '');	
        //editor.setAttribute('class','');
        navNewNote.setAttribute('class','');
        navNotes.setAttribute('class','');
        navFavorites.setAttribute('class','');
        navSave.setAttribute('class','');
        navDelete.setAttribute('class','');
        favContainer.setAttribute('class','');
		var themeId = this.id;  // if ev.id don't work
				
		if( themeId === 'standard') {
            //setAttribute('class','')

            navBar.classList.toggle('stand')
            //editor.classList.toggle('xstand');
            navDelete.classList.toggle('ystand');				
		}
		else if( themeId === 'greentheme' ) {
            navBar.classList.toggle('green');	
            //editor.classList.toggle('xgreen');	
            navDelete.classList.toggle('ygreen');
            favContainer.classList.toggle('green');	
		}
		else if( themeId === 'bluetheme' ) {
            navBar.classList.toggle('blue');
            //editor.classList.toggle('xblue');	
            navNewNote.classList.toggle('yblue');	
            navNotes.classList.toggle('yblue');
            navFavorites.classList.toggle('yblue');
            navSave.classList.toggle('yblue');	
            navDelete.classList.toggle('yblue');		
        }
        else if (themeId === 'pinktheme') {
            navBar.classList.toggle('pink');
           // editor.classList.toggle('xpink');
            navDelete.classList.toggle('ypink');	
        }
    }*/
    

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
