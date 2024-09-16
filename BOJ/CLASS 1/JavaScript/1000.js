// A + B

// 입력
const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .split(' ')
  .map((x) => Number(x));

// 풀이
function solution(arr) {
  let answer;

  answer = arr.reduce((sum, val) => sum + val);
  return answer;
}

// 출력
console.log(solution(input));
