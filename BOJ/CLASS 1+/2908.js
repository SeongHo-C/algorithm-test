// 상수

const [A, B] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split(' ');

function solution(A, B) {
  let answer;

  const reverseA = A.split('').reverse().join('');
  const reverseB = B.split('').reverse().join('');

  answer = reverseA > reverseB ? reverseA : reverseB;
  return answer;
}

console.log(solution(A, B));
