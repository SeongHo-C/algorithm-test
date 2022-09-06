// A + B - 4

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(arr) {
  let answer = '';

  for (let i = 0; i < arr.length; i++) {
    answer = arr[i]
      .split(' ')
      .map((x) => Number(x))
      .reduce((a, b) => a + b);
    console.log(answer);
  }

  return answer;
}

solution(input);
