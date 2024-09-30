// 제로

const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

function solution(arr) {
  let answer = 0;
  let stack = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) stack.pop();
    else stack.push(arr[i]);
  }

  for (let x of stack) answer += x;

  return answer;
}

console.log(solution(input));
