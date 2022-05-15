// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄이는 별 N개를 찍는 문제

const input = require('fs').readFileSync('예제.txt').toString().trim();
const num = Number(input);

let result = '';
for (let i = 0; i < num; i++) {
  result += '*';
  console.log(result);
}
