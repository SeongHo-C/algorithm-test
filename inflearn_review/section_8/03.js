// 이진트리 순회(깊이우선탐색)
function solution(n) {
  let answer = '';

  function DFS(v) {
    if (v > 7) return;

    // 전위순회
    // answer += v + ' ';
    DFS(v * 2);
    DFS(v * 2 + 1);
    // 후위순회
    answer += v + ' ';
  }
  DFS(n);

  return answer;
}

console.log(solution(1));
