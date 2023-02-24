// 프린터 큐

const [testNum, ...test] = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

function solution(test) {
  const answer = [];

  for (let i = 0; i < test.length; i += 2) {
    const Q = [];
    const [N, M] = test[i].split(' ').map(Number);
    const importance = test[i + 1].split(' ').map(Number);
    let print = 0;

    importance.forEach((v, idx) => Q.push([idx, v]));

    while (true) {
      const max = Math.max(...importance);
      // 첫 번째 문서 확인
      const first = Q.shift();

      if (first[1] !== max) Q.push(first);
      else {
        // 남은 문서들 중 중요도가 가장 높은 문서 인쇄
        print++;

        // 몇 번째로 인쇄되었는지 궁금한 문서가 맞는지 확인
        if (first[0] === M) {
          answer.push(print);
          break;
        }
        importance.splice(importance.indexOf(max), 1);
      }
    }
  }

  return answer.join('\n');
}

console.log(solution(test));
