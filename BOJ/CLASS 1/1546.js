// 평균

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().split('\n');
const score = input[1].split(' ').map((x) => Number(x));

function solution(arr) {
  let answer = 0;

  const M = Math.max(...arr);
  const newScore = arr.map((x) => (x / M) * 100);
  const sum = newScore.reduce((a, b) => a + b);
  answer = sum / arr.length;

  return answer;
}

console.log(solution(score));
