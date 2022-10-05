// 장난꾸러기 현수

function solution(arr) {
  let answer = [];
  let hyeonsu;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > arr[i + 1]) {
  //       answer.push(i + 1);
  //       hyeonsu = arr[i];
  //       break;
  //     }
  //   }
  //   arr.sort((a, b) => a - b);
  //   answer.push(arr.indexOf(hyeonsu) + 1);

  //   let sortArr = Array.from(arr).sort((a, b) => a - b);
  let sortArr = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer;
}

let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
