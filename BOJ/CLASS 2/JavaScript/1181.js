// 단어 정렬

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(input) {
  let answer;
  const [size, ...arr] = input;
  let newArr = [...new Set(arr)];

  newArr.sort((a, b) => {
    if (a.length > b.length) return 1;
    else if (a.length === b.length && a > b) return 1;
    else return -1;
  });
  answer = newArr.join('\n');

  return answer;
}

console.log(solution(input));
