// 학급 회장(해쉬)

function solution(s) {
  let answer;
  let map = new Map();

  for (let x of s) {
    if (map.has(x)) {
      // Map 객체의 값을 변경할 때는 get 함수를 이용하여 values를 가져와 변경한 후 다시 set 하면 된다.
      map.set(x, map.get(x) + 1);
    } else map.set(x, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of map) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
