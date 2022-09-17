// 체스판 다시 칠하기

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let white = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

let black = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

function solution(input) {
  [size, ...arr] = input;
  [row, col] = size.split(' ').map((x) => Number(x));
  arr = arr.map((str) => str.trim('\r').split(''));
  let answer = [];

  // 8 * 8 크기의 체스판을 만드는 경우
  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= col - 8; j++) {
      // whiteCheck, blackCheck
      let cnt1 = (cnt2 = 0);

      for (let k = 0; k < 8; k++) {
        for (let s = 0; s < 8; s++) {
          if (white[k][s] !== arr[i + k][j + s]) cnt1++;
          if (black[k][s] !== arr[i + k][j + s]) cnt2++;
        }
      }
      answer.push(cnt1);
      answer.push(cnt2);
    }
  }

  return Math.min(...answer);
}

console.log(solution(input));
