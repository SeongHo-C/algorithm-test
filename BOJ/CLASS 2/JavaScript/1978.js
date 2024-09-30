// 소수 찾기

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');
const test = input[1];

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = 0;
  let sum = 0;

  arr.split(' ').forEach((num) => {
    if (isPrime(Number(num))) sum++;
  });

  answer = sum;

  return answer;
}

console.log(solution(test));
