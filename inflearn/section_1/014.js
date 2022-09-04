// 가장 긴 문자열

function solution(s) {
  let answer = '',
    max = Number.MIN_SAFE_INTEGER;

  for (let x of s) {
    if (max < x.length) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
