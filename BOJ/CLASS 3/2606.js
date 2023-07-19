// 바이러스
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const VN = parseInt(input[0]);
const E = input.slice(2, input.length).map((x) => x.split(' ').map(Number));

function solution() {
  let answer = 0;
  const visited = Array.from({ length: VN + 1 }, () => 0);
  const graph = Array.from({ length: VN + 1 }, () => []);

  for (let [a, b] of E) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function DFS(v) {
    for (let nv of graph[v]) {
      if (visited[nv] === 0) {
        visited[nv] = 1;
        answer++;
        DFS(nv);
      }
    }
  }

  visited[1] = 1;
  DFS(1);

  return answer;
}

console.log(solution());
