function solution(s) {
  let transform_num = 0;
  let zero_num = 0;

  function DFS(str) {
    if (str === '1') return;
    else {
      transform_num++;
      zero_num += (str.match(/0/g) || []).length;
      str = str.replace(/0/g, '').length.toString(2);
      DFS(str);
    }
  }
  DFS(s);

  return [transform_num, zero_num];
}

console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));
