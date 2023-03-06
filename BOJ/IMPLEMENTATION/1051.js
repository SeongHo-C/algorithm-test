// 숫자 정사각형

const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
const [NM, ...Rectangle] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);
function solution(Rec) {
  let answer = 1,
    start = 0,
    len = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      start = Rec[i][j]; // 정사각형 왼쪽 위에 꼭짓점(기준점)을 임의로 정한다.
      for (let k = j + 1; k < M; k++) {
        if (Rec[i][k] === start) {
          // 행을 기준으로 start와 같은 값이 있다면
          len = k - j + 1; // 변의 길이를 구한다.
          if (
            i + len - 1 < N && // 기준점에서 y축으로 변의 길이만큼 이동했을 때 직사각형을 벗어나지 않고
            Rec[i + len - 1][j] === start && // 왼쪽 아래 꼭짓점에 쓰여 있는 수가 start와 같고
            Rec[i + len - 1][k] === start // 오른쪽 아래 꼭짓점에 쓰여 있는 수가 start와 같다면
          ) {
            const area = len * len; // 정사각형의 넓이를 구하여
            answer = Math.max(answer, area); // 가장 큰 정사각형을 찾는다.
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution(Rectangle));
