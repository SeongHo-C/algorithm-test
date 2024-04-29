function solution(s) {
  return (s.length !== 4 && s.length !== 6) || s.match(/[a-zA-Z]/g) ? false : true;
}

console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution('10e1'));
console.log(solution('0x16'));
