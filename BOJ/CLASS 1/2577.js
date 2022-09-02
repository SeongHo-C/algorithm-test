// 숫자의 개수

const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

function solution(arr) {
  const array = new Array(10).fill(0);

  const mul = arr.reduce((a, b) => a * b, 1).toString();
  for (let x of mul) {
    array[x]++;
  }

  array.forEach((num) => console.log(num));
}

solution(input);
