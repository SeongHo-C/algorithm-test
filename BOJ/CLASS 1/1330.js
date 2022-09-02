// 두 수 비교하기

const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .split(' ')
  .map((x) => Number(x));

function solution(a, b) {
  let answer = '';

  if (a < b) answer = '<';
  else if (a > b) answer = '>';
  else answer = '==';

  return answer;
}

console.log(solution(input[0], input[1]));
