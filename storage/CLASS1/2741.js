// 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 시간 초과 주의! 문자열로 출력!

const input = require('fs').readFileSync('예제.txt').toString().trim();

let num = '';
for (let i = 1; i <= input; i++) {
  num += `${i}\n`;
}

console.log(num);
