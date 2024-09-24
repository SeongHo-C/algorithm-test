// A + B - 5

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    const test = arr[i].split(' ').map((x) => Number(x));

    //  0 두 개가 들어오면 종료!
    if (test[0] !== 0 && test[1] !== 0) {
      answer = test.reduce((a, b) => a + b);
    } else {
      return;
    }
    console.log(answer);
  }
}

solution(input);
