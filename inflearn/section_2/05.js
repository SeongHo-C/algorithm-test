// 등수 구하기

function solution(arr) {
  let n = arr.length;
  let answer = new Array(n).fill(1);
  //   let answer = Array.from({length: n}, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }

  return answer;
}

let arr = [89, 89, 92, 100, 76];
console.log(solution(arr));
