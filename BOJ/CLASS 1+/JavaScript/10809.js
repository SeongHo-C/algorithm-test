// 알파벳 찾기

const alpha = require('fs').readFileSync('예제.txt').toString().trim();

function solution(alpha) {
  const answer = [];

  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    if (alpha.includes(char)) answer.push(alpha.indexOf(char));
    else answer.push(-1);
  }

  return answer.join(' ');
}

console.log(solution(alpha));
