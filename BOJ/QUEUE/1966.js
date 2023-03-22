// 프린터 큐

const [T, ...testcases] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(testcases) {
  const answer = [];

  for (let i = 0; i < testcases.length; i += 2) {
    const [N, M] = testcases[i].split(' ').map(Number);
    const importance = testcases[i + 1].split(' ').map(Number);
    const Queue = importance.map((v, i) => [i, v]);

    let max = Math.max(...importance);
    let print = 0;
    while (true) {
      const firstElem = Queue.shift(); // 가장 앞에 있는 문서의 '중요도' 확인

      if (firstElem[1] === max) {
        // 나머지 문서들 중 중요도가 가장 높은 문서
        print++;
        if (firstElem[0] === M) {
          // 궁금한 문서인지 확인
          answer.push(print);
          break;
        }
        importance.splice(importance.indexOf(max), 1); // 새로운 max를 구하기 위해 인쇄한 문서 제거(splice 사용)
        max = Math.max(...importance); // 새로운 max 할당
      } else {
        Queue.push(firstElem); // Queue의 가장 뒤에 재배치
      }
    }
  }

  return answer.join('\n');
}

console.log(solution(testcases));
