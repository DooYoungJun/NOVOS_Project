document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");

    // 햄버거 메뉴 클릭 이벤트
    document.getElementById('navbar-toggle').addEventListener('click', function() {
        console.log("Navbar toggle clicked");
        var menu = document.querySelector('.navbar-menu');
        menu.classList.toggle('active');
        var toggle = document.getElementById('navbar-toggle');
        toggle.classList.toggle('change');
        var logo = document.querySelector('.navbar-logo');
        logo.classList.toggle('hidden');
    });

    // 현재 URL에 따라 active 클래스 추가
    var currentPage = window.location.pathname.split('/').pop();
    console.log("Current page:", currentPage);
    var menuItems = document.querySelectorAll('.navbar-item');
    menuItems.forEach(function(item) {
        console.log("Checking item:", item.getAttribute('data-link'));
        if (item.getAttribute('data-link') === currentPage) {
            item.classList.add('active');
            console.log("Active class added to:", item);
        } else {
            item.classList.remove('active');
        }
    });
});