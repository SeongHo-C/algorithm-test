// 병든 나이트

const [N, M] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(N, M) {
  let answer;

  // N 또는 M이 1일 경우 이동 불가
  if (N === 1 || M === 1) answer = 1;
  // N이 2일 경우 2, 3 이동 방법만 사용 가능하므로 최대 4칸 방문 가능
  else if (N === 2) answer = Math.min(4, Math.floor((M + 1) / 2));
  // N은 3이상이면서 M은 7이상일 경우에만 이동 방법 4가지를 모두 사용 가능, 7이하일 경우에는 최대 4칸 방문 가능
  else if (M < 7) answer = Math.min(4, M);
  // 2, 3 이동 방법을 한번씩만 사용(탐욕)
  else answer = M - 2;

  return answer;
}

console.log(solution(N, M));
