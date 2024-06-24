function solution(name, yearing, photo) {
  let result;
  const map = new Map();

  name.forEach((val, idx) => map.set(val, yearing[idx]));

  result = photo.map((names) => names.reduce((sum, name) => sum + (map.get(name) || 0), 0));

  return result;
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);
console.log(
  solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ]
  )
);
console.log(
  solution(['may', 'kein', 'kain', 'radi'], [5, 10, 1, 3], [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']])
);
