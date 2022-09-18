// 벌집

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString();

function solution(num) {
  let answer;
  let sum = (i = 1);

  while (sum < num) {
    sum += 6 * i;
    i++;
  }
  answer = i;

  return answer;
}

console.log(solution(Number(input)));
