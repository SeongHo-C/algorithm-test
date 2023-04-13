// 로프

const [N, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(N, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    // arr[i]: 사용할 로프 중 버틸 수 있는 최대 중량이 가장 작은 로프
    const weight = arr[i] * (N - i);
    answer = Math.max(answer, weight);
  }

  return answer;
}

console.log(solution(N, arr));
