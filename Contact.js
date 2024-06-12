document.addEventListener("DOMContentLoaded", function() {
    var textInputs = document.querySelectorAll('.text');

    textInputs.forEach(function(input) {
        var placeholder = input.nextElementSibling;

        // 입력 필드에 포커스되면 placeholder를 숨기고, 포커스가 해제되면 다시 표시합니다.
        input.addEventListener('focus', function() {
            placeholder.style.display = 'none';
        });

        input.addEventListener('blur', function() {
            if (input.value === '') {
                placeholder.style.display = 'block';
            }
        });

        // 페이지 로드 시 placeholder 표시
        if (input.value === '') {
            placeholder.style.display = 'block';
        } else {
            placeholder.style.display = 'none';
        }
    });
});