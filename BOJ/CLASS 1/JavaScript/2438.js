// 별 찍기 - 1

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString();

function solution(num) {
  let answer = '';
  const star = '*';

  for (let i = 0; i < num; i++) {
    answer = '';
    for (let j = 0; j < i + 1; j++) {
      answer += star;
    }
    console.log(answer);
  }
}

solution(Number(input));
