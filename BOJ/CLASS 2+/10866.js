// 덱

const [N, ...arr] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

function solution(arr) {
  const deq = [];
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    const order = arr[i];

    if (order.includes('push_front')) {
      const num = order.split(' ')[1];
      deq.unshift(Number(num));
    } else if (order.includes('push_back')) {
      const num = order.split(' ')[1];
      deq.push(Number(num));
    } else if (order.includes('pop_front')) {
      const num = deq.shift();
      answer.push(num || -1);
    } else if (order.includes('pop_back')) {
      const num = deq.pop();
      answer.push(num || -1);
    } else if (order.includes('size')) {
      answer.push(deq.length);
    } else if (order.includes('empty')) {
      const len = deq.length;
      answer.push(len === 0 ? 1 : 0);
    } else if (order.includes('front')) {
      const len = deq.length;
      answer.push(len === 0 ? -1 : deq[0]);
    } else {
      const len = deq.length;
      answer.push(len === 0 ? -1 : deq[len - 1]);
    }
  }

  return answer.join('\n');
}

console.log(solution(arr));
