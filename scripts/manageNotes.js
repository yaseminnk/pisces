(function(){ // Scoping function to avoid creating globals

    currentNoteId = "";
    window.notes = [];
    var storedNotes = JSON.parse(localStorage.getItem("notes"));
  
    if ( storedNotes !== null){
        notes= storedNotes;// Get the saved note from localStorage and return them as object
        showAllNotes();
    } else {
        }
        

    // -----**** Creating new note and adding to the array **** ------
    var newNote = document.querySelectorAll('.nav-newNote');
    newNote.addEventListener('click',function(){
        var newId = uniqueID();
        var note = {
                     id : newId,
                     title : "untitled", 
                     contentText : "no content...", 
                     contentHtml : "",  
                     created : new Date().toLocaleString(),
                     isFavorite : false
                    };
        document.getElementById('noteTitle').value = note.title;
        quill.setContents(""); // setting an empty editor for writing new note.
        notes.unshift(note); //add notes to beginning of the Array, push() add item in the end of the array.
       //notes.push(note);
        showAllNotes();
        currentNoteId = note.id;
    });

    // -----**** Changing note title **** ------
     document.getElementById('noteTitle').addEventListener('change', function() {   
         document.getElementById(currentNoteId).getElementsByClassName('note-title')[0].innerText = this.value;
         saveAllNotes();
     });


    // -----**** Saving notes **** ------
    var saveNote = document.getElementsByClassName('save');
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
                showAllNotes();
                break;
            }
        }
    };

    // -----**** Selecting a specific note to display on editor **** ------  
    window.selectNote = function  (noteId) {
        //set noteId as currentNoteId
        currentNoteId = noteId;
        //select note by Id from notes Array
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id == noteId )
            {
                document.getElementById('noteTitle').value =  notes[i].title ; //set title to Title field
                quill.root.innerHTML = notes[i].contentHtml; //set contentHtml to quill editor
                break;
            }
        }
    }

///Kristian

    // window.saveDummyNotes = function () {

    //     notes = [];
    //     var note = {
    //         id: 1,
    //         title: "untitled",
    //         contentText: "no content...",
    //         contentHtml: "",
    //         created: new Date().toLocaleString()
    //     };
    //     notes.push(note);

    //     localStorage.setItem("notes", JSON.stringify(notes));
    // }

    ///Kristian

    // -----**** Updates All notes view **** ------    
    function showAllNotes()
    {
        var allNotehtmlContent = "";
          for(i=0; i< notes.length; i++){
            var favIconActiveClass = null;
            if (notes[i].isFavorite == true){
                favIconActiveClass = "active-favorite";
            } else {
                favIconActiveClass = "";
            } 
            allNotehtmlContent += 
           '<div id="'+ notes[i].id +'" class="note-item" onClick="selectNote(\''+ notes[i].id +'\')">' +
              '<div class="note-title">'+ notes[i].title +'<i class="fas fa-star favorite-icon ' + favIconActiveClass + '" onClick="favoriteNoteManager(\''+ notes[i].id +'\')"></i></div>' +
              '<div class="note-content">'+ notes[i].contentText +'</div>' +
              '<div class="note-created">'+ notes[i].created +'</div>' +
           '</div>';
          }

        // notes.forEach(function(item){
        //   allNotehtmlContent += '<div class="note-item"><div class="note-title">'+ item.title +'</div><div class="note-content">'+ item.content +'</div><div class="note-created">'+ item.created +'</div></div>';
        // });
    
        var allNote = document.getElementsByClassName('note-lists')[0];
        allNote.innerHTML = allNotehtmlContent;
    }
    
   // -----**** Mark notes as FAVORITE **** ------  
    window.favoriteNoteManager = function(noteId)
    {
        for( var i = 0; i< notes.length; i++) {
            if ( notes[i].id == noteId){
                if (notes[i].isFavorite == true) {
                    notes[i].isFavorite = false;
                } else {
                    notes[i].isFavorite = true;
                }        
                localStorage.setItem("notes", JSON.stringify(notes));  //storing array in "notes" array in local storage 
                showAllNotes();
                break;
            }
        }
    }

    // -----**** Added new eventListener and closed the toggle view **** ------ 
    var myNotes = document.querySelector('.nav-notes');
    myNotes.addEventListener('click', function() {
        showAllNotes();
    });

// -----**** Showing favorite notes  **** ------ 
    var favorite = document.querySelector('.nav-favorites');
    favorite.addEventListener ('click', myFavorite );
    function myFavorite() {
        //show only favoties
        var allNotehtmlContent = "";
        for (var i = 0; i < notes.length; i++) {
            var favIconActiveClass = null;
            if (notes[i].isFavorite == true){
                favIconActiveClass = "active-favorite";
                allNotehtmlContent += 
                '<div id="'+ notes[i].id +'" class="note-item" onClick="selectNote(\''+ notes[i].id +'\')">' +
                '<div class="note-title">'+ notes[i].title +'<i class="fas fa-star favorite-icon ' + favIconActiveClass + '" onClick="favoriteNoteManager(\''+ notes[i].id +'\')"></i></div>' +
                '<div class="note-content">'+ notes[i].contentText +'</div>' +
                '<div class="note-created">'+ notes[i].created +'</div>' +
                '</div>';

                var favNote = document.getElementsByClassName('note-lists')[0];
                favNote.innerHTML = allNotehtmlContent;
            } else {
                continue;
            } 
        }
    };
    
     // -----**** delete note **** ------ 
    var deleteNote = document.querySelector('.nav-delete');
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
              localStorage.setItem("notes", JSON.stringify(notes));
              showAllNotes();
            }
        }
    };

    

    // -----**** GetUnique Id **** ------ 
    //https://gist.github.com/gordonbrander/2230317
    var uniqueID = function () {
        return Math.random().toString(36).substr(2, 9);
      };

})();