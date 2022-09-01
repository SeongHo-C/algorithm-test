// 문자 찾기

function solution(s, t) {
  let answer = 0;

  for (let x of s) {
    if (x === t) {
      answer++;
    }
  }
  //   answer = s.split(t).length - 1;

  return answer;
}

let str = 'COMPUTERPROGRAMMINGAR';
console.log(solution(str, 'R'));
