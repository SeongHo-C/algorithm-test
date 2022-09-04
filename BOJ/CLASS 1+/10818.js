// 최소, 최대

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

const test = input[1].split(' ').map((x) => Number(x));

function solution(arr) {
  let answer = [];

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  answer.push(min);
  answer.push(max);

  return answer[0] + ' ' + answer[1];
}

console.log(solution(test));
