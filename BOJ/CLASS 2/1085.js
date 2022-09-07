// 직사각형에서 탈출

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().split(' ');

function solution(arr) {
  let answer;

  let x = arr[0];
  let y = arr[1];
  let w = arr[2];
  let h = arr[3];

  let left = x;
  let right = w - x;
  let up = h - y;
  let down = y;
  answer = Math.min(right, left, up, down);

  return answer;
}

console.log(solution(input));
