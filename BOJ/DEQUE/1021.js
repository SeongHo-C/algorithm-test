// 회전하는 큐

const [NM, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);
const orders = arr.split(' ').map(Number);

function solution(N, M, orders) {
  let answer = Number.MAX_SAFE_INTEGER;
  let cntOfTwoOperation = 0;
  let cntOfThreeOperation = 0;
  const deque = Array.from({ length: N }, (_, i) => i + 1);

  while (orders.length > 0) {
    const mid = Math.floor(deque.length / 2);
    // 현재 덱에서 뽑아내려고 하는 원소의 위치
    const location = deque.indexOf(orders[0]);

    if (mid >= location) {
      // 2번 연산(가운데를 기준으로 왼쪽에 위치)
      while (deque[0] !== orders[0]) {
        deque.push(deque.shift());
        cntOfTwoOperation++;
      }
    } else {
      // 3번 연산(가운데를 기준으로 오른쪽에 위치)
      while (deque[0] !== orders[0]) {
        deque.unshift(deque.pop());
        cntOfThreeOperation++;
      }
    }

    // 2번 or 3번 연산을 마치고 첫 번째 원소를 뽑아낸다.
    deque.shift();
    orders.shift();
  }

  answer = cntOfTwoOperation + cntOfThreeOperation;
  return answer;
}

console.log(solution(N, M, orders));
