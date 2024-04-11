// 수열 추측하기(순열, 이항계수)
function solution(n, f) {
  let answer;
  let flag = 0;
  const memo = Array.from(Array(4), () => Array(4).fill(0));
  const binomial_coefficient = Array.from({ length: n }, () => 0);
  const permutation = Array.from({ length: n }, () => 0);
  const ch = Array.from({ length: n + 1 }, () => 0);

  function combi(n, r) {
    if (memo[n][r] > 0) return memo[n][r];
    if (n === r || r === 0) return 1;
    else return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  // 이항계수
  for (let i = 0; i < n; i++) {
    binomial_coefficient[i] = combi(n - 1, i);
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = permutation.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          permutation[L] = i;
          DFS(L + 1, sum + i * binomial_coefficient[L]);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, 0);

  return answer.join(' ');
}

console.log(solution(4, 16));
