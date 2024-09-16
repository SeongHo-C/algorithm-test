// 구구단

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString();

function solution(num) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

solution(Number(input));
