// 삼각형 판별하기

function solution(a, b, c) {
  let answer = 'YES',
    max;
  let sum = a + b + c;

  if (a < b) max = b;
  else max = a;
  if (max < c) max = c;

  if (sum - max <= max) {
    answer = 'NO';
  }

  // 내가 짠 코드
  // if (max === a) {
  //   answer = b + c > max ? 'YES' : 'NO';
  // } else if (max === b) {
  //   answer = a + c > max ? 'YES' : 'NO';
  // } else {
  //   answer = a + b > max ? 'YES' : 'NO';
  // }

  return answer;
}

console.log(solution(13, 33, 17));
