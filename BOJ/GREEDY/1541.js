// 잃어버린 괄호

const arr = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('-');

function solution(arr) {
  let answer;

  // '+'를 가지고 있는 요소는 '+'를 기준으로 나눠 숫자들을 더해주는 과정
  const plusNums = arr.map((str) =>
    str
      .split('+')
      .map(Number)
      .reduce((sum, v) => sum + v, 0)
  );

  // 첫 번째 요소에서 나머지 요소들을 빼주는 과정
  const [firstNum, ...minusNums] = plusNums;
  answer = firstNum - minusNums.reduce((sum, v) => sum + v, 0);

  return answer;
}

console.log(solution(arr));
