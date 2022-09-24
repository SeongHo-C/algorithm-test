// 스택

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(input) {
  let answer = [];
  let stack = [];
  const [size, ...arr] = input;

  for (let i = 0; i < size; i++) {
    let len = stack.length;

    if (arr[i].includes('push')) {
      const X = arr[i].split(' ')[1];
      stack.push(Number(X));
    } else if (arr[i].includes('pop')) {
      if (len === 0) {
        answer.push(-1);
      } else answer.push(stack.pop());
    } else if (arr[i].includes('size')) {
      answer.push(len);
    } else if (arr[i].includes('empty')) {
      if (len === 0) answer.push(1);
      else answer.push(0);
    } else {
      if (len === 0) {
        answer.push(-1);
      } else answer.push(stack[len - 1]);
    }
  }
  answer = answer.join('\n');

  return answer;
}

console.log(solution(input));
