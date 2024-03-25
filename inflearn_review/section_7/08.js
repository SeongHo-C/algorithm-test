// 회의실 배정
function solution(meeting) {
  let answer = 0;
  let endTime = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  meeting.forEach(([start, end]) => {
    if (endTime <= start) {
      answer++;
      endTime = end;
    }
  });

  return answer;
}

let arr = [
  [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ],
];
console.log(solution(arr));
