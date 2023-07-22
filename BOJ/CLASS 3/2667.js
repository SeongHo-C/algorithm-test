// 단지번호붙이기
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input.slice(1, input.length).map((x) => x.split('').map(Number));

function DFS(x, y, visited) {
  let cnt = 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function recursive(x, y) {
    for (let i = 0; i <= 3; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < N && visited[nx][ny] === 0) {
        visited[nx][ny] = 1;
        if (data[nx][ny] === 1) {
          cnt++;
          recursive(nx, ny);
        }
      }
    }
  }

  recursive(x, y);
  return cnt;
}

function solution() {
  const answer = [];
  const visited = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === 0) {
        visited[i][j] = 1;
        if (data[i][j] === 1) {
          const result = DFS(i, j, visited);
          answer.push(result);
        }
      }
    }
  }

  // (조건)각 단지에 속하는 집의 수를 오름차순으로 정렬
  answer.sort((a, b) => a - b);
  answer.unshift(answer.length);
  return answer.join('\n');
}

console.log(solution());
