function solution(num) {
  let answer = 0;

  while (num > 1 && answer < 500) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    answer++;
  }

  return num === 1 ? answer : -1;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
