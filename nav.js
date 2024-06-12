document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navbar-toggle').addEventListener('click', function() {
        var menu = document.querySelector('.navbar-menu');
        menu.classList.toggle('active');
        var toggle = document.getElementById('navbar-toggle');
        toggle.classList.toggle('change');
        var logo = document.querySelector('.navbar-logo');
        logo.classList.toggle('hidden');
    });
});
