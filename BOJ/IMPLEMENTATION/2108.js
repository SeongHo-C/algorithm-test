const fs = require('fs');
const [N, ...data] = fs
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(N, data) {
  const answer = [];
  data.sort((a, b) => a - b);

  // 산술평균
  answer.push(Math.round(data.reduce((sum, v) => sum + v) / N));

  // 중앙값
  const mid = Math.floor(N / 2);
  answer.push(data[mid]);

  // 최빈값
  const map = new Map();
  for (let x of data) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }
  const arr = [...map].sort((a, b) => b[1] - a[1]);
  if (arr.length > 1 && arr[0][1] === arr[1][1]) answer.push(arr[1][0]);
  else answer.push(arr[0][0]);

  // 범위
  if (arr.length > 1) answer.push(data[N - 1] - data[0]);
  else answer.push(0);

  return answer.join('\n');
}

console.log(solution(N, data));
