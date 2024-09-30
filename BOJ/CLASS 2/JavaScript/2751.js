// 수 정렬하기 2

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

function solution(input) {
  const [N, ...arr] = input;

  arr.sort((a, b) => a - b);

  return arr.join('\n');
}

console.log(solution(input));
