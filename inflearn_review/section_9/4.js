// 이진트리 넓이우선탐색(BFS)
function solution() {
  let answer = '';
  const queue = [1];

  while (queue.length) {
    const v = queue.shift();
    answer += v + ' ';

    for (const nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }

  return answer;
}

console.log(solution());
