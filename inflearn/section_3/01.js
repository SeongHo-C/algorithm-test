// 회문문자열

function solution(s) {
  let answer = 'YES';

  s = s.toUpperCase();
  if (s !== s.split('').reverse().join('')) answer = 'NO';

  // 직접 비교
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - (i + 1)]) return 'NO';
  }

  return answer;
}

let str = 'goooG';
console.log(solution(str));
