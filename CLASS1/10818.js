// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('예제.txt').toString().split('\n');
const secondInput = input[1].split(' ');

console.log(Math.min(...secondInput) + ' ' + Math.max(...secondInput));
