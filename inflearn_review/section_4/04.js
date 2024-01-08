// 졸업 선물
function solution(m, product) {
  let answer = 0;
  const n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let budget = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      budget -= product[j][0] + product[j][1];
      if (budget >= 0) cnt++;
      else break;
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [2, 12],
  [8, 4],
  [6, 6],
  [6, 7],
];
console.log(solution(33, arr));
