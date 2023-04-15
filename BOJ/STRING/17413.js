// 단어 뒤집기 2

const S = require('fs').readFileSync('input.txt').toString().trim();

function solution(S) {
  let answer = '';
  const stack = [];

  for (let x of S) {
    // 태그의 시작
    if (x === '<') {
      // answer 변수에 누적하지 않은 단어가 존재하는지 확인
      if (stack.length > 0) {
        answer += stack.reverse().join('');
        // stack = []를 사용하여 스택을 초기화할 경우 메모리 낭비!!
        stack.length = 0;
      }
      stack.push('<');
    }
    // 태그의 끝
    else if (x === '>') {
      answer += stack.join('') + '>';
      stack.length = 0;
    }
    // 연속하는 두 단어 사이의 공백이 있을 경우
    else if (x === ' ' && !stack.includes('<')) {
      answer += stack.reverse().join('') + ' ';
      stack.length = 0;
    } else {
      stack.push(x);
    }
  }

  // 문자열에 태그 없이 단어만 존재하는 경우(최종 확인)
  if (stack.length > 0) answer += stack.reverse().join('');

  return answer;
}

console.log(solution(S));
