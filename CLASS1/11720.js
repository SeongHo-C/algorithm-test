// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

const array = input[1].split('');

function sumPrint(array) {
  let sum = 0;

  array.forEach((item) => {
    sum += parseInt(item);
  });

  return sum;
}

console.log(sumPrint(array));
