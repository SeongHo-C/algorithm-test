// 아스키 코드

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString();

function solution(str) {
  let answer;

  answer = str.charCodeAt();

  return answer;
}

console.log(solution(input));
