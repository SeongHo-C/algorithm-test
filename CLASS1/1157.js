// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .toUpperCase();

const arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  arr[input.charCodeAt(i) - 65]++;
}

const max = Math.max(...arr);
const maxIndex = arr.indexOf(max);
let maxNum = 0;

arr.map((item) => {
  if (item === max) {
    maxNum++;
  }
});

maxNum > 1 ? console.log('?') : console.log(String.fromCharCode(maxIndex + 65));
