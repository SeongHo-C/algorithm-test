// 문자열 반복

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(arr) {
  let answer;

  for (let i = 1; i <= arr[0]; i++) {
    const T = arr[i].split(' ');
    const R = T[0];
    const S = T[1];
    answer = '';

    for (let x of S) {
      for (let j = 0; j < R; j++) {
        answer += x;
      }
    }

    console.log(answer);
  }
}

solution(input);
