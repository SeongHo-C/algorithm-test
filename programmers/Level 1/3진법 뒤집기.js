function solution(n) {
  // 10진수 -> N진수 n.toString(radix)
  // N진수 -> 10진수 parseInt(n, 3)
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

console.log(solution(45));
console.log(solution(125));
