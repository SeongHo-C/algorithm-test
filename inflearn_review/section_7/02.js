// 버블 정렬
function solution(arr) {
  const answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return answer.join(' ');
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
