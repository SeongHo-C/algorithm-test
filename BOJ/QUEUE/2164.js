// 카드2

const N = Number(require('fs').readFileSync('input.txt').toString().trim());

function solution(N) {
  const Queue = Array.from({ length: N }, (_, i) => i + 1);

  // JavaScript에서 shift() 메서드는 매우 비효율적 (시간 초과)
  // 제일 위에 있는 카드를 바닥에 버린 후, 다음으로 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮기는 과정을 시뮬레이션
  for (let i = 1; i < Queue.length; i += 2) {
    Queue.push(Queue[i]);
  }

  return Queue[Queue.length - 1];
}

console.log(solution(N));
