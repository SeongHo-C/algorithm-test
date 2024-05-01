function solution(s) {
  const s_arr = s.split(' ');

  return `${Math.min(...s_arr)} ${Math.max(...s_arr)}`;
}

console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));
