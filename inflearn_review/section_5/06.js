// 학급 회장(해쉬)
function solution(s) {
  let answer;
  const map = new Map();

  for (const alpha of s) {
    if (!map.has(alpha)) map.set(alpha, 1);
    else map.set(alpha, map.get(alpha) + 1);
  }

  answer = [...map].sort((a, b) => b[1] - a[1])[0][0];
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
