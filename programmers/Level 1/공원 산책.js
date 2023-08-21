function solution(park, routes) {
  let [currentX, currentY] = [0, 0];
  const [W, H] = [park[0].length, park.length];
  const directions = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  for (let i = 0; i < H; i++) {
    if (park[i].includes('S')) {
      [currentX, currentY] = [i, park[i].indexOf('S')];
      break;
    }
  }

  for (const route of routes) {
    let [op, n] = route.split(' ');
    let [nx, ny] = [currentX, currentY];

    for (let i = 0; i < n; i++) {
      [nx, ny] = [nx + directions[op][0], ny + directions[op][1]];

      if (nx < 0 || ny < 0 || nx >= H || ny >= W || park[nx][ny] === 'X') {
        [nx, ny] = [currentX, currentY];
        break;
      }
    }
    [currentX, currentY] = [nx, ny];
  }

  return [currentX, currentY];
}

const park = ['SOO', 'OOO', 'OOO'];
const routes = ['E 2', 'S 2', 'W 1'];
console.log(solution(park, routes));
