// 연속 부분수열 1

function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  //   for (let i = 0; i < arr.length; i++) {
  //     let sum = 0;
  //     let p = i;

  //     while (p < arr.length) {
  //       sum += arr[p];
  //       if (sum < m) {
  //         p++;
  //       } else if (sum === m) {
  //         answer++;
  //         break;
  //       } else break;
  //     }
  //   }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
