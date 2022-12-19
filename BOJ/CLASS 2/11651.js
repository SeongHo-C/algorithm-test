// 좌표 정렬하기 2

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [N, ...arr] = input;
  const chArr = arr.map((x) => x.split(' ').map((y) => Number(y)));

  chArr.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    else if (a[1] === b[1] && a[0] > b[0]) return 1;
    else return -1;
  });

  const answer = chArr.map((x) => x[0] + ' ' + x[1]).join('\n');
  return answer;
}

console.log(solution(input));
