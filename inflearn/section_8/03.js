// 이진트리순회

function solution(n) {
  let answer = '';
  function DFS(v) {
    // 종료지점
    if (v > 7) return;
    else {
      // 전위순회
      answer += v + ' ';
      DFS(v * 2);
      // 중위순회
      // answer += v + ' ';
      DFS(v * 2 + 1);
      // 후위순회
      // answer += v + ' ';
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
