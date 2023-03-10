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

  // 돈을 인출하는데 필요한 시간이 적은 순서대로 정렬
  PArr.sort((a, b) => a - b);
  for (let i = 0; i < PArr.length; i++) {
    time += PArr[i];
    answer += time;
  }

  return answer;
}

console.log(solution(PArr));
