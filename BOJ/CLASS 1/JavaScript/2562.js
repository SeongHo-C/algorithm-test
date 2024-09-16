// 최댓값

const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .split('\n')
  .map((x) => Number(x));

function solution(arr) {
  let answer = [];

  const max = Math.max(...arr);
  answer.push(max);
  const index = arr.indexOf(max);
  answer.push(index + 1);

  return answer[0] + '\n' + answer[1];
}

console.log(solution(input));
