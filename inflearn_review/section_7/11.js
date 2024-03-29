// 뮤직비디오(결정알고리즘)
function count(songs, capacity) {
  let cnt = 1;
  let sum = 0;

  for (const song of songs) {
    if (sum + song > capacity) {
      cnt++;
      sum = song;
    } else {
      sum += song;
    }
  }

  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs); // 최소 용량
  let rt = songs.reduce((a, b) => a + b); // 최대 용량

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
