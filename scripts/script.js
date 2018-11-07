let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let btnGetStarted = document.getElementById ('btnGetStarted');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

btnGetStarted.addEventListener('click', function() {
    window.open("editor.html");
});