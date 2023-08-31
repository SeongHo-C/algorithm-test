function solution(n, m, section) {
  let answer = 0;
  const wall = Array.from({ length: n + 1 }, () => 0);

  section.forEach((x) => {
    wall[x] = 1;
  });

  section.forEach((x) => {
    if (wall[x]) {
      wall.fill(0, x, x + m);
      answer++;
    }
  });

  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
