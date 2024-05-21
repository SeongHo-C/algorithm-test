function solution(array, commands) {
  return commands.map(([i, j, k]) => {
    const arr = array.slice(i - 1, j);
    arr.sort((a, b) => a - b);
    return arr[k - 1];
  });
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
