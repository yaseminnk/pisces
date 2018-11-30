

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //[{ 'font': [] }],
  [{ 'align': [] }],
  ['link', 'image'],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

  ['clean']                                         // remove formatting button

];

var Font = Quill.import('formats/font');
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['Mirza', 'Roboto','Noto Serif JP','Lobster', 'Lora'];
Quill.register(Font, true);

var quill = new Quill('#editor', {
modules: {
  toolbar: '#toolbar-container'
},
theme: 'snow'
});
  
  
  
  quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions,
    },
    placeholder: 'write here...',
    theme: 'snow'
  });

var btnSaveDelta = document.getElementById('btnSaveDelta');

/*
btnSaveDelta.addEventListener('click', function() {
  
});
*/

// Cookies

/*
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

window.onload = function(){
  let text = getCookie("textArea");
  if (text!=""){
    document.getElementById("savedNotes").innerHTML= text;
  }
}
document.getElementById("saveButton").addEventListener("click", function(){
  let text = quill.root.innerHTML; //the Quill editor is saved in this quill variable
  if (text!="" && text!=null){
    document.getElementById("savedNotes").innerHTML=text;
    setCookie("textArea", text, 365);
  }else{
    alert("You didn't write a note");
  }
});
*/
