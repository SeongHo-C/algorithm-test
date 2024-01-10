// 연속 부분수열 1
function solution(m, arr) {
  let answer = 0;
  let lt = (sum = 0);

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum >= m) {
      if (sum === m) answer++;
      sum -= arr[lt++];
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
