function solution(n) {
  let answer = 0;
  const dp = Array.from({ length: 100000 }, () => 0);
  dp[0] = 0;
  dp[1] = 1;

  i = 2;
  while (i <= n) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    i++;
  }

  answer = dp[n];
  return answer;
}

console.log(solution(3));
console.log(solution(5));
