// 미로 탐색
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1, N + 1).map((x) => x.split('').map(Number));

function solution() {
  const queue = [];
  const visited = Array.from({ length: N }, () => Array(M).fill(0));
  const count = Array.from({ length: N }, () => Array(M).fill(0));

  queue.push([0, 0]);
  visited[0][0] = 1;
  count[0][0] = 1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        if (visited[nx][ny] === 0 && maze[nx][ny] === 1) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
          count[nx][ny] = count[x][y] + 1;
        }
      }
    }
  }

  console.log(count[N - 1][M - 1]);
}

solution();
