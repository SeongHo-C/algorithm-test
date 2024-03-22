// 좌표 정렬
function solution(arr) {
  let answer = '';

  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  arr.forEach((elem) => (answer += `${elem[0]} ${elem[1]}\n`));
  return answer.trimEnd();
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
