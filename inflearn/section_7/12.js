// 마구간 정하기

function count(stable, dist) {
  let cnt = 1;
  //첫 번째 좌표에 말 배치
  horse = stable[0];

  for (let i = 1; i < stable.length; i++) {
    // 해당 위치에서 말의 처음 위치를 뺏는데 현재 정해진 가장 가까운 말 사이의 거리(dist)보다 크거나 같다면 cnt++
    // 말의 위치를 해당 위치로 변경하여 말을 더 배치할 수 있는지 계속해서 비교
    if (stable[i] - horse >= dist) {
      cnt++;
      // 말 재배치
      horse = stable[i];
    }
  }

  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  // lt - 말 사이의 최소 거리, rt - 말 사이의 최대 거리
  let lt = 1,
    rt = stable[stable.length - 1];

  while (lt <= rt) {
    // mid - 가장 가까운 말 사이의 거리
    let mid = Math.floor((lt + rt) / 2);
    // 배치할 수 있는 말의 개수가 c보다 크거나 같다면 lt의 크기를 늘려서 탐색
    // c보다 작다면 rt의 크기를 줄여서 탐색
    if (count(stable, mid) >= c) {
      answer = mid;
      // 더 좋은 답을 찾기 위해서
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
