// 숫자 카드 2
// 몇 개 가지고 있는지를 묻는 문제에서는 해시 맵을 사용하자!

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

const N = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const M = input[3].split(' ').map(Number);

function solution(N, M) {
  let answer;
  const map = new Map();

  for (let i = 0; i < N.length; i++) {
    if (map.get(N[i])) map.set(N[i], map.get(N[i]) + 1);
    else map.set(N[i], 1);
  }

  answer = M.map((item) => {
    const num = map.get(item);

    return num ? num : 0;
  });

  return answer.join(' ');
}

console.log(solution(N, M));
