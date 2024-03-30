// 재귀함수
function solution(n) {
  const answer = [];

  function DFS(L) {
    if (L === 0) return;

    DFS(L - 1);
    answer.push(L);
  }
  DFS(n);

  return answer.join(' ');
}

console.log(solution(3));
