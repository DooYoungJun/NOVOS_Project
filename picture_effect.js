document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // 요소가 나타나면 관찰 중지

                // 한 번만 효과를 주고 이벤트 리스너를 제거
                window.removeEventListener('scroll', scrollHandler);
            }
        });
    });

    const target = document.querySelector('.color-box');
    observer.observe(target);

    // 스크롤에 따라 이미지의 투명도를 조절하는 이벤트 리스너
    function scrollHandler() {
        const scrollY = window.scrollY || window.pageYOffset;
        const opacity = Math.min(scrollY / 1000, 1); // 최대 투명도를 1로 유지
        setOpacity(opacity);
    }

    // 이미지 투명도를 조절하는 함수
    function setOpacity(opacity) {
        target.style.opacity = opacity;
    }

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', scrollHandler);
});