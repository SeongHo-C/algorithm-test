function solution(s) {
  const len = s.length;
  const mid = Math.floor(len / 2);

  return len % 2 ? s.slice(mid, mid + 1) : s.slice(mid - 1, mid + 1);
}

console.log(solution('abcde'));
console.log(solution('qwer'));
