// 중복문자제거

function solution(s) {
  let answer = '';

  //   for (let x of s) {
  //     if (!answer.includes(x)) {
  //       answer += x;
  //     }
  //   }
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) {
      answer += s[i];
    }
  }

  return answer;
}

console.log(solution('ksekkset'));
