// 최대공약수와 최소공배수

const [A, B] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function getGCD(A, B) {
  let gcd;

  gcd = B > 0 ? getGCD(B, A % B) : A;

  return gcd;
}

function solution(A, B) {
  let answer;

  const gcd = getGCD(A, B);
  const lcm = (A * B) / getGCD(A, B);

  answer = [gcd, lcm].join('\n');
  return answer;
}

console.log(solution(A, B));
