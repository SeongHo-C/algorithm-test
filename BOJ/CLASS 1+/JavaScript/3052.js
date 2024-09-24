// 나머지

const arr = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(arr) {
  let answer;
  const plusOfNum = [];

  arr.map((num) => {
    plusOfNum.push(num % 42);
  });

  answer = [...new Set(plusOfNum)].length;
  return answer;
}

console.log(solution(arr));
