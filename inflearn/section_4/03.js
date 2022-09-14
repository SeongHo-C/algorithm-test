// 멘토링

function solution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;

  // 모든 경우의 수
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      // (멘토, 멘티) 가능한 경우의 수
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }

  //   let minScore = new Array(4).fill(0);
  //   let maxScore = new Array(4).fill(4);

  //   for (let i = 0; i < test.length; i++) {
  //     for (let j = 0; j < test[i].length; j++) {
  //       let score = 1;

  //       for (let k = 1; k <= 4; k++) {
  //         if (test[i][j] === k) {
  //           minScore[k - 1] = Math.max(minScore[k - 1], j + 1);
  //           maxScore[k - 1] = Math.min(maxScore[k - 1], j + 1);
  //           break;
  //         } else {
  //           score++;
  //         }
  //       }
  //     }
  //   }
  //   console.log(maxScore);
  //   console.log(minScore);

  //   for (let i = 0; i < minScore.length; i++) {
  //     for (let j = 0; j < maxScore.length; j++) {
  //       if (i !== j) {
  //         if (minScore[i] <= maxScore[j]) answer++;
  //       }
  //     }
  //   }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
