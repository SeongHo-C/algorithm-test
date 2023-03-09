// 한수

const N = require('fs').readFileSync('예제.txt').toString().trim();

function solution(N) {
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    if (i < 100) answer++;
    else {
      const nums = String(i).split('').map(Number);
      if (nums[1] - nums[0] === nums[2] - nums[1]) answer++;
    }
  }

  return answer;
}

console.log(solution(Number(N)));
