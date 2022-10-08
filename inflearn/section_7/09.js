// 결혼식

function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  //   let s = times.map((time) => time[0]).sort((a, b) => a - b);
  //   let e = times.map((time) => time[1]).sort((a, b) => a - b);
  //   let se = [];
  //   let p1 = (p2 = cnt = 0);

  //   while (p1 < s.length && p2 < e.length) {
  //     if (s[p1] === e[p2] || s[p1] > e[p2]) {
  //       se.push('e');
  //       p2++;
  //     } else {
  //       se.push('s');
  //       p1++;
  //     }
  //   }

  //   if (p1 === s.length) {
  //     while (p2 < e.length) {
  //       se.push('e');
  //       p2++;
  //     }
  //   } else {
  //     while (p1 < e.length) {
  //       se.push('s');
  //       p1++;
  //     }
  //   }

  //   for (let x of se) {
  //     if (x === 's') cnt++;
  //     else cnt--;
  //     answer = Math.max(answer, cnt);
  //   }
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], 's']);
    T_line.push([x[1], 'e']);
  }

  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === 's') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
