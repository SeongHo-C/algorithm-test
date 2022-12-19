// 1, 2, 3 더하기

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

function DP(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[0] = 1;
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 3] + dy[i - 2] + dy[i - 1];
  }

  return dy[n];
}

function solution(input) {
  const answer = [];

  for (let i = 1; i <= input[0]; i++) {
    answer.push(DP(Number(input[i])));
  }

  return answer.join('\n');
}

console.log(solution(input));
