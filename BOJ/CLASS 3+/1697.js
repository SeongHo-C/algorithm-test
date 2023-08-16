// 숨바꼭질
const fs = require('fs');
const [N, K] = fs
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution() {
  const queue = [];
  // 틀린 원인 - 배열의 길이를 설정할 때는 입력 조건에 유의!
  const cnt = Array.from({ length: K + 100000 }, () => 0);
  const visited = Array.from({ length: K + 100000 }, () => 0);

  queue.push(N);
  visited[N] = 1;
  cnt[N] = 0;

  while (queue.length) {
    const X = queue.shift();
    if (X === K) return cnt[K];

    for (const move of [X - 1, X + 1, 2 * X]) {
      if (visited[move] === 0) {
        queue.push(move);
        visited[move] = 1;
        cnt[move] = cnt[X] + 1;
      }
    }
  }
}

console.log(solution());
