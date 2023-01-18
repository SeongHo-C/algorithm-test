// 블랙잭

const [NM, arr] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');
const M = NM.split(' ')[1];
const cards = arr.split(' ').map(Number);

function solution(M, cards) {
  let answer = 0;
  const len = cards.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum <= M) answer = Math.max(answer, sum);
      }
    }
  }

  return answer;
}

console.log(solution(M, cards));
