// 중복순열 구하기
function solution(n, m) {
  const answer = [];
  const tmp = Array.from({ length: m }, () => 0);

  // m중 for문의 단점을 DFS로 해결
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice().join(' '));
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);

  answer.push(answer.length);
  return answer.join('\n');
}

console.log(solution(3, 2));
