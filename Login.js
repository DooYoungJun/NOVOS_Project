document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // 폼 기본 동작 방지
  
      // 입력 값 가져오기
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // 서버로 POST 요청 보내기 (AJAX 사용)
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // 로그인 성공 시 홈페이지로 리다이렉트
            window.location.href = 'home.html'; // 홈페이지 경로 설정
          } else {
            alert(data.message); // 로그인 실패 시 메시지 출력
          }
        })
        .catch(error => {
          console.error('로그인 중 에러 발생:', error);
          alert('로그인 중 에러가 발생했습니다. 다시 시도해주세요.');
        });
    });
  });