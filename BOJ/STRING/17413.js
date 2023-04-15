// 단어 뒤집기 2

const S = require('fs').readFileSync('input.txt').toString().trim();

function solution(S) {
  let answer = '';
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '<') {
      if (stack.length > 0) {
        answer += stack.reverse().join('');
        stack = [];
      }
      stack.push('<');
    } else if (S[i] === '>') {
      answer += stack.join('') + '>';
      stack = [];
    } else if (S[i] === ' ' && !stack.includes('<')) {
      answer += stack.reverse().join('') + ' ';
      stack = [];
    } else {
      stack.push(S[i]);
    }
  }

  if (stack.length > 0) answer += stack.reverse().join('');
  return answer.trim();
}

console.log(solution(S));
