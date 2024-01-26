// 아나그램(해쉬)
function solution(str1, str2) {
  let answer = 'YES';
  const map = new Map();

  for (const alpha of str1) {
    if (map.has(alpha)) map.set(alpha, map.get(alpha) + 1);
    else map.set(alpha, 1);
  }

  for (const alpha of str2) {
    if (map.has(alpha) && map.get(alpha) !== 0) map.set(alpha, map.get(alpha) - 1);
    else answer = 'NO';
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACa';
console.log(solution(a, b));
