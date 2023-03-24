// 달팽이는 올라가고 싶다

const [A, B, V] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(A, B, V) {
  let answer = 0;

  // 0.*일도 하루에 해당한다. 2 1 5 - 3까지 가는데 딱 3일, 5 1 6 - 1까지 가는데 0.25일
  answer = Math.ceil((V - A) / (A - B)) + 1;

  return answer;
}

// 시간 초과
// function solution(A, B, V) {
//   let day = 0;
//   let goUp = 0;

//   while (true) {
//     // 하루 시작
//     day++;

//     // 낮에 올라가는 과정
//     goUp += A;
//     if (goUp >= V) break;

//     // 밤에 미끄러지는 과정
//     goUp -= B;
//   }

//   return day;
// }

console.log(solution(A, B, V));
