// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
function compareMaps(sMap, tMap) {
  if (sMap.size !== tMap.size) return false;
  for (const [key, value] of sMap) {
    if (!tMap.has(key) || tMap.get(key) !== value) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  const tLen = t.length;
  const sMap = new Map();
  const tMap = new Map();

  for (const alpha of t) {
    if (tMap.has(alpha)) tMap.set(alpha, tMap.get(alpha) + 1);
    else tMap.set(alpha, 1);
  }

  for (let i = 0; i < tLen - 1; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = tLen - 1; rt < s.length; rt++) {
    if (sMap.has(s[rt])) sMap.set(s[rt], sMap.get(s[rt]) + 1);
    else sMap.set(s[rt], 1);

    if (compareMaps(sMap, tMap)) answer++;

    sMap.set(s[lt], sMap.get(s[lt]) - 1);
    if (sMap.get(s[lt]) === 0) sMap.delete(s[lt]);
    lt++;
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
