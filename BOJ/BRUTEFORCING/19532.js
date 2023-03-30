// 수학은 비대면강의입니다

const [a, b, c, d, e, f] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// 수현이는 연립방정식을 풀 시간이 없었다. (가능한 모든 값을 대입)
function solution() {
  let answer;

  for (let x = -999; x < 1000; x++) {
    for (let y = -999; y < 1000; y++) {
      const firstCalc = a * x + b * y;
      const secondCalc = d * x + e * y;

      if (firstCalc === c && secondCalc === f) {
        answer = `${x} ${y}`;
        break;
      }
    }
    if (answer) break;
  }

  return answer;
}

console.log(solution());
