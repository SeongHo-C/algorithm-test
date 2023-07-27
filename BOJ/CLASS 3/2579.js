// 계단 오르기
const fs = require('fs');
const [num, ...scores] = fs
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution() {
  const dy = Array.from({ length: num }, () => 0);

  dy[0] = scores[0];
  dy[1] = scores[0] + scores[1];
  dy[2] = Math.max(dy[0] + scores[2], scores[1] + scores[2]);

  // 계단은 한 번에 한 계단씩 또는 두 계단씩 오를 수 있다. (경우의 수: 2가지)
  for (let i = 3; i < num; i++) {
    dy[i] = Math.max(
      dy[i - 2] + scores[i],
      dy[i - 3] + scores[i - 1] + scores[i]
    );
  }

  return dy[num - 1];
}

console.log(solution());
