// 구간 합 구하기 4

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numsArr = input[1].split(' ').map(Number);

function solution(input) {
  const dy = Array.from({ length: N + 1 }, () => 0);
  const answer = [];

  for (let i = 0; i < N; i++) {
    dy[i + 1] = dy[i] + numsArr[i];
  }

  for (let k = 2; k <= M + 1; k++) {
    const [i, j] = input[k].split(' ').map(Number);
    answer.push(dy[j] - dy[i - 1]);
  }

  return answer.join('\n');
}

console.log(solution(input));
