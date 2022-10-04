// LRU

function solution(size, arr) {
  // let answer = Array.from({ length: size }, () => 0);

  // arr.forEach((data) => {
  //   let tmp = data;
  //   let i;

  //   // Cashe Hit
  //   if (answer.includes(tmp)) {
  //     let index = answer.indexOf(tmp);
  //     // 해당 작업 앞에 있는 작업은 한 칸 뒤로 밀리고, 해당 작업은 캐시의 맨 앞에 위치
  //     for (i = index - 1; i >= 0; i--) {
  //       answer[i + 1] = answer[i];
  //     }
  //   }
  //   // Cashe Miss
  //   else {
  //     // 모든 작업이 뒤로 밀리고, 해당 작업은 캐시의 맨 앞에 위치
  //     for (i = size - 2; i >= 0; i--) {
  //       answer[i + 1] = answer[i];
  //     }
  //   }
  //   answer[i + 1] = tmp;
  // });

  // arr.forEach((x) => {
  //   let pos = -1;
  //   for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
  //   if (pos === -1) {
  //     for (let i = size - 1; i >= 1; i--) {
  //       answer[i] = answer[i - 1];
  //     }
  //   } else {
  //     for (let i = pos; i >= 1; i--) {
  //       answer[i] = answer[i - 1];
  //     }
  //   }
  //   answer[0] = x;
  // });

  // 내장함수 사용
  let answer = [];

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
