document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // 요소가 나타나면 관찰 중지
            }
        });
    });

    const target = document.querySelector('.color-box');
    observer.observe(target);

    // 이미지 투명도를 조절하는 함수
    function setOpacity(opacity) {
        target.style.opacity = opacity;
    }

    // 스크롤에 따라 이미지의 투명도를 조절
    window.addEventListener('scroll', function () {
        // 윈도우의 스크롤 위치를 가져옴
        const scrollY = window.scrollY || window.pageYOffset;
        // 이미지의 투명도를 스크롤 위치에 따라 조절 (0에서 1 사이)
        const opacity = Math.min(scrollY / 1000, 1); // 스크롤 위치에 따라 투명도 조절
        setOpacity(opacity);
    });
});