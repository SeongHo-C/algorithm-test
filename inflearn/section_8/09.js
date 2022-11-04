// 동전교환

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  let arrCopy = Array.from(arr).sort((a, b) => b - a);

  function DFS(L, sum) {
    if (answer <= L) return;
    if (sum > m) return;
    if (sum === m) {
      answer = Math.min(answer, L);
      return;
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arrCopy[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2];
console.log(solution(4, arr));
