// 최대 부분 증가수열
function solution(arr) {
  let answer = 0;
  const dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;

  // dy[i]는 arr[i]가 증가수열의 마지막 숫자라고 가정했을 때 최대 부분 증가수열의 길이
  for (let i = 1; i < arr.length; i++) {
    let max = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && max < dy[j]) max = dy[j];
    }

    dy[i] = max + 1;
  }

  answer = Math.max(...dy);
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
