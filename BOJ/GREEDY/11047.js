// 동전 0

const [NK, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [N, K] = NK.split(' ').map(Number);
const coins = arr.map(Number);

function solution(N, K, coins) {
  let answer = 0;

  for (let i = N - 1; i >= 0; i--) {
    // 현재 동전의 가치(coins[i])가 K보다 작거나 같은지 확인
    if (coins[i] <= K) {
      // 현재 동전의 가치(coins[i])를 최대로 사용
      answer += Math.floor(K / coins[i]);
      // 남은 금액 업데이트
      K %= coins[i];
    }
  }

  return answer;
}

console.log(solution(N, K, coins));
