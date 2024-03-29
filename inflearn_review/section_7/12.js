// 마구간 정하기(결정알고리즘)
function count(stable, dist) {
  let cnt = 1;
  let point = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - point >= dist) {
      point = stable[i];
      cnt++;
    }
  }

  return cnt;
}

function solution(c, stable) {
  let answer;
  let lt = 1;
  let rt = stable[stable.length - 1];

  stable.sort((a, b) => a - b);

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
