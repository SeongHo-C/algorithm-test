// 자릿수의 합
function solution(n, arr) {
  let answer = (max = Number.MIN_SAFE_INTEGER);

  for (const num of arr) {
    const sum = String(num)
      .split('')
      .reduce((a, b) => a + Number(b), 0);

    if (sum === max) answer = Math.max(answer, num);
    else if (sum > max) {
      answer = num;
      max = sum;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
