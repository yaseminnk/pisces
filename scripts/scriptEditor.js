/**************************/
/***    SCRIPT EDITOR   ***/
/**************************/

// NAVBAR LOGIC ***//
{
    // ANCHORS 
    let logoShort = document.getElementById('logoShortVer');
    let menuToggler = document.getElementById('menu-toggler');
    let collapsedMenu = document.getElementById("collapseTarget");
    let cM = collapsedMenu;
    let navNewNote = document.querySelectorAll('.nav-newNote');
    let noteTitle = document.getElementById('noteTitle');
    let noteField = document.querySelector('.note-field');
    let noteSearch = document.getElementById('searchInput');

    // EVENT LISTENERS 
    logoShort.addEventListener('click', takeMeHome);
    menuToggler.addEventListener('click', toggleMenu);

    for (let i = 0; i < navNewNote.length; i++) {
        navNewNote[i].addEventListener('click', focusOnTitle);
    }
    noteField.addEventListener('click', modNoteField);

    // We calculate max-width for the editor using the window prop innerWidth
    window.onload = adjustWidth;
    window.addEventListener('resize', adjustWidth);

    function adjustWidth() {
        let conWorkfield = document.querySelector('.container-workfield');
        let innerW = window.innerWidth;
        let adjustedInnerWidthSm = (innerW - 18) + "px";
        let adjustedInnerWidthLg = (innerW - 354) + "px";

        if (innerWidth <= 769) {
            conWorkfield.style.maxWidth = adjustedInnerWidthSm;
        } else {
            conWorkfield.style.maxWidth = adjustedInnerWidthLg;
        }
    }


    // CALLBACKS
    function takeMeHome() {
        delete_cookie("visitedQuire");
        window.open('index.html', '_self');
    }

    function focusOnTitle() {
        noteTitle.focus();
        noteTitle.setSelectionRange(0, 0);
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


/*** WE ADD TITLES TO TOOLBAR ***/
{
    // ANCHORS
    let qlEd = document.querySelector('.ql-editor');
    let OList = document.querySelector('.ql-list');
    let UList = document.querySelectorAll('.ql-list')[1];
    let heading = document.querySelector('.ql-header');
    let alignText = document.querySelector('.ql-align');
    let insertlink = document.querySelector('.ql-link');
    let insertImage = document.querySelector('.ql-image');
    let leftIndent = document.querySelector('.ql-indent');
    let rightIndent = document.querySelectorAll('.ql-indent')[1];
    let fontSize = document.querySelector('.ql-size');
    let fontFam = document.querySelector('.ql-font');

    // Set title attributes
    OList.setAttribute('title', 'Toggle Ordered list');
    UList.setAttribute('title', 'Toggle Unordered list');
    heading.setAttribute('title', 'Heading');
    alignText.setAttribute('title', 'Align text');
    insertlink.setAttribute('title', 'Insert link');
    insertImage.setAttribute('title', 'Insert image');
    leftIndent.setAttribute('title', 'Indent left');
    rightIndent.setAttribute('title', 'Indent right');
    fontSize.setAttribute('title', 'Fontsize');
    fontFam.setAttribute('title', 'Font name');

    // LISTENERS
    window.onload = edFocus;

    // CALLBACK
    function edFocus() {
        qlEd.focus();        
    }

    // Logic when leaving the editor and note working with an existing note
    /*
    function edBlur() {
        confirm('Do you want to save the note?');
        if (true) {
            console.log("true");
        } else {
            return false;
        }
    }*/
}


/*** PRINT NOTES ***/
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


    // LISTENERS
    let toolPrint = document.getElementById('toolbarPrintNote');
    toolPrint.addEventListener('click', printContent);


    // CALLBACK PRINT
    function printContent() {
        window.print();
    }
    function delete_cookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}


/*** TEMPLATES ***/
{
    // ANCHORS
    let btnDrop = document.querySelector('.btn-drop');
    let tmpDef = document.getElementById('tmpDefault');
    let tmpBus = document.getElementById('tmpBusiness');
    let tmpParty = document.getElementById('tmpParty');
    let tmpFan = document.getElementById('tmpFantasy');
    let tmpPlay = document.getElementById('tmpPlayful');
    let dynStyle = document.getElementById('dynamicStylesheet');


    // LISTENERS
    btnDrop.addEventListener('click', showDropTheme);
    tmpDef.addEventListener('click', changeTemplate);
    tmpBus.addEventListener('click', changeTemplate);
    tmpParty.addEventListener('click', changeTemplate);
    tmpFan.addEventListener('click', changeTemplate);
    tmpPlay.addEventListener('click', changeTemplate);


    // CALLBACKS
    /*** DROPDOWN MENU TEMPLATE SELECTION ***/
    function showDropTheme() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    // Close the dropdown menu if the user clicks outside of
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
        btnDrop.innerText = "Choose Template";
        var elId = this.id;

        switch (elId) {
            case 'tmpDeafult':
                dynStyle.setAttribute('href', '#');
                btnDrop.innerText = "Choose Template";
                break;
            case 'tmpBusiness':
                dynStyle.setAttribute('href', 'css/stylesheetBusiness.css');
                btnDrop.innerText = "Business";
                break;
            case 'tmpParty':
                dynStyle.setAttribute('href', 'css/stylesheetParty.css');
                btnDrop.innerText = "Party";
                break;
            case 'tmpFantasy':
                dynStyle.setAttribute('href', 'css/stylesheetFantasy.css');
                btnDrop.innerText = "Fantasy";
                break;
            case 'tmpPlayful':
                dynStyle.setAttribute('href', 'css/stylesheetPlayful.css');
                btnDrop.innerText = "Playful";
                break;
            default:
                break;
        }
    }
}


