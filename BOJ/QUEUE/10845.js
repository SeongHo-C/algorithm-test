// 큐

const [N, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(arr) {
  const answer = [];
  const Q = [];

  for (let order of arr) {
    // 명령을 식별하기 위해 includes() 메서드 사용
    if (order.includes('push')) {
      Q.push(order.split(' ')[1]);
    } else if (order.includes('pop')) {
      answer.push(Q.length === 0 ? -1 : Q.shift());
    } else if (order.includes('size')) {
      answer.push(Q.length);
    } else if (order.includes('empty')) {
      answer.push(Q.length === 0 ? 1 : 0);
    } else if (order.includes('front')) {
      answer.push(Q.length === 0 ? -1 : Q[0]);
    } else {
      answer.push(Q.length === 0 ? -1 : Q[Q.length - 1]);
    }
  }

  return answer.join('\n');
}

console.log(solution(arr));
