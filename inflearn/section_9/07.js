// 섬나라 아일랜드(BFS)
// 영역 탐색(DFS, BFS)

function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // 먼저 0으로 체크한 후 큐에 추가
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;

        while (queue.length) {
          let [x, y] = queue.shift();

          for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= n || ny >= n || board[nx][ny] === 0)
              continue;

            board[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
