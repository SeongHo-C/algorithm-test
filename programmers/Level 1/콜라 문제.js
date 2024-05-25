function solution(a, b, n) {
  let result = 0;

  while (a <= n) {
    const re_bottles = Math.floor(n / a) * b;
    result += re_bottles;
    n = (n % a) + re_bottles;
  }

  return result;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
