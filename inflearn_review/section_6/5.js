// 쇠막대기
function solution(s) {
  let answer = 0;
  const stack = [];

  let prevBracket = '';
  for (const bracket of s) {
    if (bracket === '(') {
      stack.push('(');
    } else {
      stack.pop();

      if (prevBracket === '(') answer += stack.length;
      else answer++;
    }

    prevBracket = bracket;
    console.log(answer);
  }

  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
