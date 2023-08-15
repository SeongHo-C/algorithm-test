// 토마토
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const info = input.slice(1, N + 1).map((v) => v.split(' ').map(Number));

function solution() {
  let answer = 0;
  const queue = [];
  const day = Array.from({ length: N }, () => Array(M).fill(0));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (info[i][j] === 1) {
        queue.push([i, j]);
        day[i][j] = 0;
      }
    }
  }

  // shift() 메서드를 사용할 때 최악의 경우 시간 복잡도 O(N) - 시간 초과의 원인!
  // 포인터(idx)를 사용하여 직접 접근할 경우 시간 복잡도 O(1)
  let idx = 0;
  while (queue.length > idx) {
    const [x, y] = queue[idx++];

    for (let i = 0; i <= 3; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M && info[nx][ny] === 0) {
        queue.push([nx, ny]);
        info[nx][ny] = 1;
        day[nx][ny] = day[x][y] + 1;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (info[i].includes(0)) return -1;
    answer = Math.max(answer, ...day[i]);
  }

  return answer;
}

console.log(solution());
