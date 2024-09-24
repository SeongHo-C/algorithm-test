// 사칙연산

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .split(' ')
  .map((x) => Number(x));

const A = input[0];
const B = input[1];

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);
