// 자릿수의 합

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  //   arr.forEach((x) => {
  //     let sum = String(x)
  //       .split('')
  //       .reduce((a, b) => a + Number(b), 0);
  //     if (max < sum) {
  //       max = sum;
  //       answer = x;
  //     } else if (max === sum) {
  //       if (answer < x) answer = x;
  //     }
  //   });
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (max < sum) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      if (answer < x) answer = x;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
