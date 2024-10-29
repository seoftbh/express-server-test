const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// CORS 설정 - 리액트 클라이언트와의 통신 허용
app.use(cors());

// 간단한 테스트 API 엔드포인트 정의
app.get('/api/test', (req, res) => {
  res.json({ message: 'Express 서버에서 온 응답입니다!' });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
