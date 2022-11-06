// 순열 구하기

function solution(m, arr) {
  const answer = [];
  const n = arr.length;
  const ch = Array.from({ length: n }, () => 0);
  const tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);

  for (let [a, b] of answer) {
    console.log(a, b);
  }

  return answer.length;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
