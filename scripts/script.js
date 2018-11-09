let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
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