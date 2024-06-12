document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navbar-toggle').addEventListener('click', function() {
        var menu = document.querySelector('.navbar-menu');
        menu.classList.toggle('active');
        var toggle = document.getElementById('navbar-toggle');
        toggle.classList.toggle('change');
        var logo = document.querySelector('.navbar-logo');
        logo.classList.toggle('hidden');
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
});
