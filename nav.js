document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
    var navbarToggle = document.getElementById('navbar-toggle');
    var menu = document.querySelector('.navbar-menu');
    var navbar = document.getElementById('navbar');

    navbarToggle.addEventListener('click', function() {
=======
    document.getElementById('navbar-toggle').addEventListener('click', function() {
        var menu = document.querySelector('.navbar-menu');
>>>>>>> 825a21083d5b04f0a2422ed03ee11871c144123a
        menu.classList.toggle('active');
        navbarToggle.classList.toggle('change');
        var logo = document.querySelector('.navbar-logo');
        logo.classList.toggle('hidden');
    });
<<<<<<< HEAD

    // 스크롤 시 따라오는 네비게이션 바(왜인지 안됨)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 현재 페이지 URL 가져오기
    var currentPage = window.location.pathname.split("/").pop();

    // 모든 네비게이션 항목 가져오기
    var navItems = document.querySelectorAll('.navbar-item');

    // 현재 페이지와 일치하는 항목에 active 클래스 추가
    navItems.forEach(function(item) {
        if (item.getAttribute('data-link') === currentPage) {
            item.classList.add('active');
        }
    });
=======
>>>>>>> 825a21083d5b04f0a2422ed03ee11871c144123a
});
