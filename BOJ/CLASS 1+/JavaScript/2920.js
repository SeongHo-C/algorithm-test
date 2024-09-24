// 음계

const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .split(' ')
  .map((x) => Number(x));

function solution(arr) {
  let answer = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === 1) {
      if (arr[i] !== i + 1) {
        answer = 'mixed';
        return answer;
      } else {
        answer = 'ascending';
      }
    } else if (arr[0] === 8) {
      if (arr[i] !== 8 - i) {
        answer = 'mixed';
        return answer;
      } else {
        answer = 'descending';
      }
    } else {
      answer = 'mixed';
    }
  }

  return answer;
}

console.log(solution(input));
