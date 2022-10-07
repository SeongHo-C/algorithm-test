// 회의실 배정

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(input) {
  let answer = 0;
  let [size, ...meeting] = input;
  meeting = meeting.map((x) => x.split(' ').map((x) => Number(x)));

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let endTime = 0;
  for (let i = 0; i < meeting.length; i++) {
    if (meeting[i][0] >= endTime) {
      answer++;
      endTime = meeting[i][1];
    }
  }

  return answer;
}

console.log(solution(input));
