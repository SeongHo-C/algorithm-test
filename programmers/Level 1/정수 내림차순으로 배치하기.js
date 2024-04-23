function solution(n) {
  const copy_n = n + '';

  return +copy_n.split('').sort().reverse().join('');
}

console.log(solution(118372));
