function solution(n) {
  return '수박'.repeat(Math.ceil(n / 2)).slice(0, n);
}

console.log(solution(3));
console.log(solution(4));
