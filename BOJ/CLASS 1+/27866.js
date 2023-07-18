// 문자와 문자열
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const S = input[0];
const i = parseInt(input[1]);

console.log(S[i - 1]);
