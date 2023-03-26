// 수들의 합 2

const [NM, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);
const A = arr.split(' ').map(Number);

// 브루투포스 알고리즘(시간 복잡도 O(N^2))
function solution() {
  let answer = 0;

  for (let i = 0; i < N; i++) {
    let sum = 0;

    for (let j = i; j < N; j++) {
      sum += A[j];

      if (sum === M) {
        answer++;
        break;
      }
    }
  }

  return answer;
}

// 투 포인터 알고리즘(시간 복잡도 O(N))
// function solution() {
//   let answer = 0;
//   let sum = 0;
//   let start = 0;
//   let end = 0;

//   while (end < N) {
//     sum += A[end];

//     while (sum >= M) {
//       if (sum === M) {
//         answer++;
//       }

//       sum -= A[start];
//       start++;
//     }

//     end++;
//   }

//   return answer;
// }

console.log(solution());
