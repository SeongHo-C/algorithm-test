// 바둑이 승차(DFS)
function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const n = arr.length;

  function DFS(L, sum) {
    // 그의 트럭은 c 킬로그램 넘게 태울 수가 없다.
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum);
      DFS(L + 1, sum + arr[L]);
    }
  }
  DFS(0, 0);

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
