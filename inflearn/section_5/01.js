// 두 배열 합치기

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  // 투 포인터
  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  //   for (let x of arr1) {
  //     answer.push(x);
  //   }
  //   for (let x of arr2) {
  //     answer.push(x);
  //   }
  //   answer.sort((a, b) => a - b);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
