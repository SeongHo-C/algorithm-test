// 이진트리 넓이우선탐색(BFS)
// 출발지점에서 도착지점까지 최단 거리

function solution() {
  let answer = '';
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + ' ';
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());
