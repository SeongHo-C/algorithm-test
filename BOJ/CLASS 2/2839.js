// 설탕 배달

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString();

function solution(num) {
  let answer = [];
  let copyNum = num;

  // 5로 정확히 나누어 떨어질때가 봉지 개수가 더 적음!!
  if (num % 5 === 0) answer.push(num / 5);
  else if (num % 3 === 0) answer.push(num / 3);

  // 반례: 24(3 * 8 && 5 * 3 + 3 * 3)
  // 정확히 나누어 떨어질때와 안떨어질때 따로 구해야함!!
  for (let i = 1; i <= copyNum / 5; i++) {
    let num = copyNum;
    let cnt = i;
    num -= 5 * cnt;
    if (num % 3 === 0) {
      cnt += num / 3;
      answer.push(cnt);
    }
  }

  if (answer.length === 0) return -1;
  answer = Math.min(...answer);

  return answer;
}

console.log(solution(Number(input)));