/*** STATISTIC LOGIC */
{
    // ANCHORS
    let statSpan = document.createElement('span');
    let qlContainer = document.querySelector('.ql-toolbar');
    let qlEditor = document.querySelector('.ql-editor');

    // WE CREATE NEW STAT ELEMENTS AND APPEND THESE TO THE DOM
    let newSpanWords = document.createElement('span');
    newSpanWords.classList.add('counter-stat');
    qlContainer.appendChild(newSpanWords);
    let newSpanChar = document.createElement('span');
    statSpan.classList.add('stat-span');
    newSpanChar.classList.add('counter-stat');
    statSpan.appendChild(newSpanWords);
    statSpan.appendChild(newSpanChar);
    qlContainer.appendChild(statSpan);


    // EVENT LISTENERS 
    quill.on('text-change', function () {
        newSpanWords.innerText = "Words: " + wordCounter(quill.root.innerText);
        newSpanChar.innerText = "Characters: " + charCounter(quill.root.innerText);        
    });
    qlEditor.addEventListener('keydown', charCounter);


    // CALLBACKS
    // we create an array consisting of all elements that fulfill the condition 
    function wordCounter(str) {
        return str.trim().split(' ')        
            .filter( n => { return n != '' })            
            .length;           
    }
    function charCounter(str) {
        return str.length;
    }
}


/*** STATISTIC ***/
{
    var timer;
    var timerStart;
    var timeSpentOnSite = getTimeSpentOnSite();

    function getTimeSpentOnSite() {
        timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
        timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
        return timeSpentOnSite;
    }

    function startCounting() {
        timerStart = Date.now();
        timer = setInterval(function () {
            timeSpentOnSite = getTimeSpentOnSite() + (Date.now() - timerStart);
            localStorage.setItem('timeSpentOnSite', timeSpentOnSite);
            timerStart = parseInt(Date.now());
            // Convert to minutes
            // console.log(parseInt(timeSpentOnSite / (1000 * 60)) % 60);
            document.getElementsByClassName('all-stat')[0].setAttribute('href', 'chart.html?notesLength=' + notes.length + '&time=' + parseInt(timeSpentOnSite / (1000 * 60)));
        }, 1000);
    }
    startCounting();

    //Stop the timer when the window/tab is inactive:

    var stopCountingWhenWindowIsInactive = true;

    if (stopCountingWhenWindowIsInactive) {

        if (typeof document.hidden !== "undefined") {
            var hidden = "hidden",
                visibilityChange = "visibilitychange",
                visibilityState = "visibilityState";
        } else if (typeof document.msHidden !== "undefined") {
            var hidden = "msHidden",
                visibilityChange = "msvisibilitychange",
                visibilityState = "msVisibilityState";
        }
        var documentIsHidden = document[hidden];

        document.addEventListener(visibilityChange, function () {
            if (documentIsHidden != document[hidden]) {
                if (document[hidden]) {
                    // Window is inactive
                    clearInterval(timer);
                } else {
                    // Window is active
                    startCounting();
                }
                documentIsHidden = document[hidden];
            }
        });
    }
}
