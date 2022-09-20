// 최대 매출

function solution(k, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  //   for (let i = 0; i < arr.length - 2; i++) {
  //     sum = 0;
  //     let j = i;
  //     for (let s = 0; s < k; s++) {
  //       sum += arr[j++];
  //     }
  //     answer = Math.max(answer, sum);
  //   }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
