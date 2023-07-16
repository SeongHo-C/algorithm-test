const fs = require('fs');
const X = fs.readFileSync('예제.txt').toString().trim();

function solution(X) {
  let answer;
  const ch = Array.from({ length: X + 1 }, () => 0);
  const cnt = Array.from({ length: X + 1 }, () => 0);

  const queue = [];
  queue.push(X);
  ch[X] = 1;
  cnt[X] = 0;

  if (X === 1) return 0;
  while (queue.length) {
    const x = queue.shift();
    for (let nx of [x / 3, x / 2, x - 1]) {
      if (nx === 1) return cnt[x] + 1;
      if (nx === parseInt(nx) && nx > 1 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        cnt[nx] = cnt[x] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(parseInt(X)));
