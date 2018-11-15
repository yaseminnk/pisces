(function(){

    currentNoteId = "";
    
    var notes = [
      {
          id : "3434",
          title : "Note01",
          content : "This is a beautiful note...",
          created : "2018-11-14, 10:50:00 PM"
      },
      {
          id : "12121",
          title : "Note02",
          content : "This is another note...",
          created : "2018-11-10, 11:06:00 PM"
      }
      ];
    loadNotes();
    
    
    
    var newNote = document.getElementById('nav-new-note').getElementsByTagName('a')[0];
    newNote.addEventListener('click',function(){
        var newId = uniqueID();
        var note = { id : newId, title : "Untitled" , content : "no content" , created : new Date().toLocaleString()};
    
        document.getElementById('noteTitle').value = "Untitled";
    
        
        notes.unshift(note); //add notes to beginning of the Array, push() add item in the end of the array.
        loadNotes();
    
        currentNoteId = note.id;
    });
    
    document.getElementById('noteTitle').addEventListener('change', function() {
       document.getElementById(currentNoteId).getElementsByClassName('note-title')[0].innerText = this.value;
    });
    
    
    
    function loadNotes()
    {
        var allNotehtmlContent = "";
          for(i=0; i< notes.length; i++){
            allNotehtmlContent += 
           '<div id="'+ notes[i].id +'" class="note-item" >' +
              '<div class="note-title">'+ notes[i].title +'</div>' +
              '<div class="note-content">'+ notes[i].content +'</div>' +
              '<div class="note-created">'+ notes[i].created +'</div>' +
           '</div>';
          }
        
    
        // notes.forEach(function(item){
        //   allNotehtmlContent += '<div class="note-item"><div class="note-title">'+ item.title +'</div><div class="note-content">'+ item.content +'</div><div class="note-created">'+ item.created +'</div></div>';
        // });
    
        var allNote = document.getElementsByClassName('note-field')[0];
        allNote.innerHTML = allNotehtmlContent;
    }
    
    
    //https://gist.github.com/gordonbrander/2230317
    //GetUnique Id
    var uniqueID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return Math.random().toString(36).substr(2, 9);
      };
    
    })();
    
    