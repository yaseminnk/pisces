(function(){ // Scoping function to avoid creating globals
    var isFavoriteView = false;
    currentNoteId = "";
    window.notes = [];
    var storedNotes = JSON.parse(localStorage.getItem("notes"));
  
    if ( storedNotes !== null){
        notes= storedNotes;// Get the saved note from localStorage and return them as object
        showNotes(isFavoriteView); //showNotes(true) only to show favorite notes
    } else {
        }
        

    // -----**** Creating new note and adding to the array **** ------
    // var newNote = document.querySelectorAll('.nav-newNote');
    // for(let i = 0; i < newNote.length; i++) {
    //     newNote[i].addEventListener('click', createNewNote);
    // }
    document.querySelector('.nav-newNote').addEventListener('click', createNewNote);
    function createNewNote() {
        var newId = uniqueID();
        var note = {
                id : newId,
                title : "untitled", 
                contentText : "no content...", 
                contentHtml : "",  
                created : new Date().toLocaleString(),
                modified : new Date().toLocaleString(),
                isFavorite : false,
                tags : []
            };
        document.getElementById('noteTitle').value = note.title;
        quill.setContents(""); // setting an empty editor for writing new note.
        document.getElementById('tagInput').value = "";
        notes.unshift(note); //add notes to beginning of the Array, push() add item in the end of the array.
       //notes.push(note);
        showNotes(isFavoriteView);
        currentNoteId = note.id;
    };

    // -----**** Changing note title **** ------
    document.getElementById('noteTitle').addEventListener('change', function() {   
         document.getElementById(currentNoteId).getElementsByClassName('note-title')[0].innerText = this.value;
         saveAllNotes();
     });

    // -----**** Adding tag **** ------
    function addTag (noteId) {
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id == noteId) {
                if (notes[i].tags == undefined){    // if there is no tags property, it creates the property.
                    notes[i].tags = [];  
                } 
                var tagInput = document.getElementById('tagInput');
                var tagText = tagInput.value;
                if(notes[i].tags.indexOf(tagText) === -1) { //add only unique tag
                    notes[i].tags.push(tagText);
                }
                saveAllNotes();
                selectNote(noteId);
            }  
        }
    } 
    document.getElementById('tagInput').addEventListener('change', function() {   
        addTag(currentNoteId);
    });
    


    // -----**** Saving notes **** ------
    var saveNote = document.querySelectorAll('.nav-save');
    for(let i = 0; i < saveNote.length; i++) {
        saveNote[i].addEventListener('click', saveAllNotes);
    } 

    function saveAllNotes() {
        var noteContentHtml = quill.root.innerHTML; // getting content from editor
        var noteContentText = quill.getText(); // getting text without HTML
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id == currentNoteId )
            {
                notes[i].contentHtml = noteContentHtml; // adding content with html to notes array
                notes[i].contentText = noteContentText; // adding content without html to notes array
                notes[i].title = document.getElementById('noteTitle').value;// adding title to notes title
                notes[i].modified = new Date().toLocaleString();
                
                localStorage.setItem("notes", JSON.stringify(notes));  //storing array in "notes" array in local storage 
                showNotes(isFavoriteView);
                //document.getElementById('noteTitle').value = "";
                //quill.setContents("");
                break;
            }
        }
    };

    // notes.forEach(function(item){
    //   allNotehtmlContent += '<div class="note-item"><div class="note-title">'+ item.title +'</div><div class="note-content">'+ item.content +'</div><div class="note-created">'+ item.created +'</div></div>';
    // });

    // -----**** Added new eventListener and closed the toggle view **** ------ 
    var myNotes = document.querySelector('.nav-notes');
    myNotes.addEventListener('click', function() {
        isFavoriteView = false;
        showNotes(isFavoriteView);
    });

    // -----**** Updates All notes view **** ------    
    function showNotes(showOnlyFavorites,selectedTag) // -----**** 2018/12704  **** ------ 
    {   
        var noteList = document.getElementsByClassName('note-list')[0];
        noteList.innerHTML = "";
        for(var i=0; i< notes.length; i++){
                //showOnlyFavorites:true - only showing favorite notes 
                if(showOnlyFavorites){
                    if (notes[i].isFavorite == true){
                        noteList.append(noteElement(notes[i])); 
                    }  
                }
                else{
                    //selectedTag:value - only showing notes tagged with value 
                    if(selectedTag)
                    {
                        if(notes[i].tags.indexOf(selectedTag) !== -1)
                        {
                            noteList.append(noteElement(notes[i]));
                        }
                    }
                    //selectedTag:undefined - showing all notes
                    else
                    {
                        noteList.append(noteElement(notes[i]));
                    }
                }
        }
        var div = document.getElementById('searchHeadField');
        var headerNotes = document.getElementsByClassName('header-notes')[0];
        var iconDiv = document.createElement('div');
        var icon = document.createElement('i');
        div.append(headerNotes);

        if(showOnlyFavorites){
            headerNotes.innerText = "Favorite Notes";  
            icon.setAttribute("class", "far fa-file img-notes");
            iconDiv.appendChild(icon);
            headerNotes.append(iconDiv);
        } else {
            if(selectedTag) {
                headerNotes.innerText = "Notes Tagged With " + selectedTag;
            } 
            else {
                headerNotes.innerText = "My Notes"; 
                icon.setAttribute("class", "far fa-file img-notes");
                iconDiv.appendChild(icon);
                headerNotes.append(iconDiv);
                
            }
        }
    }

    // -----**** Selecting a specific note to display on editor **** ------  
    function selectNote (noteId) {
        currentNoteId = noteId;
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].id == noteId )
                {
                    document.getElementById('noteTitle').value =  notes[i].title ; //set title to Title field
                    quill.root.innerHTML = notes[i].contentHtml; //set contentHtml to quill editor
    
                    var tagHolder = document.getElementsByClassName('tag-holder')[0];
                    tagHolder.innerHTML = "";
                    // Creating two span for showing tag value and remove icon
                    for(let j= 0; j < notes[i].tags.length; j++) {
                        var tagContainer = document.createElement("SPAN");
                        tagContainer.setAttribute("class", "tag-container");
    
                        var tagValueSpan = document.createElement("SPAN");
                        tagValueSpan.setAttribute("class", "tag-value");
                        tagValueSpan.innerHTML = notes[i].tags[j];
    
                        var iconTagRemove = document.createElement('i');
                        iconTagRemove.setAttribute("class", "fas fa-times icon-tag-remove"); 
                        iconTagRemove.onclick = function() { removeTag(currentNoteId,notes[i].tags[j]); };
                       
    
                        tagContainer.appendChild(tagValueSpan);
                        tagContainer.appendChild(iconTagRemove);
    
                        tagHolder.appendChild(tagContainer);
                    }
                    document.getElementById('tagInput').value = "";
                    break;
                }
            }
        }
    

    // -----****Removing specific tag **** ------ 
    // -----**** 2018/12/04  **** ------
    function removeTag(noteId,tagValue) {
        
        for (var i = 0; i < notes.length; i++) {
            if(notes[i].id == noteId){
                var tagLength = notes[i].tags.length;
                for (var j = 0; j < tagLength; j++){
                    if(notes[i].tags[j] === tagValue){
                        notes[i].tags.splice(j,1);
                        break;
                    }
                }
                saveAllNotes();
                selectNote(noteId);
                break;
            }
            
        }
    }
    

    // -----****Showing all tags **** ------ 
    
    document.getElementById('allTags').addEventListener('click', showAllTags);

    function showAllTags() {
        
        var allTags = [];
        for(var i = 0; i < notes.length; i++){
            for( var j = 0; j < notes[i].tags.length; j++) {
                var tagValue = notes[i].tags[j];
                if(allTags.indexOf(tagValue) === -1){
                    allTags.push(tagValue);
                }
            }
        }
        allTags.sort();

        var list = document.getElementsByClassName('note-list')[0];
        list.innerHTML = "";
        for(let i = 0; i < allTags.length; i++){
            var divTagItem = document.createElement('div');
            divTagItem.setAttribute("class", "note-tags");
            divTagItem.onclick = function() { showNotesWithSpecificTag(allTags[i]); };
            divTagItem.append(allTags[i]);

            list.append(divTagItem);
        }
        var headerNotes = document.getElementsByClassName('header-notes')[0];
        headerNotes.innerText = "All Tags";
        var div = document.getElementById('test-sc');
        var iconDiv = document.createElement('div');
        var icon = document.createElement('i');
        // div.append(headerNotes);
        icon.setAttribute("class", "fas fa-tags icon-tags");
        
        iconDiv.appendChild(icon);
        headerNotes.append(iconDiv);
    }
    
    // -----**** Search note **** ------ 
    var search = document.getElementById('search');
    search.addEventListener("click", function searchNote(searchValue) {
        var searchValue = document.getElementById('searchInput').value;
        var list = document.getElementsByClassName('note-list')[0];
        list.innerHTML = "";
        
        for (var i = 0; i < notes.length; i++) {
            var notesTitleText = notes[i].title.toLowerCase();
            var notesContentText = notes[i].contentText.toLowerCase();
            if ((notesTitleText.indexOf(searchValue) !== -1) || (notesContentText.indexOf(searchValue) !== -1 )) {
                list.append(noteElement(notes[i]));
            } 
        }
        document.getElementsByClassName('header-notes')[0].innerText = "Searched Notes";
    });

    

    // -----**** Showing all notes with a specific tag **** ------  
    
    function showNotesWithSpecificTag(tagName) {
        showNotes(isFavoriteView,tagName);
    }



    // -----**** Dynamically creating notes view **** ------  
    function noteElement(note) {
        var divNoteItem = document.createElement("div");
        divNoteItem.id = note.id;
        divNoteItem.className = "note-item";
        divNoteItem.onclick = function() { selectNote(note.id); };

        var divNoteTitle  = document.createElement("div");
        divNoteTitle.className = "note-title";
        divNoteTitle.textContent  = note.title; 

        var iconNoteFavorite = document.createElement('i');
        if (note.isFavorite == true) {
            iconNoteFavorite.className = "fas fa-star favorite-icon active-favorite"; 
        } else {
            iconNoteFavorite.className = "fas fa-star favorite-icon"; 
        }
        iconNoteFavorite.onclick = function() { favoriteNoteManager(note.id); }; 

        var divNoteCreated = document.createElement("div");
        divNoteCreated.className = "note-created";
        divNoteCreated.textContent = "Created: "+ note.created;

        var divNoteModified = document.createElement("div");
        divNoteModified.className = "note-modified";
        divNoteModified.textContent = "Modified: "+ note.modified;

        var divNoteContent = document.createElement("div");
        divNoteContent.className = "note-content";
        divNoteContent.textContent = note.contentText; 

        divNoteTitle.appendChild(iconNoteFavorite);
        divNoteItem.appendChild(divNoteTitle);
        divNoteItem.appendChild(divNoteCreated);
        divNoteItem.appendChild(divNoteModified);
        divNoteItem.appendChild(divNoteContent);
               
        return divNoteItem;
    };

    // -----**** Showing favorite notes  **** ------ 
    var favorite = document.querySelectorAll('.nav-favorites');
    for (var i= 0; i < favorite.length; i++) {
        favorite[i].onclick = function() { 
             isFavoriteView = true;
             showNotes(isFavoriteView);
         };
    }

   // -----**** Mark notes as FAVORITE **** ------  
    function favoriteNoteManager (noteId){
        for( var i = 0; i< notes.length; i++) {
            if ( notes[i].id == noteId){
                if (notes[i].isFavorite == true) {
                    notes[i].isFavorite = false;
                } else {
                    notes[i].isFavorite = true;
                }        
                localStorage.setItem("notes", JSON.stringify(notes));  //storing array in "notes" array in local storage 
                showNotes(isFavoriteView);
                break;
            }
        }
    }
    
    
    // -----**** delete note **** ------ 
    var deleteNote = document.querySelectorAll('.delete-note');
    for(let i = 0; i < deleteNote.length; i++) {
        deleteNote[i].addEventListener('click', noteDelete);
    }
    function noteDelete () {
        for(var i = 0; i < notes.length; i++) {
           var noteId = currentNoteId; 
            if (notes[i].id === noteId) {
              notes.splice(i,1);
              document.getElementById('noteTitle').value = "";
              quill.setContents("");
              document.getElementsByClassName('tag-holder')[0].innerHTML = "";
              document.getElementById('tagInput').value= "";
              localStorage.setItem("notes", JSON.stringify(notes));
              
              showNotes(isFavoriteView);
            }
        }
    };
       

    // -----**** GetUnique Id **** ------ 
    //https://gist.github.com/gordonbrander/2230317
     function uniqueID() {
        return Math.random().toString(36).substr(2, 9);
      };

})();



