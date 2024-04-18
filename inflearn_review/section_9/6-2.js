// 섬나라 아일랜드(BFS 활용)
function solution(board) {
  let answer = 0;
  const n = board.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        queue.push([i, j]);
        answer++;
      }

      while (queue.length) {
        const [x, y] = queue.shift();
        board[x][y] = 0;

        for (let k = 0; k <= 7; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 1) {
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
