// 요세푸스 문제

const [N, K] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(N, K) {
  const answer = [];
  const arr = Array.from({ length: N }, (_, i) => i + 1);

  while (arr.length > 0) {
    // K번째 전까지 큐의 마지막 요소로 이동
    for (let i = 0; i < K - 1; i++) arr.push(arr.shift());
    // K번째 요소 제거
    answer.push(arr.shift());
  }

  return `<${answer.join(', ')}>`;
}

console.log(solution(N, K));
