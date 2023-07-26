// 유기농 배추
const fs = require('fs');
const [T, ...data] = fs.readFileSync('예제.txt').toString().trim().split('\n');

function DFS(testCase) {
  let cntWorms = 0;
  const [M, N, K] = testCase[0];
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(0));

  // 상, 하, 좌, 우 이동
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 1; i <= K; i++) {
    const [y, x] = testCase[i];
    field[x][y] = 1;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 탐색을 시작할 배추 위치 조건
      if (visited[i][j] === 0 && field[i][j] === 1) {
        DFSRecursive(i, j);
        cntWorms++;
      }
    }
  }

  function DFSRecursive(x, y) {
    visited[x][y] = 1;

    if (field[x][y] === 0) return;
    for (let i = 0; i <= 3; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M && visited[nx][ny] === 0) {
        DFSRecursive(nx, ny);
      }
    }
  }

  return cntWorms;
}

function solution() {
  const answer = [];
  const testCases = [];

  // 테스트케이스 분리
  let idx = 0;
  while (idx < data.length) {
    const [M, N, K] = data[idx].split(' ').map(Number);

    testCases.push(
      data.slice(idx, idx + K + 1).map((v) => v.split(' ').map(Number))
    );
    idx += K + 1;
  }

  for (const testCase of testCases) {
    const cntWorms = DFS(testCase);
    answer.push(cntWorms);
  }

  return answer.join('\n');
}

console.log(solution());
