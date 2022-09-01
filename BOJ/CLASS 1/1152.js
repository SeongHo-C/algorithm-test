// 단어의 개수

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

function solution(arr) {
  let answer = 0;

  // 공백이 연속해서 나오는 경우
  const str = arr.filter((x) => {
    if (x !== '') return x;
  });

  answer = str.length;

  return answer;
}

console.log(solution(input));
