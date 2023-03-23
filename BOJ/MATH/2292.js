// 벌집

const N = Number(require('fs').readFileSync('input.txt').toString().trim());

function solution(N) {
  let answer;
  let num = 0;
  let sum = 1;

  while (true) {
    // 다음 방으로 지나는 과정
    num++;
    // 이웃하는 방중에서 최댓값보다 작거나 같은 경우
    if (sum >= N) {
      answer = num;
      break;
    }
    // 다음 이웃하는 방중에서 최댓값을 미리 확인
    sum += num * 6;
  }

  return answer;
}

console.log(solution(N));
