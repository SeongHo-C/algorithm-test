// 멘토링
function solution(test) {
  let answer = 0;
  const m = test.length;
  const n = test[0].length;

  for (let i = 1; i <= n; i++) {
    const winner = [];

    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        if (arr[j][k] === i) break;
        winner.push(arr[j][k]);
      }
    }

    answer += n - [...new Set(winner)].length - 1;
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
