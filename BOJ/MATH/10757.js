// 큰 수 A+B

const [A, B] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ');

// function solution(A, B) {
//   const answer = [];

//   const maxLen = Math.max(A.length, B.length);
//   let carry = 0;

//   for (let i = 0; i < maxLen; i++) {
//     const numA = Number(A[A.length - 1 - i]) || 0;
//     const numB = Number(B[B.length - 1 - i]) || 0;
//     const sum = numA + numB + carry;

//     if (sum >= 10) {
//       carry = Math.floor(sum / 10);
//       answer.push(sum % 10);
//     } else {
//       carry = 0;
//       answer.push(sum);
//     }
//   }

//   carry > 0 && answer.push(carry);
//   return answer.reverse().join('');
// }

// BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체이다. (임의의 정밀도)
// BigInt를 출력할 때는 정수 리터럴의 뒤에 n을 없애기 위해 String으로 변환하여 출력해야 한다.
function solution(A, B) {
  let answer;
  const numA = BigInt(A);
  const numB = BigInt(B);

  answer = String(numA + numB);
  return answer;
}

console.log(solution(A, B));
