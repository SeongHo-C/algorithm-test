// 회의실 배정

function solution(meeting) {
  let answer = 0;

  // 회의가 빨리 끝나야 뒤에 더 많은 기회가 생김!
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let endTime = 0;
  for (let i = 0; i < meeting.length; i++) {
    if (meeting[i][0] >= endTime) {
      answer++;
      endTime = meeting[i][1];
    }
  }

  return answer;
}

let arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
