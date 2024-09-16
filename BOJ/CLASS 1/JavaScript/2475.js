// 검증수

const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .split(' ')
  .map((x) => Number(x));

function solution(arr) {
  let answer;

  const newArr = arr.map((x) => x ** 2);
  const sum = newArr.reduce((a, b) => a + b);
  answer = sum % 10;

  return answer;
}

console.log(solution(input));
