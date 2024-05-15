function solution(s) {
  const stack = [];

  if (s.length % 2 !== 0) return 0;
  // for...of 명령문에 비해 효율성 테스트에서 유리
  for (let i = 0; i < s.length; i++) {
    stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));
