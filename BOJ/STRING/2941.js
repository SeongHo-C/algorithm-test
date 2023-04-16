// 크로아티아 알파벳

const str = require('fs').readFileSync('input.txt').toString().trim();

function solution(str) {
  let answer = 0;
  const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

  croatia.forEach((alpha) => {
    // 동적으로 정규식 생성(/alpha/g)
    const regex = new RegExp(`${alpha}`, 'g');
    // 문자열에서 해당 변수가 몇번 쓰였는지 확인
    const arr = str.match(regex) || [];
    answer += arr.length;
    // 문자열에서 해당 변수를 공백으로 교체하여 새로운 알파벳이 생성되는 것을 방지!
    str = str.replace(regex, ' ');
  });

  // str.replaceAll(' ', '').length;
  answer += str.split('').filter((x) => x !== ' ').length;
  return answer;
}

console.log(solution(str));
