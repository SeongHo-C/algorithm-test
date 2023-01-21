// ACM 호텔

const [T, ...arr] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    const [H, W, N] = arr[i].split(' ').map(Number);
    const y = N % H || H;
    const x = Math.ceil(N / H);

    if (x < 10) {
      answer.push(y + '0' + x);
    } else answer.push(y + '' + x);
  }

  return answer.join('\n');
}

console.log(solution(arr));
