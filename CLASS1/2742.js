// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('예제.txt').toString().trim();

let num = '';
for (let i = input; i > 0; i--) {
  num += `${i}\n`;
}

console.log(num);
