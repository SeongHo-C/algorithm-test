// DFS와 BFS
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const data = input.slice(1, input.length).map((x) => x.split(' ').map(Number));

// 깊이 우선 탐색
function dfs(V, graph) {
  const visited = Array.from({ length: N + 1 }, () => 0);
  const path = [];

  function dfsRecursive(v) {
    visited[v] = 1;
    path.push(v);

    for (const nv of graph[v]) {
      if (!visited[nv]) dfsRecursive(nv);
    }
  }

  dfsRecursive(V);
  return path;
}

// 너비 우선 탐색
function bfs(V, graph) {
  const visited = Array.from({ length: N + 1 }, () => 0);
  const path = [];
  const queue = [];

  queue.push(V);
  visited[V] = 1;

  while (queue.length) {
    const current = queue.shift();
    path.push(current);

    for (const nv of graph[current]) {
      if (!visited[nv]) {
        visited[nv] = 1;
        queue.push(nv);
      }
    }
  }

  return path;
}

function solution() {
  const graph = Array.from({ length: N + 1 }, () => []);

  // 양방향 그래프
  for (const [a, b] of data) {
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const dfsPath = dfs(V, graph);
  const bfsPath = bfs(V, graph);

  console.log(dfsPath.join(' '));
  console.log(bfsPath.join(' '));
}

solution();
