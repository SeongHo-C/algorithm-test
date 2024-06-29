function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  // 중간에 모듈러 연산을 수행하는 것은 숫자의 크기를 작게 유지하여 오버플로우를 방지하고 계산을 더 효율적으로 하기 위한 방법
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }

  return dp[n];
}

console.log(solution(4));
console.log(solution(3));
console.log(solution(1));
console.log(solution(2000));
