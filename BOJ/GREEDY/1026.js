// 보물

let [N, A, B] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
A = A.split(' ').map(Number);
B = B.split(' ').map(Number);

// 단, B에 있는 수는 재배열하면 안 된다.
function solution(N, A, B) {
  let answer;
  // 오름차순 정렬
  A.sort((a, b) => a - b);
  // 내림차순 정렬
  B.sort((a, b) => b - a);

  answer = A.reduce((sum, a, i) => sum + a * B[i], 0);
  return answer;
}

console.log(solution(N, A, B));
