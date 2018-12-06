
let mainNav = document.getElementById('jsMenu');
let navBarToggle = document.getElementById('jsNavbarToggle');
let btnGetStarted = document.getElementById ('btnGetStarted');


// EventListener for hamburger menu.
navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

// EventListener for opening editor.
btnGetStarted.addEventListener('click', function() {    
    window.open('editor.html','_self');
});


// check if there are cookies and if so redirect the user to the editor

var values = document.cookie;

if( values.indexOf("visitedQuire=") === -1 ) {
    document.cookie = "visitedQuire=true;"; // setting cookie
    //window.open('index.html', '_self');        
 
 } else {
    //document.cookie = "visitedQuire=false"; // setting cookie
    window.open('editor.html', '_self');
 }

