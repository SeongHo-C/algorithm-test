function solution(n) {
  let result = 0;

  while (n > 0) {
    result += n % 2;
    n = Math.floor(n / 2);
  }

  return result;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
