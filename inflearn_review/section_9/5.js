// 송아지 찾기(BFS : 상태트리탐색)
function solution(s, e) {
  let answer = 0;
  const queue = [s];
  const ch = Array.from({ length: 10001 }, () => 0);

  while (queue.length) {
    const x = queue.shift();

    for (const nx of [x + 1, x - 1, x + 5]) {
      if (nx === e) return ch[x] + 1;
      if (nx >= 1 && nx <= 10000 && ch[nx] === 0) {
        queue.push(nx);
        ch[nx] = ch[x] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
