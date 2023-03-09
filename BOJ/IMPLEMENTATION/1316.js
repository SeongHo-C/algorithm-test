// 그룹 단어 체커

const [N, ...words] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

function solution(words) {
  let answer = 0;

  for (let word of words) {
    let isGroup = 'YES';

    for (let i = 1; i < word.length; i++) {
      if (word[i - 1] !== word[i] && word.indexOf(word[i]) !== i) {
        isGroup = 'NO';
        break;
      }
    }
    isGroup === 'YES' && answer++;
  }

  return answer;
}

console.log(solution(words));