/*** THEMES EARTH/BLUE ***/
{
    // ANCHORS
    let bd = document.querySelector('body');
    let menuField = document.querySelector('#menuField');
    let earth = document.getElementById('earth');
    let sky = document.getElementById('sky');
    let themeSet = document.getElementById('themeFieldset');
    let btnDrop = document.querySelector('.btn-drop');
    let logoBrand = document.getElementById('logoBrand');
    let noteContainer = document.querySelector('.note-container');    
    let searchHeadField = document.querySelector('#searchHeadField');
    let noteSearch = document.querySelector('.note-search');
    let headerNotes = document.querySelector('.header-notes');
    let searchIcon = document.getElementById('search');
 

    // EVENT LISTENERS
    earth.addEventListener('click', changeStylesheet);
    sky.addEventListener('click', changeStylesheet);

   
    // CALLBACKS    
    function changeStylesheet() {
        let noteItems = document.querySelectorAll('.note-item');
        let noteTitles = document.querySelectorAll('.note-title');
        let noteCreated = document.querySelectorAll('.note-created');
        let noteMod = document.querySelectorAll('.note-modified');
        let noteContent = document.querySelectorAll('.note-content');

        menuField.setAttribute('class', '');
        var elId = this.id;

        if (elId === 'earth') {
            headerNotes.classList.remove('header-notes-sky');
            searchHeadField.classList.remove('search-head-sky');
            noteSearch.classList.remove('note-search-sky');
            searchIcon.classList.remove('fa-search-sky');
            menuField.setAttribute('class', 'earth-theme');

            noteItems.forEach( (note)=> {
                note.classList.remove('note-item-sky');

            });
            noteTitles.forEach( (note)=> {
                note.classList.remove('note-title-sky');                
            });
            noteCreated.forEach( (note)=> {
                note.classList.remove('note-created-sky');
            });
            noteMod.forEach( (note)=> {
                note.classList.remove('note-modified-sky');
            });
            noteContent.forEach( (note)=> {
                note.classList.remove('note-content-sky');
            });

            noteContainer.style.backgroundColor = "rgb(46,45,45)";
            themeSet.style.borderColor = "rgb(102,102,102)";
            btnDrop.style.backgroundColor = "rgb(92,92,92)";
            logoBrand.style.backgroundColor = "rgb(46,45,45)";
            bd.style.backgroundColor = "rgb(92,92,92)";
        }
        else if (elId === 'sky') {
            headerNotes.classList.toggle('header-notes-sky');
            searchHeadField.classList.toggle('search-head-sky');
            noteSearch.classList.toggle('note-search-sky');
            searchIcon.classList.toggle('fa-search-sky');
            menuField.setAttribute('class', 'sky-theme');
            noteContainer.style.backgroundColor = "rgb(248,249,249)";

            noteItems.forEach( (note)=> {
                note.classList.toggle('note-item-sky');
            });
            noteTitles.forEach( (note)=> {
                note.classList.toggle('note-title-sky');                
            });
            noteCreated.forEach( (note)=> {
                note.classList.toggle('note-created-sky');
            });
            noteMod.forEach( (note)=> {
                note.classList.toggle('note-modified-sky');
            });
            noteContent.forEach( (note)=> {
                note.classList.toggle('note-content-sky');
            });
            
            themeSet.style.borderColor = "rgb(182,182,182)";
            btnDrop.style.backgroundColor = "rgb(23, 117, 171)";
            logoBrand.style.backgroundColor = "rgb(16, 113, 167)";
            bd.style.backgroundColor = "rgb(36, 133, 197)";
        }
    }
}

{    
    let activeNotes = document.querySelector('.nav-newNote');    
    activeNotes.addEventListener('click', setListener);

    function setListener() {
        let noteItems = document.querySelectorAll('.note-item');
        console.log(noteItems.length);

        noteItems.forEach( (note)=> {
            note.addEventListener('click', activeNote);
        })
    }

    function activeNote() {
        let noteItems = document.querySelectorAll('.note-item');
        noteItems.forEach( (note)=> {
            note.classList.remove('note-active');
        })
        this.classList.toggle('note-active');
    }
}