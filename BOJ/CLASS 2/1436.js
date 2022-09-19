// 영화감독 숌

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString();

function solution(num) {
  let answer;
  let max = Number.MAX_SAFE_INTEGER;
  let cnt = 0;

  for (let i = 0; i < max; i++) {
    if (String(i).includes('666')) {
      cnt++;
      if (cnt === num) {
        answer = i;
        break;
      }
    }
  }

  return answer;
}

console.log(solution(Number(input)));
