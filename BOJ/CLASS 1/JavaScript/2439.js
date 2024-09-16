// 별 찍기 - 2

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString();

function solution(num) {
  let answer;

  for (let i = 0; i < num; i++) {
    answer = '';

    for (let k = 0; k < num - (i + 1); k++) {
      answer += ' ';
    }
    for (let j = 0; j < i + 1; j++) {
      answer += '*';
    }
    console.log(answer);
  }
}

solution(Number(input));
