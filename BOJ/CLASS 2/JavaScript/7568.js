// 덩치

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(arr) {
  let answer = [];
  let n = arr.length;
  let newArr = arr.map((x) => x.split(' ').map((x) => Number(x)));

  for (let i = 1; i < n; i++) {
    let cnt = 0;
    for (let j = 1; j < n; j++) {
      if (newArr[i][0] < newArr[j][0] && newArr[i][1] < newArr[j][1]) cnt++;
    }
    answer.push(cnt + 1);
  }

  return answer;
}

console.log(...solution(input));
