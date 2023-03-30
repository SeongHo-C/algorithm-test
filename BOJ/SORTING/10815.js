// 숫자 카드

const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

// 이분 탐색 알고리즘
// const cardA = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// cardA를 반복하고 각 숫자에 대해 해시 테이블의 해당 속성을 true로 설정
const cardA = input[1].split(' ').reduce((obj, num) => {
  obj[num] = true;
  return obj;
}, {});

const M = Number(input[2]);
const cardB = input[3].split(' ').map(Number);

// 이분 탐색 알고리즘을 사용하기 위해서는 배열이 반드시 정렬되있어야 한다.
// function binarySearch(num) {
//   let lt = 0;
//   let rt = cardA.length - 1;

//   while (lt <= rt) {
//     let mid = Math.floor((lt + rt) / 2);

//     if (cardA[mid] > num) rt = mid - 1;
//     else if (cardA[mid] < num) lt = mid + 1;
//     else return true;
//   }

//   return false;
// }

// function solution() {
//   const answer = [];

//   for (let x of cardB) {
//     const result = binarySearch(x);

//     answer.push(result ? 1 : 0)
//   }

//   return answer.join(' ');
// }

// 해시 테이블을 사용하여 cardA에 있는 각 숫자의 존재를 추적
function solution() {
  const answer = [];

  for (let x of cardB) {
    answer.push(cardA[x] ? 1 : 0);
  }

  return answer.join(' ');
}

console.log(solution());
