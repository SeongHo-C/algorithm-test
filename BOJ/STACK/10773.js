// 제로

const [K, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(arr) {
  let answer;
  const stack = [];

  for (let num of arr) {
    if (num !== 0) stack.push(num);
    else stack.pop();
  }

  answer = stack.reduce((sum, v) => sum + v, 0);
  return answer;
}

console.log(solution(arr));
