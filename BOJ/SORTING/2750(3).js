// 수 정렬하기(병합 정렬)

const [N, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// 병합 정렬
// 정렬된 왼쪽과 오른쪽 배열을 받아서 하나로 합치는 순수한 함수
function merge(left, right) {
  const result = [];

  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }

  return [...result, ...left, ...right];
}

function mergeSort(arr) {
  // ending condition: length === 1인 배열(기본 배열에 도달)이 들어올 때, 정렬이 끝난다.
  if (arr.length === 1) return arr;

  // 2로 나누고 내림을 해야 length가 2일 때도 안전하게 배열을 slice할 수 있다.
  const middleIdx = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIdx);
  const right = arr.slice(middleIdx);

  // 재귀로 계속해서 반으로 나누면서 length가 1이 될 때까지 쪼개고,
  // 거꾸로 올라오면서 순수한 함수인 merge에 인자로 넣어서 다시 병합되어 최종값을 리턴한다.
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr).join('\n'));
