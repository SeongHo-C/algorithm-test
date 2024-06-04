function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

function solution(arr) {
  // 이전 요소에 대한 계산의 반환 값을 필요로 할 때, `reduce()` 메서드 활용
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
