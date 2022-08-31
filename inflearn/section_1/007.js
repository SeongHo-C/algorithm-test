// 10부제

function solution(day, arr) {
  let answer = 0;

  arr.map((num) => {
    if (num % 10 === day) answer++;
  });

  // arr.map((num) => {
  //   if (day == String(num).split('')[1]) {
  //     answer += 1;
  //   }
  // });

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
