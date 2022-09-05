// A + B - 3

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');
const testNum = input[0];

function solution(arr) {
  let answer = 0;

  for (let i = 1; i <= testNum; i++) {
    const test = arr[i].split(' ').map((x) => Number(x));
    answer = test.reduce((a, b) => a + b);
    console.log(answer);
  }
}

solution(input);
