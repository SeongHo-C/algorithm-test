// 괄호문자제거
function solution(s) {
  let answer = '';
  const stack = [];

  // '('만 stack에 넣는 방법
  // for (const x of s) {
  //   if (x === '(') stack.push('(');
  //   else if (x === ')') stack.pop();
  //   else {
  //     if (stack.length === 0) answer += x;
  //   }
  // }

  // 문자 모두 stack에 넣는 방법
  for (const x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }

  answer = stack.join('');
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
