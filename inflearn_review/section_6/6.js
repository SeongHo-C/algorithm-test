// 공주 구하기
function solution(n, k) {
  let answer;
  const queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }

  answer = queue[0];
  return answer;
}

console.log(solution(8, 3));
