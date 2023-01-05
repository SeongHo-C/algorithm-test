// 나이순 정렬

const [N, ...arr] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

function solution(arr) {
  let answer;

  const member = arr.map((member) => member.split(' '));

  answer = member
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map((member) => `${member[0]} ${member[1]}`)
    .join('\n');
  return answer;
}

console.log(solution(arr));
