function solution(number) {
  let result = 0;

  function DFS(L, start, sum) {
    if (L === 3) {
      if (sum === 0) result++;
    } else {
      for (let i = start; i < number.length; i++) {
        DFS(L + 1, i + 1, sum + number[i]);
      }
    }
  }
  DFS(0, 0, 0);

  return result;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
