// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
function compareMap(sMap, tMap) {
  let result = true;

  if (sMap.size !== tMap.size) return false;
  for (const [key, value] of sMap) {
    if (!tMap.has(key) || tMap.get(key) !== value) return false;
  }
  console.log(result);
  return result;
}

function solution(s, t) {
  let answer = 0;
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < t.length; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);
  }

  for (const alpha of t) {
    if (tMap.has(alpha)) tMap.set(alpha, tMap.get(alpha) + 1);
    else tMap.set(alpha, 1);
  }
  if (compareMap(sMap, tMap)) answer++;

  let lt = 0;
  for (let rt = t.length; rt < s.length; rt++) {
    if (sMap.has(s[rt])) sMap.set(s[rt], sMap.get(s[rt]) + 1);
    else sMap.set(s[rt], 1);

    sMap.set(s[lt], sMap.get(s[lt]) - 1);
    if (sMap.get(s[lt]) === 0) sMap.delete(s[lt]);
    lt++;

    if (compareMap(sMap, tMap)) answer++;
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
