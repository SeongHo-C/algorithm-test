function solution(s) {
  const result = [];
  const map = new Map();

  s.split('').forEach((alpha, idx) => {
    const nearIdx = map.get(alpha);

    if (nearIdx >= 0) result[idx] = idx - nearIdx;
    else result[idx] = -1;

    map.set(alpha, idx);
  });

  return result;
}

console.log(solution('banana'));
console.log(solution('foobar'));
