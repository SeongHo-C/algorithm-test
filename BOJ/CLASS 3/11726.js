// 2xn 타일링
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

const n = parseInt(input);

function solution() {
  const dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1n;
  dy[2] = 2n;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  return parseInt(dy[n] % 10007n);
}

console.log(solution());
