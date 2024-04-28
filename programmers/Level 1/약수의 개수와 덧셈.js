function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // 제곱근이 정수면 약수의 개수가 홀수이다.
    if (Number.isInteger(Math.sqrt(i))) answer -= i;
    else answer += i;
  }

  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
