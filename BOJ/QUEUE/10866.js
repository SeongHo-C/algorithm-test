// 덱

const [N, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(arr) {
  const answer = [];
  const deque = [];

  for (let order of arr) {
    if (order.includes('push_front')) {
      deque.unshift(Number(order.split(' ')[1]));
    } else if (order.includes('push_back')) {
      deque.push(Number(order.split(' ')[1]));
    } else if (order.includes('pop_front')) {
      answer.push(deque.length === 0 ? -1 : deque.shift());
    } else if (order.includes('pop_back')) {
      answer.push(deque.length === 0 ? -1 : deque.pop());
    } else if (order.includes('size')) {
      answer.push(deque.length);
    } else if (order.includes('empty')) {
      answer.push(deque.length === 0 ? 1 : 0);
    } else if (order.includes('front')) {
      answer.push(deque.length === 0 ? -1 : deque[0]);
    } else {
      answer.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
    }
  }

  return answer.join('\n');
}

console.log(solution(arr));
