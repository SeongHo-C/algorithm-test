function solution(t, p) {
  let result = 0;
  let lt = 0;
  let rt = p.length;

  while (rt <= t.length) {
    if (t.slice(lt++, rt++) <= p) result++;
  }

  return result;
}

console.log(solution('3141592', '271'));
console.log(solution('500220839878', '7'));
console.log(solution('10203', '15'));
