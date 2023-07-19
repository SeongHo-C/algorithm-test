// 피보나치 함수
const fs = require('fs');
const [T, ...testCases] = fs
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(T, testCases) {
  const answer = [];
  const max = Math.max(...testCases);
  const dy = Array.from({ length: max + 1 }, () => []);

  dy[0] = [1, 0];
  dy[1] = [0, 1];

  for (let j = 2; j <= max; j++) {
    dy[j][0] = dy[j - 1][0] + dy[j - 2][0];
    dy[j][1] = dy[j - 1][1] + dy[j - 2][1];
  }

  for (let N of testCases) {
    answer.push(`${dy[N][0]} ${dy[N][1]}`);
  }

  return answer.join('\n');
}

console.log(solution(T, testCases));
