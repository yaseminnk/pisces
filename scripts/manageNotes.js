(function () { // Scoping function to avoid creating globals

    currentNoteId = "";
    window.notes = [];
    var storedNotes = JSON.parse(localStorage.getItem("notes"));
<<<<<<< HEAD
  
    if ( storedNotes !== null){
        notes= storedNotes;// Get the saved note from localStorage and return them as object
=======

    if (storedNotes !== null) {
        notes = storedNotes;// Get the saved ote from localStorage and return them as object
>>>>>>> 6b7c812c0729eb0282e40d8580969ba1c0009d29
        showAllNotes();
    } else {
    }


    // -----**** Creating new note and adding to the array **** ------
    var newNote = document.getElementById('navNewNote');
    newNote.addEventListener('click', function () {
        var newId = uniqueID();
        var note = {
            id: newId,
            title: "untitled",
            contentText: "no content...",
            contentHtml: "",
            created: new Date().toLocaleString()
        };
        document.getElementById('noteTitle').value = note.title;
        // document.getElementsByClassName('ql-editor')[0].innerHTML = "";
        quill.setContents(""); // setting an empty editor for writing new note.
        notes.unshift(note); //add notes to beginning of the Array, push() add item in the end of the array.
        //notes.push(note);
        showAllNotes();
        currentNoteId = note.id;
    });

    // -----**** Changing note title **** ------
    document.getElementById('noteTitle').addEventListener('change', function () {
        document.getElementById(currentNoteId).getElementsByClassName('note-title')[0].innerText = this.value;
    });


    // -----**** Saving notes **** ------
    var saveNote = document.getElementById('navSave'); // selecting anchor tag save
    saveNote.addEventListener('click', function () {
        // var noteContentHtml = document.getElementsByClassName('ql-editor')[0].innerHTML; 
        var noteContentHtml = quill.root.innerHTML; // getting content from editor
        var noteContentText = quill.getText(); // getting text without HTML

        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id == currentNoteId) {
                notes[i].contentHtml = noteContentHtml; // adding content with html to notes array
                notes[i].contentText = noteContentText; // adding content without html to notes array
                notes[i].title = document.getElementsByClassName('note-title')[i].innerHTML;// adding title to notes title
            }
        }

        localStorage.setItem("notes", JSON.stringify(notes));  //storing array in "notes" array in local storage 
        showAllNotes();
    });


    // -----**** Selecting a specific note to display on editor **** ------  
    window.selectNote = function (noteId) {
        //set noteId as currentNoteId
        currentNoteId = noteId;
        //select note by Id from notes Array
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id == noteId) {
                document.getElementById('noteTitle').value = notes[i].title; //set title to Title field
                quill.root.innerHTML = notes[i].contentHtml; //set contentHtml to quill editor
            }
        }
    }


    // -----**** enable/disable edit mode **** ------ 
    //{
    // create/add a edit option.
    //}

    // -----**** delete note **** ------  
    //document.getElementById('navTrash').addEventListener('click', function () {
    //localStorage.removeItem("");
    //});

    // -----**** Updates All notes view **** ------    
    function showAllNotes() {
        var allNotehtmlContent = "";
<<<<<<< HEAD
          for(var i=0; i< notes.length; i++){
            allNotehtmlContent += 
           '<div id="'+ notes[i].id +'" class="note-item" onClick="selectNote(\''+ notes[i].id +'\')">' +
              '<div class="note-title">'+ notes[i].title +'</div>' +
              '<div class="note-content">'+ notes[i].contentText +'</div>' +
              '<div class="note-created">'+ notes[i].created +'</div>' +
           '</div>';
          }
=======
        for (i = 0; i < notes.length; i++) {
            allNotehtmlContent +=
                '<div id="' + notes[i].id + '" class="note-item" onClick="selectNote(\'' + notes[i].id + '\')">' +
                '<div class="note-title">' + notes[i].title + '</div>' +
                '<div class="note-content">' + notes[i].contentText + '</div>' +
                '<div class="note-created">' + notes[i].created + '</div>' +
                '</div>';
        }
>>>>>>> 6b7c812c0729eb0282e40d8580969ba1c0009d29

        // notes.forEach(function(item){
        //   allNotehtmlContent += '<div class="note-item"><div class="note-title">'+ item.title +'</div><div class="note-content">'+ item.content +'</div><div class="note-created">'+ item.created +'</div></div>';
        // });

        var allNote = document.getElementsByClassName('note-field')[0];
        allNote.innerHTML = allNotehtmlContent;
    }


    // -----**** GetUnique Id **** ------ 
    //https://gist.github.com/gordonbrander/2230317
    var uniqueID = function () {
        return Math.random().toString(36).substr(2, 9);
    };


})();




