// 분수찾기

const num = require('fs').readFileSync('input.txt').toString().trim();

function solution(num) {
  let answer;
  let isOdd = true;

  let sum = 0;
  let i = 1;
  // 범위를 모르기 때문에 while문 사용
  while (true) {
    // 해당 영역으로 진입했을 경우 break
    if (sum + i >= num) break;

    // 해당 영역으로 진입하기 위해 i 증가
    sum += i++;
    isOdd = !isOdd;
  }

  // 홀수일 경우 i / 1 부터 시작
  const mainNum = i;
  // 분자, 분모
  let molecule, denominator;
  molecule = isOdd ? mainNum - (num - (sum + 1)) : 1 + (num - (sum + 1));
  denominator = mainNum + 1 - molecule;

  answer = `${molecule}/${denominator}`;
  return answer;
}

console.log(solution(num));
