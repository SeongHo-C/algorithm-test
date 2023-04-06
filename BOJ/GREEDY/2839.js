// 설탕 배달

const N = Number(require('fs').readFileSync('input.txt').toString().trim());

function solution(N) {
  let answer = 5000;

  // 3킬로그램 봉지만 배달
  if (N % 3 === 0) answer = Math.min(N / 3, answer);
  // 5킬로그램 봉지만 배달
  if (N % 5 === 0) answer = Math.min(N / 5, answer);

  // 3킬로그램 봉지와 5킬로그램 봉지 섞어서 배달
  for (let i = 1; i <= Math.floor(N / 5); i++) {
    const plus = N - 5 * i;
    if (plus % 3 === 0) answer = Math.min(i + plus / 3, answer);
  }

  answer = answer === 5000 ? -1 : answer;
  return answer;
}

console.log(solution(N));
