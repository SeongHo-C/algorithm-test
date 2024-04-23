function solution(n) {
  const x = Math.sqrt(n);
  return Number.isInteger(x) ? (x + 1) ** 2 : -1;
}

console.log(solution(121));
console.log(solution(3));
