// 올바른 괄호
function solution(s) {
  let answer;
  const stack = [];

  for (const bracket of s) {
    if (bracket === '(') stack.push('(');
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  answer = stack.length === 0 ? 'YES' : 'NO';
  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));
