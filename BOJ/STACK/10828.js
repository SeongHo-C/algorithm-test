// 스택

const [N, ...orders] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(orders) {
  const answer = [];
  const stack = [];

  for (let order of orders) {
    if (order.includes('push')) {
      stack.push(Number(order.split(' ')[1]));
    } else if (order.includes('pop')) {
      answer.push(stack.length === 0 ? -1 : stack.pop());
    } else if (order.includes('size')) {
      answer.push(stack.length);
    } else if (order.includes('empty')) {
      answer.push(stack.length === 0 ? 1 : 0);
    } else answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }

  return answer.join('\n');
}

console.log(solution(orders));
