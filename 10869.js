// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map((x) => Number(x));

const num1 = input[0];
const num2 = input[1];

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(parseInt(num1 / num2));
console.log(num1 % num2);
