function solution(s) {
  const stack = [];

  for (const alpha of s) {
    stack[stack.length - 1] === alpha ? stack.pop() : stack.push(alpha);
  }

  return stack.length ? 0 : 1;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));
