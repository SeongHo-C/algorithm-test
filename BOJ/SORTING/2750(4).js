// 수 정렬하기(힙 정렬)

const [N, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// 힙 정렬
function heapSort(arr) {
  const len = arr.length;

  for (let i = len - 1; i > 0; i--) {
    // 최대 힙 속성 구축(복원)
    heapify(arr, i);
    // 구축한 최대 힙의 루트 요소가 정렬되지 않은 마지막 요소보다 큰 경우 스왑
    if (arr[0] > arr[i]) [arr[0], arr[i]] = [arr[i], arr[0]];
  }

  return arr.join('\n');
}

function heapify(arr, lastIdx) {
  // 자식 노드 모두가 정렬이 안된 다음 부모 노드 찾기(현재 부모 노드의 정렬된 자식 노드를 건드리지 않기 위해)
  let idx = Math.floor(lastIdx / 2) - 1;

  while (idx >= 0) {
    const left = arr[idx * 2 + 1];
    const right = arr[idx * 2 + 2];

    if (left > right && arr[idx] < left)
      [arr[idx], arr[idx * 2 + 1]] = [left, arr[idx]];
    else if (right > left && arr[idx] < right)
      [arr[idx], arr[idx * 2 + 2]] = [right, arr[idx]];

    idx--;
  }
}

console.log(heapSort(arr));
