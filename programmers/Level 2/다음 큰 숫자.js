function solution(n) {
  const one_num = n.toString(2).match(/1/g).length;

  while (n++) {
    if (one_num === n.toString(2).match(/1/g).length) return n;
  }
}

console.log(solution(78));
console.log(solution(15));
