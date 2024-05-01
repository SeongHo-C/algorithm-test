function solution(data) {
  const [n, m] = data.split(' ').map(Number);
  const row = '*'.repeat(n);

  for (let i = 0; i < m; i++) {
    console.log(row);
  }
}

solution('5 3');
