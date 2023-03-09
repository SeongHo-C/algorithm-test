// 시험 성적

const score = require('fs').readFileSync('예제.txt').toString().trim();

function solution(score) {
  let answer;

  switch (parseInt(score / 10)) {
    case 10:
    case 9:
      answer = 'A';
      break;
    case 8:
      answer = 'B';
      break;
    case 7:
      answer = 'C';
      break;
    case 6:
      answer = 'D';
      break;
    default:
      answer = 'F';
  }

  return answer;
}

console.log(solution(parseInt(score)));
