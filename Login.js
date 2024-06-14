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

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3000;

// 임시 사용자 데이터베이스
const users = [
    { id: 1, username: 'user1', password: '$2b$10$VU5f.ejRt1LKh1KxVAmKbeCXLPqk5jQzWTsChNvbtghxC1T4l/Uy2' }, // password1
    { id: 2, username: 'user2', password: '$2b$10$LZd0V8HmBUIQbgthRb0hOehg7e2W5DqGvB6lHMfkmBrWg1Nf4P3bW' }  // password2
];

app.use(bodyParser.json());

// CORS 설정 (클라이언트와 서버가 다른 호스트 또는 포트에서 실행 중일 경우 필요)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// 로그인 라우터 설정
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // 데이터베이스에서 사용자 정보 확인 (실제로는 데이터베이스 쿼리로 변경 필요)
    const user = users.find(user => user.username === username);

    if (!user) {
        // 사용자가 존재하지 않음
        return res.json({ success: false, message: '사용자 이름 또는 비밀번호가 잘못되었습니다.' });
    }

    // 비밀번호 비교
    bcrypt.compare(password, user.password, (err, bcryptResult) => {
        if (err) {
            console.error('비밀번호 비교 중 에러가 발생했습니다.', err);
            return res.status(500).json({ success: false, message: '서버 에러' });
        }

        if (bcryptResult) {
            // 비밀번호 일치: 로그인 성공
            res.json({ success: true });
        } else {
            // 비밀번호 불일치: 로그인 실패
            res.json({ success: false, message: '사용자 이름 또는 비밀번호가 잘못되었습니다.' });
        }
    });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
