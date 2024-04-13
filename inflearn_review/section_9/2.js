// 경로 탐색(인접리스트) - 노드 개수가 많을 때 적용
function solution(n, arr) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array());
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        const next_v = graph[v][i];

        if (ch[next_v] === 0) {
          ch[next_v] = 1;
          DFS(next_v);
          ch[next_v] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
