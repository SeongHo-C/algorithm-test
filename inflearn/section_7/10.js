// 이분 검색

function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);

    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
