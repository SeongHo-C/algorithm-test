// 바둑이 승차

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let len = arr.length;

  function DFS(L, sum) {
    // sum이 c보다 큰 경우 바로 return
    if (sum > c) return;
    if (L === len) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
