// 괄호

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(input) {
  const [T, ...arr] = input;

  for (let i = 0; i < arr.length; i++) {
    let answer = 'YES';
    let stack = [];
    arr[i] = arr[i].trim('\r').split('');

    for (let x of arr[i]) {
      if (x === '(') {
        stack.push('(');
      } else {
        if (stack.length === 0) {
          answer = 'NO';
          break;
        } else stack.pop();
      }
    }
    if (stack.length !== 0) answer = 'NO';
    console.log(answer);
  }
}

solution(input);
