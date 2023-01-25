// 이항 계수 1

const [N, K] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(N, K) {
  let answer = 0;

  const nF = (num) => {
    if (num === N - K) return 1;
    return num * nF(num - 1);
  };

  // 0! -> 1 이므로 K가 0일 경우도 생각해야 함!
  const kF = (num) => {
    if (num === 1 || num === 0) return 1;
    return num * kF(num - 1);
  };

  answer = nF(N) / kF(K);
  return answer;
}

console.log(solution(N, K));
