// 최대점수 구하기(냅색 알고리즘)
function solution(m, arr) {
  let answer = 0;
  const dy = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    const [score, time] = arr[i];
    // 중복 적용을 피하기 위해 뒤에서 시작
    for (let j = m; j >= time; j--) {
      dy[j] = Math.max(dy[j], dy[j - time] + score);
    }
  }

  answer = dy[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
