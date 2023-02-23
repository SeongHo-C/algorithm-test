// 달팽이는 올라가고 싶다
// (시간 초과 유의!)

const [A, B, V] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(A, B, V) {
  let answer = 1;

  answer += Math.ceil((V - A) / (A - B));

  return answer;
}

console.log(solution(A, B, V));
