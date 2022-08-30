// 최솟값 구하기

function solution(arr) {
  // 스프레드 연산자?
  let answer;

  answer = Math.min(...arr);

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
