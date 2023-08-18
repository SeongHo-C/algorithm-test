// 파도반 수열
const fs = require('fs');
const [T, ...testcases] = fs
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution() {
  const answer = [];
  const P = [];
  const maxOfN = Math.max(...testcases);

  P[1] = 1;
  P[2] = 1;
  P[3] = 1;
  P[4] = 2;
  P[5] = 2;

  for (let i = 6; i <= maxOfN; i++) {
    P[i] = P[i - 1] + P[i - 5];
  }

  for (const N of testcases) {
    answer.push(P[N]);
  }

  return answer.join('\n');
}

console.log(solution());
