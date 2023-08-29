function solution(wallpaper) {
  const lux = [];
  const luy = [];
  const rdx = [];
  const rdy = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === '#') {
        lux.push(i);
        luy.push(j);
        rdx.push(i + 1);
        rdy.push(j + 1);
      }
    }
  }

  return [
    Math.min(...lux),
    Math.min(...luy),
    Math.max(...rdx),
    Math.max(...rdy),
  ];
}

console.log(solution(['.#...', '..#..', '...#.']));
