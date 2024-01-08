// K번째 큰 수
function solution(n, k, card) {
  let answer;
  const note = [];

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        note.push(card[i] + card[j] + card[k]);
      }
    }
  }

  answer = [...new Set(note.sort((a, b) => b - a))][k - 1] || -1;
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
