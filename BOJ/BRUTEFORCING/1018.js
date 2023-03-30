// 체스판 다시 칠하기

const [NM, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [row, col] = NM.split(' ').map(Number);

// 하나는 맨 위쪽 위 칸이 흰색인 경우, 하나는 검은색인 경우의 정상 체스판
const White = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];
const Black = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

function solution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  // 8 x 8 크기의 체스판으로 잘라낼 수 있는 경우
  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= col - 8; j++) {
      let whitePaint = 0;
      let blackPaint = 0;

      // 몇 개의 정사각형을 다시 칠해야하는지 확인하는 과정
      for (let k = 0; k < 8; k++) {
        for (let s = 0; s < 8; s++) {
          if (White[k][s] !== arr[i + k][j + s]) whitePaint++;
          if (Black[k][s] !== arr[i + k][j + s]) blackPaint++;
        }
      }
      answer = Math.min(answer, whitePaint, blackPaint);
    }
  }

  return answer;
}

console.log(solution(arr));
