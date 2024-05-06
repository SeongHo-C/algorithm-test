// 투 포인터 알고리즘 활용
function solution(n) {
  let answer = 0;
  let s = 1;
  let e = 1;

  let sum = 1;
  while (e <= n) {
    if (sum === n) answer++;
    if (sum >= n) sum -= s++;
    else sum += ++e;
  }

  return answer;
}

// 수학(참고용)
// function solution(n) {
//   let answer = 0;

//   // n의 약수이면서 홀수인 i의 개수
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0 && i % 2 === 1) answer++;
//   }

//   return answer;
// }

console.log(solution(15));
