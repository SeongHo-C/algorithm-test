// A - B

const fs = require('fs');
const input = fs
  .readFileSync('예제.txt')
  .toString()
  .split(' ')
  .map((x) => Number(x));

console.log(input[0] - input[1]);
