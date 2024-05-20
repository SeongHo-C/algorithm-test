function solution(n, arr1, arr2) {
  const full_map = [];

  const arr1_map = arr1.map((num) => num.toString(2).padStart(n, '0'));
  const arr2_map = arr2.map((num) => num.toString(2).padStart(n, '0'));

  for (let i = 0; i < n; i++) {
    let one_side = '';
    for (let j = 0; j < n; j++) {
      if (parseInt(arr1_map[i][j]) || parseInt(arr2_map[i][j])) one_side += '#';
      else one_side += ' ';
    }
    full_map[i] = one_side;
  }

  return full_map;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
