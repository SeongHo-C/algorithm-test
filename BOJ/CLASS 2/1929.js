// 소수 구하기

const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .split(' ')
  .map((x) => Number(x));
const M = input[0];
const N = input[1];

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(M, N) {
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) console.log(i);
  }
}

solution(M, N);
