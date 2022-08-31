// 영어 대소문자와 공백으로 이루어진 문자열이 주어진다.
// 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오.
// 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

var fs = require('fs');
// 띄어쓰기(' ')를 기준으로 나누어 input 배열에 저장
var input = fs.readFileSync('예제.txt').toString().trim().split(' ');

function StringSlice(array) {
  // 배열 아이템에 공백문자('')가 있는지 확인!
  const str = array.filter((item) => item !== '');
  return str.length;
}

console.log(StringSlice(input));
