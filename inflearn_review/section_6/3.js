function solution(board, moves) {
  let answer = 0;
  const stack = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const picked = board[i][move - 1];
      board[i][move - 1] = 0;

      if (picked !== 0) {
        if (stack[stack.length - 1] === picked) {
          stack.pop();
          // 터트려져 사라진 인형의 개수 -> 2개씩 🧨
          answer += 2;
        } else {
          stack.push(picked);
        }

        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
