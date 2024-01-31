function solution(s) {
  let answer;
  const stack = [];

  [...s].forEach((v) => {
    if (!isNaN(v)) stack.push(Number(v));
    else {
      const B = stack.pop();
      const A = stack.pop();

      if (v === '+') stack.push(A + B);
      else if (v === '-') stack.push(A - B);
      else if (v === '*') stack.push(A * B);
      else if (v === '/') stack.push(A / B);
    }
  });

  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
