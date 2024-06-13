const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'no_element'
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 서버에 연결할 수 없습니다.', err);
    return;
  }
  console.log('MySQL 서버에 연결되었습니다.');
});

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// 회원가입 라우터 설정
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // 데이터베이스에 사용자 정보 삽입
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  connection.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error('회원가입 중 에러가 발생했습니다.', err);
      res.status(500).send('회원가입 중 에러가 발생했습니다.');
      return;
    }
    res.send('회원가입이 완료되었습니다.');
  });
});

// index.html 파일 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});