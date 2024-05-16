function solution(brown, yellow) {
  // 최소 세로 크기 → 3
  for (let h = 3; h <= yellow + 2; h++) {
    const w = (brown + yellow) / h;

    if ((w - 2) * (h - 2) === yellow) return [w, h];
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
