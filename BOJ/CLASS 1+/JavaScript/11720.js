// 숫자의 합

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');
const test = input[1].split('').map((x) => Number(x));

function solution(num) {
  let answer = 0;

  for (let x of num) answer += x;

  return answer;
}

console.log(solution(test));
