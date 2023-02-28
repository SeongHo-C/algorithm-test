// 분해합

const N = require('fs').readFileSync('예제.txt').toString().trim();

function solution(N) {
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    let sum = i;
    const splitNum = String(i).split('').map(Number);

    // 분해합 만드는 과정
    for (let x of splitNum) {
      sum += x;
    }

    // i는 N의 생성자
    if (sum === N) {
      answer = i;
      break;
    }
  }

  return answer;
}

console.log(solution(Number(N)));
