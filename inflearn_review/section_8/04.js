// 부분집합 구하기(DFS)
function solution(n) {
  const answer = [];
  const ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(L) {
    if (L === n + 1) {
      let tmp = '';

      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }

      if (tmp.length > 0) answer.push(tmp.trimEnd());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(1);

  return answer.join('\n');
}

console.log(solution(3));
