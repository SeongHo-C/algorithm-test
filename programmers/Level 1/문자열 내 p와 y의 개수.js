function solution(s) {
  let answer = true;
  s = s.toLowerCase();

  const p_num = s.split('p').length - 1;
  const y_num = s.split('y').length - 1;

  answer = p_num === y_num;
  return answer;
}

console.log(solution('pPoooyY'));
