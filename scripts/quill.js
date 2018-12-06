

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

/*var Font = Quill.import('formats/font');
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['Mirza', 'Roboto','Noto Serif JP','Lobster', 'Lora'];
Quill.register(Font, true);

var quill = new Quill('#editor', {
modules: {
  toolbar: '#toolbar-container'
},
theme: 'snow'
});*/
  
  
  
  quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions,
    },
    placeholder: 'write here...',
    theme: 'snow'
  });




