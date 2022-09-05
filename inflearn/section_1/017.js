// 중복단어제거

function solution(s) {
  let answer;

  for (let i = 0; i < s.length; i++) {
    answer = s.filter((str, i) => {
      return i === s.indexOf(str);
    });
  }

  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
