// 괄호문자제거

function solution(s) {
  let answer;
  let stack = [];

  //   let str = '';
  //   for (let x of s) {
  //     if (x === '(') stack.push(x);
  //     else if (x === ')') {
  //       stack.pop();
  //     } else {
  //       if (stack.length === 0) str += x;
  //     }
  //   }
  //   answer = str;

  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  answer = stack.join('');

  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
