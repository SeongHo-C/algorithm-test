// 시그마

const [A, B] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// 시간 제한 0.25초
function solution(A, B) {
  let sum = 0;

  // 등차수열의 합 공식, 첫째 항과 마지막 항을 알고 있을 때 n(개수) * (첫째 항 + 마지막 항) / 2
  // A와 B중 어떤 것이 첫째 항인지 모른다.
  sum = A < B ? ((B - A + 1) * (A + B)) / 2 : ((A - B + 1) * (B + A)) / 2;

  return sum;
}

console.log(solution(A, B));
