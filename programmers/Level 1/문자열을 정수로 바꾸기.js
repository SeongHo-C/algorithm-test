function solution(s) {
  // 명시적 타입 변환
  return Number(s);

  // 묵시적 타입 변환
  return s / 1;
  return +s;
}

console.log(solution('1234'));
console.log(solution('-1234'));
