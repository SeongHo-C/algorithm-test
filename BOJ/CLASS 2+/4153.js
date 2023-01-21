// 직각삼각형

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const [x, y, z] = arr[i]
      .split(' ')
      .sort((a, b) => a - b)
      .map(Number);

    if (x ** 2 + y ** 2 === z ** 2) answer.push('right');
    else answer.push('wrong');
  }

  return answer.join('\n');
}

console.log(solution(input));
