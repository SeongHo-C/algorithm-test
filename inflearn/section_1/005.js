// 최솟값 구하기

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  // for(let i=0; i<arr.length; i++){
  //     if(arr[i]<min) min=arr[i];
  // }
  arr.map((num) => {
    min = num < min ? num : min;
  });
  answer = min;

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
