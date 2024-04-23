function solution(absolutes, signs) {
  return absolutes.reduce((sum, v, i) => sum + (signs[i] ? +v : -v), 0);
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
