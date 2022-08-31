// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

const X = input[0].split(' ')[1];
const A = input[1].split(' ').map((x) => Number(x));

let print = '';
A.forEach((item) => {
  if (item < X) {
    print += `${item} `;
  }
});

console.log(print);
