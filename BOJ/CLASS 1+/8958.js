// OX 퀴즈

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

const num = Number(input[0]);

function solution(arr) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let score = 1;

    for (let x of arr[i]) {
      if (x === 'O') {
        sum += score++;
      } else {
        score = 1;
      }
    }
    console.log(sum);
  }
}

solution(input);
