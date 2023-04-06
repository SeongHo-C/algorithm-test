// 설탕 배달

const N = Number(require('fs').readFileSync('input.txt').toString().trim());

function solution(N) {
  // let answer = 5000;

  // // 3킬로그램 봉지만 배달
  // if (N % 3 === 0) answer = Math.min(N / 3, answer);
  // // 5킬로그램 봉지만 배달
  // if (N % 5 === 0) answer = Math.min(N / 5, answer);

  // // 3킬로그램 봉지와 5킬로그램 봉지 섞어서 배달
  // for (let i = 1; i <= Math.floor(N / 5); i++) {
  //   const plus = N - 5 * i;
  //   if (plus % 3 === 0) answer = Math.min(i + plus / 3, answer);
  // }

  // answer = answer === 5000 ? -1 : answer;

  // 리팩토링
  // 더 적은 반복이 필요하고 설탕을 전달할 수 없는 경우를 신속하게 제거할 수 있기 때문에 더 효율적인 방식
  let count = 0;

  while (N > 0) {
    // 5킬로그램 봉지를 사용할 수 있는지 반복적으로 확인(더 적은 개수의 봉지를 배달하기 위해)
    if (N % 5 === 0) {
      count += N / 5;
      break;
    }
    // 여치의 않으면 남은 설탕량에서 3킬로그램을 빼서 1봉지를 더한다.
    else {
      N -= 3;
      count++;
    }
  }

  return N < 0 ? -1 : count;
}

console.log(solution(N));
