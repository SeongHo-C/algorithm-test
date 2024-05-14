function solution(sizes) {
  const sorted_sizes = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));
  let max_w = Number.MIN_SAFE_INTEGER;
  let max_h = Number.MIN_SAFE_INTEGER;

  sorted_sizes.forEach(([w, h]) => {
    if (max_w < w) max_w = w;
    if (max_h < h) max_h = h;
  });

  return max_w * max_h;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
