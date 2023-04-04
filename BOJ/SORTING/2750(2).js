// 수 정렬하기(퀵 정렬)

const [N, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// 퀵 정렬
// Basic Quick Sort
function quickSort(arr) {
  // array의 길이가 1 이하(기본 사례에 도달)인 경우 해당 배열을 그대로 return
  if (arr.length <= 1) {
    return arr;
  }

  // 배열의 첫 번째 요소를 pivot으로 설정
  const pivot = arr[0];
  // left와 right 배열을 새로 생성
  const left = [];
  const right = [];

  // 첫 번째 요소 다음 요소부터 순회하며 pivot과 값을 비교하여 left 배열, right 배열에 데이터 삽입
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  // 하위 배열에 대해 다시 재귀 호출을 하면서 세 배열을 합쳐준다.
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));

// In Place Quick Sort
function quickSort(arr, left = 0, right = arr.length - 1) {
  // 현재 배열의 요소가 하나인 경우
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  // 가운데 요소를 pivot(기준 요소)으로 설정
  const pivot = arr[mid];
  // 분할하는 과정
  // 리턴받은 partition 인덱스를 기준으로 배열을 왼쪽 배열, 오른쪽 배열로 나눠서 다시 재귀 호출을 한다.
  const partition = divide(arr, left, right, pivot);

  // 왼쪽 배열
  quickSort(arr, left, partition - 1);
  // 오른쪽 배열
  quickSort(arr, partition, right);

  return arr.join('\n');
}

// 왼쪽과 오른쪽 인덱스를 이동하며 값을 교환하고 partition으로 설정할 인덱스를 리턴받는다.
function divide(arr, left, right, pivot) {
  while (left <= right) {
    // pivot보다 크거나 같은 요소를 찾을 때까지 왼쪽에서 오른쪽으로 이동
    while (arr[left] < pivot) {
      left++;
    }

    // pivot보다 작거나 같은 요소를 찾을 때까지 오른쪽에서 왼쪽으로 이동
    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      // 다음 요소 탐색
      left++;
      right--;
    }
  }

  // left 왼쪽에는 pivot보다 작거나 같은 요소들
  return left;
}

// 배열의 요소가 1개라면 정렬을 할 필요 없다.
console.log(N === 1 ? arr.join('') : quickSort(arr));
