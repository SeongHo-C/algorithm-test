// 수 정렬하기(선택, 버블, 삽입 정렬)

const [N, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(arr) {
  let answer = arr;

  // 선택 정렬
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     let minIdx = i;
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[j] < arr[minIdx]) minIdx = j;
  //     }
  //     [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  //   }

  // 버블 정렬
  //   for (let i = 0; i < arr.length - 1; i++) {   // 1회전을 수행할 때마다 정렬이 확정되는 요소가 하나씩 증가
  //     for (let j = 0; j < arr.length - 1 - i; j++) { // j가 도는 범위는 하나씩 감소
  //       if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //     }
  //   }

  // 삽입 정렬
  for (let i = 1; i < arr.length; i++) {
    // 배열이 뒤로 밀리면 값이 달라지기 때문에 temp 변수에 저장
    let temp = arr[i];
    let j;

    for (j = i - 1; j >= 0; j--) {
      // 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여 arr[j]가 temp보다 크면 한 칸씩 뒤로 이동
      if (arr[j] > temp) arr[j + 1] = arr[j];
      else break;
    }

    // arr[j]가 temp보다 작아 break 문을 만나거나 for 문이 그대로 끝나는 경우
    // temp가 자신의 위치를 찾은 것이므로 arr[j + 1]에 temp를 저장
    arr[j + 1] = temp;
  }

  return answer.join('\n');
}

console.log(solution(arr));
