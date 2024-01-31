// 후위식 연산(postfix)
function solution(s) {
  let answer;
  const stack = [];

  for (const x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      const B = stack.pop();
      const A = stack.pop();

      if (x === '+') stack.push(A + B);
      else if (x === '-') stack.push(A - B);
      else if (x === '*') stack.push(A * B);
      else if (x === '/') stack.push(A / B);
    }
  }

  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
