function solution(n) {
  return String(n).split('').reverse().map(Number);
}

console.log(solution(12345));
