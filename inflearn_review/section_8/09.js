// 동전교환
function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  const n = arr.length;

  function DFS(L, sum) {
    // 거스름돈을 가장 적은 수의 동전으로 교환
    if (answer <= L || sum > m) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
