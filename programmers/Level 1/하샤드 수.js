function solution(x) {
  const sum_of_digits = (x + '').split('').reduce((sum, v) => +sum + +v);

  return !(x % sum_of_digits);
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
