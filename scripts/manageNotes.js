(function(){ // Scoping function to avoid creating globals

    currentNoteId = "";
    window.notes = [];
    var storedNotes = JSON.parse(localStorage.getItem("notes"));
  
    if ( storedNotes !== null){
        notes= storedNotes;// Get the saved note from localStorage and return them as object
        showNotes(false); //showNotes(true) only to show favorite notes
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
                isFavorite : false,
                tags : []
            };
        document.getElementById('noteTitle').value = note.title;
        quill.setContents(""); // setting an empty editor for writing new note.
        document.getElementById('tagInput').value = "";
        notes.unshift(note); //add notes to beginning of the Array, push() add item in the end of the array.
       //notes.push(note);
        showNotes(false);
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
                
                localStorage.setItem("notes", JSON.stringify(notes));  //storing array in "notes" array in local storage 
                showNotes(false);
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
        showNotes(false);
    });

    // -----**** Updates All notes view **** ------    
    function showNotes(showOnlyFavorites,selectedTag) // -----**** 2018/12704  **** ------ 
    {   
        var noteList = document.getElementsByClassName('note-lists')[0];
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

        if(showOnlyFavorites){
            document.getElementsByClassName('header-notes')[0].innerText = "Favorite Notes";  
        } else {
            if(selectedTag) {
                document.getElementsByClassName('header-notes')[0].innerText = "Notes Tagged With " + selectedTag;
            } 
            else {
                document.getElementsByClassName('header-notes')[0].innerText = "My Notes"; 
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

        var list = document.getElementsByClassName('note-lists')[0];
        list.innerHTML = "";
        for(let i = 0; i < allTags.length; i++){
            var divTagItem = document.createElement('div');
            divTagItem.setAttribute("class", "note-tags");
            divTagItem.onclick = function() { showNotesWithSpecificTag(allTags[i]); };
            divTagItem.append(allTags[i]);

            list.append(divTagItem);
        }
        document.getElementsByClassName('header-notes')[0].innerText = "All Tags";
    }
    

    // -----**** Showing all notes with a specific tag **** ------  
    
    function showNotesWithSpecificTag(tagName) {
        showNotes(false,tagName);
    }




    // -----**** Dynamically creating notes view **** ------  
    function  noteElement(note) {
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

        var divNoteContent = document.createElement("div");
        divNoteContent.className = "note-content";
        divNoteContent.textContent = note.contentText; 

        var divNoteCreated = document.createElement("div");
        divNoteCreated.className = "note-created";
        divNoteCreated.textContent =  note.created;
        
        divNoteTitle.appendChild(iconNoteFavorite);
        divNoteItem.appendChild(divNoteTitle);
        divNoteItem.appendChild(divNoteContent);
        divNoteItem.appendChild(divNoteCreated);
        
        return divNoteItem;
    };

    // -----**** Showing favorite notes  **** ------ 
    var favorite = document.querySelectorAll('.nav-favorites');
    for (var i= 0; i < favorite.length; i++) {
        favorite[i].onclick = function() {  showNotes(true); };
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
                showNotes(false);
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
              showNotes(false);
            }
        }
    };
   
    

    // -----**** GetUnique Id **** ------ 
    //https://gist.github.com/gordonbrander/2230317
     function uniqueID() {
        return Math.random().toString(36).substr(2, 9);
      };

})();