// 장난꾸러기 현수
function solution(arr) {
  const answer = [];
  const sortedArr = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) answer.push(i + 1);
  }

  return answer.join(' ');
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
