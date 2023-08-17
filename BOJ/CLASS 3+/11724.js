// 연결 요소의 개수
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const lines = input.slice(1, M + 1).map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => 0);

function DFS(v) {
  for (let x of graph[v]) {
    if (visited[x] === 0) {
      visited[x] = 1;
      DFS(x);
    }
  }
}

function solution() {
  let answer = 0;

  // 무방향 그래프
  for (const [a, b] of lines) {
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i] === 0) {
      DFS(i);
      answer++;
    }
  }

  return answer;
}

console.log(solution());
