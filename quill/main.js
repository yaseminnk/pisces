/* allNotes = [{
  id: 0,
  note: 'bblabla'
},{
  id: 1,
  note: 'bblabla'
},{
  id: 2,
  note: 'bblabla'
},{
  id: 3,
  note: 'bblabla'
}] */


window.onload = function () {
  
  updateEditor(loadNote());
}

function loadNote() {
  
  //return >> skicka tillbaka notesträngen! >>
}

function saveNote() {


}

function updateEditor (note) {
  document.getElementsByClassName("ql-editor")[0].innerHTML = note;

}
var toolbarOptions=[
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{"header":[1,2,3,4,5,6, false]}],
  [{"list":"ordered"},{"list":"bullet"}],
  [{"script": "sub"}, {"script": "super"}],
  [{"indent":"-1"}, {"indent":"+1"}],
  [{"direction": "rtl"}],
  [{"size":["small", false, "large","huge"]}],
  ["link", "image", "video", "formula"],
  [{"color":[]}, {"background":[]}],
  [{"font":[]}],
  [{"align":[]}],
  ['omega']
];
var quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
    theme: 'snow'
  });

 // Get form, item, and notes
var addToNoteBook = document.querySelector('#addToNoteBook');
var note = document.querySelector('#note');
var noteBook = document.querySelector('#noteBook');
var noteContent = document.getElementsByClassName("ql-editor")[0];

addToNoteBook.addEventListener('submit', function (event) {

	// Don't save the form
	event.preventDefault();

	// Ignore it if the note is empty
	if (note.value.length < 1) return;

	// Add item to noteBook
	noteBook.innerHTML += '<p>' + note.value + '</p>';

	// Clear input
  note.value = '';
  
  // Save the list to localStorage
	localStorage.setItem('note', noteContent.innerHTML);

}, false);

// Check for saved note
var saved = localStorage.getItem('note');

// If there are any saved items, update our list
if (saved) {
	noteBook.innerHTML = saved;
}

