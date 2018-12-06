/**************************/
/***    SCRIPT EDITOR   ***/
/**************************/

// NEW SCOPE ***//
{
    // ANCHORS 
    let logo = document.getElementById('logo');
    let logoShort = document.getElementById('logoShortVer');
    let menuToggler = document.getElementById('menu-toggler');
    let collapsedMenu = document.getElementById("collapseTarget");
    let cM = collapsedMenu;
    let navNewNote = document.querySelectorAll('.nav-newNote');
    let navNotes = document.querySelectorAll('.nav-notes');
    let navFavorites = document.querySelectorAll('.nav-favorites');
    let navSaves = document.querySelectorAll('.nav-saves');
    let navDeleteNote = document.querySelectorAll('.nav-delete');
    let noteTitle = document.getElementById('noteTitle');
    let noteField = document.querySelector('.note-field');
    let noteSearch = document.getElementById('searchInput');
    let notesContainer = document.querySelector('.note-fav-container');

    //let edt = document.getElementById('editor');
    //let edWidth = window.innerWidth;

    // EVENT LISTENERS 
    //edt.addEventListener('keypress', charCounter);

    //logo.addEventListener('click', takeMeHome);
    logoShort.addEventListener('click', takeMeHome);
    menuToggler.addEventListener('click', toggleMenu);

    for (let i = 0; i < navNewNote.length; i++) {
        navNewNote[i].addEventListener('click', focusOnTitle);
        navNotes[i].addEventListener('click', showNotesField);
    }
    noteField.addEventListener('click', modNoteField);

    // We calculate max-width for the editor using the window prop innerWidth
    window.onload = adjustWidth;
    window.addEventListener('resize', adjustWidth);

    function adjustWidth() {
        let conWorkfield = document.querySelector('.container-workfield');
        let innerW = window.innerWidth;
        let adjustedInnerWidthSm = (innerW - 18) + "px";
        let adjustedInnerWidthLg = (innerW - 146) + "px";
        
        if( innerWidth <= 769 ) {
            conWorkfield.style.maxWidth = adjustedInnerWidthSm;   
        } else {
            conWorkfield.style.maxWidth = adjustedInnerWidthLg;
        }              
    }
    
    // function to count and display keypresses
    var characters = 0;

    function charCounter() {
        characters++;
        return characters;
    }
    function showCharacters() {
        console.log(charCounter());
    }

    // Counts words in editor - we need an eventlistner
    function wordCounts(str) {
        return str.split(' ')
            .filter(function (n) { return n != '' })
            .length;
    }


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
}

/*** NEW SCOPE ***/
{
    // ANCHORS
    let qlContainer = document.querySelector('.ql-toolbar');
    let elSpan = document.createElement('span');
    let elAtag = document.createElement('a');
    let elIcon = document.createElement('i');

    /*** We add a print icon to the toolbar ***/    
    elSpan.setAttribute('class', 'ql-formats');
    elIcon.setAttribute('class', 'fas fa-print');
    elIcon.classList.add('toolbar-print-icon');
    elAtag.setAttribute('class', 'print-note');
    elAtag.setAttribute('title', 'Print note');
    elAtag.id = "toolbarPrintNote";
    // We append all childs
    elAtag.appendChild(elIcon);
    elSpan.appendChild(elAtag);
    qlContainer.appendChild(elSpan);

    let toolPrint = document.getElementById('toolbarPrintNote');
    //let btnPrint = document.getElementById('printNote');
    let btnPrintHd = document.getElementById('printNoteHd');

    toolPrint.addEventListener('click', printContent);
    //btnPrint.addEventListener('click', printContent);
    //btnPrintHd.addEventListener('click', printContent);

    // CALLBACK PRINT FUNCTION
    function printContent() {
        window.print();
    }

    function delete_cookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}


/*** NEW SCOPE ***/
{
    // ANCHORS
    let btnDrop = document.querySelector('.btn-drop');
    let tmpDef = document.getElementById('tmpDefault');
    let tmpBus = document.getElementById('tmpBusiness');
    let tmpParty = document.getElementById('tmpParty');
    let tmpFan = document.getElementById('tmpFantasy');
    let dynStyle = document.getElementById('dynamicStylesheet');

    // LISTENERS
    btnDrop.addEventListener('click', showDropTheme);
    tmpDef.addEventListener('click', changeTemplate);
    tmpBus.addEventListener('click', changeTemplate);
    tmpParty.addEventListener('click', changeTemplate);
    tmpFan.addEventListener('click', changeTemplate);


    // CALLBACKS
    
    /*** DROPDOWN MENU TEMPLATE SELECTION ***/
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
}


/*** NEW SCOPE ***/
{
    // ANCHORS
    let bd = document.querySelector('body');
    let menuField = document.querySelector('#menuField');
    let earth = document.getElementById('earth');
    let sky = document.getElementById('sky');
    let themeSet = document.getElementById('themeFieldset');
    let btnDrop = document.querySelector('.btn-drop');
    let logoBrand = document.getElementById('logoBrand');

    // EVENT LISTENERS
    earth.addEventListener('click', changeStylesheet);
    sky.addEventListener('click', changeStylesheet);

    // CALLBACKS

    /*** THEME SELECTION ***/
    function changeStylesheet() {
        menuField.setAttribute('class', '');
        var elId = this.id;

        if (elId === 'earth') {
            menuField.setAttribute('class', 'earthBg');
            themeSet.style.borderColor = "rgb(102,102,102)";
            btnDrop.style.backgroundColor = "rgb(92,92,92)";
            logoBrand.style.backgroundColor = "rgb(46,45,45)";
            bd.style.backgroundColor = "rgb(92,92,92)";
        }
        else if (elId === 'sky') {
            menuField.setAttribute('class', 'skyBg');
            themeSet.style.borderColor = "rgb(182,182,182)";
            btnDrop.style.backgroundColor = "rgb(23, 117, 171)";
            logoBrand.style.backgroundColor = "rgb(16, 113, 167)";
            bd.style.backgroundColor = "rgb(36, 133, 197)";
        }
    }
}


// Implement and register module
/*
Quill.register('modules/counter', function (quill, options) {
    var container = document.querySelector('#counter');
    quill.on('text-change', function () {
        var text = quill.getText();
        // There are a couple issues with counting words
        // this way but we'll fix these later
        container.innerText = text.split(/\s+/).length;
    });
});

// We can now initialize Quill with something like this:
var quill = new Quill('#editor', {
    modules: {
        counter: true
    }
});
*/