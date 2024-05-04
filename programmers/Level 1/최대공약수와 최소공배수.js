function solution(n, m) {
  const n_divisor = [];
  const m_divisor = [];
  let common_divisor;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) n_divisor.push(i);
  }

  for (let i = 1; i <= m; i++) {
    if (m % i === 0) m_divisor.push(i);
  }

  common_divisor = n_divisor.filter((v) => m_divisor.includes(v));

  let [a, b] = [n, m];
  while (true) {
    if (a === b) break;
    else if (a < b) a += n;
    else b += m;
  }

  return [Math.max(...common_divisor), a];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
