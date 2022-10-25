// 합이 같은 부분집합

function solution(arr) {
  let answer = 'NO';
  flag = 0;
  let total = arr.reduce((a, b) => a + b);
  let len = arr.length;

  function DFS(idx, sum) {
    if (flag) return;
    if (idx === len) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      //   sum += arr[idx];
      DFS(idx + 1, sum + arr[idx]);
      //   sum -= arr[idx];
      DFS(idx + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
