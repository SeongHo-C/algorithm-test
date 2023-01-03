// 좌표 정렬하기

const [N, ...arr] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

function solution(arr) {
  let answer = '';
  const xyArr = arr.map((x) => x.split(' ').map(Number));

  xyArr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  answer = xyArr.map((x) => x[0] + ' ' + x[1]).join('\n');

  return answer;
}

console.log(solution(arr));
