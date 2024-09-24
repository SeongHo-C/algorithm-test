// 알람 시계

const [H, M] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(H, M) {
  let answer = '';

  if (M >= 45) answer = H + ' ' + (M - 45);
  else {
    const hour = H - 1 < 0 ? 23 : H - 1;
    const minute = 60 + (M - 45);

    answer = hour + ' ' + minute;
  }

  return answer;
}

console.log(solution(H, M));
