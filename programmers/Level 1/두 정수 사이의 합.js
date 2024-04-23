function solution(a, b) {
  let answer = 0;
  const [s, e] = [a, b].sort((num1, num2) => num1 - num2);

  for (let i = s; i <= e; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
