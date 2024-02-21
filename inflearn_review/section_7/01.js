// 선택 정렬
function solution(arr) {
  const answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
