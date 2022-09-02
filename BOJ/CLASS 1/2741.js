// N 찍기

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString();

function solution(num) {
  let answer = '';

  for (let i = 1; i < num; i++) {
    answer += i + '\n';
  }
  answer += num;

  return answer;
}

console.log(solution(Number(input)));
