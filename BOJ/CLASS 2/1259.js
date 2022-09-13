// 팰린드롬수

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(arr) {
  let answer;

  arr.forEach((x) => {
    answer = 'yes';
    if (x !== '0') {
      let y = x.split('').reverse().join('');

      x = Number(x);
      y = Number(y);

      if (x !== y) answer = 'no';
      console.log(answer);
    } else {
      return;
    }
  });
}

solution(input);
