// 재귀함수를 이용한 이진수 출력
function solution(n) {
  let answer = '';

  function DFS(L) {
    if (L === 0) return;
    else DFS(parseInt(L / 2));

    answer += L % 2;
  }
  DFS(n);

  return answer;
}

console.log(solution(11));
