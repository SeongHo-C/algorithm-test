// 요세푸스 문제 0

const [N, K] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(N, K) {
  const answer = [];
  const Q = Array.from({ length: N + 1 }, (_, i) => i);
  let i = 1;

  while (Q.length !== i) {
    if (i % K === 0) {
      answer.push(Q[i++]);
      continue;
    }

    Q.push(Q[i++]);
  }

  return `<${answer.join(', ')}>`;
}

console.log(solution(N, K));
