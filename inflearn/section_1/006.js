// 홀수

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  // for (let x of arr) {
  //   if (x % 2 === 1) {
  //     sum += x;
  //     if (x < min) min = x;
  //   }
  // }
  arr.map((num) => {
    if (num % 2 === 1) {
      sum += num;
      min = num < min ? num : min;
    }
  });

  answer.push(sum);
  answer.push(min);

  return answer[0] + '\n' + answer[1];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
