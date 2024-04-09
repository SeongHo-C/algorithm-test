// 조합의 경우수(메모이제이션)
function solution(n, r) {
  let answer;
  const memo = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (memo[n][r] > 0) return memo[n][r];
    if (r === 0 || n === r) return 1;
    else return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
