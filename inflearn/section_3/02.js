// 유효한 팰린드롬

function solution(s) {
  let answer = 'YES';
  let str = '';

  // s = s.toUpperCase();
  // for (let x of s) {
  //   let c = x.charCodeAt();
  //   if (c >= 65 && c < 91) {
  //     str += x;
  //   }
  // }

  // let len = str.length;
  // for (let i = 0; i < Math.floor(len / 2); i++) {
  //   if (str[i] !== str[len - (i + 1)]) return 'NO';
  // }

  s = s.toUpperCase().replace(/[^A-Z]/g, '');
  if (s.split('').reverse().join('') !== s) return 'NO';

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuf';
console.log(solution(str));
