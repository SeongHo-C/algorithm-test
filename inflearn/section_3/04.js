// 가장 짧은 문자거리

function solution(s, t) {
  let answer = [];
  let p = 1000;

  // e가 왼쪽에 있을 경우
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) p = 0;
    else p++;

    answer.push(p);
  }

  p = 1000;

  // e가 오른쪽에 있을 경우
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else p++;

    answer[i] = Math.min(answer[i], p);
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
