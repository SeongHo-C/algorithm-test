// 카드2

const input = require('fs').readFileSync('예제.txt').toString().trim();

function solution(num) {
  const Q = Array.from({ length: num }, (v, i) => (v = i + 1));
  let idx = 0;

  while (idx !== Q.length - 1) {
    if (idx % 2 === 0) idx++;
    else Q.push(Q[idx++]);
  }

  return Q[idx];
}

console.log(solution(Number(input)));
