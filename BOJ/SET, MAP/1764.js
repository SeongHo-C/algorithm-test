// 듣보잡

const [NM, ...list] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);

function solution(N, M, list) {
  let answer;
  const listen = new Set(list.slice(0, N));
  const see = list.slice(N);

  // 교집합 찾는 과정
  answer = see.filter((x) => listen.has(x)).sort();
  answer.unshift(answer.length);
  return answer.join('\n');
}

console.log(solution(N, M, list));
