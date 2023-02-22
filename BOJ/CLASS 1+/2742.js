// 기찍 N
const N = require('fs').readFileSync('예제.txt').toString().trim();

function solution(num) {
  let answer = '';

  for (let i = num; i > 0; i--) {
    answer += i + '\n';
  }

  return answer.trimEnd();
}

console.log(solution(N));
