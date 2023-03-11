// ATM

const [N, P] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');
const PArr = P.split(' ').map(Number);

function solution(PArr) {
  let answer = 0;
  let time = 0;

  // 각 사람이 돈을 인출하는데 걸리는 시간이 적은 순서대로 정렬
  PArr.sort((a, b) => a - b);
  for (let i = 0; i < PArr.length; i++) {
    // 시간 더하기
    time += PArr[i];
    // 각 사람이 돈을 인출하는데 필요한 시간의 합 구하기
    answer += time;
  }

  return answer;
}

console.log(solution(PArr));
