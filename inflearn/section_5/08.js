// 모든 아나그램 찾기

// Map 객체 비교
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();

  // t 문자열 Map 객체에 저장
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  // 슬라이딩 윈도우 세팅
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  // // s 문자열 초기 윈도우
  // let str = '';
  // let tlen = t.length;
  // let slen = s.length;

  // // 슬라이딩 윈도우 이동하면서 Map 객체에 저장
  // for (let i = 0; i < slen - 2; i++) {
  //   sH.clear();
  //   str = s.slice(i, i + tlen);

  //   for (let x of str) {
  //     if (sH.has(x)) {
  //       sH.set(x, sH.get(x) + 1);
  //     } else {
  //       sH.set(x, 1);
  //     }
  //   }

  //   if (compareMaps(sH, tH)) answer++;
  // }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
