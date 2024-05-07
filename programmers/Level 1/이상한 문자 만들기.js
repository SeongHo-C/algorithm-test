function solution(s) {
  let answer = '';
  let current_idx = 0;

  for (const char of s) {
    if (char === ' ') {
      answer += ' ';
      current_idx = 0;
    } else {
      answer += current_idx % 2 ? char.toLowerCase() : char.toUpperCase();
      current_idx++;
    }
  }

  return answer;
}

console.log(solution('try hello world'));
