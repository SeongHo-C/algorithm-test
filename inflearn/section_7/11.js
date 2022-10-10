// 뮤직 비디오

function count(songs, capacity) {
  let dvdCnt = 1;
  let sum = 0;

  for (let x of songs) {
    if (sum + x <= capacity) {
      sum += x;
    } else {
      dvdCnt++;
      sum = x;
    }
  }

  return dvdCnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((sum, song) => (sum += song));

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

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
