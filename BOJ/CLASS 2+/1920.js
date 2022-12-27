// 수 찾기(이분 검색)

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

const N = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const M = input[3].split(' ').map(Number);

function binarySearch(target) {
  let start = 0;
  let end = N.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (N[mid] === target) return 1;
    else if (N[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return 0;
}

function solution(N, M) {
  const answer = [];

  for (let x of M) {
    answer.push(binarySearch(x));
  }

  return answer.join('\n');
}

console.log(solution(N, M));
