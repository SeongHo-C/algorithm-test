// 결혼식
function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let now = 0;

  const C_Times = times.map(([c, g]) => c).sort((a, b) => a - b);
  const G_Times = times.map(([c, g]) => g).sort((a, b) => a - b);

  for (let i = 0; i <= G_Times[times.length - 1]; i++) {
    if (C_Times.includes(i)) now++;
    if (G_Times.includes(i)) now--;

    answer = Math.max(answer, now);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
