function solution(k, score) {
  const result = [];
  const hallOfFame = [];

  for (let i = 0; i < score.length; i++) {
    hallOfFame.push(score[i]);
    hallOfFame.sort((a, b) => b - a);

    if (hallOfFame.length >= k) result.push(hallOfFame[k - 1]);
    else result.push(hallOfFame[hallOfFame.length - 1]);
  }

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
