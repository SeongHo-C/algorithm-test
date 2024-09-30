// 큐

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(input) {
  let answer = [];
  let queue = [];
  // 구조 분해 할당
  let [size, ...arr] = input;

  for (let x of arr) {
    let Qlen = queue.length;
    if (x.includes('push')) {
      let X = x.split(' ')[1];
      queue.push(Number(X));
    } else if (x.includes('pop'))
      Qlen === 0 ? answer.push(-1) : answer.push(queue.shift());
    else if (x.includes('size')) answer.push(Qlen);
    else if (x.includes('empty')) Qlen === 0 ? answer.push(1) : answer.push(0);
    else if (x.includes('front'))
      Qlen === 0 ? answer.push(-1) : answer.push(queue[0]);
    else if (x.includes('back'))
      Qlen === 0 ? answer.push(-1) : answer.push(queue[Qlen - 1]);
  }
  // 배열 -> 문자열
  answer = answer.join('\n');

  return answer;
}

console.log(solution(input));
