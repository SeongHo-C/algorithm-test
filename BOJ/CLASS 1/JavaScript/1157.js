// 단어 공부

const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .toLocaleUpperCase()
  .split('');

function solution(input) {
  let answer = '';
  const arr = new Array(26).fill(0);

  input.forEach((x) => {
    arr[x.charCodeAt() - 65]++;
  });

  const max = Math.max(...arr);
  let maxArr = [];

  maxArr = arr.filter((x) => {
    if (x === max) return x;
  });

  if (maxArr.length > 1) {
    answer = '?';
  } else {
    answer = String.fromCharCode(arr.indexOf(max) + 65);
  }

  return answer;
}

console.log(solution(input));
