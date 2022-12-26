// 최대점수 구하기

function solution(m, arr) {
  let answer = 0;
  let dp = Array.from({ length: m + 1 }, () => 0);
  dp[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    let score = arr[i][0];
    let time = arr[i][1];
    for (let j = m; j >= time; j--) {
      dp[j] = Math.max(dp[j], dp[j - time] + score);
    }
  }

  answer = dp[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
