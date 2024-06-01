function lcm(a, b) {
  let copy_a = a;
  let copy_b = b;
  let r = 0;

  while (copy_b !== 0) {
    r = copy_a % copy_b;
    copy_a = copy_b;
    copy_b = r;
  }

  return (a * b) / copy_a;
}

function solution(arr) {
  const stack = arr.slice();

  while (stack.length > 1) {
    const a = stack.pop();
    const b = stack.pop();

    stack.push(lcm(a, b));
  }

  return stack[0];
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
