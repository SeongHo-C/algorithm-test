// 합이 같은 부분집합(DFS : 아마존 인터뷰)
function solution(arr) {
  let answer = 'NO';
  let flag = 0;
  const total = arr.reduce((a, b) => a + b);
  const n = arr.length;

  function DFS(L, sum) {
    // 두 부분집합의 원소의 합이 서로 같은 경우가 존재(한 번 이상)
    if (flag) return;
    if (L === n) {
      if (total / 2 === sum) {
        flag = 1;
        answer = 'YES';
      }
    } else {
      DFS(L + 1, sum);
      DFS(L + 1, sum + arr[L]);
    }
  }
  DFS(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
