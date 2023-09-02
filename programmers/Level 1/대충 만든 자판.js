function solution(keymap, targets) {
  const answer = [];
  const map = {};

  // 한 문자를 작성하기 위해 최소 몇 번 눌러야 하는지 미리 체크
  for (const key of keymap) {
    key.split('').map((char, idx) => {
      map[char] = map[char] < idx + 1 ? map[char] : idx + 1;
    });
  }

  for (const target of targets) {
    answer.push(target.split('').reduce((pre, cur) => pre + map[cur], 0) || -1);
  }

  return answer;
}

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
