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