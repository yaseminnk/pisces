let mainNav = document.getElementById('jsMenu');
let navBarToggle = document.getElementById('jsNavbarToggle');
let btnGetStarted = document.getElementById ('btnGetStarted');


// EventListener for hamburger menu.

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

// EventListener for opening editor.

btnGetStarted.addEventListener('click', function() {
    // window.open("editor.html");
    window.open('editor.html','_self');
});

// Cookie handling
var values = document.cookie;

// if (values.indexOf("visitedQuire=") >= 0) { //cheching if there is any cookie named "visitedQuire", if yes then redirecting to editor
//     window.open('editor.html', '_self');
//     // console.log("hello");
// } else {
//     document.cookie = "visitedQuire=true"; // setting cookie
// }


// if( values.indexOf("visitedQuire=") === -1 ) {
//     document.cookie = "visitedQuire=true;"; // setting cookie
//     //window.open('index.html', '_self');
 
//  } else {
//     //document.cookie = "visitedQuire=false"; // setting cookie
//     window.open('editor.html', '_self');
//  }