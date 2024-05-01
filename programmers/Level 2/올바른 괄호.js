function solution(s) {
  const stack = [];

  for (const parentheses of s) {
    if (parentheses === '(') stack.push('(');
    else {
      if (!stack.pop()) return false;
    }
  }

  return stack.length > 0 ? false : true;
}

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
