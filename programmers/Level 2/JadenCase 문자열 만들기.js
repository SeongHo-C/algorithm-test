function solution(s) {
  let answer = '';
  const lowered_s = s.toLowerCase();
  let prev_alpha = ' ';

  for (const alpha of lowered_s) {
    if (prev_alpha === ' ' && alpha !== ' ') {
      answer += alpha.toUpperCase();
    } else answer += alpha;

    prev_alpha = alpha;
  }

  return answer;
}

console.log(solution('3people unFollowed me'));
console.log(solution('for the last week'));
